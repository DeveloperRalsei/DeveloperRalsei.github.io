export const BIRTHDAY_DATE = new Date(2006, 3, 11),
    IS_TODAY_MYBIRTHDAY = new Date().getDay() == 11,
    IS_BIRTHDAY_EVENT_ACTIVE =
        import.meta.env.DEV || BIRTHDAY_DATE.getTime() > Date.now();

const today = new Date();
const age = today.getFullYear() - BIRTHDAY_DATE.getFullYear();
const ageInMonths = today.getMonth() - BIRTHDAY_DATE.getMonth();
const correctedAge = age - (ageInMonths < 0 ? 1 : 0);

export const MY_AGE = correctedAge;
