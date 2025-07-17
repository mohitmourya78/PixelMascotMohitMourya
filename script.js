
  const video = document.getElementById("myVideo");
  const videoBox = document.getElementById("videobox");
  const playBtn = document.getElementById("playBtn");

  playBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    video.play();
    playBtn.style.display = "none";
  });

  videoBox.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      playBtn.style.display = "block";
    }
  });


 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;

      if (entry.isIntersecting) {
        target.classList.add('visible');

      }
    });
  }, {
    threshold: 0.3
  });



  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
  


