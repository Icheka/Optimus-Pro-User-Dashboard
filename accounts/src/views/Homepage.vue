<template>
<div>
    <header id="header">
    <aside id="aside">
      <span class="aside__logo">
        <img src="./assets/Screenshot from 2020-12-21 23-01-09.png" alt="aside__logo">
      </span>
      <span class="aside__website-link">
        <span class="link">
         https://optimusproinc.com
        </span>
      </span>
    </aside>

    <nav id="nav" class="nav-desktop">
      <div class="logo-container">
        <img src="./assets/Screenshot from 2020-12-21 23-01-09.png" alt="aside__logo" id="main-logo">
      </div>

      <div class="mobile-nav-links">
        <div class="account-container">
          <div class="account-img">
            <img src="./assets/round-account-button-with-user-inside.svg" alt="aside__logo" id="account">
          </div>
        </div>

        <div @click="e => toggleMenu(e)" class="menu">
          <img src="./assets/menu.svg" alt="menu">         
        </div>
      </div>

      <div class="nav-links">
        <p style="display: block; width: 100%; background: white; float: right; margin-bottom: 2em;" @click="e => toggleMenu(e)" class="cancel-icon">X</p>
        <p style="height: 2em;">&nbsp;</p>
        <ul class="nav-links-collections">
          <li class="nav-link home"><a href="#body" rel="noopener noreferrer">Home</a></li>

          <li class="nav-link about-us">
            <a href="#" target="_blank" rel="noopener noreferrer">About us</a>
            <div class="nav-modal about-us--modal">
              <ul class="about-us-links">
                <li class="about-us-link__item who-we-are">
                  <a href="#" target="_blank" rel="noopener noreferrer">Who we are</a>
                </li>

                <li class="about-us-link__item what-we-do">
                  <a href="#" target="_blank" rel="noopener noreferrer">What we do</a>
                </li>

                <li class="about-us-link__item our-vision">
                  <a href="#" target="_blank" rel="noopener noreferrer">Our vision</a>
                </li>

                <li class="about-us-link__item our-mission">
                  <a href="#" target="_blank" rel="noopener noreferrer">Our mission</a>
                </li>

                <li class="about-us-link__item our-goals">
                  <a href="#" target="_blank" rel="noopener noreferrer">Our goals</a>
                </li>

                <li class="about-us-link__item our-values">
                  <a href="#" target="_blank" rel="noopener noreferrer">Our values</a>
                </li>
                
                <li class="about-us-link__item meet-the-team">
                  <a href="#" target="_blank" rel="noopener noreferrer">Meet the team</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-link markets">
            <a href="#" target="_blank" rel="noopener noreferrer">Markets</a>

            <div class="nav-modal markets--modal">
              <ul class="markets-links">
                <li class="markets-link__item cryptocurrency">
                  <a href="#" target="_blank" rel="noopener noreferrer">cryptocurrency (Bitcoin)</a>
                </li>
                <li class="markets-link__item forex">
                  <a href="#" target="_blank" rel="noopener noreferrer">Forex</a>
                </li>
                <li class="markets-link__item stock">
                  <a href="#" target="_blank" rel="noopener noreferrer">Stock</a>
                </li>
                <li class="markets-link__item commodities">
                  <a href="#" target="_blank" rel="noopener noreferrer">Commodities</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-link academy">
            Academy

            <div class="nav-modal academy--modal">
              <ul class="academy-links">
                <li class="academy-link__item course">
                  <a href="#" target="_blank" rel="noopener noreferrer">Courses</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-link why-optimus-pro">                   
            <a href="#" target="_blank" rel="noopener noreferrer">Why Optimus Pro</a>
          </li>

          <li class="nav-link optimus-pro-nation">
            <a href="#" target="_blank" rel="noopener noreferrer">Optimus Pro Nation</a>
          </li>

          <li class="nav-link blog">
            <a href="#" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>

          <li class="nav-link contact-us">
            <a href="#" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </li>
        </ul>

        <div class="status">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button class="sign-in sign-out">Log out</button>
          </a>
        </div>
      </div>

      <div class="account-container" id="account-container-desktop">
        <div class="account-img">
          <img src="./assets/Screenshot from 2020-12-21 23-01-09.png" alt="aside__logo" id="account">
        </div>
        
        <div class="status">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button class="sign-in sign-out">Log out</button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button class="sign-in sign-out">Sign in</button>
          </a>
        </div>
      </div>

    </nav>
  </header>


  <main id="main">
    <section class="slide-show">
      <div class="slideshow-container">
      
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <img src="./assets/cat_eyes_blue_143433_1366x768.jpg" alt="slide-imgs" width="500" height="600">
          <h2 class="text">
            Welcome To The official Trading Site For forex
            Where We Educate and Trade For You Lorem ipsum 
            dolor sit amet consectetur adipisicing elit. 
            Nam repudiandae deleniti fugit, odit quisquam 
            ab unde? Quis.
          </h2>
        </div>
      
        <div class="mySlides fade">
          <img src="./assets/branch_birds_owls_scarf_94136_1366x768.jpg" alt="slide-imgs" width="500" height="600">
          <h2 class="text">
            We're Dedicated To The Course Of Giving You A financial freedom
            Through Forex And other commodities traded on our You Lorem ipsum 
            dolor sit amet consectetur adipisicing elit. 
            Nam repudiandae deleniti fugit, odit quisquam 
            ab unde? Quis.
          </h2>
        </div>
      
        <div class="mySlides fade">
          <img src="./assets/orange_ice_mint_139564_1366x768.jpg" alt="slide-imgs" width="500" height="600">
          <h2 class="text">
            We're Dedicated To The Course Of Giving You A financial freedom
            Through Forex And other commodities traded on our You Lorem ipsum 
            dolor sit amet consectetur adipisicing elit. 
            Nam repudiandae deleniti fugit, odit quisquam 
            ab unde? Quis.
          </h2>
        </div>
      </div>
    </section>

    <section class="introduction">
      <div class="intro-img-container">
        <img src="./assets/INTRO.png" alt="intro">
      </div>

      <div class="intro-paras">

        <h2 class="why-optmius"> Why Optimus Pro</h2>

        <p class="intro-item">
          We are committed to helping you transform your finance by guiding you through 
          every step necessary to achieve your financial goals. First by making you a 
          consistent profitable trader, so that you can attain financial stability and live the life you desire.
        </p>

        <p class="intro-item">
          We make a Pro trader out of you regardless of your level; whether you are an absolute Beginner, 
          Intermediate or even an Advance trader, we have something to offer you through our years of experience and academic excellence.
        </p>

        <p class="intro-item">
          We offer quality mentorship program, one on one coaching, life-long membership, access to our 
          OptimusProTrading Room where we do in-real time analysis and take live trades.
        </p>

        <p class="intro-item">
          We are market watchers. We research and analyze the markets 24/7 in order to bring you the best 
          profitable trading and investing opportunities to maximize your earnings.
        </p>

        <p class="intro-item">
          We hold our webinars every month inviting other experienced traders to share their views, 
          knowledge and trading experience with you in our community.
        </p>

      </div>
    </section>

    <section class="optmius-pro-nation">
      <h2 class="optmius-pro-nation__header">
        Optmius Pro Nation is a community for wealthy critics
      </h2>

      <div class="nation-collections">
        <div class="nation-collections-container">
          <div class="ethan-up nation-collections-item">
            <span class="ethan-up-item nation-name">Ethan up</span>
            <span class="ethan-up-item stars-rating">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
            </span>
            <span class="ethan-up-item price-range"><s>$0</s> &nbsp; $50</span>
          </div>
        </div>
        
        <div class="nation-collections-container">
          <div class="level-up nation-collections-item">
            <span class="level-up-item nation-name">Level up</span>
            <span class="level-up-item stars-rating">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
            </span>
            <span class="level-up-item price-range"><s>$200</s> &nbsp; $100</span>
          </div>
        </div>
        
        <div class="nation-collections-container">
          <div class="optimus nation-collections-item">
            <span class="optimus-item nation-name">Optimus</span>
            <span class="optimus-item stars-rating">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
            </span>
            <span class="optimus-item price-range"><s>$300</s> &nbsp; $150</span>
          </div>
        </div>

        <div class="nation-collections-container">
          <div class="optimus-pro nation-collections-item">
            <span class="optimus-pro-item nation-name">Optimus Pro</span>
            <span class="optimus-pro-item stars-rating">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/starred.svg" alt="star">
            </span>
            <span class="optimus-pro-item price-range"><s>$400</s> &nbsp; $200</span>
          </div>
        </div>
        
        <div class="nation-collections-container">
          <div class="optimus-prime nation-collections-item">
            <span class="optimus-prime-item nation-name">Optimus Prime</span>
            <span class="optimus-prime-item stars-rating">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
              <img src="./assets/star.svg" alt="star">
            </span>
            <span class="optimus-prime-item price-range"><s>$500</s> &nbsp; $250</span>
          </div>
        </div>
        
      </div>
    </section>

    <section class="testmonial">
      <h2 class="testmonial__header">Testmonials</h2>

      <div id="testmonial-container">
        <div class="testmonial-container fade">
          <div class="test-item img-container">
            <img src="./assets/darran-shen-Q_oXnBhxVu0-unsplash.jpg" alt="testmonial-imgs">
            <p class="profile trader-name">John Doe</p>
            <p class="profile expertise">Senior trader</p>
            <p class="profile trader-name">John Doe</p>
          </div>
          
          <div class="test-item test-container">
            <p class="testmonial-para">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi repellendus perferendis 
              necessitatibus dolore earum beatae repellat voluptatum cum quibusdam. 
              "
            </p>
          </div>
        </div>

        <div class="testmonial-container fade">
          <div class="test-item img-container">
            <img src="./assets/hiki-liu-jWXK01vu79U-unsplash.jpg" alt="testmonial-imgs">
            <p class="profile trader-name">John Doe</p>
            <p class="profile expertise">Senior trader</p>
            <p class="profile trader-name">John Doe</p>
          </div>
        
          <div class="test-item test-container">
            <p class="testmonial-para">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi repellendus perferendis 
              necessitatibus dolore earum beatae repellat voluptatum cum quibusdam. 
              "
            </p>
          </div>
        </div>

        <div class="testmonial-container fade">
          <div class="test-item img-container">
            <img src="./assets/yudhisthira-lk-gUQUsF6cT6w-unsplash.jpg" alt="testmonial-imgs">
            <p class="profile trader-name">John Doe</p>
            <p class="profile expertise">Senior trader</p>
            <p class="profile trader-name">John Doe</p>
          </div>
        
          <div class="test-item test-container">
            <p class="testmonial-para">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi repellendus perferendis 
              necessitatibus dolore earum beatae repellat voluptatum cum quibusdam. 
              "
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-us-footer">
      <h3 class="footer-contact-us header" id="contact-us">Contact Us</h3>

      <div class="contact-links">
        <a href="#">
            <div class="contacts twitter" title="twitter">
                <svg viewBox="0 -47 512.00004 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 55.964844c-32.207031 1.484375-31.503906 1.363281-35.144531 1.667968l19.074219-54.472656s-59.539063 21.902344-74.632813 25.820313c-39.640625-35.628907-98.5625-37.203125-140.6875-11.3125-34.496094 21.207031-53.011719 57.625-46.835937 100.191406-67.136719-9.316406-123.703126-41.140625-168.363282-94.789063l-14.125-16.964843-10.554687 19.382812c-13.339844 24.492188-17.769531 52.496094-12.476563 78.851563 2.171875 10.8125 5.863282 21.125 10.976563 30.78125l-12.117188-4.695313-1.4375 20.246094c-1.457031 20.566406 5.390625 44.574219 18.320313 64.214844 3.640625 5.53125 8.328125 11.605469 14.269531 17.597656l-6.261719-.960937 7.640625 23.199218c10.042969 30.480469 30.902344 54.0625 57.972657 67.171875-27.035157 11.472657-48.875 18.792969-84.773438 30.601563l-32.84375 10.796875 30.335938 16.585937c11.566406 6.324219 52.4375 27.445313 92.820312 33.78125 89.765625 14.078125 190.832031 2.613282 258.871094-58.664062 57.308594-51.613282 76.113281-125.03125 72.207031-201.433594-.589844-11.566406 2.578125-22.605469 8.921875-31.078125 12.707031-16.964844 48.765625-66.40625 48.84375-66.519531zm-72.832031 48.550781c-10.535157 14.066406-15.8125 32.03125-14.867188 50.578125 3.941407 77.066406-17.027343 136.832031-62.328125 177.628906-52.917968 47.660156-138.273437 66.367188-234.171875 51.324219-17.367187-2.722656-35.316406-8.820313-50.171875-14.910156 30.097656-10.355469 53.339844-19.585938 90.875-37.351563l52.398438-24.800781-57.851563-3.703125c-27.710937-1.773438-50.785156-15.203125-64.96875-37.007812 7.53125-.4375 14.792969-1.65625 22.023438-3.671876l55.175781-15.367187-55.636719-13.625c-27.035156-6.621094-42.445312-22.796875-50.613281-35.203125-5.363281-8.152344-8.867188-16.503906-10.96875-24.203125 5.578125 1.496094 12.082031 2.5625 22.570312 3.601563l51.496094 5.09375-40.800781-31.828126c-29.398437-22.929687-41.179687-57.378906-32.542969-90.496093 91.75 95.164062 199.476563 88.011719 210.320313 90.527343-2.386719-23.183593-2.449219-23.238281-3.074219-25.445312-13.886719-49.089844 16.546875-74.015625 30.273438-82.453125 28.671874-17.621094 74.183593-20.277344 105.707031 8.753906 6.808593 6.265625 16.015625 8.730469 24.632812 6.589844 7.734375-1.921875 14.082031-3.957031 20.296875-6.171875l-12.9375 36.945312 16.515625.011719c-3.117187 4.179688-6.855469 9.183594-11.351562 15.183594zm0 0"/></svg>
            </div>
        </a>
        <a href="#">
            <div class="contacts email" title="email">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106 C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787 L338.213,256L482,112.212V399.787z"/></svg>
            </div>
        </a>
        <a href="#">
            <div class="contacts facebook" title="facebook">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style="null" class="icon icons8-Facebook-Filled"><path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path></svg>
            </div>
        </a>
        <a href="#">
            <div class="contacts linkedin" title="LinkedIn">
                <svg class="linkedin" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19,19H16V13.7A1.5,1.5 0 0,0 14.5,12.2A1.5,1.5 0 0,0 13,13.7V19H10V10H13V11.2C13.5,10.36 14.59,9.8 15.5,9.8A3.5,3.5 0 0,1 19,13.3M6.5,8.31C5.5,8.31 4.69,7.5 4.69,6.5A1.81,1.81 0 0,1 6.5,4.69C7.5,4.69 8.31,5.5 8.31,6.5A1.81,1.81 0 0,1 6.5,8.31M8,19H5V10H8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"/></svg>
            </div>
        </a>
      </div>
    </section>
  </main>

  <footer id="footer">
    <div class="footer-links">
      <section class="footer-links-item optimus-pro-footer-links">
        <span class="about-footer-link"><a href="#">About</a> &nbsp; | &nbsp; <a href="#">Team</a></span>
        <span class="contacts-footer-link">&nbsp; | &nbsp; <a href="#">Contacts</a> &nbsp; | &nbsp; <a href="#">Offices</a></span>
        <span class="services-footer-link">&nbsp; | &nbsp; <a href="#">Services</a> &nbsp; | &nbsp; <a href="#">Reports</a></span>
      </section>
      
      <section class="footer-links-item optimus-pro-desk-footer-links">
        <span class="news-footer-link"><a href="#">News</a> &nbsp; | &nbsp; <a href="#">Articles</a></span>
        <span class="podcast-footer-link">&nbsp; | &nbsp; <a href="#">Podcast</a> &nbsp; | &nbsp; <a href="#">Videos</a></span>
        <span class="photos-footer-link">&nbsp; | &nbsp; <a href="#">Photos</a> &nbsp; | &nbsp; <a href="#">Motivation</a></span>
      </section>
    </div>

    <div class="subscription-email">
      <form action="" class="subscribe">
        <h3 class="subscription-header">Subscribe To Optimus Pro Desk For Latest Info</h3>

        <div class="input-fields">
          <input type="text" name="name" placeholder="Enter your name" autocomplete="off">
          <input type="email" name="email" placeholder="Enter your email" autocomplete="off">
        </div>

        <button type="submit">Submit <span class="arrow-right"> &rarr;</span></button>
      </form>
    </div>

    <div class="arrow-up">
      <a href="#nav">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.005 512.005" style="enable-backgroundnew 0 0 512.005 512.005;" xml:space="preserve"><g><g>
          <path d="M466.22,205.787L263.553,3.12c-4.16-4.16-10.923-4.16-15.083,0L45.804,205.787c-21.803,21.803-21.803,57.28,0,79.083
            s57.28,21.803,79.083,0l77.781-77.781v251.584c0,29.397,23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333V207.088
            l77.781,77.781c21.803,21.803,57.28,21.803,79.083,0C488.001,263.088,488.001,227.589,466.22,205.787z"/>
          </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
      </a> 
    </div>
  </footer>
</div>

</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

a {
  text-decoration: none;
  color: unset;
}

body, html {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  outline: none;
  scroll-behavior: smooth;
}

[alt="aside__logo"] {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

#aside {
  background-color: #101935;
  padding: 0.5rem 6rem;
  color: #F2FDFF;
  display: flex;
  justify-content: center;
}

#aside span {
  display: block;
}

.aside__website-link {
  margin-top: 0.2rem;
  margin-left: 0.5rem;
}

#nav {
  display: flex;
  padding: 1rem 2rem;
  background-color: #F2FDFF;
}

#main-logo {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.nav-links-collections {
  display: flex;
}

.nav-modal, .status {
  position: absolute;
  margin-left: -1rem;
}

.status {
  margin-left: -6rem;
  background-color: #101935;
  width: 140px;
  padding-bottom: 0.7rem;
  text-align: center;
}

.about-us {
  position: relative;
}

.about-us--modal {
  width: 200px;
  padding-left: 0rem;
}


.mobile-nav-links {
  display: none;
}

.cancel-icon {
  display: none;
}

.nav-links .status {
  display: none;
}

.nav-links ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* =============================== Carousel styles starts here ========================================== */
 .slideshow-container {
  width: 100%;
  position: relative;
}

/* Hide the images by default */
.mySlides {
  display: none;
}
[alt="slide-imgs"] {
  width: 100%;
  height: 600px;
}

.mySlides::before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  top: 0;
  bottom: 0;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  top: 30%;
  left: 10%;
  font-size: larger;
  width: 600px;
  transform: scale(1.2);
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

.introduction {
  display: flex;
}

.optmius-pro-nation {
  background-color: #efefef;
  padding-top: 4rem;
  padding-bottom: 3rem;
}

.optmius-pro-nation__header {
  margin-right: 2.9rem;
  color: #101935;
  font-family: 'Dancing Script', cursive;
  color: goldenrod;
  text-transform: uppercase;
  text-align: center;
}

.nation-collections {
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-evenly;
}

.nation-collections-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.nation-collections-item {
  display: flex;
  flex-direction: column;
}

[alt="star"] {
  width: 17px;
  height: 17px;
}

.optimus, .optimus-pro, .ethan-up, .level-up, .optimus-prime {
  background-color: #08B2E3;
  color: #F2FDFF;
}

.optimus-prime {
  padding-bottom: 17rem;
}

.optimus-pro {
  padding-bottom: 14rem;
}

.optimus {
  padding-bottom: 11rem;
}

.level-up {
  padding-bottom: 7rem;
}

.ethan-up {
  padding-bottom: 3rem;
}

.optimus-item, .optimus-pro-item, .ethan-up-item, .level-up-item, .optimus-prime-item {
  margin-top: 0.7rem;
  text-align: center;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid #F2FDFF;
}

.testmonial {
  padding: 3rem 3rem;
  padding-left: 0rem;
}

.testmonial__header {
  padding-left: 2.5rem;
  font-family: 'Dancing Script', cursive;
  color: goldenrod;
  text-transform: uppercase;
  text-align: center;
}


#testmonial-container {
  display: flex;
  position: relative;
  height: 406.03px;
}

.testmonial-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
}

.test-item {
  text-align: center;
}

.profile {
  margin: 0rem;
}

.testmonial-para {
  margin-top: 2rem;
  font-family: 'Courier New', Courier, monospace;
  background-color: #1019357a;
  color: #F2FDFF;
  padding: 1rem 1.5rem;
  border-radius: 0.3rem;
  /* margin-right: 2rem; */
}

[alt="testmonial-imgs"] {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid #166088;
}

/* On hover, add a black background color with a little bit see-through */

.contact-us-footer {
  padding: 2rem 0rem;
  font-family: 'Dancing Script', cursive;
  color: goldenrod;
  text-transform: uppercase;
  text-align: center;
  background-color: #eeeeee;
}

.contact-links {
  display: flex;
  margin-bottom: 2rem;
  margin-left: 2.5rem;
  justify-content: center;
}
.contacts {
  height: 40px;
  width: 40px;
  background-color: #101935;
  margin-right: 30px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 2rem;
}
svg {
  width: 20px;
  height: 20px;
}
path {
  fill: #F2FDFF;
}
.contacts:hover path{
  fill: #08B2E3;
}

#footer {
  background-color: #101935;
  padding: 3rem 3rem;
  padding-bottom: 2rem;
  color: #F2FDFF;
  position: relative;
  text-align: center;
}

.footer-links {
  margin-top: 3rem;
}

.footer-links-item {
  margin-top: 3rem;
}

.footer-links .footer-links-item a:hover {
  color: #08B2E3;
}

.subscription-email {
  margin-top: 4rem;
}

.input-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.subscribe {
  text-align: center;
}

.input-fields input {
  display: block;
  margin: 1.5rem 0rem 1.9rem 0rem;
  padding: 0.8rem 9rem 0.8rem 1rem;
  border: none;
  border-radius: 0.3rem;
  outline-color: #08B2E3;
  font-size: medium;
}

.subscribe [type="submit"] {
  background-color: #166088;
  border-radius: 0.3rem;
  padding: 9px 18px;
  border: none;
  color: #F2FDFF;
  font-size: medium;
  cursor: pointer;
}

.arrow-right {
  transform: scale(1.2);
}

.bottom-footer-contents {
  margin-top: 4rem;
}

.faq, .term-of-use, .privacy, .disclaimer {
  text-decoration: underline;
  margin-bottom: 2rem;
}

.arrow-up {
  width: 50px;
  height: 50px;
  right: 2rem;
  top: 3rem;
  position: absolute;
  background-color: #08B2E3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ============================= Desktop screens ==================================== */

@media only screen and (min-width: 913px) {

  /* =============================  styles for Desktop NavBar ==================================== */
  .logo-container {
    margin-right: auto;
  }

  .nav-link {
    margin-top: 1rem;
  }

  .nav-links-collections .nav-link {
    margin-right: 2rem;
    padding: 0rem 0.1rem;
  }

  .nav-links-collections .nav-link:hover {
    cursor: pointer;
    border-bottom: 2px solid #101935;
  }

  .nav-modal li:hover {
    border-bottom: unset;
  }

  .home {
    margin-left: 5rem;
    border-bottom: 2px solid #101935;
  }

  .nav-links-collections .contact-us {
    margin-right: unset;
  }

  .about-us--modal, .markets--modal, .academy--modal {
    display: none;
    background-color: #101935;
    color: #F2FDFF;
    z-index: 99;
    margin-top: 0.3rem;
    padding: 1rem 0rem;
  }

  .about-us-links .about-us-link__item, .markets-links .markets-link__item, .academy-links .academy-link__item {
    padding: 0.2rem 0.6rem;
    width: 90%;
  }

  .academy-links .academy-link__item {
    width: 75%;
  }

  .about-us-links .about-us-link__item:hover, .markets-links .markets-link__item:hover, .academy-links li:hover {
    background-color: #564787;
    cursor: pointer;
  }

  #account-container-desktop {
    margin-top: 0.7rem;
    margin-left: 3rem;
  }

  #account {
    transform: scale(1.2);
  }

  #account:hover {
    cursor: pointer;
  }

  #account-container-desktop .status {
    display: none;
    z-index: 99;
  }

  .status .sign-out {
    border-radius: 0.3rem;
    padding: 9px 18px;
    border: none;
    margin-top: 0.7rem;
  }

  .status .sign-out:hover {
    background-color: #bfd9dd;
    cursor: pointer;
  }

  .intro-img-container {
    width: 80%;
  }

  [alt="intro"] {
    width: 100%;
  }

  .intro-paras {
    padding: 4rem 2rem;
    background-color: #166088;
    color: #F2FDFF;
  }

}


/* ============================= Mobile screens ==================================== */

@media only screen and (max-width: 912px) {

  /* =============================== styles for Mobile NavBar ========================================== */
  #nav {
    padding: 1rem 2rem;
    background-color: #F2FDFF;
    position: relative;
  }

  .nav-modal {
    display: none;
    position: unset;
  }

  .mobile-nav-links {
    margin-top: 0.5rem;
    margin-left: auto;
    display: flex;
  }

  #account {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  #account-container-desktop {
    display: none;
  }
  
  [alt="menu"] {
    width: 30px;
    height: 30px;
    margin-top: 0.15rem;
    margin-left: 1rem;
    border: 2.3px solid rgba(61, 60, 60, 0.897);
    border-radius: 0.2rem;
    padding: 0rem 0.1rem;
    cursor: pointer;
  }

  .nav-links {
    display: none;
    position: absolute;
    z-index: 99;
  }

  .nav-links-collections {
    display: unset;
  }

  .open-nav-links {
    display: block;
    top: 0.5px;
    background-color: #101935;
    color: #F2FDFF;
    animation: open-nav 0.5s 0s 1 normal ease-out forwards;
  }

  @keyframes open-nav {
    0% {
      right: -1000px;
      opacity: 0;
    }

    100% {
      right: 0px;
      opacity: 1; 
      visibility: visible;
    }
  }

  .cancel-icon {
    display: block;
    margin-right: 5rem;
    margin-bottom: 0rem;
    direction: rtl;
    font-weight: bold;
    transform: scale(1.3);
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .nav-links .nav-link {
    padding: 1rem 13rem 1rem 1rem;
  }

  .nav-links .nav-link:hover {
    cursor: pointer;
    background-color: #564787;
  }

  .nav-modal {
    margin-top: 0.5rem;
  }

  .nav-links-collections .about-us, .nav-links-collections .markets, .nav-links-collections .academy {
    border-bottom: 1.2px solid #F2FDFF;
  }

  .about-us-links .about-us-link__item, .markets-links .markets-link__item, .academy-links .academy-link__item {
    margin: 0rem 2rem;
    padding: 0.3rem;
    width: 100%;
  }


  .about-us-links .about-us-link__item:hover, .markets-links .markets-link__item:hover, .academy-links li:hover {
    background-color: #DBCBD8;
    color: #101935;
    cursor: pointer;
  }

  .nav-links .status {
    display: block;
    margin-top: 1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    position: unset;
    margin-left: unset;
    width: unset;
    padding-bottom: unset;
    text-align: unset;
  }

  .status .sign-out {
    border-radius: 0.3rem;
    padding: 9px 28px;
    border: none;
  }

  .nav-links .status .sign-out:hover {
    cursor: pointer;
    background-color: #bfd9dd;
  }

  /* =============================== NavBar styles ends here ========================================== */
  
  .text {
    width: unset;
    top: 40%;
    left: unset;
    transform: scale(1);
  }

  .introduction {
    flex-direction: column;
    margin-top: 2rem;
  }

  .intro-img-container {
    width: 100%;
  }

  [alt="intro"] {
    width: 100%;
  }

  .intro-paras {
    padding: 4rem 2rem;
    background-color: #166088;
    color: #F2FDFF;
  }

  .intro-item {
    font-size: small;
  }

  .optmius-pro-nation__header {
    padding-left: 2rem;
    font-size: 19px;
  }

  .nation-collections {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .nation-collections-container {
    margin-top: 2rem;
  }

  .testmonial {
    padding: 3rem 2rem;
    padding-right: 4rem;
  }

  .testmonial__header {
    font-size: 19px;
  }

  #testmonial-container {
    flex-direction: column;
    height: 100%;
  }

  .testmonial-container {
    flex-direction: column;
  }

  .test-container {
    margin-left: unset;
  }

  [alt="testmonial-imgs"] {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .testmonial-para {
    margin-top: 0.5rem;
    direction: unset;
  }

  .contact-us-footer {
    padding: 3rem 2rem;
  }

  .footer-contact-us {
    font-size: 19px;
  }

  .contacts {
    width: 35px;
    height: 35px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  #footer {
    padding: 3rem 2rem;
    padding-bottom: 0.1rem;
    color: #F2FDFF;
  }

  .input-fields input {
    padding: 0.8rem 5rem 0.8rem 1rem;
  }

  .arrow-up {
    top: 1rem;
    right: 1rem;
  }

}
</style>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    export default class Homepage extends Vue {

        mounted() {
            // this.script();
        }

        toggleMenu(e) {
            alert("Menu toggled")
            const sideNav = document.getElementsByClassName("nav-links")[0]!;
            sideNav.classList.toggle("open-nav-links");
        }    


        script() {
            const menu = document.querySelector('[alt="menu"]')!;
            const cancelBtn = document.getElementsByClassName('cancel-icon')[0]!;
            const sideNav = document.getElementsByClassName("nav-links")[0]!;
            const navLinks = document.getElementsByClassName("nav-link")!;
            const body = document.getElementsByTagName("body")[0]!;
            const avatar = document.getElementById("#account-container-desktop")!;

            // control mobile view navlink slide-in and slide-out animations
            menu.addEventListener("click", () => {
                sideNav.classList.toggle("open-nav-links");
            });

            cancelBtn.addEventListener("click", () => {
                setTimeout(() => {
                    sideNav.classList.toggle("open-nav-links");
                }, 10);
            });

            const mouseOverEvt = e => {
            const liFlag = Boolean(e.target.closest(".nav-link").lastElementChild?.className);
            if (liFlag &&  window.innerWidth < 912) {
                e.target.closest(".nav-link").lastElementChild.style.display = "block";
            }
            };


            Array.from(navLinks).forEach((li) => {
                li.addEventListener("mouseover", mouseOverEvt);
                li.addEventListener("click", mouseOverEvt);

                li.addEventListener("mouseout", e => {
                    const liFlag = Boolean(e.target!['closest'](".nav-link").lastElementChild?.className);
                    if (liFlag && window.innerWidth < 912 ) {
                        e.target!['closest'](".nav-link").lastElementChild.style.display = "none";
                    }
                });
            });

            // control desktop modal pop-in and pop-out

            avatar.addEventListener("mouseover", (e) => {
            if ( window.innerWidth > 912 ) {
                e.target!['closest']("#account-container-desktop").lastElementChild.style.display = "block";
            }
            });

            avatar.addEventListener("mouseout", (e) => {
            if ( window.innerWidth > 912 ) {
                e.target!['closest']("#account-container-desktop").lastElementChild.style.display = "none";
            }
            });

            Array.from(navLinks).forEach(li => {
                li.addEventListener("mouseover",(e) => {
                    if ( window.innerWidth > 912 ) {
                        if (e.target!['closest'](".nav-link") && e.target!['closest'](".nav-link").lastElementChild.tagName === "DIV") {
                            e.target!['closest'](".nav-link").lastElementChild.style.display = "block";
                        }
                    }
            });

            li.addEventListener("mouseout",(e) => {
                if ( window.innerWidth > 912 && e.target!['closest'](".nav-link").lastElementChild.tagName === "DIV") {
                    e.target!['closest'](".nav-link").lastElementChild.style.display = "none";
                }
            });
            });
            
            this.showSlides();
        }

        showSlides() {
            let slideIndex = 0;
            let slides = document.getElementsByClassName("mySlides");

            for (let i = 0; i < slides.length; i++) {
                slides[i]['style'].display = "none";
            }

            slideIndex++;

            if (slideIndex > slides.length) {slideIndex = 1};

            slides[slideIndex-1]['style'].display = "block";

            

            setTimeout(() => this.showSlides(), 4000); // Change image every 2 seconds

        };
    }
</script>