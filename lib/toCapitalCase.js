const toCapitalCase = name => {
  return name
    .replace(".svg", "")
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("");
};

export default toCapitalCase;
