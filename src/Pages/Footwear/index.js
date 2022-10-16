import Icon from "../../Components/Icon";

const Footwear = () => {
  const Favourite = (e) => {
    e.target.classList.toggle("favourite");
  };

  const Men = (e) => {
    e.currentTarget.classList.toggle("on");
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
    <section className="best-sell">
        <div className="best-sell-wrapper container">
            <div className="header">
                <h2>Best seller this week</h2>
                <div className="sex">
                    <span>Men</span>
                    <div onClick={Men} className="swipe">
                        <span></span>
                    </div>
                    <span>Women</span>
                </div>
            </div>
            <div className="pro">
            <div className="left">
                <div className="img-wrapper">
                    <img src="/Assets/Images/image6.png" alt="" />
                    <img className="massage" src="/Assets/Images/Frame2.png" alt="" />
                    <div className="box"></div>
                </div>
            </div>
            <div className="right">
                    <div className="stars">
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                    </div>
                    <h4>Adidas Falcon Shoes for women - 2021 Edition</h4>
                    <h3>$120.50</h3>
                    <button className="button border-4">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
    <div className="new-product">
        <div className="new-wrapper container">
            <div className="header">
                <h2>New arrivals</h2>
                <span>View all<Icon icon="chevron-right"/></span>
            </div>
            <p>Enjoy the new products from our store. Select what you like, enjoy & return.</p>
            <ul>
                <li>
                    <div className="pro-wrapper orange">
                        <h4>01</h4>
                        <img src="/Assets/Images/image7.png" alt="" />
                        <span><Icon icon="plus"/></span>
                    </div>
                    <div className="stars">
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                    </div>
                    <p>Adidas Falcon Shoes for women - 2021 Edition</p>
                    <h3>$120.50</h3>
                </li>
                <li>
                    <div className="pro-wrapper blue">
                        <h4>01</h4>
                        <img src="/Assets/Images/image8.png" alt="" />
                        <span><Icon icon="plus"/></span>
                    </div>
                    <div className="stars">
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                    </div>
                    <p>Adidas Falcon Shoes for women - 2021 Edition</p>
                    <h3>$120.50</h3>
                </li>
                <li>
                    <div className="pro-wrapper green">
                        <h4>01</h4>
                        <img src="/Assets/Images/image7.png" alt="" />
                        <span><Icon icon="plus"/></span>
                    </div>
                    <div className="stars">
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                    </div>
                    <p>Adidas Falcon Shoes for women - 2021 Edition</p>
                    <h3>$120.50</h3>
                </li>
                <li>
                    <div className="pro-wrapper pink">
                        <h4>01</h4>
                        <img src="/Assets/Images/image9.png" alt="" />
                        <span><Icon icon="plus"/></span>
                    </div>
                    <div className="stars">
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                        <Icon icon="Star"/>
                    </div>
                    <p>Adidas Falcon Shoes for women - 2021 Edition</p>
                    <h3>$120.50</h3>
                </li>
            </ul>
        </div>
    </div>
    <section className="reason">
        <div className="reason-wrapper container">
            <div className="left">
                <div className="video">
                    <img src="/Assets/Images/shose.png" alt="" />
                    <img className="graph" src="/Assets/Images/Group.png" alt="" />
                </div>
            </div>
            <div className="right">
                <h2>Why choose our shop</h2>
                <p>For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere.</p>
                <div className="features">
                    <span><Icon icon="Car"/>Fast Delivery</span>
                    <span><Icon icon="Group"/>Great Support</span>
                    <span><Icon icon="Wallet"/>Cool Prices</span>
                    <span><Icon icon="Quality"/>High Quality</span>
                </div>
            </div>
        </div>
    </section>
    <section className="catigories">
        <div className="catigories-wrapper container">
            <h2>Choose categories</h2>
            <p>For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere.</p>
            <div className="items-wrapper">
                <ul>
                    <li>
                        <div className="box">
                            <div className="header">
                                <h3>Sneakers Collection</h3>
                                <span>
                                    <img src="/Assets/Images/orange.png" alt="" />
                                </span>
                            </div>
                            <p>120 products</p>
                            <h5>See collection</h5>
                            <img className="category-img" src="/Assets/Images/image7.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="header">
                                <h3>Football Collection</h3>
                                <span>
                                    <img src="/Assets/Images/blue.png" alt="" />
                                </span>
                            </div>
                            <p>120 products</p>
                            <h5>See collection</h5>
                            <img className="category-img" src="/Assets/Images/football.png" alt="" />
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="header">
                                <h3>Volleyball Collection</h3>
                                <span>
                                    <img src="/Assets/Images/green.png" alt="" />
                                </span>
                            </div>
                            <p>120 products</p>
                            <h5>See collection</h5>
                            <img className="category-img" src="/Assets/Images/volley.png" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section className="brands">
        <div className="brands-wrapper container">
            <h2>Popular brands</h2>
            <ul>
                <li>
                    <img src="/Assets/Images/Nike.png" alt="" />
                </li>
                <li>
                    <img src="/Assets/Images/balance.png" alt="" />
                </li>
                <li>
                    <img src="/Assets/Images/Adidas.png" alt="" />
                </li>
                <li>
                    <img src="/Assets/Images/sportif.png" alt="" />
                </li>
            </ul>
        </div>
    </section>
    <section className="contact">
        <div className="contact-wrapper ">
            <div className="absolute">
                <span className="little"></span>
            <div className="header">
                <h2>Subscribe now to get the latest updates</h2>
                <ul>
                    <li><Icon icon="bt"/></li>
                    <li><Icon icon="bf"/></li>
                    <li><Icon icon="bi"/></li>
                </ul>
            </div>
            <div className="messes">
                <div className="box">
                    <div className="left">
                        <div className="top">
                            <p>Enter you email</p>
                        </div>
                        <div className="bottom">
                            <p>SUBSCRIBE</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-wrapper">
                            <span></span>
                            <img src="/Assets/Images/image10.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Footwear;
