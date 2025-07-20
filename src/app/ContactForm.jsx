"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus('success');
        setForm({ name: '', email: '', comment: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Hubo un error al enviar el mensaje.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Hubo un error al enviar el mensaje.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-xl shadow-lg max-w-xl mx-auto flex flex-col gap-6">
      <div className='flex gap-4'>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Nombre'
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            disabled={status === 'loading'}
          />
        </div>  
      </div>
      <div>
        <textarea
          id="comment"
          name="comment"
          placeholder='Escribe tu mensaje aquí...'
          value={form.comment}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
          disabled={status === 'loading'}
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-white to-orange-50 text-[rgb(238,106,26)] font-semibold rounded-lg hover:opacity-90 transition duration-300"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar'}
      </button>
      {status === 'success' && (
        <div className="text-white text-center mt-4">¡Gracias por contactarnos!</div>
      )}
      {status === 'error' && (
        <div className="text-red-200 text-center mt-4">{errorMsg}</div>
      )}
    </form>
  );
}
