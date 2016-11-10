/*
 * 核心算法。
 * 根据用户的一定操作，进行规定的数值计算已经数值变动。
 * 计算规则：
 * 1.若操作为上或下，纵向计算数值，判断纵向相邻两个位置数值是否相等，若相等，则合并。主要是操作二维数组中同一个序号的数值。
 * 2.若操作为左或右，横向计算数值，判断横向相邻两个位置数值是否相等，若相等则合并。主要是操作二维数组中同一个数组中相邻的数值。
 * 3.上和下的区别在最终结果放置的位置在前或是后。
 * 4。若没有数值合并，也要根据操作进行数组位置的移动。
 * 5.上下左右的算法是类似的，只是查找的目标不一样
 */

var Cp = {
    up : function(map){  
        var i , j , t , k , flag;
        //i,j为坐标轴。t为结果的取值，k为二次查询的坐标轴。
        //flag为返回值，若有数值变动或位置变动，就记flag为1，否则为0。
        //若flag为0，就证明此次操作没有任何变化，可以不重新渲染。
        flag = 0;  
        for ( i = 0; i < map.length; i++ ){  
            for( j = 0; j < map[i].length ; j++){  
                if(map[i][j] > 0){  
                    t = map[i][j];  
                    //从上至下遍历，坐标（i,j）的值上边一个是否有值，   
                    //有，判断是否相等，相等，合并，不相等，不移动，   
                    //无，往上移动，直至到头   
                    for( k = i-1; k >= 0; k--){  
                        if(map[k][j] > 0){  
                            if(map[k][j] == t){  
                                map[i][j]=0;  
                                map[k][j]+=t;  
                                flag = 1;  
                            }else{  
                                map[i][j]=0;  
                                map[k+1][j]=t;  
                                if(i != k+1){  
                                    flag = 1;  
                                }  
                            }  
                            break;  
                        }  
                        if(k==0){                             
                            map[i][j]=0;  
                            map[k][j]=t;  
                            if(i != k+1){  
                                flag = 1;  
                            }  
                        }  
                    }  
                }  
                  
            }             
        };  
        return flag;  
    },  
    down : function(map){  
        var i , j , t , k , flag;  
        flag = 0;  
        for ( i = map.length - 1; i >= 0 ; i-- ){  
            for( j = 0 ; j < map[i].length ; j++){  
                if(map[i][j] > 0){  
                    t = map[i][j];  
                    for( k = i+1; k < map.length; k ++){  
                        if(map[k][j] > 0){  
                            if(map[k][j] == t){  
                                map[i][j]=0;  
                                map[k][j]+=t;  
                                flag = 1;  
                            }else{  
                                map[i][j]=0;  
                                map[k-1][j]=t;  
                                if(i != k-1){  
                                    flag = 1;  
                                }  
                            }  
                            break;  
                        }  
                        if(k==map.length-1){                              
                            map[i][j]=0;  
                            map[k][j]=t;  
                            if(i != k+1){  
                                flag = 1;  
                            }  
                        }  
                    }  
                }  
                  
            }             
        };  
        return flag;  
    },  
    left : function(map){  
        var i , j , t , k , flag;  
        flag = 0;  
        for ( i = 0; i < map.length; i++ ){  
            for( j = 0; j < map.length ; j++){  
                if(map[i][j] > 0){  
                    t = map[i][j];  
                    for( k = j-1; k >= 0; k --){  
                        if(map[i][k] > 0){  
                            if(map[i][k] == t){  
                                map[i][j]=0;  
                                map[i][k]+=t;  
                                flag = 1;  
                            }else{  
                                map[i][j]=0;  
                                map[i][k+1]=t;  
                                if(j != k+1){  
                                    flag = 1;  
                                }  
                            }  
                            break;  
                        }  
                        if(k==0){                             
                            map[i][j]=0;  
                            map[i][k]=t;  
                            flag = 1;  
                        }  
                    }  
                }  
                  
            }             
        };  
        return flag;  
    },  
    right : function(map){  
        var i , j , t , k , flag;  
        flag = 0;  
        for ( i = 0; i < map.length; i++ ){  
            for( j = map[i].length-1; j >= 0 ; j--){  
                if(map[i][j] > 0){  
                    t = map[i][j];  
                    for( k = j+1; k < map[i].length; k ++){  
                        if(map[i][k] > 0){  
                            if(map[i][k] == t){  
                                map[i][j]=0;  
                                map[i][k]+=t;  
                                flag = 1;  
                            }else{  
                                map[i][j]=0;  
                                map[i][k-1]=t;  
                                if(j != k-1){  
                                    flag = 1;  
                                }  
                            }  
                            break;  
                        }  
                        if(k==map[i].length-1){                           
                            map[i][j]=0;  
                            map[i][k]=t;  
                            flag = 1;  
                        }  
                    }  
                }  
                  
            }             
        };  
        return flag;  
    }  
};  