
import {interiorGalleryData, exteriorGalleryData, landscapeGalleryData} from "./index.js";
import Home from "./homepage.js";
import Section from "./sections.js";
import About from "./about.js";
import Gallery from "./Gallery.js";
import Project from "./Project.js";

export let setURL = (event, link)=> {
console.log("🚀 ~ file: route.js ~ line 10 ~ setURL ~ link", link)
    event = event || window.event;

    let galleryPathnameRegex = /(((\/landscape)|(\/exterior)|(\/interior))-design-gallery)/g;
    //Click on Projects Route
    if(galleryPathnameRegex.test(event.target.baseURI) && event.target.id != undefined &&  event.target.nodeName === "IMG" && event.target.parentNode.nodeName != "A") {
        console.log((" SETURL ROute to project"));
        if(event.target.id.length > 0) {
            console.log("click on Project");
            let galleryPAth = event.target.baseURI.match(galleryPathnameRegex)[0]
            console.log(galleryPAth);
            let projectPathProjets = "/projects/"
            let projectPAthId = event.target.id;
            
            let pathname = [galleryPAth, projectPathProjets, projectPAthId].join("");
            window.history.pushState({}, "", pathname)
        }
    
    
    
    } else { // All routing beside Project page
        if(event.target.href != undefined ) {
            console.log(("SETURL ROute to href"));
            if(event.type === "wheel") { // Handling Routing when mouse on links and "wheel" event
                console.log("Handling Routing when mouse on links and 'wheel' event. Section scroll");
                window.history.pushState({}, "", link)
                
            } else { //Route when clicking on links  projects/Explore More/Navbar
                console.log("Route when clicking on links  projects/Explore More/Navbar");
                window.history.pushState({}, "", event.target.href)
            }
        } else {// For Page reload or  if no click event target.href(i.e Wheel Sections)) excpept Logo click, cause logo doesn't have href but his parent does
            //Clicking on Logo Route
            if(event.target.parentNode != null) {
                if(event.target.parentNode.nodeName === "A") {
                    console.log("click on  Logo");
                    window.history.pushState({}, "", event.target.parentNode.href)
                    return;
                }

            }
            //Reload Route or click Section Image to go to Gallery
            console.log(("Reload Route or Section Image to go to Gallery OR Scrolling Sections. event:"), event.type);
            window.history.pushState({}, "", link)
        }
    }
}
let renderHome = (page) => {
    Home.render(page);

}
let renderInteriorGallery = (page) => {
        let interiorGallery = new Gallery(
      interiorGalleryData.class,
      interiorGalleryData.header,
      interiorGalleryData.text,
      interiorGalleryData.projects,
      interiorGalleryData.link
    );
    interiorGallery.render(page);
    interiorGallery.clickOnProjectEvent(page);
}
let renderExteriorGallery = (page) => {
        let exteriorGallery = new Gallery(
      exteriorGalleryData.class,
      exteriorGalleryData.header,
      exteriorGalleryData.text,
      exteriorGalleryData.projects,
      exteriorGalleryData.link
    );
    exteriorGallery.render(page);
    exteriorGallery.clickOnProjectEvent(page);
}
let renderLandscapeGallery = (page) => {
        let landscapeGallery = new Gallery(
      landscapeGalleryData.class,
      landscapeGalleryData.header,
      landscapeGalleryData.text,
      landscapeGalleryData.projects,
      landscapeGalleryData.link
    );
    landscapeGallery.render(page);
    landscapeGallery.clickOnProjectEvent(page);
}
let renderInteriorSection = (page, toRight) => {
    console.log("🚀 ~ file: route.js ~ line 83 ~ renderInteriorSection ~ toRight", toRight)
    console.log("Route and Render interior Section");
    console.log(page.firstElementChild.className , "page");
    //If toRight direction is null, then add Section template to body. Because event is reload or click on href without direction
    if((toRight == null || toRight === true)) { //Because Interior comes after Home, Direction to right true needed too for Adding Section Template
        console.log("Add Section PAge to Body");
        Section.addPagetoBody(page);
        Section.replaceBGColorClass(page, "colorForInterior", "colorForHome"); //Adding Home's color to sections page before adding class for transition
        
    }
    Section.render(page, "interior-design", toRight);
}
let renderExteriorSection = (page, toRight) => {
    console.log("Route and Render Exterior Section");

    if(toRight === null) {
        console.log("Add Section PAge to Body");

        Section.addPagetoBody(page);
        Section.replaceBGColorClass(page, "colorForExterior", "colorForInterior"); //Adding Home's color to sections page before adding class for transition
    }
    Section.render(page, "exterior-design", toRight);
}
let renderLandscapeSection = (page, toRight) => {
    console.log("Route and Render LAndscape Section");

    if(toRight === null) {
        console.log("Add Section PAge to Body");

        Section.addPagetoBody(page);
        Section.replaceBGColorClass(page, "colorForLandscape", "colorForExterior"); //Adding Home's color to sections page before adding class for transition
    }
    Section.render(page, "landscape-design", toRight);
    window.scrollTo(0, 0);
    
}

let renderAbout = (page, toRight) => {
    console.log("render About");
    renderLandscapeSection(page, toRight);
    console.log("scroll to About");
    window.scrollTo(0, window.innerHeight);
    About.render();
}
let renderContact = (page, toRight) => {
    renderLandscapeSection(page, toRight);
    window.scrollTo(0, window.innerHeight * 5);
    console.log("scrolling to Contact");
    About.render();
}

let renderProject = (page,event, id, gallerySectionName, gallerySectionPath) => {
    // new Project
    console.log("new Project");
    let projects;
    switch (gallerySectionName) {
        case "/interior":
            projects = interiorGalleryData.projects;
            break;
        case "/exterior":
            projects = exteriorGalleryData.projects;
            break;
        case "/landscape":
            projects = landscapeGalleryData.projects;
            break;
        default:
            break;
    }
    let projectData = projects.find(project => project.id === id)

    let project = new Project(
        projectData.id,
        projectData.headers,
        projectData.text,
        projectData.info.location,
        projectData.info.type,
        projectData.info.area,
        projectData.images,
        gallerySectionPath
      );

      project.render(page);
      let carouselPage = document.querySelector(".project-page-wrapper");
      let carousel = document.querySelector(".carousel");
      let carouselItem = document.querySelector(".carousel-item");
      
      project.carouselScrollingEvent(carouselPage, carousel, carouselItem);
      project.carouselClickEvent(carouselPage, carousel, carouselItem);
}
const routes = {
    "/": (page) => {renderHome(page)},
    "/interior-design-gallery": (page) => {renderInteriorGallery(page)},
    "/exterior-design-gallery": (page) => {renderExteriorGallery(page)},
    "/landscape-design-gallery": (page) => {renderLandscapeGallery(page)},
    "/interior-design-section": (page, direction) => {renderInteriorSection(page, direction)},
    "/exterior-design-section": (page, direction) => {renderExteriorSection(page, direction)},
    "/landscape-design-section": (page, direction) => {renderLandscapeSection(page, direction)},
    //Below is approximate example of Project Route.
    "/landscape-design-section/about": (page, direction) => {renderAbout(page, direction)},
    "/landscape-design-section/contact": (page, direction) => {renderContact(page, direction)},

    "/projects/": (page, e, id, gallerySectionName, gallerySectionPath) => {renderProject(page, e, id, gallerySectionName, gallerySectionPath)},
    404: (page) => {renderHome(page)},
}

export let routing = (event, page, link = "/", sectionDirection = null) => {
console.log("🚀 ~ file: route.js ~ line 178 ~ routing ~ sectionDirection", sectionDirection)
    console.log("routing");
    let projectRegex = /(^((\/landscape)|(\/exterior)|(\/interior))-design-gallery)(\/projects\/)(\d+)/g;
    if(event.type === "popstate") {
        console.log("popstate event");
        const path = window.location.pathname;
        let projectRegexArray = [...path.matchAll(projectRegex)];
        if(projectRegexArray.length > 0) {
            console.log("popstate project");
            let projectNumber = [...projectRegexArray[0]][7];
            let route = routes[[...projectRegexArray[0]][6]];
            let gallerySectionName = [...projectRegexArray[0]][2];
            let gallerySectionPath = [...projectRegexArray[0]][1];
            route(page, event, projectNumber, gallerySectionName, gallerySectionPath);
    
        } else {
            console.log("popstate plain route");
            let route = routes[path] || routes[404];
            route(page, sectionDirection);
        }
        return;
    }
    setURL(event, link);
    const  path = window.location.pathname;
    let projectRegexArray = [...path.matchAll(projectRegex)];

    if(projectRegexArray.length > 0) {
        console.log("Project clicked( ProjectRegex.length > 0)");
        let projectNumber = [...projectRegexArray[0]][7];
        let route = routes[[...projectRegexArray[0]][6]];
        let gallerySectionName = [...projectRegexArray[0]][2];
        let gallerySectionPath = [...projectRegexArray[0]][1];
        route(page, event, projectNumber, gallerySectionName, gallerySectionPath);

    } else {
        console.log("Normal Route");
        let route = routes[path] || routes[404];
        route(page, sectionDirection);
    }




}