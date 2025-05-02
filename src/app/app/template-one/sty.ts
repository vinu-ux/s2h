export const cssProperty ={
  text: 'border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]',
  a: 'menu-link border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]',
  commonText: 'text-2sm font-normal text-gray-800 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary',
  accordian: 'gap-0.5 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-200',
  menuDiv: 'flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]',
  menuTit: 'text-sm font-medium fn18 text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary'
}


export const designsTag = [
  {
    "header": {
      "options": {"hasSub": "Y", "collapse": false},
      "h1": {"tag": "<h1></h1>", "text": "Enter Text", "color": "black", "class": ""},
      "h2": {"tag": "<h2></h2>", "text": "Enter Text", "color": "black", "class": ""},
      "h3": {"tag": "<h3></h3>", "text": "Enter Text", "color": "black", "class": ""},
      "h4": {"tag": "<h4></h4>", "text": "Enter Text", "color": "black", "class": ""},
      "h5": {"tag": "<h5></h5>", "text": "Enter Text", "color": "black", "class": ""},
      "h6": {"tag": "<h6></h6>", "text": "Enter Text", "color": "black", "class": ""}
    }
  },
  {
    "button": {
      "tag": "<button></button>", "text": "Text", "color": "black", "background": "blue", "class": ""
    },
    "options": {"hasSub": "N", "collapse": false}
  },
  {
    "link": {
      "tag": "<a></a>", "text": "Text", "color": "black", "background": "blue", "class": ""
    },
    "options": {"hasSub": "N", "collapse": false}
  },
  {
    "image": {
      "tag": "<img />", "text": "Text", "color": "black", "background": "blue", "class": ""
    },
    "options": {"hasSub": "N", "collapse": false}
  },
  {
    "section": {
      "tag": "<section></section>", "width": "100", "height": "100", "class": ""
    },
    "options": {"hasSub": "N", "collapse": false}
  },
  {
    "div": {
      "tag": "<div></div>", "width": "100", "height": "100", "class": ""
    },
    "options": {"hasSub": "N", "collapse": false}
  },
  {
    "span": {
      "tag": "<span></span>"
    }
  }
]

export const tempHtml=`
<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Norda - Minimal eCommerce HTML Template</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/assets2/images/favicon.png">

    <!-- All CSS is here
	============================================ -->

    <link rel="stylesheet" href="assets/assets2/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/assets2/css/vendor/simple-line-icons.css">
    <link rel="stylesheet" href="assets/assets2/css/vendor/elegant.css">
    <link rel="stylesheet" href="assets/assets2/css/vendor/linear-icon.css">
    <link rel="stylesheet" href="assets/assets2/css/plugins/nice-select.css">
    <link rel="stylesheet" href="assets/assets2/css/plugins/easyzoom.css">
    <link rel="stylesheet" href="assets/assets2/css/plugins/slick.css">
    <link rel="stylesheet" href="assets/assets2/css/plugins/animate.css">
    <link rel="stylesheet" href="assets/assets2/css/plugins/magnific-popup.css">
    <link rel="stylesheet" href="assets/assets2/css/plugins/jquery-ui.css">
    <link rel="stylesheet" href="assets/assets2/css/style.css">
</head>

<body>
    <div class="main-wrapper">
        <header class="header-area transparent-bar section-padding-1">
            <div class="container-fluid">
                <div class="header-large-device">

                    <div class="header-bottom">
                        <div class="row align-items-center">
                            <div class="col-xl-2 col-lg-2">
                                <div class="logo">
                                    <a href="index.html"><img src="assets/assets2/images/logo/logo.png" alt="logo"></a>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-5 d-flex align-items-end">
                                <div class="main-menu main-menu-padding-1 main-menu-lh-1">
                                    <nav>
                                        <ul>
                                            <li><a href="index.html">HOME </a>
                                                <ul class="sub-menu-style">
                                                    <li><a href="index.html">Home version 1 </a></li>
                                                    <li><a href="index-2.html">Home version 2</a></li>
                                                    <li><a href="index-3.html">Home version 3</a></li>
                                                    <li><a href="index-4.html">Home version 4</a></li>
                                                    <li><a href="index-5.html">Home version 5</a></li>
                                                    <li><a href="index-6.html">Home version 6</a></li>
                                                    <li><a href="index-7.html">Home version 7</a></li>
                                                    <li><a href="index-8.html">Home version 8</a></li>
                                                    <li><a href="index-9.html">Home version 9</a></li>
                                                    <li><a href="index-10.html">Home version 10</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">SHOP </a>
                                                <ul class="mega-menu-style mega-menu-mrg-1">
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <a class="dropdown-title" href="#">Catagories</a>
                                                                <ul>
                                                                    <li><a href="shop.html">TVs & Appliances</a></li>
                                                                    <li><a href="shop-list.html">Electronics</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a class="dropdown-title" href="#">Grocery</a>
                                                                <ul>
                                                                    <li><a href="product-details.html">Vegitables</a>
                                                                    </li>
                                                                    <li><a href="product-details-2.html">Fruites</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html"><img
                                                                        src="assets/assets2/images/banner/banner-12.png"
                                                                        alt=""></a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">PAGES </a>
                                                <ul class="sub-menu-style">
                                                    <li><a href="about-us.html">about us </a></li>
                                                    <li><a href="cart.html">cart page</a></li>
                                                    <li><a href="checkout.html">checkout </a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                    <li><a href="wishlist.html">wishlist </a></li>
                                                    <li><a href="contact.html">contact us </a></li>
                                                    <li><a href="order-tracking.html">order tracking</a></li>
                                                    <li><a href="login-register.html">login / register </a></li>
                                                </ul>
                                            </li>

                                            <li><a href="contact.html">CONTACT </a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="header-action header-action-flex">
                                    <div class="same-style-2 same-style-2-font-inc">
                                        <a href="login-register.html"><i class="icon-user"></i></a>
                                    </div>
                                    <div class="same-style-2 same-style-2-font-inc">
                                        <a href="wishlist.html"><i class="icon-heart"></i><span class="pro-count bg-black text-white">03</span></a>
                                    </div>
                                    <div class="same-style-2 same-style-2-font-inc header-cart">
                                        <a class="cart-active" href="#">
                                            <i class="icon-basket-loaded"></i><span class="pro-count bg-black text-white">02</span>
                                        </a>
                                    </div>
                                </div>
                        </div>
                            <!-- <div class="col-xl-2 col-lg-3">
                                <div class="header-action header-action-flex header-action-mrg-right">
                                    <div class="same-style-2 header-search-1">
                                        <a class="search-toggle" href="#">
                                            <i class="icon-magnifier s-open"></i>
                                            <i class="icon_close s-close"></i>
                                        </a>
                                        <div class="search-wrap-1">
                                            <form action="#">
                                                <input placeholder="Search products…" type="text">
                                                <button class="button-search"><i class="icon-magnifier"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="same-style-2">
                                        <a href="login-register.html"><i class="icon-user"></i></a>
                                    </div>
                                    <div class="same-style-2">
                                        <a href="wishlist.html"><i class="icon-heart"></i><span class="pro-count red">03</span></a>
                                    </div>
                                    <div class="same-style-2 header-cart">
                                        <a class="cart-active" href="#">
                                            <i class="icon-basket-loaded"></i><span class="pro-count red">02</span>
                                        </a>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="header-small-device small-device-ptb-1">
                    <div class="row align-items-center">
                        <div class="col-5">
                            <div class="mobile-logo">
                                <a href="index.html">
                                    <img alt="" src="assets/assets2/images/logo/logo.png">
                                </a>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="header-action header-action-flex">
                                <div class="same-style-2">
                                    <a href="login-register.html"><i class="icon-user"></i></a>
                                </div>
                                <div class="same-style-2">
                                    <a href="wishlist.html"><i class="icon-heart"></i><span
                                            class="pro-count red">03</span></a>
                                </div>
                                <div class="same-style-2 header-cart">
                                    <a class="cart-active" href="#">
                                        <i class="icon-basket-loaded"></i><span class="pro-count red">02</span>
                                    </a>
                                </div>
                                <div class="same-style-2 main-menu-icon">
                                    <a class="mobile-header-button-active" href="#"><i class="icon-menu"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- mini cart start -->
        <div class="sidebar-cart-active">
            <div class="sidebar-cart-all">
                <a class="cart-close" href="#"><i class="icon_close"></i></a>
                <div class="cart-content">
                    <h3>Shopping Cart</h3>
                    <ul>
                        <li class="single-product-cart">
                            <div class="cart-img">
                                <a href="#"><img src="assets/assets2/images/cart/cart-1.jpg" alt=""></a>
                            </div>
                            <div class="cart-title">
                                <h4><a href="#">Simple Black T-Shirt</a></h4>
                                <span> 1 × $49.00 </span>
                            </div>
                            <div class="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                        <li class="single-product-cart">
                            <div class="cart-img">
                                <a href="#"><img src="assets/assets2/images/cart/cart-2.jpg" alt=""></a>
                            </div>
                            <div class="cart-title">
                                <h4><a href="#">Norda Backpack</a></h4>
                                <span> 1 × $49.00 </span>
                            </div>
                            <div class="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                    </ul>
                    <div class="cart-total">
                        <h4>Subtotal: <span>$170.00</span></h4>
                    </div>
                    <div class="cart-checkout-btn">
                        <a class="btn-hover cart-btn-style" href="cart.html">view cart</a>
                        <a class="no-mrg btn-hover cart-btn-style" href="checkout.html">checkout</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu start -->
        <div class="mobile-header-active mobile-header-wrapper-style">
            <div class="clickalbe-sidebar-wrap">
                <a class="sidebar-close"><i class="icon_close"></i></a>
                <div class="mobile-header-content-area">
                    <div class="header-offer-wrap mobile-header-padding-border-4">
                        <p><i class="icon-paper-plane"></i> FREE SHIPPING world wide for all orders over
                            <span>$199</span></p>
                    </div>
                    <div class="mobile-search mobile-header-padding-border-1">
                        <form class="search-form" action="#">
                            <input type="text" placeholder="Search here…">
                            <button class="button-search"><i class="icon-magnifier"></i></button>
                        </form>
                    </div>
                    <div class="mobile-menu-wrap mobile-header-padding-border-2">
                        <!-- mobile menu start -->
                        <nav>
                            <ul class="mobile-menu">
                                <li class="menu-item-has-children"><a href="index.html">Home</a></li>
                                <li class="menu-item-has-children "><a href="#">shop</a>
                                    <ul>
                                        <li>
                                            <a class="dropdown-title" href="#"></a>
                                            <ul>
                                                <li><a href="shop.html">TVs & Appliances</a></li>
                                                <li><a href="shop-list.html">Electronics</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="dropdown-title" href="#"></a>
                                            <ul>
                                                <li><a href="product-details.html">Vegitables</a></li>
                                                <li><a href="product-details-2.html">Fruites</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop.html"><img src="assets/assets2/images/banner/banner-12.png"
                                                    alt=""></a>
                                        </li>
                                    </ul>
                                    <ul class="dropdown">
                                        <li class="menu-item-has-children"><a href="#">Catagories</a>
                                            <ul class="dropdown">
                                                <li><a href="shop.html">TVs & Appliances</a></li>
                                                <li><a href="shop-list.html">Electronics</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">Grocery</a>
                                            <ul class="dropdown">
                                                <li><a href="product-details.html">Fruites</a></li>
                                                <li><a href="product-details-2.html">Vegitables</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children"><a href="#">Pages</a>
                                    <ul class="dropdown">
                                        <li><a href="about-us.html">about us </a></li>
                                        <li><a href="cart.html">cart page</a></li>
                                        <li><a href="checkout.html">checkout </a></li>
                                        <li><a href="my-account.html">my account</a></li>
                                        <li><a href="wishlist.html">wishlist </a></li>
                                        <li><a href="contact.html">contact us </a></li>
                                        <li><a href="order-tracking.html">order tracking</a></li>
                                        <li><a href="login-register.html">login / register </a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact us</a></li>
                            </ul>
                        </nav>
                        <!-- mobile menu end -->
                    </div>
                    <div class="mobile-header-info-wrap mobile-header-padding-border-3">
                        <div class="single-mobile-header-info">
                            <a href="order-tracking.html"><i class="lastudioicon-pin-3-2"></i> Track Your Order </a>
                        </div>
                    </div>
                    <div class="mobile-contact-info mobile-header-padding-border-4">
                        <ul>
                            <li><i class="icon-phone "></i> (+612) 2531 5600</li>
                            <li><i class="icon-envelope-open "></i> norda@domain.com</li>
                            <li><i class="icon-home"></i> PO Box 1622 Colins Street West Australia</li>
                        </ul>
                    </div>
                    <div class="mobile-social-icon">
                        <a class="facebook" href="#"><i class="icon-social-facebook"></i></a>
                        <a class="twitter" href="#"><i class="icon-social-twitter"></i></a>
                        <a class="pinterest" href="#"><i class="icon-social-pinterest"></i></a>
                        <a class="instagram" href="#"><i class="icon-social-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-area pb-85"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-7">
                        <div class="banner-wrap banner-mr-1 mb-30">
                            <div class="banner-img banner-img-zoom">
                                <a href="product-details.html"><img src="assets/assets2/images/banner/banner-1.jpg" alt=""></a>
                            </div>
                            <div class="banner-content-1">
                                <h2>Zara Pattern Boxed <br>Underwear</h2>
                                <p>Stretch, fresh-cool help you alway comfortable</p>
                                <div class="btn-style-1">
                                    <a class="animated btn-1-padding-2" href="product-details.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5">
                        <div class="banner-wrap  banner-ml-1 mb-30">
                            <div class="banner-img banner-img-zoom">
                                <a href="product-details.html"><img src="assets/assets2/images/banner/banner-2.jpg" alt=""></a>
                            </div>
                            <div class="banner-content-2">
                                <h2>Basic Color Caps</h2>
                                <p>Minimalist never cool, choose and make the simple great again!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="service-area">
            <div class="container">
                <div class="service-wrap mt-0">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="single-service-wrap mb-30">
                                <div class="service-icon">
                                    <i class="icon-cursor"></i>
                                </div>
                                <div class="service-content">
                                    <h3>Free Shipping</h3>
                                    <span>Orders over $100</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="single-service-wrap mb-30">
                                <div class="service-icon">
                                    <i class="icon-reload"></i>
                                </div>
                                <div class="service-content">
                                    <h3>Free Returns</h3>
                                    <span>Within 30 days</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="single-service-wrap mb-30">
                                <div class="service-icon">
                                    <i class="icon-lock"></i>
                                </div>
                                <div class="service-content">
                                    <h3>100% Secure</h3>
                                    <span>Payment Online</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="single-service-wrap mb-30">
                                <div class="service-icon">
                                    <i class="icon-tag"></i>
                                </div>
                                <div class="service-content">
                                    <h3>Best Price</h3>
                                    <span>Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-area section-padding-1 pt-115 pb-75">
            <div class="container">
                <div class="section-title-tab-wrap mb-45">
                    <div class="section-title">
                        <h2>Featured Products</h2>
                    </div>
                    <div class="tab-style-1 nav">
                        <a class="active" href="#product-1" data-bs-toggle="tab">Best Seller</a>
                        <a href="#product-2" data-bs-toggle="tab"> Trending</a>
                        <a href="#product-3" data-bs-toggle="tab">New Arrivals </a>
                        <a href="#product-4" data-bs-toggle="tab">All Products</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="tab-content jump">
                    <div id="product-1" class="tab-pane active">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-1.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Black T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-2.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Black Simple Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$38.50</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-3.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-20%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Lined Brown Swearshirt</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$46.00</span>
                                                <span class="old-price">$66.75</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-4.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Simple Backpack</a></h4>
                                            <div class="product-price">
                                                <span>$102.54</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-5.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-15%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Contrasting Sunglasses</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$35.45</span>
                                                <span class="old-price">$45.80</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-6.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Blue T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-7.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Sport Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$37.86</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-8.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-black">Out of stock</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Basic Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$46.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-2" class="tab-pane">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-8.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Basic Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-7.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Sport Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$38.50</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-6.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-20%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Blue T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$46.00</span>
                                                <span class="old-price">$66.75</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-5.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Contrasting Sunglasses</a></h4>
                                            <div class="product-price">
                                                <span>$102.54</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-4.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-15%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Simple Backpack</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$35.45</span>
                                                <span class="old-price">$45.80</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-3.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Lined Brown Swearshirt</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-2.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Black Simple Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$37.86</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-1.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-black">Out of stock</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Black T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$46.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-3" class="tab-pane">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img class="default-img" src="assets/assets2/images/product/product-4.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Simple Backpack</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-3.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Lined Brown Swearshirt</a></h4>
                                            <div class="product-price">
                                                <span>$38.50</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-2.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-20%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Black Simple Sneaker</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$46.00</span>
                                                <span class="old-price">$66.75</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-1.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Black T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$102.54</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-8.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-15%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Basic Sneaker</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$35.45</span>
                                                <span class="old-price">$45.80</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-7.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Sport Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-6.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Blue T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$37.86</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-5.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-black">Out of stock</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Contrasting Sunglasses</a></h4>
                                            <div class="product-price">
                                                <span>$46.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product-4" class="tab-pane">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-6.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Blue T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-7.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Sport Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$38.50</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-8.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-20%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Basic Sneaker</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$46.00</span>
                                                <span class="old-price">$66.75</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-5.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Contrasting Sunglasses</a></h4>
                                            <div class="product-price">
                                                <span>$102.54</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-4.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-red">-15%</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Norda Simple Backpack</a></h4>
                                            <div class="product-price">
                                                <span class="new-price">$35.45</span>
                                                <span class="old-price">$45.80</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-3.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Lined Brown Swearshirt</a></h4>
                                            <div class="product-price">
                                                <span>$56.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-2.jpg" alt="">
                                        </a>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Black Simple Sneaker</a></h4>
                                            <div class="product-price">
                                                <span>$37.86</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="single-product-wrap mb-35 sh2">
                                    <div class="product-img product-img-zoom mb-20">
                                        <a href="product-details.html">
                                            <img src="assets/assets2/images/product/product-1.jpg" alt="">
                                        </a>
                                        <span class="pro-badge left bg-black">Out of stock</span>
                                        <div class="product-action-wrap">
                                            <div class="product-action-left">
                                                <button><i class="icon-basket-loaded"></i>Add to Cart</button>
                                            </div>
                                            <div class="product-action-right tooltip-style">
                                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                        class="icon-size-fullscreen icons"></i><span>Quick
                                                        View</span></button>
                                                <button class="font-inc"><i
                                                        class="icon-refresh"></i><span>Compare</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap p-2">
                                        <div class="product-content-left">
                                            <h4><a href="product-details.html">Simple Black T-Shirt</a></h4>
                                            <div class="product-price">
                                                <span>$46.20</span>
                                            </div>
                                        </div>
                                        <div class="product-content-right tooltip-style">
                                            <button class="font-inc"><i
                                                    class="icon-heart"></i><span>Wishlist</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="deal-area pt-150 pb-130 bg-img" style="background-image:url(assets/assets2/images/bg/bg-1.jpg);">
            <div class="container">
                <div class="deal-content-1">
                    <span>deal of the day</span>
                    <h2><span>50% OFF</span> Basic <br>Tee Flavor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Nunc imperdiet, nulla.</p>
                    <div class="timer-wrap">
                        <h4>Expires in:</h4>
                        <div class="timer-style-1" id="timer-1-active"></div>
                    </div>
                    <div class="deal-btn">
                        <a href="product-details.html">Buy now</a>
                    </div>
                </div>
            </div>
        </div>




        <footer class="footer-area pt-30 pb-30" style="background: #343434;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="contact-info-wrap">
                            <div class="footer-logo">
                                <a href="#"><img src="assets/assets2/images/logo/logo.png" alt="logo"></a>
                            </div>
                            <div class="single-contact-info">
                                <span  class="text-white">Our Location</span>
                                <p  class="text-white">869 General Village Apt. 645, Moorebury, USA</p>
                            </div>
                            <div class="single-contact-info">
                                <span  class="text-white">24/7 hotline:</span>
                                <p  class="text-white">(+99) 052 128 2399</p>
                            </div>
                            <div class="social-style-2 social-style-2-mrg">
                                <a href="#"><i class="social_twitter"></i></a>
                                <a href="#"><i class="social_facebook"></i></a>
                                <a href="#"><i class="social_googleplus"></i></a>
                                <a href="#"><i class="social_instagram"></i></a>
                                <a href="#"><i class="social_youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 d-grid align-items-end">
                        <div class="footer-right-wrap ">
                            <div class="footer-logo-area1">
                                <ul>
                                    <li><a class="fs-6 p-3 fw-semibold text-white" href="index.html"><span>Home</span></a></li>
                                    <li><a class="fs-6 p-3 fw-semibold text-white" href="pricing.html"><span>Pricing</span></a>
                                    </li>
                                    <li><a class="fs-6 p-3 fw-semibold text-white" href="faq.html"><span>FAQ</span></a></li>
                                    <li><a class="fs-6 p-3 fw-semibold text-white" href="contact.html"><span>Contact</span></a>
                                    </li>
                                    <li><a class="fs-6 p-3 fw-semibold text-white" href="about.html"><span>About</span></a></li>
                                    <li><a class="fs-6 p-3 fw-semibold text-white" href="login.html"><span>Login</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="copyright d-flex justify-content-end">
                            <p>Copyright © 2024 | <a href="https://shop2host.com/">Built with
                                    <span>Shop2host</span> </a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-5 col-md-6 col-12 col-sm-12">
                                <div class="tab-content quickview-big-img">
                                    <div id="pro-1" class="tab-pane fade show active">
                                        <img src="assets/assets2/images/product/product-1.jpg" alt="">
                                    </div>
                                    <div id="pro-2" class="tab-pane fade">
                                        <img src="assets/assets2/images/product/product-3.jpg" alt="">
                                    </div>
                                    <div id="pro-3" class="tab-pane fade">
                                        <img src="assets/assets2/images/product/product-6.jpg" alt="">
                                    </div>
                                </div>
                                <div class="quickview-wrap mt-15">
                                    <div class="nav nav-style-6">
                                        <button class="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                                            data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                            aria-selected="true">
                                            <img src="assets/assets2/images/product/quickview-s1.jpg" alt="product-thumbnail">
                                        </button>
                                        <button class="nav-link" id="pro-2-tab" data-bs-toggle="tab"
                                            data-bs-target="#pro-2" type="button" role="tab" aria-controls="pro-2"
                                            aria-selected="true">
                                            <img src="assets/assets2/images/product/quickview-s2.jpg" alt="product-thumbnail">
                                        </button>
                                        <button class="nav-link" id="pro-3-tab" data-bs-toggle="tab"
                                            data-bs-target="#pro-3" type="button" role="tab" aria-controls="pro-3"
                                            aria-selected="true">
                                            <img src="assets/assets2/images/product/quickview-s3.jpg" alt="product-thumbnail">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6 col-12 col-sm-12">
                                <div class="product-details-content quickview-content">
                                    <h2>Simple Black T-Shirt</h2>
                                    <div class="product-ratting-review-wrap">
                                        <div class="product-ratting-digit-wrap">
                                            <div class="product-ratting">
                                                <i class="icon_star"></i>
                                                <i class="icon_star"></i>
                                                <i class="icon_star"></i>
                                                <i class="icon_star"></i>
                                                <i class="icon_star"></i>
                                            </div>
                                            <div class="product-digit">
                                                <span>5.0</span>
                                            </div>
                                        </div>
                                        <div class="product-review-order">
                                            <span>62 Reviews</span>
                                            <span>242 orders</span>
                                        </div>
                                    </div>
                                    <p>Seamlessly predominate enterprise metrics without performance based process
                                        improvements.</p>
                                    <div class="pro-details-price">
                                        <span class="new-price">$75.72</span>
                                        <span class="old-price">$95.72</span>
                                    </div>
                                    <div class="pro-details-color-wrap">
                                        <span>Color:</span>
                                        <div class="pro-details-color-content">
                                            <ul>
                                                <li><a class="dolly" href="#">dolly</a></li>
                                                <li><a class="white" href="#">white</a></li>
                                                <li><a class="azalea" href="#">azalea</a></li>
                                                <li><a class="peach-orange" href="#">Orange</a></li>
                                                <li><a class="mona-lisa active" href="#">lisa</a></li>
                                                <li><a class="cupid" href="#">cupid</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pro-details-size">
                                        <span>Size:</span>
                                        <div class="pro-details-size-content">
                                            <ul>
                                                <li><a href="#">XS</a></li>
                                                <li><a href="#">S</a></li>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">L</a></li>
                                                <li><a href="#">XL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="pro-details-quality">
                                        <span>Quantity:</span>
                                        <div class="cart-plus-minus">
                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1">
                                        </div>
                                    </div>
                                    <div class="product-details-meta">
                                        <ul>
                                            <li><span>Categories:</span> <a href="#">Woman,</a> <a href="#">Dress,</a>
                                                <a href="#">T-Shirt</a></li>
                                            <li><span>Tag: </span> <a href="#">Fashion,</a> <a href="#">Mentone</a> , <a
                                                    href="#">Texas</a></li>
                                        </ul>
                                    </div>
                                    <div class="pro-details-action-wrap">
                                        <div class="pro-details-add-to-cart">
                                            <a title="Add to Cart" href="#">Add To Cart </a>
                                        </div>
                                        <div class="pro-details-action">
                                            <a title="Add to Wishlist" href="#"><i class="icon-heart"></i></a>
                                            <a title="Add to Compare" href="#"><i class="icon-refresh"></i></a>
                                            <a class="social" title="Social" href="#"><i class="icon-share"></i></a>
                                            <div class="product-dec-social">
                                                <a class="facebook" title="Facebook" href="#"><i
                                                        class="icon-social-facebook"></i></a>
                                                <a class="twitter" title="Twitter" href="#"><i
                                                        class="icon-social-twitter"></i></a>
                                                <a class="instagram" title="Instagram" href="#"><i
                                                        class="icon-social-instagram"></i></a>
                                                <a class="pinterest" title="Pinterest" href="#"><i
                                                        class="icon-social-pinterest"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal end -->
    </div>

    <!-- All JS is here
============================================ -->

    <script src="assets/assets2/js/vendor/modernizr-3.11.7.min.js"></script>
    <script src="assets/assets2/js/vendor/jquery-v3.6.0.min.js"></script>
    <script src="assets/assets2/js/vendor/jquery-migrate-v3.3.2.min.js"></script>
    <script src="assets/assets2/js/vendor/popper.min.js"></script>
    <script src="assets/assets2/js/vendor/bootstrap.min.js"></script>
    <script src="assets/assets2/js/plugins/slick.js"></script>
    <script src="assets/assets2/js/plugins/jquery.syotimer.min.js"></script>
    <script src="assets/assets2/js/plugins/jquery.nice-select.min.js"></script>
    <script src="assets/assets2/js/plugins/wow.js"></script>
    <script src="assets/assets2/js/plugins/jquery-ui.js"></script>
    <script src="assets/assets2/js/plugins/magnific-popup.js"></script>
    <script src="assets/assets2/js/plugins/sticky-sidebar.js"></script>
    <script src="assets/assets2/js/plugins/easyzoom.js"></script>
    <script src="assets/assets2/js/plugins/scrollup.js"></script>
    <script src="assets/assets2/js/plugins/ajax-mail.js"></script>
    <!-- Main JS -->
    <script src="assets/assets2/js/main.js"></script>
    <script>
        var TrandingSlider = new Swiper('.tranding-slider', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    </script>

</body>

</html>

`

