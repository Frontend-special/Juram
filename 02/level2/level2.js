import { RESERVATION_LIST } from './reservation .js';
/*
예약 고객 확인하기
*/

const $userNameInput = document.querySelector(["[name='user-name']"]);
const $userPhonInput = document.querySelector(["[name='user-phone']"]);
const $form = document.querySelector('form');
const $reservation = document.querySelector('#reservation-number');

function NodeUserListInReservationList() {
  alert('일치하는 내역이 없습니다');
  $reservation.innerHTML = '일치하는 내역이 없습니다';
}

$userPhonInput.addEventListener('input', (e) => {
  const phone = e.target.value;
  const hiepnPhone = phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');
  e.target.value = hiepnPhone;
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = $userNameInput.value;
  const userPhone = $userPhonInput.value;

  const sameNameUser = RESERVATION_LIST.filter((list) => list.name === userName);
  if (sameNameUser.length === 0) return NodeUserListInReservationList();

  const targetUser = sameNameUser.find((list) => list.phone === userPhone);
  if (!targetUser) return NodeUserListInReservationList();
  $reservation.innerHTML = targetUser.number;
});

/*
=> 코드 분석
    NodeUserListInReservationList()는 일치하는 내역이 없을 때 알려주는 함수

    $userPhonInput의 이벤트는 사용자가 입력한 핸드폰 번호의 양식 일치를 위한 함수인 것 같다.
    
    $form의 이벤트는 실제 data와 입력값이 일치하는지 알려주는 핵심함수
      우선 일치하는 이름이 있는지 확인하고 없다면 NodeUserListInReservationList()
      이름이 일치한다면 핸드폰 번호도 일치하는지 확인하는 코드

=> 구글링 키워드
    #6 querySelector(["[name='user-name']"]) 의미(querySelector 사용시 ["[]"]를 사용하는 경우)
    #17 javascript addEventListener에서 e.target.value와 e.value의 차이점
    #19~21 정규표현식 사용법
*/