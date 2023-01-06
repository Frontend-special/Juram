/* 
페이지네이션 구현하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/

/*
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

*/