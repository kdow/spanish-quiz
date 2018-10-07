let score = 0, position = 0, quiz, status, choice, choices, question, a, b, c, d;

const questions = [
  ["el gato", "bird", "cat", "dog", "rabbit", "b"],
  ["las fresas", "strawberries", "grapes", "bananas", "blueberries", "a"],
  ["los zapatos", "books", "coffee", "shoes", "chairs", "c"]
];


function showQuestion(){
  quiz = document.getElementById("quiz");
  if(position >= questions.length) {
    quiz.innerHTML="<h2>You answered "+score+" out of "+questions.length+" questions correctly.</h2>";
    document.getElementById("status").innerHTML = "End of quiz";
    return false;
  }
  document.getElementById("status").innerHTML = "<p>Choose the image that matches the Spanish word below.</p><p>Question "+(position+1)+" of "+questions.length+"</p>";
  question = questions[position][0];
  a = questions[position][1];
  b = questions[position][2];
  c = questions[position][3];
  d = questions[position][4];
  quiz.innerHTML = "<h3>"+question+"</h3>";
  quiz.innerHTML += "<label><input type='radio' name='choices' value='a'><img src='img/"+a+".jpg'></label><br>";
  quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img src='img/"+b+".jpg'></label><br>";
  quiz.innerHTML += "<label><input type='radio' name='choices' value='c'><img src='img/"+c+".jpg'></label><br>";
  quiz.innerHTML += "<label><input type='radio' name='choices' value='d'><img src='img/"+d+".jpg'></label><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
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
