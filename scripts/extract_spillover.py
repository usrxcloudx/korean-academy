import json

spillover_path = '/home/schu/.hermes/cache/spillover/tool_call-1791862927811428505-69.txt'
with open(spillover_path, 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('```json')
if start != -1:
    start += len('```json')
    end = text.rfind('```')
    raw_json = text[start:end].strip()
    data = json.loads(raw_json)
    print('Keys:', list(data.keys()))
    with open('raw_vocab_sc.txt', 'w', encoding='utf-8') as f_sc:
        f_sc.write(data.get('m11', ''))
    with open('raw_vocab_tc.txt', 'w', encoding='utf-8') as f_tc:
        f_tc.write(data.get('m13', ''))
    with open('raw_vocab_cc.txt', 'w', encoding='utf-8') as f_cc:
        f_cc.write(data.get('m15', ''))
    print('Saved raw_vocab_sc.txt, raw_vocab_tc.txt, raw_vocab_cc.txt')
else:
    print('No json block found')
