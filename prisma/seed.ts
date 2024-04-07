import { prisma } from '../src/lib/prisma';

async function seed() {
    await prisma.events.create({
        data: {
            id: 'eec032c4-a4f5-49d0-8d4f-af9c16db945d',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código!',
            maximumAttendees: 120,
        }
    })

}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})