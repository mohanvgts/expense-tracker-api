import { Elysia } from "elysia";
import { connectDB } from "./config/db";
import { masterRoutes } from "./routes/master";
const app = new Elysia();
const { PORT, MONGO_URI } = Bun.env;
connectDB(MONGO_URI);
app.use(masterRoutes)
app.listen(PORT, () => {
  try{
    console.log(`Server listining on PORT:${PORT}`);
  } catch(err){
    console.log(err);
    
  }
});
