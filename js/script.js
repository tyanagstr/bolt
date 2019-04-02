$(function() {
  // ハンバーガーメニューのクラス
  var HamburgerMenu = function () {
    this.$btnHamburger = $('.header__btn_hamburger');
    this.$btnContact = $('.header__btn_contact');
    this.$window = $(window);
    this.isMenuOpened = false;
    this.SLIDE_DURATION = 500;
    this.SPMODE_BREAK_WIDTH = 767;
    this.bind();
  }

  HamburgerMenu.prototype.bind = function() {
    this.$btnHamburger.on('click', this.onBtnHamburgerClicked.bind(this));
    this.$window.on('resize', this.judgeSpMode.bind(this))
  }
  HamburgerMenu.prototype.onBtnHamburgerClicked = function(event) {
    event.preventDefault();
    this.isMenuOpened = !this.isMenuOpened;
    this.updateState();
  }
  HamburgerMenu.prototype.judgeSpMode = function() {
    if(this.$window.width() > 766) {
      this.$btnContact.css('display', 'inline-block');
      this.isMenuOpened = true;
    }
  }
  HamburgerMenu.prototype.updateState = function () {
    if(this.isMenuOpened) {
      this.$btnContact.slideDown(this.SLIDE_DURATION);
    } else {
      this.$btnContact.slideUp(this.SLIDE_DURATION);
    }
  }
  
  var btn = new HamburgerMenu();
});
