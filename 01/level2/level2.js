import { RESERVATION_LIST } from './reservation .js';
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
    - 이름 input값, 연락처 input값을 RESERVATION_LIST의 값과 비교하기
    - 이름과 연락처 모두 일치하면 예약번호(number) 보여주기
    - 모두 일치하지 않으면 alert로 알려주기

2. 요구사항 바탕으로 인풋 생각하기
    - 이름 value, 연락처 value
    - 예약번호 확인 버튼 이벤트

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    1 DOM API를 통해 각각 이름, 연락처의 input태그와 예약번호를 뿌려줄 p태그 가져오기
    2 해당 태그 value들을 가지고 와 RESERVATION_LIST의 값과 비교하는 함수만들기
    3 함수는 인자로 이름 value, 연락처 value를 가지고 온다
    4 그리고 해당 값과 LIST의 모든 index의 name, phone 값과 비교한다
    5 비교하여 두 개 모두 일치할 때만 해당 index의 number를 p태그 innerHTML에 넣어준다
    6 만약 일치하지 않는다면 alert띄우는 함수 구현한다
    7 그러고 button에 addEventListener를 click시 함수를 불리게 설정한다.

4. 단계별 구글링 키워드 생각하기

*/
