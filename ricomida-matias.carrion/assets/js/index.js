$(document).ready(function(){
   
   $("#btn").click( function(){
    alert("el correo fue en enviado correctamente")
   })
   $("h1").addClass("blue");
   $("this").addClass("important");
  });
  
  const tooltipTriggerList = document.querySelectorAll(
   '[data-bs-toggle="tooltip"]'
 );
 const tooltipList = [...tooltipTriggerList].map(
   (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
 );
 $(document).ready(function() {
   $("#prepa").dblclick(function() {
       
       $(this).css("color", "yellow");
   });
});
$(document).ready(function() {
   $("#ingre").dblclick(function() {
       
       $(this).css("color", "yellow");
   });
});
$(document).ready(function() {
   $('.card-title').click(function() {
     var cardBody = $('.card').closest('.card').find('.card-body');
     cardBody.toggle();
   });
 });