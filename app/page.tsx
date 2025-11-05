export default function Home() {
  return (
    <>
      <div className="container">
        <div className="revealers">
          <div className="revealer r-1"></div>
          <div className="revealer r-2"></div>
        </div>

        <div className="images">
          <div className="img">
            <img src="/img-01.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-02.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-03.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-04.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-05.jpg" alt="" />
          </div>
          <div className="img main">
            <img src="/img-06.jpg" alt="" />
          </div>
          <div className="img main">
            <img src="/img-07.jpg" alt="" />
          </div>
          <div className="img main">
            <img src="/img-08.jpg" alt="" />
          </div>
        </div>

        <div className="hero-content">
          <div className="site-logo">
            <div className="word">
              <h1>Arc</h1>
            </div>
            <div className="word">
              <h1>
                Worldwide<sup>&copy;</sup>
              </h1>
            </div>
          </div>

          <div className="nav">
            <div className="nav-item">
              <p>About</p>
            </div>
            <div className="nav-item">
              <p>Work</p>
            </div>
            <div className="nav-item">
              <p>Journal</p>
            </div>
            <div className="nav-item">
              <p>Contact</p>
            </div>
          </div>

          <div className="cover-img">
            <img src="/img-03.jpg" alt="" />
          </div>

          <div className="site-info">
            <div className="row">
              <div className="col">
                <div className="line">
                  <p>Featured Worldwide</p>
                </div>
              </div>
              <div className="col">
                <h2>
                  Arc is a contemporary fashion brand redefining elegance with
                  timeless designs and innovative aesthetics.
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <div className="address">
                  <div className="line">
                    <p>Arc Studio</p>
                  </div>
                  <div className="line">
                    <p>Montreal</p>
                  </div>
                  <div className="line">
                    <p>28 Orchard Lane</p>
                  </div>
                  <div className="line">
                    <p>N1 5DX2</p>
                  </div>
                </div>
                <div className="socials">
                  <div className="line">
                    <p>SayHi@arc.com</p>
                  </div>
                  <div className="line">
                    <p>Instagram</p>
                  </div>
                  <div className="line">
                    <p>LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
