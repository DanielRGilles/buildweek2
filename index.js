module.exports = (Rawrequest) => {
  const [method] = Rawrequest.split(' ');
  return method;
};

