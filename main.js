// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// const canvas2 = document.getElementById('canvas2');
// const context2 = canvas2.getContext('2d');
// const width = parseInt(canvas.attributes.width.value);
// const height = parseInt(canvas.attributes.height.value);

// function middleLine(){
//     context.beginPath();
//     context.moveTo(0, height/2);
//     context.lineTo(width, height/2);
//     context.stroke()
// }
// middleLine()

// function barLines(){
//     const randomHeight = Math.ceil(Math.random()*500);
//     const randomWidth = Math.ceil(Math.random()*500);

//     context.beginPath();
//     context.moveTo(randomWidth, width/2);
//     context.lineTo(randomWidth, randomHeight/2);
//     context.stroke()
// }

// for(let i=0; i<=100; i++){
//     barLines();
// }


// function triangle(){
//     context.beginPath();
//     context.moveTo(100, 420);
//     context.lineTo(200, 420)
//     context.lineTo(150,320)
//     context.closePath()
//     context.fill()

//     context.beginPath();
//     context.moveTo(200, 420);
//     context.lineTo(300, 420)
//     context.lineTo(250,320)
//     context.closePath()
//     context.fill()
// }
// triangle();

// function emoji(){

//     // context2.beginPath();
//     // context2.moveTo(100, 100)
//     // context2.lineTo(200, 100)
//     // context2.closePath();
//     // context2.stroke()

//     context2.beginPath();
//     context2.arc(100, 100, 50, 0, Math.PI*2, true); // Outer circle
//     context2.moveTo(135, 100);
//     context2.arc(100, 100, 35, 0, Math.PI, false);  // Mouth (clockwise)
    
//     context2.moveTo(125, 100);
//     context2.arc(100, 100, 10, 0, Math.PI, false);
    
    
//     context2.moveTo(90, 90);
//     context2.arc(85, 90, 5, 0, Math.PI * 2, true);  // Left eye
//     context2.moveTo(120, 90);
//     context2.arc(115, 90, 5, 0, Math.PI * 2, true);  // Right eye
//     context2.stroke();

//     context2.beginPath()
//     context2.moveTo(80, 130);
//     context2.lineTo(120, 130)
//     context2.lineTo(100, 145)
//     context2.closePath()
//     context2.fill()

// }

// emoji()

// context2.beginPath();
// context2.arc(250,350,20,0, Math.PI*2, false);
// // context2.stroke()
// context2.moveTo(290,350);
// context2.arc(250,350,40,0, Math.PI*2, false);
// // context2.fill()
// context2.moveTo(310,350);
// context2.arc(250,350,60,0, Math.PI*2, false);
// context2.moveTo(330,350);
// context2.arc(250,350,80,0, Math.PI*2, false);
// context2.moveTo(350,350);
// context2.arc(250,350,100,0, Math.PI*2, false);
// context2.stroke()


// Object Oriented Programming In Javascript
// OOP is a programming paradigm, a style or way of writing code. It is one of the most popular and powerful way of writiting code.
// Let's take a look at Object Oriented Programming.
// A very simple object may look like

// In object we model properties and methods and these properties and methods are private to this object. Those method which are inside that object can access those properites, can change them anyway.
// This is called encapsulation

// === Objects ====
// Object Literal
let person = {
    name:"Rizwan",
    hair:true,
    haircolor:"Black",
    height:"5.7",
    _etc:true,
    showPerson:() => {
        console.log("Rizwan")
    }
}
console.log(typeof person)
// Factory Function
    // It's a way of creating an object. It return an object.
function createPerson(){
    return  {
        name:"Rizwan",
        hair:true,
        haircolor:"Black",
        height:"5.7",
        _etc:true,
        showPerson:() => {
            console.log("Rizwan")
        }
    }
}
console.log(typeof createPerson)
const Person = createPerson();

// Constructor
    // it's another way of creating an object

    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('Draw')
        }
    }
const circle = new Circle(8);
console.log(typeof Circle)
