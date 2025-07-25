# Gemini Project Context: cross-stack-lib

*Note: This file is for internal project tracking and is ignored by Git.*

## 1. Ringkasan Proyek

`cross-stack-lib` adalah sebuah proyek untuk membangun library komponen UI yang bersifat "cross-stack" atau lintas-framework. Tujuannya adalah agar komponen yang dibuat (seperti Tabel dan Modal) dapat digunakan secara konsisten di berbagai framework frontend modern seperti Angular, React (Next.js), dan Vue.

Untuk mencapai ini, proyek akan menggunakan standar **Web Components**, yang didukung secara native oleh semua browser modern dan dapat diintegrasikan dengan mudah ke dalam framework JavaScript apa pun.

## 2. Teknologi yang Digunakan

- **Library Inti**: [**Lit**](https://lit.dev/) - Sebuah library ringan dari Google untuk membangun Web Components yang cepat dan reaktif dengan sintaks modern.
- **Bahasa**: **TypeScript** - Untuk memastikan kode yang aman (type-safe), mudah dikelola, dan skalabel.
- **Build Tool**: [**Vite**](https://vitejs.dev/) - Sebuah build tool modern yang sangat cepat dan memiliki dukungan "Library Mode" yang sangat baik untuk mem-bundle komponen.
- **Package Manager**: **npm**
- **Testing Framework**: **Vitest** - Untuk pengujian unit dan integrasi, dipilih karena integrasinya yang erat dengan Vite dan kemampuannya untuk menjalankan tes di lingkungan JSDOM.

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
    -   [x] Membuat halaman demo (`index.html`).
    -   [x] Memastikan hasil build dapat diimpor dan digunakan di proyek lain.

-   [x] **Checkpoint 6: Dokumentasi dan Otomatisasi Deployment (Selesai)**
    -   [x] Menambahkan `README.md` dengan instruksi penggunaan.
    -   [x] Membuat workflow GitHub Actions (`deploy.yml`) untuk mem-publish library ke npm secara otomatis.
    -   [x] Melakukan `git init` dan commit awal.

-   [x] **Checkpoint 7: Restrukturisasi Monorepo dan Integrasi Contoh (Selesai)**
    -   [x] Merestrukturisasi proyek ke dalam struktur monorepo (`packages/cross-stack-lib`, `examples/`).
    -   [x] Mengkonfigurasi npm Workspaces.
    -   [x] Membuat proyek contoh Next.js (`examples/example-react`).
        -   *Solusi Integrasi Next.js*: Menggunakan `@lit-labs/react` untuk membungkus komponen Lit sebagai komponen React, yang mengatasi masalah tipe dan resolusi modul di App Router Next.js. Ini melibatkan pembuatan komponen wrapper React (`LitWrappers.tsx`) dan penggunaan komponen tersebut di `page.tsx`.
    -   [x] Mengintegrasikan `cross-stack-lib` ke proyek contoh Next.js.
    -   [x] Membuat proyek contoh Vue.js (`examples/example-vue`).
    -   [x] Membuat proyek contoh Angular (`examples/example-angular`).
    -   [x] Memastikan dukungan TypeScript di semua proyek contoh.

-   [x] **Checkpoint 8: Pembaruan Dependensi dan Verifikasi (Selesai)**
    -   [x] Memperbarui konfigurasi Node.js di `package.json` dan GitHub Actions ke `^22.17.0`.
    -   [x] Memperbarui semua dependensi ke versi terbaru yang kompatibel menggunakan `npm update` dan `npm audit fix --force`.
    -   [x] Mengatasi kerentanan keamanan yang terdeteksi.
    -   [x] Memverifikasi build proyek contoh Next.js (berhasil).
    -   [x] Memverifikasi build proyek contoh Vue.js (berhasil).
    -   [x] Memverifikasi build proyek contoh Angular (berhasil, peringatan `RouterOutlet` dihapus).

-   [x] **Checkpoint 9: Pengujian, CI/CD, dan Deployment (Sedang Berlangsung)**
    -   [x] **Pembersihan dan Rekonstruksi Proyek (Selesai):**
        -   [x] Menghapus semua direktori `node_modules` dan `dist` yang ada di seluruh proyek.
        -   [x] Menghapus direktori cache dan build framework spesifik (`.angular/`, `.next/`).
        -   [x] Memperbarui file `.gitignore` di root proyek untuk memastikan semua output build dan dependensi yang tidak perlu di-commit diabaikan dengan benar.
        -   [x] Menghapus file `.gitignore` yang redundan di sub-direktori.
        -   [x] Menjalankan `npm install` di root proyek untuk menginstal ulang semua dependensi dengan benar sesuai dengan konfigurasi npm Workspaces.
        -   [x] Memastikan `package.json` di root dan `packages/cross-stack-lib` hanya memiliki dependensi inti dan skrip yang relevan.
        -   [x] Memastikan `tsconfig.json` dan `vite.config.ts` di `packages/cross-stack-lib` adalah konfigurasi dasar yang bersih untuk Lit.
        -   [x] Memverifikasi `package.json` di setiap proyek contoh bersih.
        -   [x] Menjalankan `npm update` dan `npm audit fix --force` di root proyek untuk memastikan dependensi terbaru dan tidak ada kerentanan.
    -   [x] **Pengujian Unit Dasar (Selesai):**
        -   [x] Mengonfigurasi Vitest sebagai kerangka pengujian dengan JSDOM.
        -   [x] Menulis tes unit dasar untuk komponen `csl-table` dan `csl-modal` menggunakan manipulasi DOM langsung.
        -   [x] Menulis tes unit untuk komponen `my-element` (untuk memverifikasi transpilasi dekorator Lit).
        -   [x] Mengatasi masalah transpilasi dekorator Lit (`TypeError: (0 , property) is not a function`).
        -   [x] Mengatasi masalah resolusi modul dan deduplikasi Lit (`Multiple versions of Lit loaded.`).
        -   [x] Mengatasi masalah integrasi `@testing-library/jest-dom` (`Invalid Chai property: toBeInTheDocument`).
        -   [x] Semua tes unit dasar lulus.
    -   [x] **Pembersihan dan Refaktorisasi Arsitektur (Selesai):**
        -   [x] Menghapus file dan direktori boilerplate yang tidak terpakai (`my-element.ts`, `my-element.test.ts`, `csl-decorated-element`).
        -   [x] Memindahkan file tes unit ke direktori komponen yang sesuai untuk meningkatkan keterbacaan (`co-location`).
        -   [x] Memperbaiki path impor dalam file tes setelah pemindahan.
        -   [x] Menghapus file `package-lock.json` yang berlebihan di dalam sub-direktori untuk memastikan konsistensi monorepo.
        -   [x] Memperbaiki konfigurasi `tsconfig.json` untuk mengecualikan file tes dari proses build library dan proyek contoh.
        -   [x] Memperbaiki konfigurasi `vitest.config.ts` di proyek contoh React.
        -   [x] Memverifikasi semua perubahan dengan menjalankan kembali tes unit dan proses build untuk library dan semua proyek contoh.
    -   [x] **Checkpoint 10: Pembersihan dan Optimalisasi Struktur Proyek (Selesai)**
        -   [x] **Pembersihan `.gitignore`**:
            -   **Tindakan**: Memverifikasi dan memastikan file `.gitignore` di root proyek mencakup semua direktori output build (`dist`, `.next`, `.angular/cache`, `dist/example-angular`), direktori dependensi (`node_modules`), dan file-file spesifik IDE. Tidak ada `.gitignore` redundan di sub-direktori.
            -   **Penjelasan**: Dalam struktur monorepo, memiliki satu file `.gitignore` terpusat di root adalah praktik terbaik. Ini memastikan konsistensi dalam aturan pengabaian file di seluruh proyek, mencegah file yang tidak perlu masuk ke repositori, dan menyederhanakan manajemen konfigurasi Git.
        -   [x] **Pembersihan Aset Boilerplate Proyek Contoh**:
            -   **Tindakan**: Menghapus aset default (seperti file SVG, ikon) yang tidak relevan untuk mendemonstrasikan fungsionalitas `cross-stack-lib` dari proyek contoh React (`examples/example-react/public`). Proyek Vue dan Angular tidak memiliki aset boilerplate serupa di lokasi yang diperiksa.
            -   **Penjelasan**: Menghapus aset boilerplate yang tidak digunakan membantu menjaga proyek contoh tetap ramping dan fokus pada tujuan utamanya: mendemonstrasikan integrasi `cross-stack-lib`. Ini mengurangi ukuran repositori, mempercepat proses build, dan membuat proyek lebih mudah dipahami karena tidak ada gangguan visual atau file yang tidak relevan.
        -   [x] **Verifikasi Menyeluruh**:
            -   **Tindakan**: Menjalankan kembali semua unit tes untuk library inti (`packages/cross-stack-lib`) dan semua proses build untuk library inti serta ketiga proyek contoh (React, Vue, Angular). Semua tes dan build berhasil tanpa error.
            -   **Penjelasan**: Verifikasi menyeluruh setelah setiap tahap refaktorisasi sangat penting untuk memastikan bahwa perubahan tidak merusak fungsionalitas yang sudah ada. Ini bertindak sebagai jaring pengaman dan memberikan keyakinan bahwa proyek tetap stabil dan berfungsi dengan benar setelah pembersihan.
        -   [x] **Pembersihan Direktori Kosong**:
            -   **Tindakan**: Melakukan pemindaian ulang proyek untuk mengidentifikasi dan menghapus semua direktori kosong yang tidak terpakai di luar `node_modules` dan `.git`.
            -   **Penjelasan**: Menghapus direktori kosong yang tidak perlu berkontribusi pada kebersihan dan profesionalisme struktur proyek. Ini mengurangi kekacauan, membuat navigasi proyek lebih mudah, dan memastikan bahwa hanya direktori yang relevan yang dipertahankan, yang penting untuk pemeliharaan jangka panjang.
    -   [ ] **Pengujian Integrasi (Akan Datang):**
        -   [ ] Menulis tes integrasi untuk penggunaan `cross-stack-lib` di proyek contoh Next.js.
        -   [ ] Menulis tes integrasi untuk penggunaan `cross-stack-lib` di proyek contoh Vue.js.
        -   [ ] Menulis tes integrasi untuk penggunaan `cross-stack-lib` di proyek contoh Angular.
    -   [ ] **Integrasi CI/CD dengan GitHub Actions (Monorepo-aware):**
        -   [ ] Mengkonfigurasi workflow GitHub Actions untuk menjalankan tes secara otomatis pada setiap push/pull request.
        -   [ ] Mengkonfigurasi workflow GitHub Actions untuk membangun library dan proyek contoh secara otomatis.
        -   [ ] Mengimplementasikan strategi caching untuk dependensi CI/CD.
    -   [ ] **Deployment Otomatis ke Vercel (untuk Proyek Contoh):**
        -   [ ] Mengkonfigurasi proyek Next.js (`example-react`) untuk deployment otomatis ke Vercel.
        -   [ ] Mengkonfigurasi proyek Vue.js (`example-vue`) untuk deployment otomatis ke Vercel.
        -   [ ] Mengkonfigurasi proyek Angular (`example-angular`) untuk deployment otomatis ke Vercel.
        -   [ ] Memastikan variabel lingkungan Vercel dikelola dengan aman.

-   [x] **Checkpoint 11: Pengembangan Situs Web Dokumentasi Publik (Selesai)**
    -   [x] Membuat direktori `apps/docs` dan menginisialisasi proyek Next.js di dalamnya.
    -   [x] Memverifikasi build semua proyek contoh setelah penambahan `apps/docs` (berhasil).
    -   [x] Membuat struktur direktori dasar dan halaman placeholder untuk situs dokumentasi.
    -   [x] Mengintegrasikan `cross-stack-lib` ke dalam situs dokumentasi (menambahkan dependensi, membuat `LitWrappers.tsx`, memperbarui `globals.css`).
    -   [x] Membuat konten "Getting Started" (installation.mdx, usage.mdx) dan mengkonfigurasi dukungan MDX di Next.js.
    -   [x] Membuat konten dokumentasi komponen (examples.mdx, api.mdx untuk csl-table dan csl-modal) (proses cepat/placeholder).
    -   [x] **Restrukturisasi & Pembersihan Proyek:**
        -   [x] Refaktor struktur folder `example-react` (memindahkan `app` dan `components` dari `src/` ke root proyek `example-react`).
        -   [x] Periksa dan hapus file/folder yang tidak terpakai atau redundan di seluruh monorepo.
        -   [x] Memastikan struktur proyek bersih, profesional, dan siap produksi.
    -   [x] Memverifikasi build situs dokumentasi (`apps/docs`) (berhasil).
    -   [x] Memverifikasi build semua proyek di monorepo setelah restrukturisasi dan pembersihan (berhasil).
    -   [ ] **Perencanaan & Desain:**
        -   [ ] Menentukan teknologi untuk situs dokumentasi (disarankan Next.js atau Astro untuk performa dan SEO).
        -   [ ] Merancang struktur navigasi yang interaktif dan mudah digunakan.
        -   [ ] Menentukan tema desain yang modern, fresh, fluid, smooth, dan profesional.
    -   [ ] **Implementasi Situs Dokumentasi:**
        -   [ ] Membuat proyek situs dokumentasi baru di dalam monorepo (misal: `docs/`).
        -   [ ] Mengimplementasikan halaman beranda yang menarik.
        -   [ ] Membuat halaman "Getting Started" atau "Installation" dengan instruksi setup/install library yang jelas.
        -   [ ] Membuat halaman terpisah untuk setiap komponen (`csl-table`, `csl-modal`) yang menampilkan:
            -   [ ] Contoh penggunaan interaktif.
            -   [ ] Bagian source code yang dapat disalin.
            -   [ ] Properti (props) dan event yang tersedia.
        -   [ ] Memastikan situs memiliki animasi yang fluid dan smooth.
    -   [ ] **Integrasi & Deployment:**
        -   [ ] Mengintegrasikan library `cross-stack-lib` ke dalam situs dokumentasi.
        -   [ ] Mengkonfigurasi deployment otomatis situs dokumentasi ke platform hosting (misal: Vercel, Netlify).
        -   [ ] Memastikan situs dapat diakses publik.

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

## 5. Aturan Sesi

Setiap kali sesi berakhir, agen harus:
- Melakukan update knowledge, detail information, dan checkpoint update yang informatif di file `GEMINI.md`.
- Melakukan update `README.md` dengan kondisi proyek terbaru.
- Selalu menawarkan untuk melakukan commit dan push ke repositori.