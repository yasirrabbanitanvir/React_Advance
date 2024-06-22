import React, { useEffect, useState } from 'react';

export default function Showimg() {
    const [showImg, setImg] = useState(null); 

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => setImg(data.message)); 
    }, []);

    return (
        <div className='card'>
           {showImg && <img src={showImg} alt="Random Dog" />}
        </div>
    );
}
