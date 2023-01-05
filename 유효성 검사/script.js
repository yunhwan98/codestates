let elInputUsername = document.querySelector("#username");
console.log(elInputUsername);

let elFailureMessage = document.querySelector(".failure-message");
console.log(elFailureMessage);

//JS로 스타일 적용
//elFailureMessage.style.display = "none";

//class를 이용해서 display 'none' 지정
elFailureMessage.classList.remove("hide");
