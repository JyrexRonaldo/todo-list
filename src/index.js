const todo = document.querySelectorAll('.todo li');


console.log(todo)


for (let i = 0; i < todo.length; i++) {
    todo[i].addEventListener('click', (e) => {
        todo[i].classList.toggle('done')
    });
    
}
