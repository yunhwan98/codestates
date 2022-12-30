//var 와 let 차이

//var로 설정시 local 값에 greeting 존재
//let으로 설정시 local 값에 greeting 존재 X
//해당 block 안쪽에서만 접근 가능
function greetSomeone(firstName) {
  let time = "night";
  if (time === "night") {
    let greeting = "Good Night";
  }

  return greeting + " " + firstName;
}

greetSomeone("Steve");
