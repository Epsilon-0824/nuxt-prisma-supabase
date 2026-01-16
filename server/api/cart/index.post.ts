export default defineEventHandler((event) => {
    return {
        statusCode: 201,
        meassage: 'POST request to /api/cart'
    }
})