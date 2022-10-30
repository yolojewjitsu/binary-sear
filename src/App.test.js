import { generateNumbers } from "./helpers/generateNumbers";
test('generate array of objects', () => {
  let sorted = true;
  const result = generateNumbers();
  expect(typeof result).toBe('object');
  expect(result).toHaveLength(56);
  for (let i = 1, j = 0; i < result.length; i++, j++) {
    if (result[i].number - result[j].number < 0) {
      sorted = false;
      break;
    }
  }
  expect(sorted).toBeTruthy();
  for (let i = 0; i < result.length; i++) {
    if (!result[i].active) {
      sorted = false;
      break;
    }
  }
  expect(sorted).toBeTruthy();
});