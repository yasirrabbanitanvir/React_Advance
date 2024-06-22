import React, { useEffect, useState } from 'react';

export default function useCustomHook(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return [data];
}
