// Product Data
const products = [
    {
        id: '1',
        name: 'iPhone 15 Pro Max',
        price: 1199,
        originalPrice: 1299,
        category: 'smartphones',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'The most advanced iPhone ever, featuring the powerful A17 Pro chip and professional camera system.',
        features: ['A17 Pro Chip', '48MP Camera', '6.7" Display', '128GB Storage', 'iOS 17'],
        rating: 4.8,
        reviews: 2547,
        inStock: true,
        badge: 'sale'
    },
    {
        id: '2',
        name: 'MacBook Pro 14"',
        price: 1999,
        category: 'laptops',
        image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Supercharged for pros with M3 Pro chip, up to 18-hour battery life, and stunning Liquid Retina XDR display.',
        features: ['M3 Pro Chip', '16GB RAM', '512GB SSD', '14" Retina Display', 'macOS Sonoma'],
        rating: 4.9,
        reviews: 1823,
        inStock: true,
        badge: 'new'
    },
    {
        id: '3',
        name: 'Sony WH-1000XM5',
        price: 399,
        originalPrice: 449,
        category: 'headphones',
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Industry-leading noise canceling with dual noise sensor technology and exceptional sound quality.',
        features: ['Active Noise Canceling', '30h Battery Life', 'Touch Controls', 'Voice Assistant', 'Wireless'],
        rating: 4.7,
        reviews: 3241,
        inStock: true,
        badge: 'hot'
    },
    {
        id: '4',
        name: 'Samsung Galaxy S24 Ultra',
        price: 1299,
        category: 'smartphones',
        image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'The ultimate Android flagship with S Pen, 200MP camera, and AI-powered features.',
        features: ['200MP Camera', 'S Pen Included', '6.8" AMOLED', '256GB Storage', 'Android 14'],
        rating: 4.6,
        reviews: 1967,
        inStock: true,
        badge: 'new'
    },
    {
        id: '5',
        name: 'Dell XPS 13',
        price: 1199,
        category: 'laptops',
        image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Ultra-portable laptop with stunning InfinityEdge display and premium build quality.',
        features: ['Intel Core i7', '16GB RAM', '512GB SSD', '13" 4K Display', 'Windows 11'],
        rating: 4.5,
        reviews: 1456,
        inStock: true
    },
    {
        id: '6',
        name: 'AirPods Pro (2nd Gen)',
        price: 249,
        category: 'headphones',
        image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Next-generation AirPods Pro with adaptive audio and personalized spatial audio.',
        features: ['Active Noise Cancelling', 'Spatial Audio', 'H2 Chip', '6h Battery', 'MagSafe Case'],
        rating: 4.8,
        reviews: 4521,
        inStock: true,
        badge: 'hot'
    },
    {
        id: '7',
        name: 'Magic Mouse',
        price: 79,
        category: 'accessories',
        image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: 'Multi-touch mouse with seamless tracking and gesture controls for Mac.',
        features: ['Multi-Touch Surface', 'Wireless', 'Rechargeable', 'Gesture Controls', 'Mac Compatible'],
        rating: 4.3,
        reviews: 892,
        inStock: true
    },
    {
        id: '8',
        name: 'USB-C Hub Pro',
        price: 59,
        category: 'accessories',
        image: 'https://images.pexels.com/photos/163117/circuit-circuit-board-resistor-computer-163117.jpeg?auto=compress&cs=tinysrgb&w=500',
        images: [
            'https://images.pexels.com/photos/163117/circuit-circuit-board-resistor-computer-163117.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and 100W power delivery.',
        features: ['7-in-1 Hub', 'HDMI 4K', 'USB 3.0', 'SD Card Reader', '100W PD'],
        rating: 4.4,
        reviews: 657,
        inStock: true
    }
];

const categories = [
    { id: 'all', name: 'All Products', icon: '📱', count: 8 },
    { id: 'smartphones', name: 'Smartphones', icon: '📱', count: 2 },
    { id: 'laptops', name: 'Laptops', icon: '💻', count: 2 },
    { id: 'headphones', name: 'Headphones', icon: '🎧', count: 2 },
    { id: 'accessories', name: 'Accessories', icon: '🔌', count: 2 }
];

// Global State
let currentPage = 'home';
let currentUser = null;
let cart = [];
let filters = {
    category: 'all',
    priceRange: null,
    rating: null,
    inStock: false,
    search: ''
};
let isAuthLogin = true;
let currentProduct = null;
let selectedImageIndex = 0;
let productQuantity = 1;
let wishlist = [];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadFromStorage();
    initializeApp();
    updateCartCount();
});

// Storage Functions
function loadFromStorage() {
    const savedCart = localStorage.getItem('techshop-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    const savedUser = localStorage.getItem('techshop-user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    
    const savedWishlist = localStorage.getItem('techshop-wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

function saveToStorage() {
    localStorage.setItem('techshop-cart', JSON.stringify(cart));
    if (currentUser) {
        localStorage.setItem('techshop-user', JSON.stringify(currentUser));
    }
    localStorage.setItem('techshop-wishlist', JSON.stringify(wishlist));
}

// App Initialization
function initializeApp() {
    showPage('home');
    loadFeaturedProducts();
    loadCategories();
    setupEventListeners();
}

function setupEventListeners() {
    // Filter event listeners
    document.addEventListener('change', function(e) {
        if (e.target.name === 'category') {
            filters.category = e.target.value;
            filterProducts();
        } else if (e.target.name === 'priceRange') {
            const [min, max] = e.target.value.split('-').map(Number);
            filters.priceRange = { min, max };
            filterProducts();
        } else if (e.target.name === 'rating') {
            filters.rating = parseInt(e.target.value);
            filterProducts();
        } else if (e.target.id === 'inStockOnly') {
            filters.inStock = e.target.checked;
            filterProducts();
        }
    });
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Navigation Functions
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Load page-specific content
        switch (pageName) {
            case 'products':
                loadProducts();
                break;
            case 'cart':
                loadCart();
                break;
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    selectedImageIndex = 0;
    productQuantity = 1;
    
    loadProductDetail();
    showPage('productDetail');
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// Search Functions
function handleSearch(event) {
    event.preventDefault();
    const searchInput = event.target.querySelector('input');
    const query = searchInput.value.trim();
    
    if (query) {
        filters.search = query;
        showPage('products');
        document.getElementById('productsSubtitle').textContent = `Search results for "${query}"`;
    }
}

// Product Functions
function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 4);
    const grid = document.getElementById('featuredProductsGrid');
    grid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function loadProducts() {
    const filteredProducts = getFilteredProducts();
    const grid = document.getElementById('productsGrid');
    const count = document.getElementById('productsCount');
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">🔍</div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p class="text-gray-600">Try adjusting your search or filters</p>
            </div>
        `;
    } else {
        grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
    
    count.textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found`;
}

function loadCategories() {
    const categoryFilters = document.getElementById('categoryFilters');
    if (!categoryFilters) return;
    
    categoryFilters.innerHTML = categories.map(category => `
        <label class="filter-option">
            <input type="radio" name="category" value="${category.id}" ${category.id === 'all' ? 'checked' : ''}>
            <span>
                <span>${category.icon}</span>
                <span>${category.name}</span>
                <span>(${category.count})</span>
            </span>
        </label>
    `).join('');
}

function createProductCard(product) {
    const badge = product.badge ? `
        <div class="product-badge badge-${product.badge}">
            ${product.badge.toUpperCase()}
        </div>
    ` : '';
    
    const originalPrice = product.originalPrice ? `
        <span class="price-original">$${product.originalPrice.toLocaleString()}</span>
    ` : '';
    
    return `
        <div class="product-card" onclick="showProductDetail('${product.id}')">
            ${badge}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-content">
                <div class="product-header">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        <span class="star">★</span>
                        <span>${product.rating}</span>
                    </div>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">$${product.price.toLocaleString()}</span>
                        ${originalPrice}
                    </div>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                        </svg>
                    </button>
                </div>
                ${!product.inStock ? '<span class="stock-status">Out of Stock</span>' : ''}
            </div>
        </div>
    `;
}

function loadProductDetail() {
    if (!currentProduct) return;
    
    const product = currentProduct;
    const breadcrumb = document.getElementById('productBreadcrumb');
    const detail = document.getElementById('productDetail');
    
    breadcrumb.textContent = product.name;
    
    const thumbnails = product.images.length > 1 ? `
        <div class="thumbnail-grid">
            ${product.images.map((image, index) => `
                <div class="thumbnail ${index === selectedImageIndex ? 'active' : ''}" onclick="selectImage(${index})">
                    <img src="${image}" alt="${product.name} ${index + 1}">
                </div>
            `).join('')}
        </div>
    ` : '';
    
    const originalPrice = product.originalPrice ? `
        <span class="price-old">$${product.originalPrice.toLocaleString()}</span>
    ` : '';
    
    const badge = product.badge ? `
        <span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>
    ` : '';
    
    const isWishlisted = wishlist.includes(product.id);
    
    detail.innerHTML = `
        <div class="product-gallery">
            <div class="main-image">
                <img src="${product.images[selectedImageIndex] || product.image}" alt="${product.name}">
            </div>
            ${thumbnails}
        </div>
        
        <div class="product-info">
            <div>
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="product-detail-rating">
                    <div class="rating-stars">
                        ${Array.from({length: 5}, (_, i) => `
                            <span class="star ${i < Math.floor(product.rating) ? '' : 'text-gray-300'}">★</span>
                        `).join('')}
                    </div>
                    <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
            </div>
            
            <div class="product-detail-price">
                <span class="price-main">$${product.price.toLocaleString()}</span>
                ${originalPrice}
                ${badge}
            </div>
            
            <p class="product-detail-description">${product.description}</p>
            
            <div>
                <h3 class="filter-title">Key Features</h3>
                <ul class="features-list">
                    ${product.features.map(feature => `
                        <li>
                            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polyline points="20,6 9,17 4,12"></polyline>
                            </svg>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="quantity-selector">
                <span>Quantity:</span>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <span class="quantity-display" id="quantityDisplay">${productQuantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(1)">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div class="product-actions">
                <div class="action-buttons">
                    <button class="btn-primary" onclick="addToCartWithQuantity()" ${!product.inStock ? 'disabled' : ''}>
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                        </svg>
                        <span>${product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                    
                    <button class="btn-secondary ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    
                    <button class="btn-secondary" onclick="shareProduct()">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>
                
                <div class="stock-indicator ${product.inStock ? 'stock-in' : 'stock-out'}">
                    <div class="stock-dot"></div>
                    <span>${product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
            </div>
        </div>
    `;
}

function selectImage(index) {
    selectedImageIndex = index;
    loadProductDetail();
}

function changeQuantity(change) {
    const newQuantity = productQuantity + change;
    if (newQuantity >= 1) {
        productQuantity = newQuantity;
        document.getElementById('quantityDisplay').textContent = productQuantity;
    }
}

function addToCartWithQuantity() {
    if (currentProduct) {
        addToCart(currentProduct.id, productQuantity);
    }
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    saveToStorage();
    loadProductDetail(); // Refresh to update button state
}

function shareProduct() {
    if (navigator.share && currentProduct) {
        navigator.share({
            title: currentProduct.name,
            text: currentProduct.description,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Product link copied to clipboard!');
        });
    }
}

// Filter Functions
function getFilteredProducts() {
    return products.filter(product => {
        // Category filter
        if (filters.category !== 'all' && product.category !== filters.category) {
            return false;
        }
        
        // Price range filter
        if (filters.priceRange) {
            if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
                return false;
            }
        }
        
        // Rating filter
        if (filters.rating && product.rating < filters.rating) {
            return false;
        }
        
        // Stock filter
        if (filters.inStock && !product.inStock) {
            return false;
        }
        
        // Search filter
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
        
        return true;
    });
}

function filterProducts() {
    if (currentPage === 'products') {
        loadProducts();
    }
}

function toggleFilters() {
    const panel = document.getElementById('filtersPanel');
    panel.classList.toggle('hidden');
}

function clearFilters() {
    filters = {
        category: 'all',
        priceRange: null,
        rating: null,
        inStock: false,
        search: filters.search // Keep search term
    };
    
    // Reset form inputs
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    document.querySelectorAll('input[name="priceRange"]').forEach(input => {
        input.checked = false;
    });
    document.querySelectorAll('input[name="rating"]').forEach(input => {
        input.checked = false;
    });
    document.getElementById('inStockOnly').checked = false;
    
    filterProducts();
}

function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    // Implementation would sort the products array based on the selected criteria
    // For now, just reload products
    loadProducts();
}

// Cart Functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    updateCartCount();
    saveToStorage();
    
    // Show success message
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveToStorage();
    
    if (currentPage === 'cart') {
        loadCart();
    }
}

function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        updateCartCount();
        saveToStorage();
        
        if (currentPage === 'cart') {
            loadCart();
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
    
    if (count > 0) {
        document.getElementById('cartCount').style.display = 'flex';
    } else {
        document.getElementById('cartCount').style.display = 'none';
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function loadCart() {
    const cartContent = document.getElementById('cartContent');
    const cartSubtitle = document.getElementById('cartSubtitle');
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartSubtitle.textContent = `${count} item${count !== 1 ? 's' : ''} in your cart`;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                </svg>
                <h2 class="cart-empty-title">Your cart is empty</h2>
                <p class="cart-empty-text">Add some awesome products to get started!</p>
                <button class="btn-primary" onclick="showPage('products')">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12,19 5,12 12,5"></polyline>
                    </svg>
                    <span>Continue Shopping</span>
                </button>
            </div>
        `;
        return;
    }
    
    const subtotal = getCartTotal();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    cartContent.innerHTML = `
        <div class="cart-layout">
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-content">
                            <div class="cart-item-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                            
                            <div class="cart-item-info">
                                <h3 class="cart-item-title">${item.name}</h3>
                                <p class="cart-item-description">${item.description}</p>
                                <div class="cart-item-price">
                                    <span class="price-current">$${item.price.toLocaleString()}</span>
                                    ${item.originalPrice ? `<span class="price-original">$${item.originalPrice.toLocaleString()}</span>` : ''}
                                </div>
                            </div>
                            
                            <div class="cart-item-controls">
                                <div class="quantity-controls">
                                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
                                    <span class="quantity-display">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
                                </div>
                                
                                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="3,6 5,6 21,6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <div class="cart-item-total">
                            <span>Subtotal:</span>
                            <span class="price-current">$${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-summary">
                <h2 class="cart-summary-title">Order Summary</h2>
                
                <div class="cart-summary-details">
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>$${subtotal.toLocaleString()}</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax:</span>
                        <span>$${tax.toLocaleString()}</span>
                    </div>
                    <div class="summary-row summary-total">
                        <span>Total:</span>
                        <span>$${total.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="cart-actions">
                    <button class="btn-primary" onclick="checkout()">
                        Proceed to Checkout
                    </button>
                    <button class="btn-secondary" onclick="showPage('products')">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12,19 5,12 12,5"></polyline>
                        </svg>
                        <span>Continue Shopping</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function checkout() {
    if (!currentUser) {
        showNotification('Please sign in to proceed with checkout');
        toggleAuth();
        return;
    }
    
    showNotification('Checkout functionality would be implemented here');
}

// Auth Functions
function toggleAuth() {
    const modal = document.getElementById('authModal');
    modal.classList.toggle('hidden');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.add('hidden');
}

function toggleAuthMode() {
    isAuthLogin = !isAuthLogin;
    
    const title = document.getElementById('authTitle');
    const subtitle = document.getElementById('authSubtitle');
    const nameGroup = document.getElementById('nameGroup');
    const submit = document.getElementById('authSubmit');
    const toggle = document.querySelector('.auth-toggle');
    
    if (isAuthLogin) {
        title.textContent = 'Sign in to your account';
        subtitle.innerHTML = `Don't have an account? <button class="auth-toggle" onclick="toggleAuthMode()">Sign up</button>`;
        nameGroup.classList.add('hidden');
        submit.textContent = 'Sign in';
    } else {
        title.textContent = 'Create your account';
        subtitle.innerHTML = `Already have an account? <button class="auth-toggle" onclick="toggleAuthMode()">Sign in</button>`;
        nameGroup.classList.remove('hidden');
        submit.textContent = 'Sign up';
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('authPassword');
    const eyeIcon = document.querySelector('.eye-icon');
    const eyeOffIcon = document.querySelector('.eye-off-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.add('hidden');
        eyeOffIcon.classList.remove('hidden');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('hidden');
        eyeOffIcon.classList.add('hidden');
    }
}

function handleAuth(event) {
    event.preventDefault();
    
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value;
    
    if (isAuthLogin) {
        // Mock login
        currentUser = {
            id: '1',
            email,
            name: email.split('@')[0],
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
        };
    } else {
        // Mock registration
        currentUser = {
            id: '1',
            email,
            name,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
        };
    }
    
    saveToStorage();
    closeAuthModal();
    showNotification(`Welcome ${currentUser.name}!`);
}

// Contact Form
function handleContactForm(event) {
    event.preventDefault();
    showNotification('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

// Utility Functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// Performance Optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading implementation
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Service Worker Registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    showNotification('An error occurred. Please try again.');
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});