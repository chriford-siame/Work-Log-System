import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

const logFetchAll = async () => {
    const logs = await client.log.findMany()
    return logs
}
export default logFetchAll;
