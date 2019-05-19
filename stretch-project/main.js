// Change graph title
function graphTitle(title, color = 'black', size = '50px'){
    $('#graph-title').text(title);
    $('#graph-title').css('color', color);
    $('#graph-title').css('font-size', size);
}

// Given an array of data, an object containing the width and height of the chart and the element where the chart appears
// a bar chart is created.
function drawBarChart(data, options, element) {
    setSVGWidthHeight(options.width, options.height);
    drawBars(data, element);
}

// Set the width and height of the svg element
function setSVGWidthHeight(width, height){
    var svg = document.getElementById('graph-body');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
}

function drawBars(data, element){
    var svg = document.getElementById(element);
    var height = svg.getAttribute('height');
    var width = svg.getAttribute('width');
    var barWidth = width / data.length;
    var barPadding = 5;

    for (var i = 0; i < data.length; i++) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('y', height - data[i]);
        rect.setAttribute('height', data[i]);
        rect.setAttribute('width', barWidth - barPadding);
        rect.style.stroke = 'black';
        rect.style.strokeWidth = '2';
        rect.style.fill = 'white';
        var translate = [barWidth * i, 0];
        rect.setAttribute('transform', "translate(" + translate + ")");

        svg.appendChild(rect);
    }

    for (i = 0; i < data.length; i++){
        var bar = document.getElementById('graph-body').children[i];
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttributeNS(null, 'y', svg.getAttribute('height') - 2);
        text.setAttributeNS(null, 'x', 45);
        text.setAttributeNS(null, 'transform', bar.getAttribute('transform'));
        text.style.fill = 'red';
        text.style.dominantBaseline = 'text-after-edge';
        var label = document.createTextNode(dataSet[i]);
        text.appendChild(label);

        svg.appendChild(text);
    }
}




var dataSet = [20, 30, 40, 50, 60, 120, 80];
var options = {width: 800, height: 300};
var element = 'graph-body';

graphTitle('Blah Blah Bar Graph', 'green', '40px');
drawBarChart(dataSet, options, element);



