const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const galleryImages = [
  {
    title: "Lutucan 1 Elementary School",
    category: "Education",
    src: "gallery/78461a0e-bf4b-471b-98c3-1326eac55de5.jpg"
  },
  {
    title: "Manuel S. Enverga Candelaria",
    category: "Education",
    src: "gallery/8191088a-444c-49e8-a6c3-a1c6860fe622.jpg"
  },
  {
    title: "Fiel Sulit",
    category: "Personal",
    src: "gallery/a11e4d0a-204b-41b4-a1d4-b45913130404(1).jpg"
  },
  {
    title: "DEV DIVERS Poster",
    category: "Projects",
    src: "gallery/a3b566a0-d4b5-4e15-85f5-b4178f4d7697(2).jpg"
  },
  {
    title: "CSTC Campus",
    category: "Education",
    src: "gallery/cstc.jpg"
  },
  {
    title: "C++ Calculator",
    category: "Projects",
    src: "gallery/Screenshot 2026-11-03 204707.png"
  },
  { category: "Personal", src: "gallery/0c2ca2bb-cfa0-454a-9dcc-c827abd6ba10.jpg" },
  { category: "Personal", src: "gallery/1c7f5d2a-4408-49a0-89bb-bdbc97ee111b.jpg" },
  { category: "Personal", src: "gallery/2183cb41-3c08-4b4c-beb5-b8b63bcb14f0.jpg" },
  { category: "Personal", src: "gallery/259f1f9c-c31c-4fd8-9c5d-16c6930abb27.jpg" },
  { category: "Personal", src: "gallery/38df783f-45b7-44f4-b395-d4c4a628358c.jpg" },
  { category: "Personal", src: "gallery/440f4aa1-4711-47df-9059-f4020d5f1df1.jpg" },
  { category: "Personal", src: "gallery/7e2a15c6-b4f9-49c4-8137-19108aae2220.jpg" },
  { category: "Personal", src: "gallery/892aa0e1-01e8-4ac8-8699-8ee669afda69.jpg" },
  { category: "Personal", src: "gallery/a372985f-a35c-40e3-b7ff-aef28a3860dc.jpg" },
  { category: "Personal", src: "gallery/c82000fb-5d70-4a06-bf63-cb99edfc6a75.jpg" },
  { category: "Personal", src: "gallery/d1f17648-405c-4e60-bd3b-8d357b76f8de.jpg" },
  { category: "Personal", src: "gallery/d530c49d-e702-4875-9d45-a55a92a78cf0.jpg" },
  { category: "Personal", src: "gallery/f6c5c89b-a4e5-48f2-b75b-264acf4e636c.jpg" }
];

const galleryTrack = document.getElementById("galleryTrack");
const galleryCounter = document.getElementById("galleryCounter");
const galleryFilters = document.querySelectorAll(".gallery-filter");

if (galleryTrack && galleryCounter) {
  let visibleImages = [...galleryImages];

  function renderGallery() {
    galleryTrack.replaceChildren();

    visibleImages.forEach((image) => {
      const card = document.createElement("article");
      card.className = "gallery-card";
      card.setAttribute("aria-label", `${image.title}, ${image.category}`);

      const photo = document.createElement("img");
      photo.src = image.src;
      photo.alt = image.title;
      photo.loading = "lazy";

      const info = document.createElement("span");
      info.className = "gallery-card-info";
      const title = document.createElement("strong");
      title.textContent = image.title;
      const category = document.createElement("span");
      category.textContent = image.category;

      info.append(title, category);
      card.append(photo, info);
      galleryTrack.appendChild(card);
    });

    galleryCounter.textContent = `${visibleImages.length} photos`;
  }

  galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
      galleryFilters.forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
      });

      const category = button.dataset.category;
      visibleImages = category === "All"
        ? [...galleryImages]
        : galleryImages.filter((image) => image.category === category);
      renderGallery();
    });
  });

  renderGallery();
}
