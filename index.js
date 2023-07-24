console.log("this is a shifting game");
function shift(){
    let move=document.getElementById('move');
    // document.getElementById("move").style.marginLeft = "150px";
    if(move.style.marginLeft!='150px'){
        move.style.marginLeft="150px";
    }
    else{
        move.style.marginLeft="50px";
    }
    alert("shifted");
}