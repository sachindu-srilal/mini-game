const part =document.createElement('div');
part.classList.add('element');
document.body.append(part);

let jump=false;
let moveLeft=false;
let moveRight=false;
document.body.addEventListener('keydown',(eventData)=>{
    if(eventData.code=='Space')jump=true;
    if(eventData.code=='ArrowLeft')moveLeft=true;
    if(eventData.code=='ArrowRight')moveRight=true;

});
document.body.addEventListener('keyup',(eventData)=>{
    if(eventData.code=='ArrowLeft') moveLeft=false;
    if(eventData.code=='ArrowRight') moveRight=false;

});
let dx=0;
let y =700;
function jumping(){
    y=700-700*(Math.sin(Math.PI/180*dx))
    part.style.top=y+"px";
    dx++;
    if(dx==180) {
        dx=0;
        jump=false;
    }
};
let right=0;
function movingRight(){
    part.style.left=right+"px";
    if(right==document.body.offsetWidth-150){
        right=document.body.offsetWidth-150;
    }else{
        right=right+2;
    }
};

function movingleft(){
    part.style.left=right+"px";
    if(right<=0){
        right=0;
    }else{
        right=right-2;
    }
};

const tmr=setInterval(() => {
    if(jump){
        jumping();
    }
    if(moveRight){
        movingRight();
    }
    if(moveLeft){
        movingleft();
    }

}, 1);

let i=1
setInterval(() => {
    if(!(jump || moveLeft || moveRight)){
        part.style.backgroundImage=`url('img/png/Idle (${i}).png')`;
        if(i==16) i=0;
        i++;
    }

}, 100);
let j=0;
let state=0;
setInterval(() => {
    if(moveRight){
        if(state===1){
            part.style.transform='scaleX(1)';
            state=0;
        }
        part.style.backgroundImage=`url('img/png/Walk (${j}).png')`;
        if(j>=13) j=0;
        j++;

    }

}, 50);
let l=0
setInterval(() => {
    if(moveLeft){
        part.style.backgroundImage=`url('img/png/Walk (${l}).png')`;
        if(state===0){
            part.style.transform='scaleX(-1)';
            state=1;
        }
        if(l>=13) l=0;
        l++;
    }

}, 50);
let k=0;
setInterval(() => {
    if(jump){
        part.style.backgroundImage=`url('img/png/Jump (${k}).png')`;
        if(k>=16) k=0;
        k++;

    }
}, 50);

