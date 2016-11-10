var Game = {  
	//绘画对象为drawing,用jquery取得canvas对象。
    drawing : $('.canvas'),  
          
    context : drawing.getContext('2d'),   
    //初始化图层。给画板定义宽、高、色、方形
    //做两次地图生成随机数，做两次是为了给地图上初始化配置两个值。
    initDrawing : function(){  
        drawing.setAttribute('width',400);  
        drawing.setAttribute('height',400);  
        this.context.fillStyle = "#bbada0";  
        this.context.fillRect(0,0,drawing.width,drawing.height);  
        Map.randomchesspieces(mapdata);  
        Map.randomchesspieces(mapdata);  
        Map.draw(mapdata,this.context);  
    },  
    //初始化游戏，1.初始化地图界面；2.绑定键盘操作事件
    initGame : function(){  
        this.initDrawing();  
        this.Move(this.context);  
    },  
    //移动事件。ctx是对应canvas容器
    Move : function(ctx){  
        var k;  
        var m = function(e){  
            var maptest = JSON.parse(JSON.stringify(mapdata));//检验是否还有下一步，无则弹出over   
            var flag =Cp.left(maptest)||Cp.down(maptest)||Cp.right(maptest)||Cp.up(maptest);  
            if(!flag)  
                alert("Game Over!");  
            switch (e.keyCode) {  
                case 37:  
                    if(Cp.left(mapdata)){  
                    Map.randomchesspieces(mapdata);  
                    Map.draw(mapdata,ctx);  
                    }  
                    break;    
                case 38:   
                    if(Cp.up(mapdata)){  
                        Map.randomchesspieces(mapdata);  
                        Map.draw(mapdata,ctx);  
                        console.log("add,up");  
                    }  
                    break;  
                case 39:  
                    if(Cp.right(mapdata)){  
                    Map.randomchesspieces(mapdata);  
                    Map.draw(mapdata,ctx);  
                    }  
                    break;  
                case 40:  
                    if(Cp.down(mapdata)){  
                        Map.randomchesspieces(mapdata);  
                        Map.draw(mapdata,ctx);  
                        console.log("add,down");  
                    }  
                    break;  
            }  
        };  
        $(document).on("keyup",m);  
    }  
};  
  
Game.initGame();  