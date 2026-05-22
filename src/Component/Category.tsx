import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiCreditCard, FiHeadphones, FiMap } from 'react-icons/fi';

type Service = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
};

const Category: React.FC = () => {
    const data: Service[] = [
        {
            id: 1,
            title: 'Smart Trip Search',
            description: 'Compare flights and stays from curated travel inventory.',
            icon: <FiCloud />,
        },
        {
            id: 2,
            title: 'Flexible Booking',
            description: 'Switch between hotel and flight booking without losing context.',
            icon: <FiMap />,
        },
        {
            id: 3,
            title: 'Secure Checkout',
            description: 'Clear booking confirmations and realistic payment-ready flow.',
            icon: <FiCreditCard />,
        },
        {
            id: 4,
            title: 'Traveler Support',
            description: 'Helpful contact points and simple feedback across forms.',
            icon: <FiHeadphones />,
        },
    ];

    return (
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-black uppercase tracking-wider text-amber-600">Services</p>
                    <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">A booking experience that feels complete</h2>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((service, index) => (
                        <motion.article
                            key={service.id}
                            className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="grid h-11 w-11 place-items-center rounded-md bg-slate-950 text-xl text-white">
                                {service.icon}
                            </div>
                            <h3 className="mt-5 text-lg font-black text-slate-950">{service.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
