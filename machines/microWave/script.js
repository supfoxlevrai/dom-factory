//Pour mettre un fichier dans le micro onde
 $('#add').on('click', ()=>{
    $('#addi').click();
    $('#audio-a').get(0).play();
});

//État du micro onde
$('#porte').on('click', ()=>{
    
    if($('#porte').hasClass("fermer")){
        $('#porte').text('Ouvert');
        $('#porte').removeClass('fermer');
        $('#porte').addClass('ouvert');
    }
    else{
        $('#porte').text('Fermer');
        $('#porte').removeClass('ouvert');
        $('#porte').addClass('fermer');
    }
});