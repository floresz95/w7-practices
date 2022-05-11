const beerNavComponent = function (inner){
    return `
        <nav id="navigation">${inner}</nav>
    `
}

const menuButtonComponent = function(){
    return`
        <button id="menu-btn"></button>
    `
}

const beerSectionComponent = function(title, sub, text, id){
    return`
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
            </section>
    `
}

const beerAnchorsComponent = function (title, id){
    return`
        <a href ="${id}">${title}</a>
    `
}


const menuButtonClickedEvent = function(event){ 
    event.currentTarget.closest("#root").classList.toggle("menu-opened");
}
/* const navBarClickedEvent = function(event){ 
    event.currentTarget.closest("#root").classList.toggle("menu-opened");
} */


const loadEvent = function() {
    const rootElement = document.getElementById("root")
    /* console.log(beerSectionComponent);
    console.log(beerSectionComponent());

    (function (){
        console.log("wefbwfb");
    })() */
    
    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());
    
    const menuButtonElement = document.getElementById("menu-btn");
    
    menuButtonElement.addEventListener("click", menuButtonClickedEvent)
    
    let beerSections = "";
    
    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }
    rootElement.insertAdjacentHTML("beforeend", beerSections);
    //console.log(beerSections);

    let beerAnchors = "";


    for (const beer of beers.cards) {
        beerAnchors += beerAnchorsComponent(beer.title)
    }

    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors))

    const navBarElement = document.getElementById("menu-btn");
    
    navBarElement.addEventListener("click", menuButtonClickedEvent)
}

window.addEventListener("load", loadEvent);

/* // function után ha rakunk zárójelet akkor a return utáni rész jelenik meg, ha nem akkor maga a függvény | function() vagy function console.log(beerSectionComponent);
    console.log(beerSectionComponent()); */