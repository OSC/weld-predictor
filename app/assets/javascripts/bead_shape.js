window.onload = function() {
    //debugger;

    var elementId = 'bead_canvas_0';

    // Get a reference to the canvas object
    var canvas = document.getElementById(elementId);


    // TODO get computed width
    canvas.width = 231;
    canvas.height = 231;

    // 2" max width, 1" height max each top and bottom
    var w = 0.3;    // bead width
    var a = 0.0;    // top horizontal
    var b = 0.1;    // top vertical
    var c = 0.0;    // bottom horizontal
    var d = -0.150; // bottom vertical
    var x = 0.0;    // bead position x
    var y = 0.350;  // head position y
    var r = 0.0;    // rotation
    var z1 = 0.0;   // bead start
    var z2 = 0.5;   // bead end

    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    path.strokeWidth = 2;
    var center_x = canvas.width/2;
    var center_y = canvas.height/2;
    var start_x = center_x - (inchesToPixels(w)/2);
    var start_y = center_y;
    //console.log(start_x + " " + start_y);
    var start = new paper.Point(start_x, start_y);
    // Move to start and draw a line from there
    path.moveTo(start);
    //debugger;
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    //path.lineTo(start.add([ 200, -50 ]));
    //path.lineTo([ (canvas.width/2) + ((inchesInPixels * w)/2), (canvas.width/2) ]);
    var point_a = center_x + (inchesToPixels(a));
    var point_b = center_y - (inchesToPixels(b) * 2); // Paper js up(-) down(+)
    var a_b = new paper.Point(point_a, point_b);
    var end_x = center_x + (inchesToPixels(w)/2);
    var end_y = center_y;
    var x_y_2 = new paper.Point(end_x, end_y);

    var point_c = center_x + (inchesToPixels(c));
    var point_d = center_y - (inchesToPixels(d) * 2);
    var c_d = new paper.Point(point_c, point_d);

    path.quadraticCurveTo(a_b, x_y_2);
    path.quadraticCurveTo(c_d, start);
    //path.selected = true;
    path.closed = true;
    path.fillColor = '#42b9f4';
    // Draw the view now:
    paper.view.draw();
};

function pixelsToInches(pixels) {
    var ppi = 200;
    var inches = pixels / ppi;
    return inches;
}

function inchesToPixels(inches) {
    var ppi = 200;
    var pixels = inches * ppi;
    return pixels;
}

var segment, path;
var movePath = false;
function onMouseDown(event) {
    segment = path = null;
    var hitResult = project.hitTest(event.point, hitOptions);
    if (!hitResult)
        return;

    if (event.modifiers.shift) {
        if (hitResult.type == 'segment') {
            hitResult.segment.remove();
        };
        return;
    }

    if (hitResult) {
        path = hitResult.item;
        if (hitResult.type == 'segment') {
            segment = hitResult.segment;
        } else if (hitResult.type == 'stroke') {
            var location = hitResult.location;
            segment = path.insert(location.index + 1, event.point);
            path.smooth();
        }
    }
    movePath = hitResult.type == 'fill';
    if (movePath)
        project.activeLayer.addChild(hitResult.item);
}

function onMouseMove(event) {
    project.activeLayer.selected = false;
    if (event.item)
        event.item.selected = true;
}

function onMouseDrag(event) {
    if (segment) {
        segment.point += event.delta;
        path.smooth();
    } else if (path) {
        path.position += event.delta;
    }
}


