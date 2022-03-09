import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/user';
import { Post } from './entity/post';
import { Comment } from './entity/comment';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async (req: Request, res: Response) => {
    // -1 example
    // const users = await getManager().getRepository(User)
    // .find({ relations: ['posts'] });
    // res.json(users);

    // -2 example
    // const users = await getManager().getRepository(User)
    // .findOne();
    // res.json(users);

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
    const users = await getManager().getRepository(User)
        .createQueryBuilder('user')
        .leftJoin('Posts', 'posts', 'posts.userId = user.id')
        .where('posts.text = "Karova"')
        .getMany();
    res.json(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const users = await getManager().getRepository(User)
        .createQueryBuilder('user')
        .where(`user.id=${Number(id)}`)
        .getOne();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const createdUser = await getManager().getRepository(User)
        .save(req.body);
    res.json(createdUser);
});

app.patch('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    const createdUser = await getManager().getRepository(User)
        .update({ id: Number(req.params.id) }, {
            password,
            email,
        });
    res.json(createdUser);
});

app.delete('/users/:id', async (req, res) => {
    const createdUser = await getManager().getRepository(User)
        .softDelete({ id: Number(req.params.id) });
    res.json(createdUser);
});

app.get('/posts', async (req: Request, res: Response) => {
    const posts = await getManager()
        .getRepository(Post)
        .find();
    res.json(posts);
});

app.get('/posts/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    const postsOfUser = await getManager()
        .getRepository(Post)
        .find({ userId: Number(userId) });
    res.json(postsOfUser);
});

app.patch('/posts/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    const users = await getManager()
        .getRepository(Post)
        .update({ userId: Number(userId) }, { text: req.body.text });
    res.json(users);
});

app.get('/comments/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params;
    const commentsOfUser = await getManager()
        .getRepository(Comment)
        .createQueryBuilder('comment')
        .where('comment.authorId = :id', { id: Number(userId) })
        .leftJoinAndSelect('comment.user', 'user')
        .leftJoinAndSelect('comment.post', 'post')
        .getMany();
    res.json(commentsOfUser);
});

app.patch('/comments/action', async (req: Request, res: Response) => {
    try {
        const {
            action,
            commentId,
        } = req.body;
        const comment = await getManager()
            .getRepository(Comment)
            .createQueryBuilder('comment')
            .where(`comment.id=${Number(commentId)}`)
            .getOne();

        if (!comment) {
            throw new Error('Wrong comment id');
        }
        if (action === 'like') {
            await getManager()
                .getRepository(Comment)
                .update(
                    { id: Number(commentId) },
                    { like: comment.like + 1 },
                );
        }
        if (action === 'dislike') {
            await getManager()
                .getRepository(Comment)
                .update({ id: Number(commentId) }, { dislike: comment.dislike + 1 });
        }

        res.sendStatus(201);
    } catch (e) {
        console.log(e);
    }
});

app.get('/comments', async (req: Request, res: Response) => {
    const commentsOfUser = await getManager()
        .getRepository(Comment)
        .find();
    res.json(commentsOfUser);
});

app.listen(5500, async () => {
    console.log('Server has started!!!!');

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (err) {
        if (err) console.log(err);
    }
});
