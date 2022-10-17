module.exports = async function (context, req) {
  
  const value = process.env.Zoro;
  const responseMessage = "Zoro:"+value;
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API, "+ responseMessage },
  };
};
