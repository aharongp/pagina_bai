import Header from './components/Header';
import Services from './components/Services';
import Features from './components/Features';
import Analytics from './components/Analytics';
import Steps from './components/Steps';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <Services />
      <Features />
      <Analytics />
      <Steps />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;