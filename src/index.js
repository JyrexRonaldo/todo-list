const todo = document.querySelectorAll('.todo p');


console.log(todo)

todo[0].addEventListener('click', (e) => {
    todo[0].classList.toggle('done')
});