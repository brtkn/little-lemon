import marioAndAdrian from "../icons_assets/MarioandAdrian b.jpg";

export default function About() {
  return (
    <section>
      <div>
        <p>Little Lemon</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus
          odio nemo nihil officia id quam exercitationem. Eaque molestias libero
          omnis ipsam cum?
        </p>
      </div>
      <div>
        <img
          alt="Mario and Adrian"
          src={marioAndAdrian}
          style={{ width: 300 }}
        />
      </div>
    </section>
  );
}
