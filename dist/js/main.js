!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/js/model.js");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/js/view.js");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");\n\n\n\nvar appModel = new _model__WEBPACK_IMPORTED_MODULE_0__["default"]();\nvar appView = new _view__WEBPACK_IMPORTED_MODULE_1__["default"]();\nvar app = new _controller__WEBPACK_IMPORTED_MODULE_2__["default"](appModel, appView);\n\n//# sourceURL=webpack:///./src/js/app.js?')},"./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Controller =\n/*#__PURE__*/\nfunction () {\n  function Controller(model, view) {\n    _classCallCheck(this, Controller);\n\n    this.model = model;\n    this.view = view;\n    view.bindSetShuffleTimes(this.setShuffleTimes.bind(this));\n    view.bindShuffleInput(this.confirmShuffleOnInput.bind(this));\n    view.bindStartGame(this.startGame.bind(this));\n    view.bindToggleModal(this.toggleModal.bind(this));\n    view.bindCloseModalOutsideClick(this.closeModalOutsideClick.bind(this));\n    view.bindCloseModalPressingEsc(this.closeModalPressingEsc.bind(this));\n    view.setInputVal(this.getShuffleTimes());\n    this.render();\n  }\n  /**\n  * The state of the page at the first time it is loaded.\n  */\n\n\n  _createClass(Controller, [{\n    key: "render",\n    value: function render() {\n      var _this = this;\n\n      this.renderBoard();\n      this.renderPieces();\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$writeInnerHTML"])(this.view.$maxVal, this.model.maxTimes);\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$writeInnerHTML"])(this.view.$minVal, this.model.minTimes);\n      this.view.alocatePieces(this.model.finalPositionsArr, this.model.baseNumber, this.model.getPieceSize(), this.model.gutterSize);\n      this.toggleBoardLock();\n      [\'resize\', \'orientationchange\'].forEach(function (eventName) {\n        window.addEventListener(eventName, _this.renderBoard.bind(_this));\n      });\n    }\n  }, {\n    key: "closeModalPressingEsc",\n    value: function closeModalPressingEsc(ev) {\n      if (ev.keyCode === 27 && this.getModalState()) {\n        this.toggleModal();\n      }\n    }\n    /**\n     * Close modal by clicking outside.\n     */\n\n  }, {\n    key: "closeModalOutsideClick",\n    value: function closeModalOutsideClick(ev) {\n      if (ev.target === ev.currentTarget) {\n        this.toggleModal();\n      }\n    }\n    /**\n     * Run the game by pressing enter when the input is focused.\n     */\n\n  }, {\n    key: "confirmShuffleOnInput",\n    value: function confirmShuffleOnInput(ev) {\n      if (ev.keyCode === 13) {\n        ev.preventDefault();\n        this.setShuffleTimes();\n        this.startGame();\n        ev.target.blur();\n      }\n    }\n    /**\n    * Pass the board width as a paramenter to adjust\n    * its height.\n    */\n\n  }, {\n    key: "renderBoard",\n    value: function renderBoard() {\n      this.view.adjustBoardHeight(this.getBoardSize());\n    }\n    /**\n    * Get the board width and return it.\n    * @return {number}\n    */\n\n  }, {\n    key: "getBoardSize",\n    value: function getBoardSize() {\n      return this.view.$board.offsetWidth;\n    }\n    /**\n    * Render all pieces in the DOM based on pieces length.\n    */\n\n  }, {\n    key: "renderPieces",\n    value: function renderPieces() {\n      for (var i = 0; i < this.model.getPiecesLength(); i++) {\n        this.view.renderPiece(i, this.model.baseNumber, this.model.getPieceSize());\n      } // The pieces are in the DOM, it is time to add event to them.\n\n\n      this.view.bindSelectPieceToMove(this.selectPieceToMove.bind(this));\n    }\n    /**\n     * All behavior when same piece is clicked to move.\n     */\n\n  }, {\n    key: "selectPieceToMove",\n    value: function selectPieceToMove(ev) {\n      if (this.isBoardBlocked() || this.isBoardShuffling()) {\n        return;\n      }\n\n      var el = ev.currentTarget;\n      var blankEl = this.view.$board.lastChild;\n      var elCurrentX = Number(el.getAttribute(\'data-current-x\'));\n      var elCurrentY = Number(el.getAttribute(\'data-current-y\'));\n      var blankElCurrentX = Number(blankEl.getAttribute(\'data-current-x\'));\n      var blankElCurrentY = Number(blankEl.getAttribute(\'data-current-y\')); // Check if the piece has space to move\n\n      if (elCurrentX - blankElCurrentX === 0 && Math.abs(elCurrentY - blankElCurrentY) === 1 || elCurrentY - blankElCurrentY === 0 && Math.abs(elCurrentX - blankElCurrentX) === 1) {\n        var elIndex = Number(el.getAttribute(\'data-index\'));\n        this.view.movePiece(elIndex);\n        this.updateCounter();\n        this.checkBoardState(elIndex);\n      } else {// Some alert to the user\n      }\n    }\n    /**\n    * Toggle the Model and View board state.\n    */\n\n  }, {\n    key: "toggleBoardLock",\n    value: function toggleBoardLock() {\n      this.model.toggleBoardState();\n      this.view.toggleBoardClassName(this.model.isBoardBlocked);\n    }\n    /**\n    * Maxe sure the number choosed by the user is between the maximum\n    * and minimum available.\n    * Update the this.model.shuffleTimes and pass its value to the input.\n    */\n\n  }, {\n    key: "setShuffleTimes",\n    value: function setShuffleTimes() {\n      var times = Number(this.view.getImputVal());\n\n      if (times > this.model.maxTimes) {\n        times = this.model.maxTimes;\n      }\n\n      if (times <= this.model.minTimes) {\n        times = this.model.minTimes;\n      }\n\n      this.model.shuffleTimes = times;\n      this.view.setInputVal(this.model.shuffleTimes);\n    }\n    /**\n    * Make the game ready to be played.\n    */\n\n  }, {\n    key: "startGame",\n    value: function startGame() {\n      if (this.model.isBoardShuffling) return;\n      if (this.model.isModalOpen) this.toggleModal();\n      if (this.model.isBoardBlocked) this.toggleBoardLock(this.model.isBoardBlocked);\n      this.model.populateListOfPossibleChanges();\n      this.view.alocatePieces(this.model.finalPositionsArr, this.model.baseNumber, this.model.getPieceSize(), this.model.gutterSize);\n      this.shufflePieces();\n      this.resetConter();\n    }\n    /**\n    * Increment the number of the user movements in the Model and view.\n    */\n\n  }, {\n    key: "updateCounter",\n    value: function updateCounter() {\n      this.model.incrementUserMovements();\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$writeInnerHTML"])(this.view.$counter, this.model.userMovements);\n    }\n    /**\n    * Move the currentPiece number x times between the elemets in the\n    * this.model.indexesPossibleMovimentsList array, but keep possibleMoviments\n    * untouched because it refers to the index.\n    *\n    * @example\n    * [\n    *\t\t{ currentPiece: 4, possibleMoviments: [ 1, 4 ] },\n    *\t\t{ currentPiece: 1, possibleMoviments: [ 1, -1, 4 ] },\n    *\t\t{ ... },\n    * ]\n    */\n\n  }, {\n    key: "shufflePieces",\n    value: function shufflePieces() {\n      var _this2 = this;\n\n      var currentTime = 0;\n      var index = this.model.getPiecesLength() - 1;\n      var moviment = [this.model.direction.left, this.model.direction.up][Math.floor(Math.random() * 2)];\n      var arr = this.model.indexesPossibleMovimentsList;\n      var times = this.model.shuffleTimes;\n      this.model.toggleBoardShuffling();\n      var animeShuffle = setInterval(function () {\n        if (currentTime !== times) {\n          // Fiter possibleMoviments in order to prevent the piece to back to the last position\n          var possibleMoviments = arr[index].possibleMoviments.filter(function (el) {\n            return el !== moviment * -1;\n          }); // Take randomly one movimento to apply\n\n          moviment = possibleMoviments[Math.floor(Math.random() * possibleMoviments.length)];\n          var newIndex = index + moviment;\n\n          _this2.view.movePiece(arr[newIndex].number);\n\n          var blankNumberCopy = arr[index].number;\n          var pieceNumberCopy = arr[newIndex].number;\n          arr[index].number = pieceNumberCopy;\n          arr[newIndex].number = blankNumberCopy;\n          index = newIndex;\n          currentTime++;\n        } else {\n          clearInterval(animeShuffle);\n\n          _this2.model.shuffledBoardArr(arr);\n\n          _this2.model.toggleBoardShuffling();\n        }\n      }, 40);\n    }\n    /**\n    * Move the counter back to zero.\n    */\n\n  }, {\n    key: "resetConter",\n    value: function resetConter() {\n      this.model.resetUserMovements();\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$writeInnerHTML"])(this.view.$counter, this.model.userMovements);\n    }\n    /**\n    * Update the array that is the reference to known if the board is organized,\n    * than check if it is organized.\n    *\n    * @param {number} index - The index of the piece that was moved.\n    */\n\n  }, {\n    key: "checkBoardState",\n    value: function checkBoardState(index) {\n      this.model.updateCurrentPosition(index);\n\n      if (this.isBoardOrganized()) {\n        this.toggleBoardLock();\n        this.model.updateModalMsg();\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$writeInnerHTML"])(this.view.$modalHeader, this.model.modalHeaderMsg);\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$writeInnerHTML"])(this.view.$modalBody, this.model.modalBodyMsg);\n        this.toggleModal();\n      }\n    }\n    /**\n    * Return the data that represents if the board is locked.\n    *\n    * @return {boolean}\n    */\n\n  }, {\n    key: "isBoardBlocked",\n    value: function isBoardBlocked() {\n      return this.model.isBoardBlocked;\n    }\n    /**\n    * Return the data that represents if the board is sguffling.\n    *\n    * @return {boolean}\n    */\n\n  }, {\n    key: "isBoardShuffling",\n    value: function isBoardShuffling() {\n      return this.model.isBoardShuffling;\n    }\n    /**\n    * If both arrays are equal, so the board is organized.\n    * Return the data that represents the game state.\n    *\n    * @return {boolean}\n    */\n\n  }, {\n    key: "isBoardOrganized",\n    value: function isBoardOrganized() {\n      return JSON.stringify(this.model.currentPositionsArr) === JSON.stringify(this.model.finalPositionsArr);\n    }\n    /**\n    * Toggle Model and View modal state.\n    */\n\n  }, {\n    key: "toggleModal",\n    value: function toggleModal() {\n      this.model.toggleModalState();\n      this.view.toggleModal(this.model.isModalOpen);\n    }\n    /**\n    * Return the modal state.\n    *\n    * @return {boolean}\n    */\n\n  }, {\n    key: "getModalState",\n    value: function getModalState() {\n      return this.model.isModalOpen;\n    }\n    /**\n    * Return the number of movements used to shuffle the board.\n    *\n    * @return {number}\n    */\n\n  }, {\n    key: "getShuffleTimes",\n    value: function getShuffleTimes() {\n      return this.model.shuffleTimes;\n    }\n  }]);\n\n  return Controller;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/controller.js?')},"./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: $on, $writeInnerHTML */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$on", function() { return $on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$writeInnerHTML", function() { return $writeInnerHTML; });\n/**\n * addEventListener wrapper\n *\n * @param {Element|Window} target Target Element\n * @param {string} type Event name to bind to\n * @param {Function} callback Event callback\n * @param {boolean} [capture] Capture the event\n */\nfunction $on(target, type, callback, capture) {\n  target.addEventListener(type, callback, !!capture);\n}\n/**\n* Write the inner HTML in the DOM element.\n*\n* @param {object} el - DOM element.\n* @param {string} text - The text to bo inserted in the element.\n*/\n\nfunction $writeInnerHTML(el, text) {\n  el.innerHTML = text;\n}\n\n//# sourceURL=webpack:///./src/js/helpers.js?')},"./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  function Model() {\n    _classCallCheck(this, Model);\n\n    this.baseNumber = 4;\n    this.gutterSize = 1, // In percentage\n    this.finalPositionsArr = [];\n    this.currentPositionsArr = [];\n    this.shuffledPiecesIndexes = [];\n    this.isBoardBlocked = false;\n    this.userMovements = 0;\n    this.minTimes = 1;\n    this.maxTimes = 80;\n    this.shuffleTimes = this.maxTimes;\n    this.direction = {\n      right: 1,\n      left: -1,\n      down: this.baseNumber,\n      up: this.baseNumber * -1\n    };\n    this.isModalOpen = false;\n    this.modalHeaderMsg = \'\';\n    this.modalBodyMsg = \'\';\n    this.isBoardShuffling = false;\n    this.createFinalPositionsArr();\n  }\n  /**\n   * Create the array that represents the board when it is organized,\n   * where the index represents the position and the element the piece number.\n   *\n   * @example\n   * [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]\n   */\n\n\n  _createClass(Model, [{\n    key: "createFinalPositionsArr",\n    value: function createFinalPositionsArr() {\n      for (var i = 0; i < this.getPiecesLength(); i++) {\n        this.finalPositionsArr[i] = i;\n      }\n    }\n    /**\n     * Return the number of pieces in the board.\n     *\n     * @return {number}\n     */\n\n  }, {\n    key: "getPiecesLength",\n    value: function getPiecesLength() {\n      return this.baseNumber * this.baseNumber;\n    }\n    /**\n     * Return the piece size in percentage.\n     *\n     * @return {number}\n     */\n\n  }, {\n    key: "getPieceSize",\n    value: function getPieceSize() {\n      return (100 - (this.baseNumber - 1) * this.gutterSize) / this.baseNumber;\n    }\n    /**\n     * Toggle board state.\n     */\n\n  }, {\n    key: "toggleBoardState",\n    value: function toggleBoardState() {\n      this.isBoardBlocked = !this.isBoardBlocked;\n    }\n  }, {\n    key: "toggleBoardShuffling",\n    value: function toggleBoardShuffling() {\n      this.isBoardShuffling = !this.isBoardShuffling;\n    }\n    /**\n     * Create the message that the user will see after finish organizing the board.\n     */\n\n  }, {\n    key: "updateModalMsg",\n    value: function updateModalMsg() {\n      var className = \'color-success\';\n      var movementTxt = this.userMovements <= 1 ? \'movement\' : \'movements\';\n      var dif = Math.abs(this.shuffleTimes - this.userMovements);\n\n      if (this.userMovements < this.shuffleTimes) {\n        this.modalHeaderMsg = "<h2 class=\\"".concat(className, "\\">Amazing!<br> You did ").concat(this.userMovements, " ").concat(movementTxt, ".</h2>");\n        this.modalBodyMsg = "<span class=\\"bold\\">".concat(dif, " movements</span> less than the board was shuffled.");\n      } else if (this.userMovements === this.shuffleTimes) {\n        this.modalHeaderMsg = "<h2 class=\\"".concat(className, "\\">Congrats!<br> You did ").concat(this.userMovements, " ").concat(movementTxt, ".</h2>");\n        this.modalBodyMsg = \'The same number of movements that the board was shuffled.\';\n      } else {\n        className = \'color-fail\';\n        this.modalHeaderMsg = "<h2 class=\\"".concat(className, "\\">Ops!<br> You did ").concat(this.userMovements, " ").concat(movementTxt, ".</h2>");\n        this.modalBodyMsg = "<span class=\\"bold\\">".concat(dif, " movements</span> more than the board was shuffled.");\n      }\n    }\n    /**\n     * Store in an array all possibilities of moviments of each position.\n     *\n     * @example\n     * The piece that are in position 1 can move just to right(1), left(-1) and down(4),\n     * assuming 4 the number of pieces per row.\n     * [\n     *\t\t{ currentPiece: 0, possibleMoviments: [ 1, 4 ] },\n     *\t\t{ currentPiece: 1, possibleMoviments: [ 1, -1, 4 ] },\n     *\t\t{ ... },\n     * ]\n     */\n\n  }, {\n    key: "populateListOfPossibleChanges",\n    value: function populateListOfPossibleChanges() {\n      var right = this.direction.right;\n      var left = this.direction.left;\n      var down = this.direction.down;\n      var up = this.direction.up;\n      var num = this.baseNumber;\n      var len = this.getPiecesLength();\n      this.indexesPossibleMovimentsList = [];\n\n      for (var i = 0; i < len; i++) {\n        var currentList = []; // Can move to right\n\n        if ((i + right) % num > 0) currentList.push(right); // Can move to left\n\n        if ((i + left) % num >= 0 && (i + left) % num < num - 1) currentList.push(left); // Can move to up\n\n        if (i + up >= 0) currentList.push(up); // Can move to down\n\n        if (i + down < len) currentList.push(down);\n        this.indexesPossibleMovimentsList.push({\n          number: i,\n          possibleMoviments: currentList\n        });\n      }\n    }\n    /**\n     * Store in Model.shuffledPiecesIndexes array\n     * only the position of each piece shuffled. This array will be used\n     * to render the shuffled board.\n     *\n     * @example\n     * [ 0,13,1,5,4,6,7,15,8,14,2,10,9,12,3,11 ]\n     *\n     * @param {array} arr - The Model.indexesPossibleMovimentsList shuffled\n     */\n\n  }, {\n    key: "shuffledBoardArr",\n    value: function shuffledBoardArr(arr) {\n      this.shuffledPiecesIndexes = arr.map(function (el) {\n        return el.number;\n      }); // Clone Model.shuffledPiecesIndexes array in order to keep it\n      // immutable. The clone will change after each piece movement.\n\n      this.currentPositionsArr = this.shuffledPiecesIndexes.slice(0);\n    }\n    /**\n     * Update Model.currentPositionsArr each time some piece change the position.\n     * this array will be used to be compared to the Model.finalPositionsArr\n     * to verify if the board is organized.\n     *\n     * @param {number} piecePosition\n     */\n\n  }, {\n    key: "updateCurrentPosition",\n    value: function updateCurrentPosition(piecePosition) {\n      var indexOfPiecePos = this.currentPositionsArr.indexOf(piecePosition);\n      var indexBlank = this.currentPositionsArr.indexOf(this.getPiecesLength() - 1);\n      this.currentPositionsArr[indexBlank] = piecePosition;\n      this.currentPositionsArr[indexOfPiecePos] = this.getPiecesLength() - 1;\n    }\n    /**\n     * Just increment.\n     */\n\n  }, {\n    key: "incrementUserMovements",\n    value: function incrementUserMovements() {\n      this.userMovements++;\n    }\n    /**\n     * Back it to the number to zero.\n     */\n\n  }, {\n    key: "resetUserMovements",\n    value: function resetUserMovements() {\n      this.userMovements = 0;\n    }\n    /**\n     * Just toggle the modal state.\n     */\n\n  }, {\n    key: "toggleModalState",\n    value: function toggleModalState() {\n      this.isModalOpen = !this.isModalOpen;\n    }\n  }]);\n\n  return Model;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/model.js?')},"./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View() {\n    _classCallCheck(this, View);\n\n    this.$board = document.getElementById(\'board\');\n    this.$shuffleInput = document.getElementById(\'shuffle-input\');\n    this.$playBtns = document.querySelectorAll(\'.play-game\');\n    this.$counter = document.getElementById(\'counter\');\n    this.$maxVal = document.getElementById(\'max-val\');\n    this.$minVal = document.getElementById(\'min-val\');\n    this.$modal = document.getElementById(\'modal\');\n    this.$modalHeader = document.getElementById(\'modal-header\');\n    this.$modalBody = document.getElementById(\'modal-body\');\n    this.$closeModalEls = document.querySelectorAll(\'.close-modal\');\n  }\n  /**\n  * @param {Function} handler - Callback event function.\n  */\n\n\n  _createClass(View, [{\n    key: "bindCloseModalPressingEsc",\n    value: function bindCloseModalPressingEsc(handler) {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(window, \'keydown\', handler);\n    }\n    /**\n    * @param {Function} handler - Callback event function.\n    */\n\n  }, {\n    key: "bindCloseModalOutsideClick",\n    value: function bindCloseModalOutsideClick(handler) {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(this.$modal, \'click\', handler);\n    }\n    /**\n    * @param {Function} handler - Callback event function.\n    */\n\n  }, {\n    key: "bindToggleModal",\n    value: function bindToggleModal(handler) {\n      this.$closeModalEls.forEach(function (el) {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(el, \'click\', handler);\n      });\n    }\n    /**\n    * @param {Function} handler - Callback event function.\n    */\n\n  }, {\n    key: "bindStartGame",\n    value: function bindStartGame(handler) {\n      this.$playBtns.forEach(function (el) {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(el, \'click\', handler);\n      });\n    }\n    /**\n    * @param {Function} handler - Callback event function.\n    */\n\n  }, {\n    key: "bindSetShuffleTimes",\n    value: function bindSetShuffleTimes(handler) {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(this.$shuffleInput, \'blur\', handler);\n    }\n    /**\n    * @param {Function} handler - Callback event function.\n    */\n\n  }, {\n    key: "bindShuffleInput",\n    value: function bindShuffleInput(handler) {\n      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(this.$shuffleInput, \'keydown\', handler);\n    }\n    /**\n    * @param {Function} handler - Callback event function.\n    */\n\n  }, {\n    key: "bindSelectPieceToMove",\n    value: function bindSelectPieceToMove(handler) {\n      var $pieces = document.querySelectorAll(\'.piece\');\n      $pieces.forEach(function (el) {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["$on"])(el, \'click\', handler);\n      });\n    }\n    /**\n     * Set the height of the board in pixel.\n     *\n     * @param {number} height - The value to set the board height\n     */\n\n  }, {\n    key: "adjustBoardHeight",\n    value: function adjustBoardHeight(height) {\n      this.$board.style.height = "".concat(height, "px");\n    }\n    /**\n     * Return the value entered by the user.\n     *\n     * @return {string}\n     */\n\n  }, {\n    key: "getImputVal",\n    value: function getImputVal() {\n      return this.$shuffleInput.value;\n    }\n    /**\n     * Set the input value.\n     *\n     * @param {number} value - The value that the input will be setted.\n     */\n\n  }, {\n    key: "setInputVal",\n    value: function setInputVal(value) {\n      this.$shuffleInput.value = value.toString();\n    }\n    /**\n     * Render each piece in the DOM\n     *\n     * @param {number} index - Index of the piece\n     * @param {number} baseNumber - Number of Piece per row\n     * @param {number} pieceSize - The width/height os the piece in percentage\n     */\n\n  }, {\n    key: "renderPiece",\n    value: function renderPiece(index, baseNumber, pieceSize) {\n      var pieceNumberText = index + 1;\n      var coordinateX = index % baseNumber;\n      var coordinateY = Math.floor(index / baseNumber);\n      var pieceEl = document.createElement(\'div\');\n      pieceEl.classList.add(\'piece\');\n      pieceEl.style.width = "".concat(pieceSize, "%");\n      pieceEl.style.height = "".concat(pieceSize, "%");\n      pieceEl.setAttribute(\'data-index\', index);\n      pieceEl.innerHTML = pieceNumberText;\n      this.$board.appendChild(pieceEl);\n    }\n    /**\n     * Position the pieces shuffleds in the board\n     *\n     * @param {array} mix - The array shuffled, e.g. [ 0, 5, 2, ... ]\n     * @param {number} baseNumber - Number of Piece per row\n     * @param {number} pieceSize - The width/height os the piece in percentage\n     * @param {number} gutterSize - The gutter betwwe pieces in percentage\n     */\n\n  }, {\n    key: "alocatePieces",\n    value: function alocatePieces(mix, baseNumber, pieceSize, gutterSize) {\n      var piecesEls = document.querySelectorAll(\'.piece\');\n\n      for (var i = 0; i < mix.length; i++) {\n        var coordinateX = mix.indexOf(i) % baseNumber;\n        var coordinateY = Math.floor(mix.indexOf(i) / baseNumber);\n        piecesEls[i].style.left = "".concat(coordinateX * (pieceSize + gutterSize), "%");\n        piecesEls[i].style.top = "".concat(coordinateY * (pieceSize + gutterSize), "%");\n        piecesEls[i].setAttribute(\'data-current-x\', coordinateX);\n        piecesEls[i].setAttribute(\'data-current-y\', coordinateY);\n      }\n    }\n    /**\n     * Toggle the class that block the board.\n     *\n     * @param {boolean} boardState - Is board Locked?\n     */\n\n  }, {\n    key: "toggleBoardClassName",\n    value: function toggleBoardClassName(boardState) {\n      this.$board.classList[boardState ? \'add\' : \'remove\'](\'board-blocked\');\n    }\n    /**\n     * Execute the UI piece movement.\n     *\n     * @param {number} index - The index of the piece that will be moved.\n     */\n\n  }, {\n    key: "movePiece",\n    value: function movePiece(index) {\n      var el = document.querySelector("[data-index=\\"".concat(index, "\\"]"));\n      var blankEl = this.$board.lastChild;\n      var elStyleTop = el.style.top;\n      var elStyleLeft = el.style.left;\n      var elCurrentX = Number(el.getAttribute(\'data-current-x\'));\n      var elCurrentY = Number(el.getAttribute(\'data-current-y\'));\n      el.style.top = blankEl.style.top;\n      el.style.left = blankEl.style.left;\n      el.setAttribute(\'data-current-x\', Number(blankEl.getAttribute(\'data-current-x\')));\n      el.setAttribute(\'data-current-y\', Number(blankEl.getAttribute(\'data-current-y\')));\n      blankEl.style.top = elStyleTop;\n      blankEl.style.left = elStyleLeft;\n      blankEl.setAttribute(\'data-current-x\', elCurrentX);\n      blankEl.setAttribute(\'data-current-y\', elCurrentY);\n    }\n    /**\n     * Show or hide modal depending on its state.\n     *\n     * @param {boolean} state - The modal state.\n     */\n\n  }, {\n    key: "toggleModal",\n    value: function toggleModal(state) {\n      this.$modal.classList[state ? \'add\' : \'remove\'](\'modal-is-open\');\n    }\n  }]);\n\n  return View;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/view.js?')},"./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "css/style.css";\n\n//# sourceURL=webpack:///./src/sass/style.scss?')},0:
/*!***************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/style.scss ***!
  \***************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");\nmodule.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/sass/style.scss?')}});