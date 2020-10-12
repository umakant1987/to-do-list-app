require('./css/main.css');
import "babel-polyfill";

let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const createElement = task => {
    const createLi = document.createElement('li');
    const span = document.createElement('span');
    const txt = document.createTextNode("\u00D7");
    span.className = 'close';
    createLi.appendChild(document.createTextNode(task));
    span.appendChild(txt);
    createLi.appendChild(span);
    return createLi;
}

const addTask = () => {
    const input = document.getElementById('add_task').value;
    if (input === '') {
        alert('please add the task');
    } else {
        const list = document.querySelector('#myUL');
        list.appendChild(createElement(input));
    }
}
const checkedTask = (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}

const deleteTask = (e) => { 
   console.log(e.parentElement);
}

const taskButton = document.querySelector('.addBtn');
taskButton.addEventListener('click', addTask);

const checkTask = document.querySelector('ul');
checkTask.addEventListener('click', checkedTask);

let close = document.getElementsByClassName("close");
let k;
for (k = 0; k < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}