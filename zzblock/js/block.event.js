block.event={
    gravity : function(shape)
    {
        shape.render();
        block.event.interval_id=setInterval(block.event.falling_(shape),1000);
    },
    stop_falling_ : function(){
        clearInterval(block.event.interval_id);
    },
    falling_: function(shape){
        return function(){
            if (!block.event.landing_check(shape)) {
                shape.clear_render();
                shape._row+=1;
                shape.render();
            }else{
                block.event.landing(shape);
                if (shape._row==0) {            //Game over
                    
                    block.event.stop_falling_();
                    block.current_shape=null;
                }else{
                    block.new_shape();
                }
            }
        }
    },
    landing_check: function(shape){  //down
        
        var can_stop=false;
        var row=shape._row;
        var col=shape._col;
        if (row+shape._array.length>=block.stage._height) {
            can_stop=true;
            return can_stop;
        }
        for (var j=0; j<shape._array.length;j++) {
            for (var i =0; i <shape._array[j].length; i++)
            {
                if(shape._array[j][i]==1){
                    if(block.stage._map[row+j+1][col+i]==1){
                        can_stop=true;
                        return can_stop;
                    }
                }
            }
        }
        return can_stop;
    },
    landing:function(shape){
        block.event.stop_falling_();
        
        for (var j=0; j<shape._array.length;j++) {
            for (var i=0; i<shape._array[j].length;i++){
                
                if (shape._array[j][i]==1) {
                    var mapj=shape._row+j;
                    var mapi=shape._col+i;
                    block.stage._map[mapj][mapi]=shape._array[j][i];
                }
            }
        }
        block.stage.render();
        block.event.erase_check(shape._row);
    },
    collide_check_left: function(shape){  //left - right
        var can_move=true;
        var row=shape._row;
        var col=shape._col;
        if (col<=0) {
            can_move=false;
            return can_move;
        }
        for (var j=0; j<shape._array.length;j++) {
            for (var i =0; i <shape._array[j].length; i++){
                if(shape._array[j][i]==1){
                    if (block.stage._map[row+j][i+col-1]==1) {
                        can_move=false;
                        return can_move
                    }
                    break;
                }
            }
        }
        return can_move;
    },
    collide_check_right: function(shape){
        var can_move=true;
        var row=shape._row;
        var col=shape._col;
        
        if (col+shape._array[0].length>=block.stage._width) {
            can_move=false;
            
            return can_move;
        }
        for (var j=0; j<shape._array.length;j++) {
            for (var i =0; i <shape._array[j].length; i++){
                if(shape._array[j][i]==1){
                    if (block.stage._map[row+j][i+col+1]==1) {
                        can_move=false;

                        return can_move;
                    }
                }
            }
        }
        return can_move;
    },
    erase_check: function(row){
        var indexes=[];
        
        for(var j=row; j<block.stage._height;j++){
            var remove_flag=true;
            for (var i=0; i<block.stage._map[j].length;i++) {
                if (block.stage._map[j][i]==0) {
                    remove_flag=false;
                    break;
                } 
            }
            if (remove_flag==true) {
                
                indexes.push(j);
            }
        }
        
        if (indexes.length>0) {
            console.log(indexes);
            block.stage.erase(indexes);
        }
    }
}