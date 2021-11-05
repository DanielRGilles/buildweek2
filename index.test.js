const getMethod = require('./index')
describe('test exponent function', () => {
    it('returns the method from the raw request', () => {
      const rawRequest = `
      GET / HTTP/1.1
      Host: example.com
      Accept-Language: us-en`;
      const method = getMethod(rawRequest);

      expect(method).toEqual('GET');
    });
});