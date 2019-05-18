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







var dataSet = [20, 30, 40, 50, 60, 120];
graphTitle('Blah Blah Bar Graph');
setSVGWidthHeight(500, 300);

