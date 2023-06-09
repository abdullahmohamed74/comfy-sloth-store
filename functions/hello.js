// domain/.netlify/functions/hello

const items = [
  { id: 1, name: 'ali' },
  { id: 2, name: 'mohamed' },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
    // body: 'hello world',
  };
};
