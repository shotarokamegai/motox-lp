import _ from './utils/Util';
import Event from './events/Event';
import Scroll from './../js/utils/Scroll';

class Main {
  constructor() {
    window.onload = () => {
      this.pageSize = _.getPageSize();
      this.header = document.getElementById('header');
      this.headerFixed = document.getElementById('header-fixed');
      this.root = document.getElementById('container');
      this.menu = document.getElementById('menu');
      this.logo = document.getElementById('logo');
      this.top = document.getElementById('top');
      this.subMenu = document.getElementById('sub-menu');

      this.anim = document.getElementsByClassName('anim');
      this.swiperContainer = document.getElementsByClassName('swiper-container');
      this.menuTrigger = document.getElementsByClassName('menu-trigger');
      this.scrollTrigger = document.getElementsByClassName('scroll-trigger');
      this.animRatio = .8;
      this.index = 1;
      this.swipers = [];

      this.parallaxArray = [];
      this.scrollingElement =
        'scrollingElement' in document
          ? document.scrollingElement
          : window.navigator.userAgent.indexOf('WebKit') != -1
            ? body
            : document.documentElement || body.parentNode;
      this.scrollY = this.scrollingElement.scrollTop;
      this.startPos = 0;

      Event.add(this.listen.bind(this));
      this.isIE();
      this.ready();

      window.onscroll = () => {
        this.scrollAnimation();
        if (this.scrollY <= this.startPos) {
          // this.headerFixed.classList.remove('show');
        } else if (this.startPos !== 0) {
          // this.headerFixed.classList.add('show');
        }
        this.startPos = this.scrollY;
      }

      window.onresize = () => {
        this.resizeEvent();
      }

      this.resizeEvent();

      for (let i = 0; i < this.menuTrigger.length; i++) {
        this.menuTrigger[i].addEventListener('click', this.triggerMenu.bind(this));
      }

      if (!this.scrollTrigger) return;
        for (let i = 0; i < this.scrollTrigger.length; i++) {
          this.scrollTrigger[i].addEventListener('click', this.toScroll);
        }
    }
  }

  isIE() {
    let ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    this.is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    if (this.is_ie) {
      document.body.classList.add('ie');
      // document.getElementsByTagName('html')[0].classList.add('html-ie')
      if (!ua.match(/Win(dows )?NT 10\.0/)) {
        document.body.classList.add('under10');
      }
    }
  }

  resizeEvent() {
    let vh = window.innerHeight * 0.01;
    this.pageSize = _.getPageSize();
    // カスタム変数--vhの値をドキュメントのルートに設定
    // this.menu.style.setProperty("--vh", `${vh}px`);
    if (this.pageSize.ww < 750) {
      let top = window.innerHeight - this.header.clientHeight;
      this.animRatio = 1;
      // this.subMenu.setAttribute('style', `height: ${top}px; top: ${this.header.clientHeight}px`);
      if (this.pastww > 750) {
        // this.initSwiper();
      }
    } else {
      // this.subMenu.setAttribute('style', ``);
      this.animRatio = .8;
    }
    this.pastww = this.pageSize.ww;
  }

  checkScrollPosition() {
    if (window.location.hash) {
      let target = document.getElementById(window.location.hash.split('#')[1]);
      if (target) {
        let header = '';
        if (document.getElementById('header')) {
          header = document.getElementById('header');
        } else if (document.getElementById('header-new')) {
          header = document.getElementById('header-new');
        }
        let scrollY = window.scrollY || window.pageYOffset;
        let top = target.getBoundingClientRect().top + scrollY;

        top -= header.clientHeight;

        setTimeout(() => {
          Scroll.to(top, 0);
        }, 10);
      }
    }
  }

  toScroll() {
    const target = document.getElementById(this.getAttribute('data-target'));
    const menu = document.getElementById('menu');
    const menuTrigger = document.getElementsByClassName('menu-trigger');
    const headerFixed = document.getElementById('header-fixed');

    let elemRect = target.getBoundingClientRect();
    let scrollY = window.scrollY || window.pageYOffset;
    let top = elemRect.top + scrollY;

    // top -= headerFixed.clientHeight;

    for (let i = 0; i < menuTrigger.length; i++) {
      menuTrigger[i].classList.remove('active');
    }

    menu.classList.remove('active');

    Scroll.to(top, 2);
  }

  listen(param) {
    switch (param) {
      case Event.READY:
        this.ready();
        break;
        case Event.SCROLL:
          window.onscroll = () => {
            this.scrollAnimation();
          }
          break;
      case Event.LOAD:
        break;
    }
  }

  ready() {
    window.scrollTo(0, 0);
    this.root.classList.add('loaded');
    this.scrollAnimation();
    this.checkScrollPosition();
  }

  scrollAnimation() {
    this.scrollY = this.scrollingElement.scrollTop;
    for (let i = 0; i < this.anim.length; i++) {
      const anim = this.anim[i];
      const offset = anim.getAttribute('data-offset');
      let elemRect = anim.getBoundingClientRect();
      let rect = {
        top: elemRect.top + window.pageYOffset,
        bottom: elemRect.bottom + window.pageYOffset,
        left: elemRect.left + window.pageXOffset
      };

      if (offset != null) {
        rect.top = rect.top + parseInt(offset);
      }
      if (this.scrollY > (rect.top - this.pageSize.wh * this.animRatio) || window.scrollY > (rect.top - this.pageSize.wh * this.animRatio)) {
        anim.classList.remove('reset');
        anim.classList.add('active');
      }
    }
  }
}

new Main();