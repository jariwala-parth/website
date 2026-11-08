import { Suspense } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Impact from './components/Impact';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from './components/Layout';
import AdsController from './components/AdsController';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Suspense fallback={null}>
        <AdsController />
      </Suspense>
      <Experience />
      <Impact />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
}
