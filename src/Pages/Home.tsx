import React from 'react';
import { ContactUs } from '../Components/ContactUs';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { Hero } from '../Components/Hero';
import { ReviewSection } from '../Components/ReviewSection';
import { Services } from '../Components/Services';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ReviewSection />
      <ContactUs />
      <Footer />
    </>
  );
};
