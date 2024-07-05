import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Card, Button } from 'flowbite-react';

const MoviesComponent = () => {
    const { state, handleFunction } = useContext(GlobalContext)
    const { movies } = state
    const { formatDecimals } = handleFunction;
    const dataSelected = movies.slice(6, 12);

    return (
        <div
            id="card-component"
            className="relative isolate px-3 pt-8 min-h-screen lg:px-8"
        >
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#59C173] to-[#a17fe0] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                <h1 className="text-5xl font-bold text-gray-900 sm:text-4xl mb-5 text-center">
                    Gimana kalo kita <span className='text-purple'>nonton</span> aja abis ini! &#128071;
                </h1>
                <div className="grid gap-5 lg:grid-cols-3">
                    {dataSelected.map((movie) => (
                        <div className="flex justify-center items-center flex-wrap">
                            <Card
                                key={movie.id}
                                className="backdrop-blur-sm bg-white/30"
                            >
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto object-cover rounded-lg" />
                                <span className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                    </svg>

                                    <h5 className="font-bold text-slate-900  dark:text-white leading-tight">
                                        {movie.title}
                                    </h5>
                                </span>
                                <span className='flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                    <h5 className="text-slate-900  dark:text-white leading-tight">
                                        {formatDecimals(movie.vote_average)}
                                    </h5>
                                </span>
                                {/* <Button
                                    gradientDuoTone="greenToBlue" pill
                                >
                                    Nonton Yuk!
                                </Button> */}
                            </Card>
                        </div>

                    ))}
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#59C173] to-[#a17fe0] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MoviesComponent;