let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");



btn.addEventListener("click",function(){

    if (inp.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }


    
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);


    ul.appendChild(item);
    inp.value = "";
});






ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){

        let paritem = event.target.parentElement;
       // console.log(paritem);
       paritem.remove();

        console.log("deleted");
    }
    
})




// let btns = document.querySelectorAll(".delete");
// for(btn of btns){
//     btn.addEventListener("click",function(){
//         //console.log("item deleted");
//         let par = this.parentElement;
//         //console.log(par);
//         par.remove();
//     })
// }

