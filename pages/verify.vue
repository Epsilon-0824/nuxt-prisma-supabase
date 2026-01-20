<script setup lang="ts">

import { useSupabaseClient } from '#imports';

const otp = ref('')
const message = ref('')
const status = ref(false)

const supabase = useSupabaseClient()
const router = useRouter()

const handleVerifyOTP = async () => {
    if (!otp.value) {
        message.value = 'Please enter the OTP.'
        status.value = false
        return
    }

    try {
        const { data, error } = await supabase.auth.verifyOtp({
            phone: localStorage.getItem('phone') as string,
            token: otp.value,
            type: 'sms',
        })

        if (error) throw error

        const token = data.session?.access_token
        if (token) {
            const authToken: any = useCookie('auth_tokens')
            authToken.value = token
            authToken.options = { expires: 7 }
        }

        message.value = 'Verification successful!'
        status.value = true

        // พาไปยังหน้า dashboard
        await new Promise(resolve => setTimeout(resolve, 1000))
        router.push('/backend/dashboard')

    } catch (error: unknown) {
        if (error instanceof Error) {
            message.value = error.message
            status.value = false
        } else {
            message.value = 'An unknown error occurred'
            status.value = false
        }
    }
}

definePageMeta({
    layout: 'auth'
})

useHead({
    title: 'Verify OTP',
    meta: [
        {
            name: 'keywords',
            content: 'Verify OTP, Nuxt 3, Backend',
        },
        {
            name: 'Description',
            content: 'Verify OTP Nuxt 3, IT Genius Engineering'
        }
    ]
})
</script>


<template>
    <div class="bg-base-200 h-[calc(100vh-50px)] flex items-center justify-center">
        <div class="card bg-base-100 shadow-xl max-w-md w-full p-6">
            <h2 class="card-title text-2xl font-bold mb-6">Verify OTP</h2>

            <form @submit.prevent="handleVerifyOTP">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Enter OTP</span>
                    </label>
                    <input v-model="otp" type="text" class="input input-bordered w-full" placeholder="Enter OTP" />
                </div>
                <div class="form-control mt-6">
                    <button type="submit" class="btn btn-primary w-full">Verify OTP</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>