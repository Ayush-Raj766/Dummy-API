import React from 'react'

export default function Loading() {
    return (
        <>
            <center>
                <div className="spinner-border text-secondary spinner" style={{ width: "4rem", height: "4rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </center>
        </>
    )
}
