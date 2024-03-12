import { Solution } from '../src/solution/index.js';

describe('randomListGenerator()', () => {
  const s = new Solution();

  it('should return NaN on "a"', () => {
    expect(s.randomListGenerator('a')).toBeNaN();
  });

  it('should return NaN for empty array', () => {
    expect(s.randomListGenerator([])).toBeNaN();
  });

  it('should return NaN for array with values', () => {
    expect(s.randomListGenerator([1, 2, 3])).toBeNaN();
  });

  it('should return length of 0', () => {
    expect(s.randomListGenerator(0)).toHaveLength(0);
  });

  it('should return length of 1', () => {
    expect(s.randomListGenerator(1)).toHaveLength(1);
  });

  it('should return length of 10000', () => {
    expect(s.randomListGenerator(10000)).toHaveLength(10000);
  });

  it('should contain number 10000', () => {
    expect(s.randomListGenerator(10000)).toContain(10000);
  });

  it('should contain number 1', () => {
    expect(s.randomListGenerator(10000)).toContain(1);
  });

  it('should NOT contain number 0', () => {
    expect(s.randomListGenerator(10000)).not.toContain(0);
  });

  it('should NOT contain number 10001', () => {
    expect(s.randomListGenerator(10000)).not.toContain(10001);
  });

  it('should contain unique items and be the same size', () => {
    // Could potentially create custom matcher for jest to handle receiving data and checking logic. Out of scope.
    const list = s.randomListGenerator(10000);
    const set = new Set(list);
    expect(list.length).toEqual(set.size);
  });
});
