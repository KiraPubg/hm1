const qualityList = document.querySelector(".quality__list-items");
const qualityHeader = document.querySelector(".quality__list-title");
const qualityArrow = document.querySelector(".quality__arrow");

let isOpen = false;

const toggleList = () => {
  if (isOpen) {
    qualityList.style.maxHeight = "0";
    qualityArrow.classList.remove("open");
  } else {
    qualityList.style.maxHeight = `${qualityList.scrollHeight}px`;
    qualityArrow.classList.add("open");
  }
  isOpen = !isOpen;
};

qualityHeader.addEventListener("click", toggleList);
