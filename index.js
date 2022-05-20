myFunc();
let d = new Date();

function myFunc(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","http://api.weatherstack.com/current?access_key=814df2bc1e29dc83656e82a72ededf80&query=Kolkata")
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            let obj=JSON.parse(xhr.response);
            console.log(obj);
            document.getElementById("heading-data").innerHTML=obj.location.name;
            document.getElementById("temp-data").innerHTML=obj.current.temperature+"`C";
            let text=String(d);
            let date=text.slice(0,15);
            document.getElementById("loc-date").innerHTML=date
        }
        else{
    
        }
    }
}

let dynamic=()=>{

    const xhr=new XMLHttpRequest();
    let city=document.getElementById("city").value;
    const url="http://api.weatherstack.com/current?access_key=814df2bc1e29dc83656e82a72ededf80&query="+city;
    xhr.open("GET",url)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            let obj=JSON.parse(xhr.response);
            console.log(obj);
            document.getElementById("heading-data").innerHTML=obj.location.name;
            document.getElementById("temp-data").innerHTML=obj.current.temperature+"`C";
            let text=String(d);
            let date=text.slice(0,15);
            document.getElementById("loc-date").innerHTML=date
        }
        else{
    
        }
    }
    document.getElementById("await").style.display="none";
}

function called(callback){
    setTimeout(callback,1500)
}


function running(){
    document.getElementById("await").style.display="block";
    called(dynamic);
}