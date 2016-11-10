/*
 * 绘画地图既渲染界面的效果。将算法计算出的结果展现出来。
 * 每次玩家有操作就进行一次核心计算，计算当前的结果如何，再然后使用draw函数重新渲染界面。
 * 
 */
 //4*4方格内数字的集合，用于保存用户进度
var mapdata =[[0,0,0,0],
    [0,0,0,0],  
        [0,0,0,0],  
        [0,0,0,0]];  
//地图对象。包含3个函数。1。地图已满，用于结束游戏；2.绘画地图，用于每次操作后地图的重新渲染；3.随机生成新数值
var Map = {   
    isFull : function(map){  
    	//地图已满函数
        var i , j;  
    },  
    //绘画地图函数
    draw : function(map,ctx){  
        var i , j , c ;  
        //TODO c = eee4da ;   
        // alert(map);   
        //ctx是canvas对象，所有的重新渲染都在ctx上进行
        //map是当前游戏进度结果的保存数组，初始即为mapdata。
        for(i = 0; i < map.length; i++ ){//i为Y轴，j为X轴   
            for(j = 0; j < map[i].length; j++){  
                if(map[i][j]==0){  
                	//如果当前格数字为0则为背景颜色较浅，否则颜色较深
                    ctx.fillStyle='#eee4da';  
                    }  
                else{  
                    ctx.fillStyle='#ede0c8';  
                }  
                //绘制方格，j,i为坐标轴，80为方格大小
                ctx.fillRect(j*100+10,i*100+10,80,80);  
                if(map[i][j]>0){  
                	//如果当前格数字不为0，则显示具体的数字，并给予数字对应的样式
                    ctx.fillStyle='#000000';  
                    ctx.font = 'bold 48px Arial';  
                    ctx.textAlign = 'center';  
                    ctx.textBaseline = 'middle';  
                    ctx.fillText(''+map[i][j],j*100+50,i*100+50);  
                }  
            }  
        }  
    },  
	//一次操作后随即生成新数值
    randomchesspieces : function(map){  
        var x , y , z , i ;  
        //x,y为坐标轴，一直做循环，直到对应数值对应x,y位置中的值为0，这样才可以在新地图上填充数字。默认填充新数值为2，取1/3得机会填充新数值为4.
        while(true){  
            x = Math.floor(Math.random()*4);  
            y = Math.floor(Math.random()*4);  
            z = 2;  
            if(Math.floor(Math.random()*10) > 7){  
                z = 4;  
            }  
            if(map[x][y] == 0){  
                map[x][y] = z;  
                break;  
            }  
        }  
    },  
      
};  