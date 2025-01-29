export const
    IS_BIRTHDAY_EVENT_ACTIVE = (function () {
        // if (import.meta.env.DEV) return true
        if (new Date().getDate() === 11 && new Date().getMonth() === 0) return true
        return false
    })(),

    BIRTHDAY_DATE = new Date(2006, 3, 11)

const today = new Date();
const age = today.getFullYear() - BIRTHDAY_DATE.getFullYear();
const ageInMonths = today.getMonth() - BIRTHDAY_DATE.getMonth();
const correctedAge = age - (ageInMonths < 0 ? 1 : 0);

export const MY_AGE = correctedAge;
