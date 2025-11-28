// Khởi tạo ứng dụng
class TeaJourneyApp {
    constructor() {
        this.currentMood = null;
        this.currentSpirit = null;
        this.isMusicPlaying = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAudio();
        this.createParticles();
    }

    setupEventListeners() {
        // Welcome screen click
        document.getElementById('welcome-screen').addEventListener('click', () => {
            this.enterMainJourney();
        });

        // Mood sphere clicks — prevent default navigation from anchor links so we can open the mini-game
        document.querySelectorAll('.mood-sphere').forEach(sphere => {
            sphere.addEventListener('click', (e) => {
                // If this is an anchor, prevent navigation so the game opens in overlay first
                if (e.currentTarget.tagName.toLowerCase() === 'a') e.preventDefault();
                const mood = e.currentTarget.dataset.mood;
                this.selectMood(mood);
            });
        });

        // Music toggle
        const musicBtn = document.getElementById('music-toggle');
        musicBtn.addEventListener('click', () => {
            this.toggleMusic();
        });
        // reflect aria pressed state
        const musicPressed = () => musicBtn.setAttribute('aria-pressed', String(this.isMusicPlaying));
        // decorate the button initial state
        musicPressed();

        // Favorite toggle (heart)
        const favBtn = document.getElementById('favorite-toggle');
        favBtn.addEventListener('click', () => {
            const pressed = favBtn.getAttribute('aria-pressed') === 'true';
            favBtn.setAttribute('aria-pressed', (!pressed).toString());
            if (!pressed) {
                favBtn.classList.add('favorited');
                favBtn.textContent = '💖';
                // animate quick pulse
                favBtn.animate([{transform:'scale(1)'},{transform:'scale(1.14)'},{transform:'scale(1)'}], {duration:280, easing:'ease-out'})
            } else {
                favBtn.classList.remove('favorited');
                favBtn.textContent = '💗';
            }
            // Optionally persist favorite in localStorage (just toggle on/off)
            localStorage.setItem('tg_favorite', (!pressed) ? '1' : '0');
        });
        // Cart toggle
        const cartBtn = document.getElementById('cart-toggle');
        if (cartBtn) cartBtn.addEventListener('click', ()=> window.location.href = 'cart.html');
        // Update cart badge whenever we setup event listeners and listen for cart updates
        this.updateCartCount();
        window.addEventListener('cartUpdated', () => this.updateCartCount());

        // Spirit companion click
        document.querySelector('.spirit-character').addEventListener('click', () => {
            this.showSpiritMessage("Hãy chọn một mood để bắt đầu hành trình an yên của bạn! 🌸");
        });
    }

    enterMainJourney() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainScreen = document.getElementById('main-screen');
        
        // Thêm hiệu ứng fade out
        welcomeScreen.classList.add('fade-out');
        
        setTimeout(() => {
            welcomeScreen.classList.remove('active');
            mainScreen.classList.add('active');
            this.showSpiritMessage("Xin chào! Hãy chọn tâm trạng của bạn hôm nay...");
        }, 1000);
    }

    selectMood(mood) {
        this.currentMood = mood;
        this.summonSpirit(mood);
        this.changeEnvironment(mood);
        this.showLeafGame();
    }

    summonSpirit(mood) {
        const spirits = {
            'duong-tam': {
                name: 'Tâm Hoa',
                message: 'Trái tim bạn đang cần được chăm sóc. Hãy để Tâm Hoa dẫn bạn về sự thanh lọc và an hòa.',
                color: 'var(--duong-tam-primary)',
                icon: '🌺'
            },
            'ngu-ngon': {
                name: 'An Miên', 
                message: 'Bạn có vẻ đang mệt rồi... Để An Miên đưa bạn vào giấc ngủ êm.',
                color: 'var(--ngu-ngon-primary)',
                icon: '🌙'
            },
            'thu-gian': {
                name: 'Lưu Hương',
                message: 'Hít sâu một hơi nào... Mình sẽ giúp bạn thư giãn lại.',
                color: 'var(--thu-gian-primary)',
                icon: '🪷'
            },
            'giai-doc': {
                name: 'Mộc Thanh',
                message: 'Để mình giúp bạn làm mới cơ thể và tâm trí nhé.',
                color: 'var(--giai-doc-primary)',
                icon: '🍃'
            },
            'nang-luong': {
                name: 'Hỏa Quế',
                message: 'Tiến lên nào! Mình sẽ tiếp thêm lửa cho bạn!',
                color: 'var(--nang-luong-primary)',
                icon: '🔥'
            },
            'tinh-tao': {
                name: 'Tỉnh Phong',
                message: 'Bạn sắp hết pin rồi đúng không? Để Tỉnh Phong nạp lại năng lượng tinh thần cho bạn!',
                color: 'var(--tinh-tao-primary)',
                icon: '💨'
            }
        };

        const spirit = spirits[mood];
        this.currentSpirit = spirit;
        
        this.showSpiritMessage(spirit.message);
        this.animateSpiritAppearance(spirit);
    }

    showSpiritMessage(message) {
        const bubble = document.querySelector('.speech-bubble');
        const messageEl = document.querySelector('.spirit-message');
        
        messageEl.textContent = message;
        bubble.classList.remove('hidden');
        
        setTimeout(() => {
            bubble.classList.add('hidden');
        }, 5000);
    }

    animateSpiritAppearance(spirit) {
        const spiritEl = document.querySelector('.spirit-character');
        spiritEl.style.background = spirit.color;
        spiritEl.textContent = spirit.icon;
        spiritEl.classList.add('spirit-appear');
        
        setTimeout(() => {
            spiritEl.classList.remove('spirit-appear');
        }, 1000);
    }

    changeEnvironment(mood) {
        const mainScreen = document.getElementById('main-screen');
        
        // Thêm class để thay đổi background dựa trên mood
        mainScreen.className = 'screen active';
        mainScreen.classList.add(`mood-${mood}`);
        
        // Thay đổi gradient background
        const gradients = {
            'duong-tam': 'linear-gradient(135deg, #F8C8DC 0%, #FFE5E2 100%)',
            'ngu-ngon': 'linear-gradient(135deg, #A2D2FF 0%, #FFAFCC 100%)',
            'thu-gian': 'linear-gradient(135deg, #C8B6FF 0%, #E7C6FF 100%)',
            'giai-doc': 'linear-gradient(135deg, #CCD5AE 0%, #E9EDC9 100%)',
            'nang-luong': 'linear-gradient(135deg, #FFB4A2 0%, #FFCDB2 100%)',
            'tinh-tao': 'linear-gradient(135deg, #A2D2C8 0%, #C8F4DC 100%)'
        };
        
        mainScreen.style.background = gradients[mood] || gradients['duong-tam'];
    }

    showLeafGame() {
        const leafGame = document.getElementById('leaf-game');
        leafGame.classList.remove('hidden');
        
        // Khởi tạo mini game nếu chưa có
        if (typeof window.leafGame === 'undefined') {
            window.leafGame = new LeafGame();
        }
    }

    setupAudio() {
        this.audio = document.getElementById('background-music');
        this.audio.volume = 0.3;
    }

    // Update the cart badge to reflect current cart count
    updateCartCount() {
        const cartBtn = document.getElementById('cart-toggle');
        if (!cartBtn) return;
        const cart = JSON.parse(localStorage.getItem('teaCart')) || [];
        const count = cart.reduce((sum, it) => sum + (it.quantity || 0), 0);
        let badge = cartBtn.querySelector('.cart-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.style.cssText = 'position:absolute;top:-6px;right:-6px;background:#ff6b6b;color:#fff;border-radius:9999px;padding:2px 6px;font-size:12px;';
            cartBtn.style.position = 'relative';
            cartBtn.appendChild(badge);
        }
        badge.textContent = count > 0 ? count : '';
    }

    toggleMusic() {
        const musicBtn = document.getElementById('music-toggle');
        
        if (this.isMusicPlaying) {
            this.audio.pause();
            musicBtn.textContent = '🎵';
            musicBtn.style.background = 'rgba(255,255,255,0.9)';
        } else {
            this.audio.play().catch(e => {
                console.log('Autoplay prevented:', e);
            });
            musicBtn.textContent = '🔊';
            musicBtn.style.background = 'var(--duong-tam-primary)';
        }
        
        this.isMusicPlaying = !this.isMusicPlaying;
        musicBtn.setAttribute('aria-pressed', String(this.isMusicPlaying));
    }

    createParticles() {
        // Tạo hiệu ứng particles cho background
        // Sử dụng particles.js hoặc tạo particles thủ công
        this.createFloatingParticles();
    }

    createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        document.getElementById('main-screen').appendChild(particlesContainer);

        // Tạo các particles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createParticle(particlesContainer);
            }, i * 300);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: rgba(255,255,255,0.6);
            border-radius: 50%;
            animation: float-particle 15s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;

        // Thêm style animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        container.appendChild(particle);

        // Tự động xóa particle sau khi animation kết thúc
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }
}

// Khởi chạy ứng dụng khi DOM đã load
document.addEventListener('DOMContentLoaded', () => {
    window.teaApp = new TeaJourneyApp();
});