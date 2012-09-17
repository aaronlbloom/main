<!-- Draggable box  from: http://jqueryui.com/demos/draggable/ , Dialog Box from http://jqueryui.com/demos/dialog/#animated-->
				$(function() {
					$( "#draggable1" ).draggable();
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
						$(function() {
					$( "#draggable2" ).draggable();
				});
					<!--Thanks to the following for the hide/show trick: http://woork.blogspot.com/2007/10/show-hide-layer-using-simple-javascript.html-->
					function showlayer(layer){
									if(layer=="classCard"){
										document.getElementById("classCard").style.visibility='visible';
									    document.getElementById("mainCard").style.visibility='hidden';
									} else { 
										document.getElementById("mainCard").style.visibility='visible';
									    document.getElementById("classCard").style.visibility='hidden';
									
							}
					}