export default function cleanSet(set, startString) {
  if (startString === '' || typeof (startString) !== 'string') { return ''; }
  return [...set].filter((str) => str.startsWith(startString) && typeof (str) === 'string')
    .map((element) => element.slice(startString.length))
    .join('-');
}
