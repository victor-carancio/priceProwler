export const capitalizeEachWord = (sentence: string) => {
  return sentence
    .toLowerCase() // Convertir todo a minúsculas
    .replace(/\b\w/g, (match) => match.toUpperCase()); // Convertir la primera letra de cada palabra
};
