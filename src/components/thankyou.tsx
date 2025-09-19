import React from "react";
import { CheckCircle, BookOpen, Users, Calendar, Zap, AlertTriangle, ArrowDown } from "lucide-react";
import sarah from '../img/sarah.webp';
import marcus from '../img/marcus.webp';
import ProgressBar from './progressbar';

const bulletIconMap: Record<string, JSX.Element> = {
  access: <CheckCircle className="w-6 h-6 text-[#0a978b]" />,
  science: <BookOpen className="w-6 h-6 text-[#0a978b]" />,
  community: <Users className="w-6 h-6 text-[#0a978b]" />,
  calendar: <Calendar className="w-6 h-6 text-[#0a978b]" />,
  lightning: <Zap className="w-6 h-6 text-[#0a978b]" />,
  problem: <AlertTriangle className="w-6 h-6 text-[#0a978b]" />,
};

export default function ThankYouPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans">

    {/* HERO */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-between items-center bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-6 py-8 text-center"
      >
        {/* Oberer Content */}
        <div className="w-full max-w-3xl flex flex-col items-center space-y-6">
          {/* ProgressBar */}
          <div className="w-full">
            <ProgressBar step={1} /> {/* Aktuellen Schritt dynamisch setzen */}
          </div>

          {/* Überschrift */}
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Willkommen bei deiner Transformation - Du hast den wichtigsten Schritt gemacht!
          </h1>

          {/* Text */}
          <p className="text-lg md:text-xl max-w-3xl">
            In den nächsten 21 Tagen wirst du erleben, wie emotionale Entkopplung dein Leben verändert. Hier ist alles, was du jetzt brauchst:
          </p>

          {/* Box mit Bullet Points */}
          <div className="bg-white text-gray-900 rounded-xl p-10 shadow-lg border border-gray-300 w-full max-w-3xl">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                {bulletIconMap.access} 
                <span className="font-semibold">Zugang zum Brain Food Reset Programm bestätigt</span>
              </li>
              <li className="flex items-start gap-3">
                {bulletIconMap.access} 
                <span className="font-semibold">Alle 6 Video-Module sind freigeschaltet</span>
              </li>
              <li className="flex items-start gap-3">
                {bulletIconMap.access} 
                <span className="font-semibold">Templates und KI-Mentor sind aktiviert</span>
              </li>
              <li className="flex items-start gap-3">
                {bulletIconMap.access} 
                <span className="font-semibold">Willkommens-E-Mail ist unterwegs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button unten immer sichtbar */}
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={() => scrollToSection('niewieder')}
            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] rounded-lg shadow-md hover:shadow-lg hover:from-[#0D7A6F] hover:to-[#0A988B] transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowDown className="w-6 h-6" />
            Weiter
          </button>
        </div>
      </section>



     <section
        id="niewieder"
        className="min-h-screen flex flex-col justify-start items-center bg-white px-6 py-12 space-y-10"
      >
        {/* ProgressBar */}
        <div className="w-full max-w-3xl">
          <ProgressBar step={2} /> {/* Hier Schritt dynamisch setzen */}
        </div>

        {/* Content Box */}
        <div className="bg-white border border-gray-300 rounded-xl p-12 w-full max-w-3xl text-center space-y-6 shadow-lg">
          <h2 className="text-4xl font-bold text-[#0A988B]">Nie wieder...</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center justify-center gap-4">
              <span className="text-2xl">⚡</span>
              <span>nach 20 Uhr automatisch zum Kühlschrank laufen</span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <span className="text-2xl">⚡</span>
              <span>die Kontrolle über deine Impulse zurückgewinnen</span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <span className="text-2xl">📚</span>
              <span>basiert auf neuester Cortisol-Forschung</span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <span className="text-2xl">✅</span>
              <span>Bereits von hunderten erfolgreich angewendet</span>
            </li>
            <li className="flex items-center justify-center gap-4">
              <span className="text-2xl">👣</span>
              <span>Von reaktiv zu selbstbestimmt</span>
            </li>
          </ul>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => scrollToSection('testimonials')}
              className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] rounded-lg shadow-md hover:shadow-lg hover:from-[#0D7A6F] hover:to-[#0A988B] transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <ArrowDown className="w-6 h-6" />
              Weiter
            </button>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] px-6 py-12">
          {/* ProgressBar */}
        <div className="w-full max-w-3xl mb-6">
          <ProgressBar step={3} /> {/* Hier Schritt dynamisch setzen */}
        </div>
        {/* Überschrift für Testimonials */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
          Das sagen unsere Teilnehmer:
        </h2>

        {/* Testimonials - kompakter und zentriert */}
        <div className="w-full max-w-2xl flex flex-col space-y-4 text-center mb-6">
          
          {/* Testimonial 1 */}
          <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-md flex flex-col items-center space-y-3">
            <img 
              src={sarah} 
              alt="Sarah" 
              className="w-12 h-12 rounded-full object-cover bg-gray-200"
            />
            <p className="text-gray-800 italic text-base">
              "Nach nur 10 Tagen hatte ich zum ersten Mal seit Jahren einen entspannten Abend ohne Kühlschrank-Raid. Das 6-Phasen-System funktioniert wirklich!"
            </p>
            <span className="block font-bold text-[#0A988B] text-sm">— Sarah, 34, Selbstständige</span>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-md flex flex-col items-center space-y-3">
            <img 
              src={marcus} 
              alt="Marcus" 
              className="w-12 h-12 rounded-full object-cover bg-gray-200"
            />
            <p className="text-gray-800 italic text-base">
              "Prüfungsstress führte früher immer zu Fressattacken. Jetzt erkenne ich die Trigger und kann bewusst gegensteuern. Game Changer!"
            </p>
            <span className="block font-bold text-[#0A988B] text-sm">— Marcus, 28, Student</span>
          </div>
        </div>

        {/* Button zentriert */}
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('warum')}
            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] rounded-lg shadow-md hover:shadow-lg hover:from-[#0D7A6F] hover:to-[#0A988B] transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowDown className="w-6 h-6" />
            Weiter
          </button>
        </div>
      </section>        
     

      {/* Warum Brain Food Reset */}
      <section id="warum" className="min-h-screen h-screen px-6 flex flex-col justify-center items-center bg-white">
          {/* ProgressBar */}
        <div className="w-full max-w-3xl mb-6">
          <ProgressBar step={3.7} /> {/* Hier Schritt dynamisch setzen */}
        </div>
        <h2 className="text-3xl font-bold mb-10 text-center">Warum Brain Food Reset genau das ist, was du gebraucht hast:</h2>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl text-center">
          <div className="bg-white border border-gray-300 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 flex justify-center items-center gap-2">{bulletIconMap.problem} Das Problem erkannt:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Stress-Fressattacken sind nicht deine Schuld</li>
              <li>Cortisol zerstört normale Hunger-Signale</li>
              <li>Willenskraft allein reicht nicht</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 flex justify-center items-center gap-2">{bulletIconMap.access} Die Lösung gefunden:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Emotionale Entkopplung durchbricht Automatismen</li>
              <li>21-Tage System für dauerhafte Veränderung</li>
              <li>Ursachen behandeln, nicht Symptome</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-300 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2 flex justify-center items-center gap-2">{bulletIconMap.community} Die Transformation beginnt:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Von reaktiv zu selbstbestimmt</li>
              <li>Von Kontrollverlust zu bewusster Führung</li>
              <li>Von Scham zu Stolz</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => scrollToSection('checkout')}
            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] rounded-lg shadow-md hover:shadow-lg hover:from-[#0D7A6F] hover:to-[#0A988B] transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <ArrowDown className="w-6 h-6" />
            Weiter
          </button>
        </div>
      </section>

      {/* COURSE SECTION */}
      <section id="checkout" className="min-h-screen h-screen flex flex-col justify-center items-center px-6 bg-white">
          {/* ProgressBar */}
        <div className="w-full max-w-3xl mb-6">
          <ProgressBar step={4.3} /> {/* Hier Schritt dynamisch setzen */}
        </div>

        {/* Überschrift außerhalb der Box */}
        <h2 className="text-4xl font-bold text-center text-[#0A988B] mb-8">
          Starte deine Transformation jetzt
        </h2>
        
        <div className="bg-white border border-gray-300 rounded-xl p-8 w-full max-w-4xl space-y-6">
          <h3 className="text-2xl font-bold text-center mb-4">Nächste Schritte:</h3>
          <div className="text-center space-y-2 text-sm text-gray-700">
            <p>Klicke auf den "Jetzt starten" Button</p>
            <p>1. Registriere dich mit deiner E-Mail auf Whop</p>
            <p>2. Bestätige die Willkommens-E-Mail</p>
            <p>3. Einloggen in dein Brain Food Reset Konto</p>
            <p>4. Oben links ist die Kategorie "Starte hier"</p>
            <p>5. Schau das erste Video</p>
          </div>
        </div>

        {/* Button außerhalb der Box */}
        <div className="mt-8 flex justify-center">
          <a 
            href="https://whop.com/brain-food-reset/emotionsbasierte-essverhaltens-transformation/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white px-12 py-4 text-xl font-bold rounded-lg shadow-lg hover:from-[#0D7A6F] hover:to-[#0A988B] transition-all duration-200 transform hover:scale-105 flex items-center gap-3">
              🚀 Jetzt starten
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}