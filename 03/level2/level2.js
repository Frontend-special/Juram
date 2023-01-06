import { RESERVATION_LIST } from './reservation .js';
// console.log(RESERVATION_LIST[0].name);

const $name = document.querySelector("[name='user-name']");
const $phone = document.querySelector("[name='user-phone']");
const $reservation = document.getElementById('reservation-number');
const $checkBtn = document.querySelector('button');

function autoHipen() {
    this.value = this.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}

$phone.addEventListener('input', autoHipen);


$checkBtn.addEventListener('click', (e) => {
    // 왜 this를 넣으면 안되나?
    // 이때 this는 왜 undefined인가?
    // console.log(this);
    e.preventDefault();
    const matchName = RESERVATION_LIST.filter(item => item.name === $name.value);
    if (matchName.length === 0) {
        alert("예약내역이 없습니다.");
        $name.value = "";
        $phone.value = "";
        $reservation.innerText = "";
    };
    const matchPhone = matchName.filter(item => item.phone === $phone.value);
    if(matchPhone.length === 0) {
        alert("예약내역이 없습니다.");
        $name.value = "";
        $phone.value = "";
        $reservation.innerText = "";
    };
    // 일치하는 예약이 1개라는 가정하에 0번째 인덱스로 표기 만약 여러개라면 forEach문 반복
    $reservation.innerText = matchPhone[0].number;
});

// function check(e) {
//     e.preventDefault();

    

// }

/* 강사님과 함께
input = 이름, 연락처 값, 그리고 비교할 RESERVATION_LIST
함수 설계
    핸드폰 번호 입력시 유효성 검사를 해야한다..
    RESERVATION_LIST에서 사용자가 입력한 이름과 같은 요소를 가지고 온다
    RESERVATION_LIST에 맞는 이름이 없다면 alert를 띄운다 => 예외처리
    사용자가 입력한 이름과 같은 요소중 입력한 phone 일치 비교 후 올바른 데이터를 가지고 온다
    

구글링 키워드
    javascript 핸드폰 번호 자동 - 입력
    javascript 배열 내 특정 값 찾기
    addEventListener input값을 입력할 때마다 값 감지하는 이벤트 => input
*/





/*
=> 구글링 키워드
    #6 querySelector(["[name='user-name']"]) 의미(querySelector 사용시 ["[]"]를 사용하는 경우)
    #17 javascript addEventListener에서 e.target.value와 e.value의 차이점
    #19~21 정규표현식 사용법
    button의 default값이 submit인 조건
    
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    1 DOM API를 통해 각각 이름, 연락처의 input태그와 예약번호를 뿌려줄 p태그(reservation-number) 가져오기
    2 해당 태그 value들을 가지고 와 RESERVATION_LIST의 값과 비교하는 함수만들기
    3 함수는 인자로 이름 value, 연락처 value를 가지고 온다
    4 그리고 해당 값과 LIST의 모든 index의 name, phone 값과 비교한다
    5 비교하여 두 개 모두 일치할 때만 해당 index의 number를 p태그 innerHTML에 넣어준다
    6 만약 일치하지 않는다면 alert띄우는 함수 구현한다
    7 그러고 button에 addEventListener를 click시 함수를 불리게 설정한다.

4. 단계별 구글링 키워드 생각하기

*/