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
            A refreshing mix of tomatoes, cucumbers, onions, and feta cheese,
            drizzled with olive oil and a sprinkle of oregano.
          </p>
          <div>
            <button>Order a delivery</button>
            <i />
          </div>
        </div>
        <div className="food-card">
          <img alt="Bruchetta" src={bruchetta} />
          <p className="food-name">
            Bruchetta <span>$6.99</span>
          </p>
          <p>
            Grilled bread topped with juicy tomatoes, fresh basil, and garlic,
            finished with a balsamic glaze and a sprinkle of parmesan.
          </p>
          <div>
            <button>Order a delivery</button>
            <i />
          </div>
        </div>
        <div className="food-card">
          <img alt="Lemon Dessert" src={lemonDessert} />
          <p className="food-name">
            Lemon Dessert <span>$5</span>
          </p>
          <p>
            A decadent lemon tart with a buttery crust and a creamy filling,
            finished with a dollop of whipped cream and a lemon zest garnish.
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
