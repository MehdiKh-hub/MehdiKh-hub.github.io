(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. i18n DICTIONARY
     Single source of truth for FA / EN copy. Keeps the two languages
     from drifting out of sync (the previous two-file setup had a few
     date mismatches between the FA and EN pages caused by exactly
     this kind of duplication).
     ------------------------------------------------------------------ */
  var STRINGS = {
    fa: {
      "meta.title": "محمدمهدی خدابنده — توسعه‌دهنده نرم‌افزار (.NET)",
      "meta.description":
        "رزومه محمدمهدی خدابنده، توسعه‌دهنده نرم‌افزار با تمرکز بر پلتفرم مایکروسافت و اکوسیستم .NET.",
      "a11y.skip": "پرش به محتوای اصلی",
      "a11y.mainNav": "ناوبری اصلی",
      "a11y.openMenu": "باز کردن منو",
      "a11y.closeMenu": "بستن منو",
      "a11y.scrollDown": "پیمایش به پایین",
      "brand.full": "محمدمهدی خدابنده",
      "brand.short": "م. خدابنده",
      "nav.home": "خانه",
      "nav.about": "درباره من",
      "nav.skills": "مهارت‌ها",
      "nav.experience": "تجربه",
      "nav.education": "تحصیلات",
      "nav.contact": "تماس",
      "hero.eyebrow": "توسعه‌دهنده نرم‌افزار · .NET",
      "hero.tagline":
        "توسعه‌دهنده نرم‌افزار با تمرکز روی پلتفرم مایکروسافت و اکوسیستم .NET؛ علاقه‌مند به حل مسائل واقعی با تفکر سیستمی و کد تمیز.",
      "hero.location": "تهران، ایران",
      "hero.studying": "دانشجوی مهندسی کامپیوتر",
      "hero.ctaPrimary": "تماس با من",
      "hero.ctaSecondary": "مشاهده گیت‌هاب",
      "about.kicker": "درباره من",
      "about.heading": "کسی که به جزئیات اهمیت می‌دهد",
      "about.p1":
        "توسعه‌دهنده نرم‌افزار با بیش از یک سال تجربه عملی در طراحی و پیاده‌سازی اپلیکیشن‌های تحت وب، با تمرکز ویژه روی پلتفرم مایکروسافت و اکوسیستم .NET.",
      "about.p2":
        "برنامه‌نویسی برای من صرفاً یک شغل نیست؛ راهی است برای حل مسائل واقعی با تفکر سیستمی، معماری تمیز و کدی که بتوان آن را در طول زمان توسعه داد.",
      "about.stat1Label": "سال تجربه",
      "about.stat2Label": "پروژه",
      "about.stat3Label": "گواهینامه",
      "skills.kicker": "مهارت‌ها",
      "skills.heading": "پشته فنی",
      "skills.cat1": "بک‌اند و فریمورک‌ها",
      "skills.cat2": "داده و زیرساخت",
      "skills.cat3": "همچنین آشنا با",
      "skills.oop": "اصول OOP و طراحی",
      "experience.kicker": "تجربه",
      "experience.heading": "سوابق کاری",
      "experience.role": "توسعه‌دهنده جونیور .NET",
      "experience.duration": "اسفند ۱۴۰۳ — اکنون",
      "experience.bullet1": "طراحی و پیاده‌سازی ساختار احراز هویت کاربران",
      "experience.bullet2":
        "کانتینرسازی پروژه با Docker Desktop برای استقرار ساده‌تر",
      "experience.bullet3":
        "واکشی، مرتب‌سازی و نمایش داده‌ها از دیتابیس در رابط کاربری",
      "experience.bullet4": "پیاده‌سازی جست‌وجوی موجودی در فهرست کتاب‌های سایت",
      "experience.moreCode": "نمونه کدهای بیشتر در گیت‌هاب من موجود است",
      "education.kicker": "تحصیلات",
      "education.heading": "تحصیلات و گواهینامه‌ها",
      "education.degree": "کارشناسی مهندسی کامپیوتر",
      "education.school": "دانشگاه آزاد اسلامی، اسلامشهر",
      "education.schoolDate": "۱۴۰۱ — در حال تحصیل",
      "education.cert": "دوره بوت‌کمپ .NET Core",
      "education.certDate": "مرداد ۱۴۰۳ — اردیبهشت ۱۴۰۴",
      "contact.kicker": "تماس",
      "contact.heading": "بیایید صحبت کنیم",
      "contact.lead":
        "برای فرصت‌های همکاری، سوال یا فقط یک سلام، خوشحال می‌شوم پیام شما را دریافت کنم.",
      "contact.email": "ایمیل",
      "contact.phone": "تلفن",
      "contact.phoneValue": "0993 787 3489",
      "contact.location": "موقعیت",
      "contact.website": "وب‌سایت",
      "contact.elsewhere": "من را همچنین اینجا پیدا کنید",
      "footer.rights": "تمامی حقوق محفوظ است",
    },
    en: {
      "meta.title": "MohammadMehdi Khodabandeh — Software Developer (.NET)",
      "meta.description":
        "Resume of MohammadMehdi Khodabandeh, a software developer focused on the Microsoft platform and the .NET ecosystem.",
      "a11y.skip": "Skip to main content",
      "a11y.mainNav": "Main navigation",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "a11y.scrollDown": "Scroll down",
      "brand.full": "MohammadMehdi Khodabandeh",
      "brand.short": "M. Khodabandeh",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.eyebrow": "Software Developer · .NET",
      "hero.tagline":
        "Software developer focused on the Microsoft platform and the .NET ecosystem — solving real problems with systematic thinking and clean code.",
      "hero.location": "Tehran, Iran",
      "hero.studying": "Computer Engineering student",
      "hero.ctaPrimary": "Get in Touch",
      "hero.ctaSecondary": "View GitHub",
      "about.kicker": "About",
      "about.heading": "Someone who cares about the details",
      "about.p1":
        "Software developer with over a year of hands-on experience designing and building web applications, with a particular focus on the Microsoft platform and the .NET ecosystem.",
      "about.p2":
        "Programming isn\u2019t just a job for me \u2014 it\u2019s a way to solve real problems with systematic thinking, clean architecture, and code that can grow over time.",
      "about.stat1Label": "Years experience",
      "about.stat2Label": "Projects",
      "about.stat3Label": "Certificates",
      "skills.kicker": "Skills",
      "skills.heading": "Technical stack",
      "skills.cat1": "Backend & Frameworks",
      "skills.cat2": "Data & Infrastructure",
      "skills.cat3": "Also comfortable with",
      "skills.oop": "OOP & design principles",
      "experience.kicker": "Experience",
      "experience.heading": "Work Experience",
      "experience.role": "Junior .NET Developer",
      "experience.duration": "Mar 2025 — Present",
      "experience.bullet1":
        "Designed and implemented the user authentication structure",
      "experience.bullet2":
        "Containerized the project with Docker Desktop for simpler deployment",
      "experience.bullet3":
        "Fetched, organized and displayed database data in the UI",
      "experience.bullet4":
        "Built inventory search across the site\u2019s book listings",
      "experience.moreCode": "More code samples are available on my GitHub",
      "education.kicker": "Education",
      "education.heading": "Education & Certificates",
      "education.degree": "B.Sc. in Computer Engineering",
      "education.school": "Islamic Azad University, Eslamshahr",
      "education.schoolDate": "2022 — Present",
      "education.cert": ".NET Core Bootcamp",
      "education.certDate": "Aug 2024 — Apr 2025",
      "contact.kicker": "Contact",
      "contact.heading": "Let\u2019s talk",
      "contact.lead":
        "For opportunities, questions, or just to say hello \u2014 I\u2019d be glad to hear from you.",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.phoneValue": "+98 993 787 3489",
      "contact.location": "Location",
      "contact.website": "Website",
      "contact.elsewhere": "Find me elsewhere",
      "footer.rights": "All rights reserved",
    },
  };

  var root = document.documentElement;
  var currentLang = root.getAttribute("lang") === "en" ? "en" : "fa";

  function applyLanguage(lang) {
    var dict = STRINGS[lang];
    if (!dict) return;
    currentLang = lang;

    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    document.title = dict["meta.title"];

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach(function (pair) {
          var parts = pair.split(":");
          var attr = parts[0],
            key = parts[1];
          if (attr && key && dict[key] !== undefined)
            el.setAttribute(attr, dict[key]);
        });
    });

    var toggleLabel = document.getElementById("langToggleLabel");
    if (toggleLabel) toggleLabel.textContent = lang === "fa" ? "EN" : "FA";

    var toggleBtn = document.getElementById("langToggle");
    if (toggleBtn) {
      toggleBtn.setAttribute(
        "aria-label",
        lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی",
      );
    }
  }

  /* ------------------------------------------------------------------
     2. LANGUAGE TOGGLE
     ------------------------------------------------------------------ */
  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLanguage(currentLang === "fa" ? "en" : "fa");
    });
  }

  /* ------------------------------------------------------------------
     3. MOBILE NAVIGATION
     ------------------------------------------------------------------ */
  var menuToggle = document.getElementById("menuToggle");
  var menuClose = document.getElementById("menuClose");
  var mobileNav = document.getElementById("mobileNav");

  function openMobileNav() {
    mobileNav.hidden = false;
    document.body.style.overflow = "hidden";
    menuToggle.setAttribute("aria-expanded", "true");
    menuClose.focus();
  }

  function closeMobileNav() {
    mobileNav.hidden = true;
    document.body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.focus();
  }

  if (menuToggle && mobileNav && menuClose) {
    menuToggle.addEventListener("click", openMobileNav);
    menuClose.addEventListener("click", closeMobileNav);

    mobileNav.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileNav();
    });

    mobileNav.querySelectorAll(".mobile-nav-link").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });
  }

  /* ------------------------------------------------------------------
     4. SCROLLSPY (active nav link)
     ------------------------------------------------------------------ */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link[data-section]");

  function setActive(id) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("data-section") === id;
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     5. SCROLL REVEAL
     ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var reveal = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealEls.forEach(function (el) {
      reveal.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
