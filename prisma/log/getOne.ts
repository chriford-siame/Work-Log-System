import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

const logFetchOne = async (id: string) => {
    const log = await client.log.findUnique({
        where: {
            id: id
        }
    })
    return log
}
export default logFetchOne;
