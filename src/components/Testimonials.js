import customerImage from "../icons_assets/lemondessert.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <article>
        <p>Rating 8</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Julia</p>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cumque
          facilis nemo corrupti!
        </p>
      </article>
      <article>
        <p>Rating 4</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Carlos</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
      <article>
        <p>Rating 6</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Angus</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
      <article>
        <p>Rating 8</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Caleb</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          tenetur!
        </p>
      </article>
    </section>
  );
}
