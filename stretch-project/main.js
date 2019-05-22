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
        text.setAttributeNS(null, 'y', bar.getAttribute('y'));
        text.setAttributeNS(null, 'x', 45);
        text.setAttributeNS(null, 'transform', bar.getAttribute('transform'));
        text.style.fill = 'red';
        text.style.dominantBaseline = 'text-before-edge';
        var label = document.createTextNode(dataSet[i]);
        text.appendChild(label);

        svg.appendChild(text);
    }
}

// Given a string indicating a position of the text the function sets position of bar chart text. Default is 'text-before-edge'
// known here as 'top'. Other options: bottom and center.
function setTextPos(pos = 'top') {
    var svg = document.getElementById(element);

    var barText = document.getElementsByTagName('text');

    for (var i = 0; i < barText.length; i++) {
        var bar = document.getElementById('graph-body').children[i];
        if (pos == 'top') {
            barText[i].setAttributeNS(null, 'x', 42);
            barText[i].setAttributeNS(null, 'y', bar.getAttribute('y'));
            barText[i].style.dominantBaseline = 'text-before-edge';
        } else if (pos === 'bottom') {
            barText[i].setAttributeNS(null, 'x', 45);
            barText[i].setAttributeNS(null, 'y', svg.getAttribute('height') - 20);
        } else if (pos === 'center') {
            barText[i].setAttributeNS(null, 'x', 50);
            barText[i].setAttributeNS(null, 'y', svg.getAttribute('height') - bar.getAttribute('height') / 2);
            barText[i].style.textAnchor = 'middle';
        }
    }
}

function changeBarColor(color, barNum){
    var bar = document.getElementsByTagName('rect')[barNum - 1];
    bar.style.fill = color;
}

function changeAllBarColor(fillColor, strokeColor = 'black'){
    var bars = document.getElementsByTagName('rect');
    for (var i = 0; i < bars.length; i++){
        bars[i].style.fill = fillColor;
        bars[i].style.stroke = strokeColor;
    }
}

function changeTextColor(color){
    var allText = document.getElementsByTagName('text');
    for (var i = 0; i < allText.length; i++){
        allText[i].style.fill = color;
    }
}

function changeSpacing(dataSet, padding) {
    var svgWidth = document.getElementById('graph-body').getAttribute('width');
    var bars = document.getElementsByTagName('rect');
    var barWidth = svgWidth / dataSet.length;
    for (var i = 0; i < bars.length; i++) {
        bar[i].getAttribute('width', barWidth - padding);
    }
}

var dataSet = [550, 100, 130, 50, 60, 280, 80];
var options = {width: 800, height: 600};
var element = 'graph-body';

graphTitle('Blah Blah Bar Graph', 'green', '40px');
drawBarChart(dataSet, options, element);
setTextPos('bottom');







