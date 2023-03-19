import prisma  from 'libs/prisma'

type CreateRequest = {
    name: string
    email: string
    firebaseId: string
}

export async function createUser (request: CreateRequest){
    const { name, email, firebaseId } = request

    await prisma.user.create({ data: {
        name,
        email,
        firebaseId
    }})
}