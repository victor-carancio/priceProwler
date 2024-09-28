export const capitalizeEachWord = (sentence: string) => {
  return sentence
    .toLowerCase() // Convertir todo a minúsculas
    .replace(/\b\w/g, (match) => match.toUpperCase()); // Convertir la primera letra de cada palabra
};

export const Months: { [key: string]: string } = {
  "0": "enero",
  "1": "febrero",
  "2": "marzo",
  "3": "abril",
  "4": "mayo",
  "5": "junio",
  "6": "julio",
  "7": "agosto",
  "8": "septiembre",
  "9": "octubre",
  "10": "noviembre",
  "11": "diciembre",
};
