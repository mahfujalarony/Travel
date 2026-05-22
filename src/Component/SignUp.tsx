import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiUserPlus } from 'react-icons/fi';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match. Please check both fields.');
      return;
    }
    setMessage('Demo account created successfully. This is ready for backend integration.');
  };

  const success = message.startsWith('Demo');

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1fr]">
        <section className="bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-black uppercase tracking-wider text-amber-400">Get Started</p>
          <h1 className="mt-3 text-3xl font-black">Create a traveler account</h1>
          <p className="mt-4 leading-7 text-slate-300">Validation, error states, and confirmation messages make this feel like a real product instead of a static page.</p>
        </section>

        <form onSubmit={handleSubmit} className="p-6 sm:p-10">
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Name</span>
              <input className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="Your name" required />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Email</span>
              <input type="email" className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="you@example.com" required />
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">Password</span>
                <input type="password" minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">Confirm Password</span>
                <input type="password" minLength={6} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
              </label>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-3 font-black text-slate-950 hover:bg-amber-400">
              <FiUserPlus />
              Sign Up
            </button>
          </div>

          {message && (
            <p className={`mt-5 inline-flex gap-2 rounded-md p-4 font-semibold ${success ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
              <FiCheckCircle className="mt-1 shrink-0" />
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <button type="button" className="font-bold text-slate-950 underline" onClick={() => navigate('/login')}>
              Login
            </button>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
