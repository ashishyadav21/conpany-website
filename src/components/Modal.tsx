import React, { useEffect, useState } from 'react';


interface props {
    type: string,
    message: string,
    duration?: number
}

const SlideInComponent = (props: props) => {
    const { type, message, duration } = props
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        const timer1 = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => { clearTimeout(timer); clearTimeout(timer1) };

    }, []);

    return (
        <div className={`w-80 h-12 p-3 m-4 mr-6 text-white rounded-lg border-solid border-slate-300 ${type == 'success' ? 'bg-green' : 'bg-red-700'} absolute right-0 bottom-0 transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'hidden'}`}>
            {message}
        </div>
    );
};

export default SlideInComponent;
