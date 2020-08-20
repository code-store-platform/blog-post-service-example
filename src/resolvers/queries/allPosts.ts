import { logger, Resolver } from 'codestore-utils';
import Post from '../../data/entities/Post';

const resolver: Resolver = async (parent, args, context, info) => {
    logger.log('This is a allPosts resolver!', 'allPosts');
    const postRepository = context.db.connection.getRepository(Post);

    return postRepository.find();
}

export default resolver;
