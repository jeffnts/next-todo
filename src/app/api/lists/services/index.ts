import prisma  from 'libs/prisma'

type CreateListRequest = {
    name: string
    users: any
}

export async function createList(request: CreateListRequest){
    const { name, users } = request

    return prisma.list.create({
        data: {
            name,
            userIDs: users
        },
        select: {
            id: true,
            name: true,
            users: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

export async function listLists(userId: string){
    return prisma.list.findMany({
        where: {
            userIDs: {
                has: userId
            }
        },
        select: {
            id: true,
            name: true,
            users: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}
