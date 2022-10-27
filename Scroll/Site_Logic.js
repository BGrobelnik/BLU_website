// MAIN PAGE JS 

//------------------UPDATES THE DATE ON WEBSITE------------------
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//---------------DYNAMIC LINKS HEIGHT--------------- 
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});

//--------------FIXED NAVBAR--------------------
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
         topLink.classList.remove("show-link");
    }
});

//---------------------SMOOTH SCROLLING--------------------
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculating heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
        });
    linksContainer.style.height = 0;
    });
});

//COUNTER
//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){      //e -> event object
       const styles = e.currentTarget.classList; 
       if(styles.contains("decrease")){
        count--;
       }
       else if(styles.contains("increase")){
        count++;
       }
       else{
        count = 0;
       }
       //color of numbers
       if(count > 0){
        value.style.color = "green";
       }
       if (count < 0){
        value.style.color = "red";
       }
       if (count === 0){
        value.style.color = "black";
       }
       value.textContent = count;
    });
});


//COLOR FLIPPER

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}