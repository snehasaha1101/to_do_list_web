const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function addTask(){
    if(inputBox.value===''){
        alert('Please enter a task');//if nothing is added in the input box then this prompt will appear

        }else{
            let li=document.createElement("li");//
            li.innerHTML=inputBox.value;//whatever will be input in this input field will be displayed in li
            listContainer.appendChild(li);//this li should be diplayed under the list container
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
    }
    inputBox.value="";//to clear the input field after adding the text
    savedata();//to save the updated content in the browser
}
    
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");//when tagname is equal to LI then it should add the checked class name
        savedata();//to save after checking
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();//when tagname is equal to SPAN then it should remove the parent element
        savedata();//to save after unchecking
    }
},false);
//to retain the tasks even after reloading
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//to display the  tasks even after reloading
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

