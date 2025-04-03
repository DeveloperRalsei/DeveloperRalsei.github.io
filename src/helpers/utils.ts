export const learnMyAge = () => {
    const today = new Date().getTime();
    const birthday = new Date("2006-04-11").getTime();

    return Math.floor((today - birthday) / (1000 * 60 * 60 * 24 * 365));
};

export const wait = (milliseconds: number) =>
    Promise.resolve(
        new Promise((resolve) => setTimeout(resolve, milliseconds)),
    );

export const getStars = async (projectName: string): Promise<number> => {
    try {
        const response = await fetch(
            `https://api.github.com/repos/developerRalsei/${projectName}`,
        );

        if (!response.ok) {
            return 0;
        }

        const data = await response.json();
        return data.stargazers_count ?? 0;
    } catch (error) {
        console.error("GitHub API isteği başarısız oldu:", error);
        return 0;
    }
};
