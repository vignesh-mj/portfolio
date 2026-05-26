import React from "react";
import "./spaceExploreSection.css";

const SpaceExploreSection = () => {
  return (
    <section className="spaceExploreWrapper">
      <div className="spaceExploreHero">
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop"
          alt="space"
          className="spaceExploreHeroBg"
        />

        <div className="spaceExploreOverlay"></div>

        <div className="spaceExploreSlider">
          <div className="spaceExploreSlideItem active">01</div>
          <div className="spaceExploreSlideItem">02</div>
          <div className="spaceExploreSlideItem">03</div>

          <div className="spaceExploreDots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="spaceExploreMainContent">
          <span className="spaceExploreSubTitle">
            Cosmic Connections
          </span>

          <h1 className="spaceExploreTitle">
            Bridging the Gap <br />
            Between Earth <br />
            and Space
          </h1>

          <div className="spaceExploreStats">
            <h2>+46K</h2>

            <div>
              <p className="spaceExploreStatsHeading">
                Enjoy travel with us.
              </p>

              <p className="spaceExploreStatsText">
                For anyone interested in exploring
                space travel.
              </p>
            </div>
          </div>

          <p className="spaceExploreDescription">
            It offers a wide range of content related to
            space tourism, including articles, videos,
            and guides.
          </p>

          <button className="spaceExploreBtn">
            Discover More
          </button>

          <div className="spaceExploreSocials">
            <button>f</button>
            <button>x</button>
            <button>◎</button>
          </div>
        </div>

        <div className="spaceExploreCircle">
          <div className="spaceExploreCircleInner">
            <span>Discover World’s</span>
            <span>Greatest Voyages</span>

            <div className="spaceExploreArrow">↗</div>
          </div>
        </div>

        <div className="spaceExploreSideCards">
          <div className="spaceExploreMiniCard">
            <img
              src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=900&auto=format&fit=crop"
              alt=""
            />

            <div className="spaceExploreMiniCardContent">
              <h4>With Kids</h4>
            </div>
          </div>

          <div className="spaceExploreMiniCard">
            <img
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=900&auto=format&fit=crop"
              alt=""
            />

            <div className="spaceExploreMiniCardContent">
              <h4>And Pets</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="spaceExploreBottomWrapper">
        <div className="spaceExplorePlanetCards">
          <div className="spaceExplorePlanetCard">
            <img
              src="https://images.unsplash.com/photo-1614728894747-a83421789f10?q=80&w=800&auto=format&fit=crop"
              alt=""
            />

            <h3>Journey to the Red Planet</h3>

            <button>→</button>
          </div>

          <div className="spaceExplorePlanetCard">
            <img
              src="https://images.unsplash.com/photo-1614314107768-6018061b5b72?q=80&w=800&auto=format&fit=crop"
              alt=""
            />

            <h3>Unleash Your Inner Astronaut</h3>

            <button>→</button>
          </div>

          <div className="spaceExplorePlanetCard">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
              alt=""
            />

            <h3>Ultimate Guide to Interplanetary Travel</h3>

            <button>→</button>
          </div>
        </div>

        <div className="spaceExploreInfoCards">
          <div className="spaceExploreInfoCard">
            <img
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="spaceExploreInfoOverlay"></div>

            <div className="spaceExploreInfoContent">
              <span>01</span>

              <p>
                Jupiter is the fifth planet from the Sun and
                the largest in the Solar System.
              </p>

              <button>More</button>
            </div>

            <h2>Jupiter</h2>
          </div>

          <div className="spaceExploreInfoCard">
            <img
              src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="spaceExploreInfoOverlay"></div>

            <div className="spaceExploreInfoContent">
              <span>02</span>

              <p>
                Neptune is the eighth planet from the Sun and
                the farthest known planet in the Solar System.
              </p>

              <button>More</button>
            </div>

            <h2>Neptune</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceExploreSection;