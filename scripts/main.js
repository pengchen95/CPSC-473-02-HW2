var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();

var currentImage = 0;
var imgArray = new Array(
  "img/otter1.jpg",
  "img/otter2.jpg",
  "img/otter3.jpg",
  "img/otter4.jpg",
  "img/otter5.jpg"
);

function UpdateImage_prev() {
  if (currentImage > 0) {
    currentImage -= 1;
  }
  if (currentImage == 0) {
    currentImage = imgArray.length;
  }

  document.getElementsByClassName("thumbnail-image").src = imgArray[currentImage];
}

function UpdateImage_next() {
  if (currentImage >= 0) {
    currentImage += 1;
  }
  if (currentImage >= imgArray.length) {
    currentImage = 0;
  }
  document.getElementsByClassName("thumbnail-image").src = imgArray[currentImage];
}
document.query("go_next").addEventListener("click", UpdateImage_next);
document.query("go_prev").addEventListener("click", UpdateImage_prev);
