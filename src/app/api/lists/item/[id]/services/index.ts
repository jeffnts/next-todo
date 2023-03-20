import prisma  from 'libs/prisma'

export async function removeItem(id: string){
    await prisma.item.delete({
        where: {
            id
        }
    })
}