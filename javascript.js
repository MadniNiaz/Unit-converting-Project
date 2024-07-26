let feet=document.getElementById("feet");
let inch=document.getElementById("inch");

feet.addEventListener('input',function(){
   let a=this.value;
   let b=a*12;
   inch.value=b;
});

inch.addEventListener("input",function(){
   let x=this.value;
   let y=x/12;
   feet.value=y;
})