let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.style.cssText = `display: flex;
    justify-content: space-around;
`;
document.body.prepend(wrapper);
let chatPanel = document.createElement('div');
chatPanel.style.cssText = `display: flex;
    flex-direction: column;
    width: 35%;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    max-height: 130px;
    justify-content: space-around;
`;
wrapper.prepend(chatPanel);
let inputNick = document.createElement('input');
inputNick.setAttribute('id', 'inputNick');
inputNick.setAttribute('placeholder', 'Enter your nick');
inputNick.style.cssText = `border: none;
border-bottom: 2px solid #ddd;
max-width: 50%;
outline: none;
`;
chatPanel.prepend(inputNick);
let inputMsg = document.createElement('input');
inputMsg.setAttribute('id', 'inputMsg');
inputMsg.setAttribute('placeholder', 'Enter your message');
inputMsg.style.cssText = `border: none;
border-bottom: 2px solid #ddd;
max-width: 80%;
outline: none;
`;
inputNick.after(inputMsg);
let sendBtn = document.createElement('button');
sendBtn.setAttribute('id', 'send');
sendBtn.setAttribute('onclick', 'sendAndCheck();');
sendBtn.innerText = 'Send';
sendBtn.style.cssText = `width: 15%;
    align-self: flex-end;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    outline: none;
`;
sendBtn.onmousedown = function(event) {
    let target = event.target;
    target.style.background = '#dcdcdc';
}; 
sendBtn.onmouseup = function(event) {
    let target = event.target;
    target.style.background = '#efefef';
};
sendBtn.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '#efefef';
};
inputMsg.after(sendBtn);
let chat = document.createElement('div');
chat.setAttribute('id', 'chat');
chat.style.cssText = `background-color: #ddd;
    border-radius: 8px;
    max-width: 50%;
    max-height: 300px;
    overflow: auto;
`;
chatPanel.after(chat);

async function jsonPost(url, data) {
    let response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify(data)
    });
    if(response.ok){
        let json = await response.json();
        return json;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
};

async function sendMsg() {
    try{
        jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: inputNick.value, message: inputMsg.value});
    } catch (err) {
        alert(err);
    }
};

let nextMessageId = 0;

async function getMessages(){
    try{
        let data = await jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages', messageId: nextMessageId});
        for (let j in data.data) {
            let msg = data.data[j];
            let el = document.createElement('div');
            let date = new Date(msg.timestamp);
            el.style.cssText = `margin: 8px;`;
            el.innerHTML = `<b>${msg.nick}</b>:${msg.message}</br></br><i>Отправлено: ${date.toLocaleString()}</i><hr>`;
            chat.prepend(el);
        };
        nextMessageId = data.nextMessageId;
    } catch (err) {
        alert(err);
    }
};

async function sendAndCheck() {
    await sendMsg();
    await getMessages();
};

async function checkLoop() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        getMessages();
    }
};

getMessages();
checkLoop();