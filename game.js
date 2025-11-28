class LeafGame {
    constructor() {
        this.cards = [];
        this.selectedCard = null;
        this.isAnimating = false;
        this.gameData = this.getGameData();
        this.init();
    }

    getGameData() {
        return {
            'duong-tam': {
                spirit: '🌺',
                title: 'Tâm Hoa tìm thấy bạn!',
                message: 'Trái tim bạn đang cần sự dịu dàng và chăm sóc. Tâm Hoa sẽ đồng hành cùng bạn trong hành trình thanh lọc tâm hồn.',
                product: {
                    name: 'Trà Dưỡng Tâm',
                    desc: 'Dịu êm tâm hồn, ấm áp trái tim',
                    price: '45.000 ₫'
                }
            },
            'ngu-ngon': {
                spirit: '🌙',
                title: 'An Miên chào đón bạn!',
                message: 'Giấc ngủ ngon đang chờ đợi bạn. Hãy để An Miên đưa bạn vào thế giới của những giấc mơ đẹp.',
                product: {
                    name: 'Trà Ngủ Ngon',
                    desc: 'Dịu êm giấc ngủ, ngọt ngào giấc mơ',
                    price: '45.000 ₫'
                }
            },
            'thu-gian': {
                spirit: '🪷',
                title: 'Lưu Hương đồng hành cùng bạn!',
                message: 'Hương thơm dịu nhẹ sẽ giúp tâm trí bạn thư thái. Hãy tận hưởng khoảnh khắc bình yên này.',
                product: {
                    name: 'Trà Thư Giãn',
                    desc: 'Nhẹ nhàng tâm trí, thư thái tâm hồn',
                    price: '45.000 ₫'
                }
            },
            'giai-doc': {
                spirit: '🍃',
                title: 'Mộc Thanh đến với bạn!',
                message: 'Cùng nhau gột rửa mệt mỏi, đón nhận năng lượng tươi mới cho cơ thể và tâm hồn.',
                product: {
                    name: 'Trà Giải Độc',
                    desc: 'Thanh lọc cơ thể, tươi mới tâm hồn',
                    price: '45.000 ₫'
                }
            },
            'nang-luong': {
                spirit: '🔥',
                title: 'Hỏa Quế truyền lửa cho bạn!',
                message: 'Năng lượng tích cực đang chờ đợi! Hãy cùng Hỏa Quế bùng cháy với nhiệt huyết mới.',
                product: {
                    name: 'Trà Năng Lượng',
                    desc: 'Tỉnh táo tinh thần, tràn đầy sinh lực',
                    price: '45.000 ₫'
                }
            },
            'tinh-tao': {
                spirit: '💨',
                title: 'Tỉnh Phong tiếp sức cho bạn!',
                message: 'Sự tập trung và tỉnh táo đang trở lại. Hãy để Tỉnh Phong giúp bạn hoàn thành mọi mục tiêu!',
                product: {
                    name: 'Trà Tỉnh Táo',
                    desc: 'Minh mẫn tư duy, sáng suốt quyết định',
                    price: '45.000 ₫'
                }
            }
        };
    }

    init() {
        this.createGameUI();
        this.setupEventListeners();
    }

    createGameUI() {
        const gameContainer = document.getElementById('leaf-game');
        gameContainer.innerHTML = this.getGameHTML();
    }

    getGameHTML() {
        return `
            <div class="game-container">
                <div class="game-header">
                    <h2>🌿 Chọn Lá Trà Của Bạn</h2>
                    <p>Hãy lắng nghe trực giác và chọn một lá bài phù hợp với tâm trạng hiện tại</p>
                    <button class="btn-close-game">✕</button>
                </div>
                
                <div class="cards-grid">
                    ${this.getCardsHTML()}
                </div>
                
                <div class="game-result hidden">
                    <div class="result-animation">
                        <div class="spirit-avatar"></div>
                        <div class="magic-sparkles"></div>
                    </div>
                    <div class="result-content">
                        <h3 class="result-title"></h3>
                        <p class="result-message"></p>
                        <div class="recommended-product">
                            <div class="product-preview"></div>
                            <div class="product-info">
                                <h4 class="product-name"></h4>
                                <p class="product-desc"></p>
                                <div class="product-price"></div>
                            </div>
                        </div>
                        <div class="result-actions">
                            <button class="btn-explore-mood">Khám phá trà này</button>
                            <button class="btn-add-to-cart">Thêm vào Túi An Yên</button>
                            <button class="btn-try-again">Chọn lá khác</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getCardsHTML() {
        const cards = [
            { mood: 'duong-tam', icon: '🌺', label: 'Lá Dưỡng Tâm', shape: 'heart' },
            { mood: 'ngu-ngon', icon: '🌙', label: 'Lá Ngủ Ngon', shape: 'moon' },
            { mood: 'thu-gian', icon: '🪷', label: 'Lá Thư Giãn', shape: 'lotus' },
            { mood: 'giai-doc', icon: '🍃', label: 'Lá Giải Độc', shape: 'leaf' },
            { mood: 'nang-luong', icon: '🔥', label: 'Lá Năng Lượng', shape: 'flame' },
            { mood: 'tinh-tao', icon: '💨', label: 'Lá Tỉnh Táo', shape: 'wind' }
        ];

        return cards.map(card => `
            <div class="leaf-card" data-mood="${card.mood}" tabindex="0">
                <div class="card-inner">
                    <div class="card-front">
                        <div class="leaf-shape ${card.shape}"></div>
                        <div class="leaf-glow"></div>
                        <div class="card-label">${card.label}</div>
                    </div>
                    <div class="card-back">
                        <div class="spirit-reveal">${card.icon}</div>
                        <div class="mood-name">${card.label.replace('Lá ', '')}</div>
                        <div class="mood-desc">${this.getMoodDescription(card.mood)}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    getMoodDescription(mood) {
        const descriptions = {
            'duong-tam': 'Chăm sóc trái tim',
            'ngu-ngon': 'Dịu êm giấc ngủ',
            'thu-gian': 'Thư thái tâm hồn',
            'giai-doc': 'Thanh lọc cơ thể',
            'nang-luong': 'Tràn đầy sinh lực',
            'tinh-tao': 'Minh mẫn tư duy'
        };
        return descriptions[mood];
    }

    setupEventListeners() {
        // Card clicks
        const cards = document.querySelectorAll('.leaf-card') || [];
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (!this.isAnimating && !card.classList.contains('flipped')) {
                    this.selectCard(card);
                }
            });
            // keyboard support (Enter to select)
            card.addEventListener('keydown', (e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !this.isAnimating && !card.classList.contains('flipped')) {
                    e.preventDefault();
                    this.selectCard(card);
                }
            });
        });

        // Close game
        const closeBtn = document.querySelector('.btn-close-game');
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeGame());
        // Keyboard: Escape to close game
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const leafGameEl = document.getElementById('leaf-game');
                if (leafGameEl && !leafGameEl.classList.contains('hidden')) {
                    this.closeGame();
                }
            }
        });

        // Result actions
        const tryAgainBtn = document.querySelector('.btn-try-again');
        if (tryAgainBtn) tryAgainBtn.addEventListener('click', () => this.resetGame());

        const exploreBtn = document.querySelector('.btn-explore-mood');
        if (exploreBtn) exploreBtn.addEventListener('click', () => this.exploreMood());

        const addToCartBtn = document.querySelector('.btn-add-to-cart');
        if (addToCartBtn) addToCartBtn.addEventListener('click', () => this.addProductToCart());
    }

    addProductToCart() {
        if (!this.currentMood) return;
        const data = this.gameData[this.currentMood];
        if (!data) return;

        const cartItem = {
            id: this.currentMood,
            name: data.product.name,
            price: parseInt(String(data.product.price).replace(/[^0-9]/g, '')) || 45000,
            quantity: 1,
            mood: this.currentMood,
            description: data.product.desc
        };
        // save to localStorage
        let cart = JSON.parse(localStorage.getItem('teaCart')) || [];
        const existing = cart.find(it => it.id === cartItem.id);
        if (existing) existing.quantity += cartItem.quantity; else cart.push(cartItem);
        localStorage.setItem('teaCart', JSON.stringify(cart));
        try { window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } })); } catch(e){}
        try { if (window.cartSystem && typeof window.cartSystem.addItem === 'function') window.cartSystem.addItem(cartItem); } catch (e) {}
        // show success feedback
        const resultMessage = document.querySelector('.result-message');
        if (resultMessage) resultMessage.textContent = `${data.product.name} đã được thêm vào Túi An Yên!`;
    }

    selectCard(card) {
        this.isAnimating = true;
        this.selectedCard = card;
        const mood = card.dataset.mood;

        // Flip selected card
        card.classList.add('flipped');
        
        // Dim other cards
        document.querySelectorAll('.leaf-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0.3';
                otherCard.style.transform = 'scale(0.9)';
            }
        });

        // Show result after animation
        setTimeout(() => {
            this.showResult(mood);
            this.isAnimating = false;
        }, 1000);
    }

    showResult(mood) {
        const result = this.gameData[mood];
        const resultScreen = document.querySelector('.game-result');
        
        // Update result content
        document.querySelector('.spirit-avatar').textContent = result.spirit;
        document.querySelector('.result-title').textContent = result.title;
        document.querySelector('.result-message').textContent = result.message;
        
        // Update product info
        document.querySelector('.product-name').textContent = result.product.name;
        document.querySelector('.product-desc').textContent = result.product.desc;
        document.querySelector('.product-price').textContent = result.product.price;
        
        // Store current mood for navigation
        this.currentMood = mood;
        
        // Show result with animation
        resultScreen.classList.remove('hidden');
        resultScreen.classList.add('result-entrance');
        
        // Add magic sparkles
        this.createSparkles();
    }

    createSparkles() {
        const sparklesContainer = document.querySelector('.magic-sparkles');
        sparklesContainer.innerHTML = '';
        
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 2}s`;
            sparklesContainer.appendChild(sparkle);
        }
    }

    resetGame() {
        document.querySelectorAll('.leaf-card').forEach(card => {
            card.classList.remove('flipped');
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        });
        
        const resultScreen = document.querySelector('.game-result');
        if (resultScreen) {
            resultScreen.classList.add('hidden');
            resultScreen.classList.remove('result-entrance');
        }

        // cleanup sparkles
        const sparkles = document.querySelector('.magic-sparkles');
        if (sparkles) { sparkles.innerHTML = ''; }
        this.selectedCard = null;
    }

    exploreMood() {
        // Điều hướng đến trang sản phẩm tương ứng (tham số product để tương thích với product.js)
        window.location.href = `product-detail.html?product=${this.currentMood}`;
    }

    closeGame() {
        document.getElementById('leaf-game').classList.add('hidden');
        // reset for next open
        this.resetGame();
    }
}