function classnames(...names: (string | undefined)[]) {
  return names.filter(v => Boolean(v)).join(' ')
}

export default classnames
