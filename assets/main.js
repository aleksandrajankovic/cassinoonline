document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("heroSection");
  const cta = document.getElementById("stickyCta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cta.classList.remove("hidden");
        } else {
          cta.classList.add("hidden");
        }
      });
    },
    {
      root: null,
      threshold: 0,
    },
  );

  observer.observe(hero);
});

/* ACCORDION */
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = Array.from(document.querySelectorAll(".faq-button"));
  const faqContents = Array.from(document.querySelectorAll(".faq-content"));
  const VISIBLE_COUNT = 4;

  // accordion click
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.classList.toggle("hidden");

      // okretanje strelice
      const arrow = btn.querySelector("img");
      if (arrow) arrow.classList.toggle("rotate-90");
    });
  });

  // sakrij sve posle 4.
  for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
    faqButtons[i].classList.add("hidden");
    faqContents[i].classList.add("hidden");
  }

  // SHOW MORE / SHOW LESS
  const showMoreBtn = document.getElementById("faqShowMore");
  if (showMoreBtn) {
    let expanded = false;

    showMoreBtn.addEventListener("click", () => {
      expanded = !expanded;

      for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
        faqButtons[i].classList.toggle("hidden");

        faqContents[i].classList.add("hidden");
      }

      showMoreBtn.textContent = expanded ? "Mostrar menos" : "Mostrar mais";
    });
  }
});

/* WINNERS SLIDER – 2 PROMO KARTICE */
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = [
    document.getElementById("winnersGridMobile"),
    document.getElementById("winnersGridDesktop"),
  ].filter(Boolean);
  if (!wrappers.length) return;
  const cards = [
    {
      id: "casino",
      title: "10 rodadas grátis",
      text: "Esteve ativo nas últimas 24h? Clientes que estiverem ativos nesse período irão receber 10 rodadas grátis. Consulte T&C",
      img: "./assets/img/10rodadasgratis.png",
      alt: "Promo Casino",
      gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link: "https://meridianbet.bet.br/promo/ca/category/1414/page/37212",
    },
    {
      id: "casino",
      title: "100 rodadas grátis",
      text: " Aposte R$150,00 em qualquer jogo de slot da Expanse e ganhe 100 rodadas grátis. Você receberá rodadas grátis durante 4 dias, sendo 25 rodadas por dia. Consulte T&C",
      img: "./assets/img/100rodadasgratis.png",
      alt: "Promo Casino",
      gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link: "https://meridianbet.bet.br/promo/ca/category/1414/page/37342",
    },
    {
      id: "sport",
      title: "Cashback diário",
      text: "Receba cashback diariamente conforme sua atividade e nível dentro da plataforma. Os valores são definidos de forma personalizada, de acordo com o seu nível de atividade (GGR) nos últimos 6 meses.",
      img: "./assets/img/cashback.png",
      alt: "Promo Casino",
      gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link: "https://meridianbet.bet.br/promo/ca/category/1421/page/38457",
    },
    {
      id: "casino",
      title: "Chuva de freebet",
      text: "Aumente suas chances com diversas chuvas de freebet por dia no valor de R$5,00 nos Crash games Super Heli e Aviator. Consulte T&C",
      img: "./assets/img/chuvafreebets.png",
      alt: "Promo Casino",
      gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link: "https://meridianbet.bet.br/promo/ca/category/1414/page/37214",
    },
    {
      id: "sport",
      title: "30 rodadas grátis ",
      text: "Teve perdas no cassino durante a semana? A gente te dá uma segunda chance! Toda quarta-feira você recebe 30 rodadas grátis. Consulte T&C",
      img: "./assets/img/30rodadasgratis.png",
      alt: "Promo Casino",
      gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link: "https://meridianbet.bet.br/promo/ca/category/1414/page/37202",
    },
    {
      id: "sport",
      title: "Torneios mensais",
      text: "Participe de torneios exclusivos Meridianbet com premiações incríveis e chances de levar uma bolada pra casa. Consulte T&C",
      img: "./assets/img/torneios.png",
      alt: "Promo Casino",
      gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link: "https://meridianbet.bet.br/ca/cassino/torneios",
    },
  ];

  function renderInto(wrapper) {
    wrapper.innerHTML = "";
    cards.forEach((card) => {
      const slide = document.createElement("div");
      slide.className =
        "swiper-slide flex items-stretch justify-center px-1 md:px-2";
slide.innerHTML = `
  <a href="${card.link}" target="_blank" class="block w-full">
    <div
      class="relative overflow-hidden w-full
             min-h-[200px] sm:min-h-[270px] md:min-h-[250px]
             rounded-[20px]
             px-4 py-4 md:px-10 md:py-8
             ${card.gradientDesk ? `md:${card.gradientDesk}` : ""}
             bg-gradient-to-br ${card.gradient}
             flex items-start sm:items-center gap-3 md:gap-6 border border-[#D9A445]/50"
    >
      <!-- TEXT -->
      <div class="relative z-[2] text-left max-w-[60%] sm:max-w-none flex-1">
        <p class="font-bold uppercase text-[24px] sm:text-[22px] text-[#d9a445] leading-tight">
          ${card.title}
        </p>
        <p class="mt-2 text-[14px] sm:text-[16px] leading-[1.35] text-[#fff]">
          ${card.text}
        </p>
      </div>

      <!-- DESKTOP IMAGE -->
      <div class="flex-shrink-0 hidden sm:block ${card.id}">
        <img
          src="${card.img}"
          alt="${card.alt}"
          class="
            object-contain
            ${card.id === "cassino"
              ? "w-[190px] md:w-[220px] lg:w-[250px]"
              : "w-[180px] md:w-[200px] lg:w-[220px]"
            }
          "
        />
      </div>

      <!-- MOBILE IMAGE -->
      <img
        src="${card.img}"
        alt="${card.alt}"
        class="sm:hidden absolute right-[-10px] bottom-[-6px]
               w-[140px] h-[120px] object-contain z-[1] "
        loading="lazy"
        decoding="async"
      />
    </div>
  </a>
`;
      wrapper.appendChild(slide);
    });
  }

  wrappers.forEach(renderInto);

  const swiperOpts = {
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      0: { slidesPerView: 1, allowTouchMove: true },
      640: { slidesPerView: 1.2, allowTouchMove: true },
      1024: { slidesPerView: 2, allowTouchMove: true },
    },
  };

  if (document.querySelector(".winners-swiper-mobile")) {
    new Swiper(".winners-swiper-mobile", swiperOpts);
  }
  if (document.querySelector(".winners-swiper-desktop")) {
    new Swiper(".winners-swiper-desktop", swiperOpts);
  }
});

/*SPORTS SLIDER*/
(function () {
  const marquee = document.querySelector(".sports-marquee");
  const track = document.querySelector("#sportsTrack");
  const sets = track?.querySelectorAll(".sports-set");
  if (!marquee || !track || !sets || sets.length < 2) return;

  let x = 0;
  let speed = 0.6;

  function getShift() {
    return sets[1].offsetLeft;
  }

  let shift = getShift();

  function tick() {
    x -= speed;

    if (-x >= shift) x += shift;

    track.style.transform = `translateX(${x}px)`;
    raf = requestAnimationFrame(tick);
  }

  let raf = requestAnimationFrame(tick);

  // pauza na hover
  marquee.addEventListener("mouseenter", () => cancelAnimationFrame(raf));
  marquee.addEventListener(
    "mouseleave",
    () => (raf = requestAnimationFrame(tick)),
  );

  window.addEventListener("resize", () => {
    shift = getShift();
  });
})();

/*FOOTER SLIDER*/

function autoSlide(sliderContainer) {
  const wrapper = sliderContainer.querySelector(".slider-wrapper");
  const slides = sliderContainer.querySelectorAll(".slider-slide");

  // Ako nema ili je samo jedan slajd, ne pokreći auto klizanje
  if (!wrapper || slides.length < 2) {
    // centriraj statični jedan logo
    sliderContainer.classList.add("is-static");
    return;
  }

  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;

  function moveSlides() {
    currentPosition -= 1;
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= slideWidth) {
      currentPosition = 0;
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(() => (wrapper.style.transition = ""));
    }
  }

  setInterval(moveSlides, 30);
}

// pokreni za sve, ali funkcija će sama isključiti gde treba
document.querySelectorAll(".slider-container").forEach(autoSlide);

(function () {
  const ua = navigator.userAgent.toLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua); // svi iOS browseri
  const isMacSafari =
    /macintosh/.test(ua) &&
    /safari/.test(ua) &&
    !/chrome|chromium|edg/.test(ua);

  if (isIOS || isMacSafari) {
    document.documentElement.classList.add("no-hero-bg");
  }
})();
