"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var salt = _bcryptjs["default"].genSaltSync(10);
var handleUserLogin = function handleUserLogin(email, password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var userData, isExist, user, check;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userData = {};
            _context.next = 4;
            return checkUserEmail(email);
          case 4:
            isExist = _context.sent;
            if (!isExist) {
              _context.next = 12;
              break;
            }
            _context.next = 8;
            return _index["default"].User.findOne({
              where: {
                email: email
              },
              attributes: ['email', 'password', 'roleId', 'firstName', 'lastName', 'id'],
              raw: true
            });
          case 8:
            user = _context.sent;
            if (user) {
              //compare password
              check = _bcryptjs["default"].compareSync(password, user.password);
              if (check) {
                userData.errCode = 0;
                userData.errMessage = 'Ok';
                delete user.password;
                userData.user = user;
              } else {
                userData.errCode = 3;
                userData.errMessage = 'Wrong password!';
              }
            } else {
              //return error
              userData.errCode = 2;
              userData.errMessage = 'User is not found';
            }
            _context.next = 14;
            break;
          case 12:
            //return error
            userData.errCode = 1;
            userData.errMessage = "Your's Email isn't exist in System. Plz try other email!";
          case 14:
            resolve(userData);
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 17]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var checkUserEmail = function checkUserEmail(email) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].User.findOne({
              where: {
                email: email
              }
            });
          case 3:
            user = _context2.sent;
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var getAllUsers = function getAllUsers(userId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            users = '';
            if (!(userId === 'ALL')) {
              _context3.next = 8;
              break;
            }
            _context3.next = 5;
            return _index["default"].User.findAll({
              raw: true,
              attributes: {
                exclude: ['password']
              }
            });
          case 5:
            users = _context3.sent;
            _context3.next = 12;
            break;
          case 8:
            if (!(userId !== 'ALL' && userId)) {
              _context3.next = 12;
              break;
            }
            _context3.next = 11;
            return _index["default"].User.findOne({
              raw: true,
              where: {
                id: userId
              },
              attributes: {
                exclude: ['password']
              }
            });
          case 11:
            users = _context3.sent;
          case 12:
            resolve(users);
            _context3.next = 18;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 15]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var createNewUser = function createNewUser(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var check, hasPasswordFromBcrypt;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return checkUserEmail(data.email);
          case 3:
            check = _context4.sent;
            if (!(check === true)) {
              _context4.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Your email is already in used. Plz try another email!'
            });
            _context4.next = 18;
            break;
          case 8:
            if (!data.email) {
              _context4.next = 17;
              break;
            }
            _context4.next = 11;
            return hashUserPassword(data.password);
          case 11:
            hasPasswordFromBcrypt = _context4.sent;
            _context4.next = 14;
            return _index["default"].User.create({
              email: data.email,
              password: hasPasswordFromBcrypt,
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              phoneNumber: data.phoneNumber,
              gender: data.gender,
              avatar: data.avatar,
              roleId: data.roleId,
              positionId: data.positionId
            });
          case 14:
            resolve({
              errCode: 0,
              errMessage: 'Ok'
            });
            _context4.next = 18;
            break;
          case 17:
            if (!data.email) {
              resolve({
                errCode: 1,
                errMessage: 'Email not yet entered'
              });
            }
          case 18:
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 20]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var hashUserPassword = function hashUserPassword(password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var hashPassword;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _bcryptjs["default"].hashSync(password, salt);
          case 3:
            hashPassword = _context5.sent;
            resolve(hashPassword);
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var deleteUser = function deleteUser(id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _index["default"].User.destroy({
              where: {
                id: id
              }
            });
          case 3:
            user = _context6.sent;
            if (!user) {
              resolve({
                errCode: 2,
                errMessage: "The user isn't exist!"
              });
            }
            resolve({
              errCode: 0,
              errMessage: 'Delete user successfully!'
            });
            _context6.next = 11;
            break;
          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 8]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var editUser = function editUser(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var hasPasswordFromBcrypt, user;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            hasPasswordFromBcrypt = ''; // check id
            if (!data.id) {
              resolve({
                errCode: 1,
                errMessage: "Missing required parameter ('id' field is empty)!"
              });
            }
            // find user by id
            _context7.next = 5;
            return _index["default"].User.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 5:
            user = _context7.sent;
            if (!user) {
              _context7.next = 21;
              break;
            }
            user.id = data.id;
            user.email = data.email;
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.phoneNumber = data.phoneNumber;
            user.address = data.address;
            user.gender = data.gender;
            user.roleId = data.roleId;
            user.positionId = data.positionId;
            if (data.avatar) {
              user.avatar = data.avatar;
            }
            _context7.next = 19;
            return user.save();
          case 19:
            _context7.next = 22;
            break;
          case 21:
            resolve({
              errCode: 2,
              errMessage: 'User is not found!'
            });
          case 22:
            resolve({
              errCode: 0,
              errMessage: 'Created a new user successfully!'
            });
            _context7.next = 28;
            break;
          case 25:
            _context7.prev = 25;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 28:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 25]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getAllCodeService = function getAllCodeService(typeInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var res, allcode;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (typeInput) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing require parameters!'
            });
            _context8.next = 12;
            break;
          case 5:
            res = {};
            _context8.next = 8;
            return _index["default"].Allcode.findAll({
              where: {
                type: typeInput
              }
            });
          case 8:
            allcode = _context8.sent;
            res.errCode = 0;
            res.data = allcode;
            resolve(res);
          case 12:
            _context8.next = 17;
            break;
          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 17:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 14]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var getTopDoctorHomeService = function getTopDoctorHomeService(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var res, topDoctor;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (limitInput) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing require parameters!'
            });
            _context9.next = 12;
            break;
          case 5:
            res = {};
            _context9.next = 8;
            return _index["default"].User.findAll({
              raw: true,
              nest: true,
              where: {
                roleId: 'R2'
              },
              attributes: {
                exclude: ['password']
              },
              limit: limitInput,
              order: [['createdAt', 'DESC']],
              include: [{
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'genderData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Doctor_Info,
                attributes: ['specialtyId'],
                include: [{
                  model: _index["default"].Specialty,
                  attributes: ['nameVi']
                }]
              }]
            });
          case 8:
            topDoctor = _context9.sent;
            res.errCode = 0;
            res.topDoctor = topDoctor;
            resolve(res);
          case 12:
            _context9.next = 17;
            break;
          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 17:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 14]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var getAllDoctorService = function getAllDoctorService() {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var res, allDoctor;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            res = {};
            _context10.next = 4;
            return _index["default"].User.findAll({
              raw: true,
              nest: true,
              where: {
                roleId: 'R2'
              },
              attributes: {
                exclude: ['password', 'avatar']
              },
              order: [['createdAt', 'DESC']],
              include: [{
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'genderData',
                attributes: ['valueEn', 'valueVi']
              }]
            });
          case 4:
            allDoctor = _context10.sent;
            res.errCode = 0;
            res.allDoctor = allDoctor;
            resolve(res);
            _context10.next = 13;
            break;
          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 13:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 10]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var postInfoDoctorService = function postInfoDoctorService(inputData) {
  return new Promise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            if (!(!inputData.id || !inputData.contentHTML || !inputData.contentMarkdown || !inputData.priceId || !inputData.provinceId || !inputData.paymentId || !inputData.specialtyId || !inputData.clinicId)) {
              _context11.next = 5;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: 'Missing parameter!'
            });
            _context11.next = 10;
            break;
          case 5:
            _context11.next = 7;
            return _index["default"].Markdown.create({
              contentHTML: inputData.contentHTML,
              contentMarkdown: inputData.contentMarkdown,
              description: inputData.description,
              doctorId: inputData.id
            });
          case 7:
            _context11.next = 9;
            return _index["default"].Doctor_Info.create({
              doctorId: inputData.id,
              priceId: inputData.priceId,
              provinceId: inputData.provinceId,
              paymentId: inputData.paymentId,
              addressClinic: inputData.addressClinic,
              nameClinic: inputData.nameClinic,
              note: inputData.note,
              specialtyId: +inputData.specialtyId,
              clinicId: +inputData.clinicId
            });
          case 9:
            resolve({
              errCode: 0,
              errMessage: 'Add info doctor successfully!'
            });
          case 10:
            _context11.next = 16;
            break;
          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            resolve({
              errCode: -1,
              errMessage: 'Missing parameter!'
            });
          case 16:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 12]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var getDetailDoctorService = function getDetailDoctorService(id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (id) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: 'Missing parameter!'
            });
            _context12.next = 11;
            break;
          case 5:
            _context12.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: id
              },
              attributes: {
                exclude: ['password']
              },
              include: [{
                model: _index["default"].Markdown,
                attributes: ['description', 'contentMarkdown', 'contentHTML']
              }, {
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Doctor_Info,
                attributes: {
                  exclude: ['id', 'doctorId']
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'priceTypeData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'provinceTypeData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'paymentTypeData',
                  attributes: ['valueEn', 'valueVi']
                }]
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context12.sent;
            if (data && data.avatar) {
              data.avatar = Buffer.from(data.avatar, 'base64').toString('binary');
            }
            if (!data) {
              data = {};
            }
            resolve({
              errCode: 0,
              errMessage: 'Add info doctor successfully!',
              data: data
            });
          case 11:
            _context12.next = 17;
            break;
          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);
            resolve({
              errCode: -1,
              errMessage: 'Missing parameter!'
            });
          case 17:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 13]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var updateDetailInfoDoctorService = function updateDetailInfoDoctorService(inputData) {
  return new Promise( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var doctorMarkdown, doctorInfo;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            if (!(!inputData.id || !inputData.contentHTML || !inputData.contentMarkdown || !inputData.description || !inputData.priceId || !inputData.provinceId || !inputData.paymentId || !inputData.nameClinic || !inputData.addressClinic || !inputData.clinicId)) {
              _context13.next = 5;
              break;
            }
            resolve({
              errCode: -1,
              errMessage: 'Missing parameter!'
            });
            _context13.next = 37;
            break;
          case 5:
            _context13.next = 7;
            return _index["default"].Markdown.findOne({
              where: {
                doctorId: inputData.id
              },
              raw: false
            });
          case 7:
            doctorMarkdown = _context13.sent;
            if (!doctorMarkdown) {
              _context13.next = 35;
              break;
            }
            doctorMarkdown.contentHTML = inputData.contentHTML;
            doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
            doctorMarkdown.description = inputData.description;
            _context13.next = 14;
            return doctorMarkdown.save();
          case 14:
            _context13.next = 16;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: inputData.id
              },
              raw: false
            });
          case 16:
            doctorInfo = _context13.sent;
            if (!doctorInfo) {
              _context13.next = 31;
              break;
            }
            doctorInfo.doctorId = inputData.id;
            doctorInfo.priceId = inputData.priceId;
            doctorInfo.provinceId = inputData.provinceId;
            doctorInfo.paymentId = inputData.paymentId;
            doctorInfo.addressClinic = inputData.addressClinic;
            doctorInfo.nameClinic = inputData.nameClinic;
            doctorInfo.note = inputData.note;
            doctorInfo.specialtyId = +inputData.specialtyId;
            doctorInfo.clinicId = +inputData.clinicId;
            _context13.next = 29;
            return doctorInfo.save();
          case 29:
            _context13.next = 33;
            break;
          case 31:
            _context13.next = 33;
            return _index["default"].Doctor_Info.create({
              doctorId: inputData.id,
              priceId: inputData.priceId,
              provinceId: inputData.provinceId,
              paymentId: inputData.paymentId,
              addressClinic: inputData.addressClinic,
              nameClinic: inputData.nameClinic,
              note: inputData.note,
              specialtyId: +inputData.specialtyId,
              clinicId: +inputData.clinicId
            });
          case 33:
            _context13.next = 36;
            break;
          case 35:
            resolve({
              errCode: 2,
              errMessage: 'Doctor markdown is not found!'
            });
          case 36:
            resolve({
              errCode: 0,
              errMessage: 'Created a new user successfully!'
            });
          case 37:
            _context13.next = 43;
            break;
          case 39:
            _context13.prev = 39;
            _context13.t0 = _context13["catch"](0);
            console.log(_context13.t0);
            resolve({
              errCode: -1,
              errMessage: 'Missing parameter!'
            });
          case 43:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 39]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  editUser: editUser,
  getAllCodeService: getAllCodeService,
  getTopDoctorHomeService: getTopDoctorHomeService,
  getAllDoctorService: getAllDoctorService,
  postInfoDoctorService: postInfoDoctorService,
  getDetailDoctorService: getDetailDoctorService,
  updateDetailInfoDoctorService: updateDetailInfoDoctorService
};