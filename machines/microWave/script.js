//Pour mettre un fichier dans le micro onde
let  file_plat1 = ""; ;
$('#add').on('click', ()=>{
    if($('#porte').hasClass("fermer")){return;}
    $('#addi').click();
    $('#audio-a').trigger('play');
});

//.change()
$('#addi').change(()=>{
    file_plat1 = $('#addi')[0];
    let file_plat2 = file_plat1.item(0);
    let filef = file_plat2.name
    console.log(filef);
});


//État du micro onde
$('#porte').on('click', ()=>{
    
    if($('#porte').hasClass("fermer")){
        $('#porte').text('Ouvert');
        $('#porte').removeClass('fermer');
        $('#porte').addClass('ouvert');
        $('#audio-o').trigger('play');

        if(!$("audio-d").paused){
            $('#audio-d').trigger('pause');
        }
    }
    else{
        $('#porte').text('Fermer');
        $('#porte').removeClass('ouvert');
        $('#porte').addClass('fermer');
        $('#audio-f').trigger('play');

    }
});

$('#start').on('click', ()=>{
    if($('#porte').hasClass("ouvert")){return;}
    $('#audio-d').trigger('play');

});

$('#stop').on('click', ()=>{
    $('#audio-d').trigger('pause');
    
});

$('#reset').on('click', ()=>{
    $('#audio-d').trigger('pause').prop('currentTime', 0)
});


