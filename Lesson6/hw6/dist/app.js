"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const post_1 = require("./entity/post");
const comment_1 = require("./entity/comment");
const apiRouter_1 = require("./router/apiRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(apiRouter_1.apiRouter);
app.get('/users', async (req, res) => {
    // -1 example
    // const users = await getManager().getRepository(User)
    // .find({ relations: ['posts'] });
    // res.json(users);
    // -2 example
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .find();
    res.json(users);
    // -3 example
    // const users = await getManager().getRepository(User)
    // .findOne({
    //     where: {
    //         firstName: 'Olena',
    //     },
    // });
    // res.json(users);
    // -4 example
    // const users = await getManager().getRepository(User)
    //     .createQueryBuilder('user')
    //     .where('user.firstName = "Jaha"')
    //     .getOne();
    // res.json(users);
    // -5 example
    // const users = await getManager().getRepository(User)
    //     .createQueryBuilder('user')
    //     .leftJoin('Posts', 'posts', 'posts.userId = user.id')
    //     .where('posts.text = "Karova"')
    //     .getMany();
    // res.json(users);
});
app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .createQueryBuilder('user')
        .where(`user.id=${Number(id)}`)
        .getOne();
    res.json(users);
});
// app.post('/users', async (req, res) => {
//     const createdUser = await getManager().getRepository(User)
//         .save(req.body);
//     res.json(createdUser);
// });
app.patch('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .update({ id: Number(req.params.id) }, {
        password,
        email,
    });
    res.json(createdUser);
});
app.delete('/users/:id', async (req, res) => {
    const createdUser = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .softDelete({ id: Number(req.params.id) });
    res.json(createdUser);
});
app.get('/posts', async (req, res) => {
    const posts = await (0, typeorm_1.getManager)()
        .getRepository(post_1.Post)
        .find();
    res.json(posts);
});
app.get('/posts/:userId', async (req, res) => {
    const { userId } = req.params;
    const postsOfUser = await (0, typeorm_1.getManager)()
        .getRepository(post_1.Post)
        .find({ userId: Number(userId) });
    res.json(postsOfUser);
});
app.patch('/posts/:userId', async (req, res) => {
    const { userId } = req.params;
    const users = await (0, typeorm_1.getManager)()
        .getRepository(post_1.Post)
        .update({ userId: Number(userId) }, { text: req.body.text });
    res.json(users);
});
app.get('/comments', async (req, res) => {
    const comments = await (0, typeorm_1.getManager)()
        .getRepository(comment_1.Comment)
        .find();
    res.json(comments);
});
app.get('/comments/:userId', async (req, res) => {
    const { userId } = req.params;
    const commentsOfUser = await (0, typeorm_1.getManager)()
        .getRepository(comment_1.Comment)
        .createQueryBuilder('comment')
        .where('comment.authorId = :id', { id: Number(userId) })
        .leftJoinAndSelect('comment.user', 'user')
        .leftJoinAndSelect('comment.post', 'post')
        .getMany();
    res.json(commentsOfUser);
});
app.patch('/comments/action', async (req, res) => {
    try {
        const { action, commentId, } = req.body;
        const comment = await (0, typeorm_1.getManager)()
            .getRepository(comment_1.Comment)
            .createQueryBuilder('comment')
            .where(`comment.id=${Number(commentId)}`)
            .getOne();
        if (!comment) {
            throw new Error('Wrong comment id');
        }
        if (action === 'like') {
            await (0, typeorm_1.getManager)()
                .getRepository(comment_1.Comment)
                .update({ id: Number(commentId) }, { like: comment.like + 1 });
        }
        if (action === 'dislike') {
            await (0, typeorm_1.getManager)()
                .getRepository(comment_1.Comment)
                .update({ id: Number(commentId) }, { dislike: comment.dislike + 1 });
        }
        res.sendStatus(201);
    }
    catch (e) {
        console.log(e);
    }
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