import json

# -----------------animals----------------
animalFile = open("original.txt", "r")
listA = animalFile.readlines()
animalFile.close()

animalNames = []

for name in listA:
    animalNames.append(name.replace('\n', ''))

with open('animals.json', 'w') as outfile:
    json.dump(animalNames, outfile)

# -----------------colors-----------------
colors1File = open("colors1.txt", "r")
listC1 = colors1File.readlines()
colors1File.close()

colors1 = []

for name in listC1:
    colors1.append(name.replace('\n', ''))

with open('colors1.json', 'w') as outfile:
    json.dump(colors1, outfile)

# -----------------fruits-----------------
fruitFile = open("fruit.txt", "r")
listF = fruitFile.readlines()
fruitFile.close()

fruitNames = []

for name in listF:
    fruitNames.append(name.replace('\n', ''))

with open('fruits.json', 'w') as outfile:
    json.dump(fruitNames, outfile)
