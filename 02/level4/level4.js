/* 
페이지네이션 구현하기
*/

const $pageList = document.querySelector('.page_list');
const $nextPage = document.querySelector('.btn_nav.next');
const $prevPage = document.querySelector('.btn_nav.pre');

let totalPage = 80;
let PAGE_LST = [];
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

Array.prototype.division = function (div) {
  const arr = this;
  const result = [];
  const len = arr.length;
  for (let i = 0; i < len; i += div) {
    result.push(arr.slice(i, i + div));
  }
  return result;
};
 
(function pagaNation(totalPage, currentPage) {
  const paageNation_list = [];
  const paageNation_limit = 10;
  currentPageIndx = Math.ceil(currentPage / paageNation_limit) - 1;
  for (let i = 1; i <= totalPage; i++) {
    paageNation_list.push(i);
  }
  PAGE_LST = paageNation_list.division(paageNation_limit);
  renderPageNation();
})(totalPage, currentPage);

// 페이지네이션 랜더링
function renderPageNation() {
  const pageNationList = PAGE_LST[currentPageIndx];
  $pageList.innerHTML = pageNationList
    .map((page) => {
      return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
    })
    .join('');

  const pageList = document.querySelector('.page_list').children;
  for (let i = 0; i < pageList.length; i++) {
    console.log(pageList[i].dataset)
    if (pageList[i].dataset.page == currentPage) {
      pageList[i].classList.add('on');
    }
  }
}

// 넥스트 페이지 그룹
function nextPageGroup() {
  if (!(currentPageIndx < PAGE_LST.length - 1)) return;
  currentPageIndx++;
  renderPageNation();
}

// 이전 페이지 그룹
function prevPageGroup() {
  if (!(currentPageIndx > 0)) return;
  currentPageIndx--;
  renderPageNation();
}

$nextPage.addEventListener('click', nextPageGroup);
$prevPage.addEventListener('click', prevPageGroup);

/*
=> 코드 분석
    division()을 prototype함수로 만들었다.. 이유가 뭘까??????
      arr 변수에 담긴 this가 뭘까?? 내 생각에는 #32 paageNation_list가 division을 불렀으니 for문을 totalPage만큼 돌았으니 1부터 80까지 담겨있을 것 같다..
      #15를 console.log(this)를 해보니 맞네 휴 다행
      result라는 빈 배열을 만들고 for문을 돌려서 result에 10개씩 끊어서 배열로 넣는다.
      그러면 최종 return된 result = [[1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20], ..., [71,72,73,74,75,76,77,78,79,80]];

    pagaNation즉시실행함수는 totalPage와 currentPage값을 인자로 받는다.
      paageNation_list라는 빈 배열을 만들고, limit으로 몇장씩 보여줄지를 설정한다.
      Math.ceil을 이용하여 currentPageIndx를 설정하는데 이건 아마 10묶음씩 몇개인지 보여주는 듯 하다
      그리고 division 함수를 이용하여 10개씩 담은 배열을 전역 변수에 담는다.
      그리고 renderPageNation()을 호출

    renderPageNation()는 pageNationList라는 변수에 현재 보여지는 페이지 리스트(10개단위)를 담고,
      $pageList인 <span>안에 innerHTML로 <a>를 넣는다. 근데 data-page가 뭘까?? ${page}는 #12에서 page에 붙여줄거로 예상..
      #42 .join해주는 이유는 없애보니 ','로 이어져서 그런가보다
      #45~47은 dataset -> 읽을때만 사용가능.. (read-only property)인데 왜쓴거지?? pageList[i].dataset을 console찍어보니 page: 숫자
        이렇게 나오는걸 보니 #40의 data-page에서 저장된걸로 추정..
      이부분은 <a>의 CSS nav_page 입히고 선택된 <a>에 CSS on을 입히는 함수

    nextPageGroup()은 currentPageIdx를 1++ 하는 함수
      물론 예외처리로 currentPageIndx가 length를 넘지 못하게 한다.

    prevPageGroup()은 currentPageIdx를 1-- 하는 함수
      물론 예외처리로 currentPageIndx가 0보다 작을때 아무것도 하지 않는다. 근데 왜 0보다 작을때라고 하지않은거지??? 
        0보다 작을때로 바꿨을땐 에러가 뜨지만 작동은 하는데.. 이것마저 막아야하는건가?

=> 구글링 키워드
    #12 javascript URLSearchParams()
    #14 Array.prototype함수 만들기
    #27 Math.ceil()
    #40 url안에 들어가는 데이터??
    #46 배열 dataset
*/