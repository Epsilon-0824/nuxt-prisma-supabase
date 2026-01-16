export default defineEventHandler((event) => {

    if(event.context.auth.role !== 'admin'){
        throw createError(
            {
                statusCode: 403,
                message: 'Unauthorize'
            }
        )
    }

    return {
        message: `Welcome user ${event.context.auth.user}, you have permission to ${event.context.auth.permission}`
    }

    // return {
    //     name: 'sample API from server/sample.ts'
    // }
})