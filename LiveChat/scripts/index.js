
let messages = [];


document.getElementById('enter-chat').onclick = function() {
    const userName = document.getElementById("message-name").value;
    localStorage.setItem('userName', userName);
    const name = document.getElementById("userName");
    name.innerHTML += userName;
    document.getElementById('login-form').style.display = "none";
}

const saveMessages = () => {
    localStorage.setItem('messages', JSON.stringify(messages));
}

document.getElementById('add-message').onclick = function(event) {
    event.preventDefault();
    let user = document.getElementById('message-name');
    let messageBody = document.getElementById('message-body');

    let message = {
        name : user.value,
        body : messageBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    if (messageBody.value.length > 0) {
        messages.push(message);
    } else {
        alert('Please type your message before sending it')
    }
    
    messageBody.value = '';

    saveMessages();
    showMessages();
}


document.getElementById('delete-all-messages').addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem('messages');
    messages.splice(0);
    document.getElementById('message-field').innerHTML = "";
});

console.log(JSON.parse(localStorage.getItem('messages')));

function loadMessages(){
    if (localStorage.messages) {
        let storageContent = JSON.parse(localStorage.getItem('messages'));
        messages = [...storageContent]
    }
    
    showMessages();
}

function showMessages () {
    let messageField = document.getElementById('message-field');
    let out = '';
    messages.forEach(function(item) {
        out += `<p class=""><em>${timeConverter(item.time)}</em></p>`;
        out += `<p class="">${item.name}</p>`;
        out += `<p class="">${item.body}</p>`;
    });
    messageField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

loadMessages();

window.onstorage = () => {
   loadMessages();
};


