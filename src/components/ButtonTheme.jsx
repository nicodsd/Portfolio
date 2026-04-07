import React from 'react'

function ButtonTheme() {
    const handleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <button onClick={handleTheme} className='bg-[#ffffff] text-[#ffffff] rounded-full p-2'></button>
    )
}

export default ButtonTheme