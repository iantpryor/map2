(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 1280;
        var height = 720;
        var blockSize = 16;
        
        document.getElementById("paintbtn").onclick = paint;
        
        //paint the map
        function paint() {
            c.rect(20,20,150,100);
            c.stroke();
        }
    }
})(window, document, undefined);
