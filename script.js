
const PRODUCTS = [
  {id:1,name:"LAVEA PLEATS",price:389285,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-81zti-mqy6iqckrl6pf4",sizes:["S","M","L"],colors:["Pink","White","Black"],desc:"Atasan pleats dengan tekstur ringan dan siluet feminin untuk tampilan sehari-hari.",variantImages:{Pink:"https://down-id.img.susercontent.com/file/id-11134207-81ztg-mqy6n95hjdho5d",White:"https://down-id.img.susercontent.com/file/id-11134207-81ztp-mqy6nrpvny8c0a",Black:"https://down-id.img.susercontent.com/file/id-11134207-81ztl-mqy6o381e4n423"}},
  {id:2,name:"SUNDAY PLAID BLOUSE",price:278070,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134201-81zte-mst9thnsprlxe9",sizes:["S","M","L"],colors:["Pink Plaid"],desc:"Blouse motif plaid dengan potongan santai dan nuansa feminin yang mudah dipadukan.",sizeHeaders:["Size","Bust","Length","Sleeve Length"],sizeGuide:[["All Size","110 cm","55 cm","54 cm"]]},
  {id:3,name:"CABLE KNIT SWEATER",price:280440,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-82251-minvjahgj7d473",sizes:["S","M","L"],colors:["Cream","Grey","Brown","Black"],desc:"Sweater cable knit dengan tekstur rajut klasik untuk gaya casual yang hangat.",variantImages:{Cream:"https://down-id.img.susercontent.com/file/id-11134207-82250-mitmoxp59kaq66",Grey:"https://down-id.img.susercontent.com/file/id-11134207-8224v-mixyogx2dhj554",Brown:"https://down-id.img.susercontent.com/file/id-11134207-822wl-mnz9h22pj4sgf1",Black:"https://down-id.img.susercontent.com/file/id-11134207-8224u-mixyq0w211j498"}},
  {id:4,name:"ROSEFIELD CARDIGAN",price:389095,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-8224r-mjnulhirjwuadd",sizes:["S","M","L"],colors:["Pink Floral"],desc:"Cardigan floral dengan nuansa romantis yang cocok untuk layering."},
  {id:5,name:"SERENE BLOOM CARDIGAN",price:389095,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-82250-mjnviq51nzeua1",sizes:["S","M","L"],colors:["Cream","Blush"],desc:"Cardigan dengan detail bunga yang memberi kesan lembut dan anggun.",variantImages:{Cream:"https://down-id.img.susercontent.com/file/id-11134207-8224u-mjkrkg6maa6878",Blush:"https://down-id.img.susercontent.com/file/id-11134207-8224s-mjkrkafqyakge4"}},
  {id:6,name:"DAYLIGHT JACKET",price:371070,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134201-81ztg-mst8jsxgvd39c1",sizes:["S","M","L"],colors:["Brown"],desc:"Jaket casual bernuansa earthy untuk melengkapi outfit sehari-hari."},
  {id:7,name:"GRACE JACKET",price:371070,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134201-81ztj-mst93phppdz466",sizes:["S","M","L"],colors:["Black","Cream"],desc:"Jaket statement dengan detail rose embroidery dan potongan modern.",variantImages:{Cream:"https://down-id.img.susercontent.com/file/id-11134207-81ztp-mstjhx4yoyrkec",Black:"https://down-id.img.susercontent.com/file/id-11134207-81ztq-mstji2q0avwmad"}},
  {id:8,name:"LUI CARDIGAN",price:350550,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-82250-min0auj351xg67",sizes:["S","M","L"],colors:["Brown"],desc:"Cardigan rajut dengan pola cable dan detail kancing yang feminin."},
  {id:9,name:"LANNY DOTTE BLOUSE",price:271833,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-822wt-mnl93e6hcglef5",sizes:["S","M","L"],colors:["White","Brown"],desc:"Blouse polkadot dengan siluet feminin dan detail yang manis.",variantImages:{White:"https://down-id.img.susercontent.com/file/id-11134207-822wg-mpluuq97826a9f", "Brown":"https://down-id.img.susercontent.com/file/id-11134207-822wj-mpluux3zkf0ide"}},
  {id:10,name:"LUMI LACE BARREL PANTS",price:351673,category:"Pants",image:"https://down-id.img.susercontent.com/file/id-11134207-822wq-mnm8anvn591d54",sizes:["S","M","L"],colors:["Ivory","Black"],desc:"Celana barrel dengan detail lace untuk tampilan feminin dan nyaman.",variantImages:{Ivory:"https://down-id.img.susercontent.com/file/id-11134207-822wn-mnp5on1z4360e3",Black:"https://down-id.img.susercontent.com/file/id-11134207-822wr-mnp5oxwy73ls20"}},
  {id:11,name:"CLASSIC ROSE CARDIGAN",price:389095,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-8224y-mjkpvjdq3e2o35",sizes:["S","M","L"],colors:["Brown","Cream"],desc:"Cardigan klasik dengan motif rose sebagai detail utama bagian depan.",variantImages:{Brown:"https://down-id.img.susercontent.com/file/id-11134207-8224x-mjkqe0qk1s00ed",Cream:"https://down-id.img.susercontent.com/file/id-11134207-8224q-mjkqe7swwb28c4"}},
  {id:12,name:"LACE CARDIGAN",price:369550,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134201-81ztl-mrih3jzqlipy9f",sizes:["S","M","L"],colors:["Brown","Cream"],desc:"Cardigan rajut dengan detail lace pada bagian bawah dan lengan.",variantImages:{Cream:"https://down-id.img.susercontent.com/file/id-11134207-81zth-mrjrow8ph43p93",Brown:"https://down-id.img.susercontent.com/file/id-11134207-81ztp-mrjrpai1cmwzb7"}},
  {id:13,name:"LAVEA SUEDE BLOUSE COLLECTION",price:379050,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-8224y-mk0dz4716v401e",sizes:["S","M","L"],colors:["Cream"],desc:"Blouse suede dengan nuansa earthy dan pilihan warna yang beragam."},
  {id:14,name:"SKY BLOUSE",price:287029,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-82251-mio20s36kg082b",sizes:["S","M","L"],colors:["Cream"],desc:"Blouse ringan dengan tampilan clean dan feminin untuk aktivitas harian.",variantImages:{"Cream":"https://down-id.img.susercontent.com/file/id-11134207-7ra0h-mbfhzlo8alkd60",Cream:"https://down-id.img.susercontent.com/file/id-11134207-8224z-miofbzg6mj2cad"}},
  {id:15,name:"LAVEA COLLAR SWEATER",price:310838,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-8224v-miny424mbwnc39",sizes:["S","M","L"],colors:["Black","Cream","Brown","Grey","Pink","Beige","Navy","Maroon"],desc:"Sweater berkerah dengan rajutan lembut dan pilihan warna yang banyak.",variantImages:{Black:"https://down-id.img.susercontent.com/file/id-11134207-8224v-miny424mbwnc39",Cream:"https://down-id.img.susercontent.com/file/id-11134207-822wu-mnwj7bivooasc1",Beige:"https://down-id.img.susercontent.com/file/id-11134207-822wp-mnwj6h2o1hq87f",Grey:"https://down-id.img.susercontent.com/file/id-11134207-822wt-mnwq8phlwtty40",Navy:"https://down-id.img.susercontent.com/file/id-11134207-822wm-mnxrdoi68cncad",Maroon:"https://down-id.img.susercontent.com/file/id-11134207-822wp-mnxrqv0nv1fo69",Pink:"https://down-id.img.susercontent.com/file/id-11134207-822wq-mnwq9ko3ftvn08",Black:"https://down-id.img.susercontent.com/file/id-11134207-822ws-mnwq8djixbsyac",Brown:"https://down-id.img.susercontent.com/file/id-11134207-822ws-mnwq8k1u8t8o2e"}},
  {id:16,name:"LAVEA BLOUSE",price:285827,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-8224p-min08qprogef8c",sizes:["S","M","L"],colors:["Brown"],desc:"Blouse dengan detail lengan serut dan potongan relaxed yang feminin."},
  {id:17,name:"LILY BLOUSE",price:332366,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-8224z-minyjynegbgifa",sizes:["S","M","L"],colors:["White","Cream","Brown"],desc:"Blouse putih dengan kerah tinggi dan detail peplum yang manis.",variantImages:{White:"https://down-id.img.susercontent.com/file/id-11134207-7ra0r-mbfi32vx24yb6e",Cream:"https://down-id.img.susercontent.com/file/id-11134207-7ra0p-mbfi37kw6v8tc0",Brown:"https://down-id.img.susercontent.com/file/id-11134207-7ra0p-mbfi3f3f8dzaca"}},
  {id:18,name:"BASIC VEST",price:251465,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-8224o-min017t9xuywc2",sizes:["S","M","L"],colors:["Cream","Brown"],desc:"Vest basic dengan potongan clean yang mudah dipadukan dengan blouse atau kemeja.",variantImages:{Cream:"https://down-id.img.susercontent.com/file/id-11134207-7rbka-m9ju1rwdadyr0c",Brown:"https://down-id.img.susercontent.com/file/id-11134207-7rbk7-m9ju24w5ykg2fe"}},
  {id:19,name:"JEMA SHIRT",price:251020,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-8224t-minzzjf21og000",sizes:["S","M","L"],colors:["Red Stripe"],desc:"Kemeja stripe dengan potongan relaxed dan detail lengan yang unik."},
  {id:20,name:"BLAZER EMBROIDERY",price:301438,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-82252-min0430argu986",sizes:["S","M","L"],colors:["Beige"],desc:"Blazer dengan detail embroidery untuk tampilan smart casual."},
  {id:21,name:"CABLE CARDIGAN",price:302144,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-8224o-mimzym0bwn44f1",sizes:["S","M","L"],colors:["Cream"],desc:"Cardigan cable knit dengan tekstur klasik dan pilihan warna lembut."},
  {id:22,name:"CLASSIC ROSE SWEATER",price:405537,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-822ws-mn6lplcpuxvp8d",sizes:["S","M","L"],colors:["White"],desc:"Sweater dengan motif rose sebagai aksen utama dan siluet relaxed."},
  {id:23,name:"NOE WIDE PANTS",price:289000,category:"Pants",image:"https://down-my.img.susercontent.com/file/id-11134207-8224s-mk0miftnddds75",sizes:["S","M","L"],colors:["Cream"],desc:"Wide-leg pants dengan potongan longgar dan nyaman untuk daily look."},
  {id:24,name:"LADY BASIC CARDIGAN",price:350550,category:"Outer",image:"https://down-id.img.susercontent.com/file/id-11134207-82250-mimzg489xpfsaa",sizes:["S","M","L"],colors:["Grey","Black","White","Taupe"],desc:"Cardigan rib dengan kerah dan kancing depan yang simple dan feminin.",variantImages:{Grey:"https://down-id.img.susercontent.com/file/id-11134207-8224o-mgnc3ow5h05l87",Black:"https://down-id.img.susercontent.com/file/id-11134207-8224x-mgnc47bqwjd484",White:"https://down-id.img.susercontent.com/file/id-11134207-82250-mgnc54r6wwsp89",Taupe:"https://down-id.img.susercontent.com/file/id-11134207-8224u-mgnc5gkpy0i320"}},
  {id:25,name:"CELIA SHIRT KEMEJA STRIPE",price:256033,category:"Tops",image:"https://down-id.img.susercontent.com/file/id-11134207-8224p-min06bzencasc9",sizes:["S","M","L"],colors:["Brown Stripe"],desc:"Kemeja stripe dengan tampilan clean dan mudah dipakai untuk daily look."}
];

function rupiah(n) {
  return new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:0}).format(n).replace('IDR','Rp ').replace(/\u00a0/g,' ').replace(/Rp +/,'Rp ');
}
function getCart() { return JSON.parse(sessionStorage.getItem('laveaCart') || '[]'); }
function saveCart(cart) { sessionStorage.setItem('laveaCart', JSON.stringify(cart)); updateCartCount(); }
function getWishlist() { return JSON.parse(sessionStorage.getItem('laveaWishlist') || '[]'); }
function saveWishlist(list) { sessionStorage.setItem('laveaWishlist', JSON.stringify(list)); }
function isLoggedIn() { return sessionStorage.getItem('laveaLoggedIn') === 'true'; }
function openLoginModal(message='Silakan login terlebih dahulu untuk melanjutkan.') {
  const modal=document.querySelector('#loginModal'); if(!modal) return;
  const note=document.querySelector('#loginNote'); if(note) note.textContent=message;
  modal.classList.add('show');
}
function closeLoginModal() { const modal=document.querySelector('#loginModal'); if(modal) modal.classList.remove('show'); }
function requireLogin(action) { if(!isLoggedIn()){ openLoginModal('Silakan login sebagai pengguna terlebih dahulu untuk '+action+'.'); return false; } return true; }
function updateLoginButton() { const b=document.querySelector('#loginButton'); if(b) b.textContent=isLoggedIn()?'Account':'Login'; }

function updateCartCount() {
  const count = getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-count').forEach(e=>e.textContent=count);
}
function toast(msg) {
  let t=document.querySelector('.toast');
  if(!t) return;
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),1800);
}
function addToCart(id, qty=1) {
  if(!requireLogin('menambahkan produk ke keranjang')) return;
  const p=PRODUCTS.find(x=>x.id===Number(id));
  if(!p) return;
  const cart=getCart();
  const existing=cart.find(x=>x.id===p.id);
  if(existing) existing.qty += qty;
  else cart.push({id:p.id, qty:qty});
  saveCart(cart); toast(p.name+' ditambahkan ke keranjang');
}
function toggleWishlist(id, button) {
  id=Number(id);
  let list=getWishlist();
  if(list.includes(id)) {
    list=list.filter(x=>x!==id);
    button.classList.remove('active');
    button.textContent='♡';
    toast('Dihapus dari wishlist');
  } else {
    list.push(id);
    button.classList.add('active');
    button.textContent='♥';
    toast('Ditambahkan ke wishlist');
  }
  saveWishlist(list);
  if(document.querySelector('#wishlistModal.show')) showWishlist();
}

function showWishlist() {
  const modal=document.querySelector('#wishlistModal');
  const box=document.querySelector('#wishlistItems');
  if(!modal || !box) return;
  const list=getWishlist();
  if(!list.length) box.innerHTML='<div class=\"empty\"><h3>Belum ada produk favorit</h3><p>Klik ikon ♡ pada produk yang kamu suka.</p></div>';
  else box.innerHTML=list.map(id=>{const p=PRODUCTS.find(x=>x.id===id); return p?`<div class=\"wishlist-item\"><img src=\"${p.image}\" alt=\"${p.name}\"><div><strong>${p.name}</strong><div class=\"price\">${rupiah(p.price)}</div><a class=\"small-btn primary\" href=\"detail.html?id=${p.id}\">Lihat Produk</a></div></div>`:''}).join('');
  modal.classList.add('show');
}
function closeWishlist() { const m=document.querySelector('#wishlistModal'); if(m) m.classList.remove('show'); }
function injectModals() {
  if(document.querySelector('#loginModal')) return;
  document.body.insertAdjacentHTML('beforeend', `
  <div class=\"modal\" id=\"loginModal\"><div class=\"modal-box\"><button class=\"modal-close\" onclick=\"closeLoginModal()\">×</button><div class=\"eyebrow\">LAVÉA account</div><h2>Login</h2><p id=\"loginNote\" class=\"modal-note\">Silakan login terlebih dahulu untuk melanjutkan.</p><form id=\"loginForm\"><div class=\"field\"><label>Nama / Email</label><input id=\"loginName\" required placeholder=\"Masukkan nama atau email\"></div><div class=\"field\" style=\"margin-top:12px\"><label>Password</label><input type=\"password\" required placeholder=\"Masukkan password\"></div><button class=\"btn\" style=\"width:100%;margin-top:18px\" type=\"submit\">LOGIN</button></form><p class=\"modal-footnote\">Login ini hanya simulasi front-end dan tidak terhubung ke database.</p></div></div>
  <div class=\"modal\" id=\"wishlistModal\"><div class=\"modal-box wishlist-box\"><button class=\"modal-close\" onclick=\"closeWishlist()\">×</button><div class=\"eyebrow\">Your favorites</div><h2>Favorite Products</h2><div id=\"wishlistItems\"></div></div></div>`);
  document.querySelector('#loginForm').addEventListener('submit',e=>{e.preventDefault();sessionStorage.setItem('laveaLoggedIn','true');closeLoginModal();updateLoginButton();toast('Login berhasil (simulasi)');});
  updateLoginButton();
}
function productCard(p) {
  const wished=getWishlist().includes(p.id);
  return `<article class="card">
    <a href="detail.html?id=${p.id}" class="card-img">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
    </a>
    <span class="badge">${p.id<=4?'NEW':'FEATURED'}</span>
    <button class="wish ${wished?'active':''}" onclick="toggleWishlist(${p.id},this)">${wished?'♥':'♡'}</button>
    <div class="card-body">
      <div class="card-category">${p.category}</div>
      <h3>${p.name}</h3>
      <div class="price">${rupiah(p.price)}</div>
      <div class="card-meta">Size: ${p.sizes.join(' / ')}<br>Warna: ${p.colors.slice(0,3).join(', ')}${p.colors.length>3?' +':''}</div>
      <div class="card-actions">
        <a class="small-btn" href="detail.html?id=${p.id}">Detail</a>
        <button class="small-btn primary" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  </article>`;
}
function renderProducts(list, target='#product-list') {
  const el=document.querySelector(target);
  if(!el) return;
  el.innerHTML=list.length ? list.map(productCard).join('') : '<div class="empty" style="grid-column:1/-1">Produk tidak ditemukan.</div>';
}
function setupShop() {
  const cat=document.querySelector('#categoryFilter');
  const sort=document.querySelector('#sortFilter');
  const search=document.querySelector('#searchInput');
  if(!cat) return;
  function run() {
    let list=[...PRODUCTS];
    const q=(search.value||'').toLowerCase();
    if(cat.value!=='all') list=list.filter(p=>p.category===cat.value);
    if(q) list=list.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q));
    if(sort.value==='low') list.sort((a,b)=>a.price-b.price);
    if(sort.value==='high') list.sort((a,b)=>b.price-a.price);
    if(sort.value==='az') list.sort((a,b)=>a.name.localeCompare(b.name));
    renderProducts(list);
    const n=document.querySelector('#resultCount'); if(n) n.textContent=list.length+' produk';
  }
  [cat,sort,search].forEach(e=>e.addEventListener('input',run));
  const params=new URLSearchParams(location.search);
  const initialCat=params.get('cat');
  if(initialCat && ['Tops','Pants','Outer'].includes(initialCat)) cat.value=initialCat;
  run();
}
function setupHome() {
  if(document.querySelector('#featured-list')) renderProducts(PRODUCTS.slice(0,8),'#featured-list');
}
function getSizeGuide(p) {
  if (p.sizeGuide) return p.sizeGuide;
  if (p.category === 'Pants') {
    return [
      ['S','64–68 cm','88–92 cm','98–100 cm'],
      ['M','68–72 cm','92–96 cm','99–101 cm'],
      ['L','72–76 cm','96–100 cm','100–102 cm']
    ];
  }
  return [
    ['S','86–90 cm','36 cm','56 cm'],
    ['M','90–94 cm','38 cm','58 cm'],
    ['L','94–98 cm','40 cm','60 cm']
  ];
}
function getProductImages(p) {
  const imgs=[];
  if(p.variantImages) p.colors.forEach(c=>{ if(p.variantImages[c]) imgs.push({color:c,url:p.variantImages[c]}); });
  if(!imgs.length || !imgs.some(x=>x.url===p.image)) imgs.unshift({color:p.colors[0]||'',url:p.image});
  return imgs;
}
function setupDetail() {
  const wrap=document.querySelector('#detail-page');
  if(!wrap) return;
  const id=Number(new URLSearchParams(location.search).get('id')||1);
  const p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0];
  const images=getProductImages(p);
  const guide=getSizeGuide(p);
  wrap.innerHTML=`
    <div class="detail-gallery">
      <div class="thumb-list" id="detailThumbs">${images.map((im,i)=>`<button class="thumb ${i===0?'active':''}" data-image="${im.url}" data-color="${im.color}"><img src="${im.url}" alt="${p.name} ${im.color}" loading="lazy"></button>`).join('')}</div>
      <div class="detail-main"><img id="mainProductImage" src="${images[0].url}" alt="${p.name}"></div>
    </div>
    <div class="detail-info">
      <div class="eyebrow">${p.category} / LAVÉA COLLECTION</div>
      <h1>${p.name}</h1>
      <div class="detail-price">${rupiah(p.price)}</div>
      <p class="detail-desc">${p.desc}</p>
      <div class="option-title">SIZE</div>
      <div class="option-list" id="sizeOptions">${p.sizes.map((x,i)=>`<button class="option ${i===0?'selected':''}">${x}</button>`).join('')}</div>
      <div class="size-guide"><div class="size-guide-title">PANDUAN UKURAN</div><div class="size-guide-table"><table><tr>${(p.sizeHeaders || ["Size",p.category==='Pants'?'Pinggang':'Lingkar Dada',p.category==='Pants'?'Pinggul':'Lebar Bahu',p.category==='Pants'?'Panjang':'Panjang Baju']).map(h=>`<th>${h}</th>`).join('')}</tr>${guide.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div><small>Ukuran di atas adalah panduan mockup jika ukuran asli tidak tersedia. Ukuran dapat berbeda sesuai model dan bahan produk.</small></div>
      <div class="option-title">COLOR</div>
      <div class="option-list" id="colorOptions">${p.colors.map((x,i)=>`<button class="option color-option ${i===0?'selected':''}" data-color="${x}">${x}</button>`).join('')}</div>
      <div class="detail-add">
        <div class="qty"><button id="minus">−</button><input id="qty" value="1" readonly><button id="plus">+</button></div>
        <button class="btn" id="addDetail">ADD TO CART</button>
      </div>
      <div class="info-box">
        <div class="info-row"><span>Material</span><span>Selected collection</span></div>
        <div class="info-row"><span>Shipping</span><span>Available Indonesia</span></div>
        <div class="info-row"><span>Returns</span><span>See store policy</span></div>
      </div>
    </div>`;
  const main=document.querySelector('#mainProductImage');
  function setImage(url,color){
    if(url) main.src=url;
    document.querySelectorAll('.thumb').forEach(t=>t.classList.toggle('active',t.dataset.image===url));
    document.querySelectorAll('#colorOptions .option').forEach(b=>b.classList.toggle('selected',b.dataset.color===color));
  }
  document.querySelectorAll('#detailThumbs .thumb').forEach(t=>t.addEventListener('click',()=>setImage(t.dataset.image,t.dataset.color)));
  document.querySelectorAll('#sizeOptions .option').forEach(b=>b.addEventListener('click',()=>{
    b.parentElement.querySelectorAll('.option').forEach(x=>x.classList.remove('selected')); b.classList.add('selected');
  }));
  document.querySelectorAll('#colorOptions .option').forEach(b=>b.addEventListener('click',()=>{
    const color=b.dataset.color;
    const match=images.find(x=>x.color===color);
    b.parentElement.querySelectorAll('.option').forEach(x=>x.classList.remove('selected')); b.classList.add('selected');
    if(match) setImage(match.url,color);
  }));
  let q=1;
  document.querySelector('#minus').onclick=()=>{if(q>1) q--;document.querySelector('#qty').value=q};
  document.querySelector('#plus').onclick=()=>{q++;document.querySelector('#qty').value=q};
  document.querySelector('#addDetail').onclick=()=>addToCart(p.id,q);
  renderProducts(PRODUCTS.filter(x=>x.id!==p.id).slice(0,4),'#related-list');
}
function setupCart() {
  const listEl=document.querySelector('#cart-list'), sumEl=document.querySelector('#cart-summary');
  if(!listEl) return;
  function draw() {
    const cart=getCart();
    if(!cart.length) {
      listEl.innerHTML='<div class="empty"><h2>Keranjang masih kosong</h2><p>Yuk pilih produk favoritmu.</p><a class="btn" href="shop.html">Lihat Produk</a></div>';
      sumEl.innerHTML=''; return;
    }
    let total=0;
    listEl.innerHTML=cart.map(item=>{
      const p=PRODUCTS.find(x=>x.id===item.id); total+=p.price*item.qty;
      return `<div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div><h3>${p.name}</h3><p>${rupiah(p.price)}</p>
          <div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><input value="${item.qty}" readonly><button onclick="changeQty(${p.id},1)">+</button></div>
        </div>
        <div><strong>${rupiah(p.price*item.qty)}</strong><br><button class="remove" onclick="removeItem(${p.id})">Hapus</button></div>
      </div>`;
    }).join('');
    sumEl.innerHTML=`<h2>Order Summary</h2><div class="summary-row"><span>Subtotal</span><strong>${rupiah(total)}</strong></div><div class="summary-row"><span>Shipping</span><span>Calculated at checkout</span></div><div class="summary-row summary-total"><span>Total</span><strong>${rupiah(total)}</strong></div><a class="btn" style="width:100%;margin-top:15px" href="checkout.html" onclick="return requireLogin('melanjutkan ke checkout')">CHECKOUT</a>`;
  }
  window.changeQty=(id,d)=>{let c=getCart(),i=c.find(x=>x.id===id);if(i){i.qty+=d;if(i.qty<=0)c=c.filter(x=>x.id!==id)}saveCart(c);draw()};
  window.removeItem=(id)=>{saveCart(getCart().filter(x=>x.id!==id));draw();toast('Produk dihapus')};
  draw();
}
function setupCheckout() {
  const form=document.querySelector('#checkoutForm'), success=document.querySelector('#success');
  if(!form) return;
  if(!isLoggedIn()) setTimeout(()=>openLoginModal('Login diperlukan sebelum melakukan pemesanan.'),250);
  const cart=getCart();
  const total=cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+p.price*i.qty},0);
  document.querySelector('#checkoutTotal').textContent=rupiah(total);
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!requireLogin('menyelesaikan checkout')) return;
    if(!cart.length){toast('Keranjang masih kosong');return}
    form.style.display='none'; success.classList.add('show'); sessionStorage.removeItem('laveaCart'); updateCartCount();
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  injectModals();
  updateCartCount(); setupHome(); setupShop(); setupDetail(); setupCart(); setupCheckout();
  const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
});
