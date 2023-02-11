const {sum1,sum2,fetchData} = require('./sum');

test('adding two numbers (unit test) ', () => {
  expect(sum1(1, 2)).toBe(3);
});

test('adding two numbers (integration test)', () => {
  expect(sum2(1)).toBe("adding 1 makes the sum 2");
});

test('adding two numbers directly (no external function is used here)', () => {
  expect(2+5).toBe(7);
});

/* test('testing in asynchronous function with success', async () => {
  await expect(fetchData()).resolves.toBe('success');
}); */

test('testing in asynchronous function with fail', async () => {
  await expect(fetchData()).rejects.toMatch('fail');
})