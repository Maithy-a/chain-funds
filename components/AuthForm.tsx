'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader } from 'lucide-react';
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import {signIn, signUp } from '@/lib/actions/user.actions';


const AuthForm = ({ type }: { type: string }) => {

    const router = useRouter();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            // Sign up with Appwrite and create plaid link token

            if (type === 'sign-up') {
                const newUser = await signUp(data);
                setUser(newUser);
            }

            if (type === 'sign-in') {
                 const response = await signIn({
                     email: data.email,
                     password: data.password,
                 })

                 if (response) router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className='auth-form' >
            <header className='flex flex-col gap-5 md:gap-8' >
                <Link href="#" className="logo">
                    <Image
                        src="/icons/antv.svg"
                        alt="Chain Funds Logo"
                        width={30}
                        height={30}
                        className="invert-0 dark:invert p-1"
                    />
                    <span className="text-base sm:text-lg xl:text-xl font-semibold tracking-wide text-gray-900 dark:text-white font-qurova text-nowrap">
                        CHAIN <span className="text-bankGradient">fUND</span>.
                    </span>
                </Link>

                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-2xl font-semibold' >
                        {user
                            ? 'Link Your Account'
                            : type === 'sign-in'
                                ? 'Login to your account'
                                : 'Create an account'
                        }

                        <p className='text-base font-normal text-neutral-500' >
                            {user
                                ? 'Link your account to get started'
                                : 'Please enter your details'
                            }
                        </p>
                    </h1>
                </div>
            </header>

            {user
                ? (
                    <div className='flex flex-col gap-4' >
                        {/* PLaidLink */}
                    </div>
                ) : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {/* Sign up Logic */}
                                {type === "sign-up" && (<>
                                    <div className="flex gap-4 ">
                                        <CustomInput control={form.control} name="firstName" label="First Name" placeholder="John" />
                                        <CustomInput control={form.control} name="lastName" label="Last Name" placeholder="Doe" />
                                    </div>

                                    <CustomInput control={form.control} name="address1" label="Address" placeholder="903" />
                                    <CustomInput control={form.control} name="city" label="City" placeholder="Nairobi" />

                                    <div className="flex gap-4">
                                        <CustomInput control={form.control} name="state" label="State" placeholder="ex: KE" />
                                        <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder="ex: 90160" />
                                    </div>

                                    <div className="flex gap-4">
                                        <CustomInput control={form.control} name="dateOfBirth" label="Date of birth" placeholder="yyyy-mm-dd" />
                                        <CustomInput control={form.control} name="ssn" label="SSN" placeholder="ex: 1234" />
                                    </div>
                                </>)
                                }

                                {/* Login Logic */}
                                <CustomInput control={form.control} name="email" label="Email" placeholder="example@gmail.com" />
                                <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" />

                                <div className="flex flex-col gap-4">
                                    <Button type="submit" disabled={isLoading} className="form-btn">
                                        {isLoading ? (
                                            <>
                                                <Loader size={20} className="animate-spin" /> &nbsp;
                                                Loading...
                                            </>
                                        ) : type === 'sign-in'
                                            ? 'Sign In' : 'Sign Up'}
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <footer className=' text-sm flex justify-center gap-1' >
                            <p className='text-gray-600' >
                                {type === 'sign-in'
                                    ? "Don't have and account?"
                                    : "Already have and account?"
                                }
                            </p>
                            <Link href={
                                type === 'sign-in'
                                    ? "/sign-up"
                                    : "/sign-in"
                            } >
                                <p className='text-sky-400' >
                                    {type === "sign-in"
                                        ? "sign up"
                                        : "Login"
                                    }
                                </p>
                            </Link>
                        </footer>
                    </>
                )
            }
        </section>
    )
}

export default AuthForm