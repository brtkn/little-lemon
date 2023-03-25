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
          The food was incredible! I had the pasta dish and it was the best I've
          ever had. The ambiance was lovely too.
        </p>
      </article>
      <article>
        <p>Rating 4</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Carlos</p>
        </div>
        <p>
          The food was okay, but nothing special. The service was slow and the
          ambiance was lackluster. Wouldn't recommend.
        </p>
      </article>
      <article>
        <p>Rating 6</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Angus</p>
        </div>
        <p>
          Unfortunately, my experience at this restaurant was disappointing. The
          chicken was dry and the vegetables were overcooked. The only redeeming
          quality was the friendly staff
        </p>
      </article>
      <article>
        <p>Rating 8</p>
        <div>
          <img alt="Customer Comment" src={customerImage} />
          <p>Caleb</p>
        </div>
        <p>
          This place is a hidden gem! The pizza was mouth-watering and the staff
          were so friendly. I will be telling all my friends about it.
        </p>
      </article>
    </section>
  );
}
