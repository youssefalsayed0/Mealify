let navigation = document.getElementById("navbar");
let arrow = document.getElementById("floating-arrow");
let nums = document.querySelectorAll(".counter-box  .number");
let statsSection = document.querySelector(".counter");
let started = false;

window.onscroll = function () {


  if (window.scrollY >= statsSection.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navigation.style.backgroundColor = "#333333";
  } else {
    navigation.style.backgroundColor = "";
  }

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }



};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

var $galleryContainer = $('.gallery').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function () {
  $('.button-group .button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value
  })
})


$('.owl-carousel').owlCarousel({
  navs:false,
  loop: true,
  margin: 10,
  items:1,
})