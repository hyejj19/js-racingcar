import { Car } from '../src/model/Car'

const CAR_NAME = '산들'

describe('Car: 한 대의 자동차', () => {
  it('name: 이름을 가지고 있다.', () => {
    const car = new Car(CAR_NAME)
    expect(car.name).toEqual(CAR_NAME)
  })

  describe('move: 전진 여부에 따라 차의 위치를 변경한다.', () => {
    const car = new Car(CAR_NAME)
    test.each([
      [true, 1],
      [true, 2],
      [false, 2],
    ])('car.move(%s) -> car.position = %s', (isMove, expected) => {
      car.move(isMove)
      expect(car.position).toEqual(expected)
    })
  })
})

describe(`이름이 한글/영문 1~5글자가 아니면 에러를 출력한다.`, () => {
  test.each([
    ['', false],
    [-1, false],
    [1, false],
    ['*', false],
    ['-', false],
    ['+', false],
    [null, false],
    [undefined, false],
    [[], false],
    [{}, false],
    [new Car('뿌꾸'), false],
    ['산들', true],
    ['xand', true],
    ['산들뿌꾸천둥', false],
    ['xander', false],
  ])('new Car(%s) => %s', (carName, isValid) => {
    if (isValid) {
      const car = new Car(carName)
      expect(car.name).toEqual(carName)
    } else {
      expect(() => new Car(carName)).toThrow()
    }
  })
})
