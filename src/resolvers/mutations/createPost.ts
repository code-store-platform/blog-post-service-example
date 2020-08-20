import { logger, Resolver } from 'codestore-utils';
import Post from '../../data/entities/Post';

const resolver: Resolver = async (parent, args, context, info) => {
    logger.log('creating a new Post', 'createPost');

    const post = new Post();
    post.title = args.title;
    post.authorName = args.authorName;
    post.body = args.body;
    post.createdAt = new Date().toISOString();

    logger.log(post, 'createPost');

    // Getting a database connection
    const repository = context.db.connection.getRepository(Post);

    // Saving our first post entity
    return await repository.save(post);
}

export default resolver;
