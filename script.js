/* ════════════════════════════════════
   DATA
════════════════════════════════════ */
const PHONE = '27797604504';

function icon(name, cls = 'icon') {
  return `<svg class="${cls}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

const KOTAS = [
  { id:'classic', name:'The Classic',   price:20, extras:['Vienna'], sauces:['Tomato Sauce'], spice:'No Spice', badge:{text:'Most Popular',cls:'badge-pop'}, image:'images/classics.jpg' },
  { id:'spicy',   name:'The Spicy One', price:25, extras:['Vienna','Cheese'], sauces:['Peri-Peri'], spice:'Hot', badge:{text:'Spicy',cls:'badge-hot'}, image:'images/spicy.jpg' },
  { id:'stacker', name:'The Stacker',   price:35, extras:['Vienna','Cheese','Bacon','Half Russian'], sauces:['Tomato Sauce'], spice:'No Spice', badge:{text:'Bestseller',cls:'badge-hot'}, image:'images/stacker.jpg' },
  { id:'king',    name:'The King',      price:50, extras:['Vienna','Cheese','Bacon','Egg','Russian','Beef Patty'], sauces:['Tomato Sauce'], spice:'No Spice', badge:{text:'The King',cls:'badge-new'}, image:'images/king.jpg' },
  { id:'special', name:'The Special',   price:55, extras:['Vienna','Double Cheese','Bacon','Egg','Russian','Beef Patty'], sauces:['Tomato Sauce'], spice:'No Spice', badge:{text:'⚡ The Special',cls:'badge-pop'}, image:'images/special.jpg' }
];

const BASE_INGS = [
  { name:'Quarter Loaf', emoji:'🍞', price:0 },
  { name:'Chips',        emoji:'🍟', price:0 },
  { name:'Atchar',       emoji:'🥭', price:0 }
];

const EXTRAS = [
  { name:'Beef Patty', emoji:'🍔', price:10 },
  { name:'Egg',        emoji:'🥚', price:5  },
  { name:'Bacon',      emoji:'🥓', price:10 },
  { name:'Cheese',     emoji:'🧀', price:8  },
  { name:'Viennas',    emoji:'🌭', price:5  },
  { name:'Russian',    emoji:'🍖', price:8  },
  { name:'Atchar',     emoji:'🥭', price:2  }
];

const KOTA_SAUCES = ['Tomato', 'Peri-Peri', 'Mayo', 'BBQ', 'Mustard', 'No Sauce'];
const SAUCE_OPTIONS = KOTA_SAUCES;

const SIDES = [
  { id:'polony_beef',    name:'Polony Beef',    emoji:'🥩', price:4  },
  { id:'polony_chicken', name:'Polony Chicken', emoji:'🍗', price:4  },
  { id:'polony_pork',    name:'Polony Pork',    emoji:'🐷', price:4  },
  { id:'atchar',         name:'Atchar',         emoji:'🥭', price:2  },
  { id:'beef_patty',     name:'Beef Patty',     emoji:'🍔', price:10 },
  { id:'vienna',         name:'Vienna',         emoji:'🌭', price:5  },
  { id:'russian',        name:'Russian',        emoji:'🍖', price:8  },
  { id:'egg',            name:'Egg',            emoji:'🥚', price:5  },
  { id:'bacon',          name:'Bacon',          emoji:'🥓', price:10 },
  { id:'cheese',         name:'Cheese',         emoji:'🧀', price:8  },
  { id:'chips_small',    name:'Chips (Small)',  emoji:'🍟', price:15 },
  { id:'chips_medium',   name:'Chips (Medium)', emoji:'🍟', price:20 },
  { id:'chips_large',    name:'Chips (Large)',  emoji:'🍟', price:25 }
];

const DRINKS = [
  { id:'coke_330',     name:'Coca-Cola 330ml',  category:'soft',    emoji:'🥤', color:'#E63329', price:12, ml:'330ml' },
  { id:'coke_500',     name:'Coca-Cola 500ml',  category:'soft',    emoji:'🥤', color:'#E63329', price:15, ml:'500ml' },
  { id:'coke_2l',      name:'Coca-Cola 2L',     category:'soft',    emoji:'🥤', color:'#E63329', price:30, ml:'2L'    },
  { id:'fanta_330',    name:'Fanta 330ml',      category:'soft',    emoji:'🧡', color:'#F07A1A', price:12, ml:'330ml' },
  { id:'fanta_500',    name:'Fanta 500ml',      category:'soft',    emoji:'🧡', color:'#F07A1A', price:15, ml:'500ml' },
  { id:'fanta_2l',     name:'Fanta 2L',         category:'soft',    emoji:'🧡', color:'#F07A1A', price:30, ml:'2L'    },
  { id:'sprite_330',   name:'Sprite 330ml',     category:'soft',    emoji:'💚', color:'#25D366', price:12, ml:'330ml' },
  { id:'sprite_500',   name:'Sprite 500ml',     category:'soft',    emoji:'💚', color:'#25D366', price:15, ml:'500ml' },
  { id:'sprite_2l',    name:'Sprite 2L',        category:'soft',    emoji:'💚', color:'#25D366', price:30, ml:'2L'    },
  { id:'pepsi_500',    name:'Pepsi 500ml',      category:'soft',    emoji:'🔵', color:'#1E3A8A', price:18, ml:'500ml' },
  { id:'lipton_peach', name:'Lipton Peach',     category:'refresh', emoji:'🧃', color:'#D97706', price:20, ml:'500ml' },
  { id:'lipton_lemon', name:'Lipton Lemon',     category:'refresh', emoji:'🧃', color:'#CA8A04', price:20, ml:'500ml' },
  { id:'powerade',     name:'Powerade 500ml',   category:'energy',  emoji:'⚡', color:'#7C3AED', price:22, ml:'500ml' }
];

const POPULAR_COMBOS = [
  {
    label:'Classic Meal', badge:'🔥 Most Ordered', originalPrice:65,
    items:[
      { label:'The Classic Kota', price:20, id:'kota_classic' },
      { label:'Small Fries',      price:15, id:'side_chips_small' },
      { label:'Coca-Cola 500ml',  price:15, id:'drink_coke_500' }
    ],
    total:50, emoji:'🍔', color:'#E63329',
    extras:['Vienna','Polony','Chips','Atchar']
  },
  {
    label:'King Meal', badge:'👑 Best Value', originalPrice:null,
    items:[
      { label:'The King Kota', price:50, id:'kota_king' },
      { label:'Large Fries',   price:25, id:'side_chips_large' },
      { label:'Pepsi 500ml',   price:18, id:'drink_pepsi_500' }
    ],
    total:93, emoji:'👑', color:'#F5C518',
    extras:['Vienna','Cheese','Bacon','Egg','Russian','Beef Patty']
  },
  {
    label:'Spicy Combo', badge:'🌶️ Spicy Favourite', originalPrice:null,
    items:[
      { label:'The Spicy One Kota', price:25, id:'kota_spicy' },
      { label:'Medium Fries',       price:20, id:'side_chips_medium' },
      { label:'Sprite 500ml',       price:15, id:'drink_sprite_500' }
    ],
    total:60, emoji:'🌶️', color:'#25D366',
    extras:['Vienna','Cheese','Peri-Peri sauce','Hot spice']
  }
];

const DEAL_FREE_DELIVERY_MIN = 50;
const DEAL_DELIVERY_FEE      = 10;
const DEAL_DISCOUNT_MIN      = 100;
const DEAL_DISCOUNT_PCT      = 10;
const FATCAKE_PRICE          = 2;

let cart         = [];
let deliveryType = 'collection';
let fatcakeQty   = 0;
let freeFatcakeDeclined = false;

const customKota = {
  preset:null, presetExtras:[], removedBase:[], extras:[], spice:null,
  sauces:[], basePrice:15, polony:null
};

/* ════════════════════════════════════
   HELPERS
════════════════════════════════════ */
function drinkLogoMarkup(drink, cls = 'drink-tile-logo') {
  return `<span class="${cls} is-fallback" aria-label="${drink.name}">${drink.emoji}</span>`;
}

function slugPart(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'');
}

function getSauceEmoji(sauce) {
  const map = { 'Tomato':'🍅','Peri-Peri':'🌶️','Mayo':'🤍','BBQ':'🍖','Mustard':'🥭','No Sauce':'🚫' };
  return map[sauce] || '';
}

/* ════════════════════════════════════
   PAGE LOAD
════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildKotaCards();
  buildFatcakeCards();
  buildFriesDrinksCards();
  buildAccordionContent();
  buildCombos();
  loadRecentOrders();
  renderCart();
  startDealTimer();
});

/* ════════════════════════════════════
   DEAL TIMER
════════════════════════════════════ */
function startDealTimer() {
  function update() {
    const now = new Date(), midnight = new Date(now);
    midnight.setHours(24,0,0,0);
    const diff = midnight - now;
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const el = document.getElementById('dealTimer');
    if (el) el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  update(); setInterval(update, 1000);
}

/* ════════════════════════════════════
   DELIVERY TYPE
════════════════════════════════════ */
function setDeliveryType(type) {
  deliveryType = type;
  document.getElementById('btnCollection').classList.toggle('active', type === 'collection');
  document.getElementById('btnDelivery').classList.toggle('active',   type === 'delivery');
  renderCart();
}

/* ════════════════════════════════════
   DEAL PROGRESS BARS
════════════════════════════════════ */
function updateDealProgress(total) {
  const dpEl   = document.getElementById('deliveryProgressFill');
  const dpText = document.getElementById('deliveryProgressText');
  if (dpEl && dpText) {
    dpEl.style.width = Math.min(100,(total/DEAL_FREE_DELIVERY_MIN)*100) + '%';
    dpText.textContent = total >= DEAL_FREE_DELIVERY_MIN
      ? '✅ Free delivery unlocked!'
      : `R${DEAL_FREE_DELIVERY_MIN - total} away from free delivery`;
  }
  const discEl   = document.getElementById('discountProgressFill');
  const discText = document.getElementById('discountProgressText');
  if (discEl && discText) {
    discEl.style.width = Math.min(100,(total/DEAL_DISCOUNT_MIN)*100) + '%';
    discText.textContent = total >= DEAL_DISCOUNT_MIN
      ? '✅ 10% discount unlocked!'
      : `R${DEAL_DISCOUNT_MIN - total} away from 10% off`;
  }
}

/* ════════════════════════════════════
   ACCORDION
════════════════════════════════════ */
function togglePanel(panelId) {
  const panel  = document.getElementById(panelId);
  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.acc-panel').forEach(p => p.classList.remove('open'));
  if (!isOpen) panel.classList.add('open');
}

function openPanel(panelId) {
  document.querySelectorAll('.acc-panel').forEach(p => p.classList.remove('open'));
  const panel = document.getElementById(panelId);
  if (panel) {
    panel.classList.add('open');
    setTimeout(() => panel.scrollIntoView({ behavior:'smooth', block:'start' }), 100);
  }
}

/* ════════════════════════════════════
   SAUCE PICKER MODAL
════════════════════════════════════ */
const POLONY_OPTIONS = [
  { value:'Polony Beef',    emoji:'🥩', label:'Beef'    },
  { value:'Polony Chicken', emoji:'🍗', label:'Chicken' },
  { value:'Polony Pork',    emoji:'🐷', label:'Pork'    }
];

function openSaucePicker(kotaId, onConfirm) {
  const kota = KOTAS.find(k => k.id === kotaId);
  if (!kota) return;
  document.getElementById('saucePickerModal')?.remove();
  let selectedPolony = null;
  let step = 'polony';

  const modal = document.createElement('div');
  modal.id = 'saucePickerModal';
  modal.style.cssText = `position:fixed;inset:0;z-index:400;background:rgba(26,18,8,0.82);display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(6px);animation:fadeInOverlay 0.2s ease;`;

  function renderStep() {
    const isPolony = step === 'polony';
    modal.innerHTML = `
      <div style="background:#fff;border-radius:22px;padding:28px 24px;max-width:380px;width:100%;animation:slideUpConfirm 0.3s cubic-bezier(0.32,0.72,0,1);box-shadow:0 24px 60px rgba(0,0,0,0.35);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <img src="${kota.image}" alt="${kota.name}" style="width:52px;height:52px;border-radius:12px;object-fit:cover;flex-shrink:0;">
          <div style="flex:1;">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:22px;color:#1a1208;line-height:1.1;">${kota.name} — R${kota.price}</div>
            <div style="display:flex;gap:6px;margin-top:6px;">
              <div style="flex:1;height:4px;border-radius:99px;background:#1a1208;"></div>
              <div style="flex:1;height:4px;border-radius:99px;background:${!isPolony?'#1a1208':'#f0e8d8'};"></div>
            </div>
            <div style="font-size:10px;color:#9a7050;margin-top:4px;font-weight:700;">Step ${isPolony?'1':'2'} of 2 — ${isPolony?'Choose polony type':'Choose sauce'}</div>
          </div>
        </div>
        ${isPolony ? `
          <div style="font-size:11px;font-weight:800;color:#9a7050;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">🥩 Choose your polony</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px;" id="polonyPickerOptions">
            ${POLONY_OPTIONS.map(p => `
              <button data-polony="${p.value}" onclick="pickPolonyBtn(this)"
                style="background:#fff8f0;border:1.5px solid #f0e8d8;border-radius:14px;padding:14px 8px;font-size:12px;font-weight:800;color:#1a1208;cursor:pointer;font-family:'Nunito',sans-serif;text-align:center;transition:all 0.15s;">
                <span style="font-size:26px;display:block;margin-bottom:6px;">${p.emoji}</span>${p.label}
              </button>`).join('')}
          </div>
          <button id="polonyNextBtn" disabled
            style="width:100%;background:#ddd;color:#fff;border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:800;cursor:not-allowed;font-family:'Nunito',sans-serif;transition:all 0.2s;">
            Next — Choose Sauce →
          </button>
        ` : `
          <div style="font-size:11px;font-weight:800;color:#9a7050;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">🍅 Pick your sauce(s)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px;" id="saucePickerOptions">
            ${SAUCE_OPTIONS.map(s => `
              <button class="sauce-pick-btn" data-sauce="${s}" onclick="toggleSaucePick(this)"
                style="background:#fff8f0;border:1.5px solid #f0e8d8;border-radius:12px;padding:10px 12px;font-size:13px;font-weight:700;color:#1a1208;cursor:pointer;font-family:'Nunito',sans-serif;text-align:left;transition:all 0.15s;">
                ${getSauceEmoji(s)} ${s}
              </button>`).join('')}
          </div>
          <button id="sauceConfirmBtn"
            style="width:100%;background:#1a1208;color:#fff;border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Nunito',sans-serif;transition:background 0.2s;"
            onmouseover="this.style.background='#E63329'" onmouseout="this.style.background='#1a1208'">
            Add to Order →
          </button>
        `}
        <button onclick="document.getElementById('saucePickerModal').remove()"
          style="display:block;width:100%;margin-top:8px;background:transparent;border:none;padding:8px;font-size:13px;font-weight:700;color:#9a7050;cursor:pointer;font-family:'Nunito',sans-serif;">
          Cancel
        </button>
      </div>`;

    if (isPolony) {
      window.pickPolonyBtn = (btn) => {
        document.querySelectorAll('#polonyPickerOptions button').forEach(b => {
          b.style.background='#fff8f0'; b.style.borderColor='#f0e8d8'; b.style.color='#1a1208';
        });
        btn.style.background='#1a1208'; btn.style.borderColor='#1a1208'; btn.style.color='#fff';
        selectedPolony = btn.dataset.polony;
        const nb = document.getElementById('polonyNextBtn');
        if (nb) { nb.disabled=false; nb.style.background='#1a1208'; nb.style.cursor='pointer'; nb.onmouseover=()=>nb.style.background='#E63329'; nb.onmouseout=()=>nb.style.background='#1a1208'; }
      };
      document.getElementById('polonyNextBtn').onclick = () => {
        if (!selectedPolony) return;
        step = 'sauce'; renderStep();
      };
    } else {
      document.getElementById('sauceConfirmBtn').onclick = () => {
        const sel = [...document.querySelectorAll('#saucePickerOptions .sauce-pick-btn[data-active="true"]')].map(b=>b.dataset.sauce);
        const sauces = sel.length ? sel : ['No Sauce'];
        document.getElementById('saucePickerModal').remove();
        if (typeof onConfirm === 'function') onConfirm(sauces, selectedPolony);
      };
    }
  }

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  renderStep();
}

function toggleSaucePick(btn) {
  const isActive = btn.getAttribute('data-active') === 'true';
  if (btn.dataset.sauce === 'No Sauce') {
    document.querySelectorAll('#saucePickerOptions .sauce-pick-btn').forEach(b => {
      b.style.background = '#fff8f0'; b.style.borderColor = '#f0e8d8';
      b.style.color = '#1a1208'; b.removeAttribute('data-active');
    });
    btn.style.background = '#1a1208'; btn.style.borderColor = '#1a1208';
    btn.style.color = '#fff'; btn.setAttribute('data-active','true');
    return;
  }
  // deselect No Sauce when another picked
  document.querySelectorAll('#saucePickerOptions .sauce-pick-btn').forEach(b => {
    if (b.dataset.sauce === 'No Sauce') {
      b.style.background = '#fff8f0'; b.style.borderColor = '#f0e8d8';
      b.style.color = '#1a1208'; b.removeAttribute('data-active');
    }
  });
  if (isActive) {
    btn.style.background = '#fff8f0'; btn.style.borderColor = '#f0e8d8';
    btn.style.color = '#1a1208'; btn.removeAttribute('data-active');
  } else {
    btn.style.background = '#E63329'; btn.style.borderColor = '#E63329';
    btn.style.color = '#fff'; btn.setAttribute('data-active','true');
  }
}

function _addKotaToCart(kotaId, sauces, polony) {
  const kota      = KOTAS.find(k => k.id === kotaId);
  if (!kota) return;
  const polonyPart = polony ? `Polony: ${polony.replace('Polony ','')}` : '';
  const sauceNote  = [`Sauce: ${sauces.join(', ')}`, polonyPart].filter(Boolean).join(' | ');
  const cartId    = `kota_${kotaId}`;
  const existing  = cart.find(c => c.id === cartId);
  if (existing) {
    existing.qty  += 1;
    existing.notes = sauceNote;
  } else {
    cart.push({ id:cartId, label:`${kota.name} Kota`, price:kota.price, qty:1, notes:sauceNote });
  }
  const qEl = document.getElementById('kotaqty_' + kotaId);
  if (qEl) qEl.textContent = cart.find(c => c.id === cartId)?.qty || 0;
  renderCart();
  flashCartBar();
}

function flashCartBar() {
  const bar = document.getElementById('cartBar');
  if (bar) { bar.style.transform = 'translateY(-4px)'; setTimeout(() => bar.style.transform = '', 200); }
}

/* ════════════════════════════════════
   POPULAR COMBOS
════════════════════════════════════ */
function buildCombos() {
  const grid = document.getElementById('combosGrid');
  if (!grid) return;
  grid.innerHTML = POPULAR_COMBOS.map((combo, i) => {
    const saving = combo.originalPrice ? combo.originalPrice - combo.total : null;
    return `
      <div class="combo-v3" id="comboCard${i}" style="--ca:${combo.color};">
        <div class="combo-v3-head">
          <div class="combo-v3-meta">
            <div class="combo-v3-emoji">${combo.emoji}</div>
            <div class="combo-v3-label">${combo.label}</div>
            <div class="combo-v3-badge">${combo.badge}</div>
          </div>
          <div class="combo-v3-price-block">
            ${saving ? `<div class="combo-v3-was">R${combo.originalPrice}</div>` : ''}
            <div class="combo-v3-price">R${combo.total}</div>
            ${saving ? `<div class="combo-v3-save">Save R${saving}</div>` : ''}
          </div>
        </div>
        <div class="combo-v3-items">
          ${combo.items.map(it => `
            <span class="combo-v3-item">
              ${getItemEmoji(it.id, it.label)} ${it.label.replace(' Kota','').replace(' Fries','')}
            </span>`).join('')}
        </div>
        <div class="combo-v3-expand" onclick="toggleComboDetails(${i})" id="comboExpandBtn${i}">
          <span>What's inside ▾</span>
        </div>
        <div class="combo-v3-details" id="comboDetails${i}" style="display:none;">
          <div class="combo-v3-details-inner">
            ${combo.extras.map(e => `<span class="combo-v3-extra">✓ ${e}</span>`).join('')}
          </div>
        </div>
        <button class="combo-v3-btn" onclick="addCombo(${i})" type="button">
          Add Combo${saving ? ` · Save R${saving}` : ''}
          <span class="combo-v3-btn-arrow">→</span>
        </button>
      </div>`;
  }).join('');
}

function toggleComboDetails(i) {
  const details = document.getElementById('comboDetails' + i);
  const btn     = document.getElementById('comboExpandBtn' + i);
  if (!details) return;
  const isOpen = details.style.display !== 'none';
  details.style.display = isOpen ? 'none' : 'block';
  btn.innerHTML = isOpen ? '<span>What\'s inside ▾</span>' : '<span>Hide details ▴</span>';
}

function addCombo(i) {
  const combo      = POPULAR_COMBOS[i];
  const kotaItems  = combo.items.filter(it => it.id.startsWith('kota_'));
  const otherItems = combo.items.filter(it => !it.id.startsWith('kota_'));

  // Add non-kota items silently
  otherItems.forEach(item => silentAdd(item.label, item.price, item.id));

  if (!kotaItems.length) {
    flashComboCard(i); return;
  }
  // Show sauce picker sequentially for each kota
  pickSaucesSequentially(kotaItems, 0, i);
}

function pickSaucesSequentially(kotaItems, index, comboIndex) {
  const item   = kotaItems[index];
  const kotaId = item.id.replace('kota_','');
  const total  = kotaItems.length;

  // Inject step label before opening picker
  openSaucePicker(kotaId, (sauces) => {
    _addKotaToCart(kotaId, sauces);
    if (index + 1 < total) {
      setTimeout(() => pickSaucesSequentially(kotaItems, index + 1, comboIndex), 150);
    } else {
      flashComboCard(comboIndex);
    }
  });

  // Add step label if multiple kotas
  if (total > 1) {
    setTimeout(() => {
      const modal = document.getElementById('saucePickerModal');
      if (modal) {
        const stepEl = document.createElement('div');
        stepEl.style.cssText = 'font-size:11px;color:#9a7050;font-weight:700;margin-bottom:10px;text-align:center;';
        stepEl.textContent = `Kota ${index + 1} of ${total}`;
        modal.querySelector('div').prepend(stepEl);
      }
    }, 50);
  }
}

function flashComboCard(i) {
  const card = document.getElementById('comboCard' + i);
  if (card) {
    card.style.borderColor = 'var(--green)';
    setTimeout(() => card.style.borderColor = '', 700);
  }
}

/* ════════════════════════════════════
   ORDER HISTORY
════════════════════════════════════ */
function saveOrderToHistory(orderData) {
  try {
    const history = JSON.parse(localStorage.getItem('kk_orders') || '[]');
    history.unshift(orderData);
    localStorage.setItem('kk_orders', JSON.stringify(history.slice(0,3)));
  } catch(e) {}
}

function loadRecentOrders() {
  try {
    const history = JSON.parse(localStorage.getItem('kk_orders') || '[]');
    const section = document.getElementById('reorderSection');
    const list    = document.getElementById('reorderList');
    if (!section || !list) return;
    if (!history.length) { section.style.display = 'none'; list.innerHTML = ''; return; }
    section.style.display = 'block';
    list.innerHTML = history.map((order, i) => `
      <div class="reorder-card">
        <div class="reorder-card-top">
          <div class="reorder-info">
            <div class="reorder-name">${order.name}</div>
            <div class="reorder-items">${order.items.slice(0,3).map(it => `${it.qty&&it.qty>1?it.qty+'x ':''}${it.label}`).join(', ')}${order.items.length>3?' + more':''}</div>
            <div class="reorder-date">${order.date}</div>
          </div>
          <div class="reorder-total">R${order.total}</div>
          <div class="reorder-actions">
            <button class="reorder-expand-btn" onclick="toggleReorderDetails(${i})" id="expandBtn${i}">Details ▾</button>
            <button class="reorder-btn" onclick="reorder(${i})">${icon('repeat','icon icon-inline')} Reorder</button>
          </div>
        </div>
        <div class="reorder-details" id="reorderDetails${i}" style="display:none;">
          <div class="reorder-details-inner">
            <div class="reorder-details-title">Order breakdown</div>
            ${order.items.map(it => `
              <div class="reorder-detail-line">
                <span class="reorder-detail-emoji">${getItemEmoji(it.id, it.label)}</span>
                <span class="reorder-detail-name">${it.qty&&it.qty>1?it.qty+'x ':''}${it.label}</span>
                <span class="reorder-detail-price">R${it.price*(it.qty||1)}</span>
              </div>`).join('')}
            <div class="reorder-detail-total"><span>Total paid</span><span>R${order.total}</span></div>
          </div>
        </div>
      </div>`).join('');
  } catch(e) {}
}

function toggleReorderDetails(i) {
  const details = document.getElementById('reorderDetails' + i);
  const btn     = document.getElementById('expandBtn' + i);
  if (!details) return;
  const isOpen = details.style.display !== 'none';
  details.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? 'Details ▾' : 'Hide ▴';
}

function reorder(i) {
  try {
    const history = JSON.parse(localStorage.getItem('kk_orders') || '[]');
    const order   = history[i];
    if (!order) return;
    const kotaItems  = order.items.filter(it => it.id && it.id.startsWith('kota_'));
    const otherItems = order.items.filter(it => !it.id || !it.id.startsWith('kota_'));
    otherItems.forEach(item => {
      for (let c = 0; c < (item.qty||1); c++) silentAdd(item.label, item.price, item.id);
    });
    if (kotaItems.length) {
      pickSaucesSequentially(kotaItems.map(it => ({ id:it.id, label:it.label, price:it.price })), 0, -1);
    }
    openCart();
  } catch(e) {}
}

/* ════════════════════════════════════
   BUILD MENU CARDS
════════════════════════════════════ */
function buildKotaCards() {
  const grid = document.getElementById('kotaGrid');
  if (!grid) return;
  grid.innerHTML = KOTAS.map(kota => {
    const baseTags  = BASE_INGS.map(b => `<span class="ing base">${b.name}</span>`).join('');
    const polonyTag = `<span class="ing base">Polony (choice)</span>`;
    const extraTags = kota.extras.map(e => `<span class="ing">${e}</span>`).join('');
    return `
      <div class="menu-card">
        <div class="menu-card-img">
          <img src="${kota.image}" alt="${kota.name}">
          <div class="menu-card-img-overlay"></div>
        </div>
        <div class="menu-card-body">
          <span class="badge ${kota.badge.cls}">${kota.badge.text}</span>
          <div class="menu-card-name">${kota.name}</div>
          <div class="ing-label">Includes:</div>
          <div class="ings">${baseTags}${polonyTag}${extraTags}</div>
          <div class="menu-card-footer">
            <div>
              <div class="menu-price">R${kota.price}</div>
              <div class="menu-price-note">Customisable</div>
            </div>
            <div class="btn-group">
              <button class="btn-custom" onclick="openKotaBuilder('${kota.id}')">Customise</button>
              <button class="btn-order" onclick="openSaucePicker('${kota.id}', sauces => _addKotaToCart('${kota.id}', sauces))">Add to Order</button>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function buildFatcakeCards() {
  const grid = document.getElementById('fatcakesGrid');
  if (!grid) return;
  grid.innerHTML = `
    <div class="menu-card">
      <div class="menu-card-img"><img src="images/amagwinya.jpg" alt="Fatcakes"><div class="menu-card-img-overlay"></div></div>
      <div class="menu-card-body">
        <span class="badge badge-pop">Classic</span>
        <div class="menu-card-name">Fatcakes</div>
        <div class="ings"><span class="ing">Plain</span><span class="ing">Add any side you like</span></div>
        <div class="menu-card-footer">
          <div><div class="menu-price">R2</div><div class="menu-price-note">Per piece</div></div>
          <button class="btn-order" onclick="openPanel('panelFatcakes')">Order</button>
        </div>
      </div>
    </div>`;
}

function buildFriesDrinksCards() {
  const grid = document.getElementById('friesDrinksGrid');
  if (!grid) return;
  const softDrinks   = DRINKS.filter(d => d.category === 'soft');
  const refreshers   = DRINKS.filter(d => d.category === 'refresh');
  const energyDrinks = DRINKS.filter(d => d.category === 'energy');

  const renderDrinkOptions = drinks => drinks.map(d => `
    <button class="drink-option" onclick="silentAdd('${d.name}',${d.price},'drink_${d.id}')"
      style="--drink-color:${d.color};" type="button">
      <span class="drink-option-size">${d.ml}</span>
      <span class="drink-option-price">R${d.price}</span>
      <span class="drink-option-add">+</span>
    </button>`).join('');

  const renderDrinkBrandGroup = (brand, drinks) => {
    const lead = drinks[0];
    return `
      <details class="drink-brand-group" style="--drink-color:${lead.color};">
        <summary class="drink-brand-head">
          ${drinkLogoMarkup(lead)}
          <div class="drink-brand-copy">
            <div class="drink-brand-name">${brand}</div>
            <div class="drink-brand-count">${drinks.length} size${drinks.length>1?'s':''} available</div>
          </div>
          <span class="drink-brand-chevron">⌄</span>
        </summary>
        <div class="drink-options">${renderDrinkOptions(drinks)}</div>
      </details>`;
  };

  const brands = ['Coca-Cola','Fanta','Sprite','Pepsi'];
  const softByBrand = brands.map(brand => {
    const brandDrinks = softDrinks.filter(d => d.name.startsWith(brand));
    return brandDrinks.length ? renderDrinkBrandGroup(brand, brandDrinks) : '';
  }).join('');

  grid.innerHTML = `
    <div class="fries-card">
      <div class="fries-card-img"><img src="images/fries.jpg" alt="Kasi Fries"></div>
      <div class="fries-card-body">
        <div class="menu-card-name">Kasi Fries</div>
        <p style="font-size:13px;color:#7a6040;margin-bottom:4px;">Crispy golden fries with our signature seasoning</p>
        <div class="fries-sizes">
          <div class="fries-row"><span class="fries-row-name">Small</span><span class="fries-row-price">R15</span><button class="fries-row-btn" onclick="silentAdd('Small Fries',15,'side_chips_small')">Add</button></div>
          <div class="fries-row"><span class="fries-row-name">Medium</span><span class="fries-row-price">R20</span><button class="fries-row-btn" onclick="silentAdd('Medium Fries',20,'side_chips_medium')">Add</button></div>
          <div class="fries-row"><span class="fries-row-name">Large</span><span class="fries-row-price">R25</span><button class="fries-row-btn" onclick="silentAdd('Large Fries',25,'side_chips_large')">Add</button></div>
        </div>
      </div>
    </div>
    <div class="drinks-card-full">
      <div class="drinks-card-media"><img src="images/drink.jpg" alt="Cold drinks"></div>
      <div class="drinks-card-header">
        <div class="drinks-card-title">Cold Drinks</div>
        <div class="drinks-card-sub">❄️ Served Ice Cold</div>
        <div class="drinks-kota-tip">💡 Add any 500ml drink to your kota order</div>
      </div>
      <div class="drinks-category-section">
        <div class="drinks-category-label">🥤 Soft Drinks</div>
        <div class="drink-brands-grid">${softByBrand}</div>
      </div>
      <div class="drinks-category-section">
        <div class="drinks-category-label">🧃 Refreshers</div>
        <div class="drink-brands-grid">${renderDrinkBrandGroup('Lipton Ice Tea', refreshers)}</div>
      </div>
      <div class="drinks-category-section">
        <div class="drinks-category-label">⚡ Energy &amp; Sports</div>
        <div class="drink-brands-grid">${renderDrinkBrandGroup('Powerade', energyDrinks)}</div>
      </div>
    </div>`;
}

/* ════════════════════════════════════
   BUILD ACCORDION CONTENT
════════════════════════════════════ */
function buildAccordionContent() {
  buildKotaAccordion();
  buildFatcakeAccordion();
  buildSidesAccordion();
  buildDrinksAccordion();
}

function buildKotaAccordion() {
  const el = document.getElementById('kotaBuilderContent');
  if (!el) return;
  const kotaRows = KOTAS.map(k => `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <span class="cart-item-emoji">🍔</span>
        <div><div class="cart-item-name">${k.name}</div><div class="cart-item-price">R${k.price}</div></div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="openSaucePicker('${k.id}', sauces => _addKotaToCart('${k.id}', sauces))">+</button>
        <span class="qty-num" id="kotaqty_${k.id}">0</span>
        <button class="qty-btn" onclick="removeOneKota('${k.id}')">−</button>
      </div>
    </div>`).join('');

  const presetsHTML = KOTAS.map(k => `
    <div class="preset-btn" onclick="applyKotaPreset(this,'${k.id}')">
      <div class="preset-name">${k.name}</div>
      <div class="preset-ings">+ ${k.extras.join(' · ')}</div>
      <div class="preset-price">R${k.price}</div>
    </div>`).join('');

  el.innerHTML = `
    <div class="ing-section-label">Quick add:</div>
    <div class="ing-section-sublabel" style="margin-bottom:10px;">Tap + to pick your sauce then add to cart</div>
    <div class="kota-quick-grid">${kotaRows}</div>
    <div class="or-div">— OR BUILD A CUSTOM KOTA —</div>
    <div class="custom-kota-box">
      <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-bottom:12px;font-weight:700;">Start from a preset then customise:</div>
      <div class="preset-grid" style="margin-bottom:14px;">${presetsHTML}</div>
      <div id="baseSection">
        <div class="ing-section-label">✅ Base — tap to remove</div>
        <div class="ing-grid" id="baseGrid"></div>
      </div>
      <div class="ing-section-label">🥩 Choose your polony</div>
      <div class="ing-section-sublabel">Pick one — included in base price</div>
      <div class="polony-row" id="polonyRow">
        <div class="polony-btn" onclick="selectPolony(this,'Polony Beef')"><span style="font-size:22px;display:block;margin-bottom:4px;">🥩</span><span style="font-size:12px;font-weight:700;color:#fff;display:block;">Beef</span></div>
        <div class="polony-btn" onclick="selectPolony(this,'Polony Chicken')"><span style="font-size:22px;display:block;margin-bottom:4px;">🍗</span><span style="font-size:12px;font-weight:700;color:#fff;display:block;">Chicken</span></div>
        <div class="polony-btn" onclick="selectPolony(this,'Polony Pork')"><span style="font-size:22px;display:block;margin-bottom:4px;">🐷</span><span style="font-size:12px;font-weight:700;color:#fff;display:block;">Pork</span></div>
      </div>
      <div class="ing-section-label">➕ Extra toppings</div>
      <div class="ing-grid" id="extrasGrid"></div>
      <div class="spice-sauce-row">
        <div class="spice-sauce-col">
          <div class="ing-section-label">🌶️ Spice</div>
          <div class="spice-row" id="kotaSpiceRow">
            <div class="spice-btn" onclick="setSpice(this,'No Spice')"><span class="spice-emoji">😌</span><span class="spice-label">None</span></div>
            <div class="spice-btn" onclick="setSpice(this,'Mild')"><span class="spice-emoji">🌿</span><span class="spice-label">Mild</span></div>
            <div class="spice-btn" onclick="setSpice(this,'Medium')"><span class="spice-emoji">🌶️</span><span class="spice-label">Medium</span></div>
            <div class="spice-btn" onclick="setSpice(this,'Hot')"><span class="spice-emoji">🔥</span><span class="spice-label">Hot</span></div>
            <div class="spice-btn" onclick="setSpice(this,'Extra Fire')"><span class="spice-emoji">🔥🔥</span><span class="spice-label">Fire</span></div>
          </div>
        </div>
        <div class="spice-sauce-col">
          <div class="ing-section-label">🍅 Sauce</div>
          <div class="sauce-row" id="kotaSauceRow">
            <div class="sauce-btn" onclick="toggleSauce(this,'Tomato')">🍅 Tomato</div>
            <div class="sauce-btn" onclick="toggleSauce(this,'Peri-Peri')">🌶️ Peri-Peri</div>
            <div class="sauce-btn" onclick="toggleSauce(this,'Mayo')">🤍 Mayo</div>
            <div class="sauce-btn" onclick="toggleSauce(this,'BBQ')">🍖 BBQ</div>
            <div class="sauce-btn" onclick="toggleSauce(this,'Chutney')">🥭 Mustard</div>
            <div class="sauce-btn" onclick="toggleSauce(this,'No Sauce')">🚫 None</div>
          </div>
        </div>
      </div>
      <button class="add-to-cart-btn" onclick="addCustomKotaToCart()">+ Add Custom Kota to Order</button>
    </div>`;
  buildBaseGrid();
  buildExtrasGrid();
}

function removeOneKota(kotaId) {
  const cartId  = 'kota_' + kotaId;
  const existing = cart.find(c => c.id === cartId);
  if (!existing) return;
  existing.qty = Math.max(0, existing.qty - 1);
  if (existing.qty === 0) cart = cart.filter(c => c.id !== cartId);
  const qEl = document.getElementById('kotaqty_' + kotaId);
  if (qEl) qEl.textContent = existing?.qty || 0;
  renderCart();
}

function buildFatcakeAccordion() {
  const el = document.getElementById('fatcakeBuilderContent');
  if (!el) return;
  el.innerHTML = `
    <div class="cart-item-row" style="margin-bottom:12px;">
      <div class="cart-item-info">
        <span class="cart-item-emoji">🍩</span>
        <div><div class="cart-item-name">Fatcakes</div><div class="cart-item-price">R2 each</div></div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeFatcakeQty(-1)">−</button>
        <span class="qty-num" id="fatcakeQty">0</span>
        <button class="qty-btn" onclick="changeFatcakeQty(1)">+</button>
      </div>
    </div>
    <div style="font-size:12px;color:rgba(255,255,255,0.35);font-style:italic;margin-top:4px;">
      💡 Want toppings? Add them from the <strong style="color:var(--yellow);">Sides</strong> section below.
    </div>`;
}

function buildSidesAccordion() {
  const el = document.getElementById('sidesContent');
  if (!el) return;
  el.innerHTML = `<div class="kota-quick-grid">${SIDES.map(s => `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <span class="cart-item-emoji">${s.emoji}</span>
        <div><div class="cart-item-name">${s.name}</div><div class="cart-item-price">R${s.price} each</div></div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="changeSideQty('${s.id}',-1)">−</button>
        <span class="qty-num" id="sideqty_${s.id}">0</span>
        <button class="qty-btn" onclick="changeSideQty('${s.id}',1)">+</button>
      </div>
    </div>`).join('')}</div>`;
}

function buildDrinksAccordion() {
  const el = document.getElementById('drinksContent');
  if (!el) return;
  const categories = [
    { label:'🥤 Soft Drinks',     drinks: DRINKS.filter(d => d.category==='soft')    },
    { label:'🧃 Refreshers',      drinks: DRINKS.filter(d => d.category==='refresh')  },
    { label:'⚡ Energy & Sports', drinks: DRINKS.filter(d => d.category==='energy')   }
  ];
  el.innerHTML = categories.map(cat => `
    <div class="acc-drink-category">
      <div class="acc-drink-cat-label">${cat.label}</div>
      ${cat.drinks.map(d => `
        <div class="cart-item-row" style="margin-bottom:6px;">
          <div class="cart-item-info">
            <span style="font-size:20px;flex-shrink:0;">${d.emoji}</span>
            <div><div class="cart-item-name">${d.name}</div><div class="cart-item-price">R${d.price}</div></div>
          </div>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeDrinkQty('${d.id}',-1)">−</button>
            <span class="qty-num" id="drinkqty_${d.id}">0</span>
            <button class="qty-btn" onclick="changeDrinkQty('${d.id}',1)">+</button>
          </div>
        </div>`).join('')}
    </div>`).join('');
}

/* ════════════════════════════════════
   INGREDIENT GRIDS
════════════════════════════════════ */
function buildBaseGrid() {
  const grid = document.getElementById('baseGrid');
  if (!grid) return;
  grid.innerHTML = '';
  BASE_INGS.forEach(ing => {
    const div = document.createElement('div');
    div.className = 'ing-btn is-base'; div.dataset.name = ing.name;
    div.innerHTML = `<span class="ing-emoji">${ing.emoji}</span><span class="ing-name">${ing.name}</span><span class="ing-price">Included</span><span class="ing-status">Included</span>`;
    div.onclick = () => toggleBase(div, ing.name);
    grid.appendChild(div);
  });
}

function buildExtrasGrid() {
  const grid = document.getElementById('extrasGrid');
  if (!grid) return;
  grid.innerHTML = '';
  EXTRAS.forEach(ing => {
    const div = document.createElement('div');
    div.className = 'ing-btn is-extra'; div.dataset.name = ing.name;
    div.innerHTML = `<span class="ing-emoji">${ing.emoji}</span><span class="ing-name">${ing.name}</span><span class="ing-price">+R${ing.price}</span><span class="ing-status">Tap to add</span>`;
    div.onclick = () => toggleExtra(div, ing.name, ing.price);
    grid.appendChild(div);
  });
}

/* ════════════════════════════════════
   CUSTOM KOTA STATE
════════════════════════════════════ */
function selectPolony(el, name) {
  document.querySelectorAll('#polonyRow .polony-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active'); customKota.polony = name;
}

function applyKotaPreset(el, kotaId) {
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  const k = KOTAS.find(k => k.id === kotaId);
  // basePrice = kota price (already includes all its bundled extras at R0 cost)
  customKota.preset    = k.name;
  customKota.basePrice = k.price;
  customKota.presetExtras = [...k.extras]; // track which extras are bundled
  customKota.removedBase = [];
  customKota.extras    = [];
  customKota.spice     = k.spice;
  customKota.sauces    = [...k.sauces];
  customKota.polony    = null;

  document.querySelectorAll('#polonyRow .polony-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#baseGrid .ing-btn').forEach(b => {
    b.classList.remove('removed'); b.querySelector('.ing-status').textContent = 'Included';
  });
  document.querySelectorAll('#extrasGrid .ing-btn').forEach(b => {
    b.classList.remove('added','bundled');
    b.querySelector('.ing-status').textContent = 'Tap to add';
    b.querySelector('.ing-price').textContent   = `+R${EXTRAS.find(e=>e.name===b.dataset.name)?.price||0}`;
  });

  
  k.extras.forEach(name => {
    const btn = [...document.querySelectorAll('#extrasGrid .ing-btn')].find(b => b.dataset.name === name);
    if (btn) {
      btn.classList.add('added','bundled');
      btn.querySelector('.ing-status').textContent = 'Included';
      btn.querySelector('.ing-price').textContent  = 'Included';
    }
    
    customKota.extras.push({ name, price:0, bundled:true });
  });

  document.querySelectorAll('#kotaSpiceRow .spice-btn').forEach(b => {
    const map = { None:'No Spice',Mild:'Mild',Medium:'Medium',Hot:'Hot',Fire:'Extra Fire' };
    b.classList.toggle('active', map[b.querySelector('.spice-label').textContent] === k.spice);
  });
  document.querySelectorAll('#kotaSauceRow .sauce-btn').forEach(b => {
    b.classList.toggle('active', k.sauces.some(s => b.textContent.includes(s.split(' ')[0])));
  });
}

function toggleBase(el, name) {
  if (el.classList.contains('removed')) {
    el.classList.remove('removed'); customKota.removedBase = customKota.removedBase.filter(n => n !== name); el.querySelector('.ing-status').textContent = 'Included';
  } else {
    el.classList.add('removed'); customKota.removedBase.push(name); el.querySelector('.ing-status').textContent = 'Removed';
  }
  customKota.preset = null;
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
}

function toggleExtra(el, name, price) {
  const isBundled = el.classList.contains('bundled');
  if (el.classList.contains('added')) {
    // Remove extra
    el.classList.remove('added','bundled');
    el.querySelector('.ing-status').textContent = 'Tap to add';
    el.querySelector('.ing-price').textContent  = `+R${price}`;
    if (isBundled) {
      // Removing a bundled extra saves its value — apply negative price
      customKota.extras = customKota.extras.filter(e => e.name !== name);
      customKota.extras.push({ name, price: -price, removed:true });
      el.querySelector('.ing-status').textContent = 'Removed (-R' + price + ')';
      el.querySelector('.ing-price').textContent  = '-R' + price;
    } else {
      customKota.extras = customKota.extras.filter(e => e.name !== name);
    }
  } else if (el.classList.contains('is-extra') && !isBundled) {
    // Also handle case where it was previously removed from bundle
    const existing = customKota.extras.find(e => e.name === name && e.removed);
    if (existing) {
      customKota.extras = customKota.extras.filter(e => e.name !== name);
      el.classList.add('added','bundled');
      el.querySelector('.ing-status').textContent = 'Included';
      el.querySelector('.ing-price').textContent  = 'Included';
      customKota.extras.push({ name, price:0, bundled:true });
    } else {
      el.classList.add('added');
      el.querySelector('.ing-status').textContent = 'Added';
      customKota.extras.push({ name, price });
    }
  } else {
    el.classList.add('added');
    el.querySelector('.ing-status').textContent = 'Added';
    customKota.extras.push({ name, price });
  }
  customKota.preset = null;
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
}

function setSpice(el, name) {
  document.querySelectorAll('#kotaSpiceRow .spice-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active'); customKota.spice = name;
}

function toggleSauce(el, name) {
  const row = document.getElementById('kotaSauceRow');
  if (name === 'No Sauce') {
    row.querySelectorAll('.sauce-btn').forEach(b => b.classList.remove('active'));
    customKota.sauces = ['No Sauce']; el.classList.add('active');
  } else {
    row.querySelectorAll('.sauce-btn').forEach(b => { if (b.textContent.includes('No Sauce')) b.classList.remove('active'); });
    customKota.sauces = customKota.sauces.filter(s => s !== 'No Sauce');
    el.classList.toggle('active');
    const i = customKota.sauces.indexOf(name);
    if (i > -1) customKota.sauces.splice(i,1); else customKota.sauces.push(name);
  }
}

function addCustomKotaToCart() {
  // Enforce polony selection
  if (!customKota.polony) {
    const polonyRow = document.getElementById('polonyRow');
    if (polonyRow) {
      polonyRow.style.outline = '2px solid var(--red)';
      polonyRow.style.borderRadius = '12px';
      polonyRow.scrollIntoView({ behavior:'smooth', block:'center' });
      setTimeout(() => { polonyRow.style.outline = ''; polonyRow.style.borderRadius = ''; }, 2000);
    }
    alert('Please choose your polony type (Beef, Chicken or Pork) before adding to cart.');
    return;
  }

  // Enforce sauce selection
  if (!customKota.sauces.length) {
    customKota.sauces = ['No Sauce'];
  }

  const extrasTotal = customKota.extras.reduce((s,e) => s + e.price, 0);
  const total       = Math.max(0, customKota.basePrice + extrasTotal);

  const included = BASE_INGS.filter(b => !customKota.removedBase.includes(b.name)).map(b => b.name);
  const addedExtras   = customKota.extras.filter(e => !e.bundled && !e.removed && e.price > 0).map(e => e.name);
  const removedExtras = customKota.extras.filter(e => e.removed).map(e => e.name);

  const notes = [
    `Includes: ${included.join(', ')}, ${customKota.polony}`,
    customKota.removedBase.length ? `No: ${customKota.removedBase.join(', ')}` : '',
    addedExtras.length   ? `Extra: ${addedExtras.join(', ')}`   : '',
    removedExtras.length ? `No: ${removedExtras.join(', ')}` : '',
    customKota.spice && customKota.spice !== 'No Spice' ? `Spice: ${customKota.spice}` : '',
    customKota.sauces.length ? `Sauce: ${customKota.sauces.join(', ')}` : ''
  ].filter(Boolean).join(' | ');

  const label = customKota.preset ? `Custom ${customKota.preset}` : 'Custom Kota';
  addToCart('custom_kota_' + Date.now(), label, total, notes);

  // Reset
  customKota.preset = null; customKota.presetExtras = []; customKota.removedBase = [];
  customKota.extras = []; customKota.spice = null; customKota.sauces = [];
  customKota.basePrice = 15; customKota.polony = null;
  document.querySelectorAll('.preset-btn,#kotaSpiceRow .spice-btn,#kotaSauceRow .sauce-btn,#polonyRow .polony-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#baseGrid .ing-btn').forEach(b => { b.classList.remove('removed'); b.querySelector('.ing-status').textContent = 'Included'; });
  document.querySelectorAll('#extrasGrid .ing-btn').forEach(b => {
    b.classList.remove('added','bundled');
    b.querySelector('.ing-status').textContent = 'Tap to add';
    b.querySelector('.ing-price').textContent  = `+R${EXTRAS.find(e=>e.name===b.dataset.name)?.price||0}`;
  });
}

/* ════════════════════════════════════
   FATCAKE
════════════════════════════════════ */
function changeFatcakeQty(delta) {
  fatcakeQty = Math.max(0, fatcakeQty + delta);
  const el = document.getElementById('fatcakeQty');
  if (el) el.textContent = fatcakeQty;
  syncFatcakesInCart();
}

function syncFatcakesInCart() {
  cart = cart.filter(c => c.id !== 'fatcakes');
  if (fatcakeQty > 0) {
    cart.unshift({ id:'fatcakes', label:'Fatcake', price:FATCAKE_PRICE, qty:fatcakeQty, notes:'' });
  }
  renderCart();
}

/* ════════════════════════════════════
   QTY FUNCTIONS
════════════════════════════════════ */
function changeSideQty(sideId, delta) {
  const side    = SIDES.find(s => s.id === sideId);
  const cartId  = 'side_' + sideId;
  const existing = cart.find(c => c.id === cartId);
  const display  = document.getElementById('sideqty_' + sideId);
  if (existing) {
    existing.qty = Math.max(0, existing.qty + delta);
    if (existing.qty === 0) cart = cart.filter(c => c.id !== cartId);
    if (display) display.textContent = existing.qty > 0 ? existing.qty : 0;
  } else if (delta > 0) {
    cart.push({ id:cartId, label:side.name, price:side.price, qty:1, notes:'' });
    if (display) display.textContent = 1;
  }
  renderCart();
}

function changeDrinkQty(drinkId, delta) {
  const drink   = DRINKS.find(d => d.id === drinkId);
  const cartId  = 'drink_' + drinkId;
  const existing = cart.find(c => c.id === cartId);
  const display  = document.getElementById('drinkqty_' + drinkId);
  if (existing) {
    existing.qty = Math.max(0, existing.qty + delta);
    if (existing.qty === 0) cart = cart.filter(c => c.id !== cartId);
    if (display) display.textContent = existing.qty > 0 ? existing.qty : 0;
  } else if (delta > 0) {
    cart.push({ id:cartId, label:drink.name, price:drink.price, qty:1, notes:'' });
    if (display) display.textContent = 1;
  }
  renderCart();
}

/* ════════════════════════════════════
   CART HELPERS
════════════════════════════════════ */
function addToCart(id, label, price, notes = '') {
  cart.push({ id, label, price, qty:1, notes });
  renderCart();
}

function silentAdd(label, price, id) {
  const cartId   = id || 'quick_' + label.replace(/\s/g,'_');
  const existing = cart.find(c => c.id === cartId);
  if (existing) { existing.qty += 1; }
  else { cart.push({ id:cartId, label, price, qty:1, notes:'' }); }
  // sync accordion display
  const sideKey  = cartId.replace('side_','');
  const drinkKey = cartId.replace('drink_','');
  const qEl = document.getElementById('sideqty_'+sideKey) || document.getElementById('drinkqty_'+drinkKey);
  if (qEl) qEl.textContent = cart.find(c => c.id === cartId)?.qty || 0;
  renderCart();
  flashCartBar();
}

function cartChangeQty(cartId, delta) {
  // Free fatcake cannot be increased
  if (cartId === 'free_fatcake' && delta > 0) return;

  const existing = cart.find(c => c.id === cartId);
  if (!existing) return;
  existing.qty = Math.max(0, existing.qty + delta);
  if (existing.qty === 0) { removeFromCart(cartId); return; }

  const sideKey  = cartId.replace('side_','');
  const drinkKey = cartId.replace('drink_','');
  const qEl = document.getElementById('sideqty_'+sideKey) || document.getElementById('drinkqty_'+drinkKey);
  if (qEl) qEl.textContent = existing.qty;
  renderCart();
}

function removeFromCart(id) {
  const kotaMatch  = id.match(/^kota_(.+)$/);
  const sideMatch  = id.match(/^side_(.+)$/);
  const drinkMatch = id.match(/^drink_(.+)$/);
  if (kotaMatch)  { const el = document.getElementById('kotaqty_' +kotaMatch[1]);  if (el) el.textContent = '0'; }
  if (sideMatch)  { const el = document.getElementById('sideqty_' +sideMatch[1]);  if (el) el.textContent = '0'; }
  if (drinkMatch) { const el = document.getElementById('drinkqty_'+drinkMatch[1]); if (el) el.textContent = '0'; }
  if (id === 'fatcakes') {
    fatcakeQty = 0;
    const el = document.getElementById('fatcakeQty'); if (el) el.textContent = '0';
  }
  if (id === 'free_fatcake') {
    freeFatcakeDeclined = true; // customer removed it — don't auto-add again
  }
  cart = cart.filter(c => c.id !== id);
  renderCart();
}

/* ════════════════════════════════════
   EMOJI / PHOTO HELPERS
════════════════════════════════════ */
function getItemEmoji(id, label) {
  if (id === 'fatcakes'      || label.includes('Fatcake'))    return '🍩';
  if (id === 'free_fatcake')                                   return '🎁';
  if (label.includes('Kota'))                                  return '🍔';
  if (label.includes('Fries') || label.includes('Chips'))     return '🍟';
  if (id.includes('coke')    || label.includes('Coca-Cola'))  return '🥤';
  if (id.includes('fanta')   || label.includes('Fanta'))      return '🧡';
  if (id.includes('sprite')  || label.includes('Sprite'))     return '💚';
  if (id.includes('pepsi')   || label.includes('Pepsi'))      return '🔵';
  if (id.includes('lipton')  || label.includes('Lipton'))     return '🧃';
  if (id.includes('powerade')|| label.includes('Powerade'))   return '⚡';
  if (label.includes('Atchar'))                                return '🥭';
  if (label.includes('Polony'))                                return '🥩';
  if (label.includes('Beef Patty'))                            return '🍔';
  if (label.includes('Vienna'))                                return '🌭';
  if (label.includes('Russian'))                               return '🍖';
  if (label.includes('Egg'))                                   return '🥚';
  if (label.includes('Bacon'))                                 return '🥓';
  if (label.includes('Cheese'))                                return '🧀';
  return '🍽️';
}

function getItemPhoto(id, label) {
  if (id === 'kota_classic'  || label === 'The Classic Kota')   return 'images/classics.jpg';
  if (id === 'kota_spicy'    || label === 'The Spicy One Kota') return 'images/spicy.jpg';
  if (id === 'kota_stacker'  || label === 'The Stacker Kota')   return 'images/stacker.jpg';
  if (id === 'kota_king'     || label === 'The King Kota')      return 'images/king.jpg';
  if (id === 'kota_special'  || label === 'The Special Kota')   return 'images/special.jpg';
  if (label.includes('Custom') && label.includes('Kota'))       return 'images/kota.jpg';
  if (id === 'fatcakes'      || id === 'free_fatcake' || label.includes('Fatcake')) return 'images/amagwinya.jpg';
  if (label.includes('Fries') || label.includes('Chips'))       return 'images/fries.jpg';
  if (id.startsWith('drink_') || label.includes('Coca-Cola') ||
      label.includes('Fanta') || label.includes('Sprite') ||
      label.includes('Pepsi') || label.includes('Lipton') ||
      label.includes('Powerade'))                               return 'images/drink.jpg';
  return null;
}

/* ════════════════════════════════════
   RENDER CART
════════════════════════════════════ */
function renderCart() {
  const rawTotal        = cart.reduce((s,c) => s + (c.price * c.qty), 0);
  const isDelivery      = deliveryType === 'delivery';
  const hasFreeDelivery = rawTotal >= DEAL_FREE_DELIVERY_MIN;
  const deliveryFee     = isDelivery && !hasFreeDelivery ? DEAL_DELIVERY_FEE : 0;
  const kotaCount       = cart
    .filter(c => (c.id && c.id.startsWith('kota_')) || c.label.includes('Kota'))
    .reduce((s,c) => s + c.qty, 0);
  const hasDiscount     = rawTotal >= DEAL_DISCOUNT_MIN;
  const discountAmount  = hasDiscount ? Math.round(rawTotal * DEAL_DISCOUNT_PCT / 100) : 0;
  const finalTotal      = rawTotal - discountAmount + deliveryFee;

  // Auto free fatcake: 2+ kotas = free fatcake (unless customer declined it)
  const hasBuy2Deal = kotaCount >= 2;
  if (hasBuy2Deal && !freeFatcakeDeclined && !cart.find(c => c.id === 'free_fatcake')) {
    cart.push({ id:'free_fatcake', label:'Free Fatcake 🎁', price:0, qty:1, notes:'Deal: Buy 2 Kotas', locked:true });
  } else if (!hasBuy2Deal) {
    cart = cart.filter(c => c.id !== 'free_fatcake');
    freeFatcakeDeclined = false; // reset when kotas drop below 2
  }

  updateDealProgress(rawTotal);

  // Cart bar
  const totalItems = cart.reduce((s,c) => s + c.qty, 0);
  const cartBar    = document.getElementById('cartBar');
  if (cartBar) cartBar.style.display = totalItems > 0 ? 'block' : 'none';
  const cbc = document.getElementById('cartBarCount'); if (cbc) cbc.textContent = totalItems;
  const cbt = document.getElementById('cartBarTotal'); if (cbt) cbt.textContent = 'R' + finalTotal;

  // Total
  const cte = document.getElementById('cartTotal'); if (cte) cte.textContent = 'R' + finalTotal;
  const meta = document.getElementById('cartTotalMeta');
  if (meta) meta.textContent = `${totalItems} ${totalItems===1?'item':'items'} · Subtotal R${rawTotal}`;
  const itemsMeta = document.getElementById('cartItemsMeta');
  if (itemsMeta) itemsMeta.textContent = `${totalItems} ${totalItems===1?'item':'items'}`;

  // Discount row
  const discRow = document.getElementById('cartDiscountRow');
  const discVal  = document.getElementById('cartDiscountVal');
  if (discRow) discRow.style.display = hasDiscount ? 'flex' : 'none';
  if (discVal)  discVal.textContent   = '-R' + discountAmount;

  // Delivery fee row
  const delRow = document.getElementById('cartDeliveryRow');
  const delVal  = document.getElementById('cartDeliveryVal');
  if (delRow) delRow.style.display = (isDelivery && !hasFreeDelivery) ? 'flex' : 'none';
  if (delVal)  delVal.textContent   = '+R' + DEAL_DELIVERY_FEE;

  // Address field
  const addrWrap = document.getElementById('cartAddressWrap');
  if (addrWrap) addrWrap.style.display = isDelivery ? 'block' : 'none';

  // Deal banners
  const dealStatus = document.getElementById('cartDealStatus');
  if (dealStatus) {
    let banners = '';
    if (isDelivery) {
      if (hasFreeDelivery)
        banners += `<div class="deal-unlocked">🛵 Free delivery unlocked!</div>`;
      else
        banners += `<div class="deal-unlocked deal-unlocked-red">🛵 Add R${DEAL_FREE_DELIVERY_MIN - rawTotal} for free delivery (R10 fee now)</div>`;
    }
    if (hasDiscount)
      banners += `<div class="deal-unlocked">💰 10% off — saving R${discountAmount}!</div>`;
    if (kotaCount === 1)
      banners += `<div class="deal-unlocked deal-unlocked-red">🍩 Add 1 more kota to get a free fatcake!</div>`;
    if (hasBuy2Deal)
      banners += `<div class="deal-unlocked">🎉 Free fatcake added automatically!</div>`;
    dealStatus.innerHTML = banners;
    dealStatus.style.padding = cart.length ? '8px 16px 0' : '0';
  }

  // Cart lines
  const linesEl = document.getElementById('cartLines');
  if (linesEl) {
    if (cart.length === 0) {
      linesEl.innerHTML = `
        <div class="cart-empty-state">
          <div style="font-size:52px;margin-bottom:12px;">🍔</div>
          <div style="font-size:16px;font-weight:800;color:var(--dark);margin-bottom:6px;">Your order is empty</div>
          <div style="font-size:13px;color:#9a7050;">Add items from the menu above</div>
        </div>`;
    } else {
      linesEl.innerHTML = cart.map(item => {
        const emoji   = getItemEmoji(item.id, item.label);
        const photo   = getItemPhoto(item.id, item.label);
        const isFree  = item.price === 0;
        const isLocked = item.locked === true; // free fatcake = locked qty
        return `
          <div class="cart-line">
            ${photo
              ? `<img class="cart-line-photo" src="${photo}" alt="${item.label}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
              : ''}
            <div class="cart-line-emoji" style="${photo?'display:none':''}">${emoji}</div>
            <div class="cart-line-info">
              <div class="cart-line-name">${item.label}${isFree?` <span class="cart-free-tag">FREE</span>`:''}</div>
              ${item.notes ? `<div class="cart-line-notes">${item.notes}</div>` : ''}
            </div>
            <div class="cart-line-right">
              <div class="cart-line-qty-ctrl">
                <button class="cart-qty-btn" onclick="cartChangeQty('${item.id}',-1)">−</button>
                <span class="cart-qty-num">${item.qty}</span>
                ${isLocked
                  ? `<button class="cart-qty-btn" style="opacity:0.3;cursor:not-allowed;" disabled>+</button>`
                  : `<button class="cart-qty-btn" onclick="cartChangeQty('${item.id}',1)">+</button>`}
              </div>
              <div class="cart-line-price ${isFree?'cart-free-price':''}">R${item.price*item.qty}</div>
              <button class="cart-line-remove" onclick="removeFromCart('${item.id}')">×</button>
            </div>
          </div>`;
      }).join('');
    }
  }

  const waBtn = document.getElementById('cartWaBtn');
  if (waBtn) waBtn.disabled = cart.length === 0;

  updateAccordionCounts();
}

function updateAccordionCounts() {
  const kotaItems  = cart.filter(c => (c.id&&c.id.startsWith('kota_'))||c.label.includes('Kota')).reduce((s,c)=>s+c.qty,0);
  const sideItems  = cart.filter(c => c.id&&c.id.startsWith('side_')).reduce((s,c)=>s+c.qty,0);
  const drinkItems = cart.filter(c => c.id&&c.id.startsWith('drink_')).reduce((s,c)=>s+c.qty,0);
  setCount('countKotas',    kotaItems);
  setCount('countFatcakes', fatcakeQty);
  setCount('countSides',    sideItems);
  setCount('countDrinks',   drinkItems);
}

function setCount(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if (val > 0) { el.textContent = val; el.classList.add('visible'); }
  else          { el.textContent = '';  el.classList.remove('visible'); }
}

/* ════════════════════════════════════
   CART DRAWER
════════════════════════════════════ */
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function syncName() { /* cart input is the single source of truth */ }
function syncNote() { /* cart input is the single source of truth */ }

/* ════════════════════════════════════
   SEND TO WHATSAPP
════════════════════════════════════ */
function sendWA() {
  const name    = document.getElementById('cartCustName')?.value.trim() || 'Customer';
  const note    = document.getElementById('cartCustNote')?.value.trim() || '';
  const address = document.getElementById('cartAddress')?.value.trim() || '';
  const rawTotal        = cart.reduce((s,c) => s+(c.price*c.qty), 0);
  const isDelivery      = deliveryType === 'delivery';
  const hasFreeDelivery = rawTotal >= DEAL_FREE_DELIVERY_MIN;
  const deliveryFee     = isDelivery && !hasFreeDelivery ? DEAL_DELIVERY_FEE : 0;
  const hasDiscount     = rawTotal >= DEAL_DISCOUNT_MIN;
  const discountAmount  = hasDiscount ? Math.round(rawTotal * DEAL_DISCOUNT_PCT / 100) : 0;
  const finalTotal      = rawTotal - discountAmount + deliveryFee;
  const orderNumber     = 'KK' + Date.now().toString().slice(-5);
  const timeStr         = new Date().toLocaleTimeString('en-ZA', { hour:'2-digit', minute:'2-digit' });

  let msg = `*🍔 KOTA KING ORDER*\n`;
  msg += `*Order #${orderNumber}*\n`;
  msg += `Customer: ${name}\n`;
  msg += `Time: ${timeStr}\n`;
  msg += `Type: ${isDelivery ? 'Delivery 🛵' : 'Collection 🏠'}\n`;
  if (isDelivery && address) msg += `Address: ${address}\n`;
  msg += `\n*YOUR ORDER*\n`;
  msg += `────────────────────\n`;
  cart.forEach(item => {
    const qty = item.qty > 1 ? `${item.qty}x ` : '';
    msg += `• ${qty}${item.label} — *R${item.price * item.qty}*\n`;
    if (item.notes && item.notes !== 'Deal: Buy 2 Kotas') msg += `  _${item.notes}_\n`;
  });
  msg += `────────────────────\n`;
  msg += `Subtotal: R${rawTotal}\n`;
  if (hasDiscount)                   msg += `Discount (10%): -R${discountAmount}\n`;
  if (deliveryFee > 0)               msg += `Delivery fee: +R${deliveryFee}\n`;
  if (isDelivery && hasFreeDelivery) msg += `Delivery: FREE ✅\n`;
  msg += `\n*TOTAL: R${finalTotal}*\n`;
  if (note) msg += `\nNote: ${note}\n`;

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank');

  saveOrderToHistory({
    name, total:finalTotal,
    items: cart.map(c => ({ id:c.id, label:c.label, price:c.price, qty:c.qty, notes:c.notes||'' })),
    date: new Date().toLocaleDateString('en-ZA', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' })
  });

  showOrderConfirmation(name, orderNumber, finalTotal, isDelivery, hasFreeDelivery || !isDelivery, address);
}

/* ════════════════════════════════════
   ORDER CONFIRMATION
════════════════════════════════════ */
function showOrderConfirmation(name, orderNumber, total, isDelivery, freeDelivery, address) {
  const overlay = document.createElement('div');
  overlay.id = 'orderConfirmOverlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:500;background:rgba(26,18,8,0.9);
    display:flex;align-items:center;justify-content:center;
    padding:20px;backdrop-filter:blur(8px);animation:fadeInOverlay 0.3s ease;`;
  const estTime = isDelivery ? '20 – 35 mins' : '10 – 15 mins';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:28px;padding:36px 28px;max-width:420px;width:100%;
      text-align:center;animation:slideUpConfirm 0.4s cubic-bezier(0.32,0.72,0,1);
      box-shadow:0 32px 80px rgba(0,0,0,0.4);max-height:90vh;overflow-y:auto;">
      <div style="width:76px;height:76px;border-radius:50%;background:linear-gradient(135deg,#25D366,#1dac56);
        display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:34px;
        box-shadow:0 8px 24px rgba(37,211,102,0.4);">✅</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:36px;color:#1a1208;margin-bottom:6px;">Order Received!</div>
      <div style="font-size:14px;color:#7a6040;margin-bottom:24px;line-height:1.6;">
        Thanks <strong>${name}</strong>! Your order has been sent to Kota King on WhatsApp. We'll confirm shortly 🙌
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:20px;">
        <div style="background:#fff8f0;border:1.5px solid #f0e8d8;border-radius:99px;padding:7px 14px;font-size:12px;font-weight:700;color:#7a6040;">📋 #${orderNumber}</div>
        <div style="background:#fff0f0;border:1.5px solid #fde8e7;border-radius:99px;padding:7px 14px;font-size:12px;font-weight:700;color:#E63329;">💳 R${total}</div>
        <div style="background:${freeDelivery?'#f0fdf4':'#fff8f0'};border:1.5px solid ${freeDelivery?'#bbf7d0':'#f0e8d8'};border-radius:99px;padding:7px 14px;font-size:12px;font-weight:700;color:${freeDelivery?'#166534':'#7a6040'};">
          ${isDelivery?(freeDelivery?'🛵 Free Delivery':'🛵 R10 Delivery'):'🏠 Collection'}
        </div>
      </div>
      ${address?`<div style="background:#f0fdf4;border-radius:12px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#166534;font-weight:700;">📍 Delivering to: ${address}</div>`:''}
      <div style="background:#fff8f0;border-radius:16px;padding:16px;margin-bottom:16px;border:1.5px solid #f0e8d8;">
        <div style="font-size:11px;color:#9a7050;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Estimated Ready Time</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:30px;color:#1a1208;">${estTime}</div>
        <div style="font-size:12px;color:#9a7050;margin-top:2px;">${isDelivery?'Delivery to your door':'Ready for collection at Ga-Thoka'}</div>
      </div>
      <a href="https://wa.me/${PHONE}?text=${encodeURIComponent(`Hi! Checking on my order #${orderNumber} 👋`)}"
        target="_blank"
        style="display:block;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:12px;
          font-size:13px;font-weight:800;color:#166534;text-decoration:none;margin-bottom:16px;">
        💬 Check on my order #${orderNumber}
      </a>
      <button onclick="dismissConfirmation()" style="width:100%;background:#1a1208;color:#fff;border:none;
        border-radius:12px;padding:15px;font-size:15px;font-weight:800;cursor:pointer;
        font-family:'Nunito',sans-serif;margin-bottom:8px;"
        onmouseover="this.style.background='#E63329'" onmouseout="this.style.background='#1a1208'">
        Done
      </button>
      <button onclick="dismissConfirmation()" style="width:100%;background:transparent;
        border:1.5px solid rgba(61,32,10,0.14);border-radius:12px;padding:11px;
        font-size:13px;font-weight:700;color:#9a7050;cursor:pointer;font-family:'Nunito',sans-serif;">
        Place Another Order
      </button>
    </div>`;
  document.body.appendChild(overlay);
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOverlay{from{opacity:0}to{opacity:1}}
    @keyframes slideUpConfirm{from{opacity:0;transform:translateY(40px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}`;
  document.head.appendChild(style);
}

function dismissConfirmation() {
  const overlay = document.getElementById('orderConfirmOverlay');
  if (overlay) { overlay.style.opacity='0'; overlay.style.transition='opacity 0.25s'; setTimeout(()=>overlay.remove(),250); }
  resetOrder();
  loadRecentOrders();
}

/* ════════════════════════════════════
   RESET
════════════════════════════════════ */
function resetOrder() {
  cart = []; fatcakeQty = 0; deliveryType = 'collection'; freeFatcakeDeclined = false;
  const fqEl = document.getElementById('fatcakeQty'); if (fqEl) fqEl.textContent = '0';
  KOTAS.forEach(k => { const el = document.getElementById('kotaqty_'+k.id);  if (el) el.textContent = '0'; });
  SIDES.forEach(s => { const el = document.getElementById('sideqty_'+s.id);  if (el) el.textContent = '0'; });
  DRINKS.forEach(d => { const el = document.getElementById('drinkqty_'+d.id); if (el) el.textContent = '0'; });
  customKota.preset=null; customKota.presetExtras=[]; customKota.removedBase=[]; customKota.extras=[];
  customKota.spice=null; customKota.sauces=[]; customKota.basePrice=15; customKota.polony=null;
  document.querySelectorAll('.preset-btn,.spice-btn,.sauce-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('#polonyRow .polony-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.ing-btn.is-base').forEach(b=>{b.classList.remove('removed');b.querySelector('.ing-status').textContent='Included';});
  document.querySelectorAll('.ing-btn.is-extra').forEach(b=>{b.classList.remove('added');b.querySelector('.ing-status').textContent='Tap to add';});
  ['cartCustName','cartCustNote','cartAddress'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('btnCollection')?.classList.add('active');
  document.getElementById('btnDelivery')?.classList.remove('active');
  renderCart();
  closeCart();
}

function openKotaBuilder(kotaId) {
  openPanel('panelKotas');
  setTimeout(() => {
    const presetBtn = [...document.querySelectorAll('.preset-btn')]
      .find(b => b.querySelector('.preset-name')?.textContent === KOTAS.find(k=>k.id===kotaId).name);
    if (presetBtn) applyKotaPreset(presetBtn, kotaId);
  }, 400);
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    Object.assign(links.style, {
      display:'flex', flexDirection:'column', position:'absolute',
      top:'64px', left:'0', right:'0', background:'#1a1208',
      padding:'16px 5%', gap:'16px', zIndex:'99'
    });
  }
}
