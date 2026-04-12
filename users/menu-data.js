// ============================================================
//  menu-data.js — SHARED DATA, dipakai oleh semua halaman
//  localStorage key standar: "cart"
// ============================================================
const MENU_DATA = [
  { id:"d1", name:"Espresso",             price:15000, category:"Minuman", description:"Single shot espresso dengan cita rasa strong dan bold.",        image:"https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04-500x375.jpg" },
  { id:"d2", name:"Americano",            price:18000, category:"Minuman", description:"Espresso dengan tambahan air panas, ringan dan smooth.",         image:"https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=300&q=80" },
  { id:"d3", name:"Cappuccino",           price:25000, category:"Minuman", description:"Espresso dengan steamed milk dan foam lembut.",                  image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80" },
  { id:"d4", name:"Latte",               price:26000, category:"Minuman", description:"Kopi dengan susu creamy, cocok untuk santai.",                   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8Q_RrELDLpBSuhHF9CEAWgSBo9mRQtSy-g&s" },
  { id:"d5", name:"Kopi Susu Gula Aren", price:22000, category:"Minuman", description:"Espresso, susu segar, dan gula aren khas Indonesia.",             image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=300&q=80" },
  { id:"d6", name:"Caramel Latte",       price:28000, category:"Minuman", description:"Latte dengan sirup karamel manis.",                               image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80" },
  { id:"d7", name:"Matcha Latte",        price:27000, category:"Minuman", description:"Matcha premium dengan susu lembut.",                              image:"https://www.justonecookbook.com/wp-content/uploads/2025/12/Matcha-Latte-4598-I-2-500x375.jpg" },
  { id:"d8", name:"Chocolate",           price:23000, category:"Minuman", description:"Minuman coklat hangat atau dingin yang creamy.",                  image:"https://124860899.cdn6.editmysite.com/uploads/1/2/4/8/124860899/AFCXO5BO3YOQDYIMND6FEXYM.jpeg" },
  { id:"d9", name:"Ice Tea",             price:12000, category:"Minuman", description:"Teh segar dingin cocok untuk cuaca panas.",                       image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80" },
  { id:"f1", name:"Croissant",           price:20000, category:"Makanan", description:"Roti croissant butter yang flaky dan lembut.",                    image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80" },
  { id:"f2", name:"French Fries",        price:18000, category:"Makanan", description:"Kentang goreng renyah dengan saus.",                              image:"https://www.allrecipes.com/thmb/8_B6OD1w6h1V0zPi8KAGzD41Kzs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50223-homemade-crispy-seasoned-french-fries-VAT-Beauty-4x3-789ecb2eaed34d6e879b9a93dd56a50a.jpg" },
  { id:"f3", name:"Chicken Wings",       price:30000, category:"Makanan", description:"Sayap ayam crispy dengan saus pedas manis.",                      image:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=300&q=80" },
  { id:"f4", name:"Toast Bread",         price:17000, category:"Makanan", description:"Roti panggang dengan topping coklat / keju.",                     image:"https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80" }
];

const TABLE_NO = "A01";

// ── localStorage key standar: "cart" ──────────────────────────
const formatRupiah  = n => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',minimumFractionDigits:0}).format(n);
const getCart       = () => JSON.parse(localStorage.getItem('cart')) || [];
const saveCart      = c  => localStorage.setItem('cart', JSON.stringify(c));
const cartCount     = () => getCart().reduce((s,i) => s + i.qty, 0);
const cartTotal     = () => getCart().reduce((s,ci) => {
    const m = MENU_DATA.find(x => x.id === ci.id);
    return s + (m ? m.price * ci.qty : 0);
}, 0);
const generateInvoice = () => '#INV' + Date.now().toString().slice(-6);
