# 관심사 소개 웹 페이지 제작

## 📁프로젝트 개요
JQuery와 자바스크립트 이벤트 함수를 활용해, 음악가 허회경에 대한 관심사를 소개하는 인터랙티브 웹 페이지입니다.  
이미지 크기 변경, 버튼 클릭 텍스트 변경, 텍스트 수정 등 다양한 이벤트 핸들러를 구현하였습니다.

---

## 📝주요 기능
- 이미지에 마우스 올리면 크기 변경 (onmouseover / onmouseout 이벤트)  
- 버튼 클릭 시 버튼 텍스트 변경 (jQuery 활용)  
- 텍스트 클릭 시 내용 변경 (onclick 이벤트)  
- 음악가 정보, 앨범 소개, 외부 링크 (인스타그램, 유튜브) 포함  
- 폼 입력 필드(텍스트 박스) 제공 및 제출 기능  

---

## 💻사용 기술 
- HTML5, CSS3  
- JavaScript (순수 JS + jQuery)  
- 외부 라이브러리: jQuery 3.6.0  
- 웹 브라우저 이벤트 핸들링  

---

## 🖱️프로젝트 구조 및 주요 코드

### <주요 HTML 구조>
```html
<header>
    <table>
        <tr>
            <td><img src="그로밋 메인 사진.jpeg" width="150"></td>
            <td><h1><span style="color:blue">이다현</span> 의 관심사를 소개합니다 !</h1></td>
        </tr>
    </table>
    <hr>
</header>

<section>
    <article>
        <form>
            <fieldset>
                <legend> <음악> </legend>
                <table id="table" border="2">
                    <tr>
                        <td rowspan="2">
                            <img src="허회경.jpeg" width="130" id="myImage" onmouseover="changeImageSize()" onmouseout="this.style.width = '130px'">
                        </td>
                        <td><h2 id="p">허회경</h2></td>
                    </tr>
                    <tr><td>(인디뮤직 / 포크 가수)</td></tr>
                    <tr><td>소속사</td><td>문화인</td></tr>
                    <tr><td>데뷔</td><td>2021 싱글 앨범<br>[아무것도 상관없어]</td></tr>
                    <tr><td>사이트</td><td><a href="https://www.instagram.com/ilovesushikyung/">인스타그램</a></td></tr>
                </table>

                <li><a class="title" href="https://youtu.be/0kmHEKcRjpo">김철수 씨 이야기<sub>(클릭 -> 유튜브 연결)</sub></a></li>

                <fieldset>
                    <legend id="intro">앨범 소개</legend>
                    <p>인생은 늘 마음대로 흘러가지 않지만 그 흐름 속에서 사소한 행복을 찾아가는 게 내가 할 수 있는 최선인 것 같습니다.</p>
                </fieldset>

                <li><a class="title" href="https://youtu.be/hmOOkmynj4A">그렇게 살아가는 것<sub>(클릭 -> 유튜브 연결)</sub></a></li>

                <button id="myButton">Click Me</button>
            </fieldset>
        </form>
    </article>

    <footer>
        <form>
            <fieldset class="box2">
                <legend>CHECK !</legend>
                <p id="myB" onclick="changeText()">Q1. 허회경의 데뷔년도는?</p>
                <input type="text" name="check" />
                <input type="submit" />
                
                <p>Q2. 허회경의 첫번째 앨범은?</p>
                <input type="text" name="check" />
                <input type="submit" />
            </fieldset>
        </form>
    </footer>
</section>
```

---

## ⚙️주요 이벤트 함수 및 설명 

- **changeImageSize()**  
  이미지에 마우스 올리면 크기 커짐, 마우스 나가면 원래 크기로 복원

- **#myButton 클릭 이벤트 (jQuery)**  
  버튼 텍스트를 클릭 시 "Clicked!"로 변경

- **changeText()**  
  텍스트 클릭 시 내용이 바뀌는 함수

- **순수 JS 함수**  
  `document.write()`를 사용해 변수 출력  
  배열 데이터, 이름 역순 출력, 값 더하기 함수 포함 (java.js 파일 내 정의 예상)


---
## 🖼️실행결과


---

## ✨배운점 

- 웹 페이지에서 다양한 이벤트 핸들러 실습 및 구현 경험  
- jQuery 기본 사용법과 순수 JS 이벤트 함수 차이 이해  
- HTML5 시맨틱 태그와 폼 요소 활용법 숙지  
- 사용자 인터랙션이 포함된 동적 웹 페이지 개발 능력 향상  
