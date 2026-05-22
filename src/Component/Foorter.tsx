import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black text-slate-950">Jadoo Travel</h2>
          <p className="mt-3 max-w-sm leading-7 text-slate-600">
            A polished travel booking portfolio project built with React, TypeScript, routing, forms, filters, and responsive UI.
          </p>
        </div>

        {[
          { title: 'Company', links: ['About', 'Careers', 'Mobile'] },
          { title: 'Support', links: ['Help Center', 'Press', 'Partners'] },
          { title: 'Travel', links: ['Airline fees', 'Airline', 'Low fare tips'] },
        ].map((group) => (
          <div key={group.title}>
            <h3 className="font-black text-slate-950">{group.title}</h3>
            <div className="mt-3 space-y-2">
              {group.links.map((link) => (
                <button key={link} className="block text-sm font-semibold text-slate-600 hover:text-slate-950">
                  {link}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
        <div className="flex gap-3 text-xl text-slate-600">
          <button aria-label="Facebook" className="hover:text-slate-950"><FaFacebook /></button>
          <button aria-label="Instagram" className="hover:text-slate-950"><FaInstagram /></button>
          <button aria-label="Twitter" className="hover:text-slate-950"><FaTwitter /></button>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white">
            <SiGoogleplay />
            Play Store
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white">
            <SiAppstore />
            App Store
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
