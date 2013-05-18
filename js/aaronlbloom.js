<!-- Draggable box  from: http://jqueryui.com/demos/draggable/ , Dialog Box from http://jqueryui.com/demos/dialog/#animated-->

$(document).ready(function(){ 
					$(function() {
					$( "#draggable" ).draggable();
				});
			
					// increase the default animation speed to exaggerate the effect
					$.fx.speeds._default = 1000;
					$(function() {
						$( "#dialog" ).dialog({
							autoOpen: false,
							show: "blind",
							hide: "explode"
						});
						$( "#opener" ).click(function() {
							$( "#dialog" ).dialog( "open" );
							return false;
						});
					});			
	$("#homeButton").click(function() {
	console.log('Testing console');	  
      	  	  $( "#home" ).css("display","block");
      	      $( "#work" ).css("display","none");
	  return false;
        });
        
	$("#workButton").click(function() {
      	  console.log('Testing console');	  
      	  	  $( "#home" ).css("display","none");
      	      $( "#work" ).css("display","block");
	  return false;
        });
        
 }); 