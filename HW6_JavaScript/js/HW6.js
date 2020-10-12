let getSome = function () {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.send();
  let intervalId = 0;
  document.getElementById("getData").disabled = true;
  xhr.addEventListener('readystatechange', function() {
    if (this.readyState != 3) {
      if (this.status != 200) {
        console.log(`Error ${this.status}: ${this.statusText}`);
        intervalId = setTimeout(function() {
          getSome();
        }, 10000);
      } else {
        clearTimeout(intervalId);
        console.log(this.response);
        document.getElementById("getData").disabled = false;
      }
    }
  });
  xhr.timeout = 10000;
  xhr.addEventListener('timeout', function() {
    if (this.timeout === 0){
      if (this.readyState != 4) {
        xhr.abort();
        getSome();
      }
    }
  });
};
let xhrSecond = new XMLHttpRequest();
xhrSecond.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhrSecond.setRequestHeader('Content-Type', 'application/json');
let newTitle = JSON.stringify({
  title: 'newTitle',
  userId: 1,
});
xhrSecond.send(newTitle);
xhrSecond.onload = function () {
  if (this.status != 201) {
    console.log(`Error ${this.status}: ${this.statusText}`);
  } else {
    console.log(this.response);
  }
};

let xhrThird = new XMLHttpRequest();
xhrThird.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
xhrThird.setRequestHeader('Content-Type', 'application/json');
let updateData = JSON.stringify({
  id: 1,
  title: 'lorem',
  body: 'lorem ipsum',
  userId: 1,
});
xhrThird.send(updateData);
xhrThird.onload = function () {
  if (this.status != 200) {
    console.log(`Error ${this.status}: ${this.statusText}`);
  } else {
    console.log(this.response);
  }
};

let xhrFourth = new XMLHttpRequest();
xhrFourth.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
xhrFourth.send();
xhrFourth.onload = function () {
  if (this.status != 200) {
    console.log(`Error ${this.status}: ${this.statusText}`);
  } else {
    console.log(`Data deleted successfully`);
  }
};

let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.body.prepend(wrapper);
let getData = document.createElement('button');
getData.setAttribute('id', 'getData');
getData.setAttribute('onclick', 'throttled();');
getData.innerText = 'getData';
getData.style.cssText = ` background: silver;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    outline: none;
`;
wrapper.prepend(getData);

function throttle(f, t) {
  return function () {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined || (this.lastCall - previousCall) > t) {
      f();
    }
  };
}

let throttled = throttle(getSome, 3000);