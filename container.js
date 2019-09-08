function Container(n){
    this.x = random(windowWidth - 100);
    this.y = random(windowHeight - 100);
    this.r = random(100,255);
    this.g = random(100,255);
    this.b = random(100,255);

    this.show = function(){
        fill(r,g,b);
        noStroke();
        for( var i = 0; i<n; i++){
            rect(x,y,length*2,length*2);
        }
    }
    this.update = function(){
        this.x += random(0,40);
        this.y += random(0,40);
    }
}