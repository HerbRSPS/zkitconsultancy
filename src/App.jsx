import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Marquee text at top */}
      <div className="overflow-hidden bg-black text-white py-2">
        <div className="animate-marquee whitespace-nowrap">
          Lorem ipsum dolor sit amet • Lorem ipsum dolor sit amet • Lorem ipsum dolor sit amet • Lorem ipsum dolor sit amet
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="ZK-IT & Consultancy" className="h-8" />
          <span className="text-white ml-2">ZK-IT & CONSULTANCY</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Over Ons</a>
          <a href="#" className="text-white">Diensten</a>
          <a href="#" className="text-white">Contact</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
            Boek een Afspraak
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-white">Beoordeeld door</span>
          <span className="font-bold text-white">25+ bedrijven</span>
          <div className="flex">
            {'★'.repeat(5).split('').map((star, i) => (
              <span key={i} className="text-yellow-400">{star}</span>
            ))}
          </div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-6">
          Jouw partner voor alles omtrent<br />
          websites, webshops & vindbaarheid
        </h1>

        <p className="text-white mb-8 max-w-2xl mx-auto">
          Van het ontwikkelen van websites en webshops tot aan het veroveren van de #1 zoekpositie op jouw dienst.<br />
          Bij ZK doen we het allemaal!
        </p>

        <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full border border-purple-400 hover:shadow-lg transition-all">
          Plan een Afspraak
        </button>

        <div className="mt-16 flex justify-center space-x-8">
          <div className="bg-black/20 px-4 py-2 rounded-lg">
            <span className="text-purple-400">Vertrouwd door →</span>
          </div>
        </div>

        {/* Microsoft Logos */}
        <div className="mt-8 flex justify-center space-x-12">
          {[1, 2, 3, 4].map((i) => (
            <img 
              key={i}
              src="https://via.placeholder.com/150x50?text=Microsoft" 
              alt="Microsoft Partner" 
              className="h-8 opacity-75"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;