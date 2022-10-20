"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Logger_loggerLevel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerLevel = void 0;
const time_js_1 = __importDefault(require("./time.js"));
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["ALL"] = 0] = "ALL";
    LoggerLevel[LoggerLevel["TRACE"] = 1] = "TRACE";
    LoggerLevel[LoggerLevel["DEBUG"] = 2] = "DEBUG";
    LoggerLevel[LoggerLevel["INFO"] = 3] = "INFO";
    LoggerLevel[LoggerLevel["WARN"] = 4] = "WARN";
    LoggerLevel[LoggerLevel["ERROR"] = 5] = "ERROR";
    LoggerLevel[LoggerLevel["FATAL"] = 6] = "FATAL";
    LoggerLevel[LoggerLevel["MARK"] = 7] = "MARK";
    LoggerLevel[LoggerLevel["OFF"] = 8] = "OFF";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
(function (LoggerLevel) {
    function allowedLevel() {
        return Object.keys(LoggerLevel).filter(it => Number(it) >= 0);
    }
    LoggerLevel.allowedLevel = allowedLevel;
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
class Logger {
    constructor() {
        _Logger_loggerLevel.set(this, LoggerLevel.ALL);
    }
    get level() {
        return __classPrivateFieldGet(this, _Logger_loggerLevel, "f");
    }
    set level(level) {
        const SMALLEST_INDEX = 0;
        if (level >= SMALLEST_INDEX) {
            __classPrivateFieldSet(this, _Logger_loggerLevel, level, "f");
        }
        else {
            const errMsg = `日志等级 level 错误，只能设置为以下值：${LoggerLevel.allowedLevel().join(', ')}`;
            throw new Error(errMsg);
        }
    }
    static getTime() {
        const now = new time_js_1.default();
        return now.getFormattedTime();
    }
    isActive(currentLevel) {
        return currentLevel >= __classPrivateFieldGet(this, _Logger_loggerLevel, "f");
    }
    log(content) {
        const currentLevel = LoggerLevel.ALL;
        if (this.isActive(currentLevel)) {
            console.log(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
        }
    }
    debug(content) {
        const currentLevel = LoggerLevel.DEBUG;
        if (this.isActive(currentLevel)) {
            console.debug(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
        }
    }
    info(content) {
        const currentLevel = LoggerLevel.INFO;
        if (this.isActive(currentLevel)) {
            console.info(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
        }
    }
    warn(content) {
        const currentLevel = LoggerLevel.WARN;
        if (this.isActive(currentLevel)) {
            console.warn(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
        }
    }
    error(content) {
        const currentLevel = LoggerLevel.ERROR;
        if (this.isActive(currentLevel)) {
            console.error(`[${Logger.getTime()}] [${LoggerLevel[currentLevel]}] ${content}`);
        }
    }
}
exports.default = Logger;
_Logger_loggerLevel = new WeakMap();
//# sourceMappingURL=logger.js.map