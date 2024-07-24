import React from 'react'

const Sproduct = () => {
  return (
    <>
  <section id="header">
    <a href="">
      <img src="img/logo.png" alt="logo" className="logo" />
    </a>
    <nav>
      <ul id="navbar">
        <li>
          <a className=" link  " href="index.html">
            Home
          </a>
        </li>
        <li>
          <a className="link real_active" href="shop.html">
            Shop
          </a>
        </li>
        <li>
          <a className="link" href="blog.html">
            Blog
          </a>
        </li>
        <li>
          <a className="link" href="about.html">
            About
          </a>
        </li>
        <li>
          <a className="link" href="contact.html">
            contact
          </a>
        </li>
        <li>
          <a href="cart.html">
            <i className="fa-solid fa-bag-shopping" />
          </a>
        </li>
      </ul>
    </nav>
  </section>
  <section id="product_details" className="section-p1">
    <div className="single_pro_img">
      <img src="img/products/f1.jpg" width="100%" alt="" id="main_image" />
      <div className="small_img_group">
        <div className="small_img_col">
          <img
            src="img/products/f1.jpg"
            width="100%"
            className="small_img"
            alt=""
          />
        </div>
        <div className="small_img_col">
          <img
            src="img/products/f2.jpg"
            width="100%"
            className="small_img"
            alt=""
          />
        </div>
        <div className="small_img_col">
          <img
            src="img/products/f3.jpg"
            width="100%"
            className="small_img"
            alt=""
          />
        </div>
        <div className="small_img_col">
          <img
            src="img/products/f4.jpg"
            width="100%"
            className="small_img"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="single_pro_details">
      <h6>Home / T-shirt</h6>
      <h4>Men's Fashion T-shirt</h4>
      <h2>$139.00</h2>
      <select name="" id="">
        <option value="">select Size</option>
        <option value="">XL</option>
        <option value="">XXL</option>
        <option value="">small</option>
        <option value="">large</option>
      </select>
      <input type="number" name="" id="" defaultValue={1} />
      <button className="btn_transP"> Add To Cart</button>
      <h4>product Details</h4>
      <span>
        The Gildon Ultra Cotton T-shirt is made from a substantial 6.0 Oz. per
        sq.yd. fabric constructed from 100% cotton, this classic fit preshrunk
        jersey knit provide unmatched comfort with each wear. Featurinf a tap
        nect and shoulder, and a seamless double-needle coller, and available in
        a range of color, it offer ot all in the ultimate head-turning package.
      </span>
    </div>
  </section>
  <section id="feature1" className="section-p1">
    <div className="pro_head">
      <h2>Featured Products</h2>
      <p>Summer collection New modern</p>
    </div>
    <div className="pro_container">
      <div className="pro">
        <img src="img/products/n5.jpg" alt="" />
        <div className="des">
          <span>Adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className="price_cart">
            <h4>$79</h4>
            <a href="#" className="fal fa-shopping-cart" />
          </div>
        </div>
      </div>
      <div className="pro">
        <img src="img/products/n6.jpg" alt="" />
        <div className="des">
          <span>Adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className="price_cart">
            <h4>$75</h4>
            <a href="#" className="fal fa-shopping-cart" />
          </div>
        </div>
      </div>
      <div className="pro">
        <img src="img/products/n7.jpg" alt="" />
        <div className="des">
          <span>Adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className="price_cart">
            <h4>$70</h4>
            <a href="#" className="fal fa-shopping-cart" />
          </div>
        </div>
      </div>
      <div className="pro">
        <img src="img/products/n8.jpg" alt="" />
        <div className="des">
          <span>Adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className="price_cart">
            <h4>$60</h4>
            <a href="#" className="fal fa-shopping-cart" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="newsletters">
    <img src="img/banner/b14.png" alt="" />
    <div className="left">
      <h4>Sign Up For Newsletters</h4>
      <p>
        Get E-mails updates about our latest shop and{" "}
        <span>Special offers</span>
      </p>
    </div>
    <div className="right">
      <input
        type="text"
        name="search"
        id="searchBar"
        placeholder="Enter your E-mail "
      />
      <button
        type="submit"
        className="normal_btn"
        style={{ backgroundColor: "#088178", color: "white" }}
      >
        Sign Up
      </button>
    </div>
  </section>
  <footer className="section-p1">
    <div className="col">
      <img src="img/logo.png" alt="" />
      <h4>Contact</h4>
      <p>
        {" "}
        <strong>Address: </strong> 123 Wellington Road.00 San Andries Ropar
      </p>
      <p>
        {" "}
        <strong>Phone:</strong> +91487954875
      </p>
      <p>
        {" "}
        <strong>Hours:</strong> 12:00 - 19:00 Mon-Fri
      </p>
      <h4 className="follow">Follow Us</h4>
      <div className="icon">
        <a style={{ color: "black", paddingRight: 11 }} href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a style={{ color: "black", paddingRight: 11 }} href="#">
          <i className="fab fa-twitter" />
        </a>
        <a style={{ color: "black", paddingRight: 11 }} href="#">
          <i className="fab fa-instagram" />
        </a>
        <a style={{ color: "black", paddingRight: 11 }} href="#">
          <i className="fab fa-youtube" />
        </a>
        <a style={{ color: "black", paddingRight: 11 }} href="#">
          <i className="fab fa-pinterest-p" />
        </a>
      </div>
    </div>
    <div className="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Informations</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Term &amp; Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">view Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store Or google Play</p>
      <div className="row">
        <img src="img/pay/app.jpg" alt="" />
        <img src="img/pay/play.jpg" alt="" />
      </div>
      <p>Secured Payment gateways</p>
      <img src="img/pay/pay.png" alt="" />
    </div>
  </footer>
  <div className="copyright">
    <p>Copyright © 2024 Cara. All Rights Reserved</p>
  </div>
</>

  )
}

export default Sproduct
