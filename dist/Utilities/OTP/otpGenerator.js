"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAge = exports.generateOtpCode = void 0;
const otp = require("otp-generator");
const generateOtpCode = (len) => {
    let otpCode = otp.generate(len, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    return otpCode;
};
exports.generateOtpCode = generateOtpCode;
const calculateAge = (yearBorn) => {
    const currentYear = new Date().getFullYear();
    const birthYear = parseFloat(yearBorn);
    if (isNaN(birthYear)) {
        return 'Invalid input. Please provide a valid year.';
    }
    const age = currentYear - birthYear;
    return age.toString();
};
exports.calculateAge = calculateAge;
//# sourceMappingURL=otpGenerator.js.map