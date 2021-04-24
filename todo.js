
function loadDoc(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if (this.readyState == 4 && this.status == 200) {
        var response=JSON.parse(this.responseText);
        //console.log(response);
        var output="";
               
        for(var i=0;i<response.length;i++){
            if (response[i].completed==false){
            output+="<p>"+ response[i].id +". "+ response[i].title+"<input style=float:right onchange=done(this.checked) type=checkbox "+"</p>";
            }
            else{
                output+="<p>"+ response[i].id +". "+ response[i].title+"<input type=checkbox checked disabled style=float:right>"+"</p>";
            }

        }  
    }
        
        document.getElementById("demo").innerHTML =output;
        
    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}
var tick=0;
function done(c){  
var promise=new Promise(function(resolve){
    if (c==true){
        tick++;
        if(tick==5){
            resolve("Congrats...5 Tasks have been Successfully Completed!!!")
        }
    
    }
    else{
        tick--;
    }

});
promise.then(function (e){
    alert(e);
});
}
