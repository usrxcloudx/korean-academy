import re
import json

def parse_options(opt_str_or_lines):
    # Match A. ... B. ... or pipe separated A. ... | B. ...
    # Could be multiple lines or pipe separated
    text = opt_str_or_lines if isinstance(opt_str_or_lines, str) else "\n".join(opt_str_or_lines)
    parts = re.split(r'(?:^|\s+|\|)\s*([A-D])\.\s*', text)
    options = []
    # parts: ['', 'A', 'optA', 'B', 'optB', ...]
    for i in range(1, len(parts), 2):
        letter = parts[i]
        val = parts[i+1].strip().rstrip('|').strip()
        options.append(val)
    if len(options) == 4:
        return options
    # Fallback splitting by lines
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    cleaned = []
    for l in lines:
        m = re.match(r'^[A-D]\.\s*(.*)', l)
        if m:
            cleaned.append(m.group(1).strip())
    return cleaned if len(cleaned) == 4 else options

def parse_correct_letter(ans_text):
    m = re.search(r'([A-D])', ans_text)
    if m:
        return ord(m.group(1).upper()) - ord('A')
    return 0

def parse_section(text, level_prefix, offset_start_unit=1):
    # Splits by "Bài X: ..."
    units_dict = {}
    pattern = r'Bài\s*(\d+)\s*:\s*([^\n]+)'
    splits = list(re.finditer(pattern, text))
    
    for i, match in enumerate(splits):
        unit_num = int(match.group(1))
        unit_title = match.group(2).strip()
        start = match.end()
        end = splits[i+1].start() if i + 1 < len(splits) else len(text)
        unit_body = text[start:end].strip()
        
        unit_id = f"{level_prefix}_u{unit_num}"
        exercises = []
        
        # Look for subsections: Từ vựng (어휘), Ngữ pháp (문법), Đọc hiểu (읽기)
        # 1. Từ vựng
        m_vocab = re.search(r'(?:Từ vựng|어휘)\s*(?:\([^)]+\))?:\s*(.*?)(?=(?:Ngữ pháp|문법)\s*(?:\([^)]+\))?:|$)', unit_body, re.S)
        if m_vocab:
            v_block = m_vocab.group(1).strip()
            # extract question, options, answer
            lines = v_block.split('\n')
            q_lines = []
            opt_lines = []
            ans_lines = []
            cur = 'q'
            for line in lines:
                l = line.strip()
                if not l: continue
                if l.startswith('Đáp án') or 'Đáp án đúng' in l or 'Đáp án:' in l:
                    cur = 'ans'
                    ans_lines.append(l)
                elif re.match(r'^[A-D]\.', l) or ('| B.' in l and 'A.' in l):
                    cur = 'opt'
                    opt_lines.append(l)
                elif cur == 'q':
                    q_lines.append(l)
                elif cur == 'opt':
                    opt_lines.append(l)
                elif cur == 'ans':
                    ans_lines.append(l)
            
            opts = parse_options("\n".join(opt_lines))
            ans_str = "\n".join(ans_lines)
            c_idx = parse_correct_letter(ans_str)
            exp = ans_str
            if '(' in ans_str and ')' in ans_str:
                exp_match = re.search(r'\((.*)\)', ans_str)
                if exp_match:
                    exp = exp_match.group(1).strip()
            
            exercises.append({
                "id": f"{unit_id}_wb1",
                "category": "어휘",
                "categoryLabel": "Luyện từ vựng (어휘)",
                "question": " ".join(q_lines),
                "options": opts,
                "correctIndex": c_idx,
                "explanation": exp
            })
            
        # 2. Ngữ pháp
        m_gram = re.search(r'(?:Ngữ pháp|문법)\s*(?:\([^)]+\))?:\s*(.*?)(?=(?:Đọc hiểu|읽기)\s*(?:[^\n:]*)?:|$)', unit_body, re.S)
        if m_gram:
            g_block = m_gram.group(1).strip()
            lines = g_block.split('\n')
            q_lines = []
            opt_lines = []
            ans_lines = []
            cur = 'q'
            for line in lines:
                l = line.strip()
                if not l: continue
                if l.startswith('Đáp án') or 'Đáp án đúng' in l or 'Đáp án:' in l:
                    cur = 'ans'
                    ans_lines.append(l)
                elif re.match(r'^[A-D]\.', l) or ('| B.' in l and 'A.' in l):
                    cur = 'opt'
                    opt_lines.append(l)
                elif cur == 'q':
                    q_lines.append(l)
                elif cur == 'opt':
                    opt_lines.append(l)
                elif cur == 'ans':
                    ans_lines.append(l)
            
            opts = parse_options("\n".join(opt_lines))
            ans_str = "\n".join(ans_lines)
            c_idx = parse_correct_letter(ans_str)
            exp = ans_str
            if '(' in ans_str and ')' in ans_str:
                exp_match = re.search(r'\((.*)\)', ans_str)
                if exp_match:
                    exp = exp_match.group(1).strip()
            
            exercises.append({
                "id": f"{unit_id}_wb2",
                "category": "문법",
                "categoryLabel": "Luyện ngữ pháp (문법)",
                "question": " ".join(q_lines),
                "options": opts,
                "correctIndex": c_idx,
                "explanation": exp
            })
            
        # 3. Đọc hiểu / Hội thoại
        m_read = re.search(r'(?:Đọc hiểu|읽기)\s*(?:[^\n:]*)?:\s*(.*?)$', unit_body, re.S)
        if m_read:
            r_block = m_read.group(1).strip()
            lines = r_block.split('\n')
            passage_lines = []
            q_lines = []
            opt_lines = []
            ans_lines = []
            cur = 'p'
            for line in lines:
                l = line.strip()
                if not l: continue
                if l.startswith('Đáp án') or 'Đáp án đúng' in l or 'Đáp án & Giải thích' in l or 'Đáp án:' in l:
                    cur = 'ans'
                    ans_lines.append(l)
                elif re.match(r'^[A-D]\.', l) or ('| B.' in l and 'A.' in l):
                    cur = 'opt'
                    opt_lines.append(l)
                elif l.startswith('Câu hỏi:'):
                    cur = 'q'
                    q_lines.append(re.sub(r'^Câu hỏi:\s*', '', l))
                elif cur == 'p':
                    passage_lines.append(l)
                elif cur == 'q':
                    q_lines.append(l)
                elif cur == 'opt':
                    opt_lines.append(l)
                elif cur == 'ans':
                    ans_lines.append(l)
            
            opts = parse_options("\n".join(opt_lines))
            ans_str = "\n".join(ans_lines)
            c_idx = parse_correct_letter(ans_str)
            exp = ans_str
            if '(' in ans_str and ')' in ans_str:
                exp_match = re.search(r'\((.*)\)', ans_str)
                if exp_match:
                    exp = exp_match.group(1).strip()
            
            passage_text = "\n".join(passage_lines) if passage_lines else None
            q_text = " ".join(q_lines) if q_lines else "Chọn câu trả lời hoặc cách diễn đạt phù hợp nhất."
            
            exercises.append({
                "id": f"{unit_id}_wb3",
                "category": "읽기",
                "categoryLabel": "Đọc hiểu & Hội thoại (읽기·회화)",
                "passage": passage_text,
                "question": q_text,
                "options": opts,
                "correctIndex": c_idx,
                "explanation": exp
            })
            
        units_dict[unit_id] = exercises
        
    return units_dict

def main():
    with open('raw_part1.txt', 'r', encoding='utf-8') as f:
        part1 = f.read()
    with open('raw_part2.txt', 'r', encoding='utf-8') as f:
        part2 = f.read()
        
    # Part 1 split
    p1_sc1, p1_sc2 = part1.split('PHẦN 2: BÀI TẬP MẪU SƠ CẤP 2 (초급 2)')
    sc1_exercises = parse_section(p1_sc1, 'sc1')
    sc2_exercises = parse_section(p1_sc2, 'sc2')
    
    # Part 2 split: PHẦN 3, PHẦN 4, PHẦN 5, PHẦN 6
    p2_tc1, p2_rest1 = part2.split('PHẦN 4: BÀI TẬP MẪU TRUNG CẤP 2 (중급 4)')
    p2_tc2, p2_rest2 = p2_rest1.split('PHẦN 5: BÀI TẬP MẪU CAO CẤP 1 (고급 5)')
    p2_cc1, p2_cc2 = p2_rest2.split('PHẦN 6: BÀI TẬP MẪU CAO CẤP 2 (고급 6)')
    
    tc1_exercises = parse_section(p2_tc1, 'tc3')
    tc2_exercises = parse_section(p2_tc2, 'tc4')
    cc1_exercises = parse_section(p2_cc1, 'cc5')
    cc2_exercises = parse_section(p2_cc2, 'cc6')
    
    all_wb = {}
    all_wb.update(sc1_exercises)
    all_wb.update(sc2_exercises)
    all_wb.update(tc1_exercises)
    all_wb.update(tc2_exercises)
    all_wb.update(cc1_exercises)
    all_wb.update(cc2_exercises)
    
    print(f"Total parsed units: {len(all_wb)}")
    for k in sorted(all_wb.keys()):
        print(f"  {k}: {len(all_wb[k])} exercises")
        for ex in all_wb[k]:
            if len(ex['options']) != 4:
                print(f"    WARNING: {ex['id']} has {len(ex['options'])} options! {ex['options']}")
                
    # Save as JS export
    out_file = 'src/data/workbookExercisesData.js'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write('// Bộ bài tập thực hành toàn diện chuẩn Giáo trình & Sách bài tập Tiếng Hàn Tổng Hợp\n')
        f.write('// Tự động phân loại theo 3 mảng: Luyện từ vựng (어휘), Luyện ngữ pháp (문법), Đọc hiểu & Hội thoại (읽기·회화)\n\n')
        f.write('export const WORKBOOK_EXERCISES = ')
        f.write(json.dumps(all_wb, ensure_ascii=False, indent=2))
        f.write(';\n')
        
    print(f"Generated {out_file} successfully!")

if __name__ == '__main__':
    main()
