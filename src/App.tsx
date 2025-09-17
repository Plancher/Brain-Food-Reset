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
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h2 className="font-atteron text-2xl font-bold text-teal-primary">
                Brain Foods Research
              </h2>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#programm" className="text-gray-600 hover:text-teal-primary transition-colors">Programm</a>
              <a href="#erfolge" className="text-gray-600 hover:text-teal-primary transition-colors">Erfolge</a>
              <a href="#ueber" className="text-gray-600 hover:text-teal-primary transition-colors">Über uns</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="text-center">
            {/* Left Content */}
            <div>
              <h1 className="font-atteron text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
                <span className="text-primary font-semibold">Stoppe</span> Cortisol-Fressattacken in <span className="text-primary font-semibold">21 Tagen</span>
                <span className="block mt-2 text-gray-800">
                  mit Emotionaler Entkopplung
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mt-4 md:mt-8 leading-relaxed max-w-4xl mx-auto">
                Wissenschaftlich bewiesene <strong>Emotionale Entkopplung</strong> für dauerstressige 
                <span className="text-primary font-semibold"> Selbstständige</span>, 
                <span className="text-primary font-semibold"> Studenten</span> und 
                <span className="text-primary font-semibold"> Eltern</span>
              </p>

              {/* VSL Video */}
              <div className="mt-8 md:mt-12">
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

              {/* CTA Button */}
              <div className="mt-6 md:mt-8">
                <button className="inline-flex items-center justify-center px-8 md:px-12 py-4 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-md hover:shadow-lg hover:from-secondary hover:to-primary transform hover:scale-105 transition-all duration-200 w-full md:w-auto">
                  <span className="mr-3">🚀</span>
                  Jetzt für nur 275€ starten inkl. MwSt.
                </button>
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
          </div>
        </div>
      </section>

      {/* Benefits & Consequences Section - Before Doppelleben */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary mb-12 font-atteron text-center">
                Stell dir vor, du könntest:
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefits */}
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
                  <h3 className="font-atteron text-lg font-bold text-primary mb-4">
                    Deine neue Realität
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                      <span>Abends entspannt auf der Couch sitzen, ohne Essanfälle</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                      <span>Endlich wieder ruhig schlafen ohne überfüllten Magen</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                      <span>Selbstbewusst beim Essen in Gesellschaft</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
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

      {/* Doppelleben der Stress-Esser Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-gray-100/40 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-atteron text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Das Doppelleben der
              <span className="block text-primary">Stress-Esser</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tagsüber erfolgreich und kontrolliert — nachts hilflos vor dem Kühlschrank
            </p>
          </div>

          {/* Split Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {/* Tagsüber - Grün */}
            <div className="group bg-gradient-to-br from-success-50/80 to-success-100/60 backdrop-blur-sm border-2 border-success-400/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.03] hover:border-success-500/80 hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="font-atteron text-2xl font-semibold text-success-800 mb-2 transition-colors duration-300 group-hover:text-success-900">
                  Tagsüber: Der Erfolgsmensch
                </h3>
              </div>

              <div className="space-y-6 transition-all duration-500 group-hover:space-y-7">
                <div>
                  <h4 className="font-atteron text-lg font-bold text-success-700 mb-3 flex items-center transition-colors duration-300 group-hover:text-success-800">
                    <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-success-200 group-hover:scale-110">
                      <Target className="w-5 h-5 text-success-600" />
                    </div>
                    Perfekte Selbstkontrolle
                  </h4>
                  <p className="text-success-600 leading-relaxed transition-colors duration-300 group-hover:text-success-700">
                  <span className="text-black leading-relaxed">
                    Diszipliniert bei Meetings, strukturiert im Alltag, bewundert für deine Leistung
                  </span>
                </p>
                </div>

                <div>
                  <h4 className="font-atteron text-lg font-bold text-success-700 mb-3 flex items-center transition-colors duration-300 group-hover:text-success-800">
                    <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-success-200 group-hover:scale-110">
                      <TrendingUp className="w-5 h-5 text-success-600" />
                    </div>
                    Beruflicher Erfolg
                  </h4>
                  <p className="text-black leading-relaxed">
                    Karriere läuft, Projekte erfolgreich, von Kollegen respektiert
                  </p>
                </div>

                <div>
                  <h4 className="font-atteron text-lg font-bold text-success-700 mb-3 flex items-center transition-colors duration-300 group-hover:text-success-800">
                    <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-success-200 group-hover:scale-110">
                      <Users className="w-5 h-5 text-success-600" />
                    </div>
                    Soziale Anerkennung
                  </h4>
                  <p className="text-black leading-relaxed">
                    "Wie machst du das nur?" - Bewunderung für deine scheinbare Perfektion
                  </p>
                </div>
              </div>
            </div>

            {/* Nachts - Rot */}
            <div className="group bg-gradient-to-br from-danger-50/80 to-danger-100/60 backdrop-blur-sm border-2 border-danger-400 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.03] hover:border-danger-500 hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="font-atteron text-2xl font-semibold text-danger-800 mb-2 transition-colors duration-300 group-hover:text-danger-900">
                  Nachts: Der Kontrollverlust
                </h3>
              </div>

              <div className="space-y-6 transition-all duration-500 group-hover:space-y-7">
                <div>
                  <h4 className="font-atteron text-lg font-bold text-danger-700 mb-3 flex items-center transition-colors duration-300 group-hover:text-danger-800">
                    <div className="w-10 h-10 bg-danger-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-danger-200 group-hover:scale-110">
                      <Brain className="w-5 h-5 text-danger-600" />
                    </div>
                    Mentaler Autopilot
                  </h4>
                  <p className="text-black leading-relaxed">
                    Wie ferngesteuert zum Kühlschrank, unfähig zu stoppen
                  </p>
                </div>

                <div>
                  <h4 className="font-atteron text-lg font-bold text-danger-700 mb-3 flex items-center transition-colors duration-300 group-hover:text-danger-800">
                    <div className="w-10 h-10 bg-danger-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-danger-200 group-hover:scale-110">
                      <AlertTriangle className="w-5 h-5 text-danger-600" />
                    </div>
                    Emotionale Überwältigung
                  </h4>
                  <p className="text-black leading-relaxed">
                    Scham, Selbstvorwürfe und das Gefühl, ein Versager zu sein
                  </p>
                </div>

                <div>
                  <h4 className="font-atteron text-lg font-bold text-danger-700 mb-3 flex items-center transition-colors duration-300 group-hover:text-danger-800">
                    <div className="w-10 h-10 bg-danger-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-all duration-300 group-hover:bg-danger-200 group-hover:scale-110">
                      <Moon className="w-5 h-5 text-danger-600" />
                    </div>
                    Nächtliche Fressattacken
                  </h4>
                  <p className="text-black leading-relaxed">
                    2 Uhr nachts, 3000 Kalorien später - wieder passiert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erkennst du dich wieder Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50/30 to-orange-100/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Gesamter Abschnitt in einem Rahmen */}
          <div className="max-w-3xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-orange-200/50 hover:bg-white/95 hover:shadow-xl hover:border-orange-300/70 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              {/* Header */}
              <div className="text-center mb-12">
                {/* Heart Icon */}
                <div className="w-20 h-20 bg-danger-100 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-danger-200 group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-8 h-8 text-danger-600 group-hover:text-danger-700 transition-colors duration-300" />
                </div>
                
                <h2 className="font-atteron text-5xl md:text-6xl font-semibold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  Erkennst du dich wieder?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Du bist nicht schwach. Du bist nicht willensschwach.
                </p>
                <p className="text-2xl font-bold text-danger-600 group-hover:text-danger-700 group-hover:scale-105 transition-all duration-300">
                  Du bist gestresst.
                </p>
              </div>

              {/* Testimonial */}
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  "Ich dachte, ich bin einfach undiszipliniert. Bis ich verstand: Es war mein Cortisol-Level, nicht mein Charakter."
                </p>
                <footer className="text-primary font-semibold group-hover:text-secondary transition-colors duration-300">
                  — Sarah, 34, Projektmanagerin
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Alltägliche Situationen Section */}
      <section className="py-20 bg-gradient-to-b from-white via-red-50/20 to-red-100/30 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-atteron text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Erkennst du dich wieder?
            </h2>
            <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
              <span className="text-gray-900">Diese alltäglichen Situationen zeigen, wie tief das Problem wirklich geht</span>
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Im Büro - Dunkelgrau */}
            <div className="group bg-danger-50/40 backdrop-blur-sm border-2 border-danger-500 rounded-2xl p-8 text-gray-800 hover:bg-danger-100/60 hover:scale-[1.03] hover:shadow-2xl hover:border-danger-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <h3 className="font-atteron text-2xl font-semibold mb-8 text-danger-600 group-hover:text-danger-700 transition-colors duration-300">
                Im Büro
              </h3>
              <div className="space-y-5 transition-all duration-300 group-hover:space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du gehst nicht in die Kantine, weil alle sehen, was du isst
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du versteckst Snacks in Schubladen wie ein Geheimnis
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du lehnst spontane Lunch-Meetings ab
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du meidest die Kaffeeküche während der Stoßzeiten
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du trägst oversized Blazer, um deinen Bauch zu verstecken
                  </p>
                </div>
              </div>
            </div>

            {/* Zuhause - Türkisgrün */}
            <div className="group bg-danger-50/40 backdrop-blur-sm border-2 border-danger-500 rounded-2xl p-8 text-gray-800 hover:bg-danger-100/60 hover:scale-[1.03] hover:shadow-2xl hover:border-danger-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <h3 className="font-atteron text-2xl font-semibold mb-8 text-danger-600 group-hover:text-danger-700 transition-colors duration-300">
                Zuhause
              </h3>
              <div className="space-y-5 transition-all duration-300 group-hover:space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du isst heimlich nach dem Abendessen, wenn alle schlafen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du versteckst leere Verpackungen tief im Müll
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du lügst über das, was du gegessen hast
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du ziehst dich nicht vor deinem Partner aus
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du meidest körperliche Nähe nach dem Essen aus Scham
                  </p>
                </div>
              </div>
            </div>

            {/* Beim Einkaufen - Türkisgrün */}
            <div className="group bg-danger-50/40 backdrop-blur-sm border-2 border-danger-500 rounded-2xl p-8 text-gray-800 hover:bg-danger-100/60 hover:scale-[1.03] hover:shadow-2xl hover:border-danger-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <h3 className="font-atteron text-2xl font-semibold mb-8 text-danger-600 group-hover:text-danger-700 transition-colors duration-300">
                Beim Einkaufen
              </h3>
              <div className="space-y-5 transition-all duration-300 group-hover:space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du gehst zu verschiedenen Supermärkten, damit niemand deine Muster erkennt
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du nutzt Self-Checkout, um nicht mit Kassierern zu sprechen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du kaufst "Alibis" um ungesunde Einkäufe zu tarnen
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du gehst spät abends einkaufen, wenn weniger Menschen da sind
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du meidest den Gang mit Süßigkeiten, denkst aber ständig daran
                  </p>
                </div>
              </div>
            </div>

            {/* In deinem Kopf - Türkisgrün */}
            <div className="group bg-danger-50/40 backdrop-blur-sm border-2 border-danger-500 rounded-2xl p-8 text-gray-800 hover:bg-danger-100/60 hover:scale-[1.03] hover:shadow-2xl hover:border-danger-600 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <h3 className="font-atteron text-2xl font-semibold mb-8 text-danger-600 group-hover:text-danger-700 transition-colors duration-300">
                In deinem Kopf
              </h3>
              <div className="space-y-5 transition-all duration-300 group-hover:space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    "Können andere sehen, dass ich zugenommen habe?"
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    "Haben sie komisch geschaut, als ich das bestellt habe?"
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du planst schon den nächsten "Fressanfall" während du noch kaust
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du interpretierst neutrale Kommentare als Kritik
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-danger-500 mt-1 flex-shrink-0 font-bold group-hover:text-danger-600 transition-colors duration-300">→</span>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm">
                    Du fühlst dich wie ein Hochstapler, der versucht "normal" zu wirken
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domino Effect Consequences Section */}
      <section className="py-20 bg-white">
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

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-6 bg-gradient-to-r from-[#0A988B] to-[#0D7A6F]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-atteron text-2xl md:text-3xl font-bold mb-4">
            Bist du bereit für deine Transformation?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Das 6-Phasen-System der Emotionalen Entkopplung für Selbstständige, Studenten und Eltern stoppt Cortisol-Fressattacken in nur 21 Tagen.
          </p>
          
          <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer" className="block">
            <button className="bg-white text-[#0A988B] px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md">
              🚀 Jetzt für nur 275€ starten inkl. MwSt.
            </button>
          </a>
          
          <p className="text-sm text-white mt-2 max-w-md mx-auto">
            Lebenslanger Zugriff • Sofortiger Start • inkl. MwSt.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Die überraschende Hauptursache deiner nächtlichen Fressattacken
          </h2>
          <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed mb-8">
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
      </section>

      {/* Middle CTA Section */}
      <section className="py-8 px-4 md:px-6 bg-gradient-to-r from-[#0A988B]/20 to-[#0D7A6F]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Bereit, deine Cortisol-Fressattacken zu stoppen?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Über 500 gestresste Studenten und Berufstätige haben bereits ihre emotionale Beziehung zum Essen transformiert.
          </p>
          <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#0A988B] px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto border-2 border-[#0A988B]">
              🚀 Jetzt für nur 275€ starten inkl. MwSt.
            </button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Lebenslanger Zugriff • Sofortiger Start • inkl. MwSt.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Was unsere Kunden sagen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
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
              <div className="flex items-center mb-4">
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

      {/* Offer Section */}
      <section id="offer" className="py-12 px-4 md:px-6">
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

            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-2">Gesamtwert aller Ressourcen:</p>
              <p className="text-2xl font-bold text-gray-400 line-through mb-2">996€</p>
              <p className="text-4xl font-bold text-[#0A988B] mb-2">Nur 275€</p>
              <p className="text-xs text-gray-500">inkl. MwSt.</p>
              <p className="text-sm text-green-600 font-medium">Du sparst 721€ (72% Rabatt)</p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
                🚀 Jetzt für nur 275€ starten inkl. MwSt.
              </button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Lebenslanger Zugriff • Sofortiger Start • Alle Updates inklusive
            </p>
          </div>
        </div>
      </section>

      {/* Target Groups Section - moved here */}
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
            <div className="bg-white p-6 rounded-lg shadow-sm border hover-card-recognition">
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
            <div className="bg-white p-6 rounded-lg shadow-sm border hover-card-recognition">
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
            <div className="bg-white p-6 rounded-lg shadow-sm border hover-card-recognition">
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

      {/* Visual Features Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              So funktioniert das System
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Entdecke die <span className="text-[#0A988B] font-semibold">Tools</span> und <span className="text-[#0A988B] font-semibold">Methoden</span>, die deine <span className="text-[#0A988B] font-semibold">emotionale Beziehung zum Essen transformieren</span>
            </p>
          </div>

          <div className="space-y-12">
            {/* 6-Phasen-System - Video rechts */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Dein Navi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Das System ist wie ein Navi. Du musst nicht den ganzen Weg dir merken, sondern einfach der nächsten Anweisung des Navis folgen. Jede Phase baut auf der vorherigen auf und führt dich systematisch von der Trigger-Erkennung bis zur kompletten Entkopplung von Stress und Essen.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
                  <iframe 
                    src="https://www.youtube.com/embed/96W0oSmWmA4?rel=0&autoplay=1&loop=1&playlist=96W0oSmWmA4&controls=1" 
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}} 
                    allowFullScreen 
                    scrolling="no" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* KI-Mentor - Video links */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm md:order-1">
                <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
                  <iframe 
                    src="https://www.youtube.com/embed/IHpkgCgeZGg?rel=0&autoplay=1&loop=1&playlist=IHpkgCgeZGg&controls=1" 
                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}} 
                    allowFullScreen 
                    scrolling="no" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                  ></iframe>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  KI - Mentor
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ratlos? Du weißt nicht mehr weiter? Dein KI - Mentor ist mit allen Infos aus dem Kurs gefüttert und kann dir einen individuellen Plan erstellen, die nächsten Schritte erklären, bei Unklarheiten Antwort geben oder tiefer bohren als dritte neutrale Person.
                </p>
              </div>
            </div>

            {/* Timemanagement - Video rechts */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Momentum aufbauen
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja auch Timemanagement. Aber keine langweiligen Wochenpläne, wie von deiner Arbeit. Es geht darum dir Zeit für wichtige Dinge zu nehmen, die dir gut tun. Denn genau das ist der Grund, warum du Essen als Stressbewältigungsmechanismus verwendest. Nichts in deinem Kalender tut dir gut.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/zWIdUtRMMpc?modestbranding=1&rel=0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                    style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* FlavorLab - Video links */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm md:order-1">
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/t4aUebB45Ec?modestbranding=1&rel=0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                    style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}
                  ></iframe>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  FlavorLab
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unkreativ, was du dir Gesundes zum Essen machen willst? Hier gibt es über 100 Rezepte. Egal ob es schnell gehen muss, vegan, mit Fleisch, gesunde Desserts und Frühstücks.
                </p>
              </div>
            </div>

            {/* Meditation - Video rechts */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Meditation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Du wirst nicht zum nächsten Buddhisten. Reflexion ist aber der Schlüssel zum Erfolg. Du wirst nicht nur erfahren, was deine tiefen Esstrigger sind, sondern auch was du liebend gerne stattdessen machen willst, dir es aber noch nicht klar ist.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/Jx2LYnXQob0?modestbranding=1&rel=0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                    style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Gewohnheitstracker - Video links */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm md:order-1">
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/SHuLu16qkLY?modestbranding=1&rel=0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                    style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}
                  ></iframe>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Gewohnheitstracker
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wir machen keinen extremen Monk Mode oder Selfimprovement, sondern tracken deinen Routinen, die dir wirklich Spaß machen. Und ich meine auch die die wirklich dir gut tun und keine kurzfristigen gelüste.
                </p>
              </div>
            </div>

            {/* Aktiv - Video rechts */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Für Extrameilen-Geher
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ein geschmeidiger Trainingsplan, um dein Körper in leichte Bewegung zu bringe. Nicht stumpf 6 Mal die Woche ins Gym, sondern nach dem Maximalprinzip arbeiten. Wie du mit dem geringsten Aufwand das meiste herrausholst.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/Ph-2VnxM9n4?modestbranding=1&rel=0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                    style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Fill in the Blank - Video links */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm md:order-1">
                <div style={{paddingBottom: '56.25%', position: 'relative'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/S4GT9nQTHjE?modestbranding=1&rel=0" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                    style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}
                  ></iframe>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm md:order-2">
                <h3 className="font-atteron text-2xl font-bold text-gray-900 mb-4">
                  Fill in the Blank
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Das ist das Rückgrat des Brain Food Reset Programs. Hier wird das Gesagte in sehr kleine Action Steps aufgeteilt, sodass du einfach nur den Anweisungen folgen musst und dich auch nur auf die Umsetzung fokussieren kannst. Hier wird Signal von Noise getrennt.
                </p>
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
          <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer">
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
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-atteron text-2xl md:text-3xl font-bold text-black mb-4">
              Du stehst an einem Wendepunkt. Zwei Wege liegen vor dir.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover-card-visual">
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
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover-card-visual">
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
      </section>

      {/* Additional CTA after Duality Section */}
      <section className="py-8 px-4 md:px-6 bg-gradient-to-r from-[#0A988B]/10 to-[#0D7A6F]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Welchen Weg wählst du?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Die Entscheidung liegt bei dir. Bleibst du im Cortisol-Kreislauf gefangen oder wählst du bewusste Kontrolle?
          </p>
          <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
              🚀 Jetzt für nur 275€ starten inkl. MwSt.
            </button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Lebenslanger Zugriff • Sofortiger Start • inkl. MwSt.
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Wie schnell sehe ich erste Erfolge?
              </h3>
              <p className="text-gray-700">
                Die meisten Teilnehmer berichten bereits nach 7-14 Tagen von deutlich weniger Fressattacken. 
                Das vollständige Programm ist auf nachhaltige Veränderung ausgelegt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Funktioniert das auch bei langjährigen Problemen?
              </h3>
              <p className="text-gray-700">
                Ja, gerade bei chronischen Stress-Essmustern zeigt unser wissenschaftlich fundierter Ansatz 
                besonders gute Ergebnisse. Viele Teilnehmer hatten bereits jahrelang erfolglos versucht, 
                das Problem zu lösen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Was unterscheidet euer Programm von Diäten?
              </h3>
              <p className="text-gray-700">
                Wir arbeiten nicht mit Verboten oder Kalorienzählen, sondern lösen die neurologischen 
                Ursachen der Fressattacken. Das führt zu dauerhaften Veränderungen statt Jo-Jo-Effekt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Wie viel Zeit muss ich täglich investieren?
              </h3>
              <p className="text-gray-700">
                Das Programm ist für vielbeschäftigte Menschen konzipiert. Sie benötigen täglich nur 
                10-15 Minuten für die praktischen Übungen.
              </p>
            </div>

            {/* Weitere 12 FAQs */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Wie schnell sehe ich erste Ergebnisse?</h3>
              <p className="text-gray-600 text-sm">Die meisten Menschen berichten bereits nach 7-10 Tagen von weniger nächtlichen Fressattacken. Du wirst merken, dass du abends ruhiger wirst und nicht mehr automatisch zum Kühlschrank läufst. Die vollständige emotionale Entkopplung erfolgt in der Regel innerhalb von 21 Tagen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Muss ich auf meine Lieblingsspeisen verzichten?</h3>
              <p className="text-gray-600 text-sm">Absolut nicht. Es geht nicht um Verzicht, sondern um die Trennung der automatischen Verbindung zwischen Stress und Essen. Du lernst bewusste Entscheidungen zu treffen. Wenn du Lust auf Schokolade hast, isst du sie - aber aus Freude, nicht aus Stress.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Wie viel Zeit muss ich täglich investieren?</h3>
              <p className="text-gray-600 text-sm">Das System ist für vielbeschäftigte Menschen entwickelt. Du benötigst nur 15-20 Minuten täglich für die Übungen und Reflexionen. Das ist weniger Zeit, als du normalerweise vor dem Kühlschrank verbringst.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Was ist, wenn ich einen Rückfall habe?</h3>
              <p className="text-gray-600 text-sm">Rückfälle sind normal und Teil des Prozesses. Das System lehrt dich, wie du mit solchen Momenten umgehst, ohne in Schuldgefühle zu verfallen. Du lernst, schnell wieder auf den richtigen Weg zu finden.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Funktioniert das auch bei sehr stressigen Jobs?</h3>
              <p className="text-gray-600 text-sm">Gerade für Menschen mit hohem Stresslevel ist das System entwickelt worden. Die Techniken sind so einfach, dass du sie auch in einer 5-Minuten-Pause zwischen Vorlesungen anwenden kannst. Viele Studenten nutzen die Methoden zwischen Lernphasen.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Ist das wieder eine Diät?</h3>
              <p className="text-gray-600 text-sm">Nein, überhaupt nicht. Diäten behandeln nur die Symptome. Wir gehen an die Wurzel - die emotionalen Trigger. Du lernst, warum du isst, nicht was du essen sollst. Keine Kalorienzählen, keine Verbotslisten.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Was passiert nach den 21 Tagen?</h3>
              <p className="text-gray-600 text-sm">Nach 21 Tagen hast du die Grundlagen verinnerlicht. Aber du bekommst lebenslangen Zugriff auf alle Materialien und Updates. Viele nutzen die Techniken jahrelang und verfeinern sie immer weiter.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Brauche ich besondere Vorkenntnisse?</h3>
              <p className="text-gray-600 text-sm">Nein. Das System ist für Anfänger entwickelt. Alles wird Schritt für Schritt erklärt. Du brauchst keine Meditation-Erfahrung oder psychologisches Wissen. Nur die Bereitschaft, 15 Minuten täglich zu investieren.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Kann ich das neben meinem Job machen?</h3>
              <p className="text-gray-600 text-sm">Das System ist speziell für berufstätige Menschen entwickelt. Die Übungen passen in jeden Alltag. Viele machen sie morgens vor der Arbeit oder abends vor dem Fernseher. Es passt sich deinem Leben an, nicht umgekehrt.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Wie unterscheidet sich das von anderen Programmen?</h3>
              <p className="text-gray-600 text-sm">Andere Programme fokussieren auf Symptome (was essen, Kalorienzählen). Wir gehen an die Wurzel - die emotionalen Trigger. Statt Willenskraft zu trainieren, entkoppeln wir die automatische Stress-Essen-Verbindung dauerhaft.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Was ist, wenn mein Partner nicht mitmacht?</h3>
              <p className="text-gray-600 text-sm">Das System funktioniert auch, wenn dein Partner nicht teilnimmt. Du lernst sogar, wie du mit unterschiedlichen Essgewohnheiten in der Familie umgehst, ohne Konflikte zu schaffen oder deine eigenen Ziele zu gefährden.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-2">Brauche ich spezielle Lebensmittel oder Supplements?</h3>
              <p className="text-gray-600 text-sm">Nein, du brauchst keine teuren Spezialprodukte. Das System arbeitet mit normalen Lebensmitteln aus dem Supermarkt. Keine Supplements, keine Shakes, keine besonderen Zutaten - nur bewusste Entscheidungen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-6 bg-gradient-to-r from-[#0A988B]/10 to-[#0D7A6F]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-atteron text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Welchen Weg wählst du?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Die Entscheidung liegt bei dir. Bleibst du im Cortisol-Kreislauf gefangen oder wählst du bewusste Kontrolle?
          </p>
          <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md w-full md:w-auto">
              🚀 Jetzt für nur 275€ starten inkl. MwSt.
            </button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Lebenslanger Zugriff • Sofortiger Start • inkl. MwSt.
          </p>
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
          
          <a href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" target="_blank" rel="noopener noreferrer" className="block">
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
                  <li>• 6-Phasen-System</li>
                  <li>• Wissenschaftliche Basis</li>
                  <li>• Praktische Umsetzung</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-lg">Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 60 Tage Geld-zurück-Garantie</li>
                  <li>• Lebenslanger Zugang</li>
                  <li>• Sofortiger Start</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-lg">Rechtliches</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Datenschutz</li>
                  <li>• Impressum</li>
                  <li>• AGB</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-gray-600">
              <p className="text-gray-400">
                © 2024 Brain Food Reset. Alle Rechte vorbehalten.
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