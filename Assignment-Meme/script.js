let state = 0;
function changeMeme(){
    let text = document.getElementById("text");
    let emoji = document.getElementById("emoji");
    if(state==0){
        text.innerHTML="Teacher is Watching 👨‍🏫";
        emoji.innerHTML="🤓";
        state=1;
    }
    else if(state==1){
        text.innerHTML="Code Compiled Successfully 😎";
        emoji.innerHTML="🥳";
        state=2;
    }
    else if(state==2){
        text.innerHTML="Submitted Assignment ✅";
        emoji.innerHTML="😌";
        state=3;
    }
    else{
        text.innerHTML="404 Errors Found 💀";
        emoji.innerHTML="😭";
        state=0;
    }
}