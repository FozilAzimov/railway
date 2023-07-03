$(document).ready(function () {

  $('#example').DataTable({
    scrollX: true,
    scrollCollapse: true,
    paging: true,
    fixedHeader: {
      header: true,
    }
  });


  function MaximumWidthAction () {
    var logo = $('.logo');
    var headerMenu = $('.headerMenu');
    var userData = $('.userData');
    var userCollapse = $('.userCollapse');
    var saidbar = $('.saidbar');
    var userProfileImg = $('.userProfileImg');

    headerMenu.click(() => {
      logo.toggleClass('toggle');
      userData.toggleClass('toggle');
      userCollapse.toggleClass('toggle');
      saidbar.toggleClass('toggle');
      userProfileImg.toggleClass('marginLeft');
    });
  }

  function MinimumWidthAction () {
    var headerMenu = $('.headerMenu');
    var userData = $('.userData');
    var saidbar = $('.saidbar');

    headerMenu.click(function () {
      userData.toggleClass('none');
      saidbar.toggleClass('none');
    });
  }

  var isBoolean;
  var laptopWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  laptopWidth > 768 ? (isBoolean = true) : (isBoolean = false);
  isBoolean ? MaximumWidthAction() : MinimumWidthAction();


  function sidebarClose () {
    function MaximumWidthAction () {
      var logo = $('.logo');
      var headerMenu = $('.headerMenu');
      var userData = $('.userData');
      var userCollapse = $('.userCollapse');
      var saidbar = $('.saidbar');
      var userProfileImg = $('.userProfileImg');

      headerMenu.click(() => {
        logo.toggleClass('toggle');
        userData.toggleClass('toggle');
        userCollapse.toggleClass('toggle');
        saidbar.toggleClass('toggle');
        userProfileImg.toggleClass('marginLeft');
      });
    }

    function MinimumWidthAction () {
      var headerMenu = $('.headerMenu');
      var userData = $('.userData');
      var saidbar = $('.saidbar');

      headerMenu.click(function () {
        userData.toggleClass('none');
        saidbar.toggleClass('none');
      });
    }

    var isBoolean = null;
    var laptopWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    laptopWidth > 768 ? (isBoolean = true) : (isBoolean = false);
    isBoolean ? MaximumWidthAction() : MinimumWidthAction();
  }
  $(window).resize(sidebarClose);


  function hideSidebar () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 768) {
      var userData = $('.userData');
      var saidbar = $('.saidbar');

      userData.addClass('none');
      saidbar.addClass('none');
    }
    else {
      var userData = $('.userData');
      var saidbar = $('.saidbar');

      userData.removeClass('none');
      saidbar.removeClass('none');
    }
  }
  $(window).resize(hideSidebar);


  var SearchIcon = $('.searchIcon');
  SearchIcon.click(function () {
    var searchForm = $('.searchForm');
    searchForm.addClass('block');
  });

  var Close = $('.close');
  Close.click(function () {
    var searchForm = $('.searchForm');
    searchForm.removeClass('block');
  });

});