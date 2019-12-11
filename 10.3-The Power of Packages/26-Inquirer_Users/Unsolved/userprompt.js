// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            filter: function (val) {
                return val;
            }
        },
        {
            type: 'list',
            name: 'gender',
            message: 'What is your gender?',
            choices: ['Male', 'Female', 'Apache Attack Helicopter', 'Social Justice Warrior', 'Steven Crowder', 'Karen'],
            filter: function (val) {
                return val;
            },
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many personalities will your character have?',
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
            },
            filter: Number
        },
        {
            type: 'list',
            name: 'weapon',
            message: 'Choose your weapon!',
            choices: ['Chain and Sickle', 'Warhammer', 'Flail', 'Glaive', 'Bow an Arrow (one arrow)', 'S&W .44 Magnum (no bullets)', 'Deck of Many Things'],
            filter: function(val){
                return val;
            }
        }
    ]).then(function (val) {
        console.log(val.name+', you are a '+val.gender+' with '+val.quantity+' personalities. Your weapon of choice was a '+val.weapon+', you are well armed, prepared for adventure!');
    });
