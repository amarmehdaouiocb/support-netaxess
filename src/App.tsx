import React from 'react';
import Header from './components/Header';
import SupportForm from './components/SupportForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Centre de Support Technique
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez-vous un problème avec votre solution informatique ? 
              Notre équipe d'experts est là pour vous aider rapidement et efficacement.
            </p>
          </div>
          <SupportForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
