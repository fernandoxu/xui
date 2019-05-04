import classnames from '../classnames'

describe('classnames', () => {
  it('接收1个classname', () => {
    const result = classnames('a')
    expect(result).toEqual('a')
  })

  it('接收2个classname', () => {
    const result = classnames('a', 'b')
    expect(result).toEqual('a b')
  })

  it('接收undefined，结果不会出现undefined', () => {
    const result = classnames('a', undefined)
    expect(result).toEqual('a')
  })

  it('接收不合法的值', () => {
    const result = classnames('a', undefined, null, '中文')
    expect(result).toEqual('a 中文')
  })

  it('接收0个参数', () => {
    const result = classnames()
    expect(result).toEqual('')
  })
})
