// getElementById()
var a = document.getElementById('heading');
a.style.color = 'red';
a.style.backgroundColor = 'aqua';
a.style.border = '2px solid black';  // Border value should be a string
a.style.padding = '10px';

// getElementsByClassName()
var b = document.getElementsByClassName('list');
console.log(b);
for(let lists of b){
    lists.style.fontWeight = 'bold';  // Corrected "fontweight" to "fontWeight"
    lists.style.color = 'green';
    lists.style.backgroundColor = 'yellow';
    lists.style.border = '2px solid black';  // Border value should be a string
    lists.style.padding = '10px';
}

