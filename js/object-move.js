const scoretxt =document.getElementById('score-count');
const dropedTxt =document.getElementById('drop-count');
const btnStart =document.getElementById('start-btn');
const btnRestart =document.getElementById('restart-btn');
const imgGameOver =document.getElementById('game-finish-img-container');
const imgGameStart =document.getElementById('game-start-img-container');

class Object{
    obj;
    Y=(window.innerHeight-100)*Math.random();
    X=window.innerWidth-100;
    dx=Math.random()*5;

    constructor(){
        this.obj =document.createElement('div');
        this.obj.classList.add('moving-object');
        document.body.append(this.obj);
        this.obj.style.top=`${this.Y}px`;
        this.obj.style.left=`${this.X}px`;
    }

    moving() {
        this.X=this.X-this.dx;
        this.obj.style.left=`${this.X}px`;
        if(this.X<=0) {
            this.Y=(window.innerHeight-100)*Math.random();
            this.X=window.innerWidth-100;
            this.obj.style.top=`${this.Y}px`;
            drop();
        };

        if(right<=this.X+100 && (right+150)>=this.X+100 && y<=this.Y-50 && (y+150)>=this.Y-50){
            this.Y=(window.innerHeight-100)*Math.random();
            this.X=window.innerWidth-100;
            this.obj.style.top=`${this.Y}px`;
            this.obj.style.left=`${this.X}px`;

            add();
        };
    };

};

let score=0;
function add(){
    score++;
    scoretxt.innerHTML=`Score : ${score}` ;
}
let dropCount=0;
function drop(){
    dropCount++;
    dropedTxt.innerHTML=`Dropped : ${dropCount}` ;
    if(dropCount==10){
        clearInterval(tmrInterval);
        tmrInterval=null;
        imgGameOver.style.backgroundImage=`url('img/game-over.png')`;
        btnRestart.style.display="block";
        imgGameOver.style.display="block";
        dropCount=0;

    }
}

const elm1=new Object();
const elm2=new Object();
const elm3=new Object();

btnStart.addEventListener('click',(eventData)=>{
    start();
});
btnRestart.addEventListener('click',(eventData)=>{
    score=0;
    start();
    scoretxt.innerHTML=`Score : 0` ;
    dropedTxt.innerHTML=`Dropped : 0` ;
});
let tmrInterval=null;
function start(){
    tmrInterval=setInterval(() => {
        elm1.moving();
        elm2.moving();
        elm3.moving();

    }, 10);
    btnStart.style.display="none";
    btnRestart.style.display="none";
    imgGameOver.style.display="none";
    imgGameStart.style.display="none";

};

