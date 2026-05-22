import Navbar from "./components/navbar";
import Blogcard from "./components/Blogcard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-wrap justify-center gap-6">

        <Blogcard />
        <Blogcard />
        <Blogcard />

      </div>

    </div>
  );
}

export default App;