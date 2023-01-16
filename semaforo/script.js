const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorindex = 0
let Intervalid = null


//função normal sem ser arrow function
//function trafficlght(){

//}
    

// arrow function >>>      const trafficlght = (event) => console.log(event.target)
const trafficlght = (event)=> {
    stopAutomatic()
    turnOn[event.target.id]();  
   

   
}
const nextIndex = () => {

    // pode fazer assim -   const nextIndex = () =>  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    if(colorindex < 2){
        colorindex ++
    }else{
        colorindex = 0
    }
}

const changecolor = () => {
    const colores =['red','yellow','green']
    const color = colores[ colorindex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = () =>{
    clearInterval(Intervalid)
}
const turnOn ={
   'red':    ()=> img.src ='/semaforo/img/vermelho.png',
   'yellow': ()=> img.src ='/semaforo/img/amarelo.png',
   'green':  ()=> img.src ='/semaforo/img/verde.png',
   'automatic': ()=>  Intervalid =  setInterval(changecolor, 1000)
   
   
};
 


buttons.addEventListener('click',trafficlght);