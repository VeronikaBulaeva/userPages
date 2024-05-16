import express from 'express'
import path from "path";
import router from './router.js'
const app = express();
const port = 3000;

app.use('/userPages', express.static(path.join(process.cwd())))
app.use('/userPages', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});