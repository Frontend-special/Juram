/* 
레시피추가하기
*/

const $form = document.querySelector('#ingredient-form');
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector('table');
const $button = document.querySelector('#submit_button');
const $list = document.querySelector('#ingredient-list');
const INGREDIENT_LIST = new Map();

function deleteIngredient(e) {
  if (!e.target.matches('button')) return;
  const $tr = e.target.closest('tr');
  const ingredient = $tr.querySelector('td').textContent;
  $tr.remove();
  INGREDIENT_LIST.delete(ingredient);
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const ingredientValue = $ingredient.value;
  const weightValue = $weight.value;
  if (INGREDIENT_LIST.has(ingredientValue)) return alert('이미 존재하는 재료입니다');
  if (!ingredientValue || !weightValue) return alert('입력해주세요');

  const tr = document.createElement('tr');

  tr.innerHTML = `
  <td>${ingredientValue}</td>
  <td>${weightValue}</td>
  <td><button type="button">삭제</button></td>
  `;

  tr.addEventListener('click', deleteIngredient);

  INGREDIENT_LIST.set(ingredientValue, weightValue);
  $table.append(tr);
  $ingredient.value = '';
  $weight.value = '';

  console.log(INGREDIENT_LIST);
});

$button.addEventListener('click', () => {
  if ($list.children.length > 0) $list.innerHTML = '';
  INGREDIENT_LIST.forEach((weight, ingredient) => {
    const li = document.createElement('li');
    li.innerText = `${ingredient} : ${weight}`;
    $list.append(li);
  });
});


/*
=> 코드 분석
    deleteIngredient()는 이름 그대로 재료 삭제해주는 기능. 실제 함수 사용할 때 넘어온 이벤트가 css선택자 button과 일치한다면(matches() -> 이건 삭제버튼이 눌렸을때
      closest()를 약간 this처럼 사용한 것 같다. 새로운 방법! remove()하면 요소 전체 삭제 ()안에 선택자를 넣으면 해당 선택자 삭제
    
    $form의 '추가' 버튼이 눌렸을 때 발생하는 이벤트는 input값으로 재료명과 용량을 받는다. 이 때 Map인 INGREDIENT_LIST에 이미 값이 들어가 있을 경우와 입력하지 않았을 때의 예외처리를 alert로 해준다.
      #36줄이 굳이 가운데 들어간 이유가 있을까?? #38 Map에 set해주는게 먼저 되어야 하는 거 아닌가.. 또 tr 전체에 click이벤트가 붙어 있으면 clickable이지만 버튼 말고는 아무 변화가 없는 건가? 예를 들면 마우스 커서모양?
      전에 강사님이 코드 설명해주실 때 has(), set()을 사용하기 위해 Map으로 했다하셨는데 그럼 Map을 안쓰고는 어떻게 만들지?
      Map에 값을 append하고 입력창을 안비워주면 안비나?? 오 그러네 왜지?? #22 때문인가??

    $button '제출' 버튼이 눌렸을 떄 발생하는 이벤트는 <ul> 아래 <li>추가하는 기능
      #45 children이 있을 경우 왜 $list.innerHTML이 공란이지????? 0보다 작을때 해줘야하는거 아닌가?
      #48 forEach의 경우 Map에는 key가 재료명 value가 무게로 들어가 있을 텐데 인자로 (weight, ingredient)순서로 들어간 이유는?

=> 내 한글 설계와 차이점
    입력값을 key&value로 저장하여 관리했다 new Map();
    그 외 <form>에 대한 이해 부족, submit 고려 X, 값을 계속 저장한다 등
    Map()이 아닌 단순 빈 배열로 저장하여 보관한다면 객체를 담은 배열로 저장시켜야하나? 그럼 결국 Map()을 알 경우가 되는건가..

=> 구글링 키워드
    #14 matches함수
    #15 closest함수 => this의 빌트인 함수
    #11 Map()이란 => 내가 아는 배열의 map함수와 다른거 같음
*/