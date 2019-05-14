$('#graph-title').text('Stretch Project: Bar Graph');

var bar = document.createElement('div');
bar.className = 'graph-bar';
var text = document.createTextNode('');
bar.appendChild(text);
document.getElementById('content').appendChild(bar);

$('.graph-bar').animate({
    width: '500px'
}, 1500);

function drawBarChart(data, options, element){
    
}