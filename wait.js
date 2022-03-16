const wait = async function (event) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Thanks for waiting!",
      },
      null,
      2
    ),
  };
};

module.exports = { wait };
