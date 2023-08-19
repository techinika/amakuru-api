import express from "express";
import bodyParser from "body-parser";
import routing from "./routes/index";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

app.use("/api/v1", routing);

app.all("*", (req:any, res:any, next:any) => {
  res.status(404).send({status: 404, message: "The resource you are looking for, is not available on this server."});
})

app.use((err:any, req:any, res:any, next:any) => {
  console.error({request: req, error: err.stack});
  res.status(500).send({status: 500, message: "Server error, try again!"})
})

export default app;
