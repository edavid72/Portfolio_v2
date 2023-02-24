import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Layout from './layout/Layout';

const App = () => {
  return (
    <div className="h-screen ">
      <Layout>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </Layout>
    </div>
  );
};

export default App;
