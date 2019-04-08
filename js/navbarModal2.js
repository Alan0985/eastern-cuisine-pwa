const modal = document.getElementById("modal");
const toggleBar = document.getElementById("toggleBar");
const modalAbout = document.getElementById("modalAbout");
const modalMenu = document.getElementById("modalMenu");
const modalCatering = document.getElementById("modalCatering");
const modalBooking = document.getElementById("modalBooking");
const modalContact = document.getElementById("modalContact");
const barsIcon = document.getElementById("barsIcon");
const homeIcon = document.getElementById("homeIcon");
const cartIcon = document.getElementById("cartIcon");

//Initial modal status
let modalStatus = 0;

//Toggle modal with delay
function toggleModal() {
  if (modalStatus == 0) {
    return (
      (modalStatus = 1),
      barsIcon.classList.replace("fa-bars", "fa-times"),
      toggleBar.classList.add("active"),
      homeIcon.classList.remove("active"),
      cartIcon.classList.remove("active"),
      modal.setAttribute("style", "display:block; top: 0"),
      modalAbout.setAttribute("style", "width: 100%; top: 0; opacity: 0.9"),
      setTimeout(function() {
        modalMenu.setAttribute("style", "width: 100%; top: 0; opacity: 0.9");
      }, 50),
      setTimeout(function() {
        modalCatering.setAttribute(
          "style",
          "width: 100%; top: 0; opacity: 0.9"
        );
      }, 100),
      setTimeout(function() {
        modalBooking.setAttribute("style", "width: 100%; top: 0; opacity: 0.9");
      }, 150),
      setTimeout(function() {
        modalContact.setAttribute("style", "width: 100%; top: 0; opacity: 0.9");
      }, 200)
    );
  } else {
    return (
      (modalStatus = 0),
      barsIcon.classList.replace("fa-times", "fa-bars"),
      setTimeout(function() {
        modal.setAttribute("style", "display:block; top: 100vh");
      }, 200),
      $(document).ready(function() {
        $("#collapseMenu").collapse("hide");
      }),
      modalAbout.setAttribute("style", "width: 4%; top: 100vh; opacity: 0"),
      modalMenu.setAttribute("style", "width: 4%; top: 100vh; opacity: 0"),
      modalCatering.setAttribute("style", "width: 4%; top: 100vh; opacity: 0"),
      modalBooking.setAttribute("style", "width: 4%; top: 100vh; opacity: 0"),
      modalContact.setAttribute("style", "width: 4%; top: 100vh; opacity: 0")
    );
  }
}
