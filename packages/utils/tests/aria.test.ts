import { triggerEvent } from '../aria'

describe('Aria Utils', () => {
  describe('Trigger Event', () => {
    it('Util trigger event to trigger event correctly', () => {
      const div = document.createElement('div')
      jest.spyOn(div, 'dispatchEvent')
      const eventName = 'click'
      triggerEvent(div, eventName)
      expect(div.dispatchEvent).toHaveBeenCalled()
    })
  })

})
