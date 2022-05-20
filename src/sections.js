import Header from "/Header.js";
import About from "./about.js";
import {interiorGalleryData, exteriorGalleryData, landscapeGalleryData} from "./index.js";
class Section {
    static sectionsPageTemplate = `
    <div class="">
    <!----------------HEADER----------->

    <!--------------MAIN-------------->
    <main class="sections-main">
      <div class="section-image-wrapper">
        
      </div>
      <div class="section-brief-wrapper">
        <p class="section-brief-name brief-first-name"> </p>
        <p class="section-brief-name brief-second-name"> </p>
        <p class="section-brief-text">
          
        </p>
        <a href="" class="section-brief-explore Link-Hover">Explore more</a>
      </div>
      <div class="scroll-lines">
        <div class="scroll-line" id="interior"></div>
        <div class="scroll-line" id="exterior"></div>
        <div class="scroll-line" id="landscape"></div>
      </div>
    </main>
    </div>
    `

    static   addPagetoBody(page) {
      page.innerHTML = "";  
      page.insertAdjacentHTML("afterbegin", this.sectionsPageTemplate);
      page.firstElementChild.lastElementChild.insertAdjacentHTML("beforebegin", Header.template("/logomenu.png"));

    }
    static replaceBGColorClass =(page, bgcolorClassNameRemove, bgcolorClassNameAdd)=> {
      page.firstElementChild.classList.remove(bgcolorClassNameRemove);
      page.firstElementChild.classList.add(bgcolorClassNameAdd);

    }
    static createElement = (tag, id=0,  className = 0) => {
      let element = document.createElement(tag);
      className === [] ? className.forEach(arg => element.classList.add(arg)) : element.setAttribute("class", className);
      element.id = id;
      return element;
    }
    static createSectionImage = (image, id) => {
      let sectionImage = this.createElement("img");
      sectionImage.src = image;
      sectionImage.id = id;
      return sectionImage;
    }
    static addImgToWrapperAndWrapperToSection = (currentSectionImageWrapper, sectionImageWrapper, sectionImage) => {

      currentSectionImageWrapper.appendChild(sectionImage);
      sectionImageWrapper.appendChild(currentSectionImageWrapper);
    }
    static changeBrief =(header = [], text, briefFirstName, briefSecondName, sectionBriefText) => {
      briefFirstName.textContent = header[0];
      briefSecondName.textContent = header[1]
      sectionBriefText.textContent = text;
    }
    static changeBriefPosition = (briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, positionClass, add = true) => {
      if(add) {
        briefFirstName.classList.add(positionClass);
        briefSecondName.classList.add(positionClass);
        sectionBriefText.classList.add(positionClass);
        sectionBriefExplore.classList.add(positionClass);
      } else {
        briefFirstName.classList.remove(positionClass);
        briefSecondName.classList.remove(positionClass);
        sectionBriefText.classList.remove(positionClass);
        sectionBriefExplore.classList.remove(positionClass);
      }

    }
    static changeBriefTransition = (briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, transitionClass, add = true) => {
      if(add) {
        briefFirstName.classList.add(transitionClass);
        briefSecondName.classList.add(transitionClass);
        sectionBriefText.classList.add(transitionClass);
        sectionBriefExplore.classList.add(transitionClass);
      } else {
        briefFirstName.classList.remove(transitionClass);
        briefSecondName.classList.remove(transitionClass);
        sectionBriefText.classList.remove(transitionClass);
        sectionBriefExplore.classList.remove(transitionClass);
      }

    }
    static changeSectionClassName = (page, sectionClass,  ...otherPageClassNames) => {
      page.firstElementChild.classList.remove(...otherPageClassNames);
      page.firstElementChild.classList.add(sectionClass);
    }
    static addSectiomImgAndAddToDom = (wrapperTag, wrapperClassName, img, imgId, sectionImageWrapper)=> {
      let interiorImageWrapper = this.createElement(wrapperTag, null, wrapperClassName);
      let interiorImage = this.createSectionImage(img, imgId);
      this.addImgToWrapperAndWrapperToSection(interiorImageWrapper, sectionImageWrapper, interiorImage);
    }
    static renderInterior = (page, sectionClass, otherPageClassNames, sectionImageWrapper, childOrder, briefFirstName,briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, toRight) => {
      //Remove all elements and styles from previous section
      sectionBriefExplore.href = "/interior-design-gallery"
      this.changeSectionClassName(page, sectionClass, ...otherPageClassNames);
      if(document.getElementById("interior-image") === null) {
        this.addSectiomImgAndAddToDom("div", "interior-image-wrapper", "/logopage.png", "interior-image", sectionImageWrapper);
      } 
      if(toRight != null) {
        if(toRight) {// Go Home to Interior

          if(window.getComputedStyle(page.firstElementChild).getPropertyValue("background-color")) {//waiting for applied style to dom, for changing properties appropriate
            this.replaceBGColorClass(page, "colorForHome", "colorForInterior")
            this.changeBrief(interiorGalleryData.header, interiorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
            sectionImageWrapper.classList.add("section-image-wrapper-center");
            // interiorImageWrapper.classList.add("section-image-wrapper-center");
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
            scrollLines.classList.add("scroll-lines--appear");
          }
        } else {             
          // Scroll Left/ From EXterior to Interior
            // let interiorImageWrapper = document.querySelector(".interior-image-wrapper");
            let exteriorImageWrapper = document.querySelector(".exterior-image-wrapper");
            sectionImageWrapper.classList.replace("section-image-wrapper-left", "section-image-wrapper-center");
            sectionImageWrapper.classList.replace("section-image-wrapper-left", "section-image-wrapper-center");
            // interiorImageWrapper.classList.replace("section-image-wrapper-left", "section-image-wrapper-center");
            // interiorImageWrapper.classList.replace("section-image-wrapper-left", "section-image-wrapper-center");
            exteriorImageWrapper.classList.replace("exterior-image-wrapper--center", "exterior-image-wrapper--outside");
            //Shifting brief elements to outside
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", false);
  
            setTimeout(() => {
  
              this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true)
              this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", true);
            }, 500);
  
            setTimeout(()=>{
              this.replaceBGColorClass(page, "colorForExterior", "colorForInterior")
              this.changeBrief(interiorGalleryData.header, interiorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
              this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", false);
  
              this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
  
              this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
            }, 520);   
        }
      } else { // Not Scrolling Sections(Reload, popstate, click route)
        this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true)
        sectionImageWrapper.classList.add("section-elements-NoTransition");

        if(window.getComputedStyle(page.firstElementChild).getPropertyValue("background-color")) {//waiting for applied style to dom, for changing properties appropriate
          this.replaceBGColorClass(page, "colorForHome", "colorForInterior")
          this.changeBrief(interiorGalleryData.header, interiorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
          sectionImageWrapper.classList.add("section-image-wrapper-center");
          // interiorImageWrapper.classList.add("section-image-wrapper-center");
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
          scrollLines.classList.add("scroll-lines--appear");
        }
        setTimeout(() => {
          this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
          sectionImageWrapper.classList.remove("section-elements-NoTransition");
        }, 300);
      }

      

    }
    static renderExterior = (page, sectionClass, otherPageClassNames, sectionImageWrapper, childOrder, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, toRight) => {
      this.changeSectionClassName(page, sectionClass, ...otherPageClassNames);

      sectionBriefExplore.href = "/exterior-design-gallery"

      if(toRight != null) {
        if(document.getElementById("exterior-image") === null) {
          this.addSectiomImgAndAddToDom("div", "exterior-image-wrapper", "/logopage.png", "exterior-image", sectionImageWrapper);
        }
        if(toRight) { // From Interior to Exterior
          //adding exterior IMAGE to the page but Not displayed yet  
          let exteriorImageWrapper = sectionImageWrapper.children[childOrder];
          //Adding current section className to page's div
          //Apply animation styles after allinitial css applied
          if(window.getComputedStyle(page.firstElementChild).getPropertyValue("background-color")) {//waiting for applied style to dom, for changing properties appropriate
            //moving elements left 
            sectionImageWrapper.classList.add("section-image-wrapper-left");
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", true);
  
            setTimeout(() => {
              //removing transition animation for removing elements back to outside & exterior image too
  
              this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true)
              exteriorImageWrapper.classList.add("section-elements-NoTransition");
  
  
              this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", false);
              this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", false);
  
              //Moving exterior image wrapper to outside while display none
              exteriorImageWrapper.classList.add("exterior-image-wrapper--outside", "exterior-image-wrapper--display-inherit");
            }, 1000);
            setTimeout(() => {
              this.replaceBGColorClass(page, "colorForInterior", "colorForExterior")
              //Make exterior image transitional again for animation effect and moving it to center
              exteriorImageWrapper.classList.remove("section-elements-NoTransition");
              exteriorImageWrapper.classList.add("exterior-image-wrapper--center");
              //Changing brief text for exterior
              this.changeBrief(exteriorGalleryData.header, exteriorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
  
              //Make brief transitional again for animation effect and moving it to center
              if(briefFirstName.classList.contains("section-elements-NoTransition")) {
                this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
              }
              this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
  
            }, 1020);
          }
        } else { // From Landscape To  EXterior
        let exteriorImageWrapper = document.querySelector(".exterior-image-wrapper");
        let landscapeImageWrapper = document.querySelector(".landscape-image-wrapper");
        this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", false);
  
        landscapeImageWrapper.classList.remove("landscape-image-wrapper--center");
        setTimeout(() => {
          this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true);
  
          this.changeBrief(exteriorGalleryData.header, exteriorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
  
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", true);
  
          exteriorImageWrapper.classList.remove("exterior-image-wrapper--left", "exterior-image-wrapper-outside");
          exteriorImageWrapper.classList.add("exterior-image-wrapper--center");
        }, 500);
        setTimeout(() => {
          this.replaceBGColorClass(page, "colorForLandscape", "colorForExterior")
          this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", false);
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
  
          sectionImageWrapper.classList.remove("section-image-wrapper-left-outside", "section-image-wrapper-left");
          sectionImageWrapper.classList.add("section-image-wrapper-left");
  
        }, 700);
  
          }
      } else {// If not scrolling
        console.log("Dom lodaded EXterior");
        this.changeBrief(interiorGalleryData.header, exteriorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);

        this.addSectiomImgAndAddToDom("div", "interior-image-wrapper", "/logopage.png", "interior-image", sectionImageWrapper);
        
        this.addSectiomImgAndAddToDom("div", "exterior-image-wrapper", "/logopage.png", "exterior-image", sectionImageWrapper);

        let exteriorImageWrapper = sectionImageWrapper.children[childOrder];
        //removing transition animation for removing elements back to outside & exterior image too
        exteriorImageWrapper.classList.add("section-elements-NoTransition");
        sectionImageWrapper.classList.add("section-elements-NoTransition");

        if(window.getComputedStyle(page.firstElementChild).getPropertyValue("background-color")) {//waiting for applied style to dom, for changing properties appropriate
          this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true)
          //moving elements left 
          sectionImageWrapper.classList.add("section-image-wrapper-left");
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", true);

            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", false);
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", false);

            //Moving exterior image wrapper to outside while display none
            exteriorImageWrapper.classList.add("exterior-image-wrapper--outside", "exterior-image-wrapper--display-inherit");
          
          
            //Make exterior image transitional again for animation effect and moving it to center
            exteriorImageWrapper.classList.add("exterior-image-wrapper--center");
            //Changing brief text for exterior
            this.changeBrief(exteriorGalleryData.header, exteriorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);

            //Make brief transitional again for animation effect and moving it to center

            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
          setTimeout(() => {
            if(briefFirstName.classList.contains("section-elements-NoTransition")) {
              this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
            }
            exteriorImageWrapper.classList.remove("section-elements-NoTransition");
            this.replaceBGColorClass(page, "colorForInterior", "colorForExterior");
            sectionImageWrapper.classList.remove("section-elements-NoTransition");

          }, 300);

        }
      }


    }
    static renderLandscape = (page, sectionClass, otherPageClassNames, sectionImageWrapper, childOrder, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, toRight) => {
      //Adding current section className to page's div
      this.changeSectionClassName(page, sectionClass, ...otherPageClassNames);
      sectionBriefExplore.href = "/landscape-design-gallery";
      if(toRight) { //From Exterior to Landscape
        if(document.getElementById("landscape-image") === null) {
          this.addSectiomImgAndAddToDom("div", "landscape-image-wrapper", "/logopage.png", "landscape-image", sectionImageWrapper);
        }
        //adding exterior IMAGE to the page but Not displayed yet
        let exteriorImageWrapper = document.querySelector(".exterior-image-wrapper")  
        let landscapeImageWrapper = sectionImageWrapper.children[childOrder];
        //Apply animation styles after allinitial css applied
        if(window.getComputedStyle(page.firstElementChild).getPropertyValue("background-color")) {//waiting for applied style to dom, for changing properties appropriate
          //moving elements left 
          sectionImageWrapper.classList.remove("section-image-wrapper-left");
          sectionImageWrapper.classList.add("section-image-wrapper-left-outside");
          exteriorImageWrapper.classList.add("exterior-image-wrapper--left");
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", true);

          setTimeout(() => {
            //removing transition animation for removing elements back to outside & exterior image too
            this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true)
            landscapeImageWrapper.classList.add("section-elements-NoTransition");
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", false);
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", false);
            //Moving exterior image wrapper to outside while display none
            landscapeImageWrapper.classList.add("landscape-image-wrapper--outside", "landscape-image-wrapper--display-inherit");
          }, 1000);
          setTimeout(() => {
            this.replaceBGColorClass(page, "colorForExterior", "colorForLandscape")
            //Make exterior image transitional again for animation effect and moving it to center
            landscapeImageWrapper.classList.remove("section-elements-NoTransition");
            landscapeImageWrapper.classList.add("landscape-image-wrapper--center");
            //Changing brief text for exterior
            this.changeBrief(landscapeGalleryData.header, landscapeGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
            //Make brief transitional again for animation effect and moving it to center
            if(briefFirstName.classList.contains("section-elements-NoTransition")) {
              this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
            }
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
            About.addPageToBody(page);
          }, 1020);
        }
      } else {
        console.log("Null ");
        this.changeBrief(exteriorGalleryData.header, exteriorGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
        this.addSectiomImgAndAddToDom("div", "interior-image-wrapper", "/logopage.png", "interior-image", sectionImageWrapper);
        this.addSectiomImgAndAddToDom("div", "exterior-image-wrapper", "/logopage.png", "exterior-image", sectionImageWrapper);
        this.addSectiomImgAndAddToDom("div", "landscape-image-wrapper", "/logopage.png", "landscape-image", sectionImageWrapper);
        //adding exterior IMAGE to the page but Not displayed yet
        // let exteriorImageWrapper = document.querySelector(".exterior-image-wrapper")  
        let exteriorImageWrapper = sectionImageWrapper.children[1];
        exteriorImageWrapper.classList.add("section-elements-NoTransition");
        sectionImageWrapper.classList.add("section-elements-NoTransition");
        exteriorImageWrapper.classList.add("exterior-image-wrapper--display-inherit");

        let landscapeImageWrapper = sectionImageWrapper.children[2];

        //Apply animation styles after allinitial css applied
        if(window.getComputedStyle(page.firstElementChild).getPropertyValue("background-color")) {//waiting for applied style to dom, for changing properties appropriate
          //moving elements left 
          sectionImageWrapper.classList.remove("section-image-wrapper-left");
          sectionImageWrapper.classList.add("section-image-wrapper-left-outside");
          exteriorImageWrapper.classList.add("exterior-image-wrapper--left");
          this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", true);
          this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", true)

            //removing transition animation for removing elements back to outside & exterior image too
            landscapeImageWrapper.classList.add("section-elements-NoTransition");
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", false);
            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-left", false);
            //Moving exterior image wrapper to outside while display none
            landscapeImageWrapper.classList.add("landscape-image-wrapper--outside", "landscape-image-wrapper--display-inherit");
            //Make exterior image transitional again for animation effect and moving it to center
            landscapeImageWrapper.classList.add("landscape-image-wrapper--center");
            //Changing brief text for exterior
            this.changeBrief(landscapeGalleryData.header, landscapeGalleryData.text, briefFirstName, briefSecondName, sectionBriefText);
            //Make brief transitional again for animation effect and moving it to center

            this.changeBriefPosition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-center", true);
            setTimeout(() => {
              this.replaceBGColorClass(page, "colorForExterior", "colorForLandscape");
              exteriorImageWrapper.classList.remove("section-elements-NoTransition");
              sectionImageWrapper.classList.remove("section-elements-NoTransition");
              if(briefFirstName.classList.contains("section-elements-NoTransition")) {
                this.changeBriefTransition(briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, "section-elements-NoTransition", false)
              }
            landscapeImageWrapper.classList.remove("section-elements-NoTransition");
            }, 300);
            About.addPageToBody(page);
            console.log("Landscape rendered");
        }
      }
    }

    static render = (page, sectionClass, toRight = null) => {
      Header.addEvent();

      // let sectionImageWrapper = this.createElement("div", )
      let sectionImageWrapper = page.querySelector(".section-image-wrapper")
      let briefFirstName = page.querySelector(".brief-first-name")
      let briefSecondName =  page.querySelector(".brief-second-name")
      let sectionBriefText = page.querySelector(".section-brief-text")
      let sectionBriefExplore = page.querySelector(".section-brief-explore")
      let scrollLines = page.querySelector(".scroll-lines")
      if(sectionClass === "interior-design") {
        this.renderInterior(page, sectionClass, ["exterior-design", "landscape-design"], sectionImageWrapper, 0, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, toRight);
      }
      if(sectionClass === "exterior-design") {
        this.renderExterior(page, sectionClass, ["interior-design", "landscape-design"], sectionImageWrapper, 1, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, toRight);
      }
      if(sectionClass === "landscape-design") {
        this.renderLandscape(page, sectionClass, ["interior-design", "exterior-design"], sectionImageWrapper, 2, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, toRight);
      }
    }

    //Render Section on Click
    static renderOnLineClick = (e, page) => {
      console.log("render section on click");
      let sectionImageWrapper = page.querySelector(".section-image-wrapper")
      let briefFirstName = page.querySelector(".brief-first-name")
      let briefSecondName =  page.querySelector(".brief-second-name")
      let sectionBriefText = page.querySelector(".section-brief-text")
      let sectionBriefExplore = page.querySelector(".section-brief-explore")
      let scrollLines = page.querySelector(".scroll-lines")
      //Clicking on Interior
      if(e.target.id === "interior" && !e.target.offsetParent.children[0].classList.contains("interior-design")) {
        if(e.target.offsetParent.children[0].classList.contains("exterior-design")) {
          this.renderInterior(page, "interior-design", ["exterior-design", "landscape-design"], sectionImageWrapper, 0, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, false);
        } else {
          console.log("1. From landscape to interior");
          console.log("2. Render exterior");
          About.removePageFromBody();

          this.renderExterior(page, "exterior-design", ["interior-design", "landscape-design"], sectionImageWrapper, 1, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, false);
          
          setTimeout(() => {
            console.log("3. SetTimeOut => render Interior");
            this.renderInterior(page, "interior-design", ["exterior-design", "landscape-design"], sectionImageWrapper, 0, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, false);
          }, 1000);
        }
      }
      //Clicking on exterior

      if(e.target.id === "exterior" && !e.target.offsetParent.children[0].classList.contains("exterior-design")) {
        if(e.target.offsetParent.children[0].classList.contains("interior-design")) {
          this.renderExterior(page, "exterior-design", ["interior-design", "landscape-design"], sectionImageWrapper, 1, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, true);
        } else {
          About.removePageFromBody();
          this.renderExterior(page, "exterior-design", ["interior-design", "landscape-design"], sectionImageWrapper, 1, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, false);
        }
      }
      //Clicking on landscape

      if(e.target.id === "landscape" && !e.target.offsetParent.children[0].classList.contains("landscape-design")) {
        if(e.target.offsetParent.children[0].classList.contains("exterior-design")) {
          this.renderLandscape(page, "landscape-design", ["exterior-design", "interior-design"], sectionImageWrapper, 2, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, true);

        } else {
          this.renderExterior(page, "exterior-design", ["interior-design", "landscape-design"], sectionImageWrapper, 1, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, true);
          setTimeout(() => {
            this.renderLandscape(page, "landscape-design", ["exterior-design", "interior-design"], sectionImageWrapper, 2, briefFirstName, briefSecondName, sectionBriefText, sectionBriefExplore, scrollLines, true);
          }, 1000);
          
        }
      }
    }
}
export default Section;