import { capitalize } from './capitalize';
import { expect } from 'chai';

describe('capitalize()', () => {
  it('should capitalize a single word', () => {
    expect(capitalize('foo')).equal('Foo');
  });
});
