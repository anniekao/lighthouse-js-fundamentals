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

// Create svg rect elements to represent the bars of the graph depending on the inputted number
function createGraphBars(dataSet){
    var svg = document.getElementById('graph-body');
    var height = svg.getAttribute('height');
    var width = svg.getAttribute('width');
    var barWidth = width/dataSet.length;
    var barPadding = 5;

    for (var i = 0; i < dataSet.length; i++){
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('y', height - dataSet[i]);
        rect.setAttribute('height', dataSet[i]);
        rect.setAttribute('width', barWidth - barPadding);
        rect.style.fill = 'black';
        var translate = [barWidth * i, 0];
        rect.setAttribute('transform', "translate(" + translate + ")");

        svg.appendChild(rect);

    }

}

var dataSet = [20, 30, 40, 50, 60, 120];
graphTitle('Blah Blah Bar Graph');
setSVGWidthHeight(500, 300);
createGraphBars(dataSet);

