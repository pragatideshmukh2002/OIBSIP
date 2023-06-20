const temperature=()=>{
    let a=document.querySelector('#deg').value
    let display=document.getElementById('res')
    let opt=document.querySelector('#opt')
    
    if(opt.value=='Celsius'){
        let F=a*(9/5)+32
        display.innerHTML=F.toFixed(4)+ '&#176 Celsius'
        
    }
    else{
        let C=(a-32)*(5/9)
        display.innerHTML=C.toFixed(4)+'&#176 Fahrenheit'
    }
    }