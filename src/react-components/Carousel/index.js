import React, { useState, useEffect } from 'react'
import './style.css'

const fetchImages = () => {
    const imageUrls = []

    for (let i = 1; i <= 5; i++) {
        imageUrls.push(`https://picsum.photos/id/${i * 200}/200`)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(imageUrls)
        }, 2000)
    })
}

const ImageCarousel = (props) => {
    const { images } = props
    const imagesLength = images.length
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setImageIndex((prevState => prevState === imagesLength - 1 ? 0 : prevState + 1))
        }, 3000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <div className='carousel'>
                <button
                    onClick={() => {
                        setImageIndex((prevState) => prevState === 0 ? imagesLength - 1 : prevState - 1)
                    }}
                >
                    {'Prev'}
                </button>
                <div
                    className='image-container'
                >
                    <img
                        className='image-comp'
                        src={images[imageIndex]}
                        alt={`image-${imageIndex + 1}`}
                    />
                </div>
                <button
                    onClick={() => {
                        setImageIndex((prevState) => prevState === imagesLength - 1 ? 0 : prevState + 1)
                    }}
                >
                    {'Next'}
                </button>
            </div>
            <div>
                Image number: {imageIndex + 1}
            </div>
        </>
    )
}

const Carousel = () => {
    const [images, setImages] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchImages()
            .then((response) => {
                setImages(response)
            })
            .catch(() => {
                setError('Error Loading Images')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const getLoadingComp = () => {
        return (<div className='loading-conatiner'>Loading...</div>)
    }

    const getErrorComp = () => {
        return (<div className='error-conatiner'>{error}</div>)
    }

    return (
        <div className='carousel-container'>
            <header className='header'>Image Carousel</header>
            {loading && getLoadingComp()}
            {error && getErrorComp()}
            {images && <ImageCarousel images={images} />}
        </div>
    )
}

export default Carousel
