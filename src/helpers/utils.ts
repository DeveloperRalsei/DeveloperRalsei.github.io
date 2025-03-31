export const learnMyAge = () => {
    const today = new Date().getTime();
    const birthday = new Date("2006-04-11").getTime();

    return Math.floor((today - birthday) / (1000 * 60 * 60 * 24 * 365));
};

export const wait = (milliseconds: number) =>
    Promise.resolve(
        new Promise((resolve) => setTimeout(resolve, milliseconds)),
    );
