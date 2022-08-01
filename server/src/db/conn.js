const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/zostelclone", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
    console.log(e);
})