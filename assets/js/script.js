$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente");
  });

  $("h4").on("dblclick", function(){
    $(this).css("color", "red");
  });

    $( ".card-title-primero" ).click(function() {
    $( ".card-text-primero" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  $( ".card-title-segundo" ).click(function() {
  $( ".card-text-segundo" ).toggle( "slow", function() {
    // Animation complete.
  });
  });

  $( ".card-title-tercero" ).click(function() {
  $( ".card-text-tercero" ).toggle( "slow", function() {
    // Animation complete.
  });
  });


  });
