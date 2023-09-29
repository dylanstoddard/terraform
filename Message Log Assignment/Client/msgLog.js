document.querySelector('#submit-button').onclick = function () {

    let message = document.getElementById('messageInput').value;

    var body = "message=" + encodeURIComponent(message);

    fetch('http://localhost:8080/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })
    .then(() => {
        document.getElementById('messageInput').value = '';
        fetchMessages();
    });
}; 

function fetchMessages() {
    fetch('http://localhost:8080/messages')
    .then(response => response.json())
    .then(data => {
        let messageList = document.getElementById('messageList');
        messageList.innerHTML = '';

        data.forEach(message => {
            let listItem = document.createElement('li');
            listItem.textContent = message.message;
            messageList.appendChild(listItem);
        });
    });
}

fetchMessages(); // Load messages on page load