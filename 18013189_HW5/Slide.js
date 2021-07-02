let index = 0; //포트폴리오 이미지 목록
let indexGame = 0; //게임 이미지 목록
let indexDiary = 0; //다이어리 이미지 목록

window.onload = function() {
    slideShowPortfolio();
    slideShowGame();
    //slideShowDiary();
}

 //포트폴리오 슬라이드
function slideShowPortfolioBack() { //포트폴리오 이전버튼
    let i;
    let x = document.getElementsByClassName("projectImg");
    for(i = 0; i<x.length; i++){
        x[i].style.display="none";
    }
    index--;
    if(index <= 0){
        index= x.length;
    }
    x[index-1].style.display = "inline";
}

function slideShowPortfolio() { //포트폴리오 다음버튼
    let i;
    let x = document.getElementsByClassName("projectImg");
    for(i = 0; i<x.length; i++){
        x[i].style.display="none";
    }
    index++;
    if(index > x.length){
        index = 1;
    }
    x[index-1].style.display = "inline";
    //setTimeout(slideShowPortfolio, 3000);
}

 //스케쥴 슬라이드
 function slideShowGameBack() { //스케쥴 이전버튼
    let j;
    let y = document.getElementsByClassName("projectImgGame")
    for(j = 0; j<y.length; j++){
        y[j].style.display="none";
    }
    indexGame--;
    if(indexGame <= 0){
        indexGame = y.length;
    }
    y[indexGame-1].style.display = "inline";
    //setTimeout(slideShowGame, 3000);
}

function slideShowGame() { //스케쥴 다음버튼
    let j;
    let y = document.getElementsByClassName("projectImgGame")
    for(j = 0; j<y.length; j++){
        y[j].style.display="none";
    }
    indexGame++;
    if(indexGame > y.length){
        indexGame = 1;
    }
    y[indexGame-1].style.display = "inline";
    //setTimeout(slideShowGame, 3000);
}

//로또 슬라이드
/*function slideShowDiary() {
    let k;
    let z = document.getElementsByClassName("projectImgDiary")
    for(k = 0; k<z.length; k++){
        z[k].style.display="none";
    }
    indexDiary++;
    if(indexDiary > z.length){
        indexDiary = 1;
    }
    z[indexDiary-1].style.display = "inline";
    setTimeout(slideShowGame, 3000);
}*/