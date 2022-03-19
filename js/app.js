$(function () {
   let header = $("#header");
   let nav = $("#nav");
   let btn = $("#btn");

   btn.on("click", function (event) {
      event.preventDefault();
      btn.toggleClass("cross");
      nav.toggleClass("show");
      header.toggleClass("fixed");

   })
})