class Player{
   constructor(id){
       this._id=id;
   } 
   get id(){
       return this._id;
   }
   toString(){
       return "Player "+this._id;
   }
}

class Dice{
    constructor(){
        this._faceValue=0;
    }
    get faceValue(){
        return this._faceValue;
    }
    roll(){
        this._faceValue=Math.floor(Math.random() * 6) +1;
        return this._faceValue;
    }
}
class RollingDiceGame{
    constructor(p1, p2, round){
        this._p1=p1;
        this._p2=p2;
        this._dice=new Dice();
        this._drawRounds=0;
        this._totalRounds=round;
        this._p1WinRounds=0;
        this._p2WinRounds=0;
    }
    play(){
        for(let i=1;i<=this._totalRounds;i++){
           let roundWinner=this.roundAt();  
           console.log(`Round Winner# ${i}: ${roundWinner.toString()}`);          
        }
        return this._p1WinRounds > this._p2WinRounds
          ? this._p1
          : this._p1WinRounds < this._p2WinRounds
          ? this._p2
          : "DRAW, No Game Winner";
    }
    roundAt(){
        let p1Number=this._dice.roll();
        console.log(`${this._p1}: ${p1Number}`);
        let p2Number=this._dice.roll();
        console.log(`${this._p2}: ${p2Number}`);
        return this.roundWinner(p1Number, p2Number); 
        
    }
    roundWinner(p1Number, p2Number){
      //p1Number>p2Number?this._p1WinRounds++:p1Number==p2Number?this._drawRounds++:this._p2WinRounds++;
      if (p1Number > p2Number) {
        this._p1WinRounds++;
        return this._p1;
      } else if (p1Number < p2Number) {
        this._p2WinRounds++;
        return this._p2;
      }
      this._drawRounds++;
      return "Draw, No Round Winner!";
    }
    toString(){
        return "Total Rounds: "+this._totalRounds + ", Draw Rounds: "+this._drawRounds+ "\n"+
               this._p1.id + " Win Rounds: "+ this._p1WinRounds + "\n"+
               this._p2.id + " Win Rounds: "+ this._p2WinRounds;
    }

}
let rounds=prompt("Welcome Dice Game, Please enter the number of playing rounds: ");
let diceGame=new RollingDiceGame(new Player("A"), new Player("B"), rounds);
let gameWinner=diceGame.play();
alert(`${diceGame.toString()} \nGame Winner: ${gameWinner.toString()}`);


