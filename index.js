function add(){
    let x= document.getElementById("task");
    let y=document.getElementById("listitem");
    if(x.value !=""){
        let z= document.createElement("li");
        z.appendChild(document.createTextNode(x.value));
        y.appendChild(z);
        x.value="";
        z.onclick= function(){
            this.parentNode.removeChild(this)
        }
    }
    else{
        alert("chutiya kuch daal")
    }
}