import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiCalendar, FiCheckCircle, FiMapPin, FiSearch, FiUsers } from 'react-icons/fi';

type BookingType = 'flight' | 'hotel';

type BookingState = Partial<{
  bookingType: BookingType;
  from: string;
  to: string;
  hotelLocation: string;
}>;

const today = new Date().toISOString().split('T')[0];

const Bookings: React.FC = () => {
  const location = useLocation();
  const routeState = (location.state || {}) as BookingState;
  const [bookingType, setBookingType] = useState<BookingType>(routeState.bookingType || 'flight');
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    from: routeState.from || 'Dhaka',
    to: routeState.to || '',
    departureDate: '',
    returnDate: '',
    guests: 1,
    hotelLocation: routeState.hotelLocation || '',
    checkInDate: '',
    checkOutDate: '',
  });

  const summary = useMemo(() => {
    if (bookingType === 'flight') {
      return formData.to ? `${formData.from} to ${formData.to}` : 'Choose a destination';
    }
    return formData.hotelLocation || 'Choose a hotel location';
  }, [bookingType, formData.from, formData.hotelLocation, formData.to]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStatus('');
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(
      bookingType === 'flight'
        ? `Flight search ready for ${formData.from} to ${formData.to}. We found flexible options for ${formData.guests} traveler(s).`
        : `Hotel search ready for ${formData.hotelLocation}. We found stays for ${formData.guests} guest(s).`
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-md border border-slate-200 bg-slate-950 p-6 text-white">
          <p className="text-sm font-black uppercase tracking-wider text-amber-400">Booking Desk</p>
          <h1 className="mt-3 text-3xl font-black">Create a clean travel request</h1>
          <p className="mt-4 leading-7 text-slate-300">
            This page now behaves like a real product flow: route selection fills the form, required fields validate, and submit returns a clear result.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-md bg-white/10 p-4">
              <p className="text-sm text-slate-300">Current search</p>
              <p className="mt-1 font-black">{summary}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 p-3">
                <FiCalendar />
                Flexible dates
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 p-3">
                <FiUsers />
                {formData.guests} guest(s)
              </span>
            </div>
          </div>
        </aside>

        <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 grid grid-cols-2 rounded-md bg-slate-100 p-1">
            <button
              type="button"
              className={`rounded-md px-4 py-3 font-bold transition ${bookingType === 'flight' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
              onClick={() => {
                setBookingType('flight');
                setStatus('');
              }}
            >
              Flight
            </button>
            <button
              type="button"
              className={`rounded-md px-4 py-3 font-bold transition ${bookingType === 'hotel' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
              onClick={() => {
                setBookingType('hotel');
                setStatus('');
              }}
            >
              Hotel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {bookingType === 'flight' ? (
              <>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">From</span>
                    <input name="from" value={formData.from} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="Dhaka" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">To</span>
                    <input name="to" value={formData.to} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="Dubai" required />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Departure</span>
                    <input type="date" min={today} name="departureDate" value={formData.departureDate} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Return</span>
                    <input type="date" min={formData.departureDate || today} name="returnDate" value={formData.returnDate} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Travelers</span>
                    <input type="number" min="1" max="9" name="guests" value={formData.guests} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
                  </label>
                </div>
              </>
            ) : (
              <>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Hotel Location</span>
                  <input name="hotelLocation" value={formData.hotelLocation} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" placeholder="Cox Bazar" required />
                </label>
                <div className="grid gap-5 md:grid-cols-3">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Check-in</span>
                    <input type="date" min={today} name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Check-out</span>
                    <input type="date" min={formData.checkInDate || today} name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-700">Guests</span>
                    <input type="number" min="1" max="9" name="guests" value={formData.guests} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200" required />
                  </label>
                </div>
              </>
            )}

            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-3 font-black text-slate-950 hover:bg-amber-400">
              <FiSearch />
              Search {bookingType === 'flight' ? 'Flights' : 'Hotels'}
            </button>
          </form>

          {status && (
            <div className="mt-6 flex gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
              <FiCheckCircle className="mt-1 shrink-0" />
              <p className="font-semibold">{status}</p>
            </div>
          )}

          <div className="mt-6 rounded-md bg-slate-50 p-4 text-sm text-slate-600">
            <p className="inline-flex items-center gap-2 font-semibold text-slate-700">
              <FiMapPin />
              Demo note
            </p>
            <p className="mt-2">This demo simulates a travel search result. It is ready to connect with a real booking API later.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Bookings;
