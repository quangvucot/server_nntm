app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Origin",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  });