"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _lodash = _interopRequireDefault(require("lodash"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _emailService = _interopRequireDefault(require("./emailService"));
var _uuid = require("uuid");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config;
var salt = _bcryptjs["default"].genSaltSync(10);
var handelBookAppointment = function handelBookAppointment(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var hashUserPassword, hasPasswordFromBcrypt, user, token, _yield$db$Booking$fin, _yield$db$Booking$fin2, patient, created;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(!data.email || !data.doctorId || !data.date || !data.timeType || !data.doctorId || !data.address || !data.phoneNumber || !data.gender || !data.lastName || !data.firstName)) {
              _context2.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing parameter'
            });
            _context2.next = 27;
            break;
          case 5:
            // Upsert patient
            hashUserPassword = function hashUserPassword(password) {
              return new Promise( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                  var hashPassword;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _bcryptjs["default"].hashSync(password, salt);
                      case 3:
                        hashPassword = _context.sent;
                        resolve(hashPassword);
                        _context.next = 10;
                        break;
                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        reject(_context.t0);
                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[0, 7]]);
                }));
                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());
            };
            _context2.next = 8;
            return hashUserPassword(data.phoneNumber);
          case 8:
            hasPasswordFromBcrypt = _context2.sent;
            _context2.next = 11;
            return _index["default"].User.findOrCreate({
              where: {
                email: data.email
              },
              defaults: {
                email: data.email,
                roleId: 'R3',
                lastName: data.lastName,
                firstName: data.firstName,
                gender: data.gender,
                address: data.address,
                password: hasPasswordFromBcrypt,
                phoneNumber: data.phoneNumber
              }
            });
          case 11:
            user = _context2.sent;
            if (!(user && user[0])) {
              _context2.next = 27;
              break;
            }
            token = (0, _uuid.v4)();
            _context2.next = 16;
            return _index["default"].Booking.findOrCreate({
              where: {
                patientId: user[0].id,
                statusId: 'S2'
              },
              defaults: {
                statusId: 'S1',
                doctorId: data.doctorId,
                patientId: user[0].id,
                date: data.date,
                timeType: data.timeType,
                reason: data.reason,
                token: token
              }
            });
          case 16:
            _yield$db$Booking$fin = _context2.sent;
            _yield$db$Booking$fin2 = _slicedToArray(_yield$db$Booking$fin, 2);
            patient = _yield$db$Booking$fin2[0];
            created = _yield$db$Booking$fin2[1];
            if (!(created === true)) {
              _context2.next = 26;
              break;
            }
            _context2.next = 23;
            return _emailService["default"].sendSimpleEmail({
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              firstNameDoctor: data.firstNameDoctor,
              lastNameDoctor: data.lastNameDoctor,
              timeDisplay: data.timeDisplay,
              dayDisplay: data.dayDisplay,
              languages: data.languages,
              linkRedirect: buildUrlEmail(data.doctorId, token)
            });
          case 23:
            resolve({
              data: user,
              errCode: 0,
              errMessageVi: 'Đăng kí khám bệnh thành công. Vui lòng kiểm tra email!',
              errMessageEn: 'Successful registration for medical examination. Please check your email!'
            });
            _context2.next = 27;
            break;
          case 26:
            if (created === false) {
              resolve({
                data: user,
                errCode: 0,
                errMessageVi: 'Thông tin đăng kí đã tồn tại. Vui lòng kiểm tra lại email!',
                errMessageEn: 'Registration information already exists. Please check your email again!'
              });
            }
          case 27:
            _context2.next = 32;
            break;
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 29]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var buildUrlEmail = function buildUrlEmail(doctorId, token) {
  var result = "".concat(process.env.URL_REACT, "/verify-book-appointment?token=").concat(token, "&doctorId=").concat(doctorId);
  return result;
};
var handelVerifyBookAppointment = function handelVerifyBookAppointment(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var appointment;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(!data || !data.doctorId || !data.token)) {
              _context3.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing parameter'
            });
            _context3.next = 16;
            break;
          case 5:
            _context3.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: data.doctorId,
                token: data.token,
                statusId: 'S1'
              },
              raw: false
            });
          case 7:
            appointment = _context3.sent;
            if (!appointment) {
              _context3.next = 15;
              break;
            }
            appointment.statusId = 'S2';
            _context3.next = 12;
            return appointment.save();
          case 12:
            resolve({
              errCode: 0,
              errMessage: 'Appointment confirmed successfully!'
            });
            _context3.next = 16;
            break;
          case 15:
            resolve({
              errCode: 2,
              errMessage: 'The user does not exist or the appointment is already booked!'
            });
          case 16:
            _context3.next = 21;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 18]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var handleLoadListPatientByDoctorTime = function handleLoadListPatientByDoctorTime(doctorId, date) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var listPatient;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (!(!doctorId || !date)) {
              _context4.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing parameter'
            });
            _context4.next = 9;
            break;
          case 5:
            _context4.next = 7;
            return _index["default"].Booking.findAll({
              where: {
                doctorId: doctorId,
                date: date,
                statusId: 'S2'
              },
              include: [{
                model: _index["default"].User,
                as: 'patientData',
                attributes: {
                  exclude: ['password', 'avatar']
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'genderData',
                  attributes: ['valueVi', 'valueEn']
                }]
              }, {
                model: _index["default"].Allcode,
                as: 'timeTypeData',
                attributes: ['valueVi', 'valueEn']
              }],
              raw: false,
              nest: true
            });
          case 7:
            listPatient = _context4.sent;
            if (listPatient) {
              resolve({
                errCode: 0,
                errMessage: 'get list patient successfully!',
                data: listPatient
              });
            } else {
              resolve({
                errCode: 2,
                errMessage: 'The patient does not exist!'
              });
            }
          case 9:
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var handleSendInvoiceAndRecipience = function handleSendInvoiceAndRecipience(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var patient;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (data) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessageVi: 'Thiếu tham số',
              errMessageEn: 'Missing parameter',
              errType: 'failed'
            });
            _context5.next = 15;
            break;
          case 5:
            _context5.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                patientId: data.patientId,
                statusId: 'S2'
              },
              raw: false
            });
          case 7:
            patient = _context5.sent;
            _context5.next = 10;
            return _emailService["default"].sendInvoiceEmail({
              email: data.patientEmail,
              image: data.attachImage,
              languages: data.languages
            });
          case 10:
            if (!patient) {
              _context5.next = 14;
              break;
            }
            patient.statusId = 'S3';
            _context5.next = 14;
            return patient.save();
          case 14:
            resolve({
              data: patient,
              errCode: 0,
              errType: 'success',
              errMessageVi: 'Gửi hóa đơn/đơn thuốc cho khách hàng thành công!',
              errMessageEn: 'Send invoice/recipience to customer successfully!'
            });
          case 15:
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 17]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
module.exports = {
  handelBookAppointment: handelBookAppointment,
  handelVerifyBookAppointment: handelVerifyBookAppointment,
  handleLoadListPatientByDoctorTime: handleLoadListPatientByDoctorTime,
  handleSendInvoiceAndRecipience: handleSendInvoiceAndRecipience
};