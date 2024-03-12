export const weakMap = new WeakMap();

export function queryAPI(endpoint = { protocol: '', name: '' }) {
  if (weakMap.get(endpoint) === 5) { throw new Error('Endpoint load is high'); }
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);
}
