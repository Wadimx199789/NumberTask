var randomNumber=Math.floor(Math.random() * 100);

let object={};
object.button=document.querySelector(".form__button");
object.input=document.querySelector(".form__input");
object.container=document.querySelector(".container");


function check(){
    if(Number(object.input.value)<100 && Number(object.input.value)>=0){
    if(Number(object.input.value)===randomNumber){
      object.container.innerHTML="<h2 class='right'>Правильно</h2>"
    }
    if(Number(object.input.value)>randomNumber){
        alert("Наше число меньше,подумайте еще");
        object.input.value="";
    }
    else if(Number(object.input.value)<randomNumber){
        alert("Наше число больше,подумайте еще");
        object.input.value="";
    }
}
else {alert("Вы ввели большое число");
object.input.value="";

}
}

object.button.addEventListener("click",check)