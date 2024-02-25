
var progbar = false

window.addEventListener('message', function(e) {
    
    if (e.data.message == "notify"){
       
        ShowNotif(e.data);
    }

    if (e.data.message == "progbar"){
        ProgBar(e.data);
    }

    if (e.data.message == "info"){
        $('.leftinfo').fadeIn(100);
        $('.leftinfo_top').html(e.data.toptext);
        $('.leftinfo_bottom').html(e.data.text);

        
        
    }

    if (e.data.message == "closeinfo"){
        $('.leftinfo').fadeOut(100);
      

        
        
    }

    
});


function ProgBar(data) {
    if (progbar == false) {

    
        $('.progbarmain_2_item').removeClass('addhover');
        $('.progbarmain').fadeIn(200);

        $('.progbarmain_text').html(data.mtext);
        i = 0
        
        progbar = true;

        var count = $(".progbarmain_2_item").length;
        var speed = data.mtime/count;

        $(".progbarmain_2_item").each(function(index){
    
            $(this).delay(speed*index).queue(function(next){
              
              i = i + 1
              $('.progbarmain_yuzde').html((i*5)+"%");

              $(this).addClass('addhover');
              if (i == 20){
                progbar = false;
                $('.progbarmain').fadeOut(200);
                $.post('https://majestic-lib/FinishAction', JSON.stringify({}));

              }
              
             
              next();
            });
        });


    }

    
}

function CreateNotification(data) {
    
    let $notification = $(document.createElement('div'));
  
    if (data.ntype == "error"){
       $notification.html('<div class="notifymain_item"> <div class="notifymain_item_icon"> <svg style="margin-top: 2px; margin-left: 2px; opacity:0.3;" width="12px" height="12px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>cancel</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)"> <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"> </polygon> </g> </g> </svg> </div> <div class="notifymain_item_text">'+data.ntext+'</div> <div class="notifymain_item_time"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="11"> <defs> <linearGradient id="circle.progress.color"> <stop offset="0%" stop-color="red" /> <stop offset="100%" stop-color="#a74f55e1" /> </linearGradient> <filter id="shadow"> <feDropShadow dx=".4" dy=".4" stdDeviation="1" flood-color="red"/> </filter> </defs> <circle r="40" stroke="white" stroke-width="5" fill="none" transform="translate(50 50)" filter="url(#shadow)"/> <circle id="'+data.dataid+'" r="40" stroke="#a74f55e1" stroke-width="8" fill="none" pathLength="100" stroke-dasharray="0 100" transform="translate(50 50) rotate(-90)" stroke-linecap="round"/> </svg> </div> </div>')
  
    }
  
    if (data.ntype == "info"){
      $notification.html('<div class="notifymain_item2"> <div class="notifymain_item_icon2"> <svg style="margin-top: 0px; margin-left: 1.5px;"  width="25px" height="25px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#44c3a3" class="bi bi-info"> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg> </div> <div class="notifymain_item_text2">'+data.ntext+'</div> <div class="notifymain_item_time2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="11"> <defs> <linearGradient id="circle.progress.color"> <stop offset="0%" stop-color="BlueViolet" /> <stop offset="100%" stop-color="MediumVioletRed" /> </linearGradient> <filter id="shadow"> <feDropShadow dx=".4" dy=".4" stdDeviation="1" flood-color="gray"/> </filter> </defs> <circle r="40" stroke="white" stroke-width="5" fill="none" transform="translate(50 50)" filter="url(#shadow)"/> <circle id="'+data.dataid+'" r="40" stroke="#1b6f5ef2" stroke-width="8" fill="none" pathLength="100" stroke-dasharray="0 100" transform="translate(50 50) rotate(-90)" stroke-linecap="round"/> </svg> </div> </div>')
   }
  
   if (data.ntype == "success"){
    $notification.html('<div class="notifymain_item3"> <div class="notifymain_item_icon3"> <svg style="margin-top: 3px; margin-left: 2.5px;" width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/> </svg> </div> <div class="notifymain_item_text">'+data.ntext+'</div> <div class="notifymain_item_time"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="11"> <defs> <linearGradient id="circle.progress.color"> <stop offset="0%" stop-color="BlueViolet" /> <stop offset="100%" stop-color="MediumVioletRed" /> </linearGradient> <filter id="shadow"> <feDropShadow dx=".4" dy=".4" stdDeviation="1" flood-color="gray"/> </filter> </defs> <circle r="40" stroke="white" stroke-width="5" fill="none" transform="translate(50 50)" filter="url(#shadow)"/> <circle id="'+data.dataid+'" r="40" stroke="#283047f0" stroke-width="8" fill="none" pathLength="100" stroke-dasharray="0 100" transform="translate(50 50) rotate(-90)" stroke-linecap="round"/> </svg> </div> </div>')
  }
   
  
    $notification.fadeIn();
    if (data.style !== undefined) {
        Object.keys(data.style).forEach(function(css) {
            $notification.css(css, data.style[css])
        });
    }
  
    return $notification;
}

function ShowNotif(data) {
    
    if (data.id != null) {
        if (notifs[data.id] === undefined) {
            let $notification = CreateNotification(data);
            $('.notifymain').append($notification);
            notifs[data.id] = {
                notif: $notification,
                timer: setTimeout(function() {
                    let $notification = notifs[data.id].notif;
                    $.when($notification.fadeOut()).done(function() {
                        $notification.remove();
                        clearTimeout(notifs[data.id].timer);
                        delete notifs[data.id];
                    });
                }, data.ntime != null ? data.ntime : 2500)
            };

            
        } else {
            clearTimeout(notifs[data.id].timer);
            // UpdateNotification(data);

            notifs[data.id].timer = setTimeout(function() {
                let $notification = notifs[data.id].notif;
                $.when($notification.fadeOut()).done(function() {
                    $notification.remove();
                    clearTimeout(notifs[data.id].timer);
                    delete notifs[data.id];
                });
            }, data.ntime != null ? data.ntime : 2500)
        }
    } else {
        let $notification = CreateNotification(data);
       
        $('.notifymain').append($notification);
        trythis(data.dataid, data.ntime)
        setTimeout(function() {
            $.when($notification.fadeOut()).done(function() {
                $notification.remove()
            });
        }, data.ntime != null ? data.ntime : 2500);
    }

   

}


function trythis(id, value) {
   

     const progress = document.getElementById(String(id));
  


    var progressKeyframes = new KeyframeEffect(
        progress, 
        [
            { strokeDasharray: '0 100' }, 
            { strokeDasharray: '100 100' }
        ], 
        { duration:Number(value), fill: 'forwards' }
        );

        
    var a1 = new Animation(progressKeyframes, document.timeline);
    a1.play();
    
    let timer = setInterval(function(){
        if(a1.playState == 'running'){
        // console.log('sss')
        }else if(a1.playState == 'finished'){
        // text.textContent = Math.round(e.target.value/1000);
        clearInterval(timer);
        }
    }, 100);
}