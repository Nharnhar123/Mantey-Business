import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Heart, MapPin, Menu, Search, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';

const phone = '233546921477';

const products = [
  { id: 1, name: 'Everyday Denim', category: 'Jeans', label: 'Bestseller', image: 'photo-1714143136372-ddaf8b606da7', tone: 'Washed indigo' },
  { id: 2, name: 'Oxford Button-Down', category: 'Shirts', label: 'New arrival', image: 'photo-1602810318383-e386cc2a3ccf', tone: 'Soft white' },
  { id: 3, name: 'Modern Suit', category: 'Suits', label: 'Made to impress', image: 'photo-1617137968427-85924c800a22', tone: 'Midnight navy' },
  { id: 4, name: 'Essential Crew Tee', category: 'T-Shirts', label: 'Everyday essential', image: 'photo-1521572163474-6864f9cf17ab', tone: 'Clean cotton' },
  { id: 5, name: 'Weekend Jacket', category: 'Jackets', label: 'Just in', image: 'photo-1551028719-00167b16eac5', tone: 'Utility olive' },
  { id: 6, name: 'Leather Strap Watch', category: 'Watches', label: '', image: 'photo-1633869699811-cd4f63049b36', tone: 'Classic black' },
  { id: 7, name: 'Tailored Trousers', category: 'Trousers', label: '', image: 'photo-1473966968600-fa801b869a1a', tone: 'Warm stone' },
  { id: 8, name: 'Signature Polo', category: 'Shirts', label: '', image: 'photo-1618354691373-d851c5c3a990', tone: 'Deep charcoal' },
  { id: 9, name: 'Relaxed Straight Jeans', category: 'Jeans', label: 'New arrival', image: 'photo-1542272604-787c3835535d', tone: 'Deep indigo' },
  { id: 10, name: 'Classic Black Denim', category: 'Jeans', label: '', image: 'photo-1541099649105-f69ad21f3246', tone: 'Washed black' },
  { id: 11, name: 'Linen Weekend Shirt', category: 'Shirts', label: 'Warm weather', image: 'photo-1598033129183-c4f50c736f10', tone: 'Natural linen' },
  { id: 12, name: 'Everyday Check Shirt', category: 'Shirts', label: '', image: 'photo-1603252109303-2751441dd157', tone: 'Blue check' },
  { id: 13, name: 'Charcoal Occasion Suit', category: 'Suits', label: '', image: 'photo-1592878904946-b3cd8ae243d0', tone: 'Charcoal grey' },
  { id: 14, name: 'Lightweight Suit Jacket', category: 'Suits', label: 'Smart choice', image: 'photo-1598808503746-f34c53b9323e', tone: 'Stone grey' },
  { id: 15, name: 'Soft Cotton Crew Tee', category: 'T-Shirts', label: '', image: 'photo-1527719327859-c6ce80353573', tone: 'Bright white' },
  { id: 16, name: 'Relaxed Graphic Tee', category: 'T-Shirts', label: 'Just in', image: 'photo-1503341504253-dff4815485f1', tone: 'Muted sage' },
  { id: 17, name: 'Classic Stripe Tee', category: 'T-Shirts', label: '', image: 'photo-1527719327859-c6ce80353573', tone: 'Navy stripe' },
  { id: 18, name: 'Stainless Steel Watch', category: 'Watches', label: 'Bestseller', image: 'photo-1523275335684-37898b6baf30', tone: 'Silver finish' },
  { id: 19, name: 'Everyday Chronograph', category: 'Watches', label: '', image: 'photo-1524805444758-089113d48a6d', tone: 'Brushed steel' },
  { id: 20, name: 'Minimal Dress Watch', category: 'Watches', label: 'Gift pick', image: 'photo-1523170335258-f5ed11844a49', tone: 'Brown leather' },
  { id: 21, name: 'Lightweight Bomber', category: 'Jackets', label: '', image: 'photo-1591047139829-d91aecb6caea', tone: 'Classic black' },
  { id: 22, name: 'Everyday Chinos', category: 'Trousers', label: 'Easy to wear', image: 'photo-1517438476312-10d79c077509', tone: 'Khaki' },
  { id: 23, name: 'Smart Tapered Trousers', category: 'Trousers', label: '', image: 'photo-1473966968600-fa801b869a1a', tone: 'Deep charcoal' },
  { id: 24, name: 'Leather Lace-Up Shoes', category: 'Shoes', label: 'Occasion ready', image: 'photo-1614252369475-531eba835eb1', tone: 'Polished brown' },
  { id: 25, name: 'Everyday Sneakers', category: 'Shoes', label: '', image: 'photo-1542291026-7eec264c27ff', tone: 'Clean white' },
  { id: 26, name: 'Classic Leather Belt', category: 'Accessories', label: '', image: 'photo-1633869699811-cd4f63049b36', tone: 'Rich brown' },
  { id: 27, name: 'Canvas Weekend Cap', category: 'Accessories', label: 'Finishing touch', image: 'photo-1588850561407-ed78c282e89b', tone: 'Deep navy' },
];

const categories = ['All pieces', 'Jeans', 'Shirts', 'Suits', 'T-Shirts', 'Jackets', 'Trousers', 'Watches', 'Shoes', 'Accessories'];
const imageUrl = (photo, width = 760) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
const whatsappUrl = (text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="IMF Classic Collection home">
      <span className="brand-crown" aria-hidden="true">♛</span>
      <span className="brand-name">IMF CLASSIC</span>
      <span className="brand-sub">MENSWEAR · BOADUA</span>
    </a>
  );
}

function ProductCard({ product, index, saved, inEnquiry, onSave, onAdd }) {
  return (
    <article className="product-card" data-reveal style={{ '--reveal-delay': `${(index % 4) * 75}ms` }}>
      <div className="product-image-wrap">
        <img className="product-image" src={imageUrl(product.image)} alt={`${product.name} in ${product.tone}`} loading="lazy" />
        {product.label && <span className="product-label">{product.label}</span>}
        <button className={`save-button ${saved ? 'is-saved' : ''}`} type="button" onClick={() => onSave(product.id)} aria-label={saved ? `Remove ${product.name} from saved items` : `Save ${product.name}`} title={saved ? 'Remove from saved' : 'Save item'}>
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button className={`quick-inquire ${inEnquiry ? 'is-added' : ''}`} type="button" onClick={() => onAdd(product.id)}>
          {inEnquiry ? 'Added to enquiry' : 'Add to enquiry'} <ShoppingBag size={15} />
        </button>
      </div>
      <div className="product-info">
        <div><p className="product-category">{product.category}</p><h3>{product.name}</h3><p className="product-tone">{product.tone}</p></div>
      </div>
    </article>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All pieces');
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [saved, setSaved] = useState([]);
  const [enquiryItems, setEnquiryItems] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All pieces' || product.category === activeCategory;
    const matchesQuery = `${product.name} ${product.category} ${product.tone}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  }), [activeCategory, query]);

  const toggleSaved = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const toggleEnquiryItem = (id) => setEnquiryItems((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const enquiryMessage = enquiryItems.length
    ? `Hello IMF Classic Collection, I would like to ask about these items:\n${products.filter((product) => enquiryItems.includes(product.id)).map((product) => `- ${product.name}`).join('\n')}\nPlease let me know what is available and the prices.`
    : 'Hello IMF Classic Collection, I would like help choosing an item. Please share what is available and the prices.';

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [visibleProducts]);

  return (
    <>
      <div className="announcement"><span>Good menswear, right here in Boadua.</span><a href="#visit"><MapPin size={14} /> Opposite Presby Senior High School <ArrowRight size={14} /></a></div>
      <header className="site-header" id="home">
        <button className="icon-button mobile-menu-button" type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>{mobileMenuOpen ? <X /> : <Menu />}</button>
        <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a><a href="#collection" onClick={() => setMobileMenuOpen(false)}>Collection</a><a href="#visit" onClick={() => setMobileMenuOpen(false)}>Visit us</a>
        </nav>
        <BrandMark />
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Search collection" title="Search collection" onClick={() => { setSearchOpen(!searchOpen); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }}><Search size={19} /></button>
          <a className="saved-link" href="#collection" aria-label={`${saved.length} saved items`}><Heart size={18} /><span>{saved.length}</span></a>
          <a className="bag-link" href={whatsappUrl(enquiryMessage)} target="_blank" rel="noreferrer" aria-label={`Send ${enquiryItems.length ? `${enquiryItems.length} selected items` : 'an enquiry'} to IMF Classic Collection on WhatsApp`}><ShoppingBag size={18} /><span className="bag-label">Enquire{enquiryItems.length ? ` (${enquiryItems.length})` : ''}</span></a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="eyebrow-rule" /> IMF CLASSIC COLLECTION</p>
            <h1 id="hero-title">Good looks.<br /><em>Right here.</em></h1>
            <p className="hero-description">Jeans, shirts, suits and everyday essentials for Boadua and beyond.</p>
            <p className="hero-address"><MapPin size={19} /> Boadua, opposite Presby Senior High School</p>
            <div className="hero-actions"><a className="button button-whatsapp" href={whatsappUrl('Hello IMF Classic Collection, I would like to ask about your collection.')} target="_blank" rel="noreferrer">Chat with us on WhatsApp <ArrowRight size={18} /></a><a className="button button-outline" href="#collection">Browse the collection <ArrowDown size={17} /></a></div>
          </div>
          <div className="hero-visual">
            <img src={imageUrl('photo-1617137968427-85924c800a22', 1400)} alt="Man in a sharply tailored dark suit" />
            <div className="hero-caption"><span>IMF CLASSIC COLLECTION</span><span>BOADUA, GHANA</span></div>
            <div className="hero-stamp" data-reveal><span>GOOD</span><strong>STYLE</strong><span>LOCAL</span></div>
          </div>
        </section>

        <section className="category-band" aria-label="Shop by category" data-reveal>
          <span className="category-heading">Find your fit</span>
          <div className="category-links">{categories.slice(1).map((category, index) => <button type="button" key={category} onClick={() => { setActiveCategory(category); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }}><span>0{index + 1}</span>{category}<ArrowRight size={14} /></button>)}</div>
        </section>

        <section className="collection-section" id="collection">
          <div className="section-topline"><span>CURATED FOR HIM</span><span>BOADUA, GHANA · {products.length} PIECES</span></div>
          <div className="collection-heading-row" data-reveal><div><p className="eyebrow">THE GOOD-STUFF EDITION</p><h2>Wear it <em>your way.</em></h2></div><p className="collection-note">Reliable favourites and new finds, chosen to make getting dressed feel easy.</p></div>
          <div className="collection-controls">
            <div className="filter-tabs" role="tablist" aria-label="Filter products by category">{categories.map((category) => <button className={activeCategory === category ? 'active' : ''} type="button" role="tab" aria-selected={activeCategory === category} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
            <div className="control-tools">
              {searchOpen && <label className="search-field"><Search size={15} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces" aria-label="Search pieces" /><button type="button" onClick={() => { setQuery(''); setSearchOpen(false); }} aria-label="Close search"><X size={15} /></button></label>}
              {!searchOpen && <button className="tool-button" type="button" onClick={() => setSearchOpen(true)}><Search size={16} /><span>Search</span></button>}
              <span className="result-count"><SlidersHorizontal size={15} /> {visibleProducts.length} pieces</span>
            </div>
          </div>
          {visibleProducts.length > 0 ? <div className="product-grid">{visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} saved={saved.includes(product.id)} inEnquiry={enquiryItems.includes(product.id)} onSave={toggleSaved} onAdd={toggleEnquiryItem} />)}</div> : <div className="empty-state"><p>No pieces found for “{query}”.</p><button type="button" onClick={() => { setQuery(''); setActiveCategory('All pieces'); }}>Clear filters</button></div>}
          <div className="collection-bottom"><span>SHOWING {visibleProducts.length} OF {products.length} PIECES</span><a href={whatsappUrl('Hello IMF Classic Collection, could you show me more items?')} target="_blank" rel="noreferrer">Looking for something specific? Ask us <ArrowRight size={15} /></a></div>
        </section>

        <section className="story-section" id="story">
          <div className="story-image"><img src={imageUrl('photo-1515886657613-9f3515b0c78f', 1100)} alt="A considered everyday outfit styled with confidence" loading="lazy" /></div>
          <div className="story-copy" data-reveal><p className="eyebrow"><span className="eyebrow-rule" /> A LITTLE ABOUT US</p><h2>Style that feels<br /><em>like you.</em></h2><p>IMF Classic Collection brings together the pieces you reach for again and again: confident tailoring, easy essentials and finishing touches that make them yours.</p><p>Good taste is personal. Our team is here to help you find yours.</p><a className="text-link" href={whatsappUrl('Hello IMF Classic Collection, I would love some help finding my style.')}>Meet your style team <ArrowRight size={16} /></a><div className="story-signoff"><span>IMF CLASSIC COLLECTION</span><span>GOOD THINGS, WELL WORN</span></div></div>
        </section>

        <section className="contact-band" id="visit" data-reveal><div><p className="eyebrow">COME SAY HELLO</p><h2>Find your <em>next favourite.</em></h2><p className="shop-location"><MapPin size={16} /> Boadua, opposite Presby Senior High School</p></div><a className="button button-light" href={whatsappUrl('Hello IMF Classic Collection, I would like to speak with someone about your menswear collection.')} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight size={16} /></a><span className="contact-number">+233 54 692 1477</span></section>
      </main>

      <footer className="site-footer"><BrandMark /><span className="footer-note">Good clothes. Good company.</span><div className="footer-links"><a href="#collection">Shop the collection</a><a href="#visit">Visit us</a><a href={whatsappUrl('Hello IMF Classic Collection!')} target="_blank" rel="noreferrer">WhatsApp us</a><span>© 2026 IMF Classic Collection</span></div></footer>
    </>
  );
}
