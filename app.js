// SKY FLORALS - MAIN E-COMMERCE & INTERACTIVE APP LOGIC

// Products Data Catalog
const catalogProducts = [
  {
    id: "sky-01",
    name: "The Hailey Monochrome",
    category: "minimalist",
    price: 165,
    tag: "Bestseller",
    image: "assets/signature_blush.jpg",
    desc: "A sculptured monochrome study in blush peonies and white calla lilies. Pure aesthetic elegance.",
    stemCount: "18 Premium Stems",
    longevity: "7-10 Days Fresh Guarantee"
  },
  {
    id: "sky-02",
    name: "Grand Romance Monolith",
    category: "grand",
    price: 265,
    tag: "Signature",
    image: "assets/hero.jpg",
    desc: "32 long-stemmed garden roses in a textured alabaster stone vase. Designed for massive emotional gestures.",
    stemCount: "32 Grand Stems",
    longevity: "8-12 Days Fresh Guarantee"
  },
  {
    id: "sky-03",
    name: "Sanctuary Ranunculus",
    category: "minimalist",
    price: 145,
    tag: "Hailey Favorite",
    image: "assets/lifestyle.jpg",
    desc: "Crisp white ranunculus paired with silver eucalyptus. Subdued, serene, and effortlessly stylish.",
    stemCount: "15 Stems",
    longevity: "7 Days Fresh Guarantee"
  },
  {
    id: "sky-04",
    name: "Unboxing Ritual Box",
    category: "rituals",
    price: 195,
    tag: "Luxury Gift Set",
    image: "assets/unboxing.jpg",
    desc: "Includes our signature floral sculpture, magnetic embossed box, wax-sealed calligraphy card, and scent spray.",
    stemCount: "22 Curated Stems",
    longevity: "10 Days Fresh Guarantee"
  },
  {
    id: "sky-05",
    name: "Sunset Terracotta Elegance",
    category: "grand",
    price: 215,
    tag: "New Season",
    image: "assets/hero.jpg",
    desc: "Warm peach tones, garden roses, and autumn wild branches. An architectural showstopper.",
    stemCount: "24 Stems",
    longevity: "8-10 Days Fresh Guarantee"
  },
  {
    id: "sky-06",
    name: "Monthly Atelier Membership",
    category: "rituals",
    price: 135,
    tag: "Subscription",
    image: "assets/lifestyle.jpg",
    desc: "Bi-weekly or monthly delivery of fresh seasonal stems + complimentary luxury vase rotation.",
    stemCount: "20 Stems / Month",
    longevity: "Fresh Stems Delivered Monthly"
  }
];

// App State
let cart = [];
let selectedCategory = 'all';

// Cart Logic
function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showToast(`Added "${item.name}" to your Bag.`);
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.id !== id);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const body = document.getElementById("cartBody");
  const totalSub = document.getElementById("cartSubtotal");
  const totalFinal = document.getElementById("cartTotal");

  const totalItemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badge) badge.innerText = totalItemCount;

  if (body) {
    if (cart.length === 0) {
      body.innerHTML = `<div class="cart-empty">Your shopping bag is empty.<br><span style="font-size:0.85rem; color:var(--text-light);">Explore our curated sculptures to begin.</span></div>`;
    } else {
      body.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <div class="cart-item-title">${item.name}</div>
            ${item.meta ? `<div class="cart-item-meta">${item.meta}</div>` : ''}
            <div class="cart-qty">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div class="cart-item-price">$${item.price * item.qty}</div>
        </div>
      `).join('');
    }
  }

  if (totalSub) totalSub.innerText = `$${subtotalPrice}`;
  if (totalFinal) totalFinal.innerText = `$${subtotalPrice > 0 ? subtotalPrice + 15 : 0}`;
}

function openCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.add("open");
}

function closeCartDrawer() {
  const overlay = document.getElementById("cartDrawerOverlay");
  if (overlay) overlay.classList.remove("open");
}

// Catalog Filter & Render
function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  const filtered = selectedCategory === 'all' 
    ? catalogProducts 
    : catalogProducts.filter(p => p.category === selectedCategory);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-thumb">
        <span class="product-tag">${p.tag}</span>
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">
          <span>${p.stemCount}</span> • <span>${p.longevity}</span>
        </div>
        <div class="product-meta">
          <div class="product-price">$${p.price}</div>
          <button class="btn-primary" style="padding:10px 20px; font-size:0.78rem;" onclick="addToCart({id: '${p.id}', name: '${p.name}', price: ${p.price}, image: '${p.image}'})">Add to Bag</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterCatalog(category, btn) {
  selectedCategory = category;
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderCatalog();
}

// US ZIP Code Validator
function checkDeliveryZip() {
  const input = document.getElementById("zipInput");
  const msg = document.getElementById("zipStatusMsg");
  if (!input || !msg) return;

  const zip = input.value.trim();
  const validZips = ["10001", "90028", "33139", "60611", "75201", "94102", "10012", "90210", "33130", "90015"];
  
  if (zip.length === 5 && !isNaN(zip)) {
    if (validZips.includes(zip) || zip.startsWith("10") || zip.startsWith("90") || zip.startsWith("33") || zip.startsWith("60") || zip.startsWith("75") || zip.startsWith("94")) {
      msg.className = "zip-status-msg success";
      msg.innerHTML = `✨ Priority Courier Available in ZIP ${zip}! Same-day delivery slots open for today.`;
    } else {
      msg.className = "zip-status-msg success";
      msg.innerHTML = `✓ Standard White-Glove Shipping Available for ZIP ${zip} (1-2 Days Guaranteed Freshness).`;
    }
  } else {
    msg.className = "zip-status-msg error";
    msg.innerHTML = `Please enter a valid 5-digit US ZIP Code (e.g. 90210, 10001, 33139).`;
  }
}

// Simulated Checkout Modal Flow
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your shopping bag is empty! Add an arrangement first.");
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.add("active");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}

function submitCheckout(e) {
  e.preventDefault();
  const modalContent = document.getElementById("modalCardContent");
  if (modalContent) {
    modalContent.innerHTML = `
      <div style="font-size:3rem; margin-bottom:16px;">🌿</div>
      <div class="hero-tag" style="margin:0 auto 16px;">Order Confirmed</div>
      <h3 class="heading-lg" style="margin-bottom:12px;">Thank You for Choosing SKY Florals</h3>
      <p style="color:var(--text-secondary); line-height:1.6; font-size:0.95rem;">
        Your order <strong>#SKY-${Math.floor(100000 + Math.random() * 900000)}</strong> has been received by our master floral artisans. 
        A courier confirmation text and live tracking link have been dispatched to your phone.
      </p>
      <div style="background:var(--bg-secondary); border-radius:var(--radius-md); padding:20px; margin:24px 0; text-align:left; font-size:0.85rem; color:var(--text-primary);">
        <div><strong>Delivery Window:</strong> Today between 2:00 PM – 5:00 PM</div>
        <div style="margin-top:6px;"><strong>Recipient Experience:</strong> Scent-Infused Unboxing Box with Calligraphy Note</div>
      </div>
      <button class="btn-primary" onclick="finishCheckoutOrder()">Return to Atelier</button>
    `;
  }
  cart = [];
  updateCartUI();
}

function finishCheckoutOrder() {
  closeCheckoutModal();
  setTimeout(() => location.reload(), 500);
}

// Toast System
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Expose globals for onclick handlers
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.filterCatalog = filterCatalog;
window.checkDeliveryZip = checkDeliveryZip;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.submitCheckout = submitCheckout;
window.finishCheckoutOrder = finishCheckoutOrder;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
});
