// Creates a variable called message which will hold a new message
var cat = 'UI/UX Designer'
var dog = 'Researcher'
var owl = 'Thinker'


// Create a function to update an element with id message-text
function updateMessage1() {
    var el = document.getElementById('message-text');
    el.textContent = cat;
  }

function updateMessage() {
  var el = document.getElementById('message-text');
  el.textContent = dog;
}

function updatetext() {
    var el = document.getElementById('message-text');
    el.textContent = owl;
  }

// Calls the function
setInterval(function() {
    updateMessage1();
}, 2000);

setInterval(function() {
    updateMessage();
}, 4000);

setInterval(function() {
    updatetext();
}, 6000);


