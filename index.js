const getMethod = (Rawrequest) => {
  const parseRequest = Rawrequest.split('\r');
  console.log(parseRequest);
  const [method, path] = parseRequest[0].split(' ') ;
  console.log(method, path);
  return method;
};
module.exports = getMethod;
