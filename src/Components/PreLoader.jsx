import React from 'react'
import './PreLoader.css'

const PreLoader = () => {

    useEffect(()=> {
        preLoaderAnim()
    }, []);
    
    return (
        <div className="preloader">
            <div className="texts-container">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    )
}

export default Preloader 