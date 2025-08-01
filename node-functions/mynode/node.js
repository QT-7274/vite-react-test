export function onRequest({request}) {

  const process = process.env;
  return new Response('response from node, process.env: ' + JSON.stringify(process), {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}