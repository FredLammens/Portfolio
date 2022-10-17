/** does not mutate the given object */
export function removeEmptyAttributes<T>(
  obj: { [s: string]: T } | ArrayLike<T>,
): { [s: string]: T } | ArrayLike<T> {
  return Object.entries(obj)
    .filter(([, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
}
