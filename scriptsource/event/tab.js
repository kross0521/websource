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

// tab-button 찾기
const tabBtns = document.querySelectorAll(".tab-button");

// tab-content 찾기
const tabCnts = document.querySelectorAll("tab-content");

tabBtns.forEach((Element) => {
  tabBtn.addEventListener("click", (e) => {
    // 모든 tab-button 의 orange 제거
    tabBtns.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 클릭이 된 tab-button 만 orange 부착
    e.target.classList.add("orange");

    // 모든 tab-content 의 show 제거
    tabCnts.forEach((tabCnt) => {
      tabCnt.classList.remove("show");
    });
    // 현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기
    tabCnts[idx].classList.add("show");
  });
});

tabBtn1.addEventListener("click", () => {
  tabBtn1.classList.add("orange");
  tabBtn0.classList.remove("orange");
  tabBtn2.classList.remove("orange");

  tabCnt1.classList.add("show");
  tabCnt0.classList.remove("show");
  tabCnt2.classList.remove("show");
});

tabBtn2.addEventListener("click", () => {
  tabBtn2.classList.add("orange");
  tabBtn0.classList.remove("orange");
  tabBtn1.classList.remove("orange");

  tabCnt2.classList.add("show");
  tabCnt0.classList.remove("show");
  tabCnt1.classList.remove("show");
});
