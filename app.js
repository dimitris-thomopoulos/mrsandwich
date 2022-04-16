/* sticky navbar and sticky mobile navigation menu*/

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar (the whole header of the website)
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar and color 'BURGERS' nav option when you reach its scroll position. Remove "sticky" from navbar and coloring from 'BURGERS' when you leave the scroll position

let homeNav = document.querySelector('li.top-nav-item a[href="./index.html"]');
let menuNav = document.querySelector('li.top-nav-item a[href="#menu"]');
let burgersNav = document.querySelector('li.top-nav-item a[href="#burgers"]');
let pizzaNav = document.querySelector('li.top-nav-item a[href="#pizza"]');
let salatesNav = document.querySelector('li.top-nav-item a[href="#salates"]');
let contactNav = document.querySelector('li.top-nav-item a[href="#contact"]');


let burgerMenu = document.querySelector("#burger-menu");

let knifeIcon = document.querySelector("#burger-menu > img:nth-of-type(1)");
let spoonIcon = document.querySelector("#burger-menu > img:nth-of-type(2)");
let forkIcon = document.querySelector("#burger-menu > img:nth-of-type(3)");

let mobileNav = document.querySelector("#mobile-nav");
let mobileNavLink = [...document.querySelectorAll("#mobile-nav > ul > li > a")];

let sandwichSection = document.getElementById('sandwich');


function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
    sandwichSection.classList.add('spaced');

    if (homeNav.classList.contains('active')) {
        menuNav.classList.add('active');
        homeNav.classList.remove('active');
    }

  } else {
    navbar.classList.remove('sticky');
    sandwichSection.classList.remove('spaced');

    menuNav.classList.remove('active');
    burgersNav.classList.remove('active');
    pizzaNav.classList.remove('active');
    salatesNav.classList.remove('active');
    contactNav.classList.remove('active');
    homeNav.classList.add('active');
  }

  if (mobileNav.classList.contains('visible')) {
    
    mobileNav.classList.toggle('visible');

    knifeIcon.classList.toggle('animate-icon');
    spoonIcon.classList.toggle('animate-icon');
    forkIcon.classList.toggle('animate-icon')
    
    for (let i=0; i<mobileNavLink.length; i++) {
        mobileNavLink[i].classList.toggle('visible');
    }
  }

}






// Top navigation menu coloring logic


// when clicking a specific menu option:

let navMenuItems = [...document.querySelectorAll('.top-nav-item')];

for (let i=0; i<navMenuItems.length; i++) {
    navMenuItems[i].firstElementChild.style.transition = "all 0.2s ease-in-out";

    navMenuItems[i].firstElementChild.addEventListener('click', () => {

        if (!(navMenuItems[i].firstElementChild.classList.contains('active'))) {
            
            navMenuItems[i].firstElementChild.classList.add('active');
            
            switch (navMenuItems[i].firstElementChild.innerText) {
                case 'ΑΡΧΙΚΗ':
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    break;
                
                case 'ΜΕΝΟΥ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    break;
                
                case 'BURGERS':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    break;

                case 'ΠΙΤΣΕΣ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    break;

                case 'ΣΑΛΑΤΕΣ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    break;

                case 'ΕΠΙΚΟΙΝΩΝΙΑ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    break;
            }
        }
    })
}


// when clicking a menu option on the footer navigation:

// document.querySelector('nav#footer-nav1 a[href="#contact"').addEventListener('click', () => {
//     if (!(contactNav.classList.contains('active'))) {
        
//         contactNav.classList.add('active');

//         menuNav.classList.remove('active');
//         burgersNav.classList.remove('active');
//         pizzaNav.classList.remove('active');
//         salatesNav.classList.remove('active');
//     }
// });

// document.querySelector('nav#footer-nav2 a[href="#burgers"').addEventListener('click', () => {
//     if (!(burgersNav.classList.contains('active'))) {
        
//         burgersNav.classList.add('active');

//         menuNav.classList.remove('active');
//         pizzaNav.classList.remove('active');
//         salatesNav.classList.remove('active');
//         contactNav.classList.remove('active');
//     }
// });

// document.querySelector('nav#footer-nav2 a[href="#pizza"').addEventListener('click', () => {
//     if (!(pizzaNav.classList.contains('active'))) {
        
//         pizzaNav.classList.add('active');

//         menuNav.classList.remove('active');
//         burgersNav.classList.remove('active');
//         salatesNav.classList.remove('active');
//         contactNav.classList.remove('active');
//     }
// });

// document.querySelector('nav#footer-nav2 a[href="#salates"').addEventListener('click', () => {
//     if (!(salatesNav.classList.contains('active'))) {
        
//         salatesNav.classList.add('active');

//         menuNav.classList.remove('active');
//         burgersNav.classList.remove('active');
//         pizzaNav.classList.remove('active');
//         contactNav.classList.remove('active');
//     }
// });




// when scrolling through the menu:

// let menuCategories = [...document.querySelectorAll('.menu-category')];

// let options = {
//     rootMargin: '-10%',
//     threshold: 0.0
// }

// let observer = new IntersectionObserver(showItem, options);

// function showItem(entries) {
//     for (let i=0; i<entries.length; i++) {
//         if(entries[i].isIntersecting){
//             document.querySelector(`li.top-nav-item a[href="#${menuCategories[i].firstElementChild.innerText.toLowerCase()}"]`).classList.add('active');
//         }
//     }
// }

// menuCategories.forEach(category => {
//     observer.observe(category);
// })






// Menu food list dots dynamic width


// sandwich section:

let sandwichListItems = [...document.querySelectorAll('#sandwich .food-list > li')];
let sandwichFoodDescription = [...document.querySelectorAll('#sandwich .food-list-food p')];
let sandwichDottedLine = [...document.querySelectorAll('#sandwich .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<9; i++) {
    sandwichDottedLine[i].style.width = `${857 - 160 - sandwichFoodDescription[i].offsetWidth}px`;
}}, 1000);



// thrakopsomo section:

let thrakopsomoListItems = [...document.querySelectorAll('#thrakopsomo .food-list > li')];
let thrakopsomoFoodDescription = [...document.querySelectorAll('#thrakopsomo .food-list-food p')];
let thrakopsomoDottedLine = [...document.querySelectorAll('#thrakopsomo .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<12; i++) {
    thrakopsomoDottedLine[i].style.width = `${1257 - 160 - thrakopsomoFoodDescription[i].offsetWidth}px`;
}}, 1000);


// vromiko section:

let vromikoListItems = [...document.querySelectorAll('#vromiko .food-list > li')];
let vromikoFoodDescription = [...document.querySelectorAll('#vromiko .food-list-food p')];
let vromikoDottedLine = [...document.querySelectorAll('#vromiko .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<8; i++) {
    vromikoDottedLine[i].style.width = `${1080 - 120 - vromikoFoodDescription[i].offsetWidth}px`;
}}, 1000);


// club-hot-dogs section:

let clubHotDogsListItems = [...document.querySelectorAll('#club-hot-dogs .food-list > li')];
let clubHotDogsFoodDescription = [...document.querySelectorAll('#club-hot-dogs .food-list-food p')];
let clubHotDogsDottedLine = [...document.querySelectorAll('#club-hot-dogs .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<6; i++) {
    clubHotDogsDottedLine[i].style.width = `${1110 - 120 - clubHotDogsFoodDescription[i].offsetWidth}px`;
}}, 1000);


// burgers section:

let burgersListItems = [...document.querySelectorAll('#burgers .food-list > li')];
let burgersFoodDescription = [...document.querySelectorAll('#burgers .food-list-food p')];
let burgersDottedLine = [...document.querySelectorAll('#burgers .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<8; i++) {
    burgersDottedLine[i].style.width = `${1000 - 120 - burgersFoodDescription[i].offsetWidth}px`;
}}, 1000);


// salads section:

let salatesListItems = [...document.querySelectorAll('#salates .food-list > li')];
let salatesFoodDescription = [...document.querySelectorAll('#salates .food-list-food p')];
let salatesDottedLine = [...document.querySelectorAll('#salates .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<3; i++) {
    salatesDottedLine[i].style.width = `${1000 - 120 - salatesFoodDescription[i].offsetWidth}px`;
}}, 1000);


// merides section:

let meridesListItems = [...document.querySelectorAll('#merides .food-list > li')];
let meridesFoodDescription = [...document.querySelectorAll('#merides .food-list-food p')];
let meridesDottedLine = [...document.querySelectorAll('#merides .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<15; i++) {
    meridesDottedLine[i].style.width = `${1000 - 120 - meridesFoodDescription[i].offsetWidth}px`;
}}, 1000);














// Burger menu click animation (for mobile)

burgerMenu.addEventListener('click', () => {

    knifeIcon.classList.toggle('animate-icon');
    spoonIcon.classList.toggle('animate-icon');
    forkIcon.classList.toggle('animate-icon');

    mobileNav.classList.toggle('visible');
    // HTMLDivElement.style.margin = ('0');
    // body.classList.toggle('activeMobileNav');
    
    for (let i=0; i<mobileNavLink.length; i++) {
        mobileNavLink[i].classList.toggle('visible');
    }
})