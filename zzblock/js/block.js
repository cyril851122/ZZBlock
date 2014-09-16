var block={
    _u: 30,
    _score:0,
    init: function(){
        block.stage.init();
        block.event.keyevent.binding();
    },
    start: function(){
        block.new_shape();
    },
    new_shape: function(){
        var shape_index=Math.round(Math.random() * 6);
    
        this.current_shape=new block.shape(block.shape_config[shape_index]);
        block.event.gravity(this.current_shape);
    }
}