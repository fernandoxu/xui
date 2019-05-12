export const classnames = (...names: (string | undefined)[]) =>
  names.filter(v => Boolean(v)).join(' ')
interface Options {
  extra: string | undefined
}
interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

export const scopedClassCreator = (prefix: string) => (
  name: string | ClassToggles,
  options?: Options
) =>
  Object.entries(name instanceof Object ? name : { [name]: name })
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => [prefix, name].filter(Boolean).join('-'))
    .concat((options && options.extra) || [])
    .join(' ')
