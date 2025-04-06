export const learnAge = (dob: Date): number => {
    const now = new Date();

    let age = now.getUTCFullYear() - dob.getUTCFullYear();

    const hasBirthdayPassed =
        now.getUTCMonth() > dob.getUTCMonth() ||
        (now.getUTCMonth() === dob.getUTCMonth() &&
            now.getUTCDate() >= dob.getUTCDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    return age;
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
