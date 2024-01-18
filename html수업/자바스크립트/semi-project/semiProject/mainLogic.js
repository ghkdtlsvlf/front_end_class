//무한 스크롤이랑 모든 이미지에 쉐도우 적용

//쉐도우 적용/ 무한스크롤에 있는 이미지만 적용
const allImageShadow = document.querySelectorAll("main > div.mainInfiniteScrollContainer > img")

allImageShadow.forEach((InfiniteImage) => {
    InfiniteImage.classList.add("mainInfiniteScrollElement");
})


//무한 스크롤

//데이터를 받아옴
const imageList = document.querySelector(".mainInfiniteScrollContainer");
let pageToFetch = 1;

async function fetchImages(pageNum) {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=3');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

//데이터를 클래스 속성을 적용 시켜서 저장
function makeImageList(datas) {
    datas.forEach((item) => {
        imageList.innerHTML += " <img class='mainInfiniteScrollElement' src=" + item.download_url + " alt=''>";

    })

}

//조건에 따라서 무한스크롤 재생
// 1번에는 showmore부터 눌러야함

const showmoreButton = document.querySelector("main > div.mainShowmoreHodu > button");
// const showmoreText = document.querySelector("main> div.mainShowmoreHodu> span.mainShowmoreHoduShowText");

showmoreButton.addEventListener("click", () => {
    //     여기 이후에 창 전체를 아래로 밀어야함
    var footerChildren = document.querySelector("footer").children;

    Array.from(footerChildren).forEach(function (element) {
        var currentTranslateY = parseInt(element.style.transform.replace(/[^0-9\-.,]/g, ''), 10) || 0;
        element.style.transform = "translateY(" + (currentTranslateY + 450) + "px)";
    });

    var showMoreHoduChild = document.querySelector("main>div.mainShowmoreHodu").children;

    Array.from(showMoreHoduChild).forEach(function (element) {
        var currentTranslateY = parseInt(element.style.transform.replace(/[^0-9\-.,]/g, ''), 10) || 0;
        element.style.transform = "translateY(" + (currentTranslateY + 450) + "px)";
    });

    window.scrollBy({ top: 450, behavior: 'smooth' });

    fetchImages(pageToFetch++);




})



// 호버기능 있는 버튼
const upperBtn = document.querySelector("main>div>button.mainUpperBtn");

upperBtn.addEventListener("click",()=>{

    window.scrollTo({ top: 0, behavior: 'smooth' });


})

const subBtn = document.getElementById("Subscribe");
const modalWindow = document.querySelector("section>div.modal");
const closeBtn = document.getElementById("CloseModal")
subBtn.addEventListener("click", () => {
    console.log("눌림");
    modalWindow.style.display = "block";
});

closeBtn.addEventListener("click",()=>{
    modalWindow.style.display = "none";
})

//밖에누르면 꺼지도록

window.addEventListener("click", (event) => {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
    }
});


//
// // show more 1번 누른 이후
// const imageObserve = document.querySelectorAll('.mainInfiniteScrollContainer');
// const observer = new IntersectionObserver((items)=>{
//
//     items.forEach(images =>{
//         if(images.intersectionRatio>= 0 && showmoreFlag ){
//             fetchImages(pageToFetch++);
//         }
//
//     })
//
// })
// imageObserve.forEach(el=>{
//     observer.observe(el);
// })


// window.addEventListener("scroll", () => {
//     // 스크롤이 상단으로 얼마나 멀어졌는지. 뷰포트 높이 + 스크롤된 길이
//     // 페이지 전체 높이
//     // 뷰포트 + 스트롤된 길이 + 여분 길이 = 전체 높이
//     if(showmoreFlag&&window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
//
//             fetchImages(pageToFetch++);
//
//     }
// })


// 구독 버튼 누르면 모달창 나오게
