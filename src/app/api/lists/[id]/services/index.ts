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
