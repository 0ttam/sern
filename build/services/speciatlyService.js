"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config;
var handelPostCreateNewSpecialty = function handelPostCreateNewSpecialty(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(!data.nameVi || !data.image || !data.contentMarkdown || !data.contentHTML)) {
              _context.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing parameter.....'
            });
            _context.next = 8;
            break;
          case 5:
            _context.next = 7;
            return _index["default"].Specialty.create({
              nameVi: data.nameVi,
              contentHTML: data.contentHTML,
              contentMarkdown: data.contentMarkdown,
              image: data.image
            });
          case 7:
            resolve({
              errCode: 0,
              errMessage: 'Create new specialty success!'
            });
          case 8:
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var handelGetSpecialtyById = function handelGetSpecialtyById(id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var data, _data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (id) {
              _context2.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing parameter.....'
            });
            _context2.next = 16;
            break;
          case 5:
            if (!(id === 'ALL')) {
              _context2.next = 12;
              break;
            }
            _context2.next = 8;
            return _index["default"].Specialty.findAll({
              raw: true
            });
          case 8:
            data = _context2.sent;
            if (!_lodash["default"].isEmpty(data)) {
              resolve({
                errCode: 0,
                errMessage: 'Get specialty success!',
                data: data
              });
            } else {
              resolve({
                errCode: -1,
                errMessage: "Couldn't find any specialty!"
              });
            }
            _context2.next = 16;
            break;
          case 12:
            _context2.next = 14;
            return _index["default"].Specialty.findOne({
              where: {
                id: id
              },
              raw: true
            });
          case 14:
            _data = _context2.sent;
            if (!_lodash["default"].isEmpty(_data)) {
              resolve({
                errCode: 0,
                errMessage: 'Get specialty success!',
                data: _data
              });
            } else {
              resolve({
                errCode: -1,
                errMessage: "Couldn't find any specialty!"
              });
            }
          case 16:
            _context2.next = 21;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 18]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var handelEditSpecialtyById = function handelEditSpecialtyById(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var specialty;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // check id
            if (!data.id) {
              resolve({
                errCode: 1,
                errMessage: "Missing required parameter ('id' field is empty)!"
              });
            }
            // find user by id
            _context3.next = 4;
            return _index["default"].Specialty.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 4:
            specialty = _context3.sent;
            if (!specialty) {
              _context3.next = 15;
              break;
            }
            specialty.id = data.id;
            specialty.nameVi = data.nameVi;
            specialty.contentHTML = data.contentHTML;
            specialty.contentMarkdown = data.contentMarkdown;
            if (data.image) {
              specialty.image = data.image;
            }
            _context3.next = 13;
            return specialty.save();
          case 13:
            _context3.next = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              errMessage: 'Specialty is not found!'
            });
          case 16:
            resolve({
              errCode: 0,
              errMessage: 'Update specialty successfully!'
            });
            _context3.next = 22;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 19]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var handelDeleteSpecialtyById = function handelDeleteSpecialtyById(id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var specialty;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].Specialty.destroy({
              where: {
                id: id
              }
            });
          case 3:
            specialty = _context4.sent;
            if (!specialty) {
              resolve({
                errCode: 2,
                errMessage: "The specialty isn't exist!"
              });
            }
            resolve({
              errCode: 0,
              errMessage: 'Delete specialty successfully!'
            });
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var handelGetListDoctorBySpecialtyAndDetailSpecialtyById = function handelGetListDoctorBySpecialtyAndDetailSpecialtyById(specialtyId, provinceId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var data, dataDoctor, dataSpecialty;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!(!specialtyId && !provinceId)) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing parameter.....'
            });
            _context5.next = 20;
            break;
          case 5:
            data = {};
            dataDoctor = {};
            if (!(provinceId === 'ALL')) {
              _context5.next = 13;
              break;
            }
            _context5.next = 10;
            return _index["default"].Doctor_Info.findAll({
              where: {
                specialtyId: specialtyId
              },
              attributes: ['doctorId', 'specialtyId'],
              include: [{
                model: _index["default"].User,
                attributes: ['firstName', 'lastName', 'avatar'],
                include: [{
                  model: _index["default"].Markdown,
                  attributes: ['description']
                }, {
                  model: _index["default"].Allcode,
                  as: 'positionData',
                  attributes: ['valueEn', 'valueVi']
                }]
              }],
              raw: true,
              nest: true
            });
          case 10:
            dataDoctor = _context5.sent;
            _context5.next = 16;
            break;
          case 13:
            _context5.next = 15;
            return _index["default"].Doctor_Info.findAll({
              where: {
                specialtyId: specialtyId,
                provinceId: provinceId
              },
              attributes: ['doctorId', 'specialtyId'],
              include: [{
                model: _index["default"].User,
                attributes: ['firstName', 'lastName', 'avatar'],
                include: [{
                  model: _index["default"].Markdown,
                  attributes: ['description']
                }, {
                  model: _index["default"].Allcode,
                  as: 'positionData',
                  attributes: ['valueEn', 'valueVi']
                }]
              }],
              raw: true,
              nest: true
            });
          case 15:
            dataDoctor = _context5.sent;
          case 16:
            _context5.next = 18;
            return _index["default"].Specialty.findOne({
              where: {
                id: specialtyId
              }
            });
          case 18:
            dataSpecialty = _context5.sent;
            if (!_lodash["default"].isEmpty(dataSpecialty)) {
              data = {
                dataDoctor: dataDoctor,
                dataSpecialty: dataSpecialty
              };
              resolve({
                errCode: 0,
                errMessage: 'Get List doctor by specialtyId success!',
                data: data
              });
            } else {
              resolve({
                errCode: -1,
                errMessage: "Couldn't find any doctor!"
              });
            }
          case 20:
            _context5.next = 25;
            break;
          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 25:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 22]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
module.exports = {
  handelPostCreateNewSpecialty: handelPostCreateNewSpecialty,
  handelGetSpecialtyById: handelGetSpecialtyById,
  handelEditSpecialtyById: handelEditSpecialtyById,
  handelDeleteSpecialtyById: handelDeleteSpecialtyById,
  handelGetListDoctorBySpecialtyAndDetailSpecialtyById: handelGetListDoctorBySpecialtyAndDetailSpecialtyById
};