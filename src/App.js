import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Banner = ({ title }) => (
  <div style={{ backgroundColor: '#005A87', color: 'white', padding: '2rem', textAlign: 'center' }}>
    <h2>{title}</h2>
  </div>
);

const Page = ({ title, content }) => (
  <>
    <Banner title={title} />
    <div style={{ padding: '1rem' }}>
      <p>{content}</p>
    </div>
  </>
);

export default function App() {
  return (
    <Router>
      <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Accueil</Link>
          <Link to="/renovation">Rénovation</Link>
          <Link to="/adapt">Ma Prime Adapt</Link>
          <Link to="/solibail">Solibail</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Page title="Bienvenue chez SOLIHA" content="Nous œuvrons pour l'amélioration de l'habitat et l'insertion." />} />
        <Route path="/renovation" element={<Page title="Rénovation" content="Accompagnement à la rénovation énergétique (MaPrimeRénov')." />} />
        <Route path="/adapt" element={<Page title="Ma Prime Adapt" content="Solutions pour adapter le logement au vieillissement ou au handicap." />} />
        <Route path="/solibail" element={<Page title="Solibail" content="Dispositif de location solidaire sécurisé pour les propriétaires." />} />
      </Routes>
    </Router>
  );
}
