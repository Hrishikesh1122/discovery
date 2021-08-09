var blackBoxContents = [
    {
        imgSrc : "../Assets/Home/BlackBox/im-1.jpg",
        mainAd : "Madison",
        subAd : "La Quinta , California"
    },
    {
        imgSrc : "../Assets/Home/BlackBox/im-2.jpg",
        mainAd : "Baker's Bay",
        subAd : "Great Guana Cay, Bahamas"
    },
    {
        imgSrc : "../Assets/Home/BlackBox/im-3.jpg",
        mainAd : "Mountaintop",
        subAd : "Cashiers, North Carolina"
    },
    {
        imgSrc : "../Assets/Home/BlackBox/im-4.jpg",
        mainAd : "Mirabel",
        subAd : "Scottsdale,Arizona"
    },
    {
        imgSrc : "../Assets/Home/BlackBox/im-5.jpg",
        mainAd : "Vaquero",
        subAd : "West Lake,Texas"
    }
]

var index = 0;
function next(){
    index ++ ;
    changeBlackBox();
}

function prev(){
    index --;
    changeBlackBox();
}

function changeBlackBox(){
    if(index < 0) index = blackBoxContents.length -1;
    if(index > blackBoxContents.length ) index = 0 ;

    document.getElementById("black-box-img").src = blackBoxContents[index].imgSrc;
    document.getElementById("main-ad").innerHTML = blackBoxContents[index].mainAd;
    document.getElementById("sub-ad").innerHTML = blackBoxContents[index].subAd;
}