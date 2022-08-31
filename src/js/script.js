const turnOnOff = document.querySelector('.turnOnOff')
const turnOn = document.querySelector('.turnOn');
const turnOff = document.querySelector('.turnOff');
const lamp = document.querySelector('#lampada');


function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}


const lampOn = () => {
    if (!isLampBroken())
        lamp.src = './src/img/ligada.jpg';
}


function lampOff() { 
    if (!isLampBroken()){
        lamp.src = './src/img/desligada.jpg';
    }
}


const lampBroken = () => {
    lamp.src = "./src/img/quebrada.jpg";
}


const lampOnOff = () => {
    turnOnOff.addEventListener('click',() =>{
        if (turnOnOff.textContent == 'Ligar') {
            lampOn();
            lamp.classList.remove('lamp');
            lamp.classList.add('ligada');
            turnOnOff.textContent = 'Desligar';
        }else{
            lamp.classList.remove('ligada')
            lamp.classList.add('lamp')
            lampOff();
            turnOnOff.textContent ='Ligar';
        }
    }) 
}

    
const lampadaQuebrada = () => lamp.addEventListener('dblclick', lampBroken)

const Mouse = () =>{

    lamp.addEventListener('mouseover', () =>{
        if(lamp.classList.contains('lamp')){
            lampOn();
        }
    });
    
    lamp.addEventListener('mouseleave', () =>{
        if(lamp.classList.contains('lamp')){
            lampOff();
        }else if(lamp.classList.contains('ligada')){
            
        }
    });
}


lampadaQuebrada()
Mouse()
lampOnOff()






