function closeForm() {
  $(".form-popup-bg").removeClass("is-visible");
}

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

  $("#btnOpenForm3").on("click", function (event) {
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

$(document).ready(function () {
  setTimeout(function () {
    $(".notidiv ").show();
  }, 10000);
});

$(document).ready(function () {
  $("#closeButton").on("click", function (e) {
    $(".notidiv").remove();
  });
});


const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});



