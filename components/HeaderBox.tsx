
import React from 'react'

const HeaderBox = ({
    type = "title", title, subtext, user
}: HeaderBoxProps) => {
    return (
        <div className='header-box' >
            <div className='header-box-title' >
                {title},
                {type === "greeting" && (
                    <span className='ml-3 text-bankGradient' >{user}</span>
                )}
            </div>
            <p className='header-box-subtext' >{subtext}</p>
        </div>
    )
}

export default HeaderBox