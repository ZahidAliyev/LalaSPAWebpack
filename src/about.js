class About {
    static aboutTemplate = 
    `
    <div class="whole-about">
    <div class="about">
      <div class="header-container">
        <p>ABOUT US</p>
      </div>
      <div class="orange-container">
        <div class="orange"></div>
      </div>
      <div class="text-container">
        <p>
          Lorem ipsum dolor sit n ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>
    </div>
    <div class="lala-page">
      <div class="team-navbar">

      </div>
      <div class="team-main-container">
        <div class="lala-name-container">
          <p>Lala</p>
          <p>Suleymanzadeh</p>
        </div>
        <div class="lala-orange-container">
  
        </div>
        <div class="lala-text-container">
          <p>          Lorem ipsum dolor sit n ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.</p>
        </div>
      </div>

    </div>
    <div class="second-about-page">
      <div class="team-navbar">

      </div>
      <div class="team-main-container">
        <div class="container-for-left-margin"></div>
        <div class="second-about-orange-container">
  
        </div>
        <div class="second-about-NameAndText-container">
          <div class="second-about-name-container">
            <p>Lala</p>
            <p>Suleymanzadeh</p>
          </div>
  
          <div class="second-about-text-container">
            <p>          Lorem ipsum dolor sit n ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.</p>
          </div>
        </div>

      </div>
    </div>
    <div class="third-about-page">
      <div class="team-navbar">

      </div>
      <div class="team-main-container">

        <div class="third-about-NameAndText-container">
          <div class="third-about-name-container">
            <p>Lala</p>
            <p>Suleymanzadeh</p>
          </div>
  
          <div class="third-about-text-container">
            <p>          Lorem ipsum dolor sit n ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.</p>
          </div>
        </div>
        <div class="third-about-orange-container"></div>
        <div class="container-for-right-margin"></div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-header">
        <p>CONTACTS</p>
      </div>
      <div class="contact-info-wrapper">
        <ul class="contact-info">
          <li class="info-name"><div class="info-name-right-point">.</div>email<div class="info-name-left-point">.</div></li>
          <li class="info-data">loremipsum@gmail.com</li>
          <li class="info-name"><div class="info-name-right-point">.</div>phone number<div class="info-name-left-point">.</div></li>
          <li class="info-data">loremipsum@gmail.com</li>
          <li class="info-name"><div class="info-name-right-point">.</div>instagram<div class="info-name-left-point">.</div></li>
          <li class="info-data">@lalasuleymanzadeh</li>
          <li class="info-name"><div class="info-name-right-point">.</div>behance<div class="info-name-left-point">.</div></li>
          <li class="info-data">behance.net/lalasuleymanzadeh</li>

        </ul>
      </div>
      <div class="contact-consultation"></div>
      <div class="contact-navbar"></div>
    </div>
    </div>
    `
    static windowBottom;
    static addPageToBody(page) {
        page.insertAdjacentHTML("beforeend", this.aboutTemplate);
        // page.classList.add("displayBlock")
    }
    static removePageFromBody() {
      document.querySelector(".whole-about").remove();

    }
    static render = () => {
        let aboutOrange = document.querySelector(".orange-container");

        let lalaOrange = document.querySelector(".lala-orange-container");
        let lalaNameContainer = document.querySelector(".lala-name-container");
        let lalaTextContainer = document.querySelector(".lala-text-container");

        let secondAboutOrange = document.querySelector(".second-about-orange-container");
        let secondNameContainer = document.querySelector(".second-about-name-container");
        let secondTextContainer = document.querySelector(".second-about-text-container");

        let thirdAboutOrange = document.querySelector(".third-about-orange-container");
        let thirdNameContainer = document.querySelector(".third-about-name-container");
        let thirdTextContainer = document.querySelector(".third-about-text-container");

        let getOrangeTopFix = (AboutOrange) => {
            let OrangeRect = AboutOrange.getBoundingClientRect();
            return OrangeRect.top + scrollY;  
          }
        let applyAppearing = (AboutOrange,NameContainer, TextContainer) => {
            AboutOrange.classList.add("container--appeared");
            NameContainer.classList.add("container--appeared");
            TextContainer.classList.add("container--appeared");
          }
          // General about
          let aboutOrangeRectTopFix = getOrangeTopFix(aboutOrange);
          //Lalas about 
          let lalaOrangeRectTopFix = getOrangeTopFix(lalaOrange);
          //Second about
          let secondAboutOrangeTopFix = getOrangeTopFix(secondAboutOrange);
          //third about           
          let thirdAboutOrangeTopFix = getOrangeTopFix(thirdAboutOrange);
          this.windowBottom = window.scrollY +  window.innerHeight;        
          if(this.windowBottom >= aboutOrangeRectTopFix) {
            aboutOrange.classList.add("orange-container--scaled");
          }
          if(window.screen.availWidth >= 640) {
            if(this.windowBottom >= lalaOrangeRectTopFix - lalaOrange.clientHeight/1.3) {
              applyAppearing(lalaOrange, lalaNameContainer, lalaTextContainer);
            }
            if(this.windowBottom >= secondAboutOrangeTopFix) {
              applyAppearing(secondAboutOrange, secondNameContainer, secondTextContainer);
            }
            if(this.windowBottom >= thirdAboutOrangeTopFix) {
              applyAppearing(thirdAboutOrange, thirdNameContainer, thirdTextContainer);
            }
          }
          if(window.screen.availWidth <= 640) {
            if(this.windowBottom >= lalaOrangeRectTopFix + 200) {
              applyAppearing(lalaOrange, lalaNameContainer, lalaTextContainer);
            }
            if(this.windowBottom >= secondAboutOrangeTopFix + 200) {
              applyAppearing(secondAboutOrange, secondNameContainer, secondTextContainer);
            }
            if(this.windowBottom >= thirdAboutOrangeTopFix + 200) {
              applyAppearing(thirdAboutOrange, thirdNameContainer, thirdTextContainer);
            }
          }

          

    }
}
export default About;