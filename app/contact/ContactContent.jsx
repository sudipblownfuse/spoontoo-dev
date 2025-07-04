// app/contact/ContactContent.jsx
"use client";

import React from 'react';
import ContactForm from '@/components/ContactComponents/ContactForm';
import FAQ from '@/components/ContactComponents/FAQ';
import MapView from '@/components/ContactComponents/MapView';
import NewsletterSIgnUp from '@/components/ContactComponents/NewsletterSIgnUp';

export default function ContactContent() {
  return (
    <main className="w-full min-h-screen pt-28">
      <ContactForm />
      <MapView />
      <FAQ />
      <NewsletterSIgnUp />
    </main>
  );
}
