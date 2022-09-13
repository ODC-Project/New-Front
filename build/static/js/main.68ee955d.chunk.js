(this["webpackJsonpe-learning"] = this["webpackJsonpe-learning"] || []).push([
  [0],
  {
    114: function (e, t, s) {},
    115: function (e, t, s) {},
    116: function (e, t, s) {},
    117: function (e, t, s) {},
    118: function (e, t, s) {},
    119: function (e, t, s) {},
    120: function (e, t, s) {},
    121: function (e, t, s) {},
    122: function (e, t, s) {},
    123: function (e, t, s) {},
    124: function (e, t, s) {},
    125: function (e, t, s) {},
    126: function (e, t, s) {},
    127: function (e, t, s) {},
    132: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(2),
        n = s.n(c),
        i = s(16),
        a = s.n(i),
        r = s(6),
        l = s(11),
        o = s(5),
        j = s(3),
        d = (s(48), s(1)),
        b = [
          { display: "Home", url: "/" },
          { display: "About US", url: "/about" },
          { display: "Courses", url: "/courses" },
          { display: "Blog", url: "#" },
        ],
        h = [
          { display: "Privacy Policy", url: "#" },
          { display: "Membership", url: "#" },
          { display: "Purchases Guide", url: "#" },
          { display: "Terms of Service", url: "#" },
        ],
        m = function () {
          return Object(d.jsx)("footer", {
            className: "footer",
            children: Object(d.jsx)(j.d, {
              children: Object(d.jsxs)(j.n, {
                children: [
                  Object(d.jsxs)(j.c, {
                    lg: "3",
                    md: "6",
                    className: "mb-4",
                    children: [
                      Object(d.jsxs)("h2", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          Object(d.jsx)("i", {
                            className: "ri-book-open-line",
                          }),
                          " E-learning",
                        ],
                      }),
                      Object(d.jsxs)("div", {
                        className: "follows",
                        children: [
                          Object(d.jsx)("p", {
                            className: "mb-0",
                            children: "Follow us on social media",
                          }),
                          Object(d.jsxs)("span", {
                            children: [
                              " ",
                              Object(d.jsx)("a", {
                                href: "facebook.com",
                                children: Object(d.jsx)("i", {
                                  className: "ri-facebook-line",
                                }),
                              }),
                            ],
                          }),
                          Object(d.jsxs)("span", {
                            children: [
                              " ",
                              Object(d.jsx)("a", {
                                href: "facebook.com",
                                children: Object(d.jsx)("i", {
                                  className: "ri-instagram-line",
                                }),
                              }),
                            ],
                          }),
                          Object(d.jsxs)("span", {
                            children: [
                              " ",
                              Object(d.jsx)("a", {
                                href: "facebook.com",
                                children: Object(d.jsx)("i", {
                                  className: "ri-linkedin-line",
                                }),
                              }),
                            ],
                          }),
                          Object(d.jsxs)("span", {
                            children: [
                              " ",
                              Object(d.jsx)("a", {
                                href: "facebook.com",
                                children: Object(d.jsx)("i", {
                                  className: "ri-twitter-line",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsxs)(j.c, {
                    lg: "3",
                    md: "6",
                    className: "mb-4",
                    children: [
                      Object(d.jsx)("h6", {
                        className: "fw-bold",
                        children: "Explore",
                      }),
                      Object(d.jsx)(j.i, {
                        className: "link__list",
                        children: b.map(function (e, t) {
                          return Object(d.jsxs)(
                            j.j,
                            {
                              className: "border-0 ps-0 link__item",
                              children: [
                                " ",
                                Object(d.jsx)("a", {
                                  href: e.url,
                                  children: e.display,
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  Object(d.jsxs)(j.c, {
                    lg: "3",
                    md: "6",
                    className: "mb-4",
                    children: [
                      Object(d.jsx)("h6", {
                        className: "fw-bold",
                        children: "Information",
                      }),
                      Object(d.jsx)(j.i, {
                        className: "link__list",
                        children: h.map(function (e, t) {
                          return Object(d.jsxs)(
                            j.j,
                            {
                              className: "border-0 ps-0 link__item",
                              children: [
                                " ",
                                Object(d.jsx)("a", {
                                  href: e.url,
                                  children: e.display,
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  Object(d.jsxs)(j.c, {
                    lg: "3",
                    md: "6",
                    children: [
                      Object(d.jsx)("h6", {
                        className: "fw-bold",
                        children: "Get in Touch",
                      }),
                      Object(d.jsx)("p", {
                        children: "Address: Tunis,Tunisia",
                      }),
                      Object(d.jsx)("p", {
                        children: " Phone: +216 2343222234 ",
                      }),
                      Object(d.jsx)("p", {
                        children: "Email: e-learning@gmail.com",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        u = s(7),
        x = s.n(u),
        O = s(12),
        p = s(13),
        g = s.n(p),
        f =
          (s(76),
          [
            { display: "Home", url: "/", protected: !1 },
            { display: "About", url: "/about", protected: !1 },
            { display: "Categories", url: "/categories", protected: !0 },
            { display: "Courses", url: "/courses", protected: !0 },
            { display: "Contact", url: "/contact", protected: !1 },
          ]),
        v = function () {
          var e = Object(c.useRef)(),
            t = function () {
              return e.current.classList.toggle("active__menu");
            },
            s = Object(c.useState)(!1),
            n = Object(r.a)(s, 2),
            i = n[0],
            a = n[1],
            o = Object(c.useState)(!1),
            b = Object(r.a)(o, 2),
            h = b[0],
            m = b[1],
            u = Object(c.useState)(!1),
            p = Object(r.a)(u, 2),
            v = p[0],
            N = p[1],
            _ = Object(c.useState)(!1),
            w = Object(r.a)(_, 2),
            y = w[0],
            k = w[1],
            S = function () {
              return a(!i);
            },
            C = function () {
              a(!i), N(!1);
            },
            E = function () {
              return m(!h);
            },
            I = (function () {
              var e = Object(O.a)(
                x.a.mark(function e(t) {
                  var s, c;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            (s = t.target.email.value),
                            (c = t.target.password.value),
                            g.a
                              .post(
                                "http://159.89.12.104:5000/api/users/login",
                                { email: s, password: c }
                              )
                              .then(function (e) {
                                N(!1),
                                  localStorage.setItem("token", e.data.token),
                                  localStorage.setItem(
                                    "loggedUser",
                                    JSON.stringify(e.data.user)
                                  ),
                                  S();
                              })
                              .catch(function (e) {
                                return N(!0);
                              });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            T = (function () {
              var e = Object(O.a)(
                x.a.mark(function e(t) {
                  var s, c, n, i;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(),
                            (s = t.target.email.value),
                            (c = t.target.password.value),
                            (n = t.target.name.value),
                            (i = t.target.lastName.value),
                            g.a
                              .post(
                                "http://159.89.12.104:5000/api/users/register",
                                { name: n, lastName: i, email: s, password: c }
                              )
                              .then(function (e) {
                                k(!1),
                                  localStorage.setItem("token", e.data.token),
                                  localStorage.setItem(
                                    "loggedUser",
                                    JSON.stringify(e.data.user)
                                  ),
                                  E();
                              })
                              .catch(function (e) {
                                k(!0);
                              });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(d.jsx)("header", {
            className: "header",
            children: Object(d.jsx)(j.d, {
              children: Object(d.jsxs)("div", {
                className:
                  "navigation d-flex align-items-center justify-content-between",
                children: [
                  Object(d.jsx)("div", {
                    className: "logo",
                    children: Object(d.jsxs)("h2", {
                      className: " d-flex align-items-center gap-1",
                      children: [
                        Object(d.jsx)("i", { className: "ri-book-open-line" }),
                        " E-learning.",
                      ],
                    }),
                  }),
                  Object(d.jsxs)("div", {
                    className: "nav d-flex align-items-center gap-5",
                    children: [
                      Object(d.jsx)("div", {
                        className: "nav__menu",
                        ref: e,
                        onClick: t,
                        children: Object(d.jsxs)("ul", {
                          className: "nav__list",
                          children: [
                            f.map(function (e, t) {
                              return e.protected
                                ? localStorage.getItem("token") &&
                                  localStorage.getItem("loggedUser")
                                  ? Object(d.jsx)(
                                      "li",
                                      {
                                        className: "nav__item",
                                        children: Object(d.jsx)(l.b, {
                                          to: e.url,
                                          children: e.display,
                                        }),
                                      },
                                      t
                                    )
                                  : void 0
                                : Object(d.jsx)(
                                    "li",
                                    {
                                      className: "nav__item",
                                      children: Object(d.jsx)(l.b, {
                                        to: e.url,
                                        children: e.display,
                                      }),
                                    },
                                    t
                                  );
                            }),
                            localStorage.getItem("token") ||
                            localStorage.getItem("loggedUser")
                              ? null
                              : Object(d.jsx)("li", {
                                  className: "nav__item",
                                  onClick: E,
                                  style: { marginLeft: 20 },
                                  children: Object(d.jsx)(l.b, {
                                    to: "#",
                                    children: "Register",
                                  }),
                                }),
                            localStorage.getItem("token") &&
                            localStorage.getItem("loggedUser")
                              ? Object(d.jsx)("li", {
                                  className: "nav__item",
                                  onClick: function () {
                                    localStorage.clear(),
                                      window.location.reload();
                                  },
                                  children: Object(d.jsx)(l.b, {
                                    to: "#",
                                    children: "logout",
                                  }),
                                })
                              : Object(d.jsx)("li", {
                                  className: "nav__item",
                                  onClick: S,
                                  children: Object(d.jsx)(l.b, {
                                    to: "#",
                                    className: "danger",
                                    children: "Login",
                                  }),
                                }),
                          ],
                        }),
                      }),
                      Object(d.jsxs)(j.k, {
                        isOpen: i,
                        toggle: S,
                        children: [
                          Object(d.jsx)(j.m, {
                            toggle: C,
                            children: "Login to E-leaning",
                          }),
                          Object(d.jsx)(j.l, {
                            children: Object(d.jsxs)(j.e, {
                              onSubmit: I,
                              children: [
                                Object(d.jsxs)(j.f, {
                                  children: [
                                    Object(d.jsx)(j.h, {
                                      for: "exampleEmail",
                                      children: "Email",
                                    }),
                                    Object(d.jsx)(j.g, {
                                      id: "exampleEmail",
                                      name: "email",
                                      placeholder: "with a placeholder",
                                      type: "email",
                                    }),
                                  ],
                                }),
                                Object(d.jsxs)(j.f, {
                                  children: [
                                    Object(d.jsx)(j.h, {
                                      for: "examplePassword",
                                      children: "Password",
                                    }),
                                    Object(d.jsx)(j.g, {
                                      id: "examplePassword",
                                      name: "password",
                                      placeholder: "password placeholder",
                                      type: "password",
                                    }),
                                  ],
                                }),
                                v &&
                                  Object(d.jsx)(j.a, {
                                    color: "danger",
                                    children: "Please check your creedatial",
                                  }),
                                Object(d.jsxs)("div", {
                                  className: "d-flex justify-content-end",
                                  children: [
                                    Object(d.jsx)(j.b, {
                                      style: {
                                        backgroundColor: "#1795bf",
                                        marginRight: "10px",
                                      },
                                      onClick: C,
                                      children: "Cancel",
                                    }),
                                    Object(d.jsx)(j.b, {
                                      style: { backgroundColor: "#1795bf" },
                                      type: "submit",
                                      children: "Login",
                                    }),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(d.jsxs)(j.k, {
                        isOpen: h,
                        toggle: E,
                        children: [
                          Object(d.jsx)(j.m, {
                            toggle: E,
                            children: "Create new Account",
                          }),
                          Object(d.jsx)(j.l, {
                            children: Object(d.jsxs)(j.e, {
                              onSubmit: T,
                              children: [
                                Object(d.jsxs)(j.f, {
                                  children: [
                                    Object(d.jsx)(j.h, {
                                      for: "exampleEmail",
                                      children: "Name",
                                    }),
                                    Object(d.jsx)(j.g, {
                                      id: "name",
                                      name: "name",
                                      placeholder: "Enter your name",
                                      type: "text",
                                    }),
                                  ],
                                }),
                                Object(d.jsxs)(j.f, {
                                  children: [
                                    Object(d.jsx)(j.h, {
                                      for: "exampleEmail",
                                      children: "Last Name",
                                    }),
                                    Object(d.jsx)(j.g, {
                                      id: "lastName",
                                      name: "lastName",
                                      placeholder: "Enter your lastName",
                                      type: "text",
                                    }),
                                  ],
                                }),
                                Object(d.jsxs)(j.f, {
                                  children: [
                                    Object(d.jsx)(j.h, {
                                      for: "exampleEmail",
                                      children: "Email",
                                    }),
                                    Object(d.jsx)(j.g, {
                                      id: "email",
                                      name: "email",
                                      placeholder: "with a placeholder",
                                      type: "email",
                                    }),
                                  ],
                                }),
                                Object(d.jsxs)(j.f, {
                                  children: [
                                    Object(d.jsx)(j.h, {
                                      for: "examplePassword",
                                      children: "Password",
                                    }),
                                    Object(d.jsx)(j.g, {
                                      id: "password",
                                      name: "password",
                                      placeholder: "password placeholder",
                                      type: "password",
                                    }),
                                  ],
                                }),
                                y &&
                                  Object(d.jsx)(j.a, {
                                    color: "danger",
                                    children: "Please try again",
                                  }),
                                Object(d.jsxs)("div", {
                                  className: "d-flex justify-content-end",
                                  children: [
                                    Object(d.jsx)(j.b, {
                                      style: {
                                        backgroundColor: "#1795bf",
                                        marginRight: "10px",
                                      },
                                      onClick: C,
                                      children: "Cancel",
                                    }),
                                    Object(d.jsx)(j.b, {
                                      style: { backgroundColor: "#1795bf" },
                                      type: "submit",
                                      children: "Register",
                                    }),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)("div", {
                    className: "mobile__menu",
                    children: Object(d.jsx)("span", {
                      children: Object(d.jsx)("i", {
                        className: "ri-menu-line",
                        onClick: t,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        N = s(14),
        _ = s.n(N),
        w =
          (s(78),
          function () {
            return Object(d.jsx)(d.Fragment, {
              children: Object(d.jsxs)("section", {
                children: [
                  Object(d.jsxs)("div", {
                    className: "banner-img-container",
                    children: [
                      Object(d.jsx)("img", {
                        alt: "",
                        src: "https://s.udemycdn.com/teaching/billboard-desktop-2x-v4.jpg",
                        style: { width: "100%" },
                      }),
                      Object(d.jsxs)("div", {
                        className: "banner-img-title",
                        children: [
                          Object(d.jsx)("h2", {
                            className: "banner-text",
                            children: "We share knowledge with the world",
                          }),
                          Object(d.jsx)("p", {
                            children:
                              "Take online coding courses to build your skills and advance your career as a programmer.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)("br", {}),
                  Object(d.jsx)("div", {
                    className: "has",
                    children: Object(d.jsxs)("h2", {
                      children: [
                        "Helping ",
                        Object(d.jsx)("strong", {
                          children: "great teams grow",
                        }),
                      ],
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "has-txt",
                    children: Object(d.jsxs)("p", {
                      children: [
                        "When people grow, companies do too. And yet,",
                        Object(d.jsx)("strong", {
                          children:
                            "so often the training we carefully create for our teams, is delivered on platforms not built for us.",
                        }),
                        "They\u2019re confusing to use, stressful to manage, and just feel\u2026off. To add insult to injury, they often come at a price we can\u2019t afford.",
                      ],
                    }),
                  }),
                  Object(d.jsx)("br", {}),
                  Object(d.jsx)("br", {}),
                  Object(d.jsx)(j.d, {
                    children: Object(d.jsxs)(j.n, {
                      children: [
                        Object(d.jsx)(j.c, {
                          lg: "6",
                          md: "6",
                          children: Object(d.jsx)("div", {
                            className: "about__img",
                            children: Object(d.jsx)("img", {
                              src: "https://www.capsea-yachting.com/wp-content/uploads/2020/07/e-learning-image.jpg",
                              alt: "",
                              className: "w-100",
                            }),
                          }),
                        }),
                        Object(d.jsx)(j.c, {
                          lg: "6",
                          md: "6",
                          children: Object(d.jsxs)("div", {
                            className: "about__content",
                            children: [
                              Object(d.jsx)("h1", { children: "About Us" }),
                              Object(d.jsx)("p", {
                                children:
                                  "The E-Learning method now replaces the traditional, highly theoretical and non-motivating educational system.",
                              }),
                              Object(d.jsxs)("p", {
                                className: "has-s-font-size",
                                children: [
                                  Object(d.jsx)("strong", {
                                    children: "Was build to change.",
                                  }),
                                  "We\u2019re on a mission to democratize training. To deliver a premium learning experience that\u2019s accessible, affordable, and actually enjoyable.",
                                ],
                              }),
                              Object(d.jsxs)("div", {
                                className: "about__counter",
                                children: [
                                  Object(d.jsxs)("div", {
                                    className:
                                      " d-flex gap-5 align-items-center",
                                    children: [
                                      Object(d.jsxs)("div", {
                                        className: "single__counter",
                                        children: [
                                          Object(d.jsx)("span", {
                                            className: "counter",
                                            children: Object(d.jsx)(_.a, {
                                              start: 0,
                                              end: 25,
                                              duration: 2,
                                              suffix: "K",
                                            }),
                                          }),
                                          Object(d.jsx)("p", {
                                            className: "counter__title",
                                            children: "Completed Projects",
                                          }),
                                        ],
                                      }),
                                      Object(d.jsxs)("div", {
                                        className: "single__counter",
                                        children: [
                                          Object(d.jsx)("span", {
                                            className: "counter",
                                            children: Object(d.jsx)(_.a, {
                                              start: 0,
                                              end: 12,
                                              duration: 2,
                                              suffix: "M",
                                            }),
                                          }),
                                          Object(d.jsx)("p", {
                                            className: "counter__title",
                                            children: "Patient Around World",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(d.jsxs)("div", {
                                    className:
                                      " d-flex gap-5 align-items-center",
                                    children: [
                                      Object(d.jsxs)("div", {
                                        className: "single__counter",
                                        children: [
                                          Object(d.jsx)("span", {
                                            className: "counter",
                                            children: Object(d.jsx)(_.a, {
                                              start: 0,
                                              end: 95,
                                              duration: 2,
                                              suffix: "M",
                                            }),
                                          }),
                                          Object(d.jsx)("p", {
                                            className: "counter__title",
                                            children: "Ideas Raised Funds",
                                          }),
                                        ],
                                      }),
                                      Object(d.jsxs)("div", {
                                        className: "single__counter",
                                        children: [
                                          Object(d.jsx)("span", {
                                            className: "counter",
                                            children: Object(d.jsx)(_.a, {
                                              start: 0,
                                              end: 5,
                                              duration: 2,
                                              suffix: "K",
                                            }),
                                          }),
                                          Object(d.jsx)("p", {
                                            className: "counter__title",
                                            children: "Categories Served",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "text-bottom",
                    children: Object(d.jsx)("p", {
                      children:
                        "We help organizations of all types and sizes prepare for the path ahead \u2014 wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.",
                    }),
                  }),
                ],
              }),
            });
          }),
        y = s(17),
        k = (s(79), s(19)),
        S = s.n(k),
        C = function () {
          return Object(d.jsx)("section", {
            children: Object(d.jsx)(j.d, {
              children: Object(d.jsx)(j.n, {
                children: Object(d.jsx)(j.c, {
                  lg: "10",
                  md: "12",
                  className: "m-auto",
                  children: Object(d.jsxs)("div", {
                    className:
                      "testimonial__wrapper d-flex justify-content-between align-items-center ",
                    children: [
                      Object(d.jsx)("div", {
                        className: "testimonial__img w-60",
                        children: Object(d.jsx)("img", {
                          src: "https://wallpaperaccess.com/full/7967375.jpg",
                          alt: "",
                          className: "w-100",
                        }),
                      }),
                      Object(d.jsxs)("div", {
                        className: "testimonial__content w-50",
                        children: [
                          Object(d.jsx)("h2", {
                            className: "mb-4",
                            children: "Our Students Voice",
                          }),
                          Object(d.jsxs)(
                            S.a,
                            Object(y.a)(
                              Object(y.a)(
                                {},
                                {
                                  infinite: !0,
                                  dots: !0,
                                  speed: 500,
                                  slidesToShow: 1,
                                  autoplay: !0,
                                  autoplaySpeed: 3e3,
                                  slidesToScroll: 1,
                                }
                              ),
                              {},
                              {
                                children: [
                                  Object(d.jsx)("div", {
                                    children: Object(d.jsxs)("div", {
                                      className: "single__testimonial",
                                      children: [
                                        Object(d.jsx)("h6", {
                                          className: "mb-3 fw-bold",
                                          children:
                                            "Excellent course of materials",
                                        }),
                                        Object(d.jsx)("p", {
                                          children:
                                            "An interactive and in-browser embedded coding environment, that's just perfect. I believe this to be a very effective medium for learning a skill such as coding.",
                                        }),
                                        Object(d.jsxs)("div", {
                                          className: "student__info mt-4",
                                          children: [
                                            Object(d.jsx)("h6", {
                                              className: "fw-bold",
                                              children: "Rainer Grimm",
                                            }),
                                            Object(d.jsx)("p", {
                                              children:
                                                "Software architect and Instructor",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(d.jsx)("div", {
                                    children: Object(d.jsxs)("div", {
                                      className: "single__testimonial",
                                      children: [
                                        Object(d.jsx)("h6", {
                                          className: "mb-3 fw-bold",
                                          children: "Great instructors",
                                        }),
                                        Object(d.jsx)("p", {
                                          children:
                                            "Their platform has allowed me to help a broader audience of learners. I look forward to working with them again in the future!",
                                        }),
                                        Object(d.jsxs)("div", {
                                          className: "student__info mt-4",
                                          children: [
                                            Object(d.jsx)("h6", {
                                              className: "fw-bold",
                                              children: "Saad Aleem",
                                            }),
                                            Object(d.jsx)("p", {
                                              children:
                                                "Software Engineer, Google",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(d.jsx)("div", {
                                    children: Object(d.jsxs)("div", {
                                      className: "single__testimonial",
                                      children: [
                                        Object(d.jsx)("h6", {
                                          className: "mb-3 fw-bold",
                                          children:
                                            "Excellent course of materials",
                                        }),
                                        Object(d.jsx)("p", {
                                          children:
                                            "A rich yet very easy to use platform, a wonderful team and a true opportunity to make a difference by sharing my skills - couldn't have asked for better!",
                                        }),
                                        Object(d.jsxs)("div", {
                                          className: "student__info mt-4",
                                          children: [
                                            Object(d.jsx)("h6", {
                                              className: "fw-bold",
                                              children: " Kenan Eyvazov",
                                            }),
                                            Object(d.jsx)("p", {
                                              children: "DevOps Engineer",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        E = s.p + "static/media/why-choose-us.5ec7e3b2.png",
        I = (s(95), s(27)),
        T = s.n(I),
        A = function () {
          return Object(d.jsx)("section", {
            className: "chooseUs-Section",
            children: Object(d.jsx)(j.d, {
              children: Object(d.jsxs)(j.n, {
                children: [
                  Object(d.jsx)(j.c, {
                    lg: "6",
                    md: "6",
                    children: Object(d.jsxs)("div", {
                      className: "choose__content",
                      children: [
                        Object(d.jsx)("h2", {
                          children:
                            "An interactive and gamified learning platform",
                        }),
                        Object(d.jsxs)("p", {
                          children: [
                            "Our educational platform is the result of the collaboration of our educational team, our developers, our UX designers, our content creators and our partners. This builds a unique learning experience combining personalized follow-up with learning and autonomy. Its various functionalities allow it to accommodate the entire educational path. ",
                            Object(d.jsx)("br", {}),
                            " We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities \u2014 all that\u2019s required is the curiosity and drive to learn.",
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(d.jsx)(j.c, {
                    lg: "6",
                    md: "6",
                    children: Object(d.jsx)("div", {
                      className: "choose__img",
                      children: Object(d.jsx)("div", {
                        children: Object(d.jsxs)(
                          S.a,
                          Object(y.a)(
                            Object(y.a)(
                              {},
                              {
                                infinite: !0,
                                dots: !0,
                                speed: 500,
                                slidesToShow: 1,
                                autoplay: !0,
                                autoplaySpeed: 3e3,
                                slidesToScroll: 1,
                              }
                            ),
                            {},
                            {
                              children: [
                                Object(d.jsx)("div", {
                                  children: Object(d.jsx)("img", {
                                    src: "https://media.istockphoto.com/photos/profile-side-view-portrait-of-attractive-cheerful-skilled-girl-geek-picture-id1392930383?k=20&m=1392930383&s=612x612&w=0&h=icEyUZRozS_cMXPRLloSPWn-TYEEanv3wIwfwOlySb4=",
                                    alt: "",
                                    className: "w-100 hero__img",
                                  }),
                                }),
                                Object(d.jsx)("div", {
                                  children: Object(d.jsx)("img", {
                                    src: "https://media.istockphoto.com/photos/web-developer-coding-for-program-working-on-software-startup-project-picture-id1214605359?k=20&m=1214605359&s=612x612&w=0&h=dxfPV86mCQW1XkjoyMapGPzOBuZq39M7JKlcA1vWdjc=",
                                    alt: "",
                                    className: "w-100 hero__img",
                                  }),
                                }),
                                Object(d.jsx)("div", {
                                  children: Object(d.jsx)("img", {
                                    src: "https://media.istockphoto.com/photos/happy-programmers-talking-while-developing-new-software-in-the-office-picture-id1130266509?k=20&m=1130266509&s=612x612&w=0&h=xgAfgI0jVJAqW9il97VSi2ibjcLn-r5sGDsjTH5KPno=",
                                    alt: "",
                                    className: "w-100 hero__img",
                                  }),
                                }),
                              ],
                            }
                          )
                        ),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        F = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(w, {}),
              Object(d.jsx)(A, {}),
              Object(d.jsx)(C, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        q = function (e) {
          var t = e.item,
            s = e.handleCardClick,
            c = t.image,
            n = t.title,
            i = t.description,
            a = t.numberOfChapitres,
            r = t.numberOfDoneStudents;
          return Object(d.jsxs)("div", {
            className: "single__course__item",
            children: [
              Object(d.jsx)("div", {
                className: "course__img",
                children: Object(d.jsx)("img", {
                  src: c,
                  alt: "",
                  className: "w-100",
                  style: { height: "200px" },
                }),
              }),
              Object(d.jsxs)("div", {
                className: "course__details",
                children: [
                  Object(d.jsx)("h6", {
                    className: "course__title mb-4",
                    children: n,
                  }),
                  Object(d.jsx)("p", {
                    style: { height: "100px", overflow: "scroll" },
                    children: i,
                  }),
                  Object(d.jsxs)("div", {
                    className:
                      " d-flex justify-content-between align-items-center",
                    children: [
                      Object(d.jsxs)("p", {
                        className: "lesson d-flex align-items-center gap-1",
                        children: [
                          Object(d.jsx)("i", {
                            className: "ri-book-open-line",
                          }),
                          " ",
                          a,
                          " Chapters",
                        ],
                      }),
                      Object(d.jsxs)("p", {
                        className: "students d-flex align-items-center gap-1",
                        children: [
                          Object(d.jsx)("i", { className: "ri-user-line" }),
                          " ",
                          r,
                          "0",
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)("div", {
                    className: " d-flex justify-content-end align-items-center",
                    children: Object(d.jsx)("button", {
                      class: "btn",
                      onClick: s,
                      children: "Enroll",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        P =
          (s(114),
          function (e) {
            var t = e.data,
              s = Object(o.g)();
            return Object(d.jsx)(j.d, {
              children: Object(d.jsx)(j.n, {
                children:
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Object(d.jsx)(j.c, {
                          lg: "4",
                          md: "6",
                          sm: "6",
                          children: Object(d.jsx)(
                            q,
                            {
                              item: e,
                              handleCardClick: function () {
                                return (
                                  (t = e._id), void s("/chapters/".concat(t))
                                );
                                var t;
                              },
                            },
                            e._id
                          ),
                        });
                      }),
              }),
            });
          }),
        L = function () {
          var e = Object(c.useState)([]),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            i =
              (Object(o.h)(),
              (function () {
                var e = Object(O.a)(
                  x.a.mark(function e() {
                    var t;
                    return x.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.a.get("http://159.89.12.104:5000/api/courses", {
                                headers: {
                                  "x-auth-token": localStorage.getItem("token"),
                                },
                              })
                            );
                          case 2:
                            (t = e.sent), n(t.data.courses);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })());
          return (
            Object(c.useEffect)(function () {
              i();
            }, []),
            Object(d.jsx)(d.Fragment, {
              children: Object(d.jsxs)("section", {
                children: [
                  Object(d.jsxs)("div", {
                    className: "banner-img-container",
                    children: [
                      Object(d.jsx)("img", {
                        alt: "",
                        src: "https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
                        style: { width: "100%" },
                      }),
                      Object(d.jsxs)("div", {
                        className: "banner-img-title",
                        children: [
                          Object(d.jsx)("h2", {
                            className: "banner-text",
                            children:
                              "A better way to learn to code. Ready to get started?",
                          }),
                          Object(d.jsx)("p", {
                            children:
                              "Take online coding courses to build your skills and advance your career as a programmer.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)(j.n, {
                    children: Object(d.jsx)(j.c, {
                      lg: "12",
                      className: "mb-5",
                      children: Object(d.jsxs)("div", {
                        className:
                          "course__top d-flex justify-content-between align-items-center",
                        children: [
                          Object(d.jsxs)("div", {
                            className: "course__top__left w-50",
                            children: [
                              Object(d.jsx)("h2", {
                                children: "A wide selection of courses",
                              }),
                              Object(d.jsx)("p", {
                                children:
                                  "Choose from 150 online courses. New courses are added every month.Learn to code with computer coding classes for web development, programming and computer science, data science, and much more from top universities and institutions. Join today.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur libero quod voluptatibus ullam quia quas, vitae voluptatem recusandae reprehenderit!",
                              }),
                            ],
                          }),
                          Object(d.jsx)("div", {
                            className: "w-50 text-end",
                            children: Object(d.jsx)("button", {
                              className: "btn",
                              children: "See All",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(d.jsx)(P, { data: s }),
                ],
              }),
            })
          );
        },
        z = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(L, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        M =
          (s(115),
          function () {
            return Object(d.jsx)("section", {
              className: "hero",
              children: Object(d.jsx)(j.d, {
                children: Object(d.jsxs)(j.n, {
                  children: [
                    Object(d.jsx)(j.c, {
                      lg: "6",
                      md: "6",
                      children: Object(d.jsxs)("div", {
                        className: "hero__content",
                        children: [
                          Object(d.jsxs)("h2", {
                            className: "mb-4 hero__title",
                            children: [
                              Object(d.jsx)("br", {}),
                              "CODE YOUR WAY TO SUCCESS ",
                              Object(d.jsx)("br", {}),
                              "Discover a limitless world of learning",
                              Object(d.jsx)("br", {}),
                            ],
                          }),
                          Object(d.jsxs)("p", {
                            className: "mb-5",
                            children: [
                              "We train the next tech generation in the latest technologies and",
                              Object(d.jsx)("br", {}),
                              "the jobs of the future to prepare ",
                              Object(d.jsx)("br", {}),
                              "them for the professional world and strengthen their employability.",
                              Object(d.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "6",
                      md: "6",
                      children: Object(d.jsx)("div", {
                        children: Object(d.jsxs)(
                          S.a,
                          Object(y.a)(
                            Object(y.a)(
                              {},
                              {
                                infinite: !0,
                                dots: !0,
                                speed: 500,
                                slidesToShow: 1,
                                autoplay: !0,
                                autoplaySpeed: 3e3,
                                slidesToScroll: 1,
                              }
                            ),
                            {},
                            {
                              children: [
                                Object(d.jsx)("div", {
                                  children: Object(d.jsx)("img", {
                                    src: "https://media.istockphoto.com/photos/beautiful-young-woman-with-laptop-isolated-on-white-background-picture-id1321598161?k=20&m=1321598161&s=170667a&w=0&h=cPmvggzxAKup_ptbFJVR0Rv1ZMfPqaMfHpvdnyYYXiM=",
                                    alt: "",
                                    className: "w-100 hero__img",
                                  }),
                                }),
                                Object(d.jsx)("div", {
                                  children: Object(d.jsx)("img", {
                                    src: "https://media.istockphoto.com/photos/charming-handsome-picture-id528582811?k=20&m=528582811&s=612x612&w=0&h=ipjmeCeHebLM2I3443YETj148kCSbs1KQKqApTgAzmY=",
                                    alt: "",
                                    className: "w-100 hero__img",
                                  }),
                                }),
                                Object(d.jsx)("div", {
                                  children: Object(d.jsx)("img", {
                                    src: "https://media.istockphoto.com/photos/group-of-multiracial-business-people-picture-id1306673186?k=20&m=1306673186&s=612x612&w=0&h=PaPYNhXzbEQ5mn-zllWawF6J66atQ0Eru0jrycFlhf0=",
                                    alt: "",
                                    className: "w-100 hero__img",
                                  }),
                                }),
                              ],
                            }
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        W = function () {
          var e = Object(c.useState)([]),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            i = (function () {
              var e = Object(O.a)(
                x.a.mark(function e() {
                  var t;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            g.a.get("http://159.89.12.104:5000/api/partners")
                          );
                        case 2:
                          (t = e.sent), n(t.data.data);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(function () {
              i();
            }, []),
            console.log(s),
            Object(d.jsx)("section", {
              children: Object(d.jsx)(j.d, {
                children: Object(d.jsx)(j.n, {
                  children:
                    null === s || void 0 === s
                      ? void 0
                      : s.map(function (e) {
                          return Object(d.jsx)(j.c, {
                            lg: "2",
                            md: "3",
                            sm: "4",
                            xs: "6",
                            children: Object(d.jsxs)("h3", {
                              className: " d-flex align-items-center gap-1",
                              children: [
                                Object(d.jsx)("img", {
                                  src: e.logo,
                                  class: "rounded",
                                  alt: "logo",
                                  height: "50px",
                                  width: "50px",
                                }),
                                e.name,
                              ],
                            }),
                          });
                        }),
                }),
              }),
            })
          );
        },
        U =
          (s(40),
          s.p,
          function () {
            return Object(d.jsx)("section", {
              className: "about",
              children: Object(d.jsx)(j.d, {
                children: Object(d.jsxs)(j.n, {
                  children: [
                    Object(d.jsx)(j.c, {
                      lg: "6",
                      md: "6",
                      children: Object(d.jsx)("div", {
                        className: "about__img",
                        children: Object(d.jsx)("img", {
                          src: "https://www.capsea-yachting.com/wp-content/uploads/2020/07/e-learning-image.jpg",
                          alt: "",
                          className: "w-100",
                        }),
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "6",
                      md: "6",
                      children: Object(d.jsxs)("div", {
                        className: "about__content",
                        children: [
                          Object(d.jsx)("h2", { children: "About Us" }),
                          Object(d.jsx)("p", {
                            children:
                              "The E-Learning method now replaces the traditional, highly theoretical and non-motivating educational system. Our learning model is based on projects and exercises providing the student with long-term knowledge and skills.",
                          }),
                          Object(d.jsxs)("div", {
                            className: "about__counter",
                            children: [
                              Object(d.jsxs)("div", {
                                className: " d-flex gap-5 align-items-center",
                                children: [
                                  Object(d.jsxs)("div", {
                                    className: "single__counter",
                                    children: [
                                      Object(d.jsx)("span", {
                                        className: "counter",
                                        children: Object(d.jsx)(_.a, {
                                          start: 0,
                                          end: 25,
                                          duration: 2,
                                          suffix: "M",
                                        }),
                                      }),
                                      Object(d.jsx)("p", {
                                        className: "counter__title",
                                        children:
                                          "students trained in the trendiest technologies on the market.",
                                      }),
                                    ],
                                  }),
                                  Object(d.jsxs)("div", {
                                    className: "single__counter",
                                    children: [
                                      Object(d.jsx)("span", {
                                        className: "counter",
                                        children: Object(d.jsx)(_.a, {
                                          start: 0,
                                          end: 12,
                                          duration: 2,
                                          suffix: "K",
                                        }),
                                      }),
                                      Object(d.jsx)("p", {
                                        className: "counter__title",
                                        children:
                                          "trainer instructors who accompany our students on a daily basis.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(d.jsxs)("div", {
                                className: " d-flex gap-5 align-items-center",
                                children: [
                                  Object(d.jsxs)("div", {
                                    className: "single__counter",
                                    children: [
                                      Object(d.jsx)("span", {
                                        className: "counter",
                                        children: Object(d.jsx)(_.a, {
                                          start: 0,
                                          end: 95,
                                          duration: 2,
                                          suffix: "K",
                                        }),
                                      }),
                                      Object(d.jsx)("p", {
                                        className: "counter__title",
                                        children:
                                          "training courses launched with professionals in the business.",
                                      }),
                                    ],
                                  }),
                                  Object(d.jsxs)("div", {
                                    className: "single__counter",
                                    children: [
                                      Object(d.jsx)("span", {
                                        className: "counter",
                                        children: Object(d.jsx)(_.a, {
                                          start: 0,
                                          end: 5,
                                          duration: 2,
                                          suffix: "K",
                                        }),
                                      }),
                                      Object(d.jsx)("p", {
                                        className: "counter__title",
                                        children:
                                          "recruiting partners who have trusted our pedagogy",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        R =
          (s(116),
          s(117),
          [
            {
              title: "Quick Learning",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
              icon: "ri-draft-line",
            },
            {
              title: "All Time Support",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
              icon: "ri-discuss-line",
            },
            {
              title: "Certification",
              desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
              icon: "ri-contacts-book-line",
            },
          ]),
        K = function () {
          return Object(d.jsx)("section", {
            children: Object(d.jsx)(j.d, {
              children: Object(d.jsx)(j.n, {
                children: R.map(function (e, t) {
                  return Object(d.jsx)(
                    j.c,
                    {
                      lg: "4",
                      md: "6",
                      children: Object(d.jsxs)("div", {
                        className: "single__feature text-center px-4",
                        children: [
                          Object(d.jsx)("h2", {
                            className: "mb-3",
                            children: Object(d.jsx)("i", { className: e.icon }),
                          }),
                          Object(d.jsx)("h6", { children: e.title }),
                          Object(d.jsx)("p", { children: e.desc }),
                        ],
                      }),
                    },
                    t
                  );
                }),
              }),
            }),
          });
        },
        D = function (e) {
          var t = e.item;
          console.log("item", t);
          var s = t.image,
            c = t.title;
          t.students, t.rating;
          return Object(d.jsxs)("div", {
            className: "single__free__course",
            children: [
              Object(d.jsxs)("div", {
                className: "free__course__img mb-5",
                children: [
                  Object(d.jsx)("img", {
                    src: s,
                    alt: "",
                    className: "w-100",
                    style: { height: "170px" },
                  }),
                  Object(d.jsx)("button", {
                    className: "btn free__btn",
                    children: "Free",
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "free__course__details",
                children: [
                  Object(d.jsx)("h6", { children: c }),
                  Object(d.jsxs)("div", {
                    className: " d-flex align-items-center gap-5",
                    children: [
                      Object(d.jsxs)("span", {
                        className: " d-flex align-items-center gap-2",
                        children: [
                          Object(d.jsx)("i", { className: "ri-user-line" }),
                          " ",
                          Math.floor(200 * Math.random() + 1),
                          " students",
                        ],
                      }),
                      Object(d.jsxs)("span", {
                        className: " d-flex align-items-center gap-2",
                        children: [
                          Object(d.jsx)("i", {
                            className: "ri-book-read-fill",
                          }),
                          " ",
                          Math.floor(15 * Math.random() + 1),
                          " chapters",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        J =
          (s(118),
          function (e) {
            var t = e.data;
            return Object(d.jsx)("section", {
              style: { backgroundColor: "#d5e8f8" },
              children: Object(d.jsx)(j.d, {
                children: Object(d.jsxs)(j.n, {
                  children: [
                    Object(d.jsxs)(j.c, {
                      lg: "12",
                      className: "text-center mb-5",
                      children: [
                        Object(d.jsx)("h2", {
                          className: "fw-bold",
                          children: "Our Free Courses",
                        }),
                        Object(d.jsx)("p", {
                          children:
                            "provides free and open access to a selection of introductory courses taught by distinguished teachers and scholars at our platform . The aim of the project is to expand access to educational materials for all who wish to learn.",
                        }),
                      ],
                    }),
                    null === t || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          return Object(d.jsx)(
                            j.c,
                            {
                              lg: "3",
                              md: "4",
                              className: "mb-4",
                              children: Object(d.jsx)(D, { item: e }, e._id),
                            },
                            e.id
                          );
                        }),
                  ],
                }),
              }),
            });
          }),
        Y = function () {
          var e = Object(c.useState)([]),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            i = (function () {
              var e = Object(O.a)(
                x.a.mark(function e() {
                  var t;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            g.a.get(
                              "http://159.89.12.104:5000/api/courses/free"
                            )
                          );
                        case 2:
                          (t = e.sent), n(t.data.data);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(function () {
              i();
            }, []),
            Object(d.jsx)(d.Fragment, {
              children: Object(d.jsx)(J, { data: s }),
            })
          );
        },
        G = function () {
          return Object(d.jsx)(d.Fragment, { children: Object(d.jsx)(Y, {}) });
        },
        Q =
          (s(119),
          function () {
            return Object(d.jsx)("section", {
              children: Object(d.jsx)(j.d, {
                className: "newsletter",
                children: Object(d.jsx)(j.n, {
                  children: Object(d.jsxs)(j.c, {
                    lg: "12",
                    className: "text-center",
                    children: [
                      Object(d.jsx)("h2", {
                        className: "mb-4",
                        children: "Subscribe Our Newsletter",
                      }),
                      Object(d.jsxs)("div", {
                        className: "subscribe",
                        children: [
                          Object(d.jsx)("input", {
                            type: "text",
                            placeholder: "Email",
                          }),
                          Object(d.jsx)("button", {
                            className: "btn",
                            children: "Subscribe",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        H = function () {
          return Object(d.jsxs)(c.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(M, {}),
              Object(d.jsx)(W, {}),
              Object(d.jsx)(U, {}),
              Object(d.jsx)(A, {}),
              Object(d.jsx)(K, {}),
              Object(d.jsx)(G, {}),
              Object(d.jsx)(C, {}),
              Object(d.jsx)(Q, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        V =
          (s(120),
          function () {
            var e = Object(c.useState)(!1),
              t = Object(r.a)(e, 2),
              s = t[0],
              n = t[1];
            return Object(d.jsx)("section", {
              children: Object(d.jsx)(j.d, {
                children: Object(d.jsxs)(j.n, {
                  children: [
                    Object(d.jsx)(j.c, {
                      lg: "6",
                      md: "6",
                      children: Object(d.jsxs)("div", {
                        className: "choose__content",
                        children: [
                          Object(d.jsx)("h2", { children: "Why Choose Us" }),
                          Object(d.jsx)("p", {
                            children:
                              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nostrum harum eos praesentium odit a sed quod aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate facilis provident quidem accusamus impedit tenetur laboriosam debitis nisi eius!",
                          }),
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "6",
                      md: "6",
                      children: Object(d.jsxs)("div", {
                        className: "choose__img",
                        children: [
                          s
                            ? Object(d.jsx)(T.a, {
                                url: "https://www.youtube.com/watch?v=qFp27TR4Yew",
                                controls: !0,
                                width: "100%",
                                height: "350px",
                              })
                            : Object(d.jsx)("img", {
                                src: E,
                                alt: "",
                                className: "w-100",
                              }),
                          !s &&
                            Object(d.jsx)("span", {
                              className: "play__icon",
                              children: Object(d.jsx)("i", {
                                className: "ri-play-circle-line",
                                onClick: function () {
                                  return n(!s);
                                },
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        B =
          (s(121),
          function () {
            return Object(d.jsx)("section", {
              children: Object(d.jsx)(j.d, {
                children: Object(d.jsxs)(j.n, {
                  children: [
                    Object(d.jsx)(j.c, {
                      lg: "2",
                      md: "3",
                      sm: "4",
                      xs: "6",
                      children: Object(d.jsxs)("h3", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          Object(d.jsx)("i", { className: "ri-apple-fill" }),
                          "Apple",
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "2",
                      md: "3",
                      sm: "4",
                      xs: "6",
                      children: Object(d.jsxs)("h3", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          Object(d.jsx)("i", {
                            className: "ri-microsoft-fill",
                          }),
                          " Microsoft",
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "2",
                      md: "3",
                      sm: "4",
                      xs: "6",
                      children: Object(d.jsxs)("h3", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          Object(d.jsx)("i", { className: "ri-amazon-fill" }),
                          " Amazon",
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "2",
                      md: "3",
                      sm: "4",
                      xs: "6",
                      children: Object(d.jsxs)("h3", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          " ",
                          Object(d.jsx)("i", { className: "ri-vimeo-fill" }),
                          " Vimeo",
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "2",
                      md: "3",
                      sm: "4",
                      xs: "6",
                      children: Object(d.jsxs)("h3", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          " ",
                          Object(d.jsx)("i", { className: "ri-finder-fill" }),
                          " Finder",
                        ],
                      }),
                    }),
                    Object(d.jsx)(j.c, {
                      lg: "2",
                      md: "3",
                      sm: "4",
                      xs: "6",
                      children: Object(d.jsxs)("h2", {
                        className: " d-flex align-items-center gap-1",
                        children: [
                          " ",
                          Object(d.jsx)("i", { className: "ri-google-fill" }),
                          " Google",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        X = function () {
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsxs)("section", {
              children: [
                Object(d.jsx)(j.d, {
                  children: Object(d.jsxs)(j.n, {
                    children: [
                      Object(d.jsx)(j.c, {
                        lg: "6",
                        md: "6",
                        children: Object(d.jsx)("div", {
                          className: "about__img",
                          children: Object(d.jsx)("img", {
                            src: "https://www.capsea-yachting.com/wp-content/uploads/2020/07/e-learning-image.jpg",
                            alt: "",
                            className: "w-100",
                          }),
                        }),
                      }),
                      Object(d.jsx)(j.c, {
                        lg: "6",
                        md: "6",
                        children: Object(d.jsxs)("div", {
                          className: "about__content",
                          children: [
                            Object(d.jsx)("h1", { children: "About Us" }),
                            Object(d.jsx)("p", {
                              children:
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi cupiditate animi deserunt libero nesciunt corporis explicabo nobis ex quo molestiae!",
                            }),
                            Object(d.jsxs)("p", {
                              className: "has-s-font-size",
                              children: [
                                Object(d.jsx)("strong", {
                                  children: "Was build to change that. ",
                                }),
                                "We\u2019re on a mission to democratize training. To deliver a premium learning experience that\u2019s accessible, affordable, and actually enjoyable.",
                              ],
                            }),
                            Object(d.jsxs)("div", {
                              className: "about__counter",
                              children: [
                                Object(d.jsxs)("div", {
                                  className: " d-flex gap-5 align-items-center",
                                  children: [
                                    Object(d.jsxs)("div", {
                                      className: "single__counter",
                                      children: [
                                        Object(d.jsx)("span", {
                                          className: "counter",
                                          children: Object(d.jsx)(_.a, {
                                            start: 0,
                                            end: 25,
                                            duration: 2,
                                            suffix: "K",
                                          }),
                                        }),
                                        Object(d.jsx)("p", {
                                          className: "counter__title",
                                          children: "Completed Projects",
                                        }),
                                      ],
                                    }),
                                    Object(d.jsxs)("div", {
                                      className: "single__counter",
                                      children: [
                                        Object(d.jsx)("span", {
                                          className: "counter",
                                          children: Object(d.jsx)(_.a, {
                                            start: 0,
                                            end: 12,
                                            duration: 2,
                                            suffix: "M",
                                          }),
                                        }),
                                        Object(d.jsx)("p", {
                                          className: "counter__title",
                                          children: "Patient Around World",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(d.jsxs)("div", {
                                  className: " d-flex gap-5 align-items-center",
                                  children: [
                                    Object(d.jsxs)("div", {
                                      className: "single__counter",
                                      children: [
                                        Object(d.jsx)("span", {
                                          className: "counter",
                                          children: Object(d.jsx)(_.a, {
                                            start: 0,
                                            end: 95,
                                            duration: 2,
                                            suffix: "M",
                                          }),
                                        }),
                                        Object(d.jsx)("p", {
                                          className: "counter__title",
                                          children: "Ideas Raised Funds",
                                        }),
                                      ],
                                    }),
                                    Object(d.jsxs)("div", {
                                      className: "single__counter",
                                      children: [
                                        Object(d.jsx)("span", {
                                          className: "counter",
                                          children: Object(d.jsx)(_.a, {
                                            start: 0,
                                            end: 5,
                                            duration: 2,
                                            suffix: "K",
                                          }),
                                        }),
                                        Object(d.jsx)("p", {
                                          className: "counter__title",
                                          children: "Categories Served",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                Object(d.jsx)("div", {
                  className: "text-bottom",
                  children: Object(d.jsx)("p", {
                    children:
                      "We help organizations of all types and sizes prepare for the path ahead \u2014 wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.",
                  }),
                }),
              ],
            }),
          });
        },
        Z = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(M, {}),
              Object(d.jsx)(X, {}),
              Object(d.jsx)(B, {}),
              Object(d.jsx)(V, {}),
            ],
          });
        },
        $ = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(Z, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        ee = function () {
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsxs)("section", {
              children: [
                Object(d.jsx)("br", {}),
                Object(d.jsxs)("div", {
                  children: [
                    Object(d.jsx)("h2", {
                      style: { textAlign: "center" },
                      children: "Keep in touch with us",
                    }),
                    Object(d.jsx)("p", {}),
                  ],
                }),
                Object(d.jsx)("br", {}),
                Object(d.jsx)("br", {}),
                Object(d.jsx)("br", {}),
                Object(d.jsx)(j.d, {
                  children: Object(d.jsx)(j.n, {
                    children: Object(d.jsx)(j.c, {
                      children: Object(d.jsxs)("div", {
                        className: "contact",
                        children: [
                          Object(d.jsx)("h2", {
                            className: "text-center",
                            children: "CONTACT",
                          }),
                          Object(d.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(d.jsxs)("div", {
                                className: "col-sm-5",
                                children: [
                                  Object(d.jsx)("p", {
                                    children:
                                      "Contact us and we'll get back to you within 24 hours.",
                                  }),
                                  Object(d.jsxs)("p", {
                                    children: [
                                      Object(d.jsx)("span", {
                                        className:
                                          "glyphicon glyphicon-map-marker",
                                      }),
                                      " ",
                                      "Tunis, Tunisia",
                                    ],
                                  }),
                                  Object(d.jsxs)("p", {
                                    children: [
                                      Object(d.jsx)("span", {
                                        className: "glyphicon glyphicon-phone",
                                      }),
                                      " +216 345676543",
                                    ],
                                  }),
                                  Object(d.jsxs)("p", {
                                    children: [
                                      Object(d.jsx)("span", {
                                        className:
                                          "glyphicon glyphicon-envelope",
                                      }),
                                      " ",
                                      "myemail@something.com",
                                    ],
                                  }),
                                ],
                              }),
                              Object(d.jsxs)("div", {
                                className: "col-sm-7 slideanim",
                                children: [
                                  Object(d.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      Object(d.jsx)("div", {
                                        className: "col-sm-6 form-group",
                                        children: Object(d.jsx)("input", {
                                          className: "form-control",
                                          id: "name",
                                          name: "name",
                                          placeholder: "Name",
                                          type: "text",
                                          required: !0,
                                        }),
                                      }),
                                      Object(d.jsx)("div", {
                                        className: "col-sm-6 form-group",
                                        children: Object(d.jsx)("input", {
                                          className: "form-control",
                                          id: "email",
                                          name: "email",
                                          placeholder: "Email",
                                          type: "email",
                                          required: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  Object(d.jsx)("textarea", {
                                    className: "form-control",
                                    id: "comments",
                                    name: "comments",
                                    placeholder: "Comment",
                                    rows: "5",
                                  }),
                                  Object(d.jsx)("br", {}),
                                  Object(d.jsx)("div", {
                                    className: "row",
                                    children: Object(d.jsx)("div", {
                                      className: "col-sm-12 form-group",
                                      children: Object(d.jsx)("button", {
                                        className: "btn btn-default pull-right",
                                        type: "submit",
                                        children: "Send",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        te = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(ee, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        se =
          (s(122),
          function (e) {
            var t = e.item,
              s = e.categoryId,
              c = Object(o.g)(),
              n = t.image,
              i = t.title;
            return Object(d.jsx)(d.Fragment, {
              children: Object(d.jsxs)("div", {
                className: "single__course__item",
                onClick: function () {
                  return c("/categories/".concat(s));
                },
                children: [
                  Object(d.jsx)("div", {
                    className: "course__img",
                    children: Object(d.jsx)("img", {
                      src: n,
                      alt: "",
                      className: "w-100",
                      style: { height: "200px" },
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "category__title__details",
                    children: Object(d.jsx)("h5", {
                      className: "category__title mb-4",
                      children: i,
                    }),
                  }),
                ],
              }),
            });
          }),
        ce =
          (s(123),
          function (e) {
            var t = e.data;
            return (
              console.log(t),
              Object(d.jsxs)("section", {
                children: [
                  Object(d.jsxs)("div", {
                    className: "banner-img-container",
                    children: [
                      Object(d.jsx)("img", {
                        alt: "",
                        src: "https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
                        style: { width: "100%" },
                      }),
                      Object(d.jsxs)("div", {
                        className: "banner-img-title",
                        children: [
                          Object(d.jsx)("h2", {
                            className: "banner-text",
                            children: "Our Courses Categories",
                          }),
                          Object(d.jsx)("p", {
                            children:
                              "The content of our courses is developed with E-learning partner companies. It is employability oriented and is constantly updated according to recruiters' requests. Start your new career at any time! Available part-time? No problem, study at your own pace.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)("br", {}),
                  Object(d.jsx)("div", {
                    className: "has",
                    children: Object(d.jsxs)("h2", {
                      children: [
                        "Boost ",
                        Object(d.jsx)("strong", {
                          children: " your training with us",
                        }),
                      ],
                    }),
                  }),
                  Object(d.jsx)("div", {
                    className: "has-txt",
                    children: Object(d.jsxs)("p", {
                      children: [
                        Object(d.jsx)("strong", {
                          children:
                            "Benefit from weekly mentoring sessions with an industry expert",
                        }),
                        "In addition to containing a final project, each course contains several projects and practical exercises to give the possibility to the student to test and build by himself.",
                      ],
                    }),
                  }),
                  Object(d.jsx)("br", {}),
                  Object(d.jsx)(j.d, {
                    children: Object(d.jsx)(j.n, {
                      children:
                        null === t || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return Object(d.jsx)(j.c, {
                                lg: "4",
                                md: "6",
                                sm: "6",
                                children: Object(d.jsx)(
                                  se,
                                  { item: e, categoryId: e._id },
                                  e._id
                                ),
                              });
                            }),
                    }),
                  }),
                ],
              })
            );
          }),
        ne =
          (s(124),
          function () {
            var e = Object(c.useState)([]),
              t = Object(r.a)(e, 2),
              s = t[0],
              n = t[1],
              i = (function () {
                var e = Object(O.a)(
                  x.a.mark(function e() {
                    var t;
                    return x.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g.a.get(
                                "http://159.89.12.104:5000/api/categories",
                                {
                                  headers: {
                                    "x-auth-token":
                                      localStorage.getItem("token"),
                                  },
                                }
                              )
                            );
                          case 2:
                            (t = e.sent), n(t.data.data);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (
              Object(c.useEffect)(function () {
                i();
              }, []),
              Object(d.jsx)(d.Fragment, {
                children: Object(d.jsx)(ce, { data: s }),
              })
            );
          }),
        ie = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(ne, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        ae =
          (s(125),
          function (e) {
            var t = e.data,
              s = Object(o.g)();
            return Object(d.jsxs)(d.Fragment, {
              children: [
                Object(d.jsxs)("div", {
                  className: "banner-img-container",
                  children: [
                    Object(d.jsx)("img", {
                      alt: "",
                      src: "https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg",
                      style: { width: "100%" },
                    }),
                    Object(d.jsxs)("div", {
                      className: "banner-img-title",
                      children: [
                        Object(d.jsx)("h2", {
                          className: "banner-text",
                          children:
                            "A better way to learn to code. Ready to get started?",
                        }),
                        Object(d.jsx)("p", {
                          children:
                            "Take online coding courses to build your skills and advance your career as a programmer.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(d.jsx)(j.d, {
                  children: Object(d.jsxs)(j.n, {
                    children: [
                      Object(d.jsx)(j.c, {
                        lg: "12",
                        className: "mb-5",
                        children: Object(d.jsxs)("div", {
                          className:
                            "course__top d-flex justify-content-between align-items-center pl-0",
                          children: [
                            Object(d.jsxs)("div", {
                              className: "course__top__left w-10",
                              children: [
                                Object(d.jsx)("h2", {
                                  children: "A wide selection of courses",
                                }),
                                Object(d.jsx)("p", {
                                  children:
                                    "Choose from 150 online courses. New courses are added every month.Learn to code with computer coding classes for web development, programming and computer science, data science, and much more from top universities and institutions. Join today.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequatur libero quod voluptatibus ullam quia quas, vitae voluptatem recusandae reprehenderit!",
                                }),
                              ],
                            }),
                            Object(d.jsx)("div", {
                              className: "w-50 text-end",
                              children: Object(d.jsx)("button", {
                                className: "btn",
                                children: "See All",
                              }),
                            }),
                          ],
                        }),
                      }),
                      null === t || void 0 === t
                        ? void 0
                        : t.map(function (e) {
                            return Object(d.jsx)(j.c, {
                              lg: "4",
                              md: "6",
                              sm: "6",
                              children: Object(d.jsx)(
                                q,
                                {
                                  item: e,
                                  handleCardClick: function () {
                                    return (
                                      (t = e._id),
                                      void s("/chapters/".concat(t))
                                    );
                                    var t;
                                  },
                                },
                                e._id
                              ),
                            });
                          }),
                    ],
                  }),
                }),
              ],
            });
          }),
        re = function () {
          var e = Object(o.h)(),
            t = Object(c.useState)([]),
            s = Object(r.a)(t, 2),
            n = s[0],
            i = s[1],
            a = (function () {
              var t = Object(O.a)(
                x.a.mark(function t() {
                  var s;
                  return x.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            g.a.get(
                              "http://159.89.12.104:5000/api/courses/".concat(
                                e.id
                              )
                            )
                          );
                        case 2:
                          (s = t.sent), i(s.data.data);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(
              function () {
                a(e.id);
              },
              [e.id]
            ),
            Object(d.jsx)("section", {
              children: Object(d.jsx)(ae, { data: n }),
            })
          );
        },
        le = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(re, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        oe = function () {
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsx)("section", {
              children: "you can not access this page",
            }),
          });
        },
        je =
          (s(126),
          function (e) {
            var t = e.item,
              s = t.title,
              c = t.videoUrl;
            return Object(d.jsx)(d.Fragment, {
              children: Object(d.jsx)("div", {
                children: Object(d.jsx)(j.i, {
                  children: Object(d.jsx)(j.j, {
                    action: !0,
                    href: { videoUrl: c },
                    tag: "a",
                    children: s,
                  }),
                }),
              }),
            });
          }),
        de = function (e) {
          var t = e.data,
            s = e.courseTitle,
            c = e.courseDescription;
          return Object(d.jsx)("section", {
            children: Object(d.jsx)(j.d, {
              children: Object(d.jsxs)(d.Fragment, {
                children: [
                  Object(d.jsx)("h3", { children: s }),
                  Object(d.jsx)("h5", {
                    children: "About this Specialization",
                  }),
                  Object(d.jsx)("p", { children: c }),
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Object(d.jsx)(je, { item: e }, e._id);
                      }),
                ],
              }),
            }),
          });
        },
        be = function () {
          var e,
            t,
            s,
            n,
            i = Object(o.h)(),
            a = i.courseId;
          console.log(i.courseId);
          var l = Object(c.useState)([]),
            j = Object(r.a)(l, 2),
            b = j[0],
            h = j[1],
            m = (function () {
              var e = Object(O.a)(
                x.a.mark(function e() {
                  var t;
                  return x.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            g.a.get(
                              "http://159.89.12.104:5000/api/chapitres/".concat(
                                a
                              ),
                              {
                                headers: {
                                  "x-auth-token": localStorage.getItem("token"),
                                },
                              }
                            )
                          );
                        case 2:
                          (t = e.sent), h(t.data.data);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(c.useEffect)(function () {
              m();
            }, []),
            Object(d.jsx)("section", {
              children: Object(d.jsx)(de, {
                data: b,
                courseTitle:
                  (null === (e = b[0]) ||
                  void 0 === e ||
                  null === (t = e.courseId) ||
                  void 0 === t
                    ? void 0
                    : t.title) || "title",
                courseDescription:
                  (null === (s = b[0]) ||
                  void 0 === s ||
                  null === (n = s.courseId) ||
                  void 0 === n
                    ? void 0
                    : n.description) || "description",
              }),
            })
          );
        },
        he = function () {
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)(v, {}),
              Object(d.jsx)(be, {}),
              Object(d.jsx)(m, {}),
            ],
          });
        },
        me = function () {
          var e = Object(c.useState)(!1),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1];
          return (
            Object(c.useEffect)(function () {
              void 0 !== localStorage.getItem("token") &&
              void 0 !== localStorage.getItem("loggedUser")
                ? n(!0)
                : n(!1);
            }, []),
            Object(d.jsx)(d.Fragment, {
              children: Object(d.jsx)(l.a, {
                children: Object(d.jsxs)(o.d, {
                  children: [
                    Object(d.jsx)(o.b, {
                      path: "/",
                      element: Object(d.jsx)(H, {}),
                    }),
                    Object(d.jsx)(o.b, {
                      path: "/home",
                      element: Object(d.jsx)($, {}),
                    }),
                    Object(d.jsx)(o.b, {
                      path: "/about",
                      element: Object(d.jsx)(F, {}),
                    }),
                    s
                      ? Object(d.jsxs)(d.Fragment, {
                          children: [
                            Object(d.jsx)(o.b, {
                              path: "/courses",
                              element: Object(d.jsx)(z, {}),
                            }),
                            Object(d.jsx)(o.b, {
                              path: "/categories",
                              element: Object(d.jsx)(ie, {}),
                            }),
                            Object(d.jsx)(o.b, {
                              path: "/categories/:id",
                              element: Object(d.jsx)(le, {}),
                            }),
                            Object(d.jsx)(o.b, {
                              path: "/chapters/:courseId",
                              element: Object(d.jsx)(he, {}),
                            }),
                          ],
                        })
                      : Object(d.jsx)(o.b, {
                          path: "*",
                          element: Object(d.jsx)(o.a, { to: "/", replace: !0 }),
                        }),
                    Object(d.jsx)(o.b, {
                      path: "/contact",
                      element: Object(d.jsx)(te, {}),
                    }),
                    Object(d.jsx)(o.b, {
                      path: "/error",
                      element: Object(d.jsx)(oe, {}),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      s(127), s(128), s(129), s(130), s(131);
      a.a.render(
        Object(d.jsx)(n.a.StrictMode, { children: Object(d.jsx)(me, {}) }),
        document.getElementById("root")
      );
    },
    40: function (e, t, s) {},
    48: function (e, t, s) {},
    76: function (e, t, s) {},
    78: function (e, t, s) {},
    79: function (e, t, s) {},
    95: function (e, t, s) {},
  },
  [[132, 1, 2]],
]);
//# sourceMappingURL=main.68ee955d.chunk.js.map
