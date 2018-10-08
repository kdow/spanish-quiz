let score = 0, position = 0, quiz, status, choice, choices, question, a, b, c, d;

const questions = [
  ["la playa", "mountains", "brushes", "trees", "beach", "d"],
  ["el gato", "bird", "cat", "dog", "rabbit", "b"],
  ["las fresas", "strawberries", "grapes", "bananas", "blueberries", "a"],
  ["los zapatos", "books", "coffee", "shoes", "chairs", "c"],
  ["el árbol", "tree", "moon", "boat", "cafe", "a"]
];


function showQuestion(){
  quiz = document.getElementById("quiz");
  if(position >= questions.length) {
    quiz.innerHTML="<h2>You answered "+score+" out of "+questions.length+" questions correctly.</h2>";
    document.getElementById("status").innerHTML = "Completed";
    quiz.innerHTML += "<h3>Thanks for playing. You can view other projects on my <a href='https://kellydownes.net/' target='_blank'>portfolio site</a> and my <a href='https://github.com/kdow/' target='_blank'>Github</h3>"
    return false;
  }
  document.getElementById("status").innerHTML = "<p>Choose the image that matches the Spanish word below.</p><h3>Question "+(position+1)+" of "+questions.length+"</h3>";
  question = questions[position][0];
  a = questions[position][1];
  b = questions[position][2];
  c = questions[position][3];
  d = questions[position][4];
  quiz.innerHTML = "<h4>'"+question+"'</h4>";
  quiz.innerHTML += "<div class='row'>"
  quiz.innerHTML += "<div class='col-sm-6 top-buffer'><label><input type='radio' name='choices' value='a'><img src='img/"+a+".jpg'></label></div>";
  quiz.innerHTML += "<div class='col-sm-6 top-buffer'><label><input type='radio' name='choices' value='b'><img src='img/"+b+".jpg'></label></div>";
  quiz.innerHTML += "<div class='col-sm-6 top-buffer'><label><input type='radio' name='choices' value='c'><img src='img/"+c+".jpg'></label></div>";
  quiz.innerHTML += "<div class='col-sm-6 top-buffer'><label><input type='radio' name='choices' value='d'><img src='img/"+d+".jpg'></label></div>";
  quiz.innerHTML += "</div>"
  quiz.innerHTML += "<div class='text-center'><button onclick='checkAnswer()' class='btn btn-primary top-buffer'>Next Question</button></div>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice === questions[position][5]) {
    score++;
  }
  position++;
  showQuestion();
}

window.addEventListener("load", showQuestion, false);
