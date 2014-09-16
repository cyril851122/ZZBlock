block.stage={
    
    _width: 8,
    _height:16,

    _background_start:"#EEEEFF",
    _background_end: "#DDEEEE",
    _gridline: "#CCCCEE",
    _map:[],
    
   
    
    build_map:function(){

        for(var j=0; j<block.stage._height;j++){
            var row=[];
            for(var i=0 ; i<block.stage._width;i++){
                row.push(0);
            }
            block.stage._map.push(row);
        }
    },
    erase:function(indexes){
        
        for (var i in indexes){
            block.stage._map.splice(indexes[i],1);
            var row=[];
            for(var i=0 ; i<block.stage._width;i++){
                row.push(0);
            }
            block.stage._map.unshift(row);
        }
       
        block.stage.render();
    },
    draw_stage:function(){
        var stage_canvas=document.createElement("canvas");
        stage_canvas.id="background_stage";
        stage_canvas.style="position: absolute; left: 0; top: 0; z-index: 0;";
        stage_canvas.width=block._u * block.stage._width ;
        stage_canvas.height=block._u * block.stage._height;
        stage_canvas.style.border="solid 1px "+block.stage._background_dark;
        var container=document.getElementById("container");
        container.appendChild(stage_canvas);
        var ctx = stage_canvas.getContext("2d");
        var grd = ctx.createLinearGradient(0,0, 0 ,block._u * block.stage._height);
        grd.addColorStop(0, block.stage._background_start);
        grd.addColorStop(1, block.stage._background_end);
        ctx.fillStyle = grd;
        ctx.fillRect(0,
                     0,
                     block.stage._width * block._u,
                     block.stage._height * block._u);
        ctx.strokeStyle = block.stage._gridline;
        
      
        for(var x=0; x<=block.stage._width;x++){
            ctx.moveTo(x * block._u,0);
            ctx.lineTo(x * block._u,
                       block._u *  block.stage._height);
           
        }
        for(var y=0; y<= block.stage._height; y++){
            ctx.moveTo(0, y * block._u);
            ctx.lineTo(block._u *  block.stage._width,
                       y * block._u);
        }
       ctx.stroke();
    },
    render:function(){
        var stage=document.getElementById("foreground_stage");
        var ctx = stage.getContext("2d");
        
        for(var j=0;j<block.stage._height;j++){
            for(var i=0;i<block.stage._width;i++){
                if (block.stage._map[j][i]==1){
                    ctx.fillStyle="#CCCCCC";
                    ctx.fillRect(i*block._u,j*block._u,block._u,block._u);
                }else{
                    ctx.clearRect(i*block._u,j*block._u,block._u,block._u);
                }
                
            }
        }
    },
    foreground_stage:function(){
        var stage_canvas=document.createElement("canvas");
        stage_canvas.id="foreground_stage";
        stage_canvas.width=block._u * block.stage._width ;
        stage_canvas.height=block._u * block.stage._height;
        var container=document.getElementById("container");
        container.appendChild(stage_canvas);
    },
    init:function(){
        this.build_map();
        this.draw_stage();
        this.foreground_stage();
    },
    
}