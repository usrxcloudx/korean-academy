with open('raw_vocab_sc.txt', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find patterns like "Bài X: "
matches = list(re.finditer(r'Bài\s+(\d+)[:\s]+([^\n\r]+)', text))
print(f"Total 'Bài X:' matches in sc: {len(matches)}")
for m in matches[:10]:
    print(m.group(0)[:60])

sample = text[matches[0].start():matches[1].start()]
print("--- Sample Bài 1 ---")
print(sample[:600])
