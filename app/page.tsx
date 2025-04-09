import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Layout from './components/Layout';
import AdsController from './components/AdsController';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <AdsController />
      </Suspense>
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggle />
    </Layout>
  );
}
