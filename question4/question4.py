import json

with open("data.json", encoding='utf-8') as json_file:
    dados = json.load(json_file)

print(dados)

total = 0
for element in dados:
    for key in element:
        total = total + element[key]

percentage = []
for element in dados:
    for key in element:
        calc = round((element[key] / total) * 100, 2)        
        percentage.append(calc)

for item in percentage:
    print(item)