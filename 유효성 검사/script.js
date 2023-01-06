//입력 컨테이너
let elContainer = document.querySelector(".container");
//ID 영역
let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");

//PW 영역
let elInputPW = document.querySelector("#password");
let elFailurePW = document.querySelector(".failure-pw");
let elInputRePW = document.querySelector("#retype-password");
let elFailureRePW = document.querySelector(".failure-retype");

//회원가입 버튼
let btnSignUp = document.querySelector(".signup");
let valueId = false;
let valuePW = false;

//ID 영역
elInputUsername.onkeyup = function () {
  //4글자보다 크고 유효성 검사를 만족할 때
  if (
    isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value)
  ) {
    elFailureMessage.classList.add("hide");
    valueId = true;
  } else {
    elFailureMessage.classList.remove("hide");
    if (elInputUsername.value === "") {
      elFailureMessage.classList.add("hide");
    }
    valueId = false;
  }
};

//PW 유효성 검사
elInputPW.onkeyup = function () {
  //PW 조건에 맞을 때
  if (strongPassword(elInputPW.value)) {
    elFailurePW.classList.add("hide");
  } else {
    elFailurePW.classList.remove("hide");
    if (elInputPW.value === "") {
      elFailurePW.classList.add("hide");
    }
  }
};

//PW 일치 확인
elInputRePW.onkeyup = function () {
  if (isMatch(elInputPW.value, elInputRePW.value)) {
    elFailureRePW.classList.add("hide");
    valuePW = true;
  } else {
    elFailureRePW.classList.remove("hide");
    if (elInputRePW.value === "") {
      elFailureRePW.classList.add("hide");
    }
    valuePW = false;
  }
  console.log(isMatch(elInputPW.value, elInputRePW.value));
};

//회원가입 버튼 활성화 여부
elContainer.onkeyup = function () {
  if (valueId && valuePW) {
    btnSignUp.disabled = false;
  } else {
    btnSignUp.disabled = true;
  }
};

//ID 4글자
function isMoreThan4Length(value) {
  return value.length >= 4;
}

//PW retype 비교
function isMatch(pw1, pw2) {
  if (pw1 === pw2) {
    return true;
  } else {
    return false;
  }
}
