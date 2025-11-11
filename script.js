const text = "Sistem Deteksi Kematangan Jeruk";
    const typingElement = document.getElementById("typing");
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
      if (!isDeleting) {
        typingElement.textContent = text.slice(0, index++);
        if (index > text.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1500); // jeda sebelum mulai menghapus
        } else {
          setTimeout(typeEffect, 120); // kecepatan mengetik
        }
      } else {
        typingElement.textContent = text.slice(0, index--);
        if (index < 0) {
          isDeleting = false;
          index = 0; // mulai dari awal lagi tanpa jeda kosong
          setTimeout(typeEffect, 400); 
        } else {
          setTimeout(typeEffect, 80); // kecepatan menghapus
        }
      }
    }

    typeEffect();

    const form = document.getElementById('formDeteksi');
  const hasilDiv = document.getElementById('hasilDeteksi');
  const output = document.getElementById('outputDeteksi');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    hasilDiv.classList.remove('d-none');
    output.textContent = 'Menganalisis gambar...';

    setTimeout(() => {
      // Simulasi hasil acak
      const hasil = Math.random() > 0.5 ? 'Jeruk Matang 🍊' : 'Jeruk Belum Matang 🍏';
      output.textContent = hasil;
    }, 2000);
  });
