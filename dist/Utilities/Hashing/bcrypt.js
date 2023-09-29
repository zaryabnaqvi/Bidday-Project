"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.encodePassword = void 0;
const bcrypt = require("bcrypt");
function encodePassword(password) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}
exports.encodePassword = encodePassword;
function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
    ;
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=bcrypt.js.map