import React from 'react';

type Item = {
    id: number;
    title: string;
    description: string;
    url: string;
};

const Category = () => {
    const data: Item[] = [
        {
            id: 1,
            title: 'Calculated Weather',
            description: 'Built Wicket longer admire do barton vanity itself do in it.',
            url: './Group.png',
        },
        {
            id: 2,
            title: 'Best Flights',
            description: 'Engrossed listening. Park gate sell they west hard for the.',
            url: './Group (1).png',
        },
        {
            id: 3,
            title: 'Local Events',
            description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
            url: './image 25.png',
        },
        {
            id: 4,
            title: 'Customization',
            description: 'We deliver outsourced aviation services for military customers',
            url: './Group 49.png',
        },
    ];

    return (
        <div className="flex flex-col items-center py-12 px-4 bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-500 tracking-wider">CATEGORY</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-8">We Offer Best Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
                {data.map((d) => (
                    <div
                        key={d.id}
                        className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={d.url}
                            alt={d.title}
                            className="w-16 h-16 mb-4 object-contain"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{d.title}</h3>
                        <p className="text-gray-600 text-center text-sm">{d.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;