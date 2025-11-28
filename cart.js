// Cart Management System
class CartSystem {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }

    init() {
        this.renderCart();
        this.setupEventListeners();
        this.updateCartSummary();
        this.setupSpiritCompanion();
        // Listen for cart updates from other pages
        window.addEventListener('cartUpdated', () => {
            this.cart = this.loadCart();
            this.renderCart();
            this.updateCartSummary();
        });
    }

    loadCart() {
        try {
            return JSON.parse(localStorage.getItem('teaCart')) || [];
        } catch (error) {
            console.error('Error loading cart:', error);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('teaCart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    setupEventListeners() {
        // Explore teas button
        const exploreBtn = document.querySelector('.btn-explore-teas');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.checkout();
            });
        }
    }

    renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');

        if (!cartItemsContainer || !emptyCart) return;

        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = '';
            emptyCart.style.display = 'block';
            return;
        }

        emptyCart.style.display = 'none';
        
        cartItemsContainer.innerHTML = this.cart.map((item, index) => this.createCartItemHTML(item, index)).join('');
        
        // Add event listeners to the new elements
        this.addCartItemEventListeners();
    }

    createCartItemHTML(item, index) {
        const moodColors = {
            'duong-tam': { primary: 'var(--duong-tam-primary)', secondary: 'var(--duong-tam-secondary)' },
            'ngu-ngon': { primary: 'var(--ngu-ngon-primary)', secondary: 'var(--ngu-ngon-secondary)' },
            'thu-gian': { primary: 'var(--thu-gian-primary)', secondary: 'var(--thu-gian-secondary)' },
            'giai-doc': { primary: 'var(--giai-doc-primary)', secondary: 'var(--giai-doc-secondary)' },
            'nang-luong': { primary: 'var(--nang-luong-primary)', secondary: 'var(--nang-luong-secondary)' },
            'tinh-tao': { primary: 'var(--tinh-tao-primary)', secondary: 'var(--tinh-tao-secondary)' }
        };

        const moodColor = moodColors[item.mood] || moodColors.duong-tam;
        const spiritIcon = this.getSpiritIcon(item.mood);

        return `
            <div class="cart-item" data-index="${index}">
                <div class="item-image">
                    <div class="product-placeholder" style="background: ${moodColor.primary}; width: 100px; height: 100px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white;">
                        ${spiritIcon}
                    </div>
                    <div class="mood-badge" style="background: ${moodColor.secondary}">
                        ${spiritIcon}
                    </div>
                </div>
                
                <div class="item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <p class="item-desc">${item.description || 'Trà thảo mộc tự nhiên, tốt cho sức khỏe'}</p>
                    <div class="item-mood" style="color: ${moodColor.secondary}">Mood: ${this.getMoodName(item.mood)}</div>
                </div>
                
                <div class="item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn minus" data-index="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="qty-btn plus" data-index="${index}">+</button>
                    </div>
                    
                    <div class="item-price">
                        ${this.formatPrice(item.price * item.quantity)}
                    </div>
                    
                    <button class="btn-remove" data-index="${index}" title="Xóa sản phẩm">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }

    addCartItemEventListeners() {
        // Quantity minus buttons
        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.updateQuantity(index, -1);
            });
        });

        // Quantity plus buttons
        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.updateQuantity(index, 1);
            });
        });

        // Remove buttons
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.removeItem(index);
            });
        });
    }

    updateQuantity(index, change) {
        if (this.cart[index]) {
            const newQuantity = this.cart[index].quantity + change;
            
            if (newQuantity < 1) {
                this.removeItem(index);
            } else {
                this.cart[index].quantity = newQuantity;
                this.saveCart();
                this.renderCart();
                this.updateCartSummary();
                this.showCartFeedback('Đã cập nhật số lượng! ✨');
            }
        }
    }

    removeItem(index) {
        if (this.cart[index]) {
            const itemName = this.cart[index].name;
            this.cart.splice(index, 1);
            this.saveCart();
            this.renderCart();
            this.updateCartSummary();
            this.showCartFeedback(`Đã xóa ${itemName} khỏi giỏ hàng`);
        }
    }

    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 0 ? 15000 : 0;
        const discount = this.calculateDiscount(subtotal);
        const total = subtotal + shipping - discount;

        // Update DOM elements
        const subtotalEl = document.getElementById('subtotal');
        const shippingEl = document.getElementById('shipping');
        const discountEl = document.getElementById('discount');
        const totalEl = document.getElementById('total');
        const checkoutBtn = document.getElementById('checkout-btn');

        if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);
        if (shippingEl) shippingEl.textContent = this.formatPrice(shipping);
        if (discountEl) discountEl.textContent = `-${this.formatPrice(discount)}`;
        if (totalEl) totalEl.textContent = this.formatPrice(total);

        // Update checkout button state
        if (checkoutBtn) {
            if (subtotal === 0) {
                checkoutBtn.disabled = true;
                checkoutBtn.style.opacity = '0.6';
                checkoutBtn.style.cursor = 'not-allowed';
            } else {
                checkoutBtn.disabled = false;
                checkoutBtn.style.opacity = '1';
                checkoutBtn.style.cursor = 'pointer';
            }
        }
    }

    calculateDiscount(subtotal) {
        // Discount logic
        if (subtotal > 200000) return 30000;
        if (subtotal > 100000) return 15000;
        return 0;
    }

    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }

    showCartFeedback(message) {
        // Remove existing feedback
        const existingFeedback = document.querySelector('.cart-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Create new feedback
        const feedback = document.createElement('div');
        feedback.className = 'cart-feedback';
        feedback.textContent = message;
        document.body.appendChild(feedback);

        // Remove after animation
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 2000);
    }

    getSpiritIcon(mood) {
        const icons = {
            'duong-tam': '🌺',
            'ngu-ngon': '🌙',
            'thu-gian': '🪷',
            'giai-doc': '🍃',
            'nang-luong': '🔥',
            'tinh-tao': '💨'
        };
        return icons[mood] || '🌿';
    }

    getMoodName(mood) {
        const names = {
            'duong-tam': 'Dưỡng Tâm',
            'ngu-ngon': 'Ngủ Ngon',
            'thu-gian': 'Thư Giãn',
            'giai-doc': 'Giải Độc',
            'nang-luong': 'Năng Lượng',
            'tinh-tao': 'Tỉnh Táo'
        };
        return names[mood] || 'An Yên';
    }

    setupSpiritCompanion() {
        const spirit = document.querySelector('.spirit-character');
        const messageBubble = document.querySelector('.spirit-message-bubble p');

        if (spirit && messageBubble) {
            spirit.addEventListener('click', () => {
                const messages = [
                    "Mỗi hộp trà là một món quà an yên cho tâm hồn bạn 💖",
                    "Hành trình an yên của bạn sắp hoàn thành rồi!",
                    "Những gói trà này sẽ mang lại sự bình yên cho bạn mỗi ngày 🌸",
                    "Chuẩn bị đón nhận những khoảnh khắc an yên tuyệt vời nhé!",
                    "Túi An Yên của bạn chứa đầy tình yêu thương và sự chăm sóc 🫖"
                ];
                
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                messageBubble.textContent = randomMessage;
                
                // Show message bubble
                const bubble = document.querySelector('.spirit-message-bubble');
                bubble.style.opacity = '1';
                bubble.style.transform = 'translateY(0)';
                
                // Hide after 5 seconds
                setTimeout(() => {
                    bubble.style.opacity = '0';
                    bubble.style.transform = 'translateY(10px)';
                }, 5000);
            });
        }
    }

    checkout() {
        if (this.cart.length === 0) {
            this.showCartFeedback('Giỏ hàng của bạn đang trống!');
            return;
        }

        // Simulate checkout process
        this.showCartFeedback('🎉 Đơn hàng của bạn đã được xác nhận!');
        
        // Show checkout animation
        this.animateCheckout();
        
        // Clear cart after successful checkout
        setTimeout(() => {
            this.cart = [];
            this.saveCart();
            this.renderCart();
            this.updateCartSummary();
        }, 3000);
    }

    animateCheckout() {
        const checkoutBtn = document.getElementById('checkout-btn');
        const originalText = checkoutBtn.innerHTML;
        
        // Change button state
        checkoutBtn.innerHTML = '✨ Đang xử lý...';
        checkoutBtn.style.background = 'linear-gradient(135deg, #4CAF50, #8BC34A)';
        
        // Add floating animation
        checkoutBtn.style.transform = 'translateY(-5px)';
        
        // Reset after animation
        setTimeout(() => {
            checkoutBtn.innerHTML = originalText;
            checkoutBtn.style.background = 'linear-gradient(135deg, var(--duong-tam-primary), var(--duong-tam-secondary))';
            checkoutBtn.style.transform = 'translateY(0)';
        }, 2000);
    }

    // Public methods for adding items from other pages
    addItem(product) {
        const existingItemIndex = this.cart.findIndex(item => item.id === product.id);
        
        if (existingItemIndex > -1) {
            this.cart[existingItemIndex].quantity += product.quantity || 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity || 1,
                mood: product.mood,
                description: product.description
            });
        }
        
        this.saveCart();
        this.renderCart();
        this.updateCartSummary();
        return true;
    }

    getCartCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.renderCart();
        this.updateCartSummary();
    }
}

// Initialize cart system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cartSystem = new CartSystem();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartSystem;
}