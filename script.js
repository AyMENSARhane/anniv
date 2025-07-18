// Animation de confettis
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Créer des confettis en continu
setInterval(createConfetti, 300);

// Animation au clic sur les images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.images img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Effet de zoom et rotation
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';
            
            // Créer des confettis supplémentaires au clic
            for(let i = 0; i < 10; i++) {
                setTimeout(() => createConfetti(), i * 50);
            }
            
            // Retour à la normale après un délai
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Animation du titre au survol
    const title = document.querySelector('h1');
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        this.style.transition = 'all 0.3s ease';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });

    // Effet de particules flottantes
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.bottom = '-10px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        particle.style.animation = `floatUp ${3 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }

    // Ajouter l'animation CSS pour les particules flottantes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Créer des particules flottantes périodiquement
    setInterval(createFloatingParticle, 800);

    // Effet de clic sur le message
    const message = document.querySelector('.message');
    message.addEventListener('click', function() {
        // Créer une explosion de confettis
        for(let i = 0; i < 20; i++) {
            setTimeout(() => createConfetti(), i * 30);
        }
        
        // Effet de pulsation
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'all 0.2s ease';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });

    // Musique d'anniversaire (optionnel - commenté pour éviter l'autoplay)
    /*
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
    document.body.addEventListener('click', () => {
        audio.play().catch(e => console.log('Audio autoplay prevented'));
    }, { once: true });
    */
});

// Effet de neige de confettis au chargement
window.addEventListener('load', function() {
    // Explosion initiale de confettis
    for(let i = 0; i < 50; i++) {
        setTimeout(() => createConfetti(), i * 100);
    }
});

