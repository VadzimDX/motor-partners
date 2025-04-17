Element.prototype.closest || (Element.prototype.closest = function(t) { for (var e = this; e;) { if (e.matches(t)) return e;e = e.parentElement } return null });

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (null != o) for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) { var i = a[c], l = Object.getOwnPropertyDescriptor(o, i); void 0 !== l && l.enumerable && (t[i] = o[i]) } } return t } });

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) { "function" != typeof o ? o = o || document : (t = o, o = document); var c = o.querySelectorAll(e); return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function(e, o, c) { t(e, o, c) }), c }

function addCss(r, s) { var a = function(r) { Object.assign(r.style, s) }; if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r) }

function getElementIndex(e) { for (var n = 0; e = e.previousElementSibling;) n++; return n }

function h_el(r) { return !!(Array.isArray(r) && r.length > 0) }

function debugging() { [].forEach.call($$("*"), function(n) { n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) }) }

function addEv(obj, evt, func) {
    if (obj) {
        if ('addEventListener' in window) obj.addEventListener(evt, func, false);
        else if ('attachEvent' in window) obj.attachEvent('on' + evt, func);
    }
}
// PARALLAX
const parallax = $$('.parallax');
if (!('ontouchstart' in window) && !(navigator.maxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) {
    for (let index = 0; index < parallax.length; index++) {
        new Parallax(parallax[index]);
    }
}



const showels = document.querySelectorAll('.vis_on_scroll');
const observerOptions = {
    root: null, // Используем окно просмотра как корневой элемент
    rootMargin: '10px', // Без отступов
    threshold: 4 / 6 // Срабатывает, когда 5/6 элемента видны
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Если больше не нужно отслеживать элемент, можно перестать его наблюдать
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
showels.forEach(el => {
  observer.observe(el);
});



let section1 = document.querySelector(".section-1");
if(section1){
  $$('.section-1__bg').forEach(function (el) {
    el.classList.add('active');
  });
  $$('.section-1__bg')[0].addEventListener('animationend', () =>{
    $$('.header__logo').forEach(function (el) {
        el.classList.add('anim-fade');
    });
    $$('.header__x').forEach(function (el) {
        el.style.animationDelay = 0.2 + "s"  
        el.classList.add('anim-fade');
    });
    $$('.header__logo_2').forEach(function (el) {
        el.style.animationDelay = 0.4 + "s"
        el.classList.add('anim-fade');
    });
    $$('.section-1__heading').forEach(function (el) {
        el.style.animationDelay = 0.4 + "s"
        el.classList.add('anim-fade');
    });
    $$('.section-1__btn_block').forEach(function (el) {
        el.style.animationDelay = 0.8 + "s"
        el.classList.add('anim-fade');
    });
  });   
}
let section2 = document.querySelector(".section-2");
if(section2){
    $$('.section-2__items')[0].addEventListener('animationend', () =>{
        let section2Items = document.querySelectorAll(".section-2__item");
        section2Items.forEach((elements, index) => {
          elements.classList.add('anim-fade');
          elements.style.animationDelay = index * 0.2 + "s"
        });
        $$('.section-2__bg_1 img').forEach(function (el) {
            el.style.animationDelay = 0.6 + "s"  
            el.classList.add('anim-fade');
        });
        $$('.section-2__shine img').forEach(function (el) {
            el.style.animationDelay = 0.2 + "s"  
            el.classList.add('anim-fade');
        });
    });     
}
let section3 = document.querySelector(".section-3");
if(section3){
    $$('.section-3__main')[0].addEventListener('animationend', () =>{
        $$('.section-3__car img').forEach(function (el) { 
            el.classList.add('anim-fade');
        });
    });
    $$('.section-3__car img')[0].addEventListener('animationend', () =>{
        $$('.section-3__heading').forEach(function (el) { 
            el.classList.add('anim-fade');
        });
        $$('.section-3__text').forEach(function (el) { 
            el.style.animationDelay = 0.2 + "s"  
            el.classList.add('anim-fade');
        });
        $$('.section-3__btn_block').forEach(function (el) { 
            el.style.animationDelay = 0.4 + "s"  
            el.classList.add('anim-fade');
        });
    });   
}
let section4 = document.querySelector(".section-4");
if(section4){
    $$('.section-4__main')[0].addEventListener('animationend', () =>{
        $$('.section-4__heading').forEach(function (el) { 
            el.classList.add('anim-fade');
        });
        $$('.section-4__text').forEach(function (el) { 
            el.style.animationDelay = 0.2 + "s"  
            el.classList.add('anim-fade');
        });
        let section4Items = document.querySelectorAll(".section-4__item");
        section4Items.forEach((elements, index) => {
          elements.classList.add('anim-fade');
          elements.style.animationDelay = index * 0.2 + "s"
        });
        $$('.section-4__btn_block').forEach(function (el) { 
            el.style.animationDelay = 0.6 + "s"  
            el.classList.add('anim-fade');
        });
        $$('.section-4__shine_1 img').forEach(function (el) { 
            el.style.animationDelay = 0.2 + "s"  
            el.classList.add('anim-fade');
        });
        $$('.section-4__bg_1 img').forEach(function (el) { 
            el.style.animationDelay = 0.4 + "s"  
            el.classList.add('anim-fade');
        });
    });   
}
let footer = document.querySelector(".footer");
if(footer){
    $$('.footer')[0].addEventListener('animationend', () =>{
        $$('.footer__logo').forEach(function (el) {
            el.classList.add('anim-fade');
        });
        $$('.footer__x').forEach(function (el) {
            el.style.animationDelay = 0.2 + "s"  
            el.classList.add('anim-fade');
        });
        $$('.footer__logo_2').forEach(function (el) {
            el.style.animationDelay = 0.4 + "s"
            el.classList.add('anim-fade');
        });
        $$('.footer__text').forEach(function (el) {
            el.style.animationDelay = 0.6 + "s"
            el.classList.add('anim-fade');
        });
        $$('.footer__email').forEach(function (el) {
            el.style.animationDelay = 0.8 + "s"
            el.classList.add('anim-fade');
        });
        $$('.footer__copyrights').forEach(function (el) {
            el.style.animationDelay = 1 + "s"
            el.classList.add('anim-fade');
        });
    });
}