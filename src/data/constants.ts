import { learnAge } from "@/helpers/utils";

export const BIRTHDAY_DATE = new Date("2025-04-11"),
    IS_TODAY_MYBIRTHDAY = new Date().getDay() == 11,
    MY_AGE = learnAge(new Date("2006-04-11")),
    IS_BIRTHDAY_EVENT_ACTIVE =
        import.meta.env.DEV ?? new Date() < new Date("2025-04-12");
