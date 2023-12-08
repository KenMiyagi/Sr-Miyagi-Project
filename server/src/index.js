const server = require("./app");
const { conn } = require("./db");
const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening on PORT ${PORT}`);
  });
});

//HOLAHOLA
