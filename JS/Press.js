console.log("script loaded")
/* Script to change contents of Latest news section */
var newsContents = [
    {
        imageSrc : "../Assets/Press/ln-im1.jpg",
        headingPara : "Discovery's newest property in Kauai North Shore Preserve",
        newsText : "Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat offici isli be ro"+
        "ad co mmodi assumenda ipsam non laborum quam nihil distinctio exercitationem mollitia voluptas"+
        "Quae nemo officia quas tempore suscipit tenetur iusto molestiae blanditiis dicta quod  quia ullam"+
        "et quisquam quibusdam necessitatibus ea explicabo esse adipisci neque rem odio aliquid Adipisci"+
        "placeat deleniti architecto cupiditate 1"
    },
    {
        imageSrc : "../Assets/Press/ln-im2.jpg",
        headingPara : "James Island Discover's newest property",
        newsText : "Discovery's newest property in Kauai North Shore Preserve",
        newsText : "Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat offici isli be ro"+
        "ad co mmodi assumenda ipsam non laborum quam nihil distinctio exercitationem mollitia voluptas"+
        "Quae nemo officia quas tempore suscipit tenetur iusto molestiae blanditiis dicta quod  quia ullam"+
        "et quisquam quibusdam necessitatibus ea explicabo esse adipisci neque rem odio aliquid Adipisci"+
        "placeat deleniti architecto cupiditate 2"
    },
    {
        imageSrc : "../Assets/Press/ln-im3.jpg",
        headingPara : "Costa Terra Discovery's 23rd property",
        newsText : "Discovery's newest property in Kauai North Shore Preserve",
        newsText : "Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat offici isli be ro"+
        "ad co mmodi assumenda ipsam non laborum quam nihil distinctio exercitationem mollitia voluptas"+
        "et quisquam quibusdam necessitatibus ea explicabo esse adipisci neque rem odio aliquid Adipisci"+
        "placeat deleniti architecto cupiditate 3"
    },
    {
        imageSrc : "../Assets/Press/ln-im4.jpg",
        headingPara : "Troubadour To Open Golf Course Fall 2019",
        newsText : "Discovery's newest property in Kauai North Shore Preserve",
        newsText : "Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat offici isli be ro"+
        "et quisquam quibusdam necessitatibus ea explicabo esse adipisci neque rem odio aliquid Adipisci"+
        "placeat deleniti architecto cupiditate 4"
    }
]

var currentNewsPage = 1;
function previousNewsPage(){
    if(currentNewsPage >= 1){
        currentNewsPage --;
        changeNewsPage(currentNewsPage);
    }
}

function nextNewsPage(){
    if(currentNewsPage <= 4){
        currentNewsPage ++;
        changeNewsPage(currentNewsPage);
    }
}

function changeNewsPage(pageNews){
    var page_numbers_news = document.getElementById("page-numbers-news");

    if(pageNews < 1) {
        pageNews = 4;
        currentNewsPage = 4;
    }
    if(pageNews > 4){
     pageNews =1 ;
     currentNewsPage = 1;
    }

    document.getElementById("latest-news-image").src = newsContents[pageNews].imageSrc;
    document.getElementById("heading-para").innerHTML = newsContents[pageNews].headingPara;
    document.getElementById("news-text").innerHTML = newsContents[pageNews].newsText;

    page_numbers_news.innerHTML = pageNews + " - " + 4;    

}

/* Script to change contents of Press section */
var publishers = [
    {
        publisher1 : "New York Times | June 9 ,2021",
        publisher2 : "Business Insider | June 4 ,2021",
        publisher3 : "Luxuary magazine | Spring /Summer ,2021",
        publisher4 : "New York Times | September 11 ,2020 "
    },
    {
        publisher1 : "Elle Decor  | September 2020",
        publisher2 : "New York Times | sept 11 ,2020",
        publisher3 : "Luxuary magazine | Auguest ,2020",
        publisher4 : "New York Times | June ,2020 "
    },
    {
        publisher1 : "New York Times | June 9 ,2019",
        publisher2 : "Business Insider | June 4 ,2019",
        publisher3 : "Luxuary magazine | Spring /Summer ,2019",
        publisher4 : "New York Times | September 11 ,2019 "
    },
    {
        publisher1 : "New York Times | June 9 ,2018",
        publisher2 : "Business Insider | June 4 ,2018",
        publisher3 : "Luxuary magazine | Spring /Summer ,2018",
        publisher4 : "New York Times | September 11 ,2018 "
    },
    {
        publisher1 : "New York Times | June 9 ,2017",
        publisher2 : "Business Insider | June 4 ,2017",
        publisher3 : "Luxuary magazine | Spring /Summer ,2017",
        publisher4 : "New York Times | September 11 ,2017 "
    },
    {
        publisher1 : "Elle Decor  | September 2016",
        publisher2 : "New York Times | sept 11 ,2016",
        publisher3 : "Luxuary magazine | Auguest ,2016",
        publisher4 : "New York Times | June ,2016"
    },
    {
        publisher1 : "New York Times | June 9 ,2015",
        publisher2 : "Business Insider | June 4 ,2015",
        publisher3 : "Luxuary magazine | Spring /Summer,2015",
        publisher4 : "New York Times | September 11 ,2015"
    },
    {
        publisher1 : "New York Times | June 9 ,2014",
        publisher2 : "Business Insider | June 4 ,2014",
        publisher3 : "Luxuary magazine | Spring /Summer ,2014",
        publisher4 : "New York Times | September 11 ,2014 "
    },
    {
        publisher1 : "New York Times | June 9 ,2013",
        publisher2 : "Business Insider | June 4 ,2013",
        publisher3 : "Luxuary magazine | Spring /Summer ,2013",
        publisher4 : "New York Times | September 11 ,2013"
    },
    {
        publisher1 : "New York Times | June 9 ,2012",
        publisher2 : "Business Insider | June 4 ,2012",
        publisher3 : "Luxuary magazine | Spring /Summer ,2012",
        publisher4 : "New York Times | September 11 ,2012"
    },
    {
        publisher1 : "Elle Decor  | September 2011",
        publisher2 : "New York Times | sept 11 ,2011",
        publisher3 : "Luxuary magazine | Auguest ,2011",
        publisher4 : "New York Times | June ,2011"
    },
    {
        publisher1 : "New York Times | June 9 ,2010",
        publisher2 : "Business Insider | June 4 ,2010",
        publisher3 : "Luxuary magazine | Spring /Summer ,2010",
        publisher4 : "New York Times | September 11 ,2010"
    },
    {
        publisher1 : "New York Times | June 9 ,2009",
        publisher2 : "Business Insider | June 4 ,2009",
        publisher3 : "Luxuary magazine | Spring /Summer ,2009",
        publisher4 : "New York Times | September 11 ,2009"
    }

];

var current_page = 1;

function previousPage(){
    if(current_page >= 1){
        current_page --;
        changePage(current_page);
    }
}

function nextPage(){
    if(current_page <= 13){
        current_page ++;
        changePage(current_page);
    }
}

function changePage(page){
    var page_numbers = document.getElementById("page-numbers");

    if(page < 1) {
        page = 13;
        current_page = 13;
    }
    if(page > 13){
     page =1 ;
     current_page = 1;
    }

    document.getElementById("pub1").innerHTML = `<strong> ${publishers[page].publisher1} </strong>`
    document.getElementById("pub2").innerHTML = `<strong> ${publishers[page].publisher2} </strong>`
    document.getElementById("pub3").innerHTML = `<strong> ${publishers[page].publisher3} </strong>`
    document.getElementById("pub4").innerHTML = `<strong> ${publishers[page].publisher4} </strong>`
    page_numbers.innerHTML = page + " - " + 13;    

}

