//                 1 ) How we can access HTML elements by using DOM in Javascript

//                    a) by using tagName
//                    b) by using elementId
//                    c) by using className


//                    a) get elements by using tagName

let character = document.getElementsByTagName("h1");

//  giving colors to nodes

character[0].style.color = "red"
character[1].style.color = "green"
character[2].style.color = "blue"
character[3].style.color = "brown"
character[4].style.color = "pink"


//                    b) get element by using elementId

let charById = document.getElementById("ch1")
charById.style.margin = "50px 300px"

//                    c) get element by using className

let charByClass = document.getElementsByClassName("char")

//  text alogn center by using for loop
for (let i = 0; i < charByClass.length; i++) {
    charByClass[i].style.textAlign = "center"  
}



//                 2) which activities that we can perform by using DOM

//                    a) Accessing elements
//                    b) Modifying elements
//                    c) Handling Events
//                    d) create or modifying elements
//                    e) create or modifying class
//                  


 
//                 3) What are events listners in DOM
//                    Events listners allow you to respond to varioususer interaction 

//                    we can use event as : first select the element then attach event listner and finally callback function

//                 Various type of event listners          
//                    a) click
//                    b) mouseover/mouseout
//                    c) mouseup/mousedown
//                    d) keypress
//                    e) keyup/keydown
//                    f) resize
//                    g) etc


// example
     function hide() {
        let button = document.getElementById("btn");
     let para = document.getElementById("para");
    if (para.style.display != 'none') {
        para.style.display = 'none';        
    } else {
        para.style.display = 'block'        
    }        
     }