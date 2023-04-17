//  오늘날짜 확인 - 1 : 어제날짜를 화면에 보여주기

//  년,월,일 요소 찾아오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 박스

function init() {
  // 오늘날짜
  const today = new Date();
  // 년
  let year = today.getFullYear();
  // 월(0부터 시작)
  let month = today.getMonth() + 1;
  // 일-1
  let day = today.getDate() - 1;

  txtYear.value = year;

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month; // 4 ==> 04
  selDay.value = day;
  //
}
function show(moiveCd) {
  console.log("movieCd ", movieCd);
}

init();
// 확인 버튼 클릭 시 전일자 영화 순위 가져오기
document.querySelector("#btn1").addEventListener("click", () => {
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";

  // 사용자가 선택한 날짜 가져오기
  txtYear.value + selMon.value + selDay.value;
  // url 과 연결
  url += date;
  // console.log() 확인
  console.log(url);

  // 데이터 요청 ==> ajax
  // fetch

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("주소를 확인해 주세요");
      }
      // 서버에서 오는 데이터는 json
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // dailyBoxOfficeList 가져오기
      const dailyBoxOfficeList = data.dailyBoxOfficeList.dailyBoxOfficeList;
      console.dailyBoxOfficeList // data 에서 rank(rankInten) : moive 추출
        .forEach((element) => {
          // 순위
          str += element.rank + "  위";
          // 전일자 증감
          const rankInten = parseInt(element.rankInten);
          if (rankInten > 0) str += "(▲";
          else if (rankInten < 0) str += "▼";
          else str += "(";

          str += rankInten + ") : ";
          // 영화명
          str +=
            "<a href='#' onclick='javascript:show(" +
            element.movieCd +
            ")'>" +
            element.movieNm +
            "<br>";
        });
      // 박스 영역 안에 보여주기
    })
    .catch((err) => {});
});
