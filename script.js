   
function foo(){
    let cc=document.getElementById("cname").value;
    console.log(cc);
    async function foo1(){
    let data=await fetch(`https://api.covid19api.com/dayone/country/${cc}`);
    let result=await data.json();
    console.log(result);
    for(var i in result){
        var compute=(`confirmed cases:${result[i].Confirmed},Number of deaths:${result[i].Deaths},Recovered cases:${result[i].Recovered},Date:${result[i].Date}`);
       var div=document.createElement('div');
       div.innerHTML=`${compute}`;
       document.body.append(div);
       
    }
     
    }
    foo1();
}