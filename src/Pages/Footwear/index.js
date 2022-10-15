import Icon from "../../Components/Icon";

const Footwear = () => {
  const Favourite = (e) => {
    e.target.classList.toggle("favourite");
  };
  return (
    <>
    <section className="footwear">
      <div className="container footwear-wrapper">
      <div className="left-side-wrapper">
        <h1>Get your awesome sneakers.</h1>
        <p>
          We offer the best deals in our shop. Check them out now. We have
          awesome stuff on sale for you.
        </p>
        <div className="shopping">
          <button className="border-4 button">Shop Now</button>
          <Icon onClick={Favourite} icon="Favorite" />
        </div>
        <div className="free-group">
          <div className="free-shoppings">
            <Icon icon="check" />
            <span>Free shipping</span>
          </div>
          <div className="free-returns">
            <Icon icon="check" />
            <span>Free returns</span>
          </div>
        </div>
      </div>
      <div className="right-side-wrapper">
        <div className="add">
              <img
                className="bcg-motion"
                src="/Assets/Images/Frame1.png"
                alt="frame"
              />
              <img
                className="main-sniker"
                src="/Assets/Images/main-sniker.png"
                alt="frame"
              />
        </div>
      </div>
      </div>
    </section>
    <section className="products">
        <div className="products-wrapper container">
        <div className="header">
            <h2>Featured products</h2>
            <span>View all<Icon icon="chevron-right"/></span>
        </div>
        <ul>
            <li>
                <div className="product-img">
                    <img src="/Assets/Images/image1.png" alt="" />
                    <span className="orange"></span>
                </div>
                <div className="stars">
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                </div>
                <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                <h3>$120.50</h3>
            </li>
            <li>
                <div className="product-img">
                    <img src="/Assets/Images/image2.png" alt="" />
                    <span className="green"></span>
                </div>
                <div className="stars">
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                </div>
                <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                <h3>$160.99</h3>
            </li>
            <li>
                <div className="product-img">
                    <img src="/Assets/Images/image3.png" alt="" />
                    <span className="pink"></span>
                </div>
                <div className="stars">
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                </div>
                <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                <h3>$230.50</h3>
            </li>
            <li>
                <div className="product-img">
                    <img src="/Assets/Images/image4.png" alt="" />
                    <span className="blue"></span>
                </div>
                <div className="stars">
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                    <Icon icon="Star"/>
                </div>
                <p>Adidas Falcon Shoes for men - 2021 Edition</p>
                <h3>$420.00</h3>
            </li>
        </ul>
        </div>
    </section>
    <section className="sport">
        <div className="left">
            <div className="left-wrapper">
                <img src="/Assets/Images/ball.png" alt="" />
                <div className="box">
                    <span>Accesories</span>
                    <h3>Football</h3>
                    <p>We receive new sportwear every day. Just take your pick.</p>
                    <button className="button border-4">Shop Now</button>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="right-wrapper">
                <img src="/Assets/Images/shirt.png" alt="" />
                <div className="box">
                    <span>Accesories</span>
                    <h3>Volleyball</h3>
                    <p>We receive new sportwear every day. Just take your pick.</p>
                    <button className="button border-4">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Footwear;
