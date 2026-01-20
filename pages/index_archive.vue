<script setup lang="ts">
    const { data } = useFetch('/api/sample')

    const submit = async() => {
        const body = await $fetch('/api/submit', {
            method: 'POST',
            body: {
                test: 1234
            }
        })
        console.log(body)
    }

    const cookieValue = ref('')
    function getCookie(){
        const cookies =document.cookie
        console.log('Client-side Cookies: ', cookies)

        cookieValue.value = cookies.includes('myCookie') ? 'Found' : 'Not Found'
    }
</script>

<template>
    <pre>
        <h1>{{ data?.name }}</h1>
    </pre>
    <button @click="submit">Submit</button>

    <p><button @click="getCookie">Get Cookies</button></p>
    <p>{{ cookieValue }}</p>
</template>

<style scoped>

</style>