import React, { useState } from 'react';
import { CheckCircle, Target, TrendingUp, Users, AlertTriangle, Brain, Moon, Heart, Video, Calendar, FileText, BarChart3, Zap, Shield, Star } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({
    phase1: false,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
    phase6: false,
  });

  const toggleVisibility = (phase: keyof typeof isVisible) => {
  setIsVisible(prev => ({
    ...prev,
    [phase]: !prev[phase]
  }));
};

  return (
    <>
    <div className="min-h-screen bg-white">
      
      <div className="min-h-screen bg-white">

        <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center py-3 md:py-4">
              {/* Left: Logo / Brand */}
              <div className="flex items-center">
                <h2 className="font-atteron text-2xl font-bold text-[#0a978b]">
                  Brain Food Reset
                </h2>
              </div>

              {/* Right: Navigation Links */}
              <div className="hidden md:flex space-x-8">
                <a href="#problem" className="text-gray-600 hover:text-[#0a978b] transition-colors font-semibold">
                  Problem
                </a>
                <a href="#loesung" className="text-gray-600 hover:text-[#0a978b] transition-colors font-semibold">
                  Lösung
                </a>
                <a href="#angebot" className="text-gray-600 hover:text-[#0a978b] transition-colors font-semibold">
                  Angebot
                </a>
                <a href="#programm" className="text-gray-600 hover:text-[#0a978b] transition-colors font-semibold">
                  Programm
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="text-gray-600 hover:text-[#0a978b] focus:outline-none">
                  {/* Icon: Hamburger */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>


        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10 text-center">
            <h1 className="font-atteron text-4xl font-semibold text-black leading-snug">
              <span className="text-[#0a978b]">Stoppe Cortisol-Fressattacken</span><br />
              in 21 Tagenmit Emotionaler Entkopplung <br />
               <span className="text-[#0a978b]">ohne Disziplin</span>
            </h1>



            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              Für dauerstressige 
              <span className="text-primary font-semibold"> Selbstständige</span>, 
              <span className="text-primary font-semibold"> Studenten</span> und 
              <span className="text-primary font-semibold"> Eltern</span>, die Ihre Kontrolle verlieren.
            </p>

            {/* VSL Video */}
            <div className="mt-2 ">
              <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video">
                    <iframe 
                      title="VSL Video"
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/JOEU6GE6mew?autoplay=1&loop=1&modestbranding=1&playlist=JOEU6GE6mew&rel=0" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button direkt sichtbar */}
            <div className="mt-6 md:mt-8">
              <a 
                href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto"
              >
                <button className="px-8 md:px-12 py-4 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-md hover:shadow-lg hover:from-secondary hover:to-primary transform hover:scale-105 transition-all duration-200 w-full md:w-auto">
                  🚀 Jetzt für nur 275€ starten inkl. MwSt.
                </button>
              </a>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 md:mt-6">
              <p className="text-sm text-gray-500">
                ⚠️ Dieses Programm ist nicht für ernsthafte Essstörungen geeignet. Bitte wende dich in diesem Fall an medizinisches Fachpersonal.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-600" />
                <span>Wissenschaftlich fundiert</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-600" />
                <span>21-Tage Garantie</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success-600" />
                <span>Über 1.000 Teilnehmer</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      
      {/* Doppelleben der Stress-Esser Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="font-atteron text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Das Doppelleben der <span className="text-[#0a978b]">Stress-Esser</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Tagsüber erfolgreich und kontrolliert — nachts hilflos vor dem Kühlschrank
              </p>
            </div>

            {/* Split Layout */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Tagsüber - Grün */}
              <div className="bg-green-50 rounded-2xl p-8 shadow-lg">
                <h3 className="font-atteron text-2xl font-semibold text-green-800 mb-6">Tagsüber: Der Erfolgsmensch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-black leading-relaxed">
                      Diszipliniert bei Meetings, strukturiert im Alltag, bewundert für deine Leistung
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-black leading-relaxed">
                      Karriere läuft, Projekte erfolgreich, von Kollegen respektiert
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-black leading-relaxed">
                      "Wie machst du das nur?" – Bewunderung für deine scheinbare Perfektion
                    </p>
                  </div>
                </div>
              </div>

              {/* Nachts - Rot */}
              <div className="bg-red-50 rounded-2xl p-8 shadow-lg">
                <h3 className="font-atteron text-2xl font-semibold text-red-800 mb-6">Nachts: Der Kontrollverlust</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <Brain className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-black leading-relaxed">
                      Wie ferngesteuert zum Kühlschrank, unfähig zu stoppen
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-black leading-relaxed">
                      Scham, Selbstvorwürfe und das Gefühl, ein Versager zu sein
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <Moon className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-black leading-relaxed">
                      2 Uhr nachts, 3000 Kalorien später – wieder passiert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Alltägliche Situationen Section */}
          <section className="py-20 bg-red-50">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-atteron text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                  Erkennst du dich wieder?
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  Diese alltäglichen Situationen zeigen, wie tief das Problem wirklich geht
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Beispiel Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-md border border-red-200">
                  <h3 className="font-atteron text-xl font-semibold mb-4 text-red-600 group-hover:text-red-700">
                    Im Büro
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du gehst nicht in die Kantine, weil alle sehen, was du isst</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du versteckst Snacks in Schubladen wie ein Geheimnis</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du lehnst spontane Lunch-Meetings ab</p>
                    </div>
                  </div>
                </div>

                {/* Zuhause Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-md border border-red-200">
                  <h3 className="font-atteron text-xl font-semibold mb-4 text-red-600 group-hover:text-red-700">
                    Zuhause
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du isst heimlich nach dem Abendessen, wenn alle schlafen</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du versteckst leere Verpackungen tief im Müll</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du lügst über das, was du gegessen hast</p>
                    </div>
                  </div>
                </div>

                {/* Einkaufen Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-md border border-red-200">
                  <h3 className="font-atteron text-xl font-semibold mb-4 text-red-600 group-hover:text-red-700">
                    Beim Einkaufen
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du gehst zu verschiedenen Supermärkten, damit niemand deine Muster erkennt</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du nutzt Self-Checkout, um nicht mit Kassierern zu sprechen</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du kaufst "Alibis", um ungesunde Einkäufe zu tarnen</p>
                    </div>
                  </div>
                </div>

                {/* Kopf Card */}
                <div className="group bg-white rounded-2xl p-6 shadow-md border border-red-200">
                  <h3 className="font-atteron text-xl font-semibold mb-4 text-red-600 group-hover:text-red-700">
                    In deinem Kopf
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">"Können andere sehen, dass ich zugenommen habe?"</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du planst schon den nächsten "Fressanfall" während du noch kaust</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">→</span>
                      <p className="text-gray-700 text-sm">Du interpretierst neutrale Kommentare als Kritik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


     
      {/* Domino Effect Consequences Section */}
      <section className="pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20 relative z-10">
            <h2 className="font-atteron text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Was passiert, wenn du nichts änderst?
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-2">
              Der Domino-Effekt: Wie ein kleines Problem dein ganzes Leben sabotiert
            </p>
            <p className="text-sm text-gray-500 italic">
              Der Teufelskreis wird enger
            </p>
          </div>

          {/* Desktop Domino Layout */}
          <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto">
            {/* Domino 1 */}
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-24 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg transform rotate-12">
                <span className="text-2xl font-bold text-yellow-900">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Kleines Problem</h4>
              <p className="text-sm text-gray-600">Gelegentliche Fressattacken nach stressigen Tagen</p>
            </div>

            <div className="text-4xl text-gray-400">→</div>

            {/* Domino 2 */}
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-24 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg transform rotate-6">
                <span className="text-2xl font-bold text-orange-900">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rückzug beginnt</h4>
              <p className="text-sm text-gray-600">Du meidest soziale Situationen mit Essen</p>
            </div>

            <div className="text-4xl text-gray-400">→</div>

            {/* Domino 3 */}
            <div className="text-center">
              <div className="bg-red-600 w-16 h-24 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg transform -rotate-3">
                <span className="text-2xl font-bold text-red-100">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Selbstwert schwindet</h4>
              <p className="text-sm text-gray-600">Heimliches Essen und ständige Scham</p>
            </div>

            <div className="text-4xl text-gray-400">→</div>

            {/* Domino 4 */}
            <div className="text-center">
              <div className="bg-gray-800 w-16 h-24 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg transform -rotate-12">
                <span className="text-2xl font-bold text-gray-100">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Lebenssabotage</h4>
              <p className="text-sm text-gray-600">Beruflicher und persönlicher Erfolg wird sabotiert</p>
            </div>
          </div>


          {/* Mobile Domino Layout */}
          <div className="md:hidden space-y-6">
            <div className="flex items-center">
              <div className="bg-yellow-400 w-12 h-16 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <span className="text-xl font-bold text-yellow-900">1</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Kleines Problem</h4>
                <p className="text-sm text-gray-600">Gelegentliche Fressattacken nach stressigen Tagen</p>
              </div>
            </div>
            <div className="text-center text-2xl text-gray-400">↓</div>
            
            <div className="flex items-center">
              <div className="bg-orange-500 w-12 h-16 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <span className="text-xl font-bold text-orange-900">2</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Rückzug beginnt</h4>
                <p className="text-sm text-gray-600">Du meidest soziale Situationen mit Essen</p>
              </div>
            </div>
            <div className="text-center text-2xl text-gray-400">↓</div>
            
            <div className="flex items-center">
              <div className="bg-red-600 w-12 h-16 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <span className="text-xl font-bold text-red-100">3</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Selbstwert schwindet</h4>
                <p className="text-sm text-gray-600">Heimliches Essen und ständige Scham</p>
              </div>
            </div>
            <div className="text-center text-2xl text-gray-400">↓</div>
            
            <div className="flex items-center">
              <div className="bg-gray-800 w-12 h-16 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <span className="text-xl font-bold text-gray-100">4</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Lebenssabotage</h4>
                <p className="text-sm text-gray-600">Beruflicher und persönlicher Erfolg wird sabotiert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Consequences Section */}
      <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-2">
            <div className="py-20">
              <div className="max-w-4xl mx-auto">
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Benefits */}
                  <div className="bg-[#E0F7F5] p-6 rounded-lg border border-[#B2E2DE]">
                    <h3 className="font-atteron text-lg font-bold text-[#0A988B] mb-4">
                      Deine neue Realität
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="text-[#0A988B] mr-3 flex-shrink-0" size={16} />
                        <span>Abends entspannt auf der Couch sitzen, ohne Essanfälle</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="text-[#0A988B] mr-3 flex-shrink-0" size={16} />
                        <span>Endlich wieder ruhig schlafen ohne überfüllten Magen</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="text-[#0A988B] mr-3 flex-shrink-0" size={16} />
                        <span>Selbstbewusst beim Essen in Gesellschaft</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="text-[#0A988B] mr-3 flex-shrink-0" size={16} />
                        <span>Ein positives Vorbild für deine Familie sein</span>
                      </div>
                    </div>
                  </div>

                  {/* Consequences */}
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="font-atteron text-lg font-bold text-red-600 mb-4">
                      Was passiert, wenn du nichts änderst?
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={16} />
                        <span>Die Fressattacken werden häufiger und intensiver</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={16} />
                        <span>Dein Selbstvertrauen schwindet immer mehr</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={16} />
                        <span>Verschlimmerung Gesundheitlicher Probleme durch Stress-Essen</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle className="text-red-500 mr-3 flex-shrink-0" size={16} />
                        <span>Beziehungen leiden unter deiner Unzufriedenheit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    {/* Call to Action */}
      <div className="text-center ">
            <a
              href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
                🚀 Jetzt für nur 275€ starten inkl. MwSt.
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Lebenslanger Zugriff • Sofortiger Start • Alle Updates inklusive
            </p>
          </div>

      

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
         <h2 className="font-atteron text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Die <span className="text-[#0a978b]">überraschende Hauptursache</span> deiner nächtlichen Fressattacken
          </h2>


          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Es ist nicht deine Willenskraft - es ist dein Cortisol-Level
          </p>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 md:p-8 rounded-lg border border-red-100 mb-8">
            <h3 className="font-atteron text-xl font-bold text-red-600 mb-4">
              🚨 Cortisol-Fressattacken
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn du gestresst bist, produziert dein Körper zu viel vom Stresshormon Cortisol. Das schaltet dein Gehirn in den Notfall-Modus und macht normale Hunger-Signale kaputt. Deshalb isst du plötzlich alles, obwohl du satt bist.
            </p>
            <p className="text-gray-600 text-sm">
              Es ist wie ein <strong>Feueralarm im Gehirn</strong>, der ständig angeht, auch wenn es gar nicht brennt. Oder wie ein <strong>überbesorgter Hamster</strong> im Kopf, der ständig Vorräte sammelt, weil er denkt, der Winter kommt nie wieder weg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Brain className="text-[#0A988B] mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">Stress-Hunger-Spirale</h4>
              <p className="text-sm text-gray-600">Ein versteckter Kreislauf, bei dem Stress deine Hunger-Hormone so durcheinanderbringt, dass dein Körper denkt, er verhungert.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Heart className="text-[#0A988B] mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">Emotionale Verdauungsblockade</h4>
              <p className="text-sm text-gray-600">Negative Gefühle legen deine normale Verdauung lahm. Dein Körper verlangt dann ständig nach mehr Essen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <Zap className="text-[#0A988B] mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">Amygdala-Übersteuerung</h4>
              <p className="text-sm text-gray-600">Das Angstzentrum in deinem Gehirn wird durch dauernden Stress so überaktiv, dass vernünftige Entscheidungen unmöglich werden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Die Lösung: <span className="text-[#0A988B]">Emotionale Entkopplung</span>
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#0A988B]">
            <p className="text-black text-lg leading-relaxed">
              Trenne die automatische Verbindung zwischen Stress und Essen. Statt deine Willenskraft zu stärken (was nicht funktioniert), verändern wir die neurobiologischen Muster in deinem Gehirn. Das Ergebnis: Du wählst bewusst, statt automatisch zu reagieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="text-[#0A988B] mb-3 mx-auto" size={32} />
              <h4 className="font-bold text-gray-900 mb-2">Wissenschaftlich fundiert</h4>
              <p className="text-sm text-gray-600">Basiert auf neuroplastischen Prinzipien und erklärt verständlich, wie das Gehirn neue Verbindungen knüpfen kann.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="text-[#0A988B] mb-3 mx-auto" size={32} />
              <h4 className="font-bold text-gray-900 mb-2">Dauerhafte Heilung</h4>
              <p className="text-sm text-gray-600">Geht an die Wurzel des Problems und bietet echte Transformation statt oberflächlicher Symptombehandlung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section id="system" className="py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Unser 6-Phasen-System
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wissenschaftlich fundierte Emotionale Entkopplung • Symptombekämpfung • Nur 15-20 Minuten täglich
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Phase 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#0A988B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">1</div>
                <h3 className="font-atteron font-bold text-gray-900">Grundlagen</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Zielsetzung: Wo will ich hin? (SMART-Methodik)</li>
                <li>• Warum Trigger so entscheidend sind</li>
                <li>• Erste Übung: Beobachten & Dokumentieren</li>
              </ul>
              <button 
                onClick={() => toggleVisibility('phase1')}
                className="mt-4 text-[#0A988B] text-sm font-medium hover:underline"
              >
                {isVisible.phase1 ? 'Weniger anzeigen' : 'Mehr Details →'}
              </button>
              {isVisible.phase1 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>Du legst das Fundament für deine Transformation. Lernst deine Ziele klar zu definieren und verstehst, warum Trigger der Schlüssel zu dauerhafter Veränderung sind. Noch nichts verändern - nur beobachten.</p>
                </div>
              )}
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#0A988B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">2</div>
                <h3 className="font-atteron font-bold text-gray-900">Mindset</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Die innere Haltung für langfristige Veränderung</li>
                <li>• Alte vs. neue Identität bewusst formen</li>
                <li>• Reality Transurfing: Balance & Energie lenken</li>
                <li>• Mini-Mindset-Übungen: Gedanken steuern</li>
              </ul>
              <button 
                onClick={() => toggleVisibility('phase2')}
                className="mt-4 text-[#0A988B] text-sm font-medium hover:underline"
              >
                {isVisible.phase2 ? 'Weniger anzeigen' : 'Mehr Details →'}
              </button>
              {isVisible.phase2 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>Du entwickelst die mentale Stärke für dauerhafte Veränderung. Lernst deine Identität bewusst zu gestalten und Energie gezielt zu lenken. Erste Übungen um Gedanken zu steuern statt von ihnen gesteuert zu werden.</p>
                </div>
              )}
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#0A988B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">3</div>
                <h3 className="font-atteron font-bold text-gray-900">Trigger ausspüren</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Meditationsübungen für feinere Wahrnehmung</li>
                <li>• Trigger bewusst erspüren statt registrieren</li>
                <li>• Informationsreduktion: Ablenkungen minimieren</li>
                <li>• Wiederkehrende Muster durch Dokumentation</li>
              </ul>
              <button 
                onClick={() => toggleVisibility('phase3')}
                className="mt-4 text-[#0A988B] text-sm font-medium hover:underline"
              >
                {isVisible.phase3 ? 'Weniger anzeigen' : 'Mehr Details →'}
              </button>
              {isVisible.phase3 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>Du entwickelst die Fähigkeit, feiner wahrzunehmen was in dir passiert. Lernst Trigger bewusst zu erspüren und durch Informationsreduktion mehr "Signal statt Rauschen" zu bekommen.</p>
                </div>
              )}
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#0A988B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">4</div>
                <h3 className="font-atteron font-bold text-gray-900">Wahre Verlangen</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Meditation + Reflexion: Was will ich wirklich?</li>
                <li>• Erstellen einer "Wahre-Ziele-Liste"</li>
                <li>• Echte Bedürfnisse: Ruhe, Anerkennung, Freude</li>
              </ul>
              <button 
                onClick={() => toggleVisibility('phase4')}
                className="mt-4 text-[#0A988B] text-sm font-medium hover:underline"
              >
                {isVisible.phase4 ? 'Weniger anzeigen' : 'Mehr Details →'}
              </button>
              {isVisible.phase4 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>Du entdeckst durch Meditation und Reflexion was du wirklich willst statt Ersatzbefriedigung durch Essen. Echte Bedürfnisse wie Ruhe, Anerkennung, Freude, Verbindung oder Kreativität werden sichtbar.</p>
                </div>
              )}
            </div>

            {/* Phase 5 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#0A988B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">5</div>
                <h3 className="font-atteron font-bold text-gray-900">Ernährung</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Positiv-Liste / Wahre-Ziele-Liste in den Alltag einbauen</li>
                <li>• Häufige Fragen klären: "Was soll ich essen?" / "Wie mit Heißhunger umgehen?"</li>
                <li>• Mythen entkräften (z. B. Diäten, Cheat Days, "verbotene" Lebensmittel)</li>
                <li>• Integration → Ernährung wird Teil eines gesunden, balancierten Lebens</li>
              </ul>
              <button 
                onClick={() => toggleVisibility('phase5')}
                className="mt-4 text-[#0A988B] text-sm font-medium hover:underline"
              >
                {isVisible.phase5 ? 'Weniger anzeigen' : 'Mehr Details →'}
              </button>
              {isVisible.phase5 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>Integration der Wahre-Ziele-Liste in den Alltag. Häufige Fragen werden geklärt und Mythen entkräftet. Ernährung wird Teil eines gesunden, balancierten Lebens ohne Zwang.</p>
                </div>
              )}
            </div>

            {/* Phase 6 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#0A988B] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">6</div>
                <h3 className="font-atteron font-bold text-gray-900">Umsetzung</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Time Management: Wie schaffe ich Raum für meine wahren Ziele?</li>
                <li>• Umgang mit Konflikten: Familie, Freunde, Kollegen</li>
                <li>• Wie man "nein" sagt, ohne Schuldgefühle</li>
                <li>• Langfristige Balance & Lebensqualität</li>
              </ul>
              <button 
                onClick={() => toggleVisibility('phase6')}
                className="mt-4 text-[#0A988B] text-sm font-medium hover:underline"
              >
                {isVisible.phase6 ? 'Weniger anzeigen' : 'Mehr Details →'}
              </button>
              {isVisible.phase6 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>Die finale Integration: Du lernst "Nein" zu sagen ohne Schuldgefühle, schaffst Raum für deine wahren Ziele und machst gesunde Ernährung zu einem natürlichen Teil deines Lebens.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
                🚀 Jetzt für nur 275€ starten inkl. MwSt.
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Lebenslanger Zugriff • Sofortiger Start • Alle Updates inklusive
            </p>
          </div>
      </section>


      {/* Offer Section */}
      <div id="offer" className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brain Food Reset - Das 6-Phasen-System
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wissenschaftlich fundierte Emotionale Entkopplung gegen Cortisol-Fressattacken
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Resource 1 */}
              <div className="text-center">
                <Video className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">6-Phasen-Videokurs-System</h4>
                <p className="text-sm text-gray-600 mb-2">Praktische Übungen mit wissenschaftlichen Erklärungen</p>
                <p className="text-xs text-gray-400 line-through">Wert: 147€</p>
              </div>

              {/* Resource 2 */}
              <div className="text-center">
                <Brain className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Fill in the Blank Template</h4>
                <p className="text-sm text-gray-600 mb-2">Plug & Play System für deine Transformation</p>
                <p className="text-xs text-gray-400 line-through">Wert: 97€</p>
              </div>

              {/* Resource 3 */}
              <div className="text-center">
                <Calendar className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Momentum Template</h4>
                <p className="text-sm text-gray-600 mb-2">Timemanagement für Aktivitäten, die dir gut tun</p>
                <p className="text-xs text-gray-400 line-through">Wert: 87€</p>
              </div>

              {/* Resource 4 */}
              <div className="text-center">
                <FileText className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">FlavorLab Template</h4>
                <p className="text-sm text-gray-600 mb-2">Über 100 günstige, stress-reduzierende Rezepte</p>
                <p className="text-xs text-gray-400 line-through">Wert: 127€</p>
              </div>

              {/* Resource 5 */}
              <div className="text-center">
                <Heart className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">MindSpace Template</h4>
                <p className="text-sm text-gray-600 mb-2">Geführte Meditationen für Trigger-Erkennung</p>
                <p className="text-xs text-gray-400 line-through">Wert: 77€</p>
              </div>

              {/* Resource 6 */}
              <div className="text-center">
                <BarChart3 className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">DailyPath Template</h4>
                <p className="text-sm text-gray-600 mb-2">Gewohnheitstracker für Routinen, die Spaß machen</p>
                <p className="text-xs text-gray-400 line-through">Wert: 67€</p>
              </div>

              {/* Resource 7 */}
              <div className="text-center">
                <Zap className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">PowerPhase Template</h4>
                <p className="text-sm text-gray-600 mb-2">Training nach dem Maximalprinzip</p>
                <p className="text-xs text-gray-400 line-through">Wert: 97€</p>
              </div>

              {/* Resource 8 */}
              <div className="text-center">
                <Brain className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">KI-Mentor & Therapeut</h4>
                <p className="text-sm text-gray-600 mb-2">24/7 persönlicher Coach für alle Fragen</p>
                <p className="text-xs text-gray-400 line-through">Wert: 167€</p>
              </div>

              {/* Resource 9 */}
              <div className="text-center">
                <Shield className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">Stress-Detox-Notfall-Kit</h4>
                <p className="text-sm text-gray-600 mb-2">Sofort-Hilfe bei akuten Stress-Situationen</p>
                <p className="text-xs text-gray-400 line-through">Wert: 127€</p>
              </div>
            </div>
            {/* Resource 10 */}
              <div className="text-center mt-6">
                <Shield className="mx-auto  text-[#0A988B]" size={32} />
                <h4 className="font-bold text-gray-900 mb-2">3 Tage Geld-zurück-Garantie</h4>
                <p className="text-sm text-gray-600 mb-2">Ohne Wenn und Aber</p>
                <p className="text-xs text-gray-400 line-through">Wert: 127€</p>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-2">Gesamtwert aller Ressourcen:</p>
              <p className="text-2xl font-bold text-gray-400 line-through mb-2">996€</p>
              <p className="text-4xl font-bold text-[#0A988B] mb-2">Nur 275€</p>
              <p className="text-xs text-gray-500">inkl. MwSt.</p>
              <p className="text-sm text-green-600 font-medium">Du sparst 721€ (72% Rabatt)</p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
                🚀 Jetzt für nur 275€ starten inkl. MwSt.
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Lebenslanger Zugriff • Sofortiger Start • Alle Updates inklusive
            </p>
          </div>
        </div>
        
      
      {/* Target Groups Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Für wen ist Brain Food Reset?
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              Speziell entwickelt für Menschen, die unter stressbedingten Essgewohnheiten leiden
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Target Group 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center mb-4">
                <Users className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h3 className="font-atteron font-bold text-gray-900 mb-2">Gestresste Berufstätige</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lange Arbeitszeiten und hoher Druck</li>
                <li>• Abends vor dem Kühlschrank "zum Entspannen"</li>
                <li>• Wenig Zeit für bewusste Ernährung</li>
                <li>• Suchen nach effizienten, nachhaltigen Lösungen</li>
              </ul>
            </div>

            {/* Target Group 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center mb-4">
                <Target className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h3 className="font-atteron font-bold text-gray-900 mb-2">Studenten unter Druck</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Prüfungsstress und Leistungsdruck</li>
                <li>• Nächtliche Lernphasen mit Fressattacken</li>
                <li>• Unregelmäßige Tagesabläufe</li>
                <li>• Budget-bewusste, praktische Ansätze</li>
              </ul>
            </div>

            {/* Target Group 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-center mb-4">
                <Users className="mx-auto mb-3 text-[#0A988B]" size={32} />
                <h3 className="font-atteron font-bold text-gray-900 mb-2">Überlastete Eltern</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Doppelbelastung Familie und Beruf</li>
                <li>• Emotionales Essen als "Belohnung"</li>
                <li>• Wenig Zeit für sich selbst</li>
                <li>• Wollen Vorbild für ihre Kinder sein</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Was andere Leute sagen...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Nach 3 Wochen hatte ich zum ersten Mal seit Jahren ruhige Abende. Keine Fressanfälle mehr, keine Scham. Endlich wieder Kontrolle über mein Leben."
              </p>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Sarah M.</p>
                <p className="text-gray-500">Unternehmensberaterin, 35 Jahre</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Als Student war ich ständig gestresst und habe nachts alles gegessen. Nach 3 Wochen hatte ich endlich Kontrolle über mein Essverhalten."
              </p>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Tim S.</p>
                <p className="text-gray-500">Masterstudent, 24 Jahre</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Visual Features Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Das System im Detail
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecke die <span className="text-[#0A988B] font-semibold">Tools</span> und <span className="text-[#0A988B] font-semibold">Methoden</span>, die deine <span className="text-[#0A988B] font-semibold">emotionale Beziehung zum Essen transformieren</span>
            </p>
          </div>

          <div className="space-y-12">
            {/* 6-Phasen-System - Video rechts */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Textbereich */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Dein Navi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Das System ist wie ein Navi. Du musst nicht den ganzen Weg dir merken, sondern einfach der nächsten Anweisung des Navis folgen. Jede Phase baut auf der vorherigen auf und führt dich systematisch von der Trigger-Erkennung bis zur kompletten Entkopplung von Stress und Essen.
                </p>

                {/* Grüner klickbarer Text */}
                <a
                  href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                  style={{ color: '#0A988B' }}
                >
                  Probiere es aus
                </a>
              </div>
              
              {/* Video */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-video">
                  <iframe
                    title="Navi Video"
                    src="https://www.youtube.com/embed/96W0oSmWmA4?rel=0&autoplay=1&mute=1&loop=1&playlist=96W0oSmWmA4&controls=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>



           {/* KI-Mentor - Video links */}
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Video */}
              <div className="bg-white p-4 rounded-lg shadow-sm md:order-1 relative overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    title="KI-Mentor Video"
                    src="https://www.youtube.com/embed/IHpkgCgeZGg?rel=0&autoplay=1&mute=1&loop=1&playlist=IHpkgCgeZGg&controls=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
              </div>

              {/* Textbereich */}
              <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  KI - Mentor
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Ratlos? Du weißt nicht mehr weiter? Dein KI-Mentor ist mit allen Infos aus dem Kurs gefüttert und kann dir einen individuellen Plan erstellen, die nächsten Schritte erklären, bei Unklarheiten Antwort geben oder tiefer bohren als dritte neutrale Person.
                </p>

                {/* Grüner klickbarer Text */}
                <a
                  href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                  style={{ color: '#0A988B' }}
                >
                  Probiere es aus
                </a>
              </div>
            </div>


          {/* Timemanagement - Video rechts */}
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Textbereich */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Momentum aufbauen
                </h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Ja auch Timemanagement. Aber keine langweiligen Wochenpläne, wie von deiner Arbeit. Es geht darum dir Zeit für wichtige Dinge zu nehmen, die dir gut tun. Denn genau das ist der Grund, warum du Essen als Stressbewältigungsmechanismus verwendest. Nichts in deinem Kalender tut dir gut.
                </p>

                {/* Grüner klickbarer Text */}
                <a
                  href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                  style={{ color: '#0A988B' }}
                >
                  Probiere es aus
                </a>
              </div>

              {/* Video */}
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-video">
                  <iframe
                    title="Timemanagement Video"
                    src="https://www.youtube.com/embed/QTaC6XdK97g?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=QTaC6XdK97g"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>


            {/* FlavorLab - Video links */}
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Video */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video">
                    <iframe
                      title="FlavorLab Video"
                      src="https://www.youtube.com/embed/t4aUebB45Ec?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=t4aUebB45Ec"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                {/* Textbereich */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                    FlavorLab
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Unkreativ, was du dir Gesundes zum Essen machen willst? Hier gibt es über 100 Rezepte. Egal ob es schnell gehen muss, vegan, mit Fleisch, gesunde Desserts und Frühstücks.
                  </p>

                  {/* Grüner klickbarer Text */}
                  <a
                    href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: '#0A988B' }}
                  >
                    Probiere es aus
                  </a>
                </div>
              </div>



            {/* Meditation - Video rechts */}
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Textbereich */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                    Meditation
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Du wirst nicht zum nächsten Buddhisten. Reflexion ist aber der Schlüssel zum Erfolg. Du wirst nicht nur erfahren, was deine tiefen Esstrigger sind, sondern auch was du liebend gerne stattdessen machen willst, dir es aber noch nicht klar ist.
                  </p>

                  {/* Grüner klickbarer Text */}
                  <a
                    href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: '#0A988B' }}
                  >
                    Probiere es aus
                  </a>
                </div>

                {/* Video */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video">
                    <iframe
                      title="Meditation Video"
                      src="https://www.youtube.com/embed/Jx2LYnXQob0?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=Jx2LYnXQob0"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>


            {/* Gewohnheitstracker - Video links */}
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Video */}
                <div className="relative overflow-hidden rounded-lg md:order-1">
                  <div className="aspect-video">
                    <iframe
                      title="Gewohnheitstracker Video"
                      src="https://www.youtube.com/embed/SHuLu16qkLY?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=SHuLu16qkLY"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>

                {/* Textbereich */}
                <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                  <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                    Gewohnheitstracker
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Wir machen keinen extremen Monk Mode oder Selfimprovement, sondern tracken deinen Routinen, die dir wirklich Spaß machen. Und ich meine auch die, die wirklich dir gut tun und keine kurzfristigen Gelüste.
                  </p>

                  {/* Grüner klickbarer Text */}
                  <a
                    href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: '#0A988B' }}
                  >
                    Probiere es aus
                  </a>
                </div>
              </div>
            

            {/* Aktiv - Video rechts */}
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Textbereich */}
                <div className="bg-white p-6 rounded-lg shadow-sm md:order-1">
                  <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                    Für Extrameilen-Geher
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Ein geschmeidiger Trainingsplan, um dein Körper in leichte Bewegung zu bringen. Nicht stumpf 6 Mal die Woche ins Gym, sondern nach dem Maximalprinzip arbeiten. Wie du mit dem geringsten Aufwand das meiste herausholst.
                  </p>

                  {/* Optionaler grüner Link */}
                  <a
                    href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: '#0A988B' }}
                  >
                    Probiere es aus
                  </a>
                </div>

                {/* Video */}
                <div className="relative overflow-hidden rounded-lg md:order-2">
                  <div className="aspect-video">
                    <iframe
                      title="Aktiv Video"
                      src="https://www.youtube.com/embed/Ph-2VnxM9n4?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=Ph-2VnxM9n4"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>


            {/* Fill in the Blank - Video links */}
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Video */}
                <div className="relative overflow-hidden rounded-lg md:order-1">
                  <div className="aspect-video">
                    <iframe
                      title="Fill in the Blank Video"
                      src="https://www.youtube.com/embed/S4GT9nQTHjE?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=S4GT9nQTHjE"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  </div>
                </div>

                {/* Textbereich */}
                <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                  <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                    Fill in the Blank
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Das ist das Rückgrat des Brain Food Reset Programs. Hier wird das Gesagte in sehr kleine Action Steps aufgeteilt, sodass du einfach nur den Anweisungen folgen musst und dich auch nur auf die Umsetzung fokussieren kannst. Hier wird Signal von Noise getrennt.
                  </p>

                  {/* Optionaler grüner Link */}
                  <a
                    href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                    style={{ color: '#0A988B' }}
                  >
                    Probiere es aus
                  </a>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-[#0A988B] to-[#0D7A6F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Bereit für deine Transformation?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Stoppe Cortisol-Fressattacken in nur 21 Tagen mit wissenschaftlich fundierter Emotionaler Entkopplung
          </p>
          <a href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#0A988B] px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md">
              🚀 Jetzt für nur 275€ starten inkl. MwSt.
            </button>
          </a>
          <p className="text-sm text-white/80 mt-4">
            Lebenslanger Zugriff • Sofortiger Start • 60 Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>


      {/* Duality Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-2xl md:text-3xl font-bold text-[#000000] mb-4">
              Du stehst an einem
              <span className="text-[#0a978b]"> Wendepunkt. </span>
               Zwei Wege liegen vor dir.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-4">DER CORTISOL-GEFANGENE</h3>
                <p className="text-sm text-red-600 mb-6 italic">Dein Leben ohne emotionale Entkopplung</p>
                
                <div className="space-y-4 text-gray-700">
                  <p>Du weißt, wie gesunde Ernährung funktioniert. Du hast schon alles probiert - Keto, Intervallfasten, Kalorien zählen, 3.000€ Premium-Programme. Aber nichts hält langfristig, weil nichts die wahre Ursache angeht: die neurobiologische Verknüpfung zwischen Stress und Essen in deinem Gehirn.</p>
                  <p><strong>22:30 Uhr.</strong> Wieder vor dem Kühlschrank. Der stressige Tag hat dich hierher getrieben - automatisch, ohne bewusste Entscheidung. Dein Körper ist gefangen im Stress-Ess-Kreislauf: Dauerstress schüttet Cortisol aus, blockiert deine Sättigungssignale und verwandelt jeden emotionalen Moment in einen Gang zum Kühlschrank.</p>
                  <p>Die Scham wächst. Das Selbstvertrauen schwindet. Du bist gefangen in destruktiven Automatismen, während die Diät-Industrie dir einredet, es läge an mangelnder Disziplin.</p>
                </div>
              </div>
            </div>
            
            {/* Bewusste Entscheider */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">DER BEWUSSTE ENTSCHEIDER</h3>
                <p className="text-sm text-green-600 mb-6 italic">Dein Leben mit emotionaler Entkopplung</p>
                
                <div className="space-y-4 text-gray-700">
                  <p><strong>22:30 Uhr.</strong> Du merkst den Stress des Tages. Aber statt automatisch zum Kühlschrank zu gehen, entsteht eine Pause - ein Moment der Wahlfreiheit. Du erkennst: "Das ist der alte Automatismus." Und wählst bewusst eine andere Reaktion.</p>
                  
                  <p>Durch neuroplastische Neuverdrahtung hast du die Stress-Ess-Verbindung in deinem Gehirn entkoppelt. Aus "Ich muss jetzt essen" wurde "Ich kann jetzt wählen." Du bist vom Opfer deiner Impulse zum Architekten deiner Entscheidungen geworden.</p>
                  
                  <p>Entspannte Abende ohne Kühlschrank-Raids. Selbstvertrauen durch bewusste Entscheidungen. Kontrolle über dein eigenes Leben. Du hast die emotionale Souveränität erreicht, die andere noch suchen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="text-center py-10">
            <a href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
                🚀 Jetzt für nur 275€ starten inkl. MwSt.
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Lebenslanger Zugriff • Sofortiger Start • Alle Updates inklusive
            </p>
          </div>

      </section>

                  
      

      {/* Combined FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            {/* Erste 4 FAQs */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">
                Wie schnell sehe ich erste Erfolge?
              </h3>
              <p className="text-gray-700">
                Die meisten Teilnehmer berichten bereits nach 14-21 Tagen von deutlich weniger Fressattacken. 
                Das vollständige Programm ist auf langfristige und nachhaltige Veränderung ausgelegt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">
                Wie viel Zeit muss ich täglich investieren?
              </h3>
              <p className="text-gray-700">
                In 5 Stunden Videomaterial führen dich 21 Tage voller kurzer, praxisnaher Action Steps (je ca. 5 Minuten). Nimm dir täglich 15–20 Minuten Zeit, um die Videos anzuschauen und die Übungen umzusetzen – so holst du das Maximum aus deinem Programm heraus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Brauche ich besondere Vorkenntnisse?</h3>
              <p className="text-gray-600 text-sm">Nein. Das System ist für Anfänger entwickelt. Alles wird Schritt für Schritt erklärt. Du brauchst keine Meditation-Erfahrung oder psychologisches Wissen. Nur die Bereitschaft, 20 Minuten täglich zu investieren.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">
                Was unterscheidet euer Programm von Diäten?
              </h3>
              <p className="text-gray-700">
                Wir arbeiten nicht mit Verboten oder Kalorienzählen, sondern lösen die neurologischen 
                Ursachen der Fressattacken. Das führt zu dauerhaften Veränderungen statt Jo-Jo-Effekt.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Ist das wieder eine Diät?</h3>
              <p className="text-gray-600 text-sm">Nein, überhaupt nicht. Diäten behandeln nur die Symptome. Wir gehen an die Wurzel - die emotionalen Trigger. Du lernst, warum du isst, nicht was du essen sollst. Keine Kalorienzählen, keine Verbotslisten.</p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Muss ich auf meine Lieblingsspeisen verzichten?</h3>
              <p className="text-gray-600 text-sm">Absolut nicht. Es geht nicht um Verzicht, sondern um die Trennung der automatischen Verbindung zwischen Stress und Essen. Du lernst bewusste Entscheidungen zu treffen. Wenn du Lust auf Schokolade hast, isst du sie - aber aus Freude, nicht aus Stress.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Was ist, wenn ich einen Rückfall habe?</h3>
              <p className="text-gray-600 text-sm">Rückfälle sind normal und Teil unseres Prozesses. Es ist aber kein Willenskraft-Problem, sondern ein emotionales Problem. Und emotionale Probleme brauchen emotionale Lösungen. Deswegen gibt es das emotionsbasierte Essverhalten Transformationsystem.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Funktioniert das auch bei sehr stressigen Jobs/Tagen?</h3>
              <p className="text-gray-600 text-sm">Gerade für Menschen mit hohem Stresslevel ist das System entwickelt worden. Die Techniken sind so konzipiert worden, dass diese auch dann funktionieren, wenn du wenig Zeit hast oder unter Druck stehst.</p>
            </div>
            
            
            
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Was ist, wenn mein Partner/Freunde nicht mitmacht?</h3>
              <p className="text-gray-600 text-sm">Das System funktioniert auch, wenn dein Partner/Freunde nicht teilnimmt. Du lernst sogar, wie du mit unterschiedlichen Essgewohnheiten im sozialen Umfeld umgehst, ohne Konflikte zu schaffen oder deine eigenen Ziele zu gefährden.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Brauche ich spezielle Lebensmittel oder Supplements?</h3>
              <p className="text-gray-600 text-sm">Nein, du brauchst keine teuren Spezialprodukte. Das System arbeitet mit normalen Lebensmitteln aus dem Supermarkt. Keine Supplements, keine Shakes, keine besonderen Zutaten - nur bewusste Entscheidungen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">
                Funktioniert das auch bei langjährigen Problemen?
              </h3>
              <p className="text-gray-700">
                Ja, gerade bei chronischen Stress-Essmustern zeigt unser emotionsbasierter Ansatz 
                besonders gute Ergebnisse. Viele Teilnehmer hatten bereits jahrelang erfolglos versucht, 
                das Problem zu lösen.
              </p>
            </div>    

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Was passiert nach den 21 Tagen?</h3>
              <p className="text-gray-600 text-sm">Nach 21 Tagen hast du die Grundlagen verinnerlicht. Aber du bekommst lebenslangen Zugriff auf alle Materialien und Updates. Viele nutzen die Techniken jahrelang und verfeinern sie immer weiter.</p>
            </div>

          </div>
        </div>
      </section>

      
      {/* Final CTA */}
      <section className="py-12 px-4 md:px-6 bg-gradient-to-r from-[#0A988B] to-[#0D7A6F]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-atteron text-2xl md:text-3xl font-bold mb-4">
            Bist du bereit für deine Transformation?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Das 6-Phasen-System der Emotionalen Entkopplung für Selbstständige, Studenten und Eltern stoppt Cortisol-Fressattacken in nur 21 Tagen.
          </p>
          
          <a href="https://whop.com/checkout/plan_KUx9TprD89dFB?d2c=true" target="_blank" rel="noopener noreferrer" className="block">
            <button className="bg-white text-[#0A988B] px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md">
              🚀 Jetzt für nur 275€ starten inkl. MwSt.
            </button>
          </a>
          
          <p className="text-sm text-white mt-2 max-w-md mx-auto">
            Lebenslanger Zugriff • Sofortiger Start • inkl. MwSt.
          </p>
        </div>
      </section>

      <footer className="bg-slate-800 text-white px-4 md:px-6" style={{minHeight: '30vh'}}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col justify-center h-full py-12">
            <div className="text-center mb-8">
              <h3 className="font-['Unbounded'] text-2xl font-bold mb-6">Brain Food Reset</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-bold mb-4 text-lg">Programm</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>6-Phasen-System</li>
                  <li>Wissenschaftliche Basis</li>
                  <li>Praktische Umsetzung</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-lg">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>60 Tage Geld-zurück-Garantie</li>
                  <li>Lebenslanger Zugang</li>
                  <li>Sofortiger Start</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-lg">Rechtliches</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Datenschutz</li>
                  <li>Impressum</li>
                  <li>AGB</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-gray-600">
              <p className="text-gray-400">
                © 2025 Brain Food Reset. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;