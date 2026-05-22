import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiLogIn } from 'react-icons/fi';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Demo login successful. In a real app this would call an authentication API.');
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1fr]">
        <section className="bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-black uppercase tracking-wider text-amber-400">Account</p>
          <h1 className="mt-3 text-3xl font-black">Welcome back to Jadoo Travel</h1>
          <p className="mt-4 leading-7 text-slate-300">A professional demo should make every action feel intentional, even when there is no backend yet.</p>
        </section>

        <form onSubmit={handleSubmit} className="p-6 sm:p-10">
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Email</span>
              <input type="email" className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="you@example.com" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Password</span>
              <input type="password" minLength={6} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="At least 6 characters" required />
            </label>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-black text-white hover:bg-slate-800">
              <FiLogIn />
              Login
            </button>
          </div>

          {message && (
            <p className="mt-5 inline-flex gap-2 rounded-md bg-emerald-50 p-4 font-semibold text-emerald-800">
              <FiCheckCircle className="mt-1 shrink-0" />
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-600">
            Do not have an account?{' '}
            <button type="button" className="font-bold text-slate-950 underline" onClick={() => navigate('/signup')}>
              Create one
            </button>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
