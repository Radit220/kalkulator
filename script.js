let input = document.querySelector('#input');
let numbers = document.querySelectorAll('#numbers');
let operators = document.querySelectorAll('#operator');

for(let i = 0; i < numbers.length; i++){
    numbers[i].innerHTML = [i].toString();
    numbers[i].addEventListener('click', () =>{
        input.innerHTML += " " + [i].toString()
    })
};

for(let i = 0; i < operators.length; i++){
    operators[0].addEventListener('click', () =>{
        input.innerHTML = " "
    });

    if([i] > 0 && [i] < 5){
        operators[i].addEventListener('click', () =>{
            input.innerHTML += " " + operators[i].innerHTML
        })
    }
    else{
        operators[5].addEventListener('click', () =>{
            input.innerHTML = eval(input.innerHTML)
        })
    }
};

