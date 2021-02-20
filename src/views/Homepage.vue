<template>
    <div id="homepage">
        <header id="header">
            <aside id="aside">
                <span class="aside__logo">
                    <img src="./assets/logo.jpg" alt="aside__logo">
                </span>
                <span class="aside__website-link">
                    <span class="link">
                    https://optimusproinc.com
                    </span>
                </span>
            </aside>
            <nav id="nav" class="nav-desktop">
            <div class="logo-container">
                <img src="./assets/logo.jpg" alt="aside__logo" id="main-logo">
            </div>

            <div class="mobile-nav-links">
                <div class="account-container">
                <div class="account-img">
                    <!-- <img src="./assets/branch_birds_owls_scarf_94136_1366x768.jpg" alt="aside__logo" id="account"> -->
                </div>
                </div>

                <div class="menu">
                <img src="./assets/menu.svg" alt="menu">         
                </div>
            </div>

            <div class="nav-links">
                <p class="cancel-icon">X</p>

                <ul class="nav-links-collections">
                <li class="nav-link home"><a href="#body" rel="noopener noreferrer">Home</a></li>

                <li class="nav-link about-us">
                    <a href="#" rel="noopener noreferrer">About us</a>
                    <div class="nav-modal about-us--modal">
                    <ul class="about-us-links">
                        <li class="about-us-link__item who-we-are">
                        <a href="#" rel="noopener noreferrer">Who we are</a>
                        </li>

                        <li class="about-us-link__item what-we-do">
                        <a href="#" rel="noopener noreferrer">What we do</a>
                        </li>

                        <li class="about-us-link__item our-vision">
                        <a href="#" rel="noopener noreferrer">Our vision</a>
                        </li>

                        <li class="about-us-link__item our-mission">
                        <a href="#" rel="noopener noreferrer">Our mission</a>
                        </li>

                        <li class="about-us-link__item our-goals">
                        <a href="#" rel="noopener noreferrer">Our goals</a>
                        </li>

                        <li class="about-us-link__item our-values">
                        <a href="#" rel="noopener noreferrer">Our values</a>
                        </li>
                        
                        <li class="about-us-link__item meet-the-team">
                        <a href="#" rel="noopener noreferrer">Meet the team</a>
                        </li>
                    </ul>
                    </div>
                </li>

                <li class="nav-link markets">
                    <a href="#" rel="noopener noreferrer">Markets</a>

                    <div class="nav-modal markets--modal">
                    <ul class="markets-links">
                        <li class="markets-link__item cryptocurrency">
                        <a href="#" rel="noopener noreferrer">cryptocurrency (Bitcoin)</a>
                        </li>
                        <li class="markets-link__item forex">
                        <a href="#" rel="noopener noreferrer">Forex</a>
                        </li>
                        <li class="markets-link__item stock">
                        <a href="#" rel="noopener noreferrer">Stock</a>
                        </li>
                        <li class="markets-link__item commodities">
                        <a href="#" rel="noopener noreferrer">Commodities</a>
                        </li>
                    </ul>
                    </div>
                </li>

                <li class="nav-link academy">
                    Academy

                    <div class="nav-modal academy--modal">
                    <ul class="academy-links">
                        <li class="academy-link__item course">
                        <a href="#" rel="noopener noreferrer">Courses</a>
                        </li>
                    </ul>
                    </div>
                </li>

                <li class="nav-link why-optimus-pro">                   
                    <a href="#" rel="noopener noreferrer">Why Optimus Pro</a>
                </li>

                <li class="nav-link optimus-pro-nation">
                    <a href="#" rel="noopener noreferrer">Optimus Pro Nation</a>
                </li>

                <li class="nav-link blog">
                    <a href="#" rel="noopener noreferrer">Blog</a>
                </li>

                <li class="nav-link contact-us">
                    <a href="#" rel="noopener noreferrer">Contact Us</a>
                </li>
                </ul>

                <div class="status">
                    <btn class="btn btn-secondary" rel="noopener noreferrer">
                        <button @click="e => login()" class="sign-in sign-out">Sign In</button>
                    </btn>
                    <btn class="btn btn-secondary" rel="noopener noreferrer">
                        <button @click="e => logout()" class="sign-in sign-out">Sign Out</button>
                    </btn>
                </div>
            </div>

            <div class="account-container" id="account-container-desktop">
                <div class="account-img">
                    <!-- <img src="./assets/Screenshot from 2020-12-21 23-01-09.png" alt="aside__logo" id="account"> -->
                    <i class="fa fa-user-circle fa-2x" style="color: navy;"></i>
                </div>
                
                <div class="status">
                <a rel="noopener noreferrer">
                    <button @click="e => logout()" class="sign-in sign-out">Sign Out</button>
                </a>
                <a rel="noopener noreferrer">
                    <button @click="e => login()" class="sign-in sign-out">Sign In</button>
                </a>
                </div>
            </div>

            </nav>
        </header>

        <!-- carousel -->
            <div class="bd-example">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/cat_eyes_blue_143433_1366x768.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            Welcome To The official Trading Site For forex
                            Where We Educate and Trade For You Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. 
                            Nam repudiandae deleniti fugit, odit quisquam 
                            ab unde? Quis.
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/round-account-button-with-user-inside.svg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            We're Dedicated To The Course Of Giving You A financial freedom
                            Through Forex And other commodities traded on our You Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. 
                            Nam repudiandae deleniti fugit, odit quisquam 
                            ab unde? Quis.
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/orange_ice_mint_139564_1366x768.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            We're Dedicated To The Course Of Giving You A financial freedom
                            Through Forex And other commodities traded on our You Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. 
                            Nam repudiandae deleniti fugit, odit quisquam 
                            ab unde? Quis.
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            <!-- carousel -->


        <main id="main">
            <section class="introduction">
            <div class="intro-img-container">
                <img src="./assets/INTRO.png" alt="intro">
            </div>

            <div class="intro-paras">

                <h2 class="why-optmius section-tag"> Why Optimus Pro</h2>

                <p class="intro-item text-white">
                We are committed to helping you transform your finance by guiding you through 
                every step necessary to achieve your financial goals. First by making you a 
                consistent profitable trader, so that you can attain financial stability and live the life you desire.
                </p>

                <p class="intro-item text-white">
                We make a Pro trader out of you regardless of your level; whether you are an absolute Beginner, 
                Intermediate or even an Advance trader, we have something to offer you through our years of experience and academic excellence.
                </p>

                <p class="intro-item text-white">
                We offer quality mentorship program, one on one coaching, life-long membership, access to our 
                OptimusProTrading Room where we do in-real time analysis and take live trades.
                </p>

                <p class="intro-item text-white">
                We are market watchers. We research and analyze the markets 24/7 in order to bring you the best 
                profitable trading and investing opportunities to maximize your earnings.
                </p>

                <p class="intro-item text-white">
                We hold our webinars every month inviting other experienced traders to share their views, 
                knowledge and trading experience with you in our community.
                </p>

            </div>
            </section>

            <section class="optmius-pro-nation section-tag">
            <h3 class="optmius-pro-nation__header section-tag">
                Optmus Pro Nation is a community for wealth creation
            </h3>

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

            <section class="testmonial bg-light">
            <h2 id="team" class="testmonial__header section-tag mb-2">Meet The Team</h2>
                <div class="small text-secondary text-center mb-4" style="font-style: italic;">What our students and customers say about us</div>
                <div class="d-flex flex-row justify-content-around">
                    <div class="testimonial-item">
                        <img src="./assets/logo.jpg" />
                        <div class="body">
                            <div class="tag">John Alfred</div>
                            <div class="caption">Lorem ipsum dolor sit amet...</div>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <img src="./assets/logo.jpg" />
                        <div class="body">
                            <div class="tag">John Alfred</div>
                            <div class="caption">Lorem ipsum dolor sit amet...</div>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <img src="./assets/logo.jpg" />
                        <div class="body">
                            <div class="tag">John Alfred</div>
                            <div class="caption">Lorem ipsum dolor sit amet...</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" class="testmonial">
            <h2 class="testmonial__header section-tag mb-2">Testmonials</h2>
                <div class="small text-secondary text-center mb-4" style="font-style: italic;">What our students and customers say about us</div>
                <div class="d-flex flex-row justify-content-around">
                    <div class="testimonial-item">
                        <img src="./assets/logo.jpg" />
                        <div class="body">
                            <div class="tag">John Alfred</div>
                            <div class="caption">Lorem ipsum dolor sit amet...</div>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <img src="./assets/logo.jpg" />
                        <div class="body">
                            <div class="tag">John Alfred</div>
                            <div class="caption">Lorem ipsum dolor sit amet...</div>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <img src="./assets/logo.jpg" />
                        <div class="body">
                            <div class="tag">John Alfred</div>
                            <div class="caption">Lorem ipsum dolor sit amet...</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-us-footer">
            <h3 class="footer-contact-us header section-tag" id="contact-us">Contact Us</h3>

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
            <div action="" class="subscribe">
                <h3 class="subscription-header">Subscribe To Optimus Pro Desk For Latest Info</h3>

                <div class="input-fields">
                <input type="text" name="name" placeholder="Enter your name" autocomplete="off">
                <input type="email" name="email" placeholder="Enter your email" autocomplete="off">
                </div>

                <button type="button" class="btn btn-primary">Submit <span class="arrow-right"> &rarr;</span></button>
            </div>
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Homepage extends Vue {

    mounted() {
        this.script();
    }

    login() {
        this.$router.push('/auth');
    }

    logout() {
        localStorage.removeItem('user_id');
    }
    
    script() {
        const menu = document.querySelector('[alt="menu"]')!;
        const cancelBtn = document.querySelector('.cancel-icon')!;
        const sideNav = document.querySelector(".nav-links")!;
        const navLinks = document.querySelectorAll(".nav-link")!;
        const body = document.querySelector("body")!;
        const avatar = document.querySelector("#account-container-desktop")!;
        let slideIndex = 0;

        // control mobile view navlink slide-in and slide-out animations
        menu.addEventListener("click", () => {
            sideNav!.classList!.toggle("open-nav-links");
        });

        cancelBtn.addEventListener("click", () => {
            setTimeout(() => {
                sideNav!.classList!.toggle("open-nav-links");
            }, 10);
        });

        const mouseOverEvt = (e: any) => {
        const liFlag = Boolean(e.target.closest(".nav-link").lastElementChild?.className);
        if (liFlag &&  window.innerWidth < 912) {
            e.target.closest(".nav-link").lastElementChild['style'].display = "block";
        }
        };

        navLinks.forEach((li) => {
        li.addEventListener("mouseover", mouseOverEvt);
        li.addEventListener("click", mouseOverEvt);

        li.addEventListener("mouseout",(e: any) => {
            const liFlag = Boolean(e.target!.closest(".nav-link")!.lastElementChild?.className);
            if (liFlag && window.innerWidth < 912 ) {
            e.target.closest(".nav-link").lastElementChild['style'].display = "none";
            }
        });
        });

        // control desktop modal pop-in and pop-out

        avatar.addEventListener("mouseover", (e: any) => {
        if ( window.innerWidth > 912 ) {
            e.target.closest("#account-container-desktop")!.lastElementChild['style'].display = "block";
        }
        });

        avatar.addEventListener("mouseout", (e: any) => {
        if ( window.innerWidth > 912 ) {
            e.target.closest("#account-container-desktop")!.lastElementChild['style'].display = "none";
        }
        });

        navLinks.forEach(li => {
        li.addEventListener("mouseover",(e: any) => {
            if ( window.innerWidth > 912 ) {
            if (e.target.closest(".nav-link")! && e.target.closest(".nav-link")!.lastElementChild.tagName === "DIV") {
                e.target.closest(".nav-link")!.lastElementChild['style'].display = "block";
            }
            }
        });

        li.addEventListener("mouseout",(e: any) => {
            if ( window.innerWidth > 912 && e.target.closest(".nav-link")!.lastElementChild.tagName === "DIV") {
            e.target.closest(".nav-link")!.lastElementChild['style'].display = "none";
            }
        });
        });


        showSlides();

        function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides")!;

        for (let i = 0; i < slides.length; i++) {
            slides[i]['style'].display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {slideIndex = 1};

        slides[slideIndex-1]['style'].display = "block";

        

        setTimeout(showSlides, 4000); // Change image every 2 seconds

        };
    }
}
</script>