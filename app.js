document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});


let count = 0;
document.getElementById('counterButton').addEventListener('click', function() {
    count++;
    document.getElementById('counterDisplay').innerText = count;
});




document.getElementById('toggleButton').addEventListener('click', function() {
    const paragraph = document.getElementById('toggleParagraph');
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
});



document.getElementById('textButton').addEventListener('click', function() {
    document.getElementById('textParagraph').innerText = 'Text has been changed!';
});



document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
});




document.getElementById('addButton').addEventListener('click', function() {
    const item = document.getElementById('todoInput').value;
    const listItem = document.createElement('li');
    listItem.innerText = item;
    document.getElementById('todoList').appendChild(listItem);
});





let currentIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('sliderImage').src = images[currentIndex];
});





document.getElementById('submitButton').addEventListener('click', function(event) {
    const input = document.getElementById('textInput').value;
    if (!input) {
        alert('Field is required!');
        event.preventDefault();
    }
});






async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    document.getElementById('dataDisplay').innerText = JSON.stringify(data);
}
fetchData();





const item = document.getElementById('draggableItem');
item.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

const dropZone = document.getElementById('dropZone');
dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    dropZone.appendChild(draggableElement);
});







async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London');
    const data = await response.json();
    document.getElementById('weatherDisplay').innerText = Temperature: ${data.current.temp_c}°C;
}
getWeather();







const socket = new WebSocket('ws://your-websocket-server');
socket.addEventListener('message', function(event) {
    const message = document.createElement('p');
    message.innerText = event.data;
    document.getElementById('chatBox').appendChild(message);
});
document.getElementById('sendButton').addEventListener('click', function() {
    const message = document.getElementById('chatInput').value;
    socket.send(message);
});









document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('.listItem');
    items.forEach(function(item) {
        if (item.innerText.toLowerCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});










let expenses = [];
document.getElementById('addExpenseButton').addEventListener('click', function() {
    const name = document.getElementById('expenseName').value;
    const amount = document.getElementById('expenseAmount').value;
    expenses.push({ name, amount });
    displayExpenses();
});

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach(function(expense, index) {
        const listItem = document.createElement('li');
        listItem.innerText = ${expense.name}: $${expense.amount};
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            expenses.splice(index, 1);
            displayExpenses();
        });
        listItem.appendChild(deleteButton);
        expenseList.appendChild(listItem);
    });
}










const questions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' }
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    question.options.forEach(function(option) {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', function() {
            if (option === question.answer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                document.getElementById('score').innerText = Your score: ${score};
            }
        });
        options.appendChild(button);
    });
}
displayQuestion();