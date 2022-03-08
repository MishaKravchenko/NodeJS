"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/users', async (req, res) => {
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find();
    console.log(users);
    res.json(users);
    // const users = await getManager().getRepository(User).findOne();
    // console.log(users);
    // res.json(users);
    // const users = await getManager().getRepository(User).find({ relations: ['posts'] });
    // res.json(users);
    // const users = await getManager().getRepository(User)
    //     .createQueryBuilder('user')
    //     .where('user.firstName = "Jaha"')
    //     .getOne();
    //
    // console.log(users);
    // res.json(users);
    //     const users = await getManager().getRepository(User)
    //         .createQueryBuilder('user')
    //         .leftJoin('Posts', 'posts', 'posts.userId = user.id')
    //         .where('posts.text = "asdas"')
    //         .getMany();
    //     res.json(users);
});
app.post('/users', async (req, res) => {
    console.log(req.body);
    const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User).save(req.body);
    res.json(createdUser);
});
app.listen(5500, async () => {
    console.log('Server has started!!!!');
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (err) {
        if (err)
            console.log(err);
    }
});
//# sourceMappingURL=app.js.map