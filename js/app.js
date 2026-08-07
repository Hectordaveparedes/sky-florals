// SKY FLORALS - MAIN E-COMMERCE & INTERACTIVE APP LOGIC

// Products Data Catalog
const catalogProducts = [
  {
    id: "sky-01",
    name: "The Hailey Monochrome",
    category: "minimalist",
    price: 165,
    tag: "Bestseller",
    image: "assets/pal_blush.jpg",
    desc: "A sculptured monochrome study in blush peonies and garden roses wrapped in natural linen.",
    stemCount: "18 Premium Stems",
    longevity: "7-10 Days Fresh Guarantee"
  },
  {
    id: "sky-02",
    name: "Grand Ivory Monolith",
    category: "grand",
    price: 265,
    tag: "Signature",
    image: "assets/pal_ivory.jpg",
    desc: "32 long-stemmed white calla lilies and garden roses in a textured alabaster stone vase.",
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
    desc: "Includes our signature floral sculpture, magnetic oat linen box, Cotton Certificate of Curation, and French Rose spray.",
    stemCount: "22 Curated Stems",
    longevity: "10 Days Fresh Guarantee"
  },
  {
    id: "sky-05",
    name: "Sunset Terracotta & Gold",
    category: "grand",
    price: 215,
    tag: "New Season",
    image: "assets/pal_terracotta.jpg",
    desc: "Warm peach tones, terracotta garden roses, and wild oats in a raw travertine stone vessel.",
    stemCount: "24 Stems",
    longevity: "8-10 Days Fresh Guarantee"
  },
  {
    id: "sky-06",
    name: "Midnight Velvet Drama",
    category: "rituals",
    price: 235,
    tag: "Haute Couture",
    image: "assets/pal_midnight.jpg",
    desc: "Deep burgundy calla lilies and dark scabiosa in a matte black ceramic vase.",
    stemCount: "20 Stems",
    longevity: "8 Days Fresh Guarantee"
  }
];

// App State
let cart = [];
let selectedCategory = 'all';
let activeRegion = 'NJ'; // 'NJ' (New Jersey/NYC USA) or 'LOJA' (Loja, Ecuador)

// Location Selector Switcher
function switchLocation(region) {
  activeRegion = region;
  const barText = document.getElementById("locationBarText");
  const zipInput = document.getElementById("zipInput");
  const regionLabel = document.getElementById("regionLabel");

  if (region === 'LOJA') {
    if (barText) barText.innerText = "White-Glove Atelier Delivery Available Today in Loja & Metropolitan Area ($ USD)";
    if (zipInput) zipInput.placeholder = "Enter Delivery Zone in Loja (e.g. Centro, El Valle, San Sebastian)";
    if (regionLabel) regionLabel.innerText = "Loja, Ecuador Atelier";
    showToast("Switched active region to Loja, Ecuador Atelier");
  } else {
    if (barText) barText.innerText = "White-Glove Courier Delivery Available Today in New Jersey, NYC & Metro Regions ($ USD)";
    if (zipInput) zipInput.placeholder = "Enter 5-Digit US ZIP Code (e.g. 07030, 10001, 90210)";
    if (regionLabel) regionLabel.innerText = "New Jersey & NYC Atelier";
    showToast("Switched active region to New Jersey / NYC Atelier");
  }
}

// About Us Modal Handler
function openAboutModal(tab = 'story') {
  const modal = document.getElementById("aboutModal");
  if (modal) modal.classList.add("active");
  switchAboutTab(tab);
}

function closeAboutModal() {
  const modal = document.getElementById("aboutModal");
  if (modal) modal.classList.remove("active");
}

function switchAboutTab(tabName) {
  const tabs = document.querySelectorAll(".about-tab-btn");
  tabs.forEach(t => t.classList.remove("active"));
  
  const selectedBtn = document.getElementById(`tabBtn-${tabName}`);
  if (selectedBtn) selectedBtn.classList.add("active");

  const tabStory = document.getElementById("tabContent-story");
  const tabValues = document.getElementById("tabContent-values");
  const tabMission = document.getElementById("tabContent-mission");

  if (tabStory) tabStory.style.display = tabName === 'story' ? 'block' : 'none';
  if (tabValues) tabValues.style.display = tabName === 'values' ? 'block' : 'none';
  if (tabMission) tabMission.style.display = tabName === 'mission' ? 'block' : 'none';
}

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

// ZIP / Zone Delivery Checker
function checkDeliveryZip() {
  const input = document.getElementById("zipInput");
  const msg = document.getElementById("zipStatusMsg");
  if (!input || !msg) return;

  const val = input.value.trim();
  
  if (activeRegion === 'LOJA') {
    if (val.length > 2) {
      msg.className = "zip-status-msg success";
      msg.innerHTML = `✨ Servicio de Entregas Especializado Disponible en Loja (${val}). Entrega en 2 a 4 horas.`;
    } else {
      msg.className = "zip-status-msg error";
      msg.innerHTML = `Por favor ingresa tu sector o zona en Loja (ej: Centro, El Valle, San Sebastián).`;
    }
  } else {
    const validZips = ["10001", "90028", "33139", "60611", "75201", "94102", "10012", "90210", "33130", "90015", "07030"];
    if (val.length === 5 && !isNaN(val)) {
      if (validZips.includes(val) || val.startsWith("07") || val.startsWith("10") || val.startsWith("90") || val.startsWith("33") || val.startsWith("60") || val.startsWith("75") || val.startsWith("94")) {
        msg.className = "zip-status-msg success";
        msg.innerHTML = `✨ Priority White-Glove Courier Available in ZIP ${val}! Same-day delivery slots open.`;
      } else {
        msg.className = "zip-status-msg success";
        msg.innerHTML = `✓ Standard White-Glove Courier Available for ZIP ${val} (1-2 Days Guaranteed Freshness).`;
      }
    } else {
      msg.className = "zip-status-msg error";
      msg.innerHTML = `Please enter a valid 5-digit US ZIP Code (e.g. 07030, 90210, 10001, 33139).`;
    }
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
      <h3 class="heading-lg" style="margin-bottom:12px;">Thank You for Choosing SKY FLORALS</h3>
      <p style="color:var(--text-secondary); line-height:1.6; font-size:0.95rem;">
        Your order <strong>#SKY-${Math.floor(100000 + Math.random() * 900000)}</strong> has been received by our master floral artisans. 
        A courier confirmation text and Cotton Certificate of Curation preview have been dispatched.
      </p>
      <div style="background:var(--bg-primary); border-radius:var(--radius-md); padding:20px; margin:24px 0; text-align:left; font-size:0.85rem; color:var(--text-primary); border:1px solid var(--border-light);">
        <div><strong>Delivery Region:</strong> ${activeRegion === 'LOJA' ? 'Loja Atelier Direct Courier' : 'New Jersey / NYC White-Glove Courier'}</div>
        <div style="margin-top:6px;"><strong>Recipient Experience:</strong> Natural Linen Unboxing Box with Cotton Certificate of Curation</div>
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
window.switchLocation = switchLocation;
window.openAboutModal = openAboutModal;
window.closeAboutModal = closeAboutModal;
window.switchAboutTab = switchAboutTab;

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
});
