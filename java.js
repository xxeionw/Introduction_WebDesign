// 이벤트 함수: 텍스트 변경
function changeText() {
    var question = document.querySelector("#myB");
    question.textContent = "힌트 : 1011+1010";
}

// 이벤트 함수: 마우스를 가져다 대면 사진 크기 변경
function changeImageSize() {
    var image = document.querySelector("#myImage");
    image.style.width = "200px";
}

// 이벤트 함수 : 경고창
window.onload = function() {
    alert("관심사를 소개합니다")
}
        
// 퓨어 함수 : 배열에 생일 저장하고 출력
birthday = [627];
function printArr(arr){
}
console.log(printArr(birthday))

//퓨어함수 : 이름 역순으로 출력하기
function name(){
    var name = '허회경';
    var reversedName = name.split('').reverse().join('');
    document.write("<br>이름 역순으로 출력해보기 : ", reversedName);
}

//퓨어함수 : 값 더해서 반환
function add(){
    const num1 = 5;
    const num2 = 10;
    const result = num1+num2;
    console.log(result);
    document.write("<br>5 + 10 :", result);
}

//jquery 사용하여 버튼 누르면 버튼 텍스트 바꾸기
$(document).ready(function() {
    $("#myButton").click(function() {
      $(this).text("Clicked!");
      event.preventDefault();

      return false;
    });
  });