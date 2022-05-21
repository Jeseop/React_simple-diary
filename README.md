# React를 이용한 Toy Project (One Page Application)

---

## 주 목표

1. React를 사용하여 사용자 입력 및 배열 리스트 처리하기
2. React Lifecycle과 API
3. React App 프로처럼 성능 최적화하기 with 도구 사용
4. React 컴포넌트 트리에 전역 데이터 공급하기

## 날짜

2022-05-16 ~

## 세부 목표 (어떤 개념을 익힌 것인가)

2022-05-16 ~ 2022-05-18 다양한 사용자 입력 처리하기  
React에서 사용자 입력 처리 (useState with <`input/`>)

1. 한 줄 입력 처리하기
2. 여러 줄 입력 처리하기
3. 선택 박스 입력 처리하기
4. 사용자 입력 데이터 핸들링하기

2022-05-18 ~

1. React에서 DOM 조작하기

- 목표 : useRef 개념 정리 및 사용.
- 일기 저장 버튼을 클릭했을 때 작성자와 일기가 정상적으로 입력되었는지 확인하고 아니라면 focus하기 (useRef with <`ref/`>)

2. React에서 리스트 렌더링 하기

- 배열을 이용하여 React에서 LIST를 렌더링 해보고 개별적인 컴포넌트로 만들어보기 (`Array.map((it)=><Component key={it.id}{···it}/>`)

3. React에서 리스트 데이터 추가하기

- 배일을 이용한 React의 List에 아이템을 동적으로 추가해보기  
  (단방향 데이터 흐름, 역방향 이벤트 흐름, state를 끌어올리는 방법)

4. 리스트 데이터 삭제하기

5. React에서 API 호출하기

- useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 일기 데이터의 초기값으로 이용하기

6. 연산 결과 값을 재사용 하기. (Memoization 이해하기)

- 어떤 함수가 있고, 그 함수가 어떤 값을 반환하고 있는데 그 반환까지의 연산을 최적화하려면 useMemo를 사용하여 댑스에 어떤 값이 변화할 때만 그 리턴까지의 연산을 수행할 것인지 명시하면 그 함수를 값처럼 사용하여 연산최적화 가능.
