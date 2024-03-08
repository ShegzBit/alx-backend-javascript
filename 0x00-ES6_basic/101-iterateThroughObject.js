export default function iterateThroughObject(reportWithIterator) {
  return (Array.from(reportWithIterator).map((employee) => employee)).join(' | ');
}
