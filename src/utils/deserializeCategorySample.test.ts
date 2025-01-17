import { HKCategorySampleRaw, HKCategoryTypeIdentifier } from '../types'
import deserializeCategorySample from './deserializeCategorySample'

describe('deserializeCategorySample', () => {
  it('should deserialize category sample', () => {
    const sample: HKCategorySampleRaw = {
      startDate: '2020-01-01T00:00:00.000Z',
      endDate: '2020-01-01T00:00:00.000Z',
      value: 1,
      categoryType: HKCategoryTypeIdentifier.sexualActivity,
      metadata: {},
      uuid: 'uuid',
    }

    expect(deserializeCategorySample(sample)).toEqual({
      ...sample,
      startDate: new Date('2020-01-01T00:00:00.000Z'),
      endDate: new Date('2020-01-01T00:00:00.000Z'),
    })
  })
})
