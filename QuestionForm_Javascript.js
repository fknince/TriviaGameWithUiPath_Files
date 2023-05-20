// İsim ile HTML öğesi arama
function findElementByName(name) {
  let elements = document.getElementsByName(name);
  return elements[0];
}
// Cevabın doğru olup olamamasına göre arka plan renginin değiştirilmesi
function changeBackgroundColor(isCorrectAnswer)
{
  if(isCorrectAnswer)
  {
    document.body.style.backgroundColor = "#32CD32";
  }
  
  else
  {
    document.body.style.backgroundColor = "#FF0000";
  }
}
// Cevaplama sonrası kullanıcıya mesaj gösterilmesi
function showMessageAfterAnswer(isCorrectAnswer,correctAnswer) {
  let userMessageElement;
  var buttons = document.getElementsByTagName("div"); 
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.className.endsWith("messageText")) { 
        userMessageElement= button.getElementsByTagName("p")[0];
        break;
      }
    }
  if(isCorrectAnswer)
  {
    userMessageElement.innerText="Tebrikler doğru bildin!"
  }
  else
  {
    userMessageElement.innerText="Cevabınız yanlış. Doğru cevap:"+correctAnswer;
  }
}

// Bir cevap seçildikten sonra flag atılması
function flagAsAnswered() {
  data['isQuestionAnswered']="Yes";
}


//Ana işlemler
let correctAnswer=data['correctAnswer'];
let correctAnswerIndex=data['indexOfCorrectAnswer'];
var isCorrectAnswer=correctAnswerIndex=="1";
changeBackgroundColor(isCorrectAnswer);
flagAsAnswered();
showMessageAfterAnswer(isCorrectAnswer,correctAnswer);