// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')



// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// ---- Greeting ---- //

const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi! Would you like a joke or a riddle?", 'bot');

  document
    .getElementById('jokeBtn')
    .addEventListener('click', () => nextQuestion('Joke'))
  document
    .getElementById('riddleBtn')
    .addEventListener('click', () => nextQuestion('Riddle'))
}

// ---- First intention ---- //

// ---- Second intention ---- //

const nextQuestion = (riddle) => {
  showMessage(`Oh so you are in the mood for ${riddle}?`, `bot`);
  console.log(showMessage);
  
  }

  
// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting);



/*
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    setTimeout(() => showJokeorRiddle(message), 1000)}
  else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showJoke(message), 1000)
} else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showRiddle(message), 1000)
  }
}*/



/*
let answer
  if (type === 'Joke') {
    answer = 'what did the tomato say to the other tomato when they crossed the road?'
  } else if (type === 'Riddle') {
    answer = 'What has to be broken before you can use it?'
  }*/


  /*let answer = riddle {
    if(answer === riddle) {
      console.log("What has to be broken before you can use it?")
    } else if (answer === joke) {
      console.log(`what did the tomato say to the other tomato when they crossed the road?`)
    }
  }*/