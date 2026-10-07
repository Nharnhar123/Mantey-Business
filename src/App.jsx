import React, { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Heart, MapPin, Menu, Search, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { categories, products } from './catalog.js';

const phone = '233546921477';
const imageUrl = (photo, width = 760) => photo.startsWith('pexels:')
  ? `https://images.pexels.com/photos/${photo.slice(7)}/pexels-photo-${photo.slice(7)}.jpeg?auto=compress&w=${width}&h=980&fit=crop`
  : `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
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
  const [displayLimit, setDisplayLimit] = useState(24);

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All pieces' || product.category === activeCategory;
    const matchesQuery = `${product.name} ${product.category} ${product.tone}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  }), [activeCategory, query]);
  const displayedProducts = visibleProducts.slice(0, displayLimit);

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

  useEffect(() => {
    setDisplayLimit(24);
  }, [activeCategory, query]);

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
          <div className="collection-heading-row" data-reveal><div><p className="eyebrow">THE GOOD-STUFF EDITION</p><h2>Wear it <em>your way.</em></h2></div><p className="collection-note">Browse style ideas across the collection. Message us to confirm current stock, sizes and colours.</p></div>
          <div className="collection-controls">
            <div className="filter-tabs" role="tablist" aria-label="Filter products by category">{categories.map((category) => <button className={activeCategory === category ? 'active' : ''} type="button" role="tab" aria-selected={activeCategory === category} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
            <div className="control-tools">
              {searchOpen && <label className="search-field"><Search size={15} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces" aria-label="Search pieces" /><button type="button" onClick={() => { setQuery(''); setSearchOpen(false); }} aria-label="Close search"><X size={15} /></button></label>}
              {!searchOpen && <button className="tool-button" type="button" onClick={() => setSearchOpen(true)}><Search size={16} /><span>Search</span></button>}
              <span className="result-count"><SlidersHorizontal size={15} /> {visibleProducts.length} pieces</span>
            </div>
          </div>
          {visibleProducts.length > 0 ? <div className="product-grid">{displayedProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} saved={saved.includes(product.id)} inEnquiry={enquiryItems.includes(product.id)} onSave={toggleSaved} onAdd={toggleEnquiryItem} />)}</div> : <div className="empty-state"><p>No pieces found for “{query}”.</p><button type="button" onClick={() => { setQuery(''); setActiveCategory('All pieces'); }}>Clear filters</button></div>}
          {displayLimit < visibleProducts.length && <button className="load-more-button" type="button" onClick={() => setDisplayLimit((limit) => limit + 24)}>Load more pieces <span>{Math.min(displayLimit, visibleProducts.length)} of {visibleProducts.length}</span><ArrowDown size={16} /></button>}
          <div className="collection-bottom"><span>SHOWING {displayedProducts.length} OF {visibleProducts.length} MATCHING · {products.length} TOTAL PIECES</span><a href={whatsappUrl('Hello IMF Classic Collection, could you show me more items?')} target="_blank" rel="noreferrer">Looking for something specific? Ask us <ArrowRight size={15} /></a></div>
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
