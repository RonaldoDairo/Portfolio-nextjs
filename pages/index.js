import Layout from "../components/Layout";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Portfolio from "../components/portfolio";
const Index = () => (
  <Layout>
    {/* First Section */}
    <header className="row">
      <div className="col-md-12 ">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="ryan-ray-profile2.jpeg"
                alt="images"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h1> Dairo Valerio</h1>
              <h3>FullStack Developer</h3>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias Lorem Ipsum es simplemente el texto
                de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
                sido el texto de relleno estándar de las industrias{" "}
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            <Skills />
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <Experience />
          </div>
        </div>
      </div>
    </div>
    {/* Third Section */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            


        <Portfolio/>


          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
