import prisma  from 'libs/prisma'

type CheckListItemRequest = {
    id: string,
    isChecked: boolean
}

export async function checkListItem(request: CheckListItemRequest){
    const { id, isChecked } = request

    const item: any = await prisma.item.update({
        where: {
            id
        },
        data: {
            isChecked
        },
        select: {
            isChecked: true
        }
    })

    return item.isChecked
}

export async function removeItem(id: string){
    await prisma.item.delete({
        where: {
            id
        }
    })
}