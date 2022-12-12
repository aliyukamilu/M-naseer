$('#header-area').html(`
<div class="dope-nav-container breakpoint-off">
<div class="container">
  <div class="row">
    <!-- dope Menu -->
    <nav class="dope-navbar justify-content-between" id="dopeNav">

      <!-- Logo -->
      <a class="nav-brand" href="index.html">
        <img src="img/logo.png" alt="" width="50">
      </a>

      <!-- Navbar Toggler -->
      <div class="dope-navbar-toggler">
        <span class="navbarToggler">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <!-- Menu -->
      <div class="dope-menu">

        <!-- close btn -->
        <div class="dopecloseIcon">
          <div class="cross-wrap">
            <span class="top"></span>
            <span class="bottom"></span>
          </div>
        </div>

        <!-- Nav Start -->
        <div class="dopenav">
          <ul id="nav">
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#portfolio-section">Portfolio</a>
            </li>
            <li>
              <a href="#service-section">Services</a>
            </li>
            <li>
              <a href="#blog-section">Blog</a>
            </li>
            <li>
              <a href="#contact-section">Contact Us</a>
            </li>
          </ul>

        </div>
        <!-- Nav End -->
      </div>
    </nav>
  </div>
</div>
</div>
`)

$('.footer-section').html(`
<div class="container">
<div class="row align-items-center">
  <div class="col-lg-5 footer-left">
    <a href="#">
      <img src="img/logo-w.png" alt="" width="100">
    </a>
    <p class="copyright-text">&copy; 2022 M Naseer All right reserved.</p>
  </div>
  <div class="col-lg-7">
    <ul id="social">
      <li>
        <a target="_blank" href="https://www.facebook.com/nass.muhammad.7">
          <i class="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.twitter.com/the_mnaseer">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.behance.net/M96eer?tracking_source=search_projects%7Cm96eer">
          <i class="fa fa-behance"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/the.mnaseer">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
    </ul>

    <ul class="footer-menu">
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Our Work</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</div>
</div>
`)

let the_token_here = "IGQVJYUmxjcllvQUhzd2I2VWNhTVY3eEZA2dGZAobjdaMEdzTDkxeFY0TUVfNlRtSU9XbEVmb1JIVHRuZA19WS09hRlE3TUUyeEVFMnJxQW9kWDg4YXJqN3BaVlRUYW1ZAQVdOT2JxcUdmeHEycWFYWmV5VgZDZD"
let the_url = "https://graph.instagram.com"
async function getPosts() {
  try {

  } catch (error) {

  }
  const response = await fetch(`${the_url}/me/media?fields=id,caption&access_token=${the_token_here}`)
  const data = await response.json()

  for (let i = 0; i < data.data.length; i++) {
    const posto = data.data[i];

    (async () => {
      const response2 = await fetch(`${the_url}/${posto.id}?fields=media_url,caption,permalink&access_token=${the_token_here}`)
      const data2 = await response2.json()

      $("#showThePost").append(`
        <div class="col-lg-4 col-md-6 mb-4">
          <a href="${data2.permalink}">
            <div class="single-blog">
              <div class="overlay overlay-bg"></div>
              <img class="img-fluid" src=${data2.media_url} alt="">
              <div class="blog-post-details">
                
                <a href="${data2.permalink}">
                  <h6 class="limitedText">${data2.caption}</h6>
                </a>
              </div>
            </div>
          </a>
        </div>
      `)
    })()

    if (i === 5) {
      break
    }
  }

}

getPosts()