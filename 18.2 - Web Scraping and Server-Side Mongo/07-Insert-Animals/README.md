# Insert Animals

"Sure being a coder is fun and all, but you know what’s better? Being a coder at a zoo. Using MongoDB, you're going to make a zoo database."

## Instructions

Startup mongod and the mongo shell and switch to a new db named zoo.

Insert into a collection named animals:
One entry for each of your five favorite animals.

Each entry should have

1. A field of numLegs with an integer of the number of legs that animal has.
2. A field of class with that animal's class (mammal, reptile, etc).
3. A field of weight with an integer of the weight of the animal in pounds (any reasonable weight, really).
4. A field of name, with the animal's name.
5. A field of whatIWouldReallyCallIt with the name of what you would call the animal if you got to name it.

Example:

{
"name": "Panda",
"numLegs": 4,
"class": "mammal",
"weight": 254,
"whatIWouldReallyCallIt": "Desiigner"
}

```

```

/////Query Code/////
use zoo
db.animals
db.animals.insertMany([{"name":"Shark", "numLegs":0,"class":"Chondrichthyes","weight": 5000,"whatIWouldReallyCallIt":"Scary Fish"},{"name":"Monkey", "numLegs":4,"class":"Mammal","weight": 150,"whatIWouldReallyCallIt":"Unevolved Human"},{"name":"Horse", "numLegs":4,"class":"Mammal","weight": 500,"whatIWouldReallyCallIt":"Big Fast Dog"},{"name":"Cow", "numLegs":4,"class":"Mammal","weight": 2000,"whatIWouldReallyCallIt":"Grass Puppies"}])
db.animals.insertMany([{"name":"Fire Ant", "numLegs":6,"class":"Insect","weight": .005,"whatIWouldReallyCallIt":"Scary Boi"},{"name":"Snake", "numLegs":0,"class":"Reptile","weight": 50,"whatIWouldReallyCallIt":"Danger Noodle"},{"name":"Rhino Beetle", "numLegs":4,"class":"Insect","weight": .05,"whatIWouldReallyCallIt":"Horny Boi"}])
