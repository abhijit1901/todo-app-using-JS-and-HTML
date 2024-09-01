let Input=document.querySelector("Input");
let Button=document.querySelector("Button");
let Ul=document.querySelector("Ul");
Button.addEventListener("click",function(){
    let Task=document.createElement("li");
    let Name=Input.value;
    Name = Name.replace(/[^a-zA-Z\s]/g, '');
    Task.innerText=Name;
    Ul.appendChild(Task);
    Input.value="";
});
