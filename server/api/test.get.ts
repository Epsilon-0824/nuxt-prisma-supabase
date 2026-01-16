export default defineEventHandler((event) => {
    return {
        statusCode: 200,
        meassage: 'Test GET Handler'
    }
})