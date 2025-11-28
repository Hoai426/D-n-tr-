// Dữ liệu cho 6 loại trà với hình ảnh riêng biệt
const teaProducts = {
    'duong-tam': {
        id: 'duong-tam',
        name: 'Trà Dưỡng Tâm',
        tagline: 'Dịu êm tâm hồn, ấm áp trái tim',
        price: 45000,
        originalPrice: 45000,
        rating: '5.0 (128 đánh giá)',
        mood: 'Dưỡng Tâm',
        spirit: {
            name: 'Tâm Hoa',
            avatar: '🌺',
            message: 'Trái tim bạn đang cần được chăm sóc. Hãy để Tâm Hoa dẫn bạn về sự thanh lọc và an hòa.',
            dialogue: 'Mỗi tách trà là một cái ôm ấm áp cho tâm hồn bạn 💖'
        },
        benefits: [
            '🌿 Thanh lọc tâm trí, xua tan muộn phiền',
            '💖 Làm dịu cảm xúc, mang lại bình yên nội tâm',
            '🌸 Cân bằng năng lượng, tái tạo sinh khí',
            '🕊️ Giúp tìm lại sự an yên trong tâm hồn'
        ],
        ingredients: [
            { icon: '🍓', name: 'Dâu tằm', desc: 'Thanh lọc cơ thể' },
            { icon: '🌹', name: 'Hoa hồng', desc: 'Dịu êm tâm hồn' },
            { icon: '🍎', name: 'Táo đỏ', desc: 'Bổ khí dưỡng huyết' },
            { icon: '🍒', name: 'Kỷ tử', desc: 'Tăng cường sinh lực' }
        ],
        brewing: [
            'Cho 2-3g trà vào ấm, tráng qua nước ấm 85°C',
            'Đổ nước 85°C ngập trà, ủ trong 3-5 phút',
            'Rót trà ra tách, hít hà hương thơm và thưởng thức'
        ],
        floatingIngredients: [
            { icon: '🍓', position: '20% 10%' },
            { icon: '🌹', position: '15% 85%' },
            { icon: '🍎', position: '75% 15%' },
            { icon: '🍒', position: '80% 80%' }
        ],
        images: {
            main: 'assets/images/products/tea-duong-tam.png',
            gallery: []
        },
        colors: {
            primary: 'var(--duong-tam-primary)',
            secondary: 'var(--duong-tam-secondary)',
            accent: 'var(--duong-tam-accent)'
        }
    },
    'ngu-ngon': {
        id: 'ngu-ngon',
        name: 'Trà Ngủ Ngon',
        tagline: 'Dịu êm giấc ngủ, ngọt ngào giấc mơ',
        price: 45000,
        originalPrice: 45000,
        rating: '4.9 (156 đánh giá)',
        mood: 'Ngủ Ngon',
        spirit: {
            name: 'An Miên',
            avatar: '🌙',
            message: 'Bạn có vẻ đang mệt rồi... Để An Miên đưa bạn vào giấc ngủ êm.',
            dialogue: 'Chúc bạn có những giấc mơ ngọt ngào 🌙'
        },
        benefits: [
            '🌙 Giúp dễ đi vào giấc ngủ tự nhiên',
            '💤 Làm dịu thần kinh, giảm căng thẳng',
            '🌿 Thư giãn cơ thể, an thần nhẹ nhàng',
            '✨ Cải thiện chất lượng giấc ngủ'
        ],
        ingredients: [
            { icon: '🌼', name: 'Hoa cúc', desc: 'Giúp an thần' },
            { icon: '🪷', name: 'Tâm sen', desc: 'Thanh nhiệt' },
            { icon: '🌿', name: 'Lá vông', desc: 'Giúp ngủ ngon' },
            { icon: '⭐', name: 'Táo tàu', desc: 'Bổ tỳ an thần' }
        ],
        brewing: [
            'Cho 2-3g trà vào ấm, tráng qua nước ấm 80°C',
            'Đổ nước 80°C ngập trà, ủ trong 5-7 phút',
            'Uống trà ấm 30 phút trước khi ngủ'
        ],
        floatingIngredients: [
            { icon: '🌼', position: '25% 20%' },
            { icon: '🪷', position: '20% 75%' },
            { icon: '🌿', position: '70% 25%' },
            { icon: '⭐', position: '75% 70%' }
        ],
        images: {
            main: 'assets/images/products/tea-ngu-ngon (2).png',
            gallery: []
        },
        colors: {
            primary: 'var(--ngu-ngon-primary)',
            secondary: 'var(--ngu-ngon-secondary)',
            accent: 'var(--ngu-ngon-accent)'
        }
    },
    'thu-gian': {
        id: 'thu-gian',
        name: 'Trà Thư Giãn',
        tagline: 'Nhẹ nhàng tâm trí, thư thái tâm hồn',
        price: 45000,
        originalPrice: 45000,
        rating: '4.8 (142 đánh giá)',
        mood: 'Thư Giãn',
        spirit: {
            name: 'Lưu Hương',
            avatar: '🪷',
            message: 'Hít sâu một hơi nào... Mình sẽ giúp bạn thư giãn lại.',
            dialogue: 'Hãy tận hưởng khoảnh khắc bình yên này 🌸'
        },
        benefits: [
            '🪷 Giảm căng thẳng, mệt mỏi',
            '💫 Thư giãn tinh thần, xoa dịu lo âu',
            '🌬️ Cân bằng cảm xúc, tĩnh tâm',
            '🌿 Tạo cảm giác nhẹ nhàng, thoải mái'
        ],
        ingredients: [
            { icon: '💜', name: 'Oải hương', desc: 'Giảm căng thẳng' },
            { icon: '🤍', name: 'Hoa nhài', desc: 'Thư giãn tinh thần' },
            { icon: '🌱', name: 'Bạc hà', desc: 'Tỉnh táo nhẹ' },
            { icon: '🍋', name: 'Cam thảo', desc: 'Dịu ngọt tự nhiên' }
        ],
        brewing: [
            'Cho 2-3g trà vào ấm, tráng qua nước ấm 85°C',
            'Đổ nước 85°C ngập trà, ủ trong 4-6 phút',
            'Thưởng thức trà khi còn ấm, hít hà hương thơm'
        ],
        floatingIngredients: [
            { icon: '💜', position: '30% 15%' },
            { icon: '🤍', position: '15% 70%' },
            { icon: '🌱', position: '65% 20%' },
            { icon: '🍋', position: '70% 75%' }
        ],
        images: {
            main: 'assets/images/tea-thu-gian.png.png',
            gallery: []
        },
        colors: {
            primary: 'var(--thu-gian-primary)',
            secondary: 'var(--thu-gian-secondary)',
            accent: 'var(--thu-gian-accent)'
        }
    },
    'giai-doc': {
        id: 'giai-doc',
        name: 'Trà Giải Độc',
        tagline: 'Thanh lọc cơ thể, tươi mới tâm hồn',
        price: 45000,
        originalPrice: 45000,
        rating: '4.7 (135 đánh giá)',
        mood: 'Giải Độc',
        spirit: {
            name: 'Mộc Thanh',
            avatar: '🍃',
            message: 'Để mình giúp bạn làm mới cơ thể và tâm trí nhé.',
            dialogue: 'Cùng nhau gột rửa mệt mỏi nào! 🌿'
        },
        benefits: [
            '🍃 Thanh lọc cơ thể, đào thải độc tố',
            '💧 Hỗ trợ tiêu hóa, làm sạch đường ruột',
            '🌱 Tăng cường trao đổi chất',
            '✨ Giúp da sáng, cơ thể nhẹ nhàng'
        ],
        ingredients: [
            { icon: '🧡', name: 'Gừng', desc: 'Làm ấm cơ thể' },
            { icon: '💚', name: 'Sả', desc: 'Kháng khuẩn' },
            { icon: '🍋', name: 'Chanh', desc: 'Giàu vitamin C' },
            { icon: '🌿', name: 'Rau má', desc: 'Mát gan' }
        ],
        brewing: [
            'Cho 2-3g trà vào ấm, tráng qua nước sôi 100°C',
            'Đổ nước sôi ngập trà, ủ trong 3-5 phút',
            'Có thể uống nóng hoặc để nguội'
        ],
        floatingIngredients: [
            { icon: '🧡', position: '25% 25%' },
            { icon: '💚', position: '20% 65%' },
            { icon: '🍋', position: '65% 30%' },
            { icon: '🌿', position: '70% 70%' }
        ],
        images: {
            main: 'assets/images/tea-giai-doc.png.png',
            gallery: []
        },
        colors: {
            primary: 'var(--giai-doc-primary)',
            secondary: 'var(--giai-doc-secondary)',
            accent: 'var(--giai-doc-accent)'
        }
    },
    'nang-luong': {
        id: 'nang-luong',
        name: 'Trà Năng Lượng',
        tagline: 'Tỉnh táo tinh thần, tràn đầy sinh lực',
        price: 45000,
        originalPrice: 45000,
        rating: '4.8 (148 đánh giá)',
        mood: 'Năng Lượng',
        spirit: {
            name: 'Hỏa Quế',
            avatar: '🔥',
            message: 'Tiến lên nào! Mình sẽ tiếp thêm lửa cho bạn!',
            dialogue: 'Nạp năng lượng và bùng cháy thôi! 🔥'
        },
        benefits: [
            '🔥 Tăng cường sinh lực, xua tan mệt mỏi',
            '⚡ Cải thiện tập trung, tỉnh táo tinh thần',
            '💪 Hỗ trợ tuần hoàn máu',
            '🌟 Tạo cảm giác hưng phấn, nhiệt huyết'
        ],
        ingredients: [
            { icon: '🟫', name: 'Quế', desc: 'Làm ấm, tăng năng lượng' },
            { icon: '🍎', name: 'Táo', desc: 'Cung cấp vitamin' },
            { icon: '🌰', name: 'Thảo quả', desc: 'Kích thích tiêu hóa' },
            { icon: '🍊', name: 'Cam thảo', desc: 'Bổ khí' }
        ],
        brewing: [
            'Cho 2-3g trà vào ấm, tráng qua nước sôi 100°C',
            'Đổ nước sôi ngập trà, ủ trong 2-4 phút',
            'Uống vào buổi sáng hoặc khi cần tỉnh táo'
        ],
        floatingIngredients: [
            { icon: '🟫', position: '30% 20%' },
            { icon: '🍎', position: '20% 70%' },
            { icon: '🌰', position: '70% 25%' },
            { icon: '🍊', position: '65% 75%' }
        ],
        images: {
            main: 'assets/images/tea-nang-luong.png.png',
            gallery: []
        },
        colors: {
            primary: 'var(--nang-luong-primary)',
            secondary: 'var(--nang-luong-secondary)',
            accent: 'var(--nang-luong-accent)'
        }
    },
    'tinh-tao': {
        id: 'tinh-tao',
        name: 'Trà Tỉnh Táo',
        tagline: 'Minh mẫn tư duy, sáng suốt quyết định',
        price: 45000,
        originalPrice: 45000,
        rating: '4.9 (139 đánh giá)',
        mood: 'Tỉnh Táo',
        spirit: {
            name: 'Tỉnh Phong',
            avatar: '💨',
            message: 'Bạn sắp hết pin rồi đúng không? Để Tỉnh Phong nạp lại năng lượng tinh thần cho bạn!',
            dialogue: 'Tập trung và tỉnh táo để chinh phục mọi thử thách! 💨'
        },
        benefits: [
            '💨 Tăng cường tập trung, cải thiện trí nhớ',
            '🧠 Giúp tinh thần minh mẫn, sáng suốt',
            '⚡ Xua tan buồn ngủ, mệt mỏi',
            '🎯 Hỗ trợ tư duy logic, sáng tạo'
        ],
        ingredients: [
            { icon: '💚', name: 'Bạc hà', desc: 'Tỉnh táo tức thì' },
            { icon: '🟡', name: 'Cam thảo', desc: 'Cân bằng vị giác' },
            { icon: '🌿', name: 'Hương thảo', desc: 'Tăng cường trí nhớ' },
            { icon: '🍃', name: 'Lá sen', desc: 'Thanh nhiệt' }
        ],
        brewing: [
            'Cho 2-3g trà vào ấm, tráng qua nước 85°C',
            'Đổ nước 85°C ngập trà, ủ trong 3-4 phút',
            'Uống khi cần tập trung làm việc hoặc học tập'
        ],
        floatingIngredients: [
            { icon: '💚', position: '25% 30%' },
            { icon: '🟡', position: '30% 65%' },
            { icon: '🌿', position: '65% 35%' },
            { icon: '🍃', position: '60% 70%' }
        ],
        images: {
            main: 'assets/images/tea-tinh-tao.png.png',
            gallery: []
        },
        colors: {
            primary: 'var(--tinh-tao-primary)',
            secondary: 'var(--tinh-tao-secondary)',
            accent: 'var(--tinh-tao-accent)'
        }
    }
};

// Class chính cho trang sản phẩm
class ProductPage {
    constructor() {
        this.quantity = 1;
        this.currentProduct = this.getProductFromURL();
        this.init();
    }

    init() {
        this.loadProductData();
        this.setupEventListeners();
        this.initParticles();
        this.setupSpiritInteraction();
        this.renderOtherProducts();
    }

    // Lấy thông tin sản phẩm từ URL
    getProductFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('product') || 'duong-tam';
    }

    // Tải dữ liệu sản phẩm
    loadProductData() {
        const product = teaProducts[this.currentProduct];
        if (!product) return;

        // Cập nhật CSS variables cho màu sắc
        this.updateColors(product.colors);

        // Cập nhật thông tin sản phẩm
        this.updateProductInfo(product);
        
        // Cập nhật hình ảnh (duy nhất)
        this.updateProductImages(product);
        
        // Cập nhật ingredients floating
        this.createFloatingIngredients(product.floatingIngredients);
        
        // Cập nhật benefits và ingredients
        this.updateBenefits(product.benefits);
        this.updateIngredients(product.ingredients);
        this.updateBrewingGuide(product.brewing);
    }

    // Cập nhật màu sắc theo product
    updateColors(colors) {
        const root = document.documentElement;
        root.style.setProperty('--product-primary', `var(${colors.primary.replace('var(', '').replace(')', '')})`);
        root.style.setProperty('--product-secondary', `var(${colors.secondary.replace('var(', '').replace(')', '')})`);
        root.style.setProperty('--product-accent', `var(${colors.accent.replace('var(', '').replace(')', '')})`);
    }

    // Cập nhật thông tin sản phẩm
    updateProductInfo(product) {
        // Cập nhật các phần tử HTML
        document.getElementById('mood-badge').innerHTML = `${product.spirit.avatar} Mood ${product.mood}`;
        document.getElementById('mood-badge').style.background = `var(${product.colors.primary.replace('var(', '').replace(')', '')})`;
        
        document.getElementById('product-title').textContent = product.name;
        document.getElementById('product-tagline').textContent = product.tagline;
        document.getElementById('rating-text').textContent = product.rating;
        document.getElementById('current-price').textContent = this.formatPrice(product.price);
        document.getElementById('original-price').textContent = this.formatPrice(product.originalPrice);
        
        // Cập nhật spirit info
        document.getElementById('spirit-avatar').textContent = product.spirit.avatar;
        document.getElementById('spirit-message').textContent = product.spirit.message;
        document.getElementById('spirit-name').textContent = `- ${product.spirit.name}`;
        document.getElementById('current-spirit-name').textContent = `${product.spirit.name} đồng hành cùng bạn`;
        document.getElementById('spirit-touch').textContent = product.spirit.avatar;
        document.getElementById('spirit-dialogue').textContent = product.spirit.dialogue;
        document.getElementById('nav-spirit-icon').textContent = product.spirit.avatar;
        
        // Cập nhật placeholder
        document.getElementById('placeholder-icon').textContent = product.spirit.avatar;
        document.getElementById('placeholder-text').textContent = product.name;
    }

    // Cập nhật hình ảnh sản phẩm
    updateProductImages(product) {
        const mainImage = document.getElementById('main-product-image');
        // Build unique images array: main + gallery entries, remove duplicates and falsy
        const images = [product.images.main, ...(product.images.gallery || [])].filter(Boolean);
        const uniqueImages = [];
        images.forEach(src => { if (!uniqueImages.includes(src)) uniqueImages.push(src); });

        // Set main image to first unique image (normally the main)
        const mainSrc = uniqueImages[0] || product.images.main;
        mainImage.src = mainSrc;
        mainImage.alt = product.name;

        // Update gallery items; gallery contains any unique images beyond the main
        const galleryItems = document.querySelectorAll('.gallery-item');
        const thumbs = uniqueImages.slice(1);
        if (thumbs.length === 0) {
            // Hide gallery if no thumbnails
            document.querySelector('.product-gallery').style.display = 'none';
        } else {
            document.querySelector('.product-gallery').style.display = 'flex';
        }
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('.gallery-image');
            if (thumbs[index]) {
                img.src = thumbs[index];
                img.alt = `${product.name} - Góc nhìn ${index + 2}`; // +2 because main is index 1
                item.style.display = '';
            } else {
                img.src = '';
                img.alt = '';
                item.style.display = 'none';
            }
        });

        // Save unique images for lightbox navigation and reference
        this._currentUniqueImages = uniqueImages;
    }

    // Tạo floating ingredients
    createFloatingIngredients(ingredients) {
        const container = document.getElementById('floating-ingredients');
        container.innerHTML = '';
        
        ingredients.forEach((ingredient, index) => {
            const [top, left] = ingredient.position.split(' ');
            const div = document.createElement('div');
            div.className = 'ingredient-float';
            div.textContent = ingredient.icon;
            div.style.top = top;
            div.style.left = left;
            div.style.animationDelay = `${index * 1.5}s`;
            container.appendChild(div);
        });
    }

    // Cập nhật benefits
    updateBenefits(benefits) {
        const container = document.getElementById('benefits-list');
        container.innerHTML = '';
        
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.innerHTML = benefit;
            container.appendChild(li);
        });
    }

    // Cập nhật ingredients
    updateIngredients(ingredients) {
        const container = document.getElementById('ingredients-grid');
        container.innerHTML = '';
        
        ingredients.forEach(ingredient => {
            const div = document.createElement('div');
            div.className = 'ingredient-item';
            div.innerHTML = `
                <div class="ingredient-icon">${ingredient.icon}</div>
                <span class="ingredient-name">${ingredient.name}</span>
                <span class="ingredient-desc">${ingredient.desc}</span>
            `;
            container.appendChild(div);
        });
    }

    // Cập nhật hướng dẫn pha trà
    updateBrewingGuide(steps) {
        document.getElementById('brew-step-1').textContent = steps[0];
        document.getElementById('brew-step-2').textContent = steps[1];
        document.getElementById('brew-step-3').textContent = steps[2];
    }

    // Hiển thị các sản phẩm khác
    renderOtherProducts() {
        const container = document.getElementById('other-products');
        container.innerHTML = '';
        
        Object.values(teaProducts).forEach(product => {
            if (product.id === this.currentProduct) return;
            
            const div = document.createElement('div');
            div.className = 'other-product-card';
            div.innerHTML = `
                <div style="display:flex;gap:12px;align-items:center">
                    <img src="${product.images.main}" alt="${product.name}" style="width:64px;height:64px;object-fit:contain;border-radius:8px;" onerror="this.style.display='none'" />
                    <div style="display:flex;flex-direction:column">
                        <span class="other-product-name">${product.name}</span>
                        <div class="other-product-price">${this.formatPrice(product.price)}</div>
                        <div class="other-product-mood">Mood ${product.mood}</div>
                    </div>
                </div>
            `;
            
            div.addEventListener('click', () => {
                this.switchProduct(product.id);
            });
            
            container.appendChild(div);
        });
    }

    // Chuyển đổi sản phẩm
    switchProduct(productId) {
        // Thêm hiệu ứng chuyển tiếp
        document.querySelector('.product-hero').style.opacity = '0.7';
        
        setTimeout(() => {
            // Cập nhật URL mà không reload trang
            window.history.pushState({}, '', `?product=${productId}`);
            this.currentProduct = productId;
            this.loadProductData();
            document.querySelector('.product-hero').style.opacity = '1';
        }, 300);
    }

    // Định dạng giá
    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }

    setupEventListeners() {
        // Quantity controls
        document.querySelector('.qty-btn.minus').addEventListener('click', () => {
            this.updateQuantity(-1);
        });

        document.querySelector('.qty-btn.plus').addEventListener('click', () => {
            this.updateQuantity(1);
        });

        // Add to cart
        document.getElementById('add-to-cart-btn').addEventListener('click', () => {
            this.addToCart();
        });

        // Gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                this.changeGalleryImage(item);
            });
        });

        // Open lightbox when clicking main image or gallery image
        const mainImage = document.getElementById('main-product-image');
        mainImage.addEventListener('click', () => this.openLightbox());
        document.querySelectorAll('.gallery-item .gallery-image').forEach((img, i) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', (e) => { e.stopPropagation(); this.openLightbox(i + 1); /* +1 because index 0 is main */ });
        });

        // Xử lý browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.currentProduct = this.getProductFromURL();
            this.loadProductData();
        });

        // Lightbox controls
        document.getElementById('lightboxClose').addEventListener('click', () => this.closeLightbox());
        document.getElementById('lightboxNext').addEventListener('click', () => this.lightboxNext());
        document.getElementById('lightboxPrev').addEventListener('click', () => this.lightboxPrev());
        document.getElementById('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') this.closeLightbox(); });
        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            if (!this._lightboxImages) return;
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowRight') this.lightboxNext();
            if (e.key === 'ArrowLeft') this.lightboxPrev();
        });
    }

    updateQuantity(change) {
        this.quantity = Math.max(1, this.quantity + change);
        document.querySelector('.qty-display').textContent = this.quantity;
        
        // Animation
        const display = document.querySelector('.qty-display');
        display.classList.add('quantity-pop');
        setTimeout(() => {
            display.classList.remove('quantity-pop');
        }, 300);
    }

    addToCart() {
        const product = teaProducts[this.currentProduct];
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: this.quantity,
            mood: product.mood,
            spirit: product.spirit.name
        };

        // Animation
        this.animateAddToCart();
        
        // Hiển thị thông báo
        this.showSpiritMessage(`${product.name} đã được thêm vào Túi An Yên! ${product.spirit.avatar}`);
        
        // Lưu vào localStorage (giả lập)
        this.saveToCart(cartItem);
    }

    saveToCart(item) {
        let cart = JSON.parse(localStorage.getItem('teaCart')) || [];
        
        // Kiểm tra nếu sản phẩm đã có trong giỏ
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push(item);
        }
        
        localStorage.setItem('teaCart', JSON.stringify(cart));
        // Dispatch event so other parts of the app (badge, cart page) can update live
        try { window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } })); } catch (e) {}
        // If the cart system is loaded on the current page, update it directly
        try { if (window.cartSystem && typeof window.cartSystem.addItem === 'function') window.cartSystem.addItem(item); } catch (e) {}
    }

    animateAddToCart() {
        const btn = document.getElementById('add-to-cart-btn');
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = '✅ Đã thêm!';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #8BC34A)';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    }

    changeGalleryImage(clickedItem) {
        // Update active class
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.classList.remove('active');
        });
        clickedItem.classList.add('active');
        
        // Thay đổi hình ảnh chính
        const imageIndex = clickedItem.getAttribute('data-image');
        const mainImage = document.getElementById('main-product-image');
        const uniqueImages = this._currentUniqueImages || [mainImage.src];
        // The gallery thumbnails correspond to uniqueImages starting from index 1
        const newSrc = uniqueImages[imageIndex];
        if (newSrc) {
            mainImage.src = newSrc;
            mainImage.style.display = 'block';
            document.querySelector('.jar-placeholder').style.display = 'none';
        }
    }

    // Lightbox functionality
    openLightbox(index = 0){
        const product = teaProducts[this.currentProduct];
        const images = (this._currentUniqueImages && this._currentUniqueImages.length) ? this._currentUniqueImages : [product.images.main];
        // normalize index (if opening from main image, index 0 is main image)
        const src = images[index] || product.images.main;
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        lightboxImage.src = src;
        lightbox.classList.remove('hidden');
        // store index for navigation
        this._lightboxImages = images;
        this._lightboxIndex = index;
    }

    closeLightbox(){
        document.getElementById('lightbox').classList.add('hidden');
        this._lightboxImages = null; this._lightboxIndex = null;
    }

    lightboxNext(){
        if (!this._lightboxImages) return;
        this._lightboxIndex = (this._lightboxIndex + 1) % this._lightboxImages.length;
        document.getElementById('lightboxImage').src = this._lightboxImages[this._lightboxIndex];
    }

    lightboxPrev(){
        if (!this._lightboxImages) return;
        this._lightboxIndex = (this._lightboxIndex - 1 + this._lightboxImages.length) % this._lightboxImages.length;
        document.getElementById('lightboxImage').src = this._lightboxImages[this._lightboxIndex];
    }

    showSpiritMessage(message) {
        const dialogue = document.getElementById('spirit-dialogue');
        dialogue.textContent = message;
        
        const spiritDialogue = document.querySelector('.spirit-dialogue');
        spiritDialogue.style.opacity = '1';
        
        setTimeout(() => {
            spiritDialogue.style.opacity = '0';
        }, 3000);
    }

    initParticles() {
        // Khởi tạo particles system nếu cần
        console.log('Particles system initialized for', this.currentProduct);
    }

    setupSpiritInteraction() {
        const spirit = document.getElementById('spirit-character');
        
        spirit.addEventListener('click', () => {
            const product = teaProducts[this.currentProduct];
            const messages = [
                product.spirit.dialogue,
                "Hương vị này sẽ làm bạn ngạc nhiên đấy!",
                "Đừng quên thưởng thức trà khi còn ấm nhé!",
                "Mỗi tách trà là một câu chuyện đẹp..."
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            this.showSpiritMessage(randomMessage);
        });
    }
}

// Khởi tạo trang sản phẩm
document.addEventListener('DOMContentLoaded', () => {
    new ProductPage();
});