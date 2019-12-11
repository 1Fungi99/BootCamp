var inquirer = require('inquirer');
function Character(isAlive, hp, name, age, gender, race, charClass, str, dex, con, int, wis, cha) {
    this.isAlive = isAlive;
    this.hp = hp;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.charClass = charClass;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
}
function Enemy(isAlive, hp, name, age, gender, race, charClass, str, dex, con, int, wis, cha) {
    this.isAlive = isAlive;
    this.hp = hp;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.charClass = charClass;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
}

console.log('Welcome adventurer! This is your character creation screen!')
inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: "What is your name Traveller?",
        filter: function (val) { return val; }
    }, {
        type: 'list',
        name: 'gender',
        message: 'What is your gender?',
        choices: ['Male', 'Female'],
        filter: function (val) { return val; },
    }, {
        type: 'input',
        name: 'age',
        message: 'How old are you?',
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number
    }, {
        type: 'list',
        name: 'race',
        message: 'What race will you be?',
        choices: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
        filter: function (val) { return val; }
    }, {
        type: 'list',
        name: 'class',
        message: 'What class are you aiming to be?',
        choices: ['Barabarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer', 'Blood Hunter'],
        filter: function (val) { return val; }
    }
    ]).then(function (val) {
        isAlive = true
        hp = str = Math.floor(Math.random() * 19) + 30;
        str = Math.floor(Math.random() * 15) + 3;
        dex = Math.floor(Math.random() * 15) + 3;
        con = Math.floor(Math.random() * 15) + 3;
        int = Math.floor(Math.random() * 15) + 3;
        wis = Math.floor(Math.random() * 15) + 3;
        cha = Math.floor(Math.random() * 15) + 3;

        var character1 = new Character(isAlive, hp, val.name, val.gender, val.age, val.race, val.class, str, dex, con, int, wis, cha);

        console.log('-----------------------------');
        console.log(character1);
        console.log('-----------------------------');


        console.log("Now create your enemy!")

        inquirer
            .prompt([{
                type: 'input',
                name: 'name',
                message: "What is your enemy's name Traveller?",
                filter: function (val) { return val; }
            }, {
                type: 'list',
                name: 'gender',
                message: 'What is their gender?',
                choices: ['Male', 'Female'],
                filter: function (val) { return val; },
            }, {
                type: 'input',
                name: 'age',
                message: 'How old are they?',
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                },
                filter: Number
            }, {
                type: 'list',
                name: 'race',
                message: 'What race will they be?',
                choices: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
                filter: function (val) { return val; }
            }, {
                type: 'list',
                name: 'class',
                message: 'What class are they aiming to be?',
                choices: ['Barabarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer', 'Blood Hunter'],
                filter: function (val) { return val; }
            }
            ]).then(function (val) {
                isAlive = true
                hp = str = Math.floor(Math.random() * 19) + 30;
                str = Math.floor(Math.random() * 15) + 3;
                dex = Math.floor(Math.random() * 15) + 3;
                con = Math.floor(Math.random() * 15) + 3;
                int = Math.floor(Math.random() * 15) + 3;
                wis = Math.floor(Math.random() * 15) + 3;
                cha = Math.floor(Math.random() * 15) + 3;
                var them = new Enemy(isAlive, hp, val.name, val.gender, val.age, val.race, val.class, str, dex, con, int, wis, cha);
                console.log('-----------------------------');
                console.log(them);
                console.log('-----------------------------');

                eAtk();
                atk();
                eAtk();
                atk();
                eAtk();
                atk();
                eAtk();
                atk();
                eAtk();
                atk();
                eAtk();
                atk();
            });



    });

function eAtk(){
    console.log('Your enemy struck!')
    character1.hp -= them.str;
    console.log('Your HP is at ' + character1.hp + "!");
    if (character1.hp<=0){
        console.log('You have died.......................')
    }
};
function atk(){
    console.log('You struck!');
    them.hp-=character1.hp;
    if (them.hp<=0){
        console.log('They have died.......................')
    }
}
