// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'What is your name, fighter?',
            filter: function(val){
                return val;
            }
        },
        {
            type: 'list',
            name:'weapon',
            message:'Choose your weapon: ',
            choices:['S&W .44 Magnum','Bat','Katana','Fisticuffs','Sidekick: Danny Devito'],
            filter: function(val){
                return val;
            }
        },
        {
            type: 'confirm',
            name: 'run',
            message:'A Zombie has appeared... Do you engage?',
            default: false,
            filter: function(val){
                // console.log(val);
                return val;
            }
        }
    
    ]).then (function(val){
        if (!val.run){
            console.log('You ran, you coward!');
        }
    });