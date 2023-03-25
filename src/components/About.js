import marioAndAdrian from "../icons_assets/MarioandAdrian b.jpg";
import mario from "../icons_assets/MarioandAdrianA.jpg";
import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  return (
    <section>
      <Header />
      <div style={{ backgroundColor: "#495e57" }}>
        <h1>About: Little Lemon</h1>
        <img
          alt="Mario and Adrian"
          src={marioAndAdrian}
          style={{
            display: "block",
            width: "35%",
            height: "auto",
            margin: "3em auto",
            borderRadius: "2em",
          }}
        />
        <p
          style={{
            color: "white",
            width: "60%",
            margin: "auto",
            lineHeight: "1.8em",
          }}
        >
          Welcome to Mario and Adrian's, a cozy and charming restaurant tucked
          away in a quiet corner of the city. This family-owned establishment
          specializes in delicious Mediterranean food, inspired by the owners'
          Greek and Italian heritage. The menu features a tempting selection of
          appetizers, entrees, and desserts, all made with fresh ingredients and
          cooked to perfection.
        </p>
      </div>
      <div style={{ backgroundColor: "#495e57" }}>
        <img
          alt="Mario and Adrian"
          src={mario}
          style={{
            display: "block",
            width: "35%",
            height: "auto",
            margin: "auto",
            borderRadius: "4em",
            padding: "2em",
          }}
        />
        <p
          style={{
            color: "white",
            width: "60%",
            margin: "2em auto",
            marginBottom: "2em",
            lineHeight: "1.8em",
          }}
        >
          Vegetarian and vegan options are also available, such as the grilled
          vegetable platter with feta cheese and the spicy lentil stew with
          couscous. To complement your meal, Mario and Adrian's offers a
          carefully curated wine list featuring a variety of reds, whites, and
          rosés from Greece, Italy, and other Mediterranean regions.
        </p>
      </div>
      <Footer />
    </section>
  );
}
