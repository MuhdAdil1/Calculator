
function btnClick(val){
    document.getElementById('screen').value=document.getElementById('screen').value+val
    console.log(val)
}

function clrScreen(){
    document.getElementById('screen').value=""
}


function btnEqual(){
    var text=document.getElementById('screen').value
    var result=eval(text)
    document.getElementById('screen').value=result
}

function del(){
    document.getElementById('screen').value=document.getElementById('screen').value.slice(0,-1)
}
    


