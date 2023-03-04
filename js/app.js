
const botones = document.querySelectorAll('button');


botones.forEach(boton => {

    boton.addEventListener('click', (e)=>{
       let numeros = e.target.innerText;
        // console.log(e.target.id);
        let ingresar = document.getElementById('ingresar');
         let num1 = document.getElementById('num1');
         let num2 = document.getElementById('num2');
         let operacionI = document.getElementById('operacionI');
         let Resultado = document.getElementById('Resultado');
         
         

         if(e.target.id == 'numero' && operacionI.textContent != '' ){
            num2.innerHTML += numeros;

        } else if(e.target.id == 'numero'){

          num1.innerHTML += numeros;

        }else if(e.target.id == 'operacion' && num1.textContent != ''  ){
            
            operacionI.innerHTML = numeros;

        }else if(e.target.id == 'igual' ){

         let respuesta = 0;
         let numero1 = Number(num1.textContent);
         let numero2 = Number(num2.textContent);
        
         switch (operacionI.textContent) {
            case '+' :
                respuesta = numero1 + numero2;
                break;
            case '-':
               respuesta = numero1 - numero2;
                break;
             case 'x':
                respuesta = numero1 * numero2;
                 break;

             case '/':
                respuesta = numero1 / numero2;
                     break;
            default:
                break;
         }
         Resultado.value = respuesta;

            
        }else{
            num1.innerHTML = '';
            num2.innerHTML = '';
            operacionI.innerHTML = '';
            Resultado.value = 0;
        }

    })
    
});

// modo oscuro

let body = document.querySelector('body');
let calculadora = document.querySelector('.input-botones');
let resultado = document.querySelector('#Resultado');
let ingresar = document.querySelector('.ingresar');
let botton = document.querySelectorAll('button');


const imagen = document.querySelector('img');

imagen.addEventListener('click', ()=>{



    if(imagen.classList.contains('activado')){

        imagen.classList.remove('activado');
        imagen.src = 'img/modo-oscuro0.png';

        botton.forEach(boton => {
            // console.log(boton.id = 'numero');
            boton.style.background = 'rgb(244, 244, 244)';
            if(boton.id == 'numero' || boton.id == 'igual' || boton.id == 'reset'  ){
            boton.style.color = 'black';
            }
        });
        // console.log(resultado);
        body.style.background = 'white';
        calculadora.style.background =  'white';
        resultado.style.background =  'white';
        resultado.style.color = 'black';
        ingresar.style.color = 'black';
        

    }else{

        imagen.classList.add('activado');
        imagen.src = 'img/modo-oscuro1.png';

        botton.forEach(boton => {
            // console.log(boton.id = 'numero');
            boton.style.background = 'rgb(30, 30, 30)';
            if(boton.id == 'numero' || boton.id == 'igual' || boton.id == 'reset'  ){
            boton.style.color = 'white';
            }
        });
        // console.log(resultado);
        body.style.background = 'rgb(45, 45, 45)';
        calculadora.style.background = 'rgb(65, 65, 65)';
        resultado.style.background = 'rgb(65, 65, 65)';
        resultado.style.color = 'white';
        ingresar.style.color = 'white';
        

    }


   
    
})