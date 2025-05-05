import { z } from 'zod'

export const registerSchema = z.object({
    fullName: z.string().min(3, {
        message: 'Name must be at least 3 characters long'
    }).max(100, {
        message: 'Name must be less than 100 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email'
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    })
})

export const loginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email'
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    })
})
