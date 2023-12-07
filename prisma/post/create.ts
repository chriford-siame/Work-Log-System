import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

// TODO: create an API and make use of this create queryset
const PostCreate = async () => {
    const post = await client.post.create({
        data: {
            title: 'First Blog',
            content: 'What a pleasant moment of writing a blog app',
            published: true,
        }
    })
    return post
}
