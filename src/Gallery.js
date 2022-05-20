import {routing}from "./route.js";
import Header from "./Header.js"
export default class Gallery {
    constructor(galleryClass, briefHeader=[], briefText, projects =[], link) {
      this.galleryClass = galleryClass;
        this.briefHeader = briefHeader;
        this.briefText = briefText;
        this.projects = projects;
        this.link = link;
    }
    incertImages() {
      let fragment = document.createDocumentFragment();
      let imagesBlockWrapper = document.querySelector(".section-gallery_portfolio");
      this.projects.forEach(project => {

        let img = document.createElement("img");
        img.src = project.images[0];
        img.id = `${project.id}`
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("section-gallery_portfolio-work");
        imageWrapper.appendChild(img);
        fragment.appendChild(imageWrapper);
      })
      imagesBlockWrapper.appendChild(fragment);

    }
    htmlTemplate() {
        return `
        <div class="gallery-wrapper"></div>
        <div class="section-gallery ${ this.galleryClass}">
        <nav class="section-gallery_navbar">
        ${Header.template("/logodark.png")}
        </nav>
        <div class="section-gallery_main">
          <div class="section-gallery_brief-wrapper">
            <div class="section-gallery_brief">
              <div class="section-gallery_brief-header">
                <p>${this.briefHeader[0]}</p>
                <p>${this.briefHeader[1]}</p>
              </div>
              <p class="section-gallery_brief-text">
                ${this.briefText}
              </p>
            </div>
          </div>
          <div class="section-gallery_portfolio">
                
          </div>
        </div>
  
        <div class="section-gallery_footer"></div>
      </div>
        `
    }
    render(page) {
        page.innerHTML = "";
        let sectionsGalleryHTML = this.htmlTemplate();
        page.insertAdjacentHTML("afterbegin", sectionsGalleryHTML);
        this.incertImages();
        Header.addEvent();
    }

    clickOnProjectEvent(page) {
      let galleryPage = document.querySelector(`.${this.galleryClass}`)

      galleryPage.addEventListener("click", (e)=>{

        if(e.target.id != "" || e.target.nodeName === "A") {
          console.log("Routing in Gallery click");
          routing(e, page);
        }      
      })
    }

}