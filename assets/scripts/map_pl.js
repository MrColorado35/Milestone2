$(document).ready(function(){
    function showMe() {
        $("map").marker.addListener('click', function() {      

                  if( labels == "Roztoka" || locations ==  {lat: 49.234526, lng: 20.093493} ) {
                      $("section .active").removeClass("active").alert("any reaction").getElementById("roztoka").addClass("active");                        
                  }else if(labels == "Koscielec" || locations ==   {lat: 49.241814, lng: 20.003551}){
                      $("section .active").removeClass("active").getElementById("koscielec").addClass("active");                        
                  }else if(labels == "Morskie Oko" || locations ==   {lat: 49.200591, lng: 20.066736}){
                      $(" .active").removeClass("active").getElementById("moko_next").addClass("active");                        
                  }else if(labels == "Little Koscielec" || locations ==   {lat: 49.240522, lng: 20.009885}){
                      $(".active").removeClass("active").getElementById("kosc_down").addClass("active");                        
                  }else if(labels == "Mnich" || locations ==   {lat: 49.198767, lng: 20.064768}){
                      $(".active").removeClass("active").getElementById("mnich").addClass("active");                        
                  }else if(labels == "M-oko Down" || locations ==   {lat: 49.196709, lng: 20.062571}){
                      $(".carousel-inner .active").removeClass("active").getElementById("moko_down").addClass("active");                        
                  }else if(labels == "5 Lakes Valley" || locations ==   {lat: 49.202832, lng: 20.033113}){
                      $(".carousel-inner .active").removeClass("active").getElementById("dsp5").addClass("active");                        
                  }
    
        });
    }
    return showMe;

})