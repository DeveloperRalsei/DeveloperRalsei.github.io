export const learnMyAge = () => {
  const today = new Date().getTime();
  const birthday = new Date(2006, 3, 11).getTime();

  const age = Math.floor((today - birthday) / (1000 * 60 * 60 * 24 * 365));

  return age;
};
