// orange 클래스명 부착
// tab-버튼0 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스명 부착

// classList.add    /   classList.remove

// 버튼 클릭에 맞춰 tab-content 보여주기

// tab.js ==> forEach(== for) 변경

// const arr = [1, 2, 3, 4];
// for (let i = 0; i < 배열길이; i++) {
//   // 첫번째 요소 가져오기
//   let 가져온요소 = 배열명[i];
//   console.log(가져온요소);
// }

// arr.forEach((item, idx) => {
//   console.log(item);
// });
// tab.js ==> 이벤트 버블링 변경
// 이벤트버블링 : 자식에서 발생한 이벤트가 부모로 전달

// 이벤트 대상(tab-button) => 부모(ul) 에게 이벤트가 전달
const tabParent = document.querySelector(".list");
const tabBtns = document.querySelectorAll(".tab-button");
// tabBtns.forEach((tabBtn) => {
//   tabBtns.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
//   });
// });

function tabOpen(idx) {
  // 모든 tab-button 의 orange 제거
  tabBtns.forEach((item) => {
    item.classList.remove("orange");
  });

  // 모든 tab-content 의 show 제거
  tabCnts.forEach((tabCnt) => {
    tabCnt.classList.remove("show");
  });
  // 현재 클릭이 된 tab-button 만 orange 부착
  tabBtns[idx].classList.add("orange");
  // 현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기
  tabCnts[idx].classList.add("show");
}

// tabParent.addEventListener("click", (e) => {
//   // console.log(e.currentTarget.className);
//   // console.log(e.target);

//   if (e.target == tabBtns[0]) {
//     tabOpen(0);
//   } else if (e.target == tabBtns[1]) {
//     tabOpen(1);
//   } else {
//     tabOpen(2);
//   }
// });

// // tab-content 찾기

// const tabCnts = document.querySelectorAll("tab-content");

// tabBtns.forEach((Element) => {
//   tabBtn.addEventListener("click", (e) => {
//     // 모든 tab-button 의 orange 제거
//     tabBtns.forEach((item) => {
//       item.classList.remove("orange");
//     });
//     // 현재 클릭이 된 tab-button 만 orange 부착
//     e.target.classList.add("orange");

//     // 모든 tab-content 의 show 제거
//     tabCnts.forEach((tabCnt) => {
//       tabCnt.classList.remove("show");
//     });
//     // 현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기
//     tabCnts[idx].classList.add("show");
//   });
// });

// data - 이용 : 조건문 안 쓸려고
// data - : 전역속성
//    - 다음에는 이름은 자유롭게

// <h1 data-index-number="1234">헤드</h1>
// data-index-number(지정) : dataset.indexNumber(접근)
// 스크립트에서 접근
// const h1 = document.querySelector("h1")
// h1.dataset.indexNumber

tabParent.addEventListener("click", (e) => {
  // 이벤트가 일어난 대상의 data- 값 가져오기
  tabOpen(e.target.dataset.id);
});
