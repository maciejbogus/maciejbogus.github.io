let userPosition=Math.round(window.pageYOffset / window.innerHeight);
const sections = document.getElementsByTagName("section");
window.addEventListener("wheel", circleScorll);
window.addEventListener("resize",scrollPage);

let dotNum=userPosition+1;
if(userPosition<2) changeDotSize(dotNum, 1);
else if(userPosition>0) changeDotSize(dotNum, -1);

function circleScorll(e){
    if(e.deltaY>0 && userPosition<2){
        userPosition++;
        changeDotSize(userPosition+1, -1);
        scrollPage();
    }
    else if(e.deltaY<0 && userPosition>0){
        userPosition--;
        changeDotSize(userPosition+1, 1);
        scrollPage();
    }
}

function scrollPage(){
    window.removeEventListener("wheel", circleScorll);
    observerPause.observe(sections[userPosition]);
    window.scrollTo({ 
        top: userPosition*window.innerHeight, 
        behavior:"smooth"
    });
}

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
};

const observerPause = new IntersectionObserver(function(entries, observerPause){
    entries.forEach(entry => {
        if(entry.isIntersecting==true && entry.target==sections[userPosition]){
            window.addEventListener("wheel", circleScorll); //for eventListener pause
        }
    });
}, options);

function btnScroll(num){
    if(num!=userPosition){
        let step = userPosition-parseInt(num);
        userPosition=num;
        scrollPage();
        changeDotSize(parseInt(userPosition)+1, parseInt(step));
    }
}

window.addEventListener("resize", ()=>{window.addEventListener("wheel", circleScorll);});

function changeDotSize(dotNumber, num){
    let dotClass = ".ne"+dotNumber; 
    let prevDotNumber = parseInt(dotNumber)+parseInt(num)
    let prevDotClass = ".ne"+prevDotNumber; 
    document.querySelector(dotClass).style.transform="scale(2.5)";
    document.querySelector(prevDotClass).style.transform="scale(1)";
}