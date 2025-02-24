function closeForm() {
  $(".form-popup-bg").removeClass("is-visible");
}

// function closeNoti() {
//   $(".noti-popup-bg").removeClass("is-visible");
// }

// $(document).ready(function ($) {

//   $(".noti-popup-bg").addClass("is-visible");

//   $(".form-popup-bg").on("click", function (event) {
//     if (
//       $(event.target).is(".noti-popup-bg") ||
//       $(event.target).is("#btnCloseForm")
//     ) {
//       event.preventDefault();
//       $(this).removeClass("is-visible");
//     }
//   });
// });

// $(document).ready(function(){
//   // Delay the action by 10000ms
//   setTimeout(function(){
//      // Display the div containing the class "bottomdiv"
//      $(".bottomdiv").show();
//   }, 10000);
// });




$(document).ready(function ($) {
  /* Contact Form Interactions */
  $("#btnOpenForm").on("click", function (event) {
    event.preventDefault();

    $(".form-popup-bg").addClass("is-visible");
  });

  $("#btnOpenForm1").on("click", function (event) {
    event.preventDefault();

    $(".form-popup-bg").addClass("is-visible");
  });

  $("#btnOpenForm2").on("click", function (event) {
    event.preventDefault();

    $(".form-popup-bg").addClass("is-visible");
  });

  $("#btnOpenFormS").on("click", function (event) {
    event.preventDefault();

    $(".form-popup-bg").addClass("is-visible");
  });

  //close popup when clicking x or off popup
  $(".form-popup-bg").on("click", function (event) {
    if (
      $(event.target).is(".form-popup-bg") ||
      $(event.target).is("#btnCloseForm")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
});

function getIp(callback) {
  fetch("https://ipinfo.io/json?3554ba31cbac14", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: "in",
      };
    })
    .then((resp) => callback(resp.country));
}
const phoneInputField = document.querySelector("#mobile_code");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",
  geoIpLookup: getIp,
  preferredCountries: ["us", "co", "in", "de"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

$(document).ready(function(){
  setTimeout(function(){
     $(".notidiv ").show();
   }, 10000);
});

$(document).ready(function() {
  $('#closeButton').on('click', function(e) { 
      $('.notidiv').remove(); 
  });
});