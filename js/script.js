(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 1280;
        var height = 720;
        var blockSize = 16;
        
        
        
        //paint the map
        function paint() {
            for(var i = 0; i < width; i++) {
                for(var j = 0; j < height; j++) {
                    if(map[i][j] == 1) {
                        c.fillStyle = "#000000";
                        c.fillRect(i, j, 1, 1);
                    } else {
                        c.fillStyle = "#FFFFFF";
                        c.fillRect(i, j, 1, 1);
                    }
                }
            }
        }
    }
})(window, document, undefined);
