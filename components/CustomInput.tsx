import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form';
import { Input } from './ui/input';

import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';


const formSchema = authFormSchema('sign-up');

type FormSchema = z.infer<typeof formSchema>;

interface CustomInputProps {
    control: Control<FormSchema>;
    name: FieldPath<FormSchema>;
    label: string;
    placeholder: string;
    autoComplete?: string;
}

const CustomInput = ({ control, name, label, placeholder, autoComplete }: CustomInputProps) => {

    const id = `form-${name}`;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel htmlFor={id} className="form-label">{label}</FormLabel>
                    <div className="flex flex-col w-full">
                        <FormControl>
                            <Input
                                {...field}
                                id={id}
                                value={(field.value ?? '') as string}
                                placeholder={placeholder}
                                className="input-class"
                                type={name === 'password' ? 'password' : 'text'}
                                autoComplete={name === 'email' ? name : undefined}
                            />
                        </FormControl>
                        <FormMessage className="mt-2 form-message" />
                    </div>
                </div>
            )}
        />
    );
};

export default CustomInput;
