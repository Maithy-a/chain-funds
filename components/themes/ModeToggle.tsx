"use client"
import React from 'react'
import { IconBrightness } from '@tabler/icons-react';
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const ModeToggle = () => {

    const { setTheme } = useTheme()

    return (
        <div>
            <Button
                onClick={() => setTheme(theme => theme === "light" ? "dark" : "light")}
                variant='secondary'
                size="icon"
                className='size-8'>
                <IconBrightness />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    )
}

export default ModeToggle