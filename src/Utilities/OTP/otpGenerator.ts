import * as otp from 'otp-generator';

export const generateOtpCode = (len: number): string => {
  let otpCode = otp.generate(len, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  return otpCode;
};

export const calculateAge = (yearBorn: string) => {
  const currentYear = new Date().getFullYear();
  const birthYear = parseFloat(yearBorn)
  if (isNaN(birthYear)) {
    return 'Invalid input. Please provide a valid year.';
  }

  const age = currentYear - birthYear;
  return age.toString();
};
