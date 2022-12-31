/* 
페이지네이션 구현하기

1. 요구사항 확인하기
    - 숫자 버튼이 10개씩 나열되어 있고 좌 우의 화살표가 눌렸을 때 선택된 숫자의 좌우로 이동
    - 새로고침해도 주소창에 있는 page값은 변경되지 않는다
    - 눌린 버튼에 해당하는 페이지로 이동해야한다

2. 요구사항 바탕으로 인풋 생각하기
    - 기초 변수 totalPage의 값만큼 숫자버튼 생성
    - 10개씩 보여주기
    - 어떤 버튼이 눌렸든 해당 버튼이 가리키는 페이지 표시
    - 새로고침해도 바뀌지 않는 현재 페이지값(주소창에서도 바뀜없이 표시)
    - 좌 우의 화살표가 눌리면 1씩 페이지 이동

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    1 DOM API를 이용하여 <span>가져오기
    2 <span> 안에 button 10개 추가
    3 <a> pre가 눌렸을 때 1보다 작을 경우 currentPageIndex값은 1로 유지
    4 그 외에는 currentPageIndex에서 1씩 감소
    5 <a> next가 눌렸을 때 tatalPage의 값과 같거나 클 경우 currentPageIndex는 tatalPage 값으로 유지 
    6 그 외에는 currentPageIndex에서 1씩 증가
    7 항상 button의 innerText 값은 pageId와 일치해야함 (pageId의 값을 button innerText로 넣으면 될 것 같음)
    8 마지막의 currentPageIndex를 저장해뒀다가 새로고침이 눌렸을 때 저장해둔 페이지로 이동시키기


4. 단계별 구글링 키워드 생각하기
    - html 버튼 눌린 상태 유지하는 법
    - html에서 새로고침을 하면


기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/
