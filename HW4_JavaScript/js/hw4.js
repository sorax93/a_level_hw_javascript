alert('Task-1');

let s=prompt("Введите ссылку картинки", "");
let rotate=prompt("Введите на сколько градусов повернуть картинку", "");
let x=Number(rotate);

function isUrl(s) {
    let regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return regexp.test(s); 
}

if ((isUrl(s)===true)&&(Number.isNaN(x)===false)){
    document.getElementById('myimg').src = s;
    document.getElementById('myimg').style.cssText = `transform:rotate(` + x + `deg);
        width:15%;
    `;
    for (let i = 2; i < 6; i++) {
        let div = document.getElementById('images')
        div.style.cssText = `display: flex;
            justify-content: space-around;
            padding: 5%;
        `;
        let img = document.createElement('img')
        img.setAttribute('id','myimg')
        img.src = s;
        img.style.cssText = `transform:rotate(` + (x*i) + `deg);
            width:15%;
        `;
        div.append(img);
    }   
}
else {
    alert('Неверные данные')
}

alert('Task-2');
    
let t=prompt("Введите id тега:", "");

function findTag(t){

    let findId = document.getElementById(t);
    
    if (findId === null){
        alert('Нельзя удалить этот тег, потому что в вёрстке этого тега нету');
    }
    else{
        alert('Мы удалили тег с ID: ' + t);
        findId.remove();
    }

}
findTag(t);

alert('Task-3 and Task-4');


function tableA() {
    let wrapperTable = document.getElementById('wrapper');
    let table = document.createElement("table");
    for (i = 2; i < 11; i++) {
        let tr = document.createElement("tr");
        for (j = 2; j < 11; j++) {
            let td = document.createElement("td");
            td.innerText = j + " × " + i + " = " + i * j;
            td.style.cssText = `border: 1px solid blue; 
                padding: 3px;
                text-align: center;
            `;
            tr.appendChild(td);
            td.onmouseover = function(event) {
                let target = event.target;
                target.style.background = 'red';
              }; 
            td.onmouseout = function(event) {
                let target = event.target;
                target.style.background = '';
            };
        }
        table.appendChild(tr);
    }
    wrapperTable.appendChild(table);
    
}
tableA();

alert('Task-5');

function sumN(){
    
    let first = Number(document.getElementById('first').value);
    let second = Number(document.getElementById('second').value);
    if (first == "" || second == "") {
        alert("Необходимо ввести числа");
        document.getElementById('result').innerHTML = "Сумма введенных чисел = " + 0;
    }
    else {
        let sumAll = first + second;
        document.getElementById('result').innerHTML = "Сумма введенных чисел = " + sumAll;
    }

}

alert('Task-6');

let persons = [{
	name: 'Vasyan', age: 21
}, {
	name: 'Kolyan', age: 22
}, {
	name: 'Mashka', age: 17
}];

function sort(arrN, prop) {
    return arrN.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
}
console.log(sort(persons, 'age'));

alert('Task-7');

let arrs = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '];
let noSpaceArrs = arrs.map(item => item.replace(/^\s+|\s+$|\s+(?=\s)/g, ""));
console.log(noSpaceArrs);

alert('Task-8');

let array = [1, 2, 3, -1, -2, -3]

function filter(array, cb) {
    let filterArray = [];
    for (let i=0; i<array.length; i++) {
        let result = cb(array[i], i, array);
        if(result){
            filterArray.push(array[i]);
        }
    }
    return filterArray;
}

console.log(filter(array, num => num > 0));

alert('Task-9');


