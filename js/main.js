// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const booksGrid = document.querySelector('.books-grid');
const cartCount = document.querySelector('.cart-count');

// Sample Book Data
const books = [
    // Fiction (6 books)
    {
        id: 1,
        title: "The Great Adventure",
        author: "John Doe",
        price: 599.00,
        category: "fiction",
        rating: 4,
        image: "assets/images/book1.jpg"
    },
    {
        id: 2,
        title: "Mystery of the Night",
        author: "Emily Davis",
        price: 649.00,
        category: "fiction",
        rating: 5,
        image: "assets/images/book2.jpg"
    },
    {
        id: 3,
        title: "Echoes of Silence",
        author: "Rahul Sharma",
        price: 449.00,
        category: "fiction",
        rating: 4,
        image: "assets/images/book3.jpg"
    },
    {
        id: 4,
        title: "River of Dreams",
        author: "Priya Patel",
        price: 529.00,
        category: "fiction",
        rating: 5,
        image: "assets/images/book4.jpg"
    },
    {
        id: 5,
        title: "The Last Monarch",
        author: "Arjun Singh",
        price: 699.00,
        category: "fiction",
        rating: 4,
        image: "assets/images/book5.jpg"
    },
    {
        id: 6,
        title: "Whispers in the Wind",
        author: "Ananya Reddy",
        price: 379.00,
        category: "fiction",
        rating: 3,
        image: "assets/images/book6.jpg"
    },

    // Academic (6 books)
    {
        id: 7,
        title: "Science Fundamentals",
        author: "Jane Smith",
        price: 1299.00,
        category: "academic",
        rating: 5,
        image: "assets/images/book7.jpg"
    },
    {
        id: 8,
        title: "Advanced Mathematics",
        author: "Michael Wilson",
        price: 1899.00,
        category: "academic",
        rating: 3,
        image: "assets/images/book8.jpg"
    },
    {
        id: 9,
        title: "Quantum Physics Explained",
        author: "Dr. Vikram Mehta",
        price: 2199.00,
        category: "academic",
        rating: 5,
        image: "assets/images/book9.jpg"
    },
    {
        id: 10,
        title: "AI MASTERY",
        author: "Dr.Rajeev Arora",
        price: 1599.00,
        category: "academic",
        rating: 4,
        image: "assets/images/book10.jpg"
    },
    {
        id: 11,
        title: "Computer Algorithms",
        author: "Rajeev Kumar",
        price: 2499.00,
        category: "academic",
        rating: 4,
        image: "assets/images/book11.jpg"
    },
    {
        id: 12,
        title: "Organic Chemistry",
        author: "Dr. Anil Kapoor",
        price: 1799.00,
        category: "academic",
        rating: 5,
        image: "assets/images/book12.jpg"
    },

    // Children (6 books)
    {
        id: 13,
        title: "The Little Explorer",
        author: "Alice Johnson",
        price: 299.00,
        category: "children",
        rating: 4,
        image: "assets/images/book13.jpg"
    },
    {
        id: 14,
        title: "The Happy Farm",
        author: "Sarah Miller",
        price: 349.00,
        category: "children",
        rating: 5,
        image: "assets/images/book14.jpg"
    },
    {
        id: 15,
        title: "Adventures of Chhota Bheem",
        author: "Rajiv Menon",
        price: 199.00,
        category: "children",
        rating: 4,
        image: "assets/images/book15.jpg"
    },
    {
        id: 16,
        title: "Magic Pencil",
        author: "Sunita Rao",
        price: 279.00,
        category: "children",
        rating: 5,
        image: "assets/images/book16.jpg"
    },
    {
        id: 17,
        title: "Animal Kingdom",
        author: "Karan Malhotra",
        price: 429.00,
        category: "children",
        rating: 3,
        image: "assets/images/book17.jpg"
    },
    {
        id: 18,
        title: "Grandma's Stories",
        author: "Meera Gupta",
        price: 249.00,
        category: "children",
        rating: 4,
        image: "assets/images/book18.jpg"
    },

    // Non-Fiction (6 books)
    {
        id: 19,
        title: "History of the World",
        author: "Robert Brown",
        price: 899.00,
        category: "non-fiction",
        rating: 4,
        image: "assets/images/book19.jpg"
    },
    {
        id: 20,
        title: "Biography of a Leader",
        author: "David Taylor",
        price: 799.00,
        category: "non-fiction",
        rating: 4,
        image: "assets/images/book20.jpg"
    },
    {
        id: 21,
        title: "Indian Freedom Struggle",
        author: "Shashi Tharoor",
        price: 1299.00,
        category: "non-fiction",
        rating: 5,
        image: "assets/images/book21.jpg"
    },
    {
        id: 22,
        title: "Himalayan Expeditions",
        author: "Bachendri Pal",
        price: 999.00,
        category: "non-fiction",
        rating: 4,
        image: "assets/images/book22.jpg"
    },
    {
        id: 23,
        title: "Corporate India",
        author: "Narayana Murthy",
        price: 1499.00,
        category: "non-fiction",
        rating: 5,
        image: "assets/images/book23.jpg"
    },
    {
        id: 24,
        title: "India's History",
        author: "Pranab pattanaik",
        price: 1699.00,
        category: "non-fiction",
        rating: 4,
        image: "assets/images/book24.jpg"
    }
];

// Initialize Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Display Featured Books
function displayFeaturedBooks() {
    if (!booksGrid) return;
    
    const featuredBooks = books.filter(book => book.rating >= 4);
    
    booksGrid.innerHTML = featuredBooks.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-img">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">₹${book.price.toFixed(2)}</p>
                <div class="book-rating">
                    ${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}
                </div>
                <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to Cart Function
function addToCart(e) {
    const bookId = parseInt(e.target.getAttribute('data-id'));
    const book = books.find(book => book.id === bookId);
    
    // Check if book already in cart
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...book,
            quantity: 1
        });
    }
    
    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show added notification
    showNotification(`${book.title} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Display Books by Category
function displayBooksByCategory() {
    const pathParts = window.location.pathname.split('/');
    const category = pathParts[pathParts.length - 1].replace('.html', '');
    const categoryBooks = books.filter(book => book.category === category);
    const booksContainer = document.querySelector('.books-grid');
    
    if (!booksContainer) return;
    
    if (categoryBooks.length === 0) {
        booksContainer.innerHTML = '<p>No books found in this category.</p>';
        return;
    }
    
    booksContainer.innerHTML = categoryBooks.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-img">
                <img src="${window.location.pathname.includes('pages/') ? '../' : ''}${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">₹${book.price.toFixed(2)}</p>
                <div class="book-rating">
                    ${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}
                </div>
                <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Initialize Page
function init() {
    updateCartCount();
    
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/') {
        displayFeaturedBooks();
    } else if (window.location.pathname.includes('pages/')) {
        displayBooksByCategory();
    }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
