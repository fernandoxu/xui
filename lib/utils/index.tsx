export const classnames = (...names: (string | undefined)[]) =>
  names.filter(v => Boolean(v)).join(' ')

export const scopedClassCreator = (prefix: string) => (name: string) =>
  [prefix, name].filter(Boolean).join('-')
