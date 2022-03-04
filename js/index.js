// basically use ID to use jquery function
//if you use class it doesn't work maybe

// type writer header
const header_cap="Jonny&the Rose";
let count=0
type_writing=()=>{
    if(count<6){
        $(".header_cap_word")[0].innerHTML=header_cap.substring(0,count)+"<span class='typeindex'>&#124;</span>";
    }
    else if(count==6){
        $(".header_cap_word")[0].innerHTML=header_cap.substring(0,5);
        $(".header_cap_word")[1].innerHTML=header_cap.substring(5,6)+"<span class='typeindex'>&#124;</span>";
    }
    else{
        $(".header_cap_word")[1].innerHTML=header_cap.substring(5,6);
        $(".header_cap_word")[2].innerHTML=header_cap.substring(6,count)+"<span class='typeindex'>&#124;</span>";
    }
    if(count!==header_cap.length){
        count++;
        setTimeout(type_writing,200);
    }
    else{
        $(".typeindex").hide();
    }
}
//-e type writer

$(window).on("load",()=>{
    type_writing();
});

// #1
const init_nav_top=$("#navbar").offset().top;
const init_space_cap_nav=init_nav_top-($("#cap_position").offset().top+$("#cap_position").outerHeight());
// #1

$(window).on("scroll",()=>{
    //change nav bar color  #1
    if($(window).scrollTop()>=$("#navbar").offset().top){
        $("#navbar").css("background-color","rgb(0, 0, 0)");
    }
    if($(window).scrollTop()<$("#navbar").offset().top){
        $("#navbar").css("background-color","rgba(0, 0, 0, 0.666)");
    }
    //-e change nav bar color 
    
    // nav cap position
    if($(window).scrollTop()>=init_space_cap_nav){
        $("#cap_position").addClass("ch_position");
    }
    if($(window).scrollTop()<init_space_cap_nav){
        $("#cap_position").removeClass("ch_position");
    }
    //-e nav cap position
  
    //bio animation
    if($("#bio_img").length!=0){    
        if($(window).scrollTop()>$("#bio_img").offset().top-$(window).innerHeight()+30){
            $("#bio_img").addClass("bio_img_on");
            $("#bio_img").removeClass("bio_img_off");
        }
        if($(window).scrollTop()<$("#bio_img").offset().top-$(window).innerHeight()+30){
            $("#bio_img").removeClass("bio_img_on");
            $("#bio_img").addClass("bio_img=off");
        }
    }
    //-e bio animation

    //gallery animation
    if($(".photo_gallary div").length!=0){
        for(let i=0;i<$(".photo_gallary div").length;i++){
            if($(window).scrollTop()+$(window).innerHeight()-50>$(".photo_gallary div")[i].offsetTop){
                $(".photo_gallary div img")[i].classList.add("photo_animation");
                $(".photo_gallary div img")[i].classList.remove("photo_origin");
            }
            else{
                $(".photo_gallary div img")[i].classList.add("photo_origin");
                $(".photo_gallary div img")[i].classList.remove("photo_animation");        
            }
        }
    }
    //-e gallery animation

    //event animation
    if($(".event_list_schedule").length!=0){
        if($(window).scrollTop()+$(window).innerHeight()-50>$(".event_list_schedule").offset().top){
            $(".event_list_schedule div").addClass("event_animation");
            $(".event_list_schedule div").removeClass("event_origin");        }
        else{
            $(".event_list_schedule div").addClass("event_origin");
            $(".event_list_schedule div").removeClass("event_animation");
        }
    }
    //-e event animation

    //contact animation
    if($(".contact_form form").length!=0){
        if($(window).scrollTop()+$(window).innerHeight()-50>$(".contact_form form").offset().top){
            // $(".contact_form form div").animate({opacity:"1",left:"0"},500);
            $(".contact_form form div").addClass("contact_animation");
            $(".contact_form form div").removeClass("contact_origin");
        }
        else{
            $(".contact_form form div").addClass("contact_origin");
            $(".contact_form form div").removeClass("contact_animation");
        }
    }
    //-e contact animation
});

$("#dropdown_button").on("click",()=>{
    $(".dropdown_menu").toggle();
});
$(window).on("click",(e)=>{
    if(e.target==$("#dropdown_button i")[0]){
        $(".dropdown_menu")[0].toggle;
    } 
    else if(e.target!=$("#dropdown")[0]){
        $("#dropdown").hide();
    }
});



