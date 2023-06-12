const takeFirstAndLastCharOfAString = (string: string) => string.slice(1, -1);

export const parseStringToMarkdownJson = (content: string) =>
  JSON.parse(takeFirstAndLastCharOfAString(content));

export default parseStringToMarkdownJson;
