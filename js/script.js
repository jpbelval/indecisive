var countOption = 1;

function roll() {
    var choix = [];
    var belge = false;
    var palette = "square";

    $("input").each(function () {
        if($(this).val() === "jadou"){
            belge = true;
            palette="belge";
        }
        else{
            choix.push($(this).val()); 
        }
    });

    var result = choix[Math.floor(Math.random()*choix.length)];

    console.log(palette);

    // <div class="row" style="text-align: center;">
    //         <div class="col s12 m4 l2"></div>
    //         <div class="col s12 m4 l8" style="text-align: center;">            
    //             <div id="square" style="background-color: #455954; border-radius: 25px;">
    //                 <p style="font-size: 5vh; color: #ffffff;">Réponse</p>
    //             </div>
    //         </div>
    //         <div class="col s12 m4 l2"></div>
    //     </div>

    $("#containerBefore").toggle("blind");
    setTimeout(function(){
        $("#mainContainer").append(
            '<div id="cool" class="row" style="text-align: center;">'+
            '<div class="col s12 m4 l2"></div>'+
            '<div class="col s12 m4 l8" style="text-align: center;">'+
            '<div id="'+ palette +'" style="border-radius: 25px;">'+
            '<p style="font-size: 5vh; color: #ffffff; margin:0%;">'+ result + '</p>'+
            '</div></div><div class="col s12 m4 l2"></div></div>');
            $( "#cool" ).toggle( "bounce", { times: 3 }, "slow" );
            $("#mainContainer").append('<div id="redo" style="text-align: center;"><a style="color: black; cursor:pointer;" type="button" value="Redo" onClick="window.location.reload(false)"><i class="material-icons">refresh</i></a></div>');
    }
    ,500);

    
}



$("#buttonAdd").click(function(){
    if($(".inactive input").val()){
        $(".inactive input").prop("disabled", true);
        $(".inactive").removeClass("inactive").addClass("active");
        $(".liste").append('<li class="inactive"><div class="valign-wrapper"><i class="small material-icons" style="margin: 2%;" >blur_circular</i><input class="item" placeholder="Add"></div></li>');
        countOption++;

        if(countOption >= 2){
            console.log("Test");
            $("#buttonRoll").removeAttr("disabled");
        }
    }
});

$("#buttonRoll").click(function(){
    if($(".inactive input").val()){
        $(".inactive input").prop("disabled", true);
        $(".inactive").removeClass("inactive").addClass("active");
        console.log
        roll();
    }
    else{
        $(".inactive input").effect("shake");
    }
    });

