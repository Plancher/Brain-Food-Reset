// src/components/ThankYouPage.tsx
import React from "react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0A988B] to-[#0D7A6F] text-white py-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Willkommen bei deiner Transformation - Du hast den wichtigsten Schritt gemacht!
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          In den nächsten 21 Tagen wirst du erleben, wie emotionale Entkopplung dein Leben verändert. Hier ist alles, was du jetzt brauchst:
        </p>
        <div className="bg-white text-gray-900 rounded-xl p-6 inline-block text-left shadow-lg">
          <ul className="space-y-2">
            <li>✅ Zugang zum Brain Food Reset Programm bestätigt</li>
            <li>✅ Alle 6 Video-Module sind freigeschaltet</li>
            <li>✅ Templates und KI-Mentor sind aktiviert</li>
            <li>✅ Willkommens-E-Mail ist unterwegs</li>
          </ul>
        </div>
      </section>

      {/* RESELL */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Du hast gerade die klügste Entscheidung deines Lebens getroffen
        </h2>
        <ul className="space-y-3 text-left mx-auto max-w-md list-disc list-inside">
          <li><strong>Nie wieder</strong> nach 20 Uhr automatisch zum Kühlschrank laufen</li>
          <li><strong>Endlich</strong> die Kontrolle über deine Impulse zurückgewinnen</li>
          <li><strong>Wissenschaftlich fundiert</strong> - basiert auf neuester Cortisol-Forschung</li>
          <li><strong>Bewährt</strong> - bereits von hunderten erfolgreich angewendet</li>
          <li><strong>Dein Weg</strong> von reaktivem zu selbstbestimmtem Leben</li>
        </ul>
      </section>

      {/* WARUM-KAUFGRUND */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Warum Brain Food Reset genau das ist, was du gebraucht hast:
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold mb-4">Das Problem erkannt:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Stress-Fressattacken sind nicht deine Schuld</li>
              <li>Cortisol zerstört normale Hunger-Signale</li>
              <li>Willenskraft allein reicht nicht</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Die Lösung gefunden:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Emotionale Entkopplung durchbricht Automatismen</li>
              <li>21-Tage System für dauerhafte Veränderung</li>
              <li>Ursachen behandeln, nicht Symptome</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Die Transformation beginnt:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Von reaktiv zu selbstbestimmt</li>
              <li>Von Kontrollverlust zu bewusster Führung</li>
              <li>Von Scham zu Stolz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Du bist in bester Gesellschaft - Das sagen andere Teilnehmer:
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <blockquote className="p-6 bg-white rounded-xl shadow">
            <p>"Nach nur 10 Tagen hatte ich zum ersten Mal seit Jahren einen entspannten Abend ohne Kühlschrank-Raid. Das 6-Phasen-System funktioniert wirklich!"</p>
            <cite>- Sarah, 34, Selbstständige</cite>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-xl shadow">
            <p>"Prüfungsstress führte früher immer zu Fressattacken. Jetzt erkenne ich die Trigger und kann bewusst gegensteuern. Game Changer!"</p>
            <cite>- Marcus, 28, Student</cite>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-xl shadow">
            <p>"Zwischen Job und Familie blieb keine Zeit für mich. Brain Food Reset hat mir gezeigt, wie ich in 15 Minuten täglich mein Leben zurückgewinne."</p>
            <cite>- Lisa, 41, Mutter von 2 Kindern</cite>
          </blockquote>
        </div>
        <div className="text-center mt-12 text-gray-600">
          🎯 92% weniger nächtliche Fressattacken nach 21 Tagen | ⏰ Erste Erfolge bereits nach 48-72 Stunden | 🧠 Wissenschaftlich validierter Ansatz
        </div>
      </section>

      {/* Weitere Sektionen (Onboarding, Erwartungsmanagement, Upsell, Kontakt, Motivation) */}
      {/* Hier kannst du die restlichen Abschnitte ähnlich in JSX umsetzen */}
      
  
    </div>
  );
}
