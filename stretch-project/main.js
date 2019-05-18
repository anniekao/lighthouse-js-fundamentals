// Change graph title
function graphTitle(title){
    $('#graph-title').text(title);
}

// Set the width and height of the svg element
function setSVGWidthHeight(width, height){
    var svg = document.getElementById('graph-body');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
}

// Given an array of data, an object containing the width and height of the chart and the element where the chart appears
// a bar chart is created.
function drawBarChart(data, options, element){
    setSVGWidthHeight(options.width, options.height);

    var svg = document.getElementById(element);
    var height = svg.getAttribute('height');
    var width = svg.getAttribute('width');
    var barWidth = width/data.length;
    var barPadding = 5;

    for (var i = 0; i < data.length; i++){
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('y', height - data[i]);
        rect.setAttribute('height', data[i]);
        rect.setAttribute('width', barWidth - barPadding);
        rect.style.fill = 'black';
        var translate = [barWidth * i, 0];
        rect.setAttribute('transform', "translate(" + translate + ")");

        svg.appendChild(rect);

    }

}

var dataSet = [20, 30, 40, 50, 60, 120];
var options = {width: 500, height: 300};
var element = 'graph-body';

graphTitle('Blah Blah Bar Graph');
drawBarChart(dataSet, options, element);

