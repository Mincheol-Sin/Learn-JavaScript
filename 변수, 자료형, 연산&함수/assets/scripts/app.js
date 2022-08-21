// 변수를 선언하는 키워드 const와 let
const defaultResult = 0; // const: 상수를 선언할 때 사용하며 값 재할당 불가
let currentResult = defaultResult; // let: 상수가 아닌 변수를 선언할 때 사용하며 값 재할당 가능

// 함수 추가하기 - function 함수명(매개변수) { 실행문 }

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
