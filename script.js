document.addEventListener('DOMContentLoaded', () => {

    // IntersectionObserver API ile kaydırma animasyonlarını tetikle
    const observerOptions = {
        root: null, // viewport'u gözlemle
        rootMargin: '0px',
        threshold: 0.1 // Elementin %10'u göründüğünde tetikle
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Element ekrana girdi mi?
            if (entry.isIntersecting) {
                // 'is-visible' class'ını ekle (CSS bu class'ı görünce animasyonu başlatır)
                entry.target.classList.add('is-visible');
                
                // Animasyon bir kez tetiklendikten sonra gözlemlemeyi bırak
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // '.animate-on-scroll' class'ına sahip tüm elemanları seç
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Her bir elemanı gözlemle
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});