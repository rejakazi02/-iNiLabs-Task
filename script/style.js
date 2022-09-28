

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });



  //tab section  function openItems();
  
  function openItems(itemName) {
    var i;
    var x = document.getElementsByClassName("items");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      
    }
    document.getElementById(itemName).style.display = "block";  
 
    
  }
