import Axios from "axios";

// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var search = process.argv[2];
var term = process.argv.slice(3).join(' ');

if (!search) {
    search = 'show';
}
if (!term){
    term='Andy Griffith'
}

if (search === 'show'){
    console.log('Searching for show...')
    Axios.get()
} else {
    console.log('Searching for actor...')
}