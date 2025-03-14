import About from './components/about/About.jsx';
import Appbar from './components/AppBar/Appbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

export default function Home() {
  return (
    <>
      <div className="parent-hero">
        <main className="flex-center fullvhvw">
          <Hero />
        </main>
        <Projects />
        <About />
        <Reviews />
      </div>
    </>
  );
}
