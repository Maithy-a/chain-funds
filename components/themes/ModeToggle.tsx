'use client'

import React, { useEffect, useState } from 'react'
import { IconBrightness } from '@tabler/icons-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="secondary"
            size="icon"
            className="size-8"
        >
            <IconBrightness />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ModeToggle
