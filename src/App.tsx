// @ts-ignore
import Header from './components/Header';
// @ts-ignore
import SearchBar from './components/SearchBar';
// @ts-ignore
import ResourceCards from './components/ResourceCards';
// @ts-ignore
import SecuritySection from './components/SecuritySection';
// @ts-ignore
import Testimonial from './components/Testimonial';
// @ts-ignore
import ProductCards from './components/ProductCards';
// @ts-ignore
import FAQ from './components/FAQ';
// @ts-ignore
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Technical Interview Resources</h1>
          <p className="hero-subtitle">Find all the technical interview resources here</p>
          <div className="searchbar-section">
            <SearchBar />
          </div>
        </section>
        {/* Resource Cards Section */}
        <section className="resources-section container">
          <ResourceCards />
        </section>
        <SecuritySection />
        <Testimonial />
        <ProductCards />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
