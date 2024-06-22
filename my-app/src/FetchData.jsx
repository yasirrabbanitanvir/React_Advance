import React, { useEffect, useState } from 'react';

function DataReturn({ name }) {
    return <div>{name}</div>;
}

export default function FetchData() {
    const [saveData, setSaveData] = useState(null); 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setSaveData(data)); 
    }, []);

    return (
        <div className='card'>
            {saveData && saveData.map((data) => <DataReturn key={data.id} name={data.name} />)}
        </div>
    );
}
