block.stage={
    
    _width: 10,
    _height:20,

    _background_start:"#EEEEFF",
    _background_end: "#DDEEEE",
    _gridline: "#CCCCEE",
    _map:[],
    
   
    
    build_map:function(){
        var row=[];
        for(var i=0 ; i<block.stage._width;i++){
            row.push(0);
        }
        for(var j=0; j<block.stage._height;j++){
            block.stage._map.push(row);
        }
    },
    
    draw_stage:function(){
        var stage_canvas=document.createElement("canvas");
        stage_canvas.id="block_stage";
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
    init:function(){
        this.build_map();
        this.draw_stage();
    },
    
}