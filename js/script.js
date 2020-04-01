/**
 * 
 * Automaticlly add the setions in the navigation.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

// Scroll to section on link click

// Set sections as active

const ulNav = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

const loadSections = () => {
  for (const section of sections) {
    const liItem = document.createElement('li');
    ulNav.appendChild(liItem);

    const aTag = document.createElement('a');
    aTag.textContent = section.dataset.name;
    aTag.dataset.sectionId = section.id;
    aTag.classList.add('menu__link');

    aTag.addEventListener('click', handleAnchorClick);

    liItem.appendChild(aTag);
  }
};

const handleAnchorClick = (event) => {
  const currentAnchor = event.currentTarget;
  const sectionId = currentAnchor.dataset.sectionId;
  const sectionElement = document.querySelector(`#${sectionId}`);
  for (const section of sections) {
    section.classList.remove('your-active-class');
  }
  sectionElement.classList.add('your-active-class');

  sectionScroll(sectionElement.offsetTop);

  //console.log(event.currentTarget);
  //console.log(sectionElement.offsetTop, sectionElement);
};

const sectionScroll = (sectionYPosition) => {
  window.scrollTo(0, sectionYPosition);
};

loadSections();
