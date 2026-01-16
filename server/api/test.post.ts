export default defineEventHandler((event) => {
    return {
        statusCode: 201,
        meassage: 'Test POST Handler'
    }
})