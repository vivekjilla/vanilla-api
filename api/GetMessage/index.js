module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API PR env "+ process.env.USER_ID + "," + process.env.Zoro + "," + process.env.hello },
  };
};
