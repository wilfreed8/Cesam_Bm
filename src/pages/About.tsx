
const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-extrabold text-center font-serif text-blue-700">
        À propos de nous
      </h1>

      {/* Qui sommes-nous */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-serif text-green-600">Qui sommes-nous ?</h2>
        <p className="font-semibold">
          La <strong>CESAM Beni Mellal</strong> est une section locale de la
          Confédération des Élèves, Étudiants et Stagiaires Africains Étrangers
          au Maroc (CESAM). Nous sommes une communauté dynamique qui rassemble
          les étudiants africains de Beni Mellal afin de favoriser l'entraide,
          l'intégration et le développement personnel et académique.
        </p>
      </div>

      {/* Notre mission */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-serif text-green-600">Notre mission</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-900 font-semibold">
          <li>
            ✅ Créer un espace de solidarité entre les étudiants africains à Beni Mellal.
          </li>
          <li>
            ✅ Faciliter l'intégration des nouveaux arrivants en leur offrant un accompagnement.
          </li>
          <li>
            ✅ Organiser des événements culturels et éducatifs pour promouvoir la diversité et l'excellence.
          </li>
          <li>
            ✅ Défendre les intérêts des étudiants et les aider dans leurs démarches administratives et académiques.
          </li>
        </ul>
      </div>

      {/* Nos activités */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-serif text-green-600">Nos activités</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-900 font-semibold">
          <li> Rencontres et échanges : Conférences, débats et ateliers sur des sujets académiques et professionnels.</li>
          <li> Événements culturels : Célébration des traditions africaines, festivals et soirées thématiques.</li>
          <li> Accompagnement des étudiants : Aide à l’installation, conseils administratifs et soutien académique.</li>
          <li> Projets communautaires : Actions solidaires et collaborations avec d'autres associations.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
