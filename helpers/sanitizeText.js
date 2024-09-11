export function convertToCamelCase(text) {
  const sanitizedText = text.replace(/[^a-zA-Z0-9\s-_]/g, "");

  return sanitizedText
    .split(/[\s-_]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");
}

export function capitalizeFirstLetters(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
