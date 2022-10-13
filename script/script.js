let printed = document.querySelector(".calculator")

 function calc(e){
 printed.innerHTML += e
  if(e === 'C'){
    printed.innerHTML = ''
  
  }else if(e === ''){
    printed.innerHTML = printed.innerHTML.substring(0, printed.innerHTML.length - 1)
  
  }else if(printed.innerHTML.includes('**') || printed.innerHTML.includes('..') || printed.innerHTML.includes('//') || printed.innerHTML.includes('%%') || printed.innerHTML.includes('--') || printed.innerHTML.includes('++')){
    printed.innerHTML = printed.innerHTML.substring(0, printed.innerHTML.length - 1)
  
  }else if(printed.innerHTML === '%' || printed.innerHTML === '*' || printed.innerHTML === '/'){
    printed.innerHTML = '';
  }
}
function result(){
   printed.innerHTML = eval(printed.innerHTML)
 }

