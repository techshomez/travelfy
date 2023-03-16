import "./popular.scss";

const Popular = () => {
  return (
    <div className="popular">
      <div className="container">
        <h2>Popular Attractions</h2>
        <article>The most popular tour package presented to you</article>
        <div className="popular_wrapper">
          <div className="popular_items">
            <img
              src="https://ak-d.tripcdn.com/images/0100x120008skj0vd0458_C_550_412.jpg"
              alt=""
            />
            <div className="items_text">
              <h2>Mahanakhon Sky Walk</h2>
              <span>
                <small>4.6/5</small>
                <div className="reviews">(3585 reviews)</div>
              </span>
            </div>
          </div>
          <div className="popular_items">
            <img
              src="https://ak-d.tripcdn.com/images/0105212000a4sy6yy5993_C_550_412.jpg"
              alt=""
            />
            <div className="items_text">
              <h2>Sea Life Bangkok Ocean World</h2>
              <span>
                <small>4.6/5</small>
                <div className="reviews">(3585 reviews)</div>
              </span>
            </div>
          </div>
          <div className="popular_items">
            <img
              src="https://ak-d.tripcdn.com/images/100b0q000000gbkis0B7E_C_550_412.jpg"
              alt=""
            />
            <div className="items_text">
              <h2>The Grand Palace</h2>
              <span>
                <small>4.6/5</small>
                <div className="reviews">(3585 reviews)</div>
              </span>
            </div>
          </div>
          <div className="popular_items">
            <img
              src="https://ak-d.tripcdn.com/images/100b0q000000gbkis0B7E_C_550_412.jpg"
              alt=""
            />
            <div className="items_text">
              <h2>The Grand Palace</h2>
              <span>
                <small>4.6/5</small>
                <div className="reviews">(3585 reviews)</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
