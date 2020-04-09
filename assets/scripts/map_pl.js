

$(document).ready(function(){

    var labels = ["Roztoka","Koscielec","Morskie Oko","Little Koscielec","Mnich", "M-oko Down", "5 Lakes Valley",];

                var locations = [

                    {lat: 49.234526, lng: 20.093493},

                    {lat: 49.241814, lng: 20.003551},

                    {lat: 49.200591, lng: 20.066736},
                    {lat: 49.240522, lng: 20.009885},                    
                    {lat: 49.198767, lng: 20.064768},
                    {lat: 49.196709, lng: 20.062571},
                    {lat: 49.202832, lng: 20.033113},

                ];
                 var markers = locations.map(function(location, i){
                     var marker = new google.maps.Marker({
                        position: location,
                        label: labels[i % labels.length]
                    }); 
                 })


            marker.addEventListener('click', function() {      

                  if( labels == "Roztoka" || locations ==  {lat: 49.234526, lng: 20.093493} ) {
                      $(".carousel-inner").children("active").removeClass("active").alert("any reaction").getElementById("roztoka").addClass("active");                        
                  }else if(labels == "Koscielec" || locations ==   {lat: 49.241814, lng: 20.003551}){
                      $(".carousel-inner").removeClass("active").getElementById("koscielec").addClass("active");                        
                  }else if(labels == "Morskie Oko" || locations ==   {lat: 49.200591, lng: 20.066736}){
                      $(" .carousel-inner").removeClass("active").getElementById("moko_next").addClass("active");                        
                  }else if(labels == "Little Koscielec" || locations ==   {lat: 49.240522, lng: 20.009885}){
                      $(".carousel-inner").removeClass("active").getElementById("kosc_down").addClass("active");                        
                  }else if(labels == "Mnich" || locations ==   {lat: 49.198767, lng: 20.064768}){
                      $(".carousel-inner").removeClass("active").getElementById("mnich").addClass("active");                        
                  }else if(labels == "M-oko Down" || locations ==   {lat: 49.196709, lng: 20.062571}){
                      $(".carousel-inner").removeClass("active").getElementById("moko_down").addClass("active");                        
                  }else if(labels == "5 Lakes Valley" || locations ==   {lat: 49.202832, lng: 20.033113}){
                      $(".carousel-inner").removeClass("active").getElementById("dsp5").addClass("active");                        
                  }
                
        })
    });
