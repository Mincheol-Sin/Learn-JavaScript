let name = "Max";

if (name === "Max") {
  let hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
}

// 밖에서 선언한 전역변수 name과 지역변수 name은 다르다. 그러므로 재선언 가능
function greet() {
  let age = 30;
  let name = "Manual";
  console.log(name, age, hobbies);
}

console.log(name); // 결과: 에러 발생, 이유: 

greet();
