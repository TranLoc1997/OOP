
class Hero{
  constructor(image, top, left, size,spees){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    

  }

  
  getHeroElement(){
    return '<img width="'+ this.size + '"' +' height="'+ this.size + '"' +
    ' src="' + this.image +'"' +
    ' style="top: '+this.top+'px; left:'+this.left+'px; px;position:absolute;" />';

  }
  kiemTra(){
      if(hero.left <  1300 -hero.size && hero.top ==0){
      this.left +=100;
      console.log('ok: ' + this.left);
    } 
    else if( hero.top < 500 && hero.left >= 1300 -hero.size){
        this.top +=100;  
        console.log('ok1: ' + this.top + "left1" + this.left);
      
        }else if(hero.left > 0 && hero.top >=500){
          this.left -=100;
           console.log('ok2: ' + this.top + "left1" + this.left);
        }
        else if(hero.left <= 0 && hero.top > 0){
          this.top -=100;
          console.log('ok3: ' + this.top + "left3" + this.left);
        }
  }

}
var hero = new Hero('hoa.jpg', 0, 0, 100,);

function start(){
 // alert(hero.left);
  hero.kiemTra();
  
  
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();
