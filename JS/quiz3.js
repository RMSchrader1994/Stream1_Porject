function check0(){
    var score = 0;
    if (document.forms.quiz1.question1.value == "Mark Hamill") {
        score++;}
    if (document.forms.quiz1.question2.value == "New Orleans") {
        score++;}
    if (document.getElementById("answer3").value == 1700) {
        score++;
    }
    if (document.forms.quiz1.question4.value == "Gunther") {
        score++;}
    if (document.forms.quiz1.question5.value == "People's Republic of Benin") {
        score++;}
    document.getElementById("demo").innerHTML = score+"/5";
    alert("You finished the Sins of the Father quiz, you should try the other quizzes!");
    
}

function check1(){
    var score = 0;
    if (document.forms.quiz2.question6.value == "Kay E. Kuter") {
        score++;}
    if (document.forms.quiz2.question7.value == "Smith") {
        score++;}
    if (document.getElementById("answer8").value == 1738) {
        score++;}
    if (document.forms.quiz2.question9.value == "Garr von Zell") {
        score++;}
    
   var a4 = document.getElementsByName('answer10');
   var a4answers = [];
   var a4right = new Array('Seeshaupt','Neuschwanstein');
   var a4bool = true;
 
   for(i = 0; i < a4.length; i++) {
      if(a4[i].checked) {
         a4answers.push(a4[i].value);
      }
   }
   a4answers.sort();
   a4right.sort();
   if(a4answers.length == a4right.length) {
      for(i = 0; i < a4answers.length; i++) {
         if(a4answers[i] != a4right[i]) {
            a4bool = false;
            break;
         }
      }
   }
   else {
      a4bool = false;
   }
   if(a4bool === true) {
      score++;
   }
    
    document.getElementById("demo2").innerHTML = score+"/5";
    alert("You finished quiz the Beat Within quiz, you should try the other quizzes!");
}

function check2(){
    var score = 0;
    if (document.forms.quiz3.question11.value == "Illuminati") {
        score++;}
    if (document.forms.quiz3.question12.value == "Albany") {
        score++;}
    if (document.forms.quiz3.question13.value == "Chateau") {
        score++;}
    if (document.forms.quiz3.question14.value == "Yes") {
        score++;}
    
    var a4 = document.getElementsByName('answer15');
   var a4answers = [];
   var a4right = new Array('Rome','Naples');
   var a4bool = true;
 
   for(i = 0; i < a4.length; i++) {
      if(a4[i].checked) {
         a4answers.push(a4[i].value);
      }
   }
   a4answers.sort();
   a4right.sort();
   if(a4answers.length == a4right.length) {
      for(i = 0; i < a4answers.length; i++) {
         if(a4answers[i] != a4right[i]) {
            a4bool = false;
            break;
         }
      }
   }
   else {
      a4bool = false;
   }
   if(a4bool === true) {
      score++;
   }
    document.getElementById("demo3").innerHTML = score+"/5";
    alert("You finished quiz the Blood of the Sacred, Blood of the Damned, you should try the other quizzes!");
}