import json
import re

spillover_path = '/home/schu/.hermes/cache/spillover/tool_call-1791863042111751531-77.txt'
with open(spillover_path, 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('```json')
if start != -1:
    start += len('```json')
    end = text.rfind('```')
    raw_json = text[start:end].strip()
    data = json.loads(raw_json)
else:
    raise ValueError("Cannot find json in spillover file")

sc = data['sc']
tc = data['tc']
cc = data['cc']

print(f"Loaded: sc={len(sc)}, tc={len(tc)}, cc={len(cc)}")

# Check lesson distribution
def analyze_list(items, prefix1, prefix2):
    # Group every 8 items into units 1..15 of prefix1, then 1..15 of prefix2
    units = {}
    for i in range(15):
        u_id = f"{prefix1}_u{i+1}"
        units[u_id] = items[i*8 : (i+1)*8]
    for i in range(15):
        u_id = f"{prefix2}_u{i+1}"
        units[u_id] = items[120 + i*8 : 120 + (i+1)*8]
    return units

sc_units = analyze_list(sc, 'sc1', 'sc2')
tc_units = analyze_list(tc, 'tc3', 'tc4')
cc_units = analyze_list(cc, 'cc5', 'cc6')

all_units = {**sc_units, **tc_units, **cc_units}
print(f"Total mapped units: {len(all_units)}")
for u_id, vocab in list(all_units.items())[::10]:
    print(f"Unit {u_id}: {len(vocab)} items. Sample: {vocab[0]['korean']} - {vocab[0]['vietnamese']}")

# Save clean structured json
with open('all_vocab_720.json', 'w', encoding='utf-8') as f:
    json.dump(all_units, f, ensure_ascii=False, indent=2)
print("Saved all_vocab_720.json successfully!")
