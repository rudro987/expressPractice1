import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {

  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);

    });
  } catch (error) {
    console.error(error);
  }
}

main().catch((err) => console.log(err));
