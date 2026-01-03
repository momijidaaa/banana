const toggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav__wrapper");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isOpen);
});

// main.js

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq__question");

    question.addEventListener("click", () => {
      // 他のFAQは閉じる
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // 自分のFAQを開閉
      item.classList.toggle("active");
    });
  });
});
