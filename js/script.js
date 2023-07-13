$(document).ready(function () {

  $('#example').DataTable({
    scrollX: true,
    scrollCollapse: true,
    paging: true,
    fixedHeader: {
      header: true,
    }
  });

  $('.datepicker').pickadate({
    format: 'dd/mm/yyyy',
    monthsFull: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    weekdaysShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    today: 'сегодня',
    clear: 'удалить',
    close: 'закрыть',
    formatSubmit: 'yyyy/mm/dd'
  });

  function MaximumWidthAction () {
    var logo = $('.logo');
    var headerMenu = $('.headerMenu');
    var userData = $('.userData');
    var userCollapse = $('.userCollapse');
    var saidbar = $('.saidbar');
    var userProfileImg = $('.userProfileImg');
    var saidbar_title = $('.saidbar_title');
    var tek = true;
    var saidbar_list = $('.saidbar_list');
    var active_list = $('.saidbar .active');
    var nav_link = $('.saidbar>.saidbar_list>li>a');
    var second_list = $('.second_list');

    headerMenu.click(() => {
      logo.toggleClass('toggle');
      userData.toggleClass('toggle');
      userCollapse.toggleClass('toggle');
      saidbar.toggleClass('toggle');
      userProfileImg.toggleClass('marginLeft');
      tek ? (tek = false) : (tek = true);
      tek ? saidbar_title.show(700) : saidbar_title.hide(700);
      saidbar_list.toggleClass('hidePadding');
      active_list.toggleClass('borderRadius_none');
      nav_link.toggleClass('nav_link_margin');
      second_list.toggleClass('margin_top');
    });
  }

  function MinimumWidthAction () {
    var headerMenu = $('.headerMenu');
    var userData = $('.userData');
    var saidbar = $('.saidbar');
    var saidbar_title = $('.saidbar_title');
    var tek = true;
    var saidbar_list = $('.saidbar_list');
    var active_list = $('.saidbar .active');
    var nav_link = $('.saidbar>.saidbar_list>li>a');
    var second_list = $('.second_list');

    headerMenu.click(function () {
      userData.toggleClass('none');
      saidbar.toggleClass('none');
      tek ? (tek = false) : (tek = true);
      !tek ? saidbar_title.hide(700) : saidbar_title.show(700);
      saidbar_list.toggleClass('hidePadding');
      active_list.toggleClass('borderRadius_none');
      nav_link.toggleClass('nav_link_margin');
      second_list.toggleClass('margin_top');
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
    var searchEnter = $('.searchEnter');
    var searchForm = $('.searchForm');
    var close = $('.close');
    searchEnter.css({
      display: 'block',
    });
    setTimeout(() => {
      searchEnter.css({
        height: '30px',
        width: '250px',
        transition: '.7s',
      });
      searchForm.css({
        width: '250px',
        transition: '.7s',
      });
      close.css({
        width: '11px',
        transition: '.7s',
      })
    }, 1);
  });

  var Close = $('.close');
  Close.click(function () {
    var searchEnter = $('.searchEnter');
    var searchForm = $('.searchForm');
    var close = $('.close');

    searchEnter.css({
      height: '0px',
      width: '0px',
      transition: '.7s',
    });
    searchForm.css({
      width: '0px',
      transition: '.7s',
    });
    close.css({
      width: '0px',
      transition: '.7s',
    });
    setTimeout(() => {
      searchEnter.css({
        display: 'none',
      });
    }, 700);
  });

  $('.btn_refresh').click(function () {
    var refreshBtn = $('.btn_refresh>img');
    refreshBtn.addClass('ref');
    setTimeout(() => {
      $('.btn_refresh>img').removeClass('ref');
    }, 1400);
  });

  $('.btn_search').click(function () {
    $('.filter_modal').css({
      display: 'block',
    });

    setTimeout(() => {
      $('.modal_box').css({
        top: '40%',
      })
    }, 100);
  });

  $('.close_btn>img').click(function () {
    $('.modal_box').css({
      top: '-40%',
    });

    setTimeout(() => {
      $('.filter_modal').css({
        display: 'none',
      });
    }, 300);
  })

  $('.getSubmit').click(function () {
    $('.modal_box').css({
      top: '-40%',
    });

    setTimeout(() => {
      $('.filter_modal').css({
        display: 'none',
      });
    }, 300);
  })

  $('.clearBtn').click(function () {
    var selects = $('.filter_select');
    Array.from(selects).forEach(item => {
      item.selectedIndex = 0;
    })
  })





});