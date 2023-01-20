import boardList from '../mock/boardList.json' assert { type: 'json' };
// console.log(boardList);

/* 1. json데이터를 가지고 와서 list형태로 정리하기

    > 요구사항 바탕으로 인풋 생각하기
      - 구조 파악 먼저하기.
      - list가 추가된다면 어디에 추가되어야하나.. <div class="board-list flex-align-center"></div>
      - 뿌릴 형태를 json의 길이만큼 아이템을 넣어서 추가해줘야겠다.*/

const $boardList = document.querySelector('.board-list');

for(let el of boardList) {
    const listItem = document.createElement('div');
    listItem.innerHTML = `
    <div class="board-list-card">
    <h3>${el.title}</h3>
    <div>${el.content}</div>
    </div>
    `
    $boardList.append(listItem);
}

/* 2. 게시글 작성 구역에서 저장 버튼을 클릭하면 게시글을 올릴 것 인지 확인창이 보여진다
      조건1 만약 확인창에서 승인되지 않으면 게시글을 작성하지 않는다
      조건2 게시글이 작성되면, 가장 최근 작성글이 상단으로 오도록 게시글 목록 구역에 추가된다.

    > 요구사항 바탕으로 인풋 생각하기
      - 각각의 입력값을 받을 가지고 온다.(title, content, saveBtn, resetBtn)
      - 저장 버튼이 눌리면 뜰 alert
      - 저장버튼 후 뜬 창에서 거절을 누르면 게시글 작성X -> 확인창에서도 승인/거절 버튼
      - 확인창에서 승인 버튼이 눌렸을 땐 게시판에 추가되도록 한다. 
      
    > 구글링키워드
      - javascript append 순서 바꾸기 */

let saveStatus = false;
const $boardWriteForm = document.querySelector('.board-write-form');
const $titleInput = document.getElementsByName('board-title')[0];
const $contentInput = document.getElementsByName('board-content')[0];
const $saveBtn = document.getElementsByTagName('button')[0];
// const $resetBtn = document.getElementsByTagName('button')[1];
// reset은 굳이 구현하지 않아도 의도대로 작동됨..

$boardWriteForm.addEventListener('submit', saving);

function clickSave(e) {
    let rememberTitle = $titleInput.value;
    let remeberContent = $contentInput.value;
    if ( rememberTitle === '' || remeberContent === '') {
        alert('Please fill the form');
        e.preventDefault();
        return;
    }

    // save 버튼이 눌렸을 때 실행할 함수 (확인창 띄우는 함수)
    if(confirm('Save') == true) {
        saveStatus = true;
    } else {
        e.preventDefault();
        $titleInput.value = rememberTitle;
        $contentInput.value = remeberContent;
        saveStatus = false; 
        return false;
    };
}


function saving(e) { 
    // 실제로 입력 값을 저장할 경우 실행할 함수. form태그가 submit할때 실행됨
    // save -> okay가 눌렸을 때 실행
    if(saveStatus === false) return;
    e.preventDefault();
    let newTitle = $titleInput.value;
    let newContent = $contentInput.value;
    console.log(newTitle, newContent);

    const listItem = document.createElement('div');
    listItem.innerHTML = `
    <div class="board-list-card">
    <h3>${newTitle}</h3>
    <div>${newContent}</div>
    </div>
    `
    listItem.addEventListener('click', showDetail);
    // append하면 제일 뒤에 붙고 prepend하면 제일 앞에 붙는다
    $boardList.prepend(listItem);

    $titleInput.value = '';
    $contentInput.value = '';
}

$saveBtn.addEventListener('click', clickSave);


/* 3. 게시글 목록 구역에서 게시글을 선택하면 선택한 게시글의 상세 내용이 게시글 상세 구역에 나타난다

    > 요구사항 바탕으로 인풋 생각하기
      - 가운데 boardList 중 클릭된 아이템의 내용이 마지막 페이지 자세히 보기에 보여야하니
      - 클릭 이벤트의 주체 제목&컨텐츠 가지고 와서
      - html 안에 내용으로 뿌려주기 */
      

const $detailTitle = document.querySelector('.board-detail-container > h2');
const $detailContent = document.querySelector('.board-detail-container > div');
const $boardListItemAll = document.querySelectorAll('.board-list-card');

for(let el of $boardListItemAll) {
    el.addEventListener('click', showDetail);
}

function showDetail(e) {
    $detailTitle.innerText = e.target.parentNode.children[0].innerText;
    $detailContent.innerText = e.target.parentNode.children[1].innerText;
    console.log(e.target.parentNode.children[0]);
}


