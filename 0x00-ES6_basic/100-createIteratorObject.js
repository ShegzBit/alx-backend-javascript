export default function createIteratorObject(report) {
  const keys = Object.getOwnPropertyNames(report.allEmployees);
  const departmentList = report.allEmployees;
  return {
    ...report,
    [Symbol.iterator]() {
      return {
        currentKey: keys.shift(),
        next() {
          if (departmentList[this.currentKey].length === 0) { this.currentKey = keys.shift(); }
          if (!this.currentKey) {
            return { value: undefined, done: true };
          }
          return { value: departmentList[this.currentKey].shift(), done: false };
        },
      };
    },
  };
}
