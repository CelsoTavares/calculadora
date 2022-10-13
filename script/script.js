let printed = document.querySelector(".calculator")

function calc(e){
 printed.innerHTML += e
  
  if(e === 'C'){
    printed.innerHTML = ''
  
  }else if(e === ''){
    printed.innerHTML = printed.innerHTML.substring(0, printed.innerHTML.length - 1)
  }
}
function result(){
  printed.innerHTML = eval(printed.innerHTML)
}

