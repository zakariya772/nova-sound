"use strict"
const menu = document.querySelector(".header__menu");
const navbar = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");
const testimonialSection = document.querySelector(".testimonial-section");
const carouselItems = document.querySelectorAll(".testimonial-section__item");
const carouselTrack = document.querySelector(".testimonial-section__track");
const sections = document.querySelectorAll("section");
const btndot = document.querySelectorAll(".btn-dot");
let index = 0;
let gap = parseFloat(getComputedStyle(carouselTrack).gap);
let slideWidth = carouselItems[0].getBoundingClientRect().width;
let totalSlideWidth = slideWidth + gap;

//hambugger menu 
menu.addEventListener("click",function(){
menu.classList.toggle("active");
navbar.classList.toggle("open");
overlay.classList.toggle("show");
})


function updateCarousel(index){
        carouselTrack.style.transform = `translateX(-${index * totalSlideWidth}px)`;
}


function inactiveBtn(){
    btndot.forEach(btn=>btn.classList.remove("active-btn"));
}


function updateBtn (index){
  inactiveBtn();
  btndot[index].classList.add("active-btn");
}


// testimonial carousel
testimonialSection.addEventListener("click",(e)=>{
    if (e.target.matches(".btn--right")){
        index = (index + 1) % carouselItems.length;
        updateCarousel(index);
        updateBtn(index);
    }
    if (e.target.matches(".btn--left")){
        index = (index-1+carouselItems.length) % carouselItems.length;
         updateCarousel(index);
         updateBtn(index);
    }
   const btn = e.target.closest(".btn-dot");
   if (!btn) return;
    const id = Number(btn.dataset.id);
    updateBtn(id);
    updateCarousel(id);
})

// smooth scrolling
navbar.addEventListener("click",function(e){
    e.preventDefault();
  const id = e.target.getAttribute("href");
  const navbar = e.target.closest(".nav-bar");
  navbar.classList.remove("open");
  menu.classList.remove("active");
  overlay.classList.remove("show");
  document.querySelector(id).scrollIntoView({
    behavior:"smooth",
    block:"start",
  })
})

const heroSection = document.querySelector(".hero-section");
const allSections = document.querySelectorAll("section");
const headphoneImages = document.querySelectorAll(".design-section__gallery-img")
const header = document.querySelector(".header");
const navHeight = header.getBoundingClientRect().height;
const observerNavbar = new IntersectionObserver((entries)=>{
  const entry = entries[0];
  const heroSections = entry.target
  if (!entry.isIntersecting) {
    header.classList.add("header-scroll");
  }else{
    header.classList.remove("header-scroll");
  }
},{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,
});
observerNavbar.observe(heroSection);

const observerImg = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      const img = entry.target
      img.src = img.dataset.src;
      img.addEventListener("load",function(e){
        e.preventDefault();
        img.classList.add("lazy-loading");
      })
      observerImg.unobserve(img);
    }
  })
},{
  root:null,
  threshold:1,
  rootMargin:"200px",
})
headphoneImages.forEach(image=>{
observerImg.observe(image);
})

const animateDirectionY = document.querySelectorAll(".hero-animate--y");
const animateSecondDirectionY = document.querySelectorAll(".hero-second__animate--y");
const animateDesignContentY = document.querySelectorAll(".design-section__content");
const animateDesignFeatureY = document.querySelectorAll(".design-section__features");
const cards = document.querySelectorAll(".features-section__card");
const cardContents = document.querySelectorAll(".features-section__content");
const testimonialContent = document.querySelectorAll(".animate-testimonial--content");
const promotionContent = document.querySelector(".promo-section__content");
const promotionOffer = document.querySelector(".promo-section__offer");
const footerList = document.querySelectorAll(".footer-section__list");
const footerItem = document.querySelectorAll(".footer-section__item");
const animateZoomIn = document.querySelectorAll(".zoom-in");
const observeAnimateY = new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    const entryElement = entry.target;
    if (entry.isIntersecting){
      setTimeout(()=>{
        entryElement.classList.add("show-animatey");
      },i*150);
    }
  })
});

animateDirectionY.forEach((element)=>{
  observeAnimateY.observe(element);
});

testimonialContent.forEach((element)=>{
  observeAnimateY.observe(element);
});

const observeSecondAnimateY = new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    const entryElement = entry.target;
     if (entry.isIntersecting){
      setTimeout(()=>{
          entryElement.classList.add("show-animatey");
        },i*150);
     }
  })
},{
  root:null,
  threshold:.5,
})

animateSecondDirectionY.forEach((element)=>{
  observeSecondAnimateY.observe(element);
});

footerItem.forEach(element=>{
  observeSecondAnimateY.observe(element);
})
const observeDesignAnimateY = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting){
       const children = entry.target.children;
       [...children].forEach((child,i)=>{
        setTimeout(()=>{
          child.classList.add("show-animatey");
        },i*200);
       })
    }
  })
},{
  root:null,
  threshold:.25,
})


animateDesignContentY.forEach(element=>{
  observeDesignAnimateY.observe(element);
})

observeDesignAnimateY.observe(promotionContent);

const observeFooterList = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting){
       const children = entry.target.children;
       [...children].forEach((child,i)=>{
        setTimeout(()=>{
          child.classList.add("show-animate");
        },i*150);
       })
    }
  })
},{
  root:null,
  threshold:.25,
})

footerList.forEach(element=>{
  observeFooterList.observe(element)
})
const observeFeatureAnimateY = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting){
       const children = entry.target.children;
       [...children].forEach((child,i)=>{
        setTimeout(()=>{
          child.classList.add("show-animatey");
        },i*300);
       })
    }
  })
},{
  root:null,
  threshold:.5,
})

animateDesignFeatureY.forEach(element=>{
  observeFeatureAnimateY.observe(element);
})

const observeZoomInY = new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    const entryElement = entry.target;
    if (entry.isIntersecting){
        setTimeout(()=>{
          entryElement.classList.add("show-zoomIn");
        },i*300);
    }
  })
})


animateZoomIn.forEach((element)=>{
  observeZoomInY.observe(element);
});
const observeCards = new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      setTimeout(()=>{
         entry.target.classList.add("show-cards");
      },i*300);
    }
  })
})

cards.forEach(element=>{
  observeCards.observe(element);
},{
  root:null,
  threshold:.5,
})

const observeCardContents = new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    if (entry.isIntersecting){
      const children = entry.target.children;
      [...children].forEach(child=>{
         setTimeout(()=>{
          child.classList.add("show-animatey");
        },i*300);
      })
    }
  })
});

cardContents.forEach(element=>{
  observeCardContents.observe(element);
})

function updateCounter(counter){
  const target = Number(counter.dataset.target);
  const duration = 2000;
  const startTime = performance.now();
  console.log(startTime);
  function update(currentTime){
    const elapsed = currentTime-startTime;
    console.log(elapsed);
    const progress = Math.min(elapsed/duration,1);
    console.log(progress);
    const result = Math.floor(progress * target);
   counter.textContent = `${result}+`
    if (progress < 1){
      requestAnimationFrame(update);
    }
  }
   requestAnimationFrame(update);
}

const counters = document.querySelectorAll(".counter");
const observeCounter = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      updateCounter(entry.target);
      observeCounter.unobserve(entry.target);
    }
  })
},{
  threshold:.5,
});

counters.forEach(element=>{
  observeCounter.observe(element);
});

let startX = 0;
let currentX = 0;
let previousTranslate = 0;
let currentTranslate = 0;
let isDragging = false;
let currentIndex = 0;
function startDrag(e){
isDragging = true;
  startX = e.clientX;
  carouselTrack.style.transition = "none";
  carouselTrack.classList.add("dragging");
  carouselTrack.setPointerCapture(e.pointerId);
}
function drag(e){
  if(!isDragging) return;
  currentX = e.clientX;
  console.log(currentX,"currentX")
  let moved = currentX - startX;
  currentTranslate = previousTranslate + moved;
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag(e){
    if(!isDragging) return;
  isDragging = false;
   carouselTrack.classList.remove("dragging");
  let movedBy = currentTranslate - previousTranslate;
  if (movedBy < -50 && currentIndex < carouselItems.length-1){
    currentIndex++;
  }else if (movedBy > 50 && currentIndex > 0){
    currentIndex--;
  }
  updateBtn(currentIndex);
  currentTranslate = -currentIndex * totalSlideWidth;
  previousTranslate = currentTranslate;
  carouselTrack.style.transition = "transform .8s cubic-bezier(0.22, 1, 0.36, 1)";
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
   carouselTrack.releasePointerCapture(e.pointerId);
}

window.addEventListener("resize",()=>{
slideWidth = carouselItems[0].getBoundingClientRect().width;
gap = parseFloat(getComputedStyle(carouselTrack).gap);
totalSlideWidth = slideWidth + gap;
previousTranslate  = -currentIndex * totalSlideWidth;
currentTranslate = previousTranslate;
carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
})
carouselTrack.addEventListener("pointerdown",startDrag);

carouselTrack.addEventListener("pointermove",drag);

carouselTrack.addEventListener("pointerup",endDrag);
carouselTrack.addEventListener("pointercancel",endDrag);
