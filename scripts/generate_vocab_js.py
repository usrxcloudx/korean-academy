import json

with open('all_vocab_720.json', 'r', encoding='utf-8') as f:
    all_units = json.load(f)

# Convert each unit vocab item to the format required by VocabularyFlashcard:
# id, korean, romaja, vietnamese, english, example, exampleMeaning, audioUrl (null)
formatted_vocab = {}

for u_id, vocab_list in all_units.items():
    formatted_vocab[u_id] = []
    for idx, item in enumerate(vocab_list):
        formatted_vocab[u_id].append({
            "id": f"{u_id}_v{idx+1}",
            "korean": item["korean"],
            "romaja": item["romaja"],
            "vietnamese": item["vietnamese"],
            "english": item["english"],
            "example": item["exampleKo"],
            "exampleMeaning": item["exampleVi"],
            "audioUrl": None
        })

# Write to JavaScript ES module
js_content = """// Master Vocabulary Flashcards Dataset (8 items per unit, 90 units total = 720 flashcards)
// Extracted from Ebook & Giao Trinh Tieng Han Tong Hop via NotebookLM Korean Academy

export const VOCABULARY_DATA = """ + json.dumps(formatted_vocab, ensure_ascii=False, indent=2) + ";\n"

with open('src/data/allVocabularyData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated src/data/allVocabularyData.js with {len(formatted_vocab)} units!")
