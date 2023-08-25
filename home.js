document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll("[data-scroll]");

    scrollLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    const homeLink = document.querySelector("[href='#home']");

    homeLink.addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
