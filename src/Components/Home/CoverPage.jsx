import React from 'react'
import './coverpage.css'
import { SlideShow } from './SlideShow.jsx';

export const CoverPage = () => {
    return (
        < div className="img-fluid">

            <SlideShow />
            <h1 className="live-it-now">Live it. Now</h1>
        </div >
    )
}
