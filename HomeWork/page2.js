window.onload = function() {
    var container = document.querySelector('.container');
    var contentHeight = container.clientHeight;
    var windowHeight = window.innerHeight;
    var scrollHeight = contentHeight - windowHeight;
  
    window.addEventListener('scroll', function() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      var scrollPercentage = scrollPosition / scrollHeight * 100;
      container.style.transform = 'translateY(-' + scrollPercentage + '%)';
    });
};

const backBtn = document.querySelector('.back_btn');
backBtn.addEventListener('click', () => {
    window.location.href = 'page1.html';
});

const goToPage4Btn = document.querySelector('.go_to_page4_btn');
goToPage4Btn.addEventListener('click', () => {
    window.location.href = 'page4.html';
});


  