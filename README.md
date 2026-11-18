# NOIR WARDROBE

NOIR WARDROBE adalah demo toko pakaian online untuk menjelajahi koleksi pakaian, melihat detail produk, dan mencoba alur belanja dari keranjang hingga riwayat pesanan. Antarmukanya dirancang responsif untuk desktop dan ponsel.

## Preview

[**Buka NOIR WARDROBE**](https://wardrobewebsite-nfjwrff4w-fikrys-projects-96c906b8.vercel.app/)

## Fitur

### Pengunjung

- Menjelajahi seluruh produk dari halaman Beranda.
- Memfilter produk berdasarkan kategori melalui halaman Koleksi.
- Mencari produk dan membuka detail foto, deskripsi, harga, ukuran, stok, rating, serta ulasan.
- Melihat rekomendasi produk lain.
- Membaca halaman Tentang, Pengiriman & retur, dan Syarat & ketentuan.
- Menjelajah sebagai guest tanpa harus masuk terlebih dahulu.

### Pelanggan

- Masuk atau membuat akun demo untuk menggunakan fitur belanja.
- Mengelola profil, termasuk nama, email, kata sandi, dan alamat penerima.
- Memilih produk serta ukuran sebelum memasukkannya ke keranjang.
- Memilih item tertentu di keranjang untuk checkout.
- Memasukkan kode voucher di keranjang untuk mendapat potongan harga yang memenuhi minimum belanja.
- Memilih alamat dan kurir serta mencoba pembayaran simulasi.
- Melihat daftar pesanan dan membuka detail setiap pesanan.
- Menulis ulasan untuk produk dari pesanan yang selesai, lalu mengubah ulasan tersebut.
- Membaca balasan admin pada ulasan.

### Admin

- Mengelola produk: menambah, mengubah, dan menghapus produk.
- Mengelola kategori produk.
- Memberi diskon langsung hingga 90% pada produk; harga setelah diskon tampil di katalog dan keranjang.
- Membuat, mengubah, dan menghapus voucher berupa diskon persentase atau potongan nominal, dengan minimum belanja dan batas maksimum potongan opsional.
- Mengelola akun pengguna dan memberikan peran admin.
- Melihat notifikasi pesanan selesai dan ulasan baru.
- Membuka detail pesanan dari notifikasi dan membalas ulasan pelanggan.
- Mengelola banner toko dan konten halaman Tentang, Pengiriman & retur, serta Syarat & ketentuan.

## Menjalankan secara lokal

1. Buka folder proyek di Visual Studio Code.
2. Jalankan `index.html` menggunakan ekstensi Live Server.
3. Buka alamat lokal yang ditampilkan Live Server di browser.

## Struktur proyek

```text
index.html                         Halaman utama aplikasi
assets/
  css/style.css                    Gaya dan layout situs
  js/app.js                        Interaksi, navigasi, dan fitur toko
  js/data.js                       Data produk dan kategori demo
  images/                          Gambar produk
Cart, Checkout, Payment Modal/     Prototipe tampilan keranjang dan checkout
custom scrollbar/                  Prototipe scrollbar
keranjang, & Payment Gateway/       Prototipe keranjang dan pembayaran
Showcase, 3D Product Customizer/    Prototipe showcase produk
state keranjang/                    Prototipe state keranjang
```

## Penyimpanan dan batasan demo

Aplikasi ini adalah frontend demo dan belum menggunakan backend atau database server. Data akun, produk yang dikelola admin, alamat, pesanan, ulasan, voucher, dan konten toko disimpan pada `localStorage` browser. Data hanya tersedia di browser/perangkat yang digunakan dan dapat hilang jika data browser dibersihkan. Pembayaran dan pengiriman tidak diproses sungguhan.

Voucher demo bawaan: `NOIR20` memberi diskon 20% untuk belanja minimal Rp200.000 (maksimal potongan Rp100.000), sedangkan `WELCOME10` memberi diskon 10%. Kode voucher dapat diterapkan di keranjang.
