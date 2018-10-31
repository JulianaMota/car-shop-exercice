//global variables
// grab template
const template = document.querySelector("#car-template").content;
const animationLoader = document.querySelector(".drip");
let myLoader;

function loaderTime()

//fetch content
function getCars(){
    fetch("http://abmostudio.com/kea/wordpress/wp-json/wp/v2/car?_embed")
        .then(res => res.json())
        .then(showCars)
}


function showCars(carList){
    console.log(carList)
    //hideLoader()
    carList.forEach(showSingleCar)
}

function showSingleCar(car){
    console.log(car._embedded["wp:featuredmedia"])
    //make copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent=car.title.rendered;
    copy.querySelector(".year span").textContent=car.acf.year;
    copy.querySelector(".color span").textContent=car.acf.color;
    copy.querySelector(".horse-power span").textContent=car.acf.horse_power;
    copy.querySelector(".price span").textContent=car.acf.price;
    copy.querySelector(".engine span").textContent=car.acf.engine;
    copy.querySelector(".body").innerHTML=car.content.rendered;
    copy.querySelector(".video").innerHTML=car.acf.video;
    copy.querySelector("img").src=car._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;



    document.querySelector("main").appendChild(copy);
}

/*function showLoader(){
    animationLoader.classList.remove("hide")
}

function hideLoader(){
    animationLoader.classList.add("hide")
}*/

getCars();
showLoader()

