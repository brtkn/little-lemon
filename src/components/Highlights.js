import greekSalad from "../icons_assets/greeksalad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemondessert.jpg";

export default function Highlights() {
  return (
    <section>
      <h2>This weeks specials!</h2>
      <div className="food-cards">
        <div className="food-card">
          <img alt="Greek Salad" src={greekSalad} />
          <p className="food-name">
            Greek salad <span>$12.99</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            inventore quae nisi qui enim ducimus quia soluta, ipsa
            exercitationem unde molestiae reiciendis.
          </p>
          <div>
            <button>Order a delivery</button>
            <i />
          </div>
        </div>
        <div className="food-card">
          <img alt="Greek Salad" src={bruchetta} />
          <p className="food-name">
            Bruchetta <span>$6.99</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            inventore quae nisi qui enim ducimus quia soluta, ipsa
            exercitationem unde molestiae reiciendis.
          </p>
          <div>
            <button>Order a delivery</button>
            <i />
          </div>
        </div>
        <div className="food-card">
          <img alt="Greek Salad" src={lemonDessert} />
          <p className="food-name">
            Lemon Dessert <span>$5</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            inventore quae nisi qui enim ducimus quia soluta, ipsa
            exercitationem unde molestiae reiciendis.
          </p>
          <div>
            <button>Order a delivery</button>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
