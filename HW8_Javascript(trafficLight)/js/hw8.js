let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.style.cssText = `display: flex;
    justify-content: space-around;
`;
document.body.prepend(wrapper);
let createTL = document.createElement('div');
createTL.style.cssText = `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 550px;
    width: 200px;
    background-color: #333;
    border-radius: 40px;
`;
wrapper.prepend(createTL);
let createPTL = document.createElement('div');
createPTL.style.cssText = `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 350px;
    width: 200px;
    background-color: #333;
    border-radius: 40px;
`;
createTL.after(createPTL);
let createRL = document.createElement('div');
createRL.setAttribute('id', 'red');
createRL.setAttribute('class', 'trafficLight');
createRL.style.cssText = `height: 150px;
    width: 150px;
    background-color: #111;
    border-radius: 50%;
`;
createTL.prepend(createRL);
let createYL = document.createElement('div');
createYL.setAttribute('id', 'yellow');
createYL.setAttribute('class', 'trafficLight');
createYL.style.cssText = `height: 150px;
    width: 150px;
    background-color: #111;
    border-radius: 50%;
`;
createRL.after(createYL);
let createGL = document.createElement('div');
createGL.setAttribute('id', 'green');
createGL.setAttribute('class', 'trafficLight');
createGL.style.cssText = `height: 150px;
    width: 150px;
    background-color: #111;
    border-radius: 50%;
`;
createYL.after(createGL);
let createPRL = document.createElement('div');
createPRL.setAttribute('id', 'red2');
createPRL.setAttribute('class', 'trafficLight');
createPRL.style.cssText = `height: 150px;
    width: 150px;
    background-color: #111;
    border-radius: 50%;
`;
createPTL.prepend(createPRL);
let createPGL = document.createElement('div');
createPGL.setAttribute('id', 'green2');
createPGL.setAttribute('class', 'trafficLight');
createPGL.style.cssText = `height: 150px;
    width: 150px;
    background-color: #111;
    border-radius: 50%;
`;
createPRL.after(createPGL);

let createBtn = document.createElement('button');
createBtn.setAttribute('id', 'button');
createBtn.innerText = 'Go';
createBtn.style.cssText = `width: 15%;
    align-self: flex-start;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    outline: none;
    background-color: green;
`;
createPTL.after(createBtn);

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

async function trafficLight(){
    while (true){
        createGL.style.backgroundColor = 'green';
        await Promise.race([domEventPromise(), delay(4000)]);
        createBtn.disabled = true;
        createGL.style.backgroundColor = '#111';
        createYL.style.backgroundColor = 'yellow';
        await delay(1500);
        createYL.style.backgroundColor = '#111';
        createRL.style.backgroundColor = 'red';
        await delay(4000);
        createRL.style.backgroundColor = '#111';
        createYL.style.backgroundColor = 'yellow';
        await delay(1500);
        createYL.style.backgroundColor = '#111';
    }
};

trafficLight();

async function trafficLightP(){
    while (true){
        createPRL.style.backgroundColor = 'red';
        await Promise.race([domEventPromise(), delay(4000)]);
        await delay(1500);
        createPRL.style.backgroundColor = '#111';
        createPGL.style.backgroundColor = 'green';
        await delay(5500);
        createPGL.style.backgroundColor = '#111';
    }
};

trafficLightP();

async function domEventPromise() {
    await new Promise((resolve) => {
        function myEvent(event) {
            createBtn.removeEventListener('click', myEvent);
            resolve(event);
        }
        createBtn.addEventListener('click', myEvent);
        let unDisabled = async () => {
        await delay(2000);
        createBtn.disabled = false; };
        unDisabled();
    })
    
};

async function speedtest(getPromise, count, parallel = 1) {
    let duration = 0;
    let arrPromises = [];
    
    for (let i = 0; i < count; i++) {
        let time = performance.now();
        while (arrPromises.length < parallel) { 
           arrPromises.push(getPromise());
        }
        await Promise.all(arrPromises);
        time = performance.now() - time;
        duration += time;
        console.log(arrPromises);
        console.log(duration);
    }     
    return {
        duration: duration,
        querySpeed: 1 / (duration / count),
        queryDuration: duration / count,
        parallelSpeed: duration / count / parallel / 10000,
        parallelDuration: 10000 / (duration / count / parallel),
    };
}
speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then((result) => console.log(result));


