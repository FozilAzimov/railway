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
    var saidbar_list = $('.saidbar_list');
    var nav_link = $('.saidbar>.saidbar_list>.nav-item>.nav-link');
    var second_list = $('.second_list');
    var userCollapseText = $('.userCollapse>div');
    var userProfileHeight = $('.userProfileHeight');

    headerMenu.click(() => {
      logo.toggleClass('toggle');
      userData.toggleClass('toggle');
      userCollapse.toggleClass('toggle');
      saidbar.toggleClass('toggle');
      userProfileImg.toggleClass('marginLeft');
      saidbar_title.toggle(700);
      saidbar_list.toggleClass('hidePadding');
      Array.from(nav_link).forEach(item => {
        $(item).children().first().toggleClass('nav_link_margin');
        $(item).toggleClass('borderRadius_none');
        $(item).children().first().children().last().toggle(700);
        $(item).children().last().toggle(700);
      });
      second_list.toggleClass('margin_top');
      userCollapseText.toggle(700);
      userProfileHeight.toggle(700);
    });
  }

  function MinimumWidthAction () {
    var headerMenu = $('.headerMenu');
    var userData = $('.userData');
    var saidbar = $('.saidbar');
    var saidbar_title = $('.saidbar_title');
    var saidbar_list = $('.saidbar_list');
    var nav_link = $('.saidbar>.saidbar_list>.nav-item>.nav-link');
    var second_list = $('.second_list');

    headerMenu.click(function () {
      userData.toggleClass('none');
      saidbar.toggleClass('none');
      saidbar_title.toggle(700);
      saidbar_list.toggleClass('hidePadding');
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

  function windowInnerHeight () {
    var mainRow = $('.mainRow');
    window.innerHeight > 950
      ? mainRow.addClass('mainRow_maxHeight')
      : mainRow.removeClass('mainRow_maxHeight');
  }
  $(window).resize(windowInnerHeight);

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

  $('.btn_search>img').mouseenter(function () {
    $('.tooltip_box2').show(400);
  }).mouseleave(function () {
    $('.tooltip_box2').hide(400);
  }).click(function () {
    $('.tooltip_box2').hide(400);
  });

  $('.btn_refresh>img').mouseenter(function () {
    $('.tooltip_box1').show(400);
  }).mouseleave(function () {
    $('.tooltip_box1').hide(400);
  }).click(function () {
    $('.tooltip_box1').hide(400);
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
  });

  $('.clearBtn').click(function () {
    var selects = $('.filter_select');
    Array.from(selects).forEach(item => {
      item.selectedIndex = 0;
    })
  });

  $('.saidbar_list>.nav-item>.nav-link').mouseenter(function () {
    if (!$(this).attr('class').includes('active')) {
      this.children[0].children[0].children[0].classList.add('icon_color');
      this.children[0].children[1].classList.add('icon_text_color');
      this.children[1].classList.add('icon_text_color');
    }
  }).mouseleave(function () {
    if (!$(this).attr('class').includes('active')) {
      this.children[0].children[0].children[0].classList.remove('icon_color');
      this.children[0].children[1].classList.remove('icon_text_color');
      this.children[1].classList.remove('icon_text_color');
    }
  }).click(function (event) {
    var nav_link = $('.saidbar_list>.nav-item>.nav-link');
    var min_icon = $('.min_icon');
    var max_icon = $('.max_icon');
    var isBooleanIcon = $(this).children().last();

    event.preventDefault();
    if (!$(this).attr('class').includes('active')) {
      Array.from(min_icon).forEach(item => {
        $(item).removeClass('rotate_icon');
        $(item).parent().siblings().slideUp(500);
      });
      Array.from(max_icon).forEach(item => {
        $(item).removeClass('icon_color');
      });
    }
    $(this).children().last().toggleClass('rotate_icon');
    // this.children[1].classList.toggle('rotate_icon');
    Array.from(nav_link).forEach(item => {
      if ($(item).attr('class').includes('active')) {
        $(item).removeClass('active');
      }
    });
    $(this).addClass('active');
    $(this).children().first().children().last().removeClass('icon_text_color');
    $(this).children().last().removeClass('icon_text_color');
    isBooleanIcon.attr('class').includes('rotate_icon') ? $(this).siblings().slideDown(500) : $(this).siblings().slideUp(500);

  });



});