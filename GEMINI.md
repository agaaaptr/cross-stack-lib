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

-   [x] **Checkpoint 1: Inisialisasi dan Konfigurasi Proyek (Selesai)**
    -   [x] Membuat direktori proyek.
    -   [x] Membuat file `GEMINI.md` sebagai panduan.
    -   [x] Inisialisasi proyek npm (`package.json`).
    -   [x] Instalasi dependensi (Lit, TypeScript, Vite).
    -   [x] Konfigurasi TypeScript (`tsconfig.json`).
    -   [x] Konfigurasi Vite (`vite.config.ts`) untuk mode library.
    -   [x] Membuat struktur direktori awal (`src`, `src/components`).

-   [x] **Checkpoint 2: Pembuatan Komponen Awal (Selesai)**
    -   [x] Membuat file dasar untuk komponen `csl-table`.
    -   [x] Membuat file dasar untuk komponen `csl-modal`.
    -   [x] Mendefinisikan API (properti dan event) untuk kedua komponen.

-   [x] **Checkpoint 3: Implementasi Komponen Tabel (`csl-table`) (Selesai)**
    -   [x] Mengimplementasikan logika render data tabel.
    -   [x] Menambahkan fitur pencarian (search bar).
    -   [x] Menambahkan fungsionalitas untuk mengatur jumlah data per halaman (page size).
    -   [x] Mengimplementasikan paginasi.

-   [x] **Checkpoint 4: Implementasi Komponen Modal (`csl-modal`) (Selesai)**
    -   [x] Mengimplementasikan logika untuk menampilkan/menyembunyikan modal.
    -   [x] Menambahkan slot untuk konten header, body, dan footer.
    -   [x] Menambahkan event untuk menutup modal.

-   [x] **Checkpoint 5: Build, Uji Coba, dan Packaging (Selesai)**
    -   [x] Mengkonfigurasi proses build untuk menghasilkan output yang siap didistribusikan.
    -   [x] Membuat halaman demo (`index.html`) untuk menguji komponen secara manual.
    -   [x] Memastikan hasil build dapat diimpor dan digunakan di proyek lain.

-   [x] **Checkpoint 6: Dokumentasi dan Otomatisasi Deployment (Selesai)**
    -   [x] Menambahkan `README.md` dengan instruksi penggunaan.
    -   [x] Membuat workflow GitHub Actions (`deploy.yml`) untuk mem-publish library ke npm secara otomatis.
    -   [x] Melakukan `git init` dan commit awal.

## 4. Aturan Commit (Semantic Commits)

Untuk menjaga agar histori Git tetap bersih dan mudah dibaca, proyek ini mengadopsi standar **Semantic Commit Messages**. Setiap pesan commit harus mengikuti format berikut:

```
<type>(<scope>): <subject>
```

**Type (Jenis Perubahan):**

-   **feat**: Penambahan fitur baru.
-   **fix**: Perbaikan bug.
-   **docs**: Perubahan pada dokumentasi.
-   **style**: Perubahan yang tidak mempengaruhi logika kode (spasi, format, titik koma, dll.).
-   **refactor**: Perubahan kode yang bukan perbaikan bug atau penambahan fitur.
-   **perf**: Perubahan kode yang meningkatkan performa.
-   **test**: Penambahan atau perbaikan tes.
-   **chore**: Perubahan pada proses build, konfigurasi, atau alat bantu lainnya.

**Scope (Lingkup Perubahan):**

Lingkup bisa berupa nama komponen atau bagian dari proyek yang terpengaruh. Contoh: `csl-table`, `csl-modal`, `build`, `docs`.

**Subject (Judul Pesan):**

Deskripsi singkat tentang perubahan dalam bentuk kalimat imperatif (misalnya, "tambahkan" bukan "menambahkan").

**Contoh Pesan Commit:**

-   `feat(csl-table): add sorting functionality`
-   `fix(csl-modal): prevent closing on overlay click`
-   `docs(readme): update usage instructions`
-   `chore(vite): configure library mode`
