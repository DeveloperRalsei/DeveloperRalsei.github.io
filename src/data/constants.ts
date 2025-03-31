import { learnMyAge } from "@/helpers/utils";

export const BIRTHDAY_DATE = new Date("2025-04-11"),
    IS_TODAY_MYBIRTHDAY = new Date().getDay() == 11,
    IS_BIRTHDAY_EVENT_ACTIVE =
        import.meta.env.DEV || BIRTHDAY_DATE.getDay() === new Date().getDay(),
    MY_AGE = learnMyAge();
