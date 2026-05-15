import React from 'react';

const InfiniteLoop = ({ items, direction = 'left', speed = 'normal' }) => {
    const animationSpeed = {
        slow: '40s',
        normal: '20s',
        fast: '10s',
    }[speed];

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`} style={{ animationDuration: animationSpeed }}>
                {items.map((item, idx) => (
                    <li key={idx} className="text-xl md:text-2xl font-bold text-gray-400 whitespace-nowrap">
                        {item.icon ? (
                            <img src={item.icon} alt={item.name} className="h-12 w-12 md:h-16 md:w-16 object-contain hover:scale-110 transition-transform" />
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
            <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`} aria-hidden="true" style={{ animationDuration: animationSpeed }}>
                {items.map((item, idx) => (
                    <li key={idx} className="text-xl md:text-2xl font-bold text-gray-400 whitespace-nowrap">
                        {item.icon ? (
                            <img src={item.icon} alt={item.name} className="h-12 w-12 md:h-16 md:w-16 object-contain hover:scale-110 transition-transform" />
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
            <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`} aria-hidden="true" style={{ animationDuration: animationSpeed }}>
                {items.map((item, idx) => (
                    <li key={idx} className="text-xl md:text-2xl font-bold text-gray-400 whitespace-nowrap">
                        {item.icon ? (
                            <img src={item.icon} alt={item.name} className="h-12 w-12 md:h-16 md:w-16 object-contain hover:scale-110 transition-transform" />
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfiniteLoop;
