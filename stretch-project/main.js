$('#graph-title').text('Blah Blah Bar Graph');

function drawBar(num){
    for (var i = 0; i < num; i++){
        var bar = document.createElement('div');
        bar.className = 'graph-bar';
        var text = document.createTextNode('');
        bar.appendChild(text);
    
        var empty = document.createElement('div');
        empty.className = 'empty-bar';
        empty.appendChild(text);
        
        document.getElementById('content').appendChild(bar);
        document.getElementById('content').appendChild(empty);

        $('.graph-bar').animate({
            width: '500px'
        }, 1500);
    }
}

function drawBarChart(data, options, element){
    
}

drawBar(3);