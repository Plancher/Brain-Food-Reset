import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 Minuten in Sekunden

  // Countdown-Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Container */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        {/* 1. Headline */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            🎉 Willkommen im Kreis der Entspannten Genießer!
          </h1>
          <p className="text-lg text-gray-600">
            Du hast gerade die wichtigste Entscheidung für deine Gesundheit
            getroffen. In wenigen Minuten erhältst du deine Zugangsdaten per
            E-Mail.
          </p>
        </section>

        {/* 2. Next Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Was passiert jetzt?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ In 2-3 Minuten: Bestätigungs-E-Mail mit Login-Daten</li>
            <li>✅ In 5 Minuten: Willkommens-E-Mail mit ersten Schritten</li>
            <li>✅ Sofort verfügbar: Dein KI-Mentor wartet bereits auf dich</li>
          </ul>
        </section>

        {/* 3. Bonus */}
        <section className="bg-gray-50 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            🎁 Überraschungs-Bonus nur für dich
          </h2>
          <p className="mb-4">
            <strong>Kühlschrank-Befreiungs-Checkliste</strong> <br />
            Die 5-Minuten-Sofort-Hilfe für akute Heißhunger-Momente:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>3-Atemzüge-Technik (stoppt Cortisol sofort)</li>
            <li>Die "Wahres Bedürfnis"-Frage</li>
            <li>5 Cortisol-Killer für den Notfall</li>
            <li>Kühlschrank-Meditation (30 Sekunden)</li>
          </ul>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            DOWNLOAD CHECKLISTE
          </a>
        </section>

        {/* 4. Community */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Du bist jetzt Teil einer Bewegung
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>🧠 Tägliche Motivation & Tipps</li>
            <li>💪 Erfolgsgeschichten von anderen Genießern</li>
            <li>❓ Direkte Fragen an mich</li>
            <li>🎯 Wöchentliche Live-Q&As</li>
          </ul>
          <a
            href="#"
            className="mt-4 inline-block px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            JETZT COMMUNITY BEITRETEN
          </a>
        </section>

        {/* 5. Upsell */}
        <section className="bg-yellow-50 p-6 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">
            🚀 1:1 Intensiv-Session mit mir persönlich
          </h2>
          <ul className="space-y-1 text-gray-700 mb-4">
            <li>✅ 90-minütige persönliche Session</li>
            <li>✅ Deine individuellen Trigger-Muster analysiert</li>
            <li>✅ Maßgeschneiderter Plan für deine Situation</li>
            <li>✅ Direkte Hotline für die ersten 30 Tage</li>
          </ul>
          <p className="mb-2 text-lg">
            <del className="text-gray-500">Normalpreis: 497€</del>
          </p>
          <p className="text-2xl font-bold text-green-700 mb-6">
            Heute für dich: 197€ <br />
            <span className="text-base">(nur in den nächsten 20 Minuten)</span>
          </p>
          <p className="text-red-600 font-medium mb-6">
            🕐 Angebot läuft ab in: {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            JA, ICH WILL DIE INTENSIV-SESSION
          </a>
        </section>

        {/* 6. Testimonials */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Das sagen andere Entspannte Genießer:
          </h2>
          <blockquote className="italic text-gray-700 mb-4">
            "Nach nur 5 Tagen konnte ich das erste Mal seit Jahren entspannt am
            Kühlschrank vorbeigehen, ohne automatisch hineinzugreifen."
            <br /> <span className="font-medium">– Sarah M., Projektmanagerin</span>
          </blockquote>
          <blockquote className="italic text-gray-700">
            "Die emotionale Entkopplung war wie ein Schalter, der umgelegt wurde.
            Endlich verstehe ich meine Muster."
            <br />{" "}
            <span className="font-medium">– Michael K., Unternehmensberater</span>
          </blockquote>
        </section>

        {/* 7. Implementation Boost */}
        <section className="bg-gray-50 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Starte JETZT mit deiner Transformation
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>🎯 Heute Abend: Lade Phase 1 herunter und schaue das erste Video</li>
            <li>🎯 Vor dem Schlafengehen: Aktiviere deinen KI-Mentor</li>
            <li>🎯 Morgen früh: Beginne mit dem Trigger-Tracking-Template</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Die ersten 48 Stunden entscheiden über deinen langfristigen Erfolg.
          </p>
        </section>

        {/* 8. Risk Reversal */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            100% Zufriedenheits-Garantie
          </h2>
          <p className="text-gray-700">
            Falls du in den nächsten 30 Tagen nicht mindestens 3 entspannte Abende
            vor dem Kühlschrank erlebst, bekommst du jeden Cent zurück. Ohne Wenn
            und Aber.
          </p>
        </section>

        {/* 9. Personal Note */}
        <section className="text-center">
          <p className="italic text-gray-700 max-w-2xl mx-auto">
            "Du hast heute den mutigen Schritt gemacht, vom Kühlschrank-Gefangenen
            zum Entspannten Genießer zu werden. In den nächsten Wochen werde ich
            persönlich dafür sorgen, dass du die Transformation erlebst, die du
            verdienst. Du bist nicht allein auf diesem Weg."
          </p>
          <p className="mt-4 font-medium">– [Dein Name]</p>
        </section>
      </div>
    </div>
  );
}
