import {useState} from 'react';
import './bigImage.css';

function BigImage({bgi}) {

    console.log(bgi)

    return (
        <div className="bigImage">
            <img className='bg' src={bgi} />
        </div>
    );
}

export default BigImage;