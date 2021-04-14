var list = document.getElementById("todo-list")
// var node = document.getElementById("node-list")
function addItem(){
    var item = document.getElementById("add-item").value
    if(item==null || item==""){
        alert("Please enter the field first")
    }
    else{
        var node = document.createElement("DIV");
        node.id = "node-list";
        var itemspan = document.createElement("SPAN");
        itemspan.innerHTML = item;
        itemspan.id = "item"
        // console.log(itemspan)
        var itemcross = document.createElement("SPAN");
        itemcross.innerHTML = "&#10006;";
        itemcross.classList.add("cross");
        var hrline = document.createElement("hr");
        // console.log(itemcross);
        node.appendChild(itemspan);
        node.appendChild(itemcross);
        node.appendChild(hrline);
        list.appendChild(node);
    }
    var crosses = document.getElementsByClassName("cross")
    for (var i=0; i<crosses.length; i++){
        crosses[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    striking();
}
