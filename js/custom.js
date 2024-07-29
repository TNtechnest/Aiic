// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container1');

    // Define scroll speed and interval
    const scrollSpeed = 5; // Adjust scroll speed (higher value for faster scrolling)
    const scrollInterval = 30; // Adjust scroll interval in milliseconds
    let scrollDirection = 'right'; // Initial scroll direction

    // Function to scroll container automatically
    function autoScroll() {
        if (scrollDirection === 'right') {
            container.scrollLeft += scrollSpeed;
            // Check if reached end of scroll
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                scrollDirection = 'left';
            }
        } else if (scrollDirection === 'left') {
            container.scrollLeft -= scrollSpeed;
            // Check if scrolled back to start
            if (container.scrollLeft <= 0) {
                scrollDirection = 'right';
            }
        }
    }

    // Start auto-scrolling
    let scrollIntervalId = setInterval(autoScroll, scrollInterval);

    // Stop auto-scrolling when mouse enters container
    container.addEventListener('mouseenter', () => {
        clearInterval(scrollIntervalId);
    });

    // Resume auto-scrolling when mouse leaves container
    container.addEventListener('mouseleave', () => {
        scrollIntervalId = setInterval(autoScroll, scrollInterval);
    });

    // Optional: Stop auto-scrolling when clicking on a card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            clearInterval(scrollIntervalId);
        });
    });
});
window.onscroll = function() {stickNavbar()};
const particleContainer = document.querySelector('.particles');
const starBackground = document.querySelector('.star-background');

for (let i = 0; i < 100; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particleContainer.appendChild(particle);
}

for (let i = 0; i < 300; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  starBackground.appendChild(star);
}

/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/

window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
  const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });
  
  class NavigationPage {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      this.lastScroll = 0;
      let self = this;
      $(".nav-tab").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }
    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".nav-tab-slider").css("width", width);
      $(".nav-tab-slider").css("left", left);
    }
  }
  
 
  