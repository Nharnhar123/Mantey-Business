const categories = ['All pieces', 'Jeans', 'Shirts', 'Suits', 'T-Shirts', 'Jackets', 'Trousers', 'Watches', 'Shoes', 'Accessories'];

const catalogOptions = {
  Jeans: {
    styles: ['Straight-Leg Denim', 'Relaxed Taper Denim', 'Slim-Fit Denim', 'Athletic Taper Denim', 'Wide-Leg Denim', 'Carpenter Denim', 'Utility Cargo Denim', 'Bootcut Denim', 'Distressed Denim', 'Rinse-Wash Denim'],
    finishes: ['Deep Indigo', 'Washed Black', 'Mid Blue'],
    photos: ['photo-1541099649105-f69ad21f3246', 'photo-1521572163474-6864f9cf17ab', 'photo-1507679799987-c73779587ccf', 'photo-1555685812-4b943f1cb0eb', 'photo-1515886657613-9f3515b0c78f', 'photo-1473966968600-fa801b869a1a', 'photo-1529139574466-a303027c1d8b', 'photo-1503342217505-b0a15ec3261c', 'photo-1524504388940-b1c1722653e1', 'photo-1496747611176-843222e1e57c', 'photo-1483985988355-763728e1935b', 'photo-1487412720507-e7ab37603c6f'],
  },
  Shirts: {
    styles: ['Oxford Cloth Shirt', 'Linen Camp Shirt', 'Mandarin Collar Shirt', 'Textured Poplin Shirt', 'Classic Check Shirt', 'Short-Sleeve Resort Shirt', 'Grandad Collar Shirt', 'Fine-Stripe Shirt', 'Chambray Work Shirt', 'Soft-Twill Shirt'],
    finishes: ['Crisp White', 'Sky Blue', 'Sage Green'],
    photos: ['photo-1602810318383-e386cc2a3ccf', 'photo-1598033129183-c4f50c736f10', 'photo-1603252109303-2751441dd157', 'photo-1521572267360-ee0c2909d518', 'photo-1507679799987-c73779587ccf', 'photo-1512436991641-6745cdb1723f', 'photo-1469334031218-e382a71b716b', 'photo-1504593811423-6dd665756598', 'photo-1483985988355-763728e1935b', 'photo-1562157873-818bc0726f68', 'photo-1524504388940-b1c1722653e1', 'photo-1496747611176-843222e1e57c'],
  },
  Suits: {
    styles: ['Modern Two-Piece Suit', 'Slim-Cut Suit', 'Relaxed Tailored Suit', 'Double-Breasted Suit', 'Textured Wedding Suit', 'Travel-Ready Suit', 'Three-Piece Suit', 'Unstructured Suit', 'Peak-Lapel Suit', 'Evening Dinner Suit'],
    finishes: ['Midnight Navy', 'Charcoal Grey', 'Warm Stone'],
    photos: ['photo-1529139574466-a303027c1d8b', 'photo-1521572163474-6864f9cf17ab', 'photo-1517841905240-472988babdf9', 'photo-1515886657613-9f3515b0c78f', 'photo-1524504388940-b1c1722653e1', 'photo-1496747611176-843222e1e57c', 'photo-1507679799987-c73779587ccf', 'photo-1504593811423-6dd665756598', 'photo-1541099649105-f69ad21f3246', 'photo-1483985988355-763728e1935b', 'photo-1551028719-00167b16eac5', 'photo-1555685812-4b943f1cb0eb'],
  },
  'T-Shirts': {
    styles: ['Heavyweight Crew Tee', 'Relaxed Boxy Tee', 'Fine Jersey Tee', 'Pocket Crew Tee', 'Raglan-Sleeve Tee', 'Longline Crew Tee', 'Vintage-Wash Tee', 'Minimal Graphic Tee', 'Ribbed Cotton Tee', 'Sport Mesh Tee'],
    finishes: ['Optic White', 'Washed Black', 'Muted Olive'],
    photos: ['photo-1521572267360-ee0c2909d518', 'photo-1521572163474-6864f9cf17ab', 'photo-1524504388940-b1c1722653e1', 'photo-1483985988355-763728e1935b', 'photo-1515886657613-9f3515b0c78f', 'photo-1541099649105-f69ad21f3246', 'photo-1503342217505-b0a15ec3261c', 'photo-1473966968600-fa801b869a1a', 'photo-1517841905240-472988babdf9', 'photo-1507679799987-c73779587ccf', 'photo-1512436991641-6745cdb1723f', 'photo-1529139574466-a303027c1d8b'],
  },
  Jackets: {
    styles: ['Leather Moto Jacket', 'Lightweight Bomber', 'Utility Field Jacket', 'Denim Trucker Jacket', 'Minimal Harrington Jacket', 'Quilted Work Jacket', 'Canvas Chore Jacket', 'Rain-Ready Shell Jacket', 'Coach Jacket', 'Suede Collar Jacket'],
    finishes: ['Classic Black', 'Olive Field', 'Cognac Brown'],
    photos: ['photo-1551028719-00167b16eac5', 'photo-1524504388940-b1c1722653e1', 'photo-1504593811423-6dd665756598', 'photo-1483985988355-763728e1935b', 'photo-1515886657613-9f3515b0c78f', 'photo-1503342217505-b0a15ec3261c', 'photo-1521572163474-6864f9cf17ab', 'photo-1541099649105-f69ad21f3246', 'photo-1473966968600-fa801b869a1a', 'photo-1562157873-818bc0726f68', 'photo-1496747611176-843222e1e57c', 'photo-1529139574466-a303027c1d8b'],
  },
  Trousers: {
    styles: ['Tailored Straight Trousers', 'Tapered Chinos', 'Relaxed Pleated Trousers', 'Smart Drawstring Trousers', 'Cotton Twill Chinos', 'City Cargo Trousers', 'Linen Blend Trousers', 'Cropped Suit Trousers', 'Five-Pocket Twill Pants', 'Travel Stretch Trousers'],
    finishes: ['Khaki Stone', 'Deep Charcoal', 'Olive Green'],
    photos: ['photo-1473966968600-fa801b869a1a', 'photo-1529139574466-a303027c1d8b', 'photo-1521572163474-6864f9cf17ab', 'photo-1507679799987-c73779587ccf', 'photo-1483985988355-763728e1935b', 'photo-1515886657613-9f3515b0c78f', 'photo-1524504388940-b1c1722653e1', 'photo-1551028719-00167b16eac5', 'photo-1503342217505-b0a15ec3261c', 'photo-1512436991641-6745cdb1723f', 'photo-1496747611176-843222e1e57c', 'photo-1541099649105-f69ad21f3246'],
  },
  Watches: {
    styles: ['Slim Dress Watch', 'Steel Link Watch', 'Field Dial Watch', 'Minimal Two-Hand Watch', 'Classic Chronograph', 'Day-Date Watch', 'Heritage Roman Watch', 'Sport Bezel Watch', 'Square-Case Watch', 'Open-Heart Dress Watch'],
    finishes: ['Black Leather', 'Brushed Steel', 'Brown Leather'],
    photos: ['photo-1523170335258-f5ed11844a49', 'photo-1546868871-7041f2a55e12', 'photo-1490367532201-b9bc1dc483f6', 'photo-1523275335684-37898b6baf30', 'photo-1508057198894-247b23fe5ade', 'photo-1434056886845-dac89ffe9b56', 'photo-1517849845537-4d257902454a', 'photo-1522312346375-d1a52e2b99b3', 'photo-1526045478516-99145907023c', 'photo-1505740420928-5e560c06d30e', 'photo-1511497584788-876760111969', 'photo-1539874754764-5a96559165b0'],
  },
  Shoes: {
    styles: ['Cap-Toe Oxford Shoes', 'Soft Leather Loafers', 'Everyday Court Sneakers', 'Suede Desert Boots', 'Classic Derby Shoes', 'Minimal Low-Top Sneakers', 'Double-Monk Shoes', 'Canvas Weekend Sneakers', 'Brogue Lace-Ups', 'Smart Chelsea Boots'],
    finishes: ['Polished Black', 'Rich Brown', 'Clean White'],
    photos: ['photo-1542291026-7eec264c27ff', 'photo-1525966222134-fcfa99b8ae77', 'photo-1543508282-6319a3e2621f', 'photo-1600185365483-26d7a4cc7519', 'photo-1608231387042-66d1773070a5', 'photo-1600185365926-3a2ce3cdb9eb', 'photo-1600185365483-26d7a4cc7519', 'photo-1525966222134-fcfa99b8ae77', 'photo-1543163521-1bf539c55dd2', 'photo-1549298916-b41d501d3772', 'photo-1551816230-ef5deaed4a26', 'photo-1607522370275-f14206abe5d3'],
  },
  Accessories: {
    styles: ['Classic Leather Belt', 'Reversible Dress Belt', 'Canvas Weekend Cap', 'Textured Silk Tie', 'Pocket Square Set', 'Slim Leather Wallet', 'Cufflink Pair', 'Polarized Wayfarer Frames', 'Ribbed Dress Socks', 'Leather Card Holder'],
    finishes: ['Espresso Brown', 'Matte Black', 'Navy Texture'],
    photos: ['photo-1523170335258-f5ed11844a49', 'photo-1521572163474-6864f9cf17ab', 'photo-1515886657613-9f3515b0c78f', 'photo-1496747611176-843222e1e57c', 'photo-1483985988355-763728e1935b', 'photo-1524504388940-b1c1722653e1', 'photo-1507679799987-c73779587ccf', 'photo-1541099649105-f69ad21f3246', 'photo-1503342217505-b0a15ec3261c', 'photo-1473966968600-fa801b869a1a', 'photo-1529139574466-a303027c1d8b', 'photo-1551028719-00167b16eac5'],
  },
};

const originalProducts = [
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

const products = [...originalProducts];
let nextId = products.length + 1;

for (const category of categories.slice(1)) {
  const options = catalogOptions[category];
  const existingNames = new Set(products.filter((product) => product.category === category).map((product) => product.name.toLowerCase()));
  const needed = 30 - existingNames.size;
  let added = 0;

  for (const style of options.styles) {
    for (const finish of options.finishes) {
      const name = `${style} - ${finish}`;
      if (existingNames.has(name.toLowerCase())) continue;

      products.push({
        id: nextId++,
        name,
        category,
        label: '',
        image: `pexels:${options.photos[added % options.photos.length]}`,
        tone: finish,
      });
      existingNames.add(name.toLowerCase());
      added += 1;
      if (added === needed) break;
    }
    if (added === needed) break;
  }
}

export { categories, products };