/* 
레시피 재료 추가하기
*/

const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $list = document.querySelector("#ingredient-list");
const $addBtn = document.querySelector("form > button");
const box = new Map();

$addBtn.addEventListener('click', addTable);

function addTable(e) {
    e.preventDefault();
    
    let ingredient = $ingredient.value;
    let weight = $weight.value;
    if(box.has(ingredient)) return alert("이미 있는 재료입니다. 삭제 후 추가해주세요");
    box.set(ingredient, weight);
    
    const $tr = document.createElement('tr');
    $tr.innerHTML = `
    <td>${ingredient}</td>
    <td>${weight}</td>
    <td><button onclick"del(this)">삭제</button></td>`
    
    $table.append($tr);
    $ingredient.value = "";
    $weight.value = "";

}

function del(event) {
    console.log(event);
    //button click이벤트가 안된다..
}


/*
=> 구글링 키워드
    #14 matches함수
    #15 closest함수 => this의 빌트인 함수
    #11 Map()이란 => 내가 아는 배열의 map함수와 다른거 같음
    
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    1 DOM API를 이용하여 재료명과 용량의 input태그, <tr>, <ul>태그를 가져온다
    2 input태그의 value값을 <tr>아래 <td>로 추가시킬 함수 만들기
    3 해당 함수는 재료명 value가 <tr> <td>에 이미 있는지 확인후 없다면 값과 버튼까지 추가하는 기능
    4 만약 이미 있다면 alert로 삭제 후 다시 누르란 말 표시
    5 제출 버튼이 눌렸을 때 <ul> 아래 표 값을 value로 가진 <li> 생성하는 함수 만들기

4. 단계별 구글링 키워드 생각하기
*/