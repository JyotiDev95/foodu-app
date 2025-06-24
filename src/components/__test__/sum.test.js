import sum from '../sum';

test('sum function should calculate the sum', () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
