/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basic_ibg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/ibg.js */ \"./src/js/basic/ibg.js\");\n/* harmony import */ var _modules_changeImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/changeImage.js */ \"./src/js/modules/changeImage.js\");\n/* harmony import */ var _basic_mouse_parallax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/mouse-parallax.js */ \"./src/js/basic/mouse-parallax.js\");\n/* harmony import */ var _basic_anim_sroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/anim-sroll.js */ \"./src/js/basic/anim-sroll.js\");\n/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modals.js */ \"./src/js/modules/modals.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms.js */ \"./src/js/modules/forms.js\");\n/* harmony import */ var _basic_checkTextInputs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic/checkTextInputs.js */ \"./src/js/basic/checkTextInputs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    \"use strict\"\r\n    let innerSlider = new Swiper(\".inner-slider__container\", {\r\n        wrapperClass: \"inner-slider__wrapper\",\r\n        slideClass: \"inner-slider__slide\",\r\n\r\n        navigation: {\r\n            nextEl: \".main-screen__arrow_next\",\r\n            prevEl: \".main-screen__arrow_prev\",\r\n        },\r\n\r\n        slidesPerView: 1,\r\n\r\n        direction: \"horizontal\",\r\n\r\n        keyboard: {\r\n            enabled: true,\r\n            onlyInViewport: true,\r\n            pageUpDown: true,\r\n        },\r\n\r\n        autoplay: {\r\n            delay: 2500,\r\n\r\n            stopOnLastSlide: false,\r\n\r\n            disableOnInteraction: false,\r\n        },\r\n\r\n        effect: \"fade\",\r\n\r\n        fadeEffect: {\r\n            crossFade: true,\r\n        },\r\n\r\n        loop: true,\r\n\r\n        watchOverflow: true,\r\n\r\n        speed: 800,\r\n\r\n        observer: true,\r\n\r\n        observeParents: true,\r\n\r\n        observeSlideChildren: true,\r\n\r\n        simulateTouch: true,\r\n    })\r\n\r\n    let mainSlider = new Swiper(\".page\", {\r\n        wrapperClass: \"page__wrapper\",\r\n        slideClass: \"page__screen\",\r\n\r\n        direction: \"vertical\",\r\n\r\n        slidesPerView: \"auto\",\r\n\r\n        parallax: true,\r\n\r\n        keyboard: {\r\n            enabled: true,\r\n            onlyInViewport: true,\r\n            pageUpDown: true,\r\n        },\r\n\r\n        mousewheel: {\r\n            sensitivity: 1,\r\n        },\r\n\r\n        watchOverflow: true,\r\n\r\n        simulateTouch: false,\r\n\r\n        speed: 800,\r\n\r\n        observer: true,\r\n\r\n        observeParents: true,\r\n\r\n        observeSlideChildren: true,\r\n\r\n        pagination: {\r\n            el: \".page__pagination\",\r\n            type: \"bullets\",\r\n            clickable: true,\r\n            bulletClass: \"page__bullet\",\r\n            bulletActiveClass: \"page__bullet_active\",\r\n        },\r\n\r\n        scrollbar: {\r\n            el: \".page__scroll\",\r\n            dragClass: \"page__drag-scroll\",\r\n            draggable: true,\r\n        },\r\n\r\n        init: false,\r\n\r\n        on: {\r\n            init: function () {\r\n                setScrollType()\r\n                wrapper.classList.add(\"_loaded\")\r\n            },\r\n            resize: function () {\r\n                setScrollType()\r\n            },\r\n        },\r\n    })\r\n\r\n    let wrapper = document.querySelector(\".wrapper\")\r\n    function setScrollType() {\r\n        if (wrapper.classList.contains(\"_free\")) {\r\n            wrapper.classList.remove(\"_free\")\r\n            mainSlider.params.freeMode = false\r\n        }\r\n        for (let index = 0; index < mainSlider.slides.length; index++) {\r\n            const pageSlide = mainSlider.slides[index]\r\n            const pageSlideContent =\r\n                pageSlide.querySelector(\".wrapper-container\")\r\n            if (pageSlideContent) {\r\n                const paddingTop = parseInt(\r\n                    getComputedStyle(pageSlideContent.parentElement, true)\r\n                        .paddingTop\r\n                )\r\n                const paddingBottom = parseInt(\r\n                    getComputedStyle(pageSlideContent.parentElement, true)\r\n                        .paddingBottom\r\n                )\r\n                const pageSlideContentHeight = pageSlideContent.offsetHeight\r\n                const padding = paddingTop + paddingBottom\r\n                if (document.body.clientWidth <= 1440) {\r\n                    if (\r\n                        pageSlideContentHeight + padding + 100 >\r\n                        window.innerHeight\r\n                    ) {\r\n                        wrapper.classList.add(\"_free\")\r\n                        mainSlider.params.freeMode = true\r\n                        break\r\n                    }\r\n                } else {\r\n                    if (pageSlideContentHeight + padding > window.innerHeight) {\r\n                        wrapper.classList.add(\"_free\")\r\n                        mainSlider.params.freeMode = true\r\n                        break\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    mainSlider.init()\r\n\r\n    ;(0,_basic_mouse_parallax_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\".parallax-2\", \".second-up\", \".second-down\")\r\n    ;(0,_basic_mouse_parallax_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\".parallax-3\", \".third-up\", \".third-down\")\r\n    ;(0,_basic_mouse_parallax_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\".parallax-1\", \".first-up\", \".first-down\")\r\n\r\n    ;(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\".main-btn\", \".overlay\", \"#preregister\")\r\n    ;(0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\".sub-button\", \".overlay\", \"#register\")\r\n\r\n    ;(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\".modal__forms\")\r\n\r\n    ;(0,_basic_checkTextInputs_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('[type=\"text\"]')\r\n})\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/app.js?");

/***/ }),

/***/ "./src/js/basic/anim-sroll.js":
/*!************************************!*\
  !*** ./src/js/basic/anim-sroll.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst animItems = document.querySelectorAll('._anim-items'); //? діжурний клас для елементів із анімацією\r\n\r\nif (animItems.length > 0) {\r\n\twindow.addEventListener('scroll', animOnScroll);\r\n\t//! у кожного елемента із класом _anim-items при досягненні скролом 1\\4 його висоти чи висоти вікна браузера, якщо елемент більший за висоту вікна браузера йому добавляється клас .active, якщо ми не докрутили або перекрутили, то клас видаляється\r\n\t\tfunction animOnScroll() {\r\n\t\tfor (let index = 0; index < animItems.length; index++) {\r\n\t\t\tconst animItem = animItems[index];\r\n\t\t\tconst animItemHeight = animItem.offsetHeight;\r\n\t\t\tconst animItemOffset = offset(animItem).top;\r\n\t\t\tconst animStart = 4;\r\n\r\n\t\t\t//! Змінна для визначення точки старту анімації\r\n\t\t\tlet animItemPoint = window.innerHeight - animItemHeight / animStart;\r\n\t\t\tif (animItemHeight > window.innerHeight) {\r\n\t\t\t\tanimItemPoint = window.innerHeight - window.innerHeight / animStart;\r\n\t\t\t}\r\n\r\n\t\t\tif ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {\r\n\t\t\t\tanimItem.classList.add('_active');\r\n\t\t\t} else {\r\n\t\t\t\tif (!animItem.classList.contains('_anim-no-hide')) {//! клас призначений для заборони повторного виклику анімації\r\n\t\t\t\t\tanimItem.classList.remove('_active');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction offset(el) {\r\n\t\tconst rect = el.getBoundingClientRect(),\r\n\t\t\tscrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\r\n\t\t\tscrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n\t\treturn { top: rect.top + scrollTop, left: rect.left + scrollLeft }\r\n\t}\r\n\r\n\r\n\tsetTimeout(() => {\r\n\t\tanimOnScroll();\r\n\t}, 300);\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/anim-sroll.js?");

/***/ }),

/***/ "./src/js/basic/checkMobile.js":
/*!*************************************!*\
  !*** ./src/js/basic/checkMobile.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet isMobile = {\r\n\tAndroid: function() {return navigator.userAgent.match(/Android/i);},\r\n\tBlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},\r\n\tiOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},\r\n\tOpera: function() {return navigator.userAgent.match(/Opera Mini/i);},\r\n\tWindows: function() {return navigator.userAgent.match(/IEMobile/i);},\r\n\tany: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMobile);\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/checkMobile.js?");

/***/ }),

/***/ "./src/js/basic/checkTextInputs.js":
/*!*****************************************!*\
  !*** ./src/js/basic/checkTextInputs.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkTextInputs = (selector) => {\r\n  const txtInputs = document.querySelectorAll(selector);\r\n\r\n  txtInputs.forEach(input => {\r\n      input.addEventListener('keypress', function(e) {\r\n          if (e.key.match(/[^A-zА-я]/ig)) {\r\n            e.preventDefault();\r\n          }\r\n      });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/checkTextInputs.js?");

/***/ }),

/***/ "./src/js/basic/ibg.js":
/*!*****************************!*\
  !*** ./src/js/basic/ibg.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\ndocument.querySelector('.wrapper').classList.add('loaded');\r\n\r\nfunction ibg(){\r\n    const ibgs = document.querySelectorAll('.ibg');\r\n    ibgs.forEach(function(value){\r\n        if(value.querySelector('img')){\r\n            value.style.cssText = `background-image: url(${value.querySelector('img').getAttribute('src')})`;\r\n        }\r\n    });\r\n}\r\n\r\nibg();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ibg);\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/ibg.js?");

/***/ }),

/***/ "./src/js/basic/mouse-parallax.js":
/*!****************************************!*\
  !*** ./src/js/basic/mouse-parallax.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n// Ждем загрузку контента\r\n\tconst mouse_parallax = (container, up, down) => {\r\n\r\n\t\tconst parallax = document.querySelector(container);\r\n\t\tconst img_up = document.querySelector(up);\r\n\t\tconst img_down = document.querySelector(down);\r\n\r\n\t\tif (parallax && img_up && img_down) {\r\n\r\n\t\t\tconst firstUp = 60;\r\n\t\t\tconst firstDown = 30;\r\n\r\n\t\t\tconst speed = 0.1;\r\n\r\n\t\t\tlet positionX = 0, positionY = 0;\r\n\t\t\tlet coordXprocent = 0, coordYprocent = 0;\r\n\r\n\t\t\tfunction setMouseParallaxStyle() {\r\n\t\t\t\tconst distX = coordXprocent - positionX;\r\n\t\t\t\tconst distY = coordYprocent - positionY;\r\n\r\n\t\t\t\tpositionX = positionX + (distX * speed);\r\n\t\t\t\tpositionY = positionY + (distY * speed);\r\n\r\n\t\t\t\tif(img_up.classList.contains('second-up') || img_down.classList.contains('second-down')){\r\n\t\t\t\t\timg_up.style.cssText += `transform: translate(${positionX / firstUp}%,${(positionY / firstUp) - 30}%);`;\r\n\t\t\t\t\timg_down.style.cssText += `transform: translate(${positionX / firstDown}%,${(positionY / firstDown) - 40}%);`;\r\n\t\t\t\t} else {\r\n\t\t\t\t\timg_up.style.cssText += `transform: translate(${positionX / firstUp}%,${(positionY / firstUp) - 50}%);`;\r\n\t\t\t\t\timg_down.style.cssText += `transform: translate(${positionX / firstDown}%,${(positionY / firstDown) - 50}%);`;\r\n\t\t\t\t}\r\n\r\n\t\t\t\twindow.requestAnimationFrame(setMouseParallaxStyle);\r\n\t\t\t}\r\n\t\t\tsetMouseParallaxStyle();\r\n\r\n\t\t\tparallax.addEventListener(\"mousemove\", (e) => {\r\n\t\t\t\tconst parallaxWidth = parallax.offsetWidth;\r\n\t\t\t\tconst parallaxHeight = parallax.offsetHeight;\r\n\r\n\t\t\t\tconst coordX = e.pageX - parallaxWidth / 2;\r\n\t\t\t\tconst coordY = e.pageY - parallaxHeight / 2;\r\n\r\n\t\t\t\tcoordXprocent = coordX / parallaxWidth * 100;\r\n\t\t\t\tcoordYprocent = coordY / parallaxHeight * 100;\r\n\t\t\t});\r\n\t\t}\r\n\t};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouse_parallax);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/basic/mouse-parallax.js?");

/***/ }),

/***/ "./src/js/modules/changeImage.js":
/*!***************************************!*\
  !*** ./src/js/modules/changeImage.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basic_checkMobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/checkMobile.js */ \"./src/js/basic/checkMobile.js\");\n/* harmony import */ var _basic_ibg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/ibg.js */ \"./src/js/basic/ibg.js\");\n\r\n\r\n\r\nconst imageContainers = document.querySelectorAll(\r\n    \".info-section__image-container\"\r\n)\r\nremoveImageChildren(imageContainers)\r\nif (document.body.clientWidth >= 1440) {\r\n    imageContainers.forEach((imageContainer) => {\r\n        imageContainer.classList.remove(\"is-mobile\")\r\n    })\r\n} else {\r\n    imageContainers.forEach((imageContainer) => {\r\n        imageContainer.classList.add(\"is-mobile\")\r\n    })\r\n}\r\nwindow.addEventListener(\"resize\", () => {\r\n    removeImageChildren(imageContainers)\r\n    if (document.body.clientWidth >= 1440) {\r\n        imageContainers.forEach((imageContainer) => {\r\n            imageContainer.classList.remove(\"is-mobile\")\r\n        })\r\n    } else {\r\n        imageContainers.forEach((imageContainer) => {\r\n            imageContainer.classList.add(\"is-mobile\")\r\n        })\r\n    }\r\n})\r\nfunction removeImageChildren(imageContainers) {\r\n    if (document.body.clientWidth <= 1440) {\r\n        imageContainers.forEach((imageContainer, i) => {\r\n            while (imageContainer.firstChild) {\r\n                imageContainer.firstChild.remove()\r\n            }\r\n            imageContainer.appendChild(createImage(i))\r\n        })\r\n    }\r\n}\r\nfunction removeIsMobile(imageContainers) {\r\n    if (document.body.clientWidth >= 1440) {\r\n        imageContainers.forEach((imageContainer) => {\r\n            imageContainer.classList.remove(\"is-mobile\")\r\n        })\r\n    }\r\n}\r\nfunction createImage(i) {\r\n    const img = document.createElement(\"img\")\r\n    img.getAttribute(\"alt\", \"model\")\r\n    img.classList.add(\"info-section__image\")\r\n    img.setAttribute(\"src\", `img/${i + 1}.png`)\r\n    return img\r\n}\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/changeImage.js?");

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_regulars_check_email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/regulars/check-email.js */ \"./src/js/modules/regulars/check-email.js\");\n\r\nconst forms = (current_form) => {\r\n    const forms = document.querySelectorAll(current_form),\r\n        inputs = document.querySelectorAll(\"input\")\r\n\r\n    forms.forEach((form) => {\r\n        form.addEventListener(\"submit\", function (e) {\r\n            e.preventDefault()\r\n            sendForm(this)\r\n        })\r\n    })\r\n\r\n    function sendForm(form) {\r\n        let error = formValidate(form)\r\n        if (error === 0) {\r\n            clearInputs(inputs)\r\n            inputs.forEach((input) => {\r\n                formRemoveError(input)\r\n            })\r\n        }\r\n    }\r\n\r\n    function formValidate(form) {\r\n        let error = 0\r\n        let formReq = form.querySelectorAll(\"._req\")\r\n\r\n        for (let index = 0; index < formReq.length; index++) {\r\n            const input = formReq[index]\r\n            formRemoveError(input)\r\n\r\n            if (input.getAttribute(\"name\") === \"email\") {\r\n                console.log(\"check email\", (0,_modules_regulars_check_email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input))\r\n                if (!(0,_modules_regulars_check_email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input)) {\r\n                    formAddError(input)\r\n                    error++\r\n                }\r\n            } else {\r\n                if (input.value === \"\") {\r\n                    formAddError(input)\r\n                    error++\r\n                }\r\n            }\r\n        }\r\n        return error\r\n    }\r\n    function formAddError(input) {\r\n        input.parentElement.classList.add(\"_error\")\r\n        input.classList.add(\"_error\")\r\n    }\r\n    function formRemoveError(input) {\r\n        input.parentElement.classList.remove(\"_error\")\r\n        input.classList.remove(\"_error\")\r\n    }\r\n    const clearInputs = (inputs) => {\r\n        inputs.forEach((input) => {\r\n            input.value = \"\"\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/forms.js?");

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = (triggers, overlay, modal) => {\r\n  const button = document.querySelectorAll(triggers),\r\n        lay = document.querySelector(overlay),\r\n        modal_icon = document.querySelector(modal);\r\n\r\n    button.forEach(btn => {\r\n      btn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        lay.classList.add('active');\r\n        modal_icon.classList.add('active');\r\n      });\r\n    });\r\n\r\n    lay.addEventListener('click', (e) => {\r\n      if(e.target.classList.contains('overlay')){\r\n        modal_icon.classList.remove('active');\r\n        lay.classList.remove('active');\r\n        const inputs = lay.querySelectorAll('input');\r\n        inputs.forEach(input => {\r\n          input.classList.remove('_error');\r\n        });\r\n      }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/modals.js?");

/***/ }),

/***/ "./src/js/modules/regulars/check-email.js":
/*!************************************************!*\
  !*** ./src/js/modules/regulars/check-email.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction email_test(input) {\r\n\tif(input.value !== ''){\r\n\t\treturn /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(input.value);\r\n\t} else {\r\n\t\treturn false;\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (email_test);\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/regulars/check-email.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;