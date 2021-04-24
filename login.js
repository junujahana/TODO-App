let username=document.getElementById("username");
let pwd=document.getElementById("pwd");
let form=document.getElementById("forma");

function validate(callback)
{   
    
    if(username.value.trim()=="admin" && pwd.value.trim()=="12345"){
        callback();
        
        
    }
    else{
        alert("username or password is incorrect");
        
    } 

};
function redirect(){
    console.log("200");
    $("#forma").attr("action","main.html");


    // window.location.href = "main.html";
    
};
function access(){
    validate(redirect);
};

