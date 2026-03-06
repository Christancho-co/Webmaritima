'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterForm({ source = 'footer' }: { source?: string }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      if (response?.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target?.value ?? '')}
          placeholder="Your email address"
          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00CED1] focus:border-transparent"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="text-sm text-green-400">
          Successfully subscribed!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-sm text-red-400">
          Error subscribing. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-[#00CED1] text-white font-semibold rounded-md hover:bg-[#00A8AB] transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}
