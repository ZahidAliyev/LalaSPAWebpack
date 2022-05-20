import About from "./about.js";
import {routing}from "./route.js";
let page = document.querySelector(".page");
export const interiorGalleryData = {
  class: "interior-design-gallery",
  header: ["Interior", "Design"],
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices odio id pretium congue. Phasellus sit amet convallis tortor, sed facilisis nisl. Fusce convallis purus ut nunc ornare, eu feugiat nibh suscipit. Pellentesque est quam, consequat vel tellus ac, ullamcorper feugiat mi.",
  projects: [
    {
      id: `0`,
      headers: ["Apartments in", "Mardakan"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "100 sq",
      },
      images: [
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage3.jpg",
        "/logopage4.jpg",
        "/logopage5.jpg",
        "/logopage6.jpg",
      ],
    },
    {
      id: `1`,
      headers: ["Apartments in", "baku"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage1.png",
        "/logopage2.jpg",
        "/logopage3.jpg",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `2`,
      headers: ["asdasd in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
  ],
  link: "/interior-design-gallery",
};
export const exteriorGalleryData = {
  class: "exterior-design-gallery",
  header: ["Exterior", "Design"],
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices odio id pretium congue. Phasellus sit amet convallis tortor, sed facilisis nisl. Fusce convallis purus ut nunc ornare, eu feugiat nibh suscipit. Pellentesque est quam, consequat vel tellus ac, ullamcorper feugiat mi. ",
  projects: [
    {
      id: `0`,
      headers: ["Exterior in", "Mardakan"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "100 sq",
      },
      images: ["/logopage2.jpg", "/logopage1.png", "/logopage3.jpg"],
    },
    {
      id: `1`,
      headers: ["Exterior in", "baku"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage1.png",
        "/logopage2.jpg",
        "/logopage3.jpg",
        "/logopage4.jpg",
      ],
    },
    {
      id: `2`,
      headers: ["asdasd in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `3`,
      headers: ["asdasd in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `4`,
      headers: ["Fourth in", "Exterior"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `5`,
      headers: ["Fifth in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `6`,
      headers: ["AAAAAAAA in", "SFd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `7`,
      headers: ["asdasdasdavvvvvvvvasd in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `8`,
      headers: ["8 in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `9`,
      headers: ["asdasd in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
  ],
  link: "/exterior-design-gallery",
};
export const landscapeGalleryData = {
  class: "landscape-design-gallery",
  header: ["Landscape", "Design"],
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices odio id pretium congue. Phasellus sit amet convallis tortor, sed facilisis nisl. Fusce convallis purus ut nunc ornare, eu feugiat nibh suscipit. Pellentesque est quam, consequat vel tellus ac, ullamcorper feugiat mi.",
  projects: [
    {
      id: `0`,
      headers: ["Landscape in", "Mardakan"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "100 sq",
      },
      images: [
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage3.jpg",
        "/logopage4.jpg",
        "/logopage5.jpg",
        "/logopage6.jpg",
      ],
    },
    {
      id: `1`,
      headers: ["Apartments in", "baku"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage1.png",
        "/logopage2.jpg",
        "/logopage3.jpg",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `2`,
      headers: ["asdasd in", "Lasd"],
      text: "Baku in mardakan lkjlkj asldjals alskjsdas cvbz zc z zcx zxcz xc xcv xxcv xc cxvxcvxcv asdasd asdasd fgh gfh cbvc vb dlasj klajsdlkj adskjlaskj alk jsldjakl jsdalj akl jsldjal kjsdlkj al ksjdl akl jaldsjl kasjdl j lkadsjl kajal ksjdl kaj laksjdl ajkllj alkdsjlak sjd",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
    {
      id: `3`,
      headers: ["asdasd in", "Lasd"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet, erat ac feugiat rhoncus, leo nisl sodales sem, et pellentesque magna elit id ante. Integer porta lacus eros, tincidunt cursus ligula congue in. Pellentesque ultricies fringilla sem, nec faucibus justo condimentum id. Suspendisse eu feugiat felis. Nullam id mauris quis neque luctus dictum. Ut rutrum aliquet mi, id vehicula massa blandit quis. Mauris molestie purus at libero viverra facilisis. Praesent sed maximus odio, ac fermentum enim.",
      info: {
        location: "Mardakan",
        type: "Apartments",
        area: "120 sq",
      },
      images: [
        "/logopage3.jpg",
        "/logopage2.jpg",
        "/logopage1.png",
        "/logopage4.jpg",
        "/logopage5.jpg",
      ],
    },
  ],
  link: "/landscape-design-gallery",
};

let clickOnHeaderCircle = (e) => {
  e.stopPropagation();
  let services = document.querySelector(".Header-services");
  let about = document.querySelector(".Header-about");
  let contact = document.querySelector(".Header-contact");

  if(e.target.classList.contains("Header-circle_itself")) {
    if(e.target.classList.contains("Header-circle_itself--clicked")) {
      services.classList.remove("Header-navs--displayed");
      about.classList.remove("Header-navs--displayed");
      contact.classList.remove("Header-navs--displayed");

      e.target.classList.remove("Header-circle_itself--clicked");

    } else {
      e.target.classList.add("Header-circle_itself--clicked");
      services.classList.add("Header-navs--displayed");
      about.classList.add("Header-navs--displayed");
      contact.classList.add("Header-navs--displayed");      

    }
  }
  if(e.target.classList.contains("Header-circle_svg")) {
    if(e.target.children[0].classList.contains("Header-circle_itself--clicked")) {
      e.target.children[0].classList.remove("Header-circle_itself--clicked");
      services.classList.remove("Header-navs--displayed");
      about.classList.remove("Header-navs--displayed");
      contact.classList.remove("Header-navs--displayed");

    } else {
      e.target.children[0].classList.add("Header-circle_itself--clicked");
      services.classList.add("Header-navs--displayed");
      about.classList.add("Header-navs--displayed");
      contact.classList.add("Header-navs--displayed");
    }
  }
}

// Scrolling logic
let scrollPages = (scroll, event) => {
  let previousPageClass = page.firstElementChild.classList; //necessary for detecting which page is now

  let exteriorRendered = false;
  //Scrolling left or right
  let toRight = false;
  //Interior => Home
  if (scroll < 0 && previousPageClass.contains("interior-design")) {
    console.log("Interior => Home");
    routing(event, page)
  }
  //Home => Interior
  if (scroll > 0 && previousPageClass.contains("initial-page")) {
    console.log("Home => Interior");
    // Section.render(page, "interior-design", true);
    routing(event, page, "/interior-design-section", true);

  }
  // Scrolling wthin Sections
  if (scroll > 0 && previousPageClass.contains("interior-design")) {
    //Interior => Exterior
    toRight = true;
    routing(event, page, "/exterior-design-section", toRight);
    exteriorRendered = true;
  }
  if (scroll < 0 && previousPageClass.contains("exterior-design")) {
    //Exterior => Interior
    console.log("Exterior => Interior");
    toRight = false; // Scroll left from Exterior to Interior
    // Section.render(page, "interior-design", toRight);
    routing(event, page, "/interior-design-section", toRight);

  }
  if (
    scroll > 0 &&
    previousPageClass.contains("exterior-design") &&
    !exteriorRendered
  ) {
    //Exterior => Landscape
    toRight = true;
    // Section.render(page, "landscape-design", toRight);
    routing(event, page, "/landscape-design-section", toRight);

  }
  if (
    scroll < 0 &&
    previousPageClass.contains("landscape-design") &&
    About.windowBottom <= window.innerHeight
  ) {
    //Landscape => Exterior
    toRight = false;
    routing(event, page, "/exterior-design-section", toRight);
    About.removePageFromBody();
  }
};

let pagesScrolled = false;



window.addEventListener("popstate", (event)=>{
  routing(event, page);

})

document.addEventListener("DOMContentLoaded", (event)=>{
  routing(event, page, window.location.pathname);
  page.addEventListener("click", (e) => {
    console.log("click");
    console.log(e.target);
    e.preventDefault();
    clickOnHeaderCircle(e);

    if((e.target.id === "" && e.target.nodeName === "A"  && e.target.href.length > 0 && window.location.pathname != e.target.pathname) || e.target.parentNode.nodeName === "A") {
      console.log("click on anchor everywhere", e.target);
      console.log(e.target.parentNode.nodeName);
      routing(e, page);
    } else {
      if ( 
      
        e.target.id === "interior-image" ||
        e.target.pathname === "/interior-design-gallery"
      ) {
        console.log("click on image");
        routing(e, page, interiorGalleryData.link);
      }
      if (
        e.target.id === "exterior-image" ||
        e.target.pathname === "/exterior-design-gallery"
      ) {
        console.log("click on image");
  
        routing(e, page, exteriorGalleryData.link);
    
      }
      if (
        e.target.id === "landscape-image" ||
        e.target.pathname === "/landscape-design-gallery"
      ) {
        routing(e, page, landscapeGalleryData.link);
      }
    }
    

  });
  page.addEventListener("wheel", (e) => {
    console.log(e.target.href);
    let scroll = e.deltaY;
    let pageClass = page.firstElementChild.classList; //!? Rewatch when Refactor
  
    if (pagesScrolled === false) {
      console.log("scroll pages");
      setTimeout(() => {
        scrollPages(scroll, e);
        pagesScrolled = false;
      }, 1000);
    }
  
    if (pageClass.contains("landscape-design")) { // Here should be trigger to render or not for performance
      //Here we should declare Abour elements and imcert as properties to About.render.
      console.log("render About");
      About.render();
    }
    if(pagesScrolled === false) {
      let services = document.querySelector(".Header-services");
      let about = document.querySelector(".Header-about");
      let contact = document.querySelector(".Header-contact");
      let headerCircle = document.querySelector(".Header-circle_itself");
      if(headerCircle.classList.contains("Header-circle_itself--clicked")) {
        services.classList.remove("Header-navs--displayed");
        about.classList.remove("Header-navs--displayed");
        contact.classList.remove("Header-navs--displayed");
        headerCircle.classList.remove("Header-circle_itself--clicked");
      }
    }
  
    pagesScrolled = true;
  });
})