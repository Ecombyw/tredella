import Image from 'next/image'
import React from 'react'

const NextImage = ({ src = "", alt = "alt logo", sxProps, width, height }) => {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ ...sxProps }}
                objectPosition='center'
                objectFit='cover'
                quality={100}

            />
        </>
    )
}

export default NextImage