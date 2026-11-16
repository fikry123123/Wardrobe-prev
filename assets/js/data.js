const StoreData = {
  categories: ['All', 'T-shirt', 'Outerwear', 'Bottoms', 'Footwear', 'Accessories'],
  products: [
    { id: 'nw-01', name: 'Essential Heavyweight Tee', category: 'T-shirt', price: 289000, modelType: 'tee', material: 'Cotton combed 240 GSM', description: 'Kaos polos heavyweight dengan potongan relaxed dan kerah rib yang rapi.', image: 'assets/images/nw-01.svg', sizes: ['S', 'M', 'L', 'XL'], stock: { S: 8, M: 12, L: 10, XL: 6 }, colors: [{ name: 'Jet Black', hex: '#18181b' }] },
    { id: 'nw-02', name: 'Daily Boxy T-Shirt', category: 'T-shirt', price: 259000, modelType: 'tee', material: 'Cotton combed 220 GSM', description: 'Kaos polos boxy fit yang nyaman untuk dipakai sehari-hari.', image: 'assets/images/nw-02.svg', sizes: ['S', 'M', 'L', 'XL'], stock: { S: 8, M: 12, L: 10, XL: 6 }, colors: [{ name: 'Off White', hex: '#e8e4db' }] },
    { id: 'nw-03', name: 'Studio Oversized Tee', category: 'T-shirt', price: 319000, modelType: 'tee', material: 'Cotton compact 250 GSM', description: 'Siluet oversized dengan bahu jatuh dan bahan lembut bertekstur.', image: 'assets/images/nw-03.svg', sizes: ['S', 'M', 'L', 'XL'], stock: { S: 8, M: 12, L: 10, XL: 6 }, colors: [{ name: 'Slate Grey', hex: '#686b70' }] },
    { id: 'nw-04', name: 'Core Relaxed T-Shirt', category: 'T-shirt', price: 249000, modelType: 'tee', material: 'Cotton combed 220 GSM', description: 'Kaos polos regular fit dengan konstruksi simpel dan mudah dipadukan.', image: 'assets/images/nw-04.svg', sizes: ['S', 'M', 'L', 'XL'], stock: { S: 8, M: 12, L: 10, XL: 6 }, colors: [{ name: 'Forest Green', hex: '#405744' }] },
    { id: 'nw-05', name: 'Heavyweight Pocket Tee', category: 'T-shirt', price: 339000, modelType: 'tee', material: 'Cotton heavyweight 260 GSM', description: 'Kaos polos dengan saku dada kecil dan bahan lebih tebal.', image: 'assets/images/nw-05.svg', sizes: ['S', 'M', 'L', 'XL'], stock: { S: 8, M: 12, L: 10, XL: 6 }, colors: [{ name: 'Sandstone', hex: '#b6a487' }] },
    { id: 'nw-06', name: 'Classic Long Sleeve Tee', category: 'T-shirt', price: 369000, modelType: 'tee', material: 'Cotton combed 230 GSM', description: 'Kaos lengan panjang polos untuk layering sepanjang tahun.', image: 'assets/images/nw-06.svg', sizes: ['S', 'M', 'L', 'XL'], stock: { S: 8, M: 12, L: 10, XL: 6 }, colors: [{ name: 'Deep Navy', hex: '#28364b' }] }
  ],
  couriers: [
    { id: 'jne', name: 'JNE Regular', est: '2-3 Hari', price: 18000 },
    { id: 'jnt', name: 'J&T Express', est: '1-2 Hari', price: 22000 },
    { id: 'gosend', name: 'GoSend Instant', est: 'Hari Ini', price: 35000 }
  ],
  promos: { NOIR20: { type: 'percent', value: 20, min: 200000, label: 'Diskon 20% (maks Rp100.000)' }, WELCOME10: { type: 'percent', value: 10, min: 0, label: 'Diskon 10%' } }
};
