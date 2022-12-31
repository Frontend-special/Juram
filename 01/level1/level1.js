/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

1. 요구사항 확인하기
    - 함수의 parameter로 배열과 끊을 단위로 쓰일 정수를 받는다
    - 해당 정수만큼 잘린 원본 배열을 각각 배열에 담아 배열을 가진 배열로 반환한다.

2. 요구사항 바탕으로 인풋 생각하기
    - 주어질 배열
    - 끊을 단위로 쓰일 정수

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    1 인자로 넘어온 원본 배열을 담을 빈 배열, 인자로 넘어온 정수를 담을 빈 변수, return값을 담을 빈 배열 생성
    2 생성한 빈 배열에 인자로 받은 원본 배열의 값을 복사한다
    3 splice()를 활용하여 인덱스 0부터 인자로 받은 정수만큼 자른다
    4 splice()의 결과값을 push()를 통해 return을 위해 만들어놓은 배열에 넣는다
    5 3~4를 배열의 length만큼 for문을 돌려 반복한다.

4. 단계별 구글링 키워드 생각하기

*/

function division() {}

// arr = [1,2,3,4,5]
// division(arr, 2); === [ [1,2], [3,4], [5] ]