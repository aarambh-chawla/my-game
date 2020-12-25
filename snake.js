class snake {
    constructor(){
        this.body = []
        this.xdir = 0
        this.ydir = 0
        this.len = 0
        this.body[0] = createVector(floor(w/2),floor(h/2))
    }
    setdir(x,y){
        this.xdir = x
        this.ydir = y
    }
    
}