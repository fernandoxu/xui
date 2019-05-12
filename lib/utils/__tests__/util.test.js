import { classnames, scopedClassCreator } from '../index'

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

describe('scopedClassCreator', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassCreator('gu-layout')
    expect(sc('')).toEqual('gu-layout')
    expect(sc('x')).toEqual('gu-layout-x')
    expect(sc({ y: true, z: false })).toEqual('gu-layout-y')
    expect(sc({ y: true, z: true })).toEqual('gu-layout-y gu-layout-z')
    expect(sc({ y: true, z: true }, { extra: 'red' })).toEqual(
      'gu-layout-y gu-layout-z red'
    )
  })
})
