module.exports = async function (context, req) {
  context.res = {
    const value = process.env.Zoro;
    const responseMessage = "Zoro:"+value;
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API, "+ responseMessage },
  };
};
