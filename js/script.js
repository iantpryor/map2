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
            c.rect(width/2,height/2,90,90);
            for(int i = 0; i< 3; i++){
                for(int j = 0; j< 3; j++){
                    c.rect(width/2+i, height/2 + j, 30, 30);
                }
            }
            c.stroke();
        }
    }
})(window, document, undefined);
