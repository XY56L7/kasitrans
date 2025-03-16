import React from 'react';
import Services from './Services';

const ServicesPage = () => {
  return (
    <div className="bg-light">
      <Services />
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-display font-extrabold mb-12 text-primary">
            Miért válassz minket?
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Több mint 20 év tapasztalat, modern géppark, és elkötelezett csapat – nálunk az árud mindig biztonságban van.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;