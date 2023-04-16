import prisma  from 'libs/prisma'


export async function getUser(id: string){
    return prisma.user.findFirst({
        where: {
            firebaseId: id
        },
        select: {
            name: true,
            email: true
        }
    })
}

type CreateUserRequest = {
    name: string
    email: string
    firebaseId: string 
}

export async function createUser (request: CreateUserRequest){
    const { name, email, firebaseId } = request

    await prisma.user.create({ data: {
        name,
        email,
        firebaseId
    }})
}

type UpdateUserRequest = {
    name: string
    email: string
    id: string
}

export async function updateUser (request: UpdateUserRequest){
    const { name, email, id } = request

    await prisma.user.update({
        where: {
            //@ts-ignore
            firebaseId: id,
        },
        data: {
            name,
            email,
            updatedAt: new Date()
        },
        select: {
            name: true,
            email: true
        }
    })
}