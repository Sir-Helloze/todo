var list = document.querySelector('ul');
var todos;
function toLocal(){
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}
// в переменную todos буду получать содержимое list

list.addEventListener('click', function (ev){
    if (ev.target.tagName === "LI"){
        ev.target.classList.toggle('checked');
        toLocal();
    }
    else if(ev.target.tagName === "SPAN"){
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);
// произвожу делегирование событий
// определяю по какому именно элементу поизведен click
// если это элемент списка LI то тогда он принимает класс checked - дело выполнено
// иначе же если нажат крестик, производится полное удаление дела

function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue == ""){
        alert("придумайте себе дело!");
    } 
    else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    
    var span = document.createElement('SPAN');
    var icon = document.createTextNode('╳');
    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span);
    toLocal();
}
// создаю элементы которые будут добавляться в LIST
if(localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}
// проверяю есть ли у меня значение данного ключа
function delElement(){
    localStorage.clear();
    location.reload();
}
// произвожу удаление всех li из list
function readyEl() {
    var li = document.querySelectorAll('li');
    for (var i = 0; i < li.length; i++){
    li[i].classList.add('checked');
    }
    toLocal();
}
// функция отвечающая за перенос всех задач в состояние готово



function usl(e) { if(e.keyCode == 13) document.enter.input(); }
    