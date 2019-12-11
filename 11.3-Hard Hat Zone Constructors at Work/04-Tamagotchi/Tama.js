function digitalPal(hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
}


function feed() {
    if (hungry) {
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;
    }
    else {
        console.log('No thanks im full.');
    }
}
function sleep() {
    if (sleepy) {
        console.log('zZzZzZzZzZzZzZzZzZzZzZzZzZzZzZz~~~~~~~~~');
        this.sleepy = false;
        this.bored = true;
        increaseAge();
    }
}
function play() {
    if (bored) {
        console.log('Yay! Let\'s play!');
        this.hungry = true;
    }
    if (!bored) {
        console.log('Not now bro');
    }
}
function increaseAge() {
    this.age += 1;
    console.log('Happy Birthday to me! I am ' + this.age + ' old!');
}