import React, { useState, useEffect } from 'react';

const RainDrop = ({ size, color }) => {
    const [topPosition, setTopPosition] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTopPosition((prevTop) => prevTop + size);
        }, 100); // Adjust interval for desired speed

        return () => clearInterval(intervalId);
    }, [size]);

    return (
        <div
            className={`absolute rounded-full w-[<span class="math-inline">\{size\}px\] h\-\[</span>{size}px] bg-<span class="math-inline">\{color\} top\-\[</span>{topPosition}px]`}
        />
    );
};

export default RainDrop;