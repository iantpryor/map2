(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 1280;
        var height = 720;
        var blockSize = 16;
        var leftright = "none";
        var updown = "none";
        var levelCount = 3;
        
        
        document.getElementById("paintbtn").onclick = paint;
        
        function createNext(updown, leftright, prevX, prevY){
            switch(updown){
                case "up":
                    switch(leftright){
                        case "left":
                            alert("18, 19, 0, 1");
                            break;
                        case "right":
                            alert("3, 4, 5, 6");
                            break;
                        default:
                        alert("1, 2 ,3");
                    }
                    break;
                case "down":
                    switch(leftright){
                        case "left":
                            alert("13, 14, 15, 16");
                            break;
                        case "right":
                            alert("8, 9, 10, 11");
                            break;
                        default:
                        alert("11, 12, 13");
                    }
                    break;
                default:
                    switch(leftright){
                        case "left":
                            alert("16, 17, 18");
                            break;
                        case "right":
                            alert("6, 7, 8");
                            break;
                        default:
                        alert("none");
                    }
            }
            var newX = 0;
            var newY = 0;
            return [newX, newY];
        }
        
        function drawLevel(x, y){
            c.rect(x,y,90,90);
            for(var i = 0; i< 3; i++){
                for(var j = 0; j< 3; j++){
                    c.rect((width/2) + i*30, (height/2) + j*30, 30, 30);
                    c.stroke();
                }
            }
        }
        
        //paint the map
        function paint() {
            
            var lvlselect = document.getElementById("levelcount");
            var dir1 = document.getElementsByName("leftright");
            var dir2 = document.getElementsByName("updown");
            
            
            for(var i = 0, length = dir1.length; i < length; i++){
                if (dir1[i].checked) {
                    // do whatever you want with the checked radio
                    leftright = dir1[i].value;
                    // only one radio can be logically checked, don't check the rest
                    break;
                }
            }
            
            for(var i = 0, length = dir2.length; i < length; i++){
                if (dir2[i].checked) {
                    // do whatever you want with the checked radio
                    updown = dir2[i].value;
                    // only one radio can be logically checked, don't check the rest
                    break;
                }
            }
            
            levelCount = lvlselect.options[lvlselect.selectedIndex].value;
            
            alert(updown+","+ leftright+","+ levelCount);
            
            var current = 0;
            var prevX = width/2;
            var prevY = height/2;
            drawLevel(prevX, prevY);
            while(current < levelCount){
                var newCords = createNext(updown, leftright, prevX, prevY);
                var newX = newCords[0];
                var newY = newCords[1];
                drawLevel(newX, newY);
                prevX = newX;
                prevY = newY;
                current++;
            }
        }
    }
})(window, document, undefined);
