// Show chat toggle
$(document).ready(() => {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      $(".show-chats").show();
    } else {
      $(".show-chats").hide();
    }
  });

  // Show ScrollTop
  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $(".scrollTop").fadeIn();
    } else {
      $(".scrollTop").fadeOut();
    }
  });

  // scrollTop
  $(".scrollTop").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("html").offset().top - 40,
      },
      1000
    );
    function name(params) {
      let links = $(".mobile-ul li a[href]");
    }
  });

  // Autoscroll
  $(".mobile-ul li a[href]").click((e) => {
    let url = e.target.hash;
    let activeClass = e.target;
    // console.log(e);
    $("html, body").animate(
      {
        scrollTop: $(url).offset().top - 40,
      },
      1000
    );
    // this.toggle("link-active");
    let getNav = $(".mobile-nav");
    if (getNav.hasClass("is-mobile")) {
      getNav.toggle("show-nav");
    }
    //   $(activeClass).css("display", "none");
    $("a[href]").removeClass("link-active");
    $(activeClass).addClass("link-active");
  });

  // Chat Icon show
  $(".show-chats").click(() => {
    $(".chat-box").slideToggle();
    $(".show-chats i").toggle("fa-hand-point-left");
    $(".hide-chats").toggle();
  });
  // Chat Icon hide
  $(".hide-chats").click(() => {
    $(".chat-box").slideToggle();
    $(".show-chats i").toggle("fa-hand-point-left");
    $(".hide-chats").toggle();
  });

  // Show Mobile Nav
  $(".toggle").click(() => {
    $(".mobile-nav").fadeIn("show-nav");
    $(".mobile-nav").addClass("is-mobile");
  });
  // Hide Mobile Nav
  $(".close-nav").click(() => {
    $(".mobile-nav").toggle("show-nav");
    $(".mobile-nav").removeClass("is-mobile");
  });
  //   Filter Project
  $(".nav-tab").click((e) => {
    let sort = e.target.hash;
    sort = sort.substring(1);
    let items = $(".single-portfolio")
      .show()
      .filter(`:not(${"." + sort})`)
      .hide();
  });
  $(".all-project").click(() => {
    $(".single-portfolio").slideDown();
  });
});
