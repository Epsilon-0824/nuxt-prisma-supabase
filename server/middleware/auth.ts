export default defineEventHandler((event) => {
    event.context.auth = {
        user: 'John',
        role: 'admin',
        permission: ['read', 'write']
    }

    console.log(event.context.auth)
})