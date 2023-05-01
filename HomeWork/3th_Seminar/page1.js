// let - перезаписываемая переменная
// let question = 'hello user!';
// alert(question);

//const - неперезаписываеся переменная
// const num1 = 5;
// console.log(num1);

// const num2 = Number.parseFloat(prompt("введите 1ое числов "));
// const num3 = Number.parseFloat(prompt("введите 2jе числов "));

// alert(`сложение ${num2} and ${num3} is ${num2 + num3}.`);
const celc = Number.parseFloat(prompt("температуру в градусах Цельсия "));
const faren = ((9 / 5) * celc + 32);
const farenhegt = (Math.floor(faren*100))/100;
alert(`температуру в Фаренгейтах равно ${farenhegt}`);

const goToPage2Btn = document.querySelector('.go_to_page2_btn');
goToPage2Btn.addEventListener('click', () => {
  window.location.href = 'page2.html';
});


window.onload = function () {
  let container = document.querySelector('.container');
  let contentHeight = container.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollHeight = contentHeight - windowHeight;

  window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let scrollPercentage = scrollPosition / scrollHeight * 100;
    container.style.transform = 'translateY(-' + scrollPercentage + '%)';
  });
};
