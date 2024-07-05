import React from "react";

const CardComponent = () => {
    return (
        <>
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="card glass w-96">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardComponent