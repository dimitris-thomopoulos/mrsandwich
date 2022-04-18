/* sticky navbar and sticky mobile navigation menu*/

// Get the navbar (the whole header of the website)
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

let sandwichNav = document.querySelector('li.top-nav-item a[href="#sandwich"]');
let thrakopsomoNav = document.querySelector('li.top-nav-item a[href="#thrakopsomo"]');
let vromikoNav = document.querySelector('li.top-nav-item a[href="#vromiko"]');
let clubHotDogsNav = document.querySelector('li.top-nav-item a[href="#club-hot-dogs"]');
let burgersNav = document.querySelector('li.top-nav-item a[href="#burgers"]');
let salatesNav = document.querySelector('li.top-nav-item a[href="#salates"]');
let meridesNav = document.querySelector('li.top-nav-item a[href="#merides"]');
let mySandwichNav = document.querySelector('li.top-nav-item a[href="#my-sandwich"]');

let navLogo = document.querySelector('header#navbar a#logo');
let desktopNavLogoImage = document.querySelector('header#navbar a#logo img:nth-of-type(1)');
let mobileNavLogoImage = document.querySelector('header#navbar a#logo img:nth-of-type(2)');

let navigationBar = document.querySelector('nav#top-nav');
let burgerMenu = document.querySelector("#burger-menu");

let knifeIcon = document.querySelector("#burger-menu > img:nth-of-type(1)");
let spoonIcon = document.querySelector("#burger-menu > img:nth-of-type(2)");
let forkIcon = document.querySelector("#burger-menu > img:nth-of-type(3)");

let mobileNav = document.querySelector("#mobile-nav");
let mobileNavLogo = document.querySelector("#logo");
let mobileNavLink = [...document.querySelectorAll("#mobile-nav > ul > li > a")];
let mobileDropdownMenuLogo = document.querySelector('#mobile-nav > ul > li > a img');

let sandwichSection = document.getElementById('sandwich');

let footer = document.querySelector('footer');
let telephonePopUp = document.querySelector('#telephone-popup');



// When the user scrolls the page, execute myFunction, responsible for making the navbar sticky
// and also execute a function that fixes the broken footer layout caused by the telephone popup 



window.onscroll = function() {myFunction()

// hide the telephone pop-up when reaching the bottom of the page:

    if ((telephonePopUp.offsetTop > 14713) && !(telephonePopUp.classList.contains('hidden'))) {
        telephonePopUp.classList.add('hidden');
    }

    if ((telephonePopUp.offsetTop < 900) && (telephonePopUp.classList.contains('hidden'))) {
        telephonePopUp.classList.remove('hidden');
    } 

};



// Add the sticky class to the navbar and color 'SANDWICH' nav option when you reach its scroll position. Remove "sticky" from navbar and coloring from 'SANDWICH' when you leave the scroll position

function myFunction() {
  
  if (window.innerWidth <= 680) {

    if (window.pageYOffset > 150) {
        navbar.classList.add('sticky');
        
        mobileNavLogoImage.classList.add('sticky');
    
        navigationBar.classList.add('small');
        sandwichSection.classList.add('spaced');
    
    } else {
      navbar.classList.remove('sticky');
    
      mobileNavLogoImage.classList.remove('sticky');
    
      navigationBar.classList.remove('small');
      sandwichSection.classList.remove('spaced');
      }

  } else if (window.innerWidth <= 1000 && window.innerWidth > 680) {
      if (window.pageYOffset > 150) {
          navbar.classList.add('sticky');
          
          desktopNavLogoImage.classList.add('sticky');
      
          navigationBar.classList.add('small');
          sandwichSection.classList.add('spaced');
      
      } else {
        navbar.classList.remove('sticky');
      
        desktopNavLogoImage.classList.remove('sticky');
      
        navigationBar.classList.remove('small');
        sandwichSection.classList.remove('spaced');
        }

  } else {
      
        if (window.pageYOffset > 252) {
          navbar.classList.add('sticky');
          navLogo.classList.add('hidden');
          navigationBar.classList.add('small');
          sandwichSection.classList.add('spaced');
      
        } else {
          navbar.classList.remove('sticky');
          navLogo.classList.remove('hidden');
          navigationBar.classList.remove('small');
          sandwichSection.classList.remove('spaced');
      
          // thrakopsomoNav.classList.remove('active');
          // vromikoNav.classList.remove('active');
          // clubHotDogsNav.classList.remove('active');
          // burgersNav.classList.remove('active');
          // salatesNav.classList.remove('active');
          // mySandwichNav.classList.remove('active');
          // sandwichNav.classList.add('active');
        }

  }


  if (mobileNav.classList.contains('visible')) {
    
    mobileNav.classList.toggle('visible');
    mobileDropdownMenuLogo.classList.toggle('visible');
    mobileNavLogo.classList.toggle('invisible');

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
                case 'ΣΑΝΤΟΥΙΤΣ':
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;
                
                case 'ΘΡΑΚΟΨΩΜΑ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;
                
                case 'ΒΡΩΜΙΚΟ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'CLUB-HOT DOGS':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'BURGERS':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'ΣΑΛΑΤΕΣ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'ΜΕΡΙΔΕΣ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;
                    break;

                case 'MY SANDWICH':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    break;
            }
        }
    })
}




// when clicking a menu option on the footer navigation:

let footerNavMenuItems = [...document.querySelectorAll('footer .nav-item')];

for (let i=0; i<footerNavMenuItems.length; i++) {
    footerNavMenuItems[i].firstElementChild.style.transition = "all 0.2s ease-in-out";

    footerNavMenuItems[i].firstElementChild.addEventListener('click', () => {

        if (!(navMenuItems[i].firstElementChild.classList.contains('active'))) {
            
            navMenuItems[i].firstElementChild.classList.add('active');
            
            switch (footerNavMenuItems[i].firstElementChild.innerText) {
                case 'ΣΑΝΤΟΥΙΤΣ':
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;
                
                case 'ΘΡΑΚΟΨΩΜΑ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;
                
                case 'ΒΡΩΜΙΚΟ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'CLUB-HOT DOGS':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'BURGERS':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'ΣΑΛΑΤΕΣ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;

                case 'ΜΕΡΙΔΕΣ':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[7].firstElementChild.classList.remove('active');
                    break;
                    break;

                case 'MY SANDWICH':
                    navMenuItems[0].firstElementChild.classList.remove('active');
                    navMenuItems[1].firstElementChild.classList.remove('active');
                    navMenuItems[2].firstElementChild.classList.remove('active');
                    navMenuItems[3].firstElementChild.classList.remove('active');
                    navMenuItems[4].firstElementChild.classList.remove('active');
                    navMenuItems[5].firstElementChild.classList.remove('active');
                    navMenuItems[6].firstElementChild.classList.remove('active');
                    break;
            }
        }
    })
}






// when scrolling through the menu:


// let nav_icon = document.querySelector('.nav_icon');
// let line = document.querySelector('.line');
// let nav_menu = document.querySelector('.nav_menu');
// let nav_links = document.querySelectorAll('.nav_list');
// let nav_length = nav_links.length;
// nav_icon.addEventListener('click', () => {
//   line.classList.toggle('active');
//   nav_menu.classList.toggle('active');
//   nav_links.forEach((link, index) => {
//     if (link.style.animation) {
//       link.style.animation = '';
//     } else {
//       link.style.animation = `linkFadeIn 0.5s ease forwards ${
//         index / nav_length + 0.2
//       }s`;
//     }
//   });
// });
// let header = document.querySelector('.header');
// let hero = document.querySelector('.hero');
// let header_height = header.getBoundingClientRect().height;

// let sticky = (entries) => {
//   let [entry] = entries;
//   if (!entry.isIntersecting) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// };
// let hero_observer = new IntersectionObserver(sticky, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${header_height}px`,
// });
// hero_observer.observe(hero);

// // Active nav-start
// const sectionAll = document.querySelectorAll('section[id]');
// window.addEventListener('scroll', () => {
//   const scrollY = window.pageYOffset;
//   sectionAll.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 100;
//     const sectionId = current.getAttribute('id');
//     console.log(sectionId);
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('li a[href*="' + sectionId + '"]')
//         .classList.add('active');
//     } else {
//       document
//         .querySelector('li a[href*="' + sectionId + '"]')
//         .classList.remove('active');
//     }
//   });
// });
// // Active nav-end





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
    thrakopsomoDottedLine[i].style.width = `${1050 - 160 - thrakopsomoFoodDescription[i].offsetWidth}px`;
}}, 1000);


// vromiko section:

let vromikoListItems = [...document.querySelectorAll('#vromiko .food-list > li')];
let vromikoFoodDescription = [...document.querySelectorAll('#vromiko .food-list-food p')];
let vromikoDottedLine = [...document.querySelectorAll('#vromiko .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<8; i++) {
    vromikoDottedLine[i].style.width = `${1000 - 120 - vromikoFoodDescription[i].offsetWidth}px`;
}}, 1000);


// club-hot-dogs section:

let clubHotDogsListItems = [...document.querySelectorAll('#club-hot-dogs .food-list > li')];
let clubHotDogsFoodDescription = [...document.querySelectorAll('#club-hot-dogs .food-list-food p')];
let clubHotDogsDottedLine = [...document.querySelectorAll('#club-hot-dogs .food-list .dotted-line')];

setTimeout(function(){for (let i=0; i<6; i++) {
    clubHotDogsDottedLine[i].style.width = `${1000 - 120 - clubHotDogsFoodDescription[i].offsetWidth}px`;
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
    mobileDropdownMenuLogo.classList.toggle('visible');
    mobileNavLogo.classList.toggle('invisible');

    // HTMLDivElement.style.margin = ('0');
    // body.classList.toggle('activeMobileNav');
    
    for (let i=0; i<mobileNavLink.length; i++) {
        mobileNavLink[i].classList.toggle('visible');
    }
})


