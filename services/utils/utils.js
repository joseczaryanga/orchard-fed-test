// Loader
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 3000); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }

  function showContent() {
    const productContainer = document.getElementById("product-container");
    productContainer.style.display = "flex";
    const cardHeaderContainer = document.getElementById("card-header-container");
    cardHeaderContainer.style.display = "flex";
    const cardContainer = document.getElementById("card-container");
    cardContainer.style.display = "flex";
  }
});

// Scroll Animation
const scrollAnimation = document.querySelectorAll('.animation')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-animation')
    } else {
      entry.target.classList.remove('scroll-animation')
    }
  })
},
{ threshold: 0.5 });

for (let i = 0; i < scrollAnimation.length; i++) {
  const elements = scrollAnimation[i];

  observer.observe(elements);
} 

// Modal
const modal = document.getElementById("modal");
const btnClose = document.getElementsByClassName("close")[0];

btnClose.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
}

// For Image
function toggleImg(id, type) {
  const img = document.getElementById(id);
  console.log(id);

  let src;
  if (id === 'cardFirstImg') {
    src = '/assets/images/component-02/Image-01@2x.jpg';
  } else if (id === 'cardSecondImg') {
    src = '/assets/images/component-02/Image-02@2x.jpg';
  } else {
    src = '/assets/images/component-02/Image-03@2x.jpg';
  }

  
  const isMobile = ( window.innerWidth <= 1280 ) && ( window.innerHeight <= 1366 ); 
  console.log("isMobile: " + isMobile);

  const imageRender = document.getElementById('imageRender');
  const modalContent = document.getElementById('modalContent');
  const readMore = document.getElementById('readMore');
  modalContent.style.width = id === 'firstImg' && !isMobile ? '27%' : '50%';
  modal.style.display = "block";
  imageRender.style.display = "block";
  imageRender.src = type === 'product' ? img.src : src;
  readMore.style.display = "none";
}

// For Read More
function toggleReadMore(id) {
  console.log(id);

  let readMoreTitle;
  if (id === 'cardFirstReadMore') {
    readMoreTitle = 'Summer Lunch Menu By Mark Best';
  } else if (id === 'cardSecondReadMore') {
    readMoreTitle = 'A Traditional Christmas Eve, Mark Best Style';
  } else {
    readMoreTitle = 'Taking Taste Further';
  }
  console.log("test-readMoreTitle: " + readMoreTitle);
  const readMoreContent = `<div class='read-more-title'>${readMoreTitle}</div><br><hr/><div class='read-more-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.</div>`;

  const isMobile = ( window.innerWidth <= 1280 ) && ( window.innerHeight <= 1366 ); 
  console.log("isMobile: " + isMobile);
  const imageRender = document.getElementById('imageRender');
  const readMore = document.getElementById('readMore');
  modal.style.display = "block";
  readMore.style.display = "block";
  modalContent.style.width = !isMobile ? '40%' : '80%';
  readMore.innerHTML = readMoreContent;
  imageRender.style.display = "none";
}
