export const bandNameUpdate = (bandName: string): string => {
  // replacing special characters as per API description
  let bandArr = bandName.split("");
  const slashIndex = bandArr.findIndex(char => char === "/");
  slashIndex !== -1 && (bandArr[slashIndex] = "%252F");
  const qmIndex = bandArr.findIndex(char => char === "?");
  qmIndex !== -1 && (bandArr[qmIndex] = "%253F");
  const starIndex = bandArr.findIndex(char => char === "*");
  starIndex !== -1 && (bandArr[starIndex] = "%252A");
  const quoteIndex = bandArr.findIndex(char => char === '"');
  quoteIndex !== -1 && (bandArr[quoteIndex] = "%27C");
  const bandNameUpdated = bandArr.join("");
  return bandNameUpdated;
};
