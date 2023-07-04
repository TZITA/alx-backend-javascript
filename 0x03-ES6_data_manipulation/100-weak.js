export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const counter = weakMap.get(endpoint) || 0;

  if (counter >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, counter + 1);
}
