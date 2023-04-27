const greetings = prompt("Введите свое имя ").toLowerCase();
switch (greetings) {
    case "илья":
        alert('Привет Илья!');
        break;
    case "павел":
        alert('Привет Павел!');
        break;
    case "анна":
        alert('Привет Анна!');
        break;
    default:
        alert("вход заблокирован");
}

const backBtn = document.querySelector('.back_btn');
backBtn.addEventListener('click', () => {
    window.location.href = 'page1.html';
});

const goToPage4Btn = document.querySelector('.go_to_page4_btn');
goToPage4Btn.addEventListener('click', () => {
    window.location.href = 'page4.html';
});