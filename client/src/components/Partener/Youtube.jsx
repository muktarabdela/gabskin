import React from 'react'

const Youtube = () => {
    return (
        <section className="mt-10">
            <h3 className="text-xl  text-center font-semibold mb-4 text-white">
                How to apply laptop sticker Gabiskin
            </h3>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
                <div dangerouslySetInnerHTML={{
                    __html: `
        <iframe 
            width="100%" 
            height="350px" 
            src="https://www.youtube.com/embed/RGYKgWQBpr8?si=ONg52W9s_-Lfziqx"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>` }}
                />
            </div>
        </section>
    )
}

export default Youtube