# Gemini Project Context: cross-stack-lib

## 1. Ringkasan Proyek

`cross-stack-lib` adalah sebuah proyek untuk membangun library komponen UI yang bersifat "cross-stack" atau lintas-framework. Tujuannya adalah agar komponen yang dibuat (seperti Tabel dan Modal) dapat digunakan secara konsisten di berbagai framework frontend modern seperti Angular, React (Next.js), dan Vue.

Untuk mencapai ini, proyek akan menggunakan standar **Web Components**, yang didukung secara native oleh semua browser modern dan dapat diintegrasikan dengan mudah ke dalam framework JavaScript apa pun.

## 2. Teknologi yang Digunakan

- **Library Inti**: [**Lit**](https://lit.dev/) - Sebuah library ringan dari Google untuk membangun Web Components yang cepat dan reaktif dengan sintaks modern.
- **Bahasa**: **TypeScript** - Untuk memastikan kode yang aman (type-safe), mudah dikelola, dan skalabel.
- **Build Tool**: [**Vite**](https://vitejs.dev/) - Sebuah build tool modern yang sangat cepat dan memiliki dukungan "Library Mode" yang sangat baik untuk mem-bundle komponen.
- **Package Manager**: **npm**

## 3. Rencana Pengembangan & Checkpoints

Proyek ini akan dibagi menjadi beberapa tahap (checkpoint) untuk memastikan pengembangan yang terstruktur.

-   [x] **Checkpoint 1: Inisialisasi dan Konfigurasi Proyek (Sedang Berlangsung)**
    -   [x] Membuat direktori proyek.
    -   [x] Membuat file `GEMINI.md` sebagai panduan.
    -   [ ] Inisialisasi proyek npm (`package.json`).
    -   [ ] Instalasi dependensi (Lit, TypeScript, Vite).
    -   [ ] Konfigurasi TypeScript (`tsconfig.json`).
    -   [ ] Konfigurasi Vite (`vite.config.ts`) untuk mode library.
    -   [ ] Membuat struktur direktori awal (`src`, `src/components`).

-   [ ] **Checkpoint 2: Pembuatan Komponen Awal**
    -   [ ] Membuat file dasar untuk komponen `csl-table` (cross-stack-lib-table).
    -   [ ] Membuat file dasar untuk komponen `csl-modal`.
    -   [ ] Mendefinisikan API (properti dan event) untuk kedua komponen.

-   [ ] **Checkpoint 3: Implementasi Komponen Tabel (`csl-table`)**
    -   [ ] Mengimplementasikan logika render data tabel.
    -   [ ] Menambahkan fitur pencarian (search bar).
    -   [ ] Menambahkan fungsionalitas untuk mengatur jumlah data per halaman (page size).
    -   [ ] Mengimplementasikan paginasi.

-   [ ] **Checkpoint 4: Implementasi Komponen Modal (`csl-modal`)**
    -   [ ] Mengimplementasikan logika untuk menampilkan/menyembunyikan modal.
    -   [ ] Menambahkan slot untuk konten header, body, dan footer.
    -   [ ] Menambahkan event untuk menutup modal.

-   [ ] **Checkpoint 5: Build, Uji Coba, dan Packaging**
    -   [ ] Mengkonfigurasi proses build untuk menghasilkan output yang siap didistribusikan.
    -   [ ] Membuat halaman demo (`index.html`) untuk menguji komponen secara manual.
    -   [ ] Memastikan hasil build dapat diimpor dan digunakan di proyek lain.

-   [ ] **Checkpoint 6: Dokumentasi dan Otomatisasi Deployment**
    -   [ ] Menambahkan `README.md` dengan instruksi penggunaan.
    -   [ ] Membuat workflow GitHub Actions (`deploy.yml`) untuk mem-publish library ke npm secara otomatis.
    -   [ ] Melakukan `git init` dan commit awal.
