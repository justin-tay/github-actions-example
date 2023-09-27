import get from './get';

describe('get', () => {
  it('should return', () => {
    const result = get();
    expect(result).toBe('a');
  });
});
