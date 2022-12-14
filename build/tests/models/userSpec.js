"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../../models/users");
var opertations = new users_1.usersStore();
describe('Index Function To Display All Users', function () {
    it('User Model Index Check', function () {
        expect(opertations.index).toBeDefined();
    });
});
describe('Show Function To Display A Specific User', function () {
    it('User Model Show Check', function () {
        expect(opertations.show).toBeDefined();
    });
});
describe('Register Function To Add A New User', function () {
    it('User Model Register Check ', function () {
        expect(opertations.register).toBeDefined();
    });
});
describe('Update Function To Update A User', function () {
    it('User Model Update Check ', function () {
        expect(opertations.update).toBeDefined();
    });
});
describe('Delete Function To Delete A Specific User', function () {
    it('User Model Delete Check', function () {
        expect(opertations.delete).toBeDefined();
    });
});
describe('Login Function To Login A Specific User', function () {
    it('User Model Login Check', function () {
        expect(opertations.login).toBeDefined();
    });
});
describe('Register Function To Add A New User', function () {
    it('User Model Register Test Working', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, opertations.register({
                        first_name: 'test',
                        last_name: 'test',
                        person_details: 'test',
                        username: 'test',
                        user_password: 'test',
                    })];
                case 1:
                    result = _a.sent();
                    expect(result).not.toBeFalsy();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Index Function To Display All Users', function () {
    it('User Model Index Test Working', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, opertations.index()];
                case 1:
                    result = _a.sent();
                    expect(result.length).toBeGreaterThanOrEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Show Function To Display A Specific User', function () {
    it('User Model Create Test Working ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = {
                        first_name: 'test',
                        last_name: 'test',
                        person_details: 'test',
                        username: 'test',
                        user_password: 'test',
                    };
                    return [4 /*yield*/, opertations.update(user, '1')];
                case 1:
                    result = _a.sent();
                    expect(result).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Delete Function To Delete A Specific User', function () {
    it('User Model Delete Check', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, opertations.delete('2')];
                case 1:
                    result = _a.sent();
                    expect(result).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
