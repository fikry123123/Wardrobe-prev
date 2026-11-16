const StoreData = {
  categories: ['All', 'Outerwear', 'Tops', 'Bottoms', 'Footwear'],

  products: [
    {
      id: 'nw-01',
      name: 'Vortex Technical Shell Jacket',
      category: 'Outerwear',
      price: 849000,
      modelType: 'jacket',
      material: '3-Layer Gore-Tex Waterproof Nylon & Sealed Seams',
      description: 'Jaket technical shell tahan angin dan air dengan potongan boxy modern, resleting waterproof, serta ventilasi tersembunyi.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Obsidian Black', hex: '#18181b' },
        { name: 'Cyber Lime', hex: '#bef264' },
        { name: 'Arctic White', hex: '#f4f4f5' },
        { name: 'Crimson Red', hex: '#ef4444' }
      ]
    },
    {
      id: 'nw-02',
      name: 'Kinetic Heavyweight Boxy Hoodie',
      category: 'Outerwear',
      price: 579000,
      modelType: 'hoodie',
      material: '100% Organic French Terry Cotton 480 GSM',
      description: 'Hoodie heavyweight dengan struktur bahu drop-shoulder yang tegas dan tekstur kain fleece lembut di bagian dalam.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Charcoal Slate', hex: '#3f3f46' },
        { name: 'Sandstone', hex: '#d6c7b2' },
        { name: 'Midnight Navy', hex: '#1e3a8a' }
      ]
    },
    {
      id: 'nw-03',
      name: 'Aero-Mesh Oversized Tee',
      category: 'Tops',
      price: 289000,
      modelType: 'tee',
      material: 'Combed Cotton 240 GSM + Breathable Micro-Mesh',
      description: 'Kaos oversized esensial dengan kerah rib tebal yang tidak mudah melar dan sirkulasi udara optimal untuk aktivitas harian.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Jet Black', hex: '#09090b' },
        { name: 'Off White', hex: '#fafaf9' },
        { name: 'Cyber Lime', hex: '#bef264' }
      ]
    },
    {
      id: 'nw-04',
      name: 'Tactical Multi-Pocket Cargo Pants',
      category: 'Bottoms',
      price: 629000,
      modelType: 'pants',
      material: 'Cotton Ripstop Stretch with Fidlock Buckle',
      description: 'Celana kargo dengan 6 saku fungsional, tali pengatur di bagian pergelangan kaki, dan bahan ripstop anti-sobek.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Stealth Black', hex: '#18181b' },
        { name: 'Olive Drab', hex: '#4d5d3c' },
        { name: 'Stone Grey', hex: '#71717a' }
      ]
    },
    {
      id: 'nw-05',
      name: 'Monolith Chunky Derby Boots',
      category: 'Footwear',
      price: 1190000,
      modelType: 'footwear',
      material: 'Full-Grain Vegan Microfiber Leather + Vibram Sole',
      description: 'Sepatu boots siluet futuristik dengan sol tebal anti-slip dan bantalan insole ergonomis yang ringan.',
      sizes: ['40', '41', '42', '43'],
      colors: [
        { name: 'Matte Black', hex: '#121215' },
        { name: 'Bone White', hex: '#e4e4e7' }
      ]
    },
    {
      id: 'nw-06',
      name: 'Structured Studio Workshirt',
      category: 'Tops',
      price: 449000,
      modelType: 'tee',
      material: 'Japanese Twill Cotton 290 GSM',
      description: 'Kemeja kerja lengan pendek dengan saku dada utilitas dan potongan boxy yang rapi dipakai sebagai outer maupun atasan utama.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Espresso Brown', hex: '#45271d' },
        { name: 'Obsidian Black', hex: '#18181b' },
        { name: 'Sage Mist', hex: '#84a98c' }
      ]
    }
  ],

  couriers: [
    { id: 'jne', name: 'JNE Regular', est: '2-3 Hari', price: 18000 },
    { id: 'jnt', name: 'J&T Express', est: '1-2 Hari', price: 22000 },
    { id: 'gosend', name: 'GoSend Instant', est: 'Hari Ini', price: 35000 }
  ]
};