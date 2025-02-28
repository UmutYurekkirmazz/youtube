// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Animasyon kutusu elementi
    const animasyonKutusu = document.getElementById('animasyonKutusu');
    
    // Kutuya tıklandığında çalışacak fonksiyon
    animasyonKutusu.addEventListener('click', function() {
        // Animasyon başlangıcında kutuyu döndürme
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 1s ease-in-out';
        
        // Rastgele renk oluşturma fonksiyonu
        function rastgeleRenk() {
            const harfler = '0123456789ABCDEF';
            let renk = '#';
            for (let i = 0; i < 6; i++) {
                renk += harfler[Math.floor(Math.random() * 16)];
            }
            return renk;
        }
        
        // Kutuyu rastgele bir renge boyama
        this.style.backgroundColor = rastgeleRenk();
        
        // 1 saniye sonra kutuyu büyütme
        setTimeout(() => {
            this.style.transform = 'rotate(360deg) scale(1.2)';
        }, 1000);
        
        // 2 saniye sonra kutuyu normal boyutuna döndürme
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
            this.textContent = 'Tekrar tıkla!';
        }, 2000);
    });
    
    // Başlık animasyonu
    const baslik = document.querySelector('.baslik');
    
    // Başlık üzerine gelindiğinde renk değiştirme
    baslik.addEventListener('mouseover', function() {
        this.style.color = '#FFD700'; // Altın sarısı
    });
    
    // Başlıktan ayrılınca orijinal renge dönme
    baslik.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
    
    // Sayfa yüklendiğinde başlık animasyonu
    function baslikAnimasyonu() {
        baslik.style.opacity = '0';
        baslik.style.transform = 'translateY(-20px)';
        baslik.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            baslik.style.opacity = '1';
            baslik.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Başlık animasyonunu çalıştır
    baslikAnimasyonu();
}); 