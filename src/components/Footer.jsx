import React from 'react'

function Footer() {
    return (
        

            <div className='flex flex-col gap-4 py-8'>
                <p className="font-semibold">Used by these companies:</p>
                <ul className='flex gap-6'>
                    <li>
                        <i className="fa-brands fa-x-twitter fa-2x"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-linkedin fa-2x"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-airbnb fa-2x"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-youtube fa-2x"></i>
                    </li>
                </ul>
            </div>
            
        
    )
}

export default Footer