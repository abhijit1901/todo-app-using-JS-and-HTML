let Input=document.querySelector("Input");
let Button=document.querySelector("Button");
let Ul=document.querySelector("Ul");
Button.addEventListener("click",function(){
    let Task=document.createElement("li");
    let dltbttn=document.createElement("button");
    dltbttn.innerText="remove";
    dltbttn.classList.add("remove");
    let Name=Input.value;
    Name = Name.replace(/[^a-zA-Z\s]/g, '');
    Task.innerText=Name;
    Task.appendChild(dltbttn);
    Ul.appendChild(Task);
    Input.value="";
});
Ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
