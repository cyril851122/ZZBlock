block.event.keyevent={
    binding:function(){
        document.onkeydown=function(e){
            switch (e.keyCode) {
                case 37: //left
                    block.event.keyevent.left();
                    break;
                case 40: //down
                    block.event.keyevent.down();
                    break;
                case 39: //right
                    block.event.keyevent.right();
                    break;
                case 65: //a
                    block.event.keyevent.lrotate();
                    break;
                case 83:
                    block.event.keyevent.rrotate();
                    break; //s
                default:
                    break;
            }
        }
    },
    left:function(){
        block.current_shape.clear_render();
        block.current_shape.left();
        block.current_shape.render();
    },
    right:function(){
        block.current_shape.clear_render();
        block.current_shape.right();
        block.current_shape.render();
    },
    down:function(){
        block.current_shape.clear_render();
        block.current_shape.down();
        block.current_shape.render();
    },
    lrotate:function(){
        block.current_shape.clear_render();
        block.current_shape.lrotate();
        block.current_shape.render();
    },
        rrotate:function(){
        block.current_shape.clear_render();
        block.current_shape.rrotate();
        block.current_shape.render();
    }
}