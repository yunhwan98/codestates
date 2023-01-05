let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");

//JS로 스타일 적용
//elFailureMessage.style.display = "none";

//class를 이용해서 display 'none' 지정
//elFailureMessage.classList.remove("hide");

let elSuccessMessage = document.querySelector(".success-message");

//event와 enventHandler
//키보드 입력시 함수 실행
elInputUsername.onkeyup = function () {
  console.log(elInputUsername.value);

  //4글자보다 클때
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}
