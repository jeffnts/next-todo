import prisma  from 'libs/prisma'

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
            firebaseId: id,
        },
        data: {
            name,
            email
        },
        select: {
            name: true,
            email: true
        }
    })
}