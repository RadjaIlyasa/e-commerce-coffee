# SPEC: Web E-commerce

## 1. Tujuan
Web toko online untuk menjual bahan kopi (biji, bubuk) dan alat kopi
(grinder, dripper, dll). Tujuan proyek: belajar full-stack + bahan portfolio
(bukan untuk transaksi uang asli).

## 2. Stack
- Frontend + Backend: Next.js (App Router) + TypeScript
- Database: MySQL
- ORM: Prisma
- Auth: [ISI: NextAuth / JWT buatan sendiri]
- Styling: [ISI: Tailwind / CSS biasa]

## 3. Fitur MVP (kerjakan berurutan)
1. Register & login
2. Daftar produk + filter kategori
3. Detail produk
4. Keranjang belanja
5. Checkout sederhana (simulasi pembayaran, tanpa payment gateway asli)
6. Riwayat pesanan

## 4. Di LUAR scope (jangan dikerjakan dulu)
Payment gateway asli, review/rating, promo/voucher, wishlist, dashboard admin lengkap, notifikasi email.

## 5. Database (draft)
users, categories, products, product_variants, cart_items, orders, order_items

## 6. Aturan untuk AI
- Kerjakan SATU fitur per permintaan
- Jangan ubah skema database tanpa konfirmasi
- Jelaskan singkat kode yang dibuat
- Jangan install library baru tanpa bilang

Catatan desain:
- Harga dan stok disimpan di product_variants, bukan di products
- cart_items dan order_items merujuk ke variant, bukan ke produk
- Simpan harga saat checkout di order_items (harga produk bisa berubah nanti)