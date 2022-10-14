let printed = document.querySelector(".calculator")

 function calc(e){
  printed.innerHTML += e
  
   if(e === 'AC'){
    printed.innerHTML = ''
  
  } else if(printed.innerHTML.includes('**') || 
            printed.innerHTML.includes('..') || 
            printed.innerHTML.includes('//') || 
            printed.innerHTML.includes('%%') || 
            printed.innerHTML.includes('--') || 
            printed.innerHTML.includes('++') ||
            printed.innerHTML.includes('*/') || 
            printed.innerHTML.includes('*%') || 
            printed.innerHTML.includes('+*') || 
            printed.innerHTML.includes('+-') || 
            printed.innerHTML.includes('+/') || 
            printed.innerHTML.includes('+%') || 
            printed.innerHTML.includes('-+') || 
            printed.innerHTML.includes('-*') || 
            printed.innerHTML.includes('-/') || 
            printed.innerHTML.includes('-%') || 
            printed.innerHTML.includes('/*') || 
            printed.innerHTML.includes('%*') || 
            printed.innerHTML.includes('%/') || 
            printed.innerHTML.includes('/%') || 
            printed.innerHTML.includes('.+') || 
            printed.innerHTML.includes('.-') || 
            printed.innerHTML.includes('./') || 
            printed.innerHTML.includes('.%')){
  
                printed.innerHTML = printed.innerHTML.slice(0, - 1)
                
  }else if(e === ''){
  
    printed.innerHTML = printed.innerHTML.slice(0, - 1)
  
  }else if(printed.innerHTML === '%' || 
  printed.innerHTML === '*' || 
  printed.innerHTML === '/'){

  printed.innerHTML = '';
  }
}
function result(){
   printed.innerHTML = eval(printed.innerHTML)
}


