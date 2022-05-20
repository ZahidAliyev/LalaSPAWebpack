import {homePage} from "./constants.js";
import Header from "./Header.js";
let replaceBGColorClass =(page, bgcolorClassNameRemove, bgcolorClassNameAdd)=> {
  page.firstElementChild.classList.remove(bgcolorClassNameRemove);
  page.firstElementChild.classList.add(bgcolorClassNameAdd);
}
export default class Home{
  static addPagetoBody(page) {
    page.innerHTML = "";

    page.insertAdjacentHTML("afterbegin", homePage);
    page.firstElementChild.lastElementChild.insertAdjacentHTML("beforebegin", Header.template());
  }

  static elementAppearAfterLoading(
    headline,
    homePageheader,
    backgroundLogo
    
  ) {
    // backgroundLogo.style.opacity = "1";
    backgroundLogo.classList.add("home-elements-appear");
    headline.classList.add("home-elements-appear");
    // headline.style.opacity = "1";
    homePageheader.style.opacity = "1";
    // scrollButton.style.opacity = "1";
    
  }
  static render = (page) => {
    this.addPagetoBody(page);
    Header.addEvent();
    replaceBGColorClass(page, "colorForInterior", "colorForHome")

    let headline = document.querySelector(".headline");
    let homePageheader = document.querySelector(".initial-page .Header");
    let backgroundLogo = document.querySelector(".background-logo");
    // we need getcomputedstyle firstly to apply Css from styles file then styles with js/ Cause getComputedStyle waits until css is applied
    if(window.getComputedStyle(headline).getPropertyValue("opacity") == 0) {
      this.elementAppearAfterLoading(
        headline,
        homePageheader,
        backgroundLogo
        
      );
    }

  };
}

