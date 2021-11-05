const getMethod = require('./index');
describe('test exponent function', () => {
  it('returns the method from the raw request', () => {
    const rawRequest = `GET / HTTP/1.1\r
Host: example.com\r
Accept-Language: us-en\r`;
    const method = getMethod(rawRequest);

    expect(method).toEqual('GET');
  });

  it('returns the method from the raw request', () => {
    const rawRequest = `POST / HTTP/1.1\r
Host: example.com\r
Accept-Language: us-en\r`;
    const method = getMethod(rawRequest);

    expect(method).toEqual('POST');
  });
  
  it('returns the method from the raw request', () => {
    const rawRequest = `DELETE / HTTP/1.1\r
Host: example.com\r
Accept-Language: us-en\r`;
    const method = getMethod(rawRequest);

    expect(method).toEqual('DELETE');
  });
});
