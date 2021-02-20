<template>
  <div>
    <!-- BEGIN LOADER -->
    <!-- <div id="load_screen">
      <div class="loader">
        <div class="loader-content">
          <div class="spinner-grow align-self-center"></div>
        </div>
      </div>
    </div> -->
    <!--  END LOADER -->

    <!--  BEGIN NAVBAR  -->
    <div class="header-container fixed-top">
      <header class="header navbar navbar-expand-sm expand-header">
        <a
          href="javascript:void(0);"
          class="sidebarCollapse"
          data-placement="bottom"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line></svg
        ></a>

        <ul class="navbar-item flex-row ml-auto">
          <li class="nav-item align-self-center search-animated">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search toggle-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <form
              class="form-inline search-full form-inline search"
              role="search"
            >
              <div class="search-bar">
                <input
                  type="text"
                  class="form-control search-form-control ml-lg-auto"
                  placeholder="Search..."
                />
              </div>
            </form>
          </li>

          <li class="nav-item dropdown language-dropdown">
            <a
              href="javascript:void(0);"
              class="nav-link dropdown-toggle"
              id="language-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="assets/img/ca.png" class="flag-width" alt="flag" />
            </a>
            <div
              class="dropdown-menu position-absolute"
              aria-labelledby="language-dropdown"
            >
              <a class="dropdown-item d-flex" href="javascript:void(0);"
                ><img src="assets/img/de.png" class="flag-width" alt="flag" />
                <span class="align-self-center">&nbsp;German</span></a
              >
              <a class="dropdown-item d-flex" href="javascript:void(0);"
                ><img src="assets/img/jp.png" class="flag-width" alt="flag" />
                <span class="align-self-center">&nbsp;Japanese</span></a
              >
              <a class="dropdown-item d-flex" href="javascript:void(0);"
                ><img src="assets/img/fr.png" class="flag-width" alt="flag" />
                <span class="align-self-center">&nbsp;French</span></a
              >
              <a class="dropdown-item d-flex" href="javascript:void(0);"
                ><img src="assets/img/ca.png" class="flag-width" alt="flag" />
                <span class="align-self-center">&nbsp;English</span></a
              >
            </div>
          </li>

          <li class="nav-item dropdown message-dropdown">
            <a
              href="javascript:void(0);"
              class="nav-link dropdown-toggle"
              id="messageDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline></svg
              ><span class="badge badge-primary">3</span>
            </a>
            <div
              class="dropdown-menu position-absolute e-animated e-fadeInUp"
              aria-labelledby="messageDropdown"
            >
              <div class="">
                <a class="dropdown-item">
                  <div class="">
                    <div class="media notification-new">
                      <div class="notification-icon">
                        <div class="icon-svg mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-message-square"
                          >
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="media-body">
                        <p class="meta-title mr-3">5 messages for group</p>
                        <p class="message-text">Kelly, Amy, Shaun</p>
                        <p class="meta-time align-self-center mb-0">
                          Yesterday
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item">
                  <div class="">
                    <div class="media notification-new">
                      <div class="usr-profile-img mr-3">
                        <div class="user-profile">
                          <div class="">KY</div>
                        </div>
                      </div>
                      <div class="media-body">
                        <p class="meta-user-name mr-3">Kara Young</p>
                        <p class="message-text">
                          Some quick example text to build the notification ..
                        </p>
                        <p class="meta-time align-self-center mb-0">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item">
                  <div class="">
                    <div class="media notification-new">
                      <div class="notification-icon">
                        <div class="icon-svg mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-mail"
                          >
                            <path
                              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            ></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div class="media-body">
                        <p class="meta-title mr-3">1 new email</p>
                        <p class="message-text">Anderson.Daisy@mail.com</p>
                        <p class="meta-time align-self-center mb-0">
                          Yesterday
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown notification-dropdown">
            <a
              href="javascript:void(0);"
              class="nav-link dropdown-toggle"
              id="notificationDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg
              ><span class="badge badge-success"></span>
            </a>
            <div
              class="dropdown-menu position-absolute e-animated e-fadeInUp"
              aria-labelledby="notificationDropdown"
            >
              <div class="notification-scroll">
                <div class="dropdown-item">
                  <div class="media">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-message-square"
                    >
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      ></path>
                    </svg>
                    <div class="media-body">
                      <div class="notification-para">
                        <span class="user-name">Shaun Park</span> commented on
                        your post.
                      </div>
                      <div class="notification-meta-time">5 mins ago</div>
                    </div>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="media">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-thumbs-up"
                    >
                      <path
                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                      ></path>
                    </svg>
                    <div class="media-body">
                      <div class="notification-para">
                        <span class="user-name">Kelly Young</span> likes your
                        photo
                      </div>
                      <div class="notification-meta-time">8 mins ago</div>
                    </div>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="media">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-send"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <div class="media-body">
                      <div class="notification-para">
                        Invitation successfully sent to
                        <span class="user-name">Amy Diaz</span>
                      </div>
                      <div class="notification-meta-time">10 mins ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li
            class="nav-item dropdown user-profile-dropdown order-lg-0 order-1"
          >
            <a
              href="javascript:void(0);"
              class="nav-link dropdown-toggle user"
              id="userProfileDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user-check"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
            </a>
            <div
              class="dropdown-menu position-absolute e-animated e-fadeInUp"
              aria-labelledby="userProfileDropdown"
            >
              <div class="user-profile-section">
                <div class="media mx-auto">
                  <img
                    src="assets/img/90x90.jpg"
                    class="img-fluid mr-2"
                    alt="avatar"
                  />
                  <div class="media-body">
                    <h5 class="set_name">{{ `${user.first_name} ${user.last_name}` }}</h5>
                    <p>WELCOME</p>
                  </div>
                </div>
              </div>
              <div class="dropdown-item">
                <a href="user_profile.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>My Profile</span>
                </a>
              </div>
              <div class="dropdown-item">
                <a href="apps_mailbox.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-inbox"
                  >
                    <polyline
                      points="22 12 16 12 14 15 10 15 8 12 2 12"
                    ></polyline>
                    <path
                      d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path>
                  </svg>
                  <span>My Payments</span>
                </a>
              </div>
              <div class="dropdown-item">
                <a href="auth_lockscreen.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-lock"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Security</span>
                </a>
              </div>
              <div class="dropdown-item" @click.prevent="logout()">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <span>Log Out</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
    <!--  END NAVBAR  -->

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container sidebar-closed sbar-open" id="container">
      <div class="overlay"></div>
      <div class="cs-overlay"></div>
      <div class="search-overlay"></div>

      <!--  BEGIN SIDEBAR  -->
      <div class="sidebar-wrapper sidebar-theme">
        <nav id="sidebar">
          <ul class="navbar-nav theme-brand flex-row text-center">
            <li class="nav-item theme-logo">
              <a href="index.html">
                <img
                  :src="user.profile_photo"
                  class="navbar-logo"
                  alt="logo"
                />
              </a>
            </li>
            <li class="nav-item theme-text">
              <a href="index.html" class="nav-link set_name">{{ `${user.first_name} ${user.last_name}` }}</a>
            </li>
          </ul>

          <ul class="list-unstyled menu-categories" id="accordionExample">
            <li class="menu active">
              <!-- CLOCK -->
              <a id="clock" href="#" class=""></a>
              <!-- CLOCK END -->
              <a
                href="#dashboard"
                data-toggle="collapse"
                aria-expanded="true"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-home"
                  >
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <span>Dashboard</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </a>
              <ul
                class="collapse submenu recent-submenu mini-recent-submenu list-unstyled show"
                id="dashboard"
                data-parent="#accordionExample"
              >
                <li class="active">
                  <router-link to="/student/dashboard"> Student </router-link>
                </li>
                <li>
                  <a href="index2.html"> Investor </a>
                </li>
                <li>
                  <a href="index2.html"> Signals </a>
                </li>
              </ul>
            </li>

            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>My Profile</span>
              </div>
            </li>

            <li class="menu">
              <router-link
                to="/student/dashboard/complete-registration"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <span>Complete Registration</span>
                </div>
              </router-link>
            </li>

            <li class="menu">
              <a
                href="apps_mailbox.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Referrals</span>
                </div>
              </a>
            </li>

            <li class="menu">
              <router-link
                to="/student/dashboard/complete-registration"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-edit"
                  >
                    <path
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    ></path>
                    <path
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    ></path>
                  </svg>
                  <span>Change Profile Picture</span>
                </div>
              </router-link>
            </li>
            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>My Classes</span>
              </div>
            </li>
            <li class="menu">
              <router-link
                to="/student/dashboard/all_courses"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <router-link to="/student/dashboard/all_courses">Academy</router-link>
                </div>
              </router-link>
            </li>
            <li class="menu">
              <a @click.prevent="this.$router.push('/student/dashboard/my_courses')" 
                href="#"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-message-square"
                  >
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                  <router-link to="/student/dashboard/my_courses">My Courses</router-link>
                </div>
              </a>
            </li>


            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>My Reports</span>
              </div>
            </li>

            <li class="menu">
              <a
                href="table_basic.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Create Report</span>
                </div>
              </a>
            </li>

            <li class="menu">
              <a
                href="table_basic.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>All Reports</span>
                </div>
              </a>
            </li>
            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Notes</span>
              </div>
            </li>

            <li class="menu">
              <router-link
                to="/student/dashboard/notes/new"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>My Notes</span>
                </div>
              </router-link>
            </li>
            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span> Notifications </span>
              </div>
            </li>
            <li class="menu">
              <a
                href="dragndrop_dragula.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-move"
                  >
                    <polyline points="5 9 2 12 5 15"></polyline>
                    <polyline points="9 5 12 2 15 5"></polyline>
                    <polyline points="15 19 12 22 9 19"></polyline>
                    <polyline points="19 9 22 12 19 15"></polyline>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                  </svg>
                  <router-link to="/student/dashboard/notifications">My Notifications</router-link>
                </div>
              </a>
            </li>

            <li class="menu menu-heading">
              <div class="heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle></svg
                ><span>Security</span>
              </div>
            </li>

            <li class="menu">
              <router-link
                to="/student/dashboard/login-history"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>My Login History</span>
                </div>
              </router-link>
            </li>

            <li class="menu">
              <router-link
                to="/student/settings/password"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Change Password</span>
                </div>
              </router-link>
            </li>

            <li class="menu">
              <a
                href="table_basic.html"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span>Security Messages</span>
                </div>
              </a>
            </li>
          </ul>
          <!-- end of sidebar -->
        </nav>
      </div>
      <!--  END SIDEBAR  -->

      <!--  BEGIN CONTENT AREA  -->
      <router-view />
      <!--  END CONTENT AREA  -->
    </div>
    <!-- END MAIN CONTAINER -->
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InvestorOverview extends Vue {}
</script>