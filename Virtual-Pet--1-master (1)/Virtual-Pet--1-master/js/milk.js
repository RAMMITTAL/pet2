class Milk{
    constructor(){
        this.image = loadImage("images/Milk.png")
        this.foodstok = 0
        this.lastfed = 0
    }
    getfoodstok(){
        database.ref("food").on("value",(data)=>{
           this.foodstok = data.val()
          }) 
    }
    updatefoodstok(){
        database.ref ('/').update({
            food:this.foodstok
          })
    }
    deductfood(){
        if(this.foodstok>0)
        this.foodstok--
    }
    display(){
        console.log("display")
        var i  = 10
        for(var j = 0;j<this.foodstok;j++){
            image(this.image,i,400,40,40)
            i = i+30
        }
    }

}


