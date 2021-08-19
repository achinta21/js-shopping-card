function updateCase(projuct, prices, incresCase){
    const projuctInput=document.getElementById(projuct+'-number')
    let projuctNumber=projuctInput.value;
    if(incresCase){
        projuctNumber=parseInt(projuctNumber)+1;
    }
    else if(projuctNumber>0){
        projuctNumber=parseInt(projuctNumber)-1; 
    }
    projuctInput.value= projuctNumber;
    const projuctMonay= document.getElementById(projuct+'-money');
   projuctMonay.innerText = projuctNumber * prices;
   calcutorSiton()
  
}

function getProjust(projust){
    const projuctInpute=document.getElementById(projust+'-number')
    const projustNumber=parseInt(projuctInpute.value);
    return projustNumber;
}
    function calcutorSiton(){
    const phoneTotal=getProjust('phone')*1219;
    const caseTotal=getProjust('case')*59;
    const Subtotal=phoneTotal+caseTotal;
    const texToal=Subtotal/10;
    const totalMoney=texToal+Subtotal;
    document.getElementById('Sub-total').innerText=Subtotal;
    document.getElementById('tex').innerText=texToal;
    document.getElementById('total-money').innerText=totalMoney;

    
}
// phone info
document.getElementById('phone-plus').addEventListener('click',function(){
  updateCase('phone',1219, true)
})

document.getElementById('phone-mainas').addEventListener('click',function(){
   updateCase('phone',1219,false)
})

//  case info
document.getElementById('case-plus').addEventListener('click',function(){
 updateCase('case',59, true)


});
document.getElementById('case-mainas').addEventListener('click',function(){
updateCase('case', 59, false)

});

