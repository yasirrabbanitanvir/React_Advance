import React from 'react';
import useCustomHook from './useCustomHook';

export default function ShowCustomData() {
    const [data] = useCustomHook('https://jsonplaceholder.typicode.com/users');
    return (
        <div>
            {data && data.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
            <div>ShowCustomData</div>
        </div>
    );
}
