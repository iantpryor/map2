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
        
        function createNext(updown, leftright, prevX, prevY){
            switch(updown){
                case up:
                    switch(leftright){
                        case left:
                            //10, 11, 0, 1
                            break;
                        case right:
                            //1, 2, 3, 4
                            break;
                        default:
                        //0, 1, 2
                    }
                    break;
                case down:
                    switch(leftright){
                        case left:
                            //7, 8, 9, 10
                            break;
                        case right:
                            //4, 5, 6, 7
                            break;
                        default:
                        //6, 7, 8
                    }
                    break;
                default:
                    switch(leftright){
                        case left:
                            //9, 10, 11
                            break;
                        case right:
                            //3, 4, 5
                            break;
                    }
            }
        }
        
        //paint the map
        function paint() {
            c.rect(width/2,height/2,90,90);
            for(var i = 0; i< 3; i++){
                for(var j = 0; j< 3; j++){
                    c.rect((width/2) + i*30, (height/2) + j*30, 30, 30);
                    c.stroke();
                }
            }
        }
    }
})(window, document, undefined);
