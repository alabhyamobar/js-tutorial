const but1 =  document.querySelector('#sub')

but1.addEventListener("click",function(){
        if(but1.innerText === 'Subscribe'){
            but1.innerText = 'subscribed';
            but1.style.backgroundColor = 'rgb(240,240,240)'
            but1.style.color = 'black'
        }
        else if(but1.innerText === 'subscribed'){
            but1.innerText = 'Subscribe';
            but1.style.backgroundColor = 'black'
            but1.style.color = 'white'
        
    }
})

const but2 = document.querySelector('#enter');

function calculate(){
    const cal = document.querySelector('#cost');
    let cost = Number(cal.value)

    if(cost<40){
        cost = cost+10;
        document.querySelector('#bill').innerHTML = `$${cost}`;
    }else{
        document.querySelector('#bill').innerHTML = 'FREE shipping';
    }

    

}