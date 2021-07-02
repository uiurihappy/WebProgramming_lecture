const logo = document.querySelector(".js-logo");
const portfolio = document.querySelector(".js-portfolio");

function myLogo(){ //로고클릭 이벤트
    logo.addEventListener("click", myLink);
}

function myGit(){ //git 클릿 이벤트
    gitImg.addEventListener("click", myGitLink);
}

//프로젝트 포트폴리오 이벤트
function portfolioLink(){
    const openPortfolio = window.open("https://github.com/uiurihappy");
}

function myportfolio() {
    portfolio.addEventListener("click", portfolioLink);
}

function init(){
    myLogo();
    myGit();

    myportfolio();

}
init();