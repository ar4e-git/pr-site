const mtvaz = `mtvazerbaycan`;
var player = new Playerjs({id: "player", file: `https://ex-my-prod.onrender.com/channel/${mtvaz}.m3u8`, poster:"muztv-1.png"});
let time100;
function PlayerjsEvents(event,player,info){
    if(x=="time"){
        if(window.gtag && info>100 && !time100){
            gtag("event", "playerjs_time", {"time":"100"});
            time100 = true;
        }
    }
    if(x=="new"){
        time100 = false;
    }
}