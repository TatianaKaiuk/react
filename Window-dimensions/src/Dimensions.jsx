import React, {useEffect, useState} from 'react';

const Dimensions = () => {
    const [demensions, setDimension] = useState({
        width: null,
        heigth: null,
    });
    useEffect(()=>{
        const {innerHeight, innerWidth} = window;
        setDimension({width: innerWidth, heigth: innerHeight});
        const handleResize = e => {
            const {innerHeight, innerWidth} = e.target;
            setDimension({width: innerWidth, heigth: innerHeight})
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const {width, heigth} = demensions;
    return <div className="dimensions">{`${width}px - ${heigth}px`}</div>
}
export default Dimensions;