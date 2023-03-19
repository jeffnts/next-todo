import prisma  from 'libs/prisma'

export async function showList(id: string, userId?: string){    
    return prisma.list.findFirst({
        where: {
            id,
            AND: {
                userIDs: {
                    has: userId
                }
            }
        },
        select: {
            id: true,
            name: true,
            items: {
                select: {
                    id: true,
                    name: true,
                    isChecked: true
                }
            }
        }
    })
}

type CreateItemRequest = {
    id: any
    name: string
    userId?: any
}

export async function createListItem(request: CreateItemRequest){
    const { id, name } = request

    const item: any = await prisma.item.create({
        data: {
            name,
            listId: id
        },
        select: {
            id: true
        }
    })

    return {
        id: item.id,
        name
    }
}


export async function removeList(id: string){
    await prisma.list.delete({
        where: {
            id
        }
    })
}