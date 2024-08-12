const textinput = document.querySelector(".userinput");
const userlist = document.querySelector(".userlist");
const newlist = document.querySelector(".newlist")

function adduserlist(){
    if (textinput.value===""){
        return;
    }
    const addsomthing =document.createElement("li");
    addsomthing.innerHTML=`
    <input type="checkbox" class="checkbox1">
    <label>${textinput.value}</label>
    <button class="delete1">🗑</button>
    `
    const delete1 =addsomthing.querySelector(".delete1");
    const checkbox1 = addsomthing.querySelector(".checkbox1");
    
    checkbox1.addEventListener("change",function(){
        if(checkbox1.checked){
            addsomthing.style.textDecoration="line-through";
            addsomthing.style.color="#999";
            userlist.append(addsomthing);
        }else{
            addsomthing.style.textDecoration="none";
            addsomthing.style.color="";
            userlist.prepend(addsomthing);
        }
    });
    delete1.addEventListener("click",function(){
        addsomthing.remove();
    });   
    userlist.append(addsomthing);
    textinput.value="";
}



newlist.addEventListener("click",adduserlist);

textinput.addEventListener("keyup",function(e){
if(e.key==="Enter"){
    console.log(textinput.value);
    adduserlist();
}


});