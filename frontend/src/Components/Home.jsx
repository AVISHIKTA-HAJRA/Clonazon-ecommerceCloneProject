import React from "react";

export default function Home() {
    return (
        <div class="body">
            <header>
                <div class="navbar">
                    <div class="nav-logo">
                        <img src="Images/Clonazon-logo.png" alt="Clonazon" />
                        <p>.in</p>
                    </div>
                    <div class="nav-location">
                        <div class="nav-loc-icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="nav-loc-info">
                            <div class="nav-loc-top">
                                <p>Delivering to Kolkata 70047</p>
                            </div>
                            <div class="nav-loc-btm">
                                <p>Update location</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-search">
                        <select class="nav-search-dropdown">
                            <option>All</option>
                        </select>
                        <input type="text" class="nav-search-box" placeholder="Search Clonazon.in" />
                        <div class="nav-search-icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div class="nav-lang">
                        <img class="nav-lang-image" src="Images/IndianFlag.jpg" alt="INDIA" />
                        <p>EN</p>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="nav-account">
                        <div class="nav-acc-info">
                            <div class="nav-acc-top">
                                <p>Hello, sign in</p>
                            </div>
                            <div class="nav-acc-btm">
                                <p>Account & Lists</p>
                            </div>
                        </div>
                        <div class="nav-acc-icon">
                            <i class="fa-solid fa-caret-down"></i>
                        </div>

                        {/* Account menu that appears on hover */}
                        <div class="account-menu">
                            <div class="menu-header">
                                <a href="#" class="nav-acc-signin-button">Sign in</a>
                            </div>
                            <div class="menu-content">
                                <div class="column">
                                    <p>Your Lists</p>
                                    <ul>
                                        <li><a href="#">Create a Wish List</a></li>
                                        <li><a href="#">Dicover Your Style</a></li>
                                        <li><a href="#">Explore Showroom</a></li>
                                    </ul>
                                </div>
                                <div class="column">
                                    <p>Your Account</p>
                                    <ul>
                                        <li><a href="#">Your Account</a></li>
                                        <li><a href="#">Your Orders</a></li>
                                        <li><a href="#">Your Wish List</a></li>
                                        <li><a href="#">Your Subscribe & Save Items</a></li>
                                        <li><a href="#">Memberships & Subscriptions</a></li>
                                        <li><a href="#">Your Seller Account</a></li>
                                        <li><a href="#">Register for a free Business Account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="nav-order">
                        <div class="nav-ord-info">
                            <div class="nav-ord-top">
                                <p>Returns</p>
                            </div>
                            <div class="nav-ord-btm">
                                <p>& Orders</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav-cart">
                        <div class="nav-cart-number">
                            <p>0</p>
                        </div>
                        <div class="nav-cart-icon">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <div class="nav-cart-info">
                                <p>Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menubar">
                    <div class="menu-bars">
                        <i class="fa-solid fa-bars"></i>
                        <p>All</p>
                    </div>
                    <div class="menu-option">
                        <p>Clonazon Deals</p>
                    </div>
                    <div class="menu-dropdown">
                        <p>Clonazon Freshies</p>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="menu-option">
                        <p>Sell</p>
                    </div>
                    <div class="menu-option">
                        <p>Bestsellers</p>
                    </div>
                    <div class="menu-option">
                        <p>Mobiles</p>
                    </div>
                    <div class="menu-option">
                        <p>Customer Service</p>
                    </div>
                    <div class="menu-option">
                        <p>New Releases</p>
                    </div>
                    <div class="menu-option">
                        <p>Fashion</p>
                    </div>
                    <div class="menu-option">
                        <p>Clonazon Pay</p>
                    </div>
                    <div class="menu-option">
                        <p>Electronics</p>
                    </div>
                    <div class="menu-option">
                        <p>Home & Kitchen</p>
                    </div>
                </div>
            </header>

            <main>
                <div class="main-website">
                    <div class="carousel-container">
                        <div class="carousel-wrapper">
                            <button id="prevBtn" class="carousel-btn prev-btn">
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>
                            <button id="nextBtn" class="carousel-btn next-btn">
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="carousel-content">
                                <div class="carousel-item">
                                    <img src="Images\Clonazon-demophoto3.jpg" alt="Test Image 1" />
                                </div>
                                <div class="carousel-item">
                                    <img src="Images\Clonazon-demophoto5.jpg" alt="Test Image 2" />
                                </div>
                                <div class="carousel-item">
                                    <img src="Images\Clonazon-demophoto2.jpeg" alt="Test Image 3" />
                                </div>
                                <div class="carousel-item">
                                    <img src="Images\Clonazon-demophoto4.jpg" alt="Test Image 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="first-level">
                    <div class="first-first-cont">
                        <p>Up to 75% off | Electronics & Accessories</p>
                        <div class="first-first-cont-grid">
                            <div>
                                <img src="Images\clonazon-first-first-cont1.jpg" />
                                <p>Laptops</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-first-cont2.jpg" />
                                <p>Smart Watches</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-first-cont3.jpg" />
                                <p>Smartphones</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-first-cont4.jpg" />
                                <p>Headphones</p>
                            </div>
                        </div>
                    </div>

                    <div class="first-second-cont">
                        <p>Up to 80% off | Home, Kitchen & more</p>
                        <div class="first-second-cont-grid">
                            <div>
                                <img src="Images\clonazon-first-second-cont1.jpg" />
                                <p>Kitchen Essentials</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-second-cont2.jpg" />
                                <p>Home Decor</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-second-cont3.jpg" />
                                <p>Furniture</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-second-cont4.jpg" />
                                <p>Home Improvement</p>
                            </div>
                        </div>
                    </div>

                    <div class="first-third-cont">
                        <p>Min. 80% off | Clonazon Brands & more</p>
                        <div class="first-third-cont-grid">
                            <div>
                                <img src="Images\clonazon-first-third-cont1.jpg" />
                                <p>Kitchen Essentials</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-third-cont2.jpg" />
                                <p>Home Essentials</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-third-cont3.jpg" />
                                <p>Daily Essentials</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-third-cont4.jpg" />
                                <p>Premium Styles</p>
                            </div>
                        </div>
                    </div>

                    <div class="first-fourth-cont">
                        <p>Up to 40% off | Footwear Collection</p>
                        <div class="first-fourth-cont-grid">
                            <div>
                                <img src="Images\clonazon-first-fourth-cont1.jpg" />
                                <p>Formals for Him</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-fourth-cont2.jpg" />
                                <p>Formals for Her</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-fourth-cont3.jpg" />
                                <p>Kids Collection</p>
                            </div>
                            <div>
                                <img src="Images\clonazon-first-fourth-cont4.jpg" />
                                <p>Monsoon Shoes</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="second-level">
                    <div class="second-first-cont">
                        <p>Starting ₹99 + 20% cashback on first order | Beauty & Makeup</p>
                        <div class="second-first-cont-grid">
                            <button id="second-prev-btn" class="level-btn">
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>
                            <button id="second-next-btn" class="level-btn">
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="second-first-cont-grid-carousel">
                                <div>
                                    <img src="Images\clonazon-second-first-cont1.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont2.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont3.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont4.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont5.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont6.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont7.jpg" />
                                </div>
                                <div>
                                    <img src="Images\clonazon-second-first-cont8.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer class="footer">
                <div class="to-top">
                    <p>Back to Top</p>
                </div>
                <div class="footer-info1">
                    <div>
                        <p class="footer-info1-heading">Get to Know Us</p>
                        <div class="footer-info1-body">
                            <div>About Clonazon</div>
                            <div>Careers</div>
                            <div>Press Releases</div>
                            <div>Clonazon Science</div>
                        </div>
                    </div>
                    <div>
                        <p class="footer-info1-heading">Connect with Us</p>
                        <div class="footer-info1-body">
                            <div>Facebook</div>
                            <div>Twitter</div>
                            <div>Instagram</div>
                        </div>
                    </div>
                    <div>
                        <p class="footer-info1-heading">Make Money with Us</p>
                        <div class="footer-info1-body">
                            <div>Sell on Clonazon</div>
                            <div>Protect and Build Your Brand</div>
                            <div>Clonazon Global Selling</div>
                            <div>Supply to Clonazon</div>
                            <div>Advertise Your Products</div>
                        </div>
                    </div>
                    <div>
                        <p class="footer-info1-heading">Let Us Help You</p>
                        <div class="footer-info1-body">
                            <div>Facebook</div>
                            <div>Twitter</div>
                            <div>Instagram</div>
                        </div>
                    </div>
                </div>
                <div class="footer-info2">
                    <div class="footer-info2-1">
                        <div>
                            <p class="footer-info2-heading">Clonazon Books</p>
                            <div class="footer-info2-body">
                                <p>Books, art & collectables</p>
                            </div>
                        </div>
                        <div>
                            <p class="footer-info2-heading">Clonazon Web Services</p>
                            <div class="footer-info2-body">
                                <p>Scalable Cloud Computing Services</p>
                            </div>
                        </div>
                        <div>
                            <p class="footer-info2-heading">Clonazon Audio</p>
                            <div class="footer-info2-body">
                                <p>Download Audio Books</p>
                            </div>
                        </div>
                        <div>
                            <p class="footer-info2-heading">Clonazon Movies</p>
                            <div class="footer-info2-body">
                                <p>Movies, TV & Celebrities</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-info2-2">
                        <div>
                            <p class="footer-info2-heading">Clonazon Shoping</p>
                            <div class="footer-info2-body">
                                <p>Designer Fashion Brands</p>
                            </div>
                        </div>
                        <div>
                            <p class="footer-info2-heading">Clonazon Business</p>
                            <div class="footer-info2-body">
                                <p>Everything for Your Business</p>
                            </div>
                        </div>
                        <div>
                            <p class="footer-info2-heading">Clonazon Now</p>
                            <div class="footer-info2-body">
                                <p>2-Hour Delivery on Everyday Items</p>
                            </div>
                        </div>
                        <div>
                            <p class="footer-info2-heading">Clonazon Music</p>
                            <div class="footer-info2-body">
                                <p>100 million songs, ad-free</p>
                                <p>Over 15 million podcast episodes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-details">

                </div>
            </footer>

        </div>

    );
}