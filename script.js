const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", mrBig);
buttonTwo.addEventListener("click", Aidan);

function mrBig() {
    image.setAttribute("src", "https://akns-images.eonline.com/eol_images/Entire_Site/20181019/rs_1024x759-181119131923-1024-big-carrie-satc.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top")
    text.innerHTML = "Will they marry?";
    buttonOne.innerHTML = "Yes, but not soon!";
    buttonTwo.innerHTML = "Never";

    buttonOne.addEventListener("click", wedding);
    buttonTwo.addEventListener("click", neverMarried);
}
function wedding() {
    image.setAttribute("src", "https://static.independent.co.uk/2021/06/12/08/newFile.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp")
    text.innerHTML = "Will they marry?";
    text.innerHTML = "They will marry and they will be happy! They will never have kids";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
function neverMarried() {
    image.setAttribute("src", "https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000028626689.jpg?quality=75&strip=all&w=744")
    text.innerHTML = "Will they marry?";
    text.innerHTML = "He will leave her at the altar!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function Aidan() {
    image.setAttribute("src", "https://cdn.firstcuriosity.com/wp-content/uploads/2023/01/21024153/IMG_COM_20230121_0239_39_1472.jpg")
    text.innerHTML = "Will they be happy?";
    buttonOne.innerHTML = "Yes!";
    buttonTwo.innerHTML = "No!";

    buttonOne.addEventListener("click", happyNewEnd);
    buttonTwo.addEventListener("click", notHappy);
}

function happyNewEnd() {
    image.setAttribute("src", "https://img.buzzfeed.com/buzzfeed-static/static/2023-02/10/13/asset/b119c5a44345/sub-buzz-3009-1676036286-6.jpg")
    text.innerHTML = "Will they be happy?";
    text.innerHTML = "Yes, they will be happy! They will have kids";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function notHappy() {
    image.setAttribute("src", "https://www.tvinsider.com/wp-content/uploads/2023/06/6-1-1014x570.png")
    text.innerHTML = "Will they be happy?";
    text.innerHTML = "No! They will broke up!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}