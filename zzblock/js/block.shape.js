

block.shape=function(config){
    this._array=config.array;
    this._row=0;
    this._col=3;
    this._color=config.color;
    
};


block.shape.prototype={
   
    left : function(){
        if (block.event.collide_check_left(this)) {
            this._col--;  
        }
        
    },
    right : function(){
        if (block.event.collide_check_right(this)) {
            this._col++;
        }
    },
    down :function(){
        block.event.falling_(this)();
        
    },
    rrotate : function(){
        var _rotated_array=[];
        var _rotated_width=this._array.length;   // original height
        var _rotated_height=this._array[0].length;  // original width
        for(var j=0; j<_rotated_height; j++){
            _rotated_array[j]=[];
            for(var i=0; i <_rotated_width; i++){
                _rotated_array[j][i]=this._array[ _rotated_width - i - 1 ][j];
                if (_rotated_array[j][i]==1) {
                    if (this._col+i>=block.stage._width) {
                        this._col=this._col-1;
                    }
                    if (block.stage._map[this._row+j][this._col+i]==1) {
                        return;
                    }
                }
            }
        }
        this._array=_rotated_array;
    },
    lrotate : function(){
        var _rotated_array=[];
        var _rotated_width=this._array.length;
        var _rotated_height=this._array[0].length;
         
        
        for(var j=0; j <_rotated_height; j++){
            _rotated_array[j]=[];
            for(var i=0; i<_rotated_width; i++){
                 _rotated_array[j][i]=this._array[ i ][_rotated_height - j -1];
                if (_rotated_array[j][i]==1) {
                    if (this._col+i>=block.stage._width) {
                        this._col=this._col-1;
                    }
                    if (block.stage._map[this._row+j][this._col+i]==1) {
                        return;
                    }
                }
            }
        }
        this._array=_rotated_array;
    },
    render : function() {
        var stage_canvas=document.getElementById("foreground_stage");
        var ctx = stage_canvas.getContext("2d");
        ctx.fillStyle=this._color;
        for(var y=0; y<this._array.length; y++){
            for( var x=0; x<this._array[0].length; x++){
                if(this._array[y][x]==1){
                    ctx.fillRect((this._col + x)*block._u,(this._row + y)* block._u,block._u, block._u);
                }
            }
        }
    },
    clear_render: function(){
        var stage_canvas=document.getElementById("foreground_stage");
        var ctx = stage_canvas.getContext("2d");
        for(var y=0; y<this._array.length; y++){
            for( var x=0; x<this._array[0].length; x++){
                if(this._array[y][x]==1){
                    ctx.clearRect((this._col + x)*block._u,(this._row + y)* block._u,block._u, block._u);
                }
            }
        }
    }
};


