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
        var lookupDir = {
            u: [1,2,3],
            ur: [3,4,5,6],
            r: [6,7,8],
            dr: [8,9,10,11],
            d: [11,12,13],
            dl: [13,14,15,16],
            l: [16,17,18],
            ul: [18,19,0,1]
        };
        var lookupOff = {
            0: [-2,-3],
            1: [-1,3],
            2: [0,-3],
            3: [1,-3],
            4: [2,-3],
            5: [3,-2],
            6: [3,-1],
            7: [3,0],
            8: [3,1],
            9: [3,2],
            10: [2,3],
            11: [1,3],
            12: [0,3],
            13: [-1,3],
            14: [-2,3],
            15: [-3,2],
            16: [-3,1],
            17: [-3,0],
            18: [-3,-1],
            19: [-3,-2]
        };
        
        
        document.getElementById("paintbtn").onclick = paint;
        
        function reset(){
            c.clearRect ( 0 , 0 , canvas.width, canvas.height );
            c.beginPath();
        
        }
        
        function createNext(updown, leftright, prevX, prevY){
            var rand4 = Math.floor((Math.random() * 4) );
            var rand3 = Math.floor((Math.random() * 3) );
            var dir = -1;
            var multiX = -1;
            var multiY = -1;
            switch(updown){
                case "up":
                    switch(leftright){
                        case "left":
                            dir = lookupDir.ul[rand4];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                            alert("18, 19, 0, 1");
                            break;
                        case "right":
                            dir = lookupDir.ur[rand4];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                            alert("3, 4, 5, 6");
                            break;
                        default:
                        dir = lookupDir.u[rand3];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                        alert("1, 2 ,3");
                    }
                    break;
                case "down":
                    switch(leftright){
                        case "left":
                            dir = lookupDir.dl[rand4];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                            alert("13, 14, 15, 16");
                            break;
                        case "right":
                            dir = lookupDir.dr[rand4];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                            alert("8, 9, 10, 11");
                            break;
                        default:
                        dir = lookupDir.d[rand3];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                        alert("11, 12, 13");
                    }
                    break;
                default:
                    switch(leftright){
                        case "left":
                            dir = lookupDir.l[rand3];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                            alert("16, 17, 18");
                            break;
                        case "right":
                            dir = lookupDir.r[rand3];
                            multiX = lookupOff[dir][0];
                            multiY = lookupOff[dir][1];
                            alert("6, 7, 8");
                            break;
                        default:
                        alert("none");
                    }
            }
            var newX = prevX + multiX*30;
            var newY = prevY + multiY*30;
            return [newX, newY];
        }
        
        function drawLevel(x, y){
            c.rect(x,y,90,90);
            for(var i = 0; i< 3; i++){
                for(var j = 0; j< 3; j++){
                    c.rect((x) + i*30, (y) + j*30, 30, 30);
                    c.stroke();
                }
            }
        }
        
        //paint the map
        function paint() {
            reset();
            
            
            
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
            current++;
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
