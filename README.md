# 🍔 Kota King — Real Kasi Flavour

> A professional ordering website built for **Kota King**, a local fast food shop
> in Ga-Thoka, Polokwane, Limpopo — built as part of the **Future Interns** internship programme.

 🔗 **Live site** https://noluthando-2018.github.io/FUTURE_FS_03/

---

## 📢 How This Website Helps the Business Grow

Kota King had no online presence before this project. Customers could only order
in person or through unstructured WhatsApp messages — meaning the business was
losing potential sales every day from people who didn't know what was on the menu
or what things cost.

**This website solves that directly.**

Customers can now browse the full menu with photos and prices from any phone,
build their exact order — choosing polony type, sauce and extras — and send a
clean formatted order to the shop via WhatsApp in under two minutes, from
anywhere, at any time.

| Business Benefit | How the site delivers it |
|---|---|
| 📈 **More orders** | Customers who couldn't find the shop can now discover it online, see the menu and order instantly |
| 🛒 **Bigger baskets** | Built-in deals (free fatcake, 10% off, free delivery) automatically encourage customers to spend more |
| ✅ **Fewer mistakes** | Every order arrives formatted with the customer's name, items, quantities, sauce and total — nothing gets missed |
| 🕐 **24/7 presence** | The site works around the clock, even when the shop is closed |
| 💸 **Zero running costs** | Hosted free on GitHub Pages — no monthly fees, no app store, no backend |

---

## 📋 About the Project

| | |
|---|---|
| **Business** | Kota King |
| **Location** | Ga-Thoka, Polokwane, Limpopo |
| **Phone** | 079 760 4504 |
| **Hours** | Mon – Sun · 8:00 AM – 10:00 PM |
| **Years trading** | 4 years |
| **Previous online presence** | None |

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML | Page structure and content |
| CSS | Styling, layout, responsive design |
| JavaScript | Menu, cart logic, WhatsApp ordering |
| SVG Sprite | Scalable icons throughout the site |
| Google Fonts | Bebas Neue + Nunito typography |
| GitHub Pages | Free static hosting |

> **No frameworks. No libraries. No backend. No monthly fees.**

---

## 📁 Project Structure

```
kota-king/
├── index.html        ← All page sections and HTML structure
├── style.css         ← All styling, colours, layout, responsive
├── script.js         ← Menu data, cart system, WhatsApp logic
├── README.md         ← This file
└── images/
    ├── kota.jpg       ← Hero background
    ├── classics.jpg   ← The Classic kota card
    ├── spicy.jpg      ← The Spicy One kota card
    ├── stacker.jpg    ← The Stacker kota card
    ├── king.jpg       ← The King kota card
    ├── special.jpg    ← The Special kota card
    ├── amagwinya.jpg  ← Fatcakes card
    ├── fries.jpg      ← Fries card
    ├── drink.jpg      ← Drinks card
    └── pic.jpg        ← About section photo
```

---

## ✨ Features

### 🍔 Menu
- 5 named kotas with full ingredient lists and food photos
- Base ingredients shown on every card — Quarter Loaf, Chips, Atchar, Polony
- Fatcakes at R2 each with quantity control
- Fries in 3 sizes — Small R15 / Medium R20 / Large R25
- 13 cold drinks across 3 categories — Soft Drinks, Refreshers, Energy & Sports
- 3 popular combo meals with expandable "What's inside" section

### 🧩 2-Step Kota Builder
Every kota added from **anywhere** on the site (menu cards, combos, quick-add,
reorder) goes through the same 2-step modal:

```
Step 1 → Choose polony type   (Beef / Chicken / Pork — required)
Step 2 → Choose sauce(s)      (Tomato / Peri-Peri / Mayo / BBQ / Chutney / None)
```

### 🔧 Custom Kota Builder
- Start from a preset kota, then customise it
- Bundled extras show as **Included** — already in the kota price
- Remove a bundled extra → price drops by that extra's value
- Add new extras → charged at full price on top
- Build from scratch → R15 base (loaf + chips + atchar + polony)
- 5 spice levels — None, Mild, Medium, Hot, Fire

### 🛒 Live Cart
- Slides open from the bottom on any device
- Every item shows photo, label, qty controls and price
- Free fatcake auto-added when 2+ kotas in cart (customer can remove it)
- 10% discount auto-applied when order reaches R100+
- Free delivery auto-applied when order reaches R50+
- Progress bars show how close the customer is to unlocking each deal
- Collection / Delivery toggle — address field appears for delivery

### 📲 WhatsApp Ordering
- One tap sends a fully formatted message to the shop
- Order confirmation screen appears with a unique order number and ETA
- Customer can tap "Check on my order" to follow up directly on WhatsApp
- Last 3 orders saved in browser — expandable, with one-tap reorder

---

## 💰 Menu Pricing

### Kotas
| Item | Price |
|------|-------|
| The Classic | R20 |
| The Spicy One | R25 |
| The Stacker | R35 |
| The King | R50 |
| The Special | R55 |

### Sides & Extras
| Item | Price |
|------|-------|
| Fatcakes | R2 each |
| Small Fries | R15 |
| Medium Fries | R20 |
| Large Fries | R25 |
| Atchar | R2 |
| Egg | R5 |
| Vienna | R5 |
| Cheese | R8 |
| Russian | R8 |
| Beef Patty | R10 |
| Bacon | R10 |

### Drinks
| Item | Price |
|------|-------|
| Coca-Cola 330ml / 500ml / 2L | R12 / R15 / R30 |
| Fanta 330ml / 500ml / 2L | R12 / R15 / R30 |
| Sprite 330ml / 500ml / 2L | R12 / R15 / R30 |
| Pepsi 500ml | R18 |
| Lipton Peach / Lemon | R20 |
| Powerade 500ml | R22 |

### Active Deals
| Deal | Condition |
|------|-----------|
| 🍩 Free Fatcake | Buy any 2 kotas — auto-added to cart |
| 🛵 Free Delivery | Orders over R50 |
| 💰 10% Off | Orders over R100 — auto-applied |

---

## 📱 How Ordering Works

```
1. Customer opens the site on any device
2. Browses the menu or uses the order builder
3. Adds items → every kota goes through the 2-step polony + sauce picker
4. Cart updates live with totals and auto-applied deals
5. Customer enters name and special requests in the cart
6. Selects Collection or Delivery (address field appears for delivery)
7. Taps "Send Order via WhatsApp"
8. Formatted message goes to the shop instantly
9. Order confirmation screen appears with order number and estimated time
```

**Example WhatsApp message the shop receives:**

```
*🍔 KOTA KING ORDER*
*Order #KK84521*
Customer: Sipho
Time: 18:45
Type: Collection 🏠

*YOUR ORDER*
────────────────────
• The Stacker Kota — *R35*
  _Sauce: Tomato, Peri-Peri | Polony: Beef_
• 3x Fatcake — *R6*
• Large Fries — *R25*
────────────────────
Subtotal: R66
Discount (10%): -R7

*TOTAL: R59*

Note: Extra atchar please
```

---

## 🔧 How to Update Content

All menu data lives at the top of `script.js` — no deep coding needed.

### Change a price
```javascript
{ id: 'classic', name: 'The Classic', price: 20, ... }
//                                           ^^^ update this number
```

### Add a new kota
```javascript
{
  id:      'new_kota',
  name:    'My New Kota',
  price:   40,
  extras:  ['Egg', 'Cheese'],
  sauces:  ['Tomato Sauce'],
  spice:   'No Spice',
  badge:   { text: 'New', cls: 'badge-new' },
  image:   'images/newkota.jpg'
}
```

### Change the WhatsApp number
```javascript
const PHONE = '27797604504';
// Format: '27' + 9-digit SA number, no spaces, no +
```

### Change deal thresholds
```javascript
const DEAL_FREE_DELIVERY_MIN = 50;   // minimum for free delivery
const DEAL_DELIVERY_FEE      = 10;   // fee charged below minimum
const DEAL_DISCOUNT_MIN      = 100;  // minimum for 10% discount
const DEAL_DISCOUNT_PCT      = 10;   // discount percentage
const FATCAKE_PRICE          = 2;    // price per fatcake
```



---

## 👩‍💻 Developer

| 📁 **GitHub repo** | https://github.com/Noluthando-2018/FUTURE_FS_03 |
| 👩‍💻 **Developer** | Noluthando Vutomi Sekhula |

