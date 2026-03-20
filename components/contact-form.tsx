'use client';

import { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    fullName: 'Full Name',
    email: 'Email Address',
    subject: 'Subject',
    preferredModel: 'Preferred Boat Model',
    selectModel: 'Select a model...',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: "Thank you for contacting us! We'll get back to you within 24 hours.",
    error: 'There was an error submitting your message. Please try again.',
  },
  es: {
    fullName: 'Nombre Completo',
    email: 'Correo Electrónico',
    subject: 'Asunto',
    preferredModel: 'Modelo de Bote Preferido',
    selectModel: 'Selecciona un modelo...',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Gracias por contactarnos! Te responderemos en menos de 24 horas.',
    error: 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.',
  },
};

export default function ContactForm() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    preferredModel: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          preferredModel: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* FULL NAME */}
      <div className="relative">
        <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder={t.fullName}
          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#00CED1] focus:outline-none"
        />
      </div>

      {/* EMAIL */}
      <div className="relative">
        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder={t.email}
          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#00CED1] focus:outline-none"
        />
      </div>

      {/* SUBJECT */}
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder={t.subject}
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#00CED1] focus:outline-none"
      />

      {/* SELECT */}
      <select
        name="preferredModel"
        value={formData.preferredModel}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:ring-2 focus:ring-[#00CED1] focus:outline-none"
      >
        <option value="">{t.selectModel}</option>
        <option value="MT-21">MT-21 - Lifestyle</option>
        <option value="MT-31">MT-31 - Lifestyle</option>
        <option value="Hunter 38">Hunter 38 - Lifestyle</option>
        <option value="Pilot 42">Pilot 42</option>
        <option value="Gaira 24">Gaira 24</option>
        <option value="Alligator 37">Alligator 37</option>
        
      </select>

      {/* MESSAGE */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={t.message}
          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-[#00CED1] focus:outline-none"
        />
      </div>

      {/* STATUS */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
          {t.success}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm">
          {t.error}
        </div>
      )}

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#001F3F] text-white font-semibold uppercase tracking-widest rounded-md hover:bg-[#00CED1] transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
      >
        {isSubmitting ? t.sending : t.send}
        <Send className="h-5 w-5" />
      </button>

    </form>
  );
}