onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  document.addEventListener("click", () => {
    const audio = document.getElementById("type-sound");
    audio.play().catch((error) => {
      console.error("Playback failed:", error);
    });
  });
};
