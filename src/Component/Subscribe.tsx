import { useState } from "react";
import type { FormEvent } from "react";
import { FiCheckCircle, FiMail } from "react-icons/fi";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(`Thanks. Travel updates will be sent to ${email}.`);
    setEmail("");
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-md bg-slate-950 p-6 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wider text-amber-400">Newsletter</p>
          <h2 className="mt-3 text-3xl font-black">Get curated travel deals and product updates</h2>
          <p className="mt-3 leading-7 text-slate-300">The subscription form now validates input and confirms the action on screen.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md lg:mt-0">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative flex-1">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder="Email address"
                className="w-full rounded-md border border-white/20 bg-white px-11 py-3 text-slate-950 outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Email address"
                required
              />
            </label>
            <button className="rounded-md bg-amber-500 px-5 py-3 font-black text-slate-950 hover:bg-amber-400">
              Subscribe
            </button>
          </div>
          {message && (
            <p className="mt-4 inline-flex gap-2 rounded-md bg-emerald-500/10 p-3 font-semibold text-emerald-200">
              <FiCheckCircle className="mt-1 shrink-0" />
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
