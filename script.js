const quest = document.querySelectorAll('.ques');
const response = document.querySelectorAll('.response');
const arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < quest.length; i++) {
    quest[i].addEventListener('click', () => {
        for (let gg = 0; gg < response.length; gg++) {
            if (response[gg].classList.contains('active') && i != gg) {
                response[gg].classList.remove('active')
                arrow[gg].classList.remove('up')
            }
        }

        if (response[i].classList.contains('active')) {
            response[i].classList.remove('active')
            arrow[i].classList.remove('up')
        } else {
            response[i].classList.add('active')
            arrow[i].classList.add('up')
        }
    })
}