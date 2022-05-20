// Pages
let initialPage = document.querySelector(".initial-page");
let interiorDesignPage = document.querySelector(".interior-design");
let exteriorDesignPage = document.querySelector(".exterior-design");
let landscapeDesignPage = document.querySelector(".landscape-design");


//horizontal scroll
let viewportWidth = window.innerWidth;
let homePagePositionXInfo = initialPage.getBoundingClientRect().x;
let interiorPositionXInfo = interiorDesignPage.getBoundingClientRect().x;
let exteriorPositionXInfo = exteriorDesignPage.getBoundingClientRect().x;
let landscapePositionXInfo = landscapeDesignPage.getBoundingClientRect().x;

let interiorBrief = document.querySelector(
  ".interior-design .section-brief-wrapper"
);
let exteriorBrief = document.querySelector(
  ".exterior-design .section-brief-wrapper"
);
let landscapeBrief = document.querySelector(
  ".landscape-design .section-brief-wrapper"
);

let interiorImage = document.querySelector(
  ".interior-design .section-image-wrapper"
);
let exteriorImage = document.querySelector(
  ".exterior-design .section-image-wrapper"
);
let landscapeImage = document.querySelector(
  ".landscape-design .section-image-wrapper"
);

let lastBodyScrollPosition = 0;

if (homePagePositionXInfo === body.scrollLeft) {
  lastBodyScrollPosition = body.scrollLeft;
  interiorDesignPage.classList.add("colorForHome");
}
// Body horizontal scroll event on mouse wheel
body.addEventListener("wheel", (e) => {
  console.log("lastPosition", lastBodyScrollPosition);
  let scroll = e.deltaY > 0 ? viewportWidth : -viewportWidth;
  //Scrolling from page===============================>
  // Shifting image to left animation
  if (interiorPositionXInfo === lastBodyScrollPosition && scroll > 0) {
    interiorImage.classList.add("imageLeftShift");
  }
  if (exteriorPositionXInfo === lastBodyScrollPosition && scroll > 0) {
    exteriorImage.classList.add("imageLeftShift");
  }
  if (
    exteriorPositionXInfo === lastBodyScrollPosition &&
    (scroll > 0 || scroll < 0)
  ) {
    exteriorImage.classList.remove("imageAppear");
    exteriorDesignPage.classList.remove("colorForExterior");
  }
  if (
    interiorPositionXInfo === lastBodyScrollPosition &&
    (scroll > 0 || scroll < 0)
  ) {
    interiorImage.classList.remove("imageAppear");
    interiorDesignPage.classList.remove("colorForInterior");
  }
  if (landscapePositionXInfo === lastBodyScrollPosition && scroll < 0) {
    landscapeImage.classList.remove("imageAppear");
    landscapeDesignPage.classList.remove("colorForLandscape");
  }
  //Scrolling into page==================================

  let scrollPageNotImmediatelyAndAnimateAfter = new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        body.scrollBy({
          left: scroll,
        });
      }, 300);
      setTimeout(() => resolve(), 1000);
    }
  );

  scrollPageNotImmediatelyAndAnimateAfter.then(() => {
    if (homePagePositionXInfo === body.scrollLeft) {
      lastBodyScrollPosition = body.scrollLeft;
      interiorBrief.classList.remove("shiftBack");
      interiorDesignPage.classList.add("colorForHome");
    }
    if (interiorPositionXInfo === body.scrollLeft) {
      console.log("second page", body.scrollLeft);
      lastBodyScrollPosition = body.scrollLeft;
      interiorDesignPage.classList.remove("colorForExterior");
      interiorDesignPage.classList.add("colorForInterior");
      interiorBrief.classList.add("shiftBack");
      interiorImage.classList.add("imageAppear");
      exteriorBrief.classList.remove("shiftBack");
      exteriorDesignPage.classList.add("colorForInterior");
    }
    if (exteriorPositionXInfo === body.scrollLeft) {
      console.log("third page", body.scrollLeft);
      lastBodyScrollPosition = body.scrollLeft;
      exteriorDesignPage.classList.remove("colorForLandscape");
      exteriorDesignPage.classList.add("colorForExterior");
      exteriorBrief.classList.add("shiftBack");
      exteriorImage.classList.add("imageAppear");
      interiorImage.classList.remove("imageLeftShift");
      landscapeBrief.classList.remove("shiftBack");
      interiorBrief.classList.remove("shiftBack");
      landscapeDesignPage.classList.add("colorForExterior");
      interiorDesignPage.classList.add("colorForExterior");
    }
    if (landscapePositionXInfo === body.scrollLeft) {
      console.log("4 page", body.scrollLeft);
      lastBodyScrollPosition = body.scrollLeft;
      landscapeDesignPage.classList.add("colorForLandscape");
      landscapeBrief.classList.add("shiftBack");
      landscapeImage.classList.add("imageAppear");
      exteriorImage.classList.remove("imageLeftShift");
      exteriorBrief.classList.remove("shiftBack");
      exteriorDesignPage.classList.add("colorForLandscape");
    }
  });
});
// appearing animation adter loading

