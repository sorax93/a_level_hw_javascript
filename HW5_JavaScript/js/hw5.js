// Task-1

function darts() {
    let dartsAndScores = document.createElement('div');
    dartsAndScores.style.cssText = `display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.body.prepend(dartsAndScores);

    let divFirst = document.createElement('div');
    divFirst.setAttribute('id', 'firstCircle');
    divFirst.style.cssText = `border: 2px solid black;
        background: green;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    dartsAndScores.prepend(divFirst);

    let divSecond = document.createElement('div');
    divSecond.setAttribute('id', 'secondCircle');
    divSecond.style.cssText = `border: 2px solid black;
        background: yellow;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;   
    `;
    divFirst.prepend(divSecond);

    let divThird = document.createElement('div');
    divThird.setAttribute('id', 'thirdCircle');
    divThird.style.cssText = `border: 2px solid black;
        background: blue;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    divSecond.prepend(divThird);

    let divFourth = document.createElement('div');
    divFourth.setAttribute('id', 'fourthCircle');
    divFourth.style.cssText = `border: 2px solid black;
        background: red;
        width: 40px;
        height: 40px;
        border-radius: 50%;   
    `;
    divThird.prepend(divFourth);

    let tableScores = document.createElement('div');
    tableScores.setAttribute('id', 'scores');
    tableScores.style.cssText = ` border: 2px solid black;
        width: 200px;
        margin-left: 10px;
        text-align: center;
    `;
    tableScores.innerText = 'Your current score: 0 points';
    divFirst.after(tableScores);
    
    let buttonAndTimer = document.createElement('div');
    buttonAndTimer.style.cssText = `margin-top: 10px;
        display: flex;
    `;
    dartsAndScores.after(buttonAndTimer);

    let buttonStart = document.createElement('button');
    buttonStart.setAttribute('type', 'submit');
    buttonStart.setAttribute('onclick','startGame();');
    buttonStart.innerText = 'Start Game';
    buttonStart.style.cssText = ` background: red;
        width: 100px;
        height: 30px;
        border-radius: 10px;
        outline: none;
    `;
    buttonAndTimer.prepend(buttonStart);

    let tableTimer = document.createElement('div');
    tableTimer.setAttribute('id', 'timer');
    tableTimer.style.cssText = ` border: 2px solid black;
        width: 150px;  
        margin-left: 10px;
        text-align: center;
    `;
    tableTimer.innerText = 'Time left: 30 sec.';
    buttonStart.after(tableTimer);

    document.body.style.cssText = `display: flex;
        flex-direction: column;
        align-items: center;
    `;
    divFirst.onmousedown = function(event) {
        let target = event.target;
        target.style.border = '2px solid silver';
    }; 
    divFirst.onmouseup = function(event) {
        let target = event.target;
        target.style.border = '2px solid black';
    };
    divFirst.onmouseout = function(event) {
        let target = event.target;
        target.style.border = '2px solid black';
    };
}
darts();
function startGame(){
    let elements = document.querySelectorAll('#firstCircle');
    let score = 0;
    for (let elem of elements) {
        elem.addEventListener('click', function (event) {
            if (event.target.id === 'firstCircle') {
                score += 2;
            } else if (event.target.id === 'secondCircle') {
                score += 5;
            } else if (event.target.id === 'thirdCircle') {
                score += 8;
            } else if (event.target.id === 'fourthCircle') {
                score += 10;
            }
        })   
    };    
    let timer; 
    let x = 30;  
    function startTimer() { 
        document.getElementById('scores').innerHTML = `Your current score:  ${score} points`; 
        document.getElementById('timer').innerHTML = `Time left: ${x} sec.`;
        x--; 
        if (x<0){
            clearTimeout(timer); 
            document.getElementById('scores').innerHTML = `
                Game over <br> 
                Your final score: ${score} points
            `;
            document.getElementById('timer').innerHTML = `Time's up. Click on "Start Game" to Try Again`;
        }
        else {
            timer = setTimeout(startTimer, 1000);
        }
    };
    startTimer();
};

// Task-2

function makeProfileTimer() {
    return function() {    
        let time = performance.now();
        alert('Замеряем время работы этого alert');
        time = performance.now() - time;
        time = parseFloat(time).toFixed(3);
        return time;
    };
};
let timer = makeProfileTimer();   
alert(timer());

// Task-3

let count = countDown();
function countDown() {
    let timer = 5;
    return function (){
        if(timer>0){
            console.log(timer--);
            setTimeout(count,1000);
        } else {
            console.log('GO!');   
        };
    };
};
count();

// Task-4

function myBind(func, context, ...rest) {
    return function (...args) {
        return func.call(context, ...rest.concat(args));
    }
}

