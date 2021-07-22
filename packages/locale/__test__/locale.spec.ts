import { t, use  } from '../index'
import zhCn from '../lang/zh-cn'
import en from '../lang/en'

describe('Locale', () => {
  test('t', () => {
    expect(t('hkust.demo')).toBe('demo')
  })

  test('return key name if not defined', () => {
    expect(t('hkust.something')).toBeUndefined()
  })

  test('use', () => {
    use(zhCn)
    expect(t('hkust.demo')).toBe('用例')
    use(en)
  })
})
