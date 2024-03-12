export default function cleanSet(set, startString) {
  return [...set].filter((element) => element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
}
