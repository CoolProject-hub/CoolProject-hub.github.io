document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const animatedElements = document.querySelectorAll('.animated-section, .animated-header');
    
    const animateOnScroll = () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Запуск анимации при загрузке
    animateOnScroll();
    
    // Запуск анимации при скролле
    window.addEventListener('scroll', animateOnScroll);
    
    // Анимация для кнопок
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Анимация заголовков
    const titles = document.querySelectorAll('h1, h2, h3');
    
    titles.forEach(title => {
        title.style.opacity = '0';
        title.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
            title.style.opacity = '1';
        }, 300);
    });
    
    // Анимация карточек
    const cards = document.querySelectorAll('.game-card, .mod-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 400 + index * 200);
    });
});