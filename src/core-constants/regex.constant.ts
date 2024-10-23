export class RegEx {
  static businessName = /^[a-zA-Z0-9_\-()$*]+( [a-zA-Z0-9_\-()$*]+)*$/;
  static email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  static password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  static accountMaskingUpto12Digits = /^[0-9\b]+$/;
  static singleDigit = /^\d$/;
  static businessLanguage = /^[ -~]+$/;
  static mPin = /^(\d)(?!\1+$)\d{3}$/;
  static vpaID = /^[a-zA-Z0-9.-]{5,30}$/;
  static ifsc = /^[A-Za-z]{4}0[A-Za-z0-9]{6}$/;
  static accountno = /^[a-zA-Z0-9]+$/;
  static alphabetNumberwithspaceandhypon = /^[a-zA-Z0-9 -]+$/;
  static pinCode = /^[a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]*$/;
  static vpaValidation = /^[A-Za-z0-9.\-_]+$/;
  static upiId = /^\w{3,}@[a-zA-Z]{3,}/;
  static pan = /^[A-Z]{5}[A-Z][\d]{4}[A-Z]/;
  static payeePan = /^[A-Z]{5}[\d]{4}[A-Z]{1}/;
  static tan = /^[A-Z]{4}\d{5}[A-Z]{1}/;
  static gst = /^\d{2}[A-Z]{3}[A-Z]\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
  static payeeGst = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}Z[\dA-Z]{1}$/;
  static qrDisplayName = /^(?!.* {2})[a-zA-Z\d ]{2,35}$/;
  static nameReg = /[^a-zA-Z. ]/;
  static onlyDigit = /^[0-9\b]+$/;
  static onlyDigitCopy = /^[0-9\b,]+$/;
  static addressRegex = /^[#/.0-9a-zA-Z\s{2,};-]+$/;
  static upiValidInput = /^[0-9a-zA-Z@]+$/;
  static email_valid_input = /^[.0-9a-zA-Z@]+$/;
  static billingName = /^[.0-9a-zA-Z\s{2, }]+$/;
  static payeeBillingName = /^(?!\d+$)[a-zA-Z0-9 ./&-]+$/;
  static payeeCityStateValidation = /^(?!\d+$)[a-zA-Z][a-zA-Z ./&-]*(?<!\s)$/;
  static payeeAddress = /^(?!.*(?:\s{2}|,{2}|\.{2}))[0-9a-zA-Z\s{2, } .,]+$/;
  static onlyDigitAlpha = /^[0-9a-zA-Z]+$/;
  static onlyZipAlpha = /^[0-9A-Z]+$/;
  static onlyDigitAlphaWithSpace = /^[0-9a-zA-Z ]+$/;
  static payeeName = /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 .&-/]*)?$/;
  static onlyAlpha = /^[a-zA-Z\s{2,} ]+$/;
  static onlyAlphabet = /^[a-zA-Z\s ]+$/;
  static searchRegex = /^[0-9a-zA-Z ,.]*$/;
  static masking = /[\d]/g;
  static expiryRegex = /^[2-9]$/;
  static emailAdminRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/;

  static amountRangeFromRegex = /^[1-9][\d]{0,6}$/;
  static amountRangeToRegex = /^[1-9][\d]{0,6}$/;

  static placeHolderRegex = /\$(.*?)\$/g;
  static tnsfrAmount = /^[0-9,.]+$/;
  static allowanceAmount = /^[0-9,]+$/;
  static dynamicQrAmount = /^[0-9.]+$/;
  static nonDigit = /[\D]/g;
  static emailDecode = /^(..)([^@]*)(..@.*)$/;
  static cardExpiryDate = /[\d]{2} \/ [\d]{2}/;
  static expiryDateRegex = /^(\d{2})\/(\d{4}|\d{2})$/;
  static monthRegex = /(0[1-9]|1[0-2])/;
  static remarkRegex = /^[0-9a-zA-Z. ]+$/;
  static filterAllow = /[0-9 ,]/g;
  static amount = /^[0-9,\b]+$/;
  static spaceRegex = /\s+/g;
  static websiteDomain =
    /^((http|https):\/\/)?(www\.)[a-zA-Z0-9_-]+(\.[a-zA-Z]+)$/gm;

  static addressProofNumber = /^(?![-/])[\w-/]+(?<![-/])$/;
  static addressProofNoWithSymbol = /^(?![-,/])[a-zA-Z0-9-,/]+([a-zA-Z0-9])$/;
  static validPinCode = /^[0-9\b]+$/;
  static dateFormat = /\d{4}-\d{2}-\d{2}/;
  static payeeNickname = /^[A-Za-z ]+$/;
  static nickname = /^(?!.* {2})[a-zA-Z0-9 ]*$/;
  static alfaSpace = /^[a-zA-Z\s]+$/;
  static atLeastOneNumber = /(?=\d)/;
  // static atLeastOneCharacter = /^[^a-zA-Z]*[a-zA-Z]+.*$/;
  static atLeastOneCharacter = /^(?=[^a-zA-Z]*[a-zA-Z])[^\r\n]*$/;
  static atleastOneSpecialCharacter = /(?=[!@#$%^*&])/;
  static atleastOneUpperCaseLetter = /[A-Z]/;
  static dashRegex = /-/g;
  static noOfPaymentsRegex = /^0.*/;
  static formValidationEmailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  static nameAsPerPan = /^[a-zA-Z. ]+$/;
  static roleName = /^[a-zA-Z0-9 -]+$/;
  static grpName = /^[a-zA-Z0-9 -]+$/;
  static hasZeroRegex = /^0+(?:\.0+)?$/;
  static websiteRegex =
    /^((http|https):\/\/)?(www\.)[a-zA-Z0-9_-]+(\.[a-zA-Z]+)$/;

  static numberAphaWithSpecialChar = /^[a-zA-Z0-9!@#$%^&*()_+=-{};:'<>,./?]*$/;
}
