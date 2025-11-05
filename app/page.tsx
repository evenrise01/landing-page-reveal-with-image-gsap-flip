"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, CustomEase, Flip } from "gsap/all";

gsap.registerPlugin(SplitText, CustomEase, Flip);

export default function Home() {
  useGSAP(() => {

    gsap.set(".img", {
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    });
    
    CustomEase.create(
      "hop",
      "M0, 0 C0.355, 0.022 0.448, 0.079 0.5, 0.5 0.542, 0.846 0.615, 1 1, 1"
    );

    CustomEase.create(
      "hop2",
      "M0, 0 C0.078, 0.617 0.114, 0.716 0.255, 0.828 0.373, 0.922 0.561, 1 1, 1"
    );

    const splitH2 = new SplitText(".site-info h2", {
      type: "lines",
    });

    splitH2.lines.forEach((line) => {
      const text = line.textContent;
      const wrapper = document.createElement("div");
      wrapper.className = "line";
      const span = document.createElement("span");
      span.textContent = text;
      wrapper.appendChild(span); // ✅ Add this line
      line.parentNode?.replaceChild(wrapper, line);
    });

    const mainTl = gsap.timeline();
    const revealerTl = gsap.timeline();
    const scaleTl = gsap.timeline();

    revealerTl
      .to(".r-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "hop",
        duration: 1.5,
      })
      .to(
        ".r-2",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          ease: "hop",
          duration: 1.5,
        },
        "<"
      );

    scaleTl.to(".img:first-child", {
      scale: 1,
      duration: 2,
      ease: "power4.inOut",
    });

    const images = document.querySelectorAll(".img:not(:first-child)");

    images.forEach((img) => {
      scaleTl.to(
        img,
        {
          opacity: 1,
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
        },
        ">-0.5"
      );
    });

    mainTl
      .add(revealerTl)
      .add(scaleTl, "-=1.25")
      .call(() => {
        // Remove non-main images
        document
          .querySelectorAll(".img:not(.main)")
          .forEach((img) => img.remove());

        // Get initial state
        const state = Flip.getState(".main");

        // Modify DOM
        const imagesContainer = document.querySelector(".images");
        imagesContainer?.classList.add("stacked-container");

        document.querySelectorAll(".main").forEach((img, i) => {
          img.classList.add("stacked");
          (img as HTMLElement).style.order = i.toString();
        });

        gsap.set(".img.stacked", {
          clearProps: "transform,top,left",
        });

        // Animate with Flip
        Flip.from(state, {
          duration: 2,
          ease: "hop",
          absolute: true,
          stagger: {
            amount: -0.3,
          },
        });
      })
      .to(".word h1, .nav-item p, .site-info h2 .line span, .line p", {
        y: 0,
        duration: 3,
        ease: "hop2",
        stagger: 0.1,
        delay: 1.125,
      })
      .to(".cover-img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 2,
        ease: "hop",
        delay: -4.75,
      });
  }, {});

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
