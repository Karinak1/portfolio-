fun1=(e)=>{
  console.log(`Event:${e.type}`);
  e.preventDefault()
};


const exampleButton= document.querySelector('button');


exampleButton.addEventListener('click', fun1);

exampleButton.addEventListener('mouseover', fun1);

