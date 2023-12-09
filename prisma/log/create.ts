import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

interface InterfaceLogCreate {
    date: Date;
    hours: number;
    note: string
}

const logCreate = async (log_object: InterfaceLogCreate) => {
    const log = await client.log.create({
        data: {
            date: log_object.date,
            hours: log_object.hours,
            note: log_object.note,
        }
    })
    return log
}
export default logCreate
