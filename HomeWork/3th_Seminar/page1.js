// let - перезаписываемая переменная
// let question = 'hello user!';
// alert(question);

//const - неперезаписываеся переменная
// const num1 = 5;
// console.log(num1);

// const num2 = Number.parseFloat(prompt("введите 1ое числов "));
// const num3 = Number.parseFloat(prompt("введите 2jе числов "));

// alert(`сложение ${num2} and ${num3} is ${num2 + num3}.`);
const celc = prompt("температуру в градусах Цельсия ");
	const  faren = ((9/5)*celc+32).toFixed(1); 
	alert(`температуру в Фаренгейтах равно ${faren}`);

function openWindow2() {
	window.location.href = 'page2.html';
	// window.open("page2.html", "page2", "width=500,height=500");
}

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
