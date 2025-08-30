# Basis Pengetahuan Proyek XStack

Dokumen ini berisi kumpulan pertanyaan yang sering diajukan (FAQ) dan informasi penting lainnya mengenai proyek XStack Library. Tujuannya adalah untuk memberikan pemahaman umum dan mendalam bagi siapa saja yang terlibat atau tertarik dengan proyek ini.

---

## Tanya Jawab Umum (FAQ)

### 1. Bagaimana cara library ini berkomunikasi dengan framework lain (React, Vue, Angular) dan metode apa yang digunakan?

Cara komunikasi utamanya adalah dengan memanfaatkan **standar Web Components**, yang merupakan teknologi native di semua browser modern. Ini berarti komponen kita (seperti `xstack-table`) pada dasarnya adalah elemen HTML kustom yang bisa dipahami oleh framework manapun.

Secara teknis, komunikasinya berjalan dua arah:

1. **Mengirim Data ke Komponen (Props/Attributes):** Framework mengirim data ke dalam komponen kita melalui **HTML attributes** untuk data sederhana (string, angka) dan **JavaScript properties** untuk data kompleks (objek, array).
    * Di **React**, ini terlihat seperti props biasa, seringkali dengan bantuan wrapper (`@lit-labs/react`): `<XStackTable data={myData} />`.
    * Di **Vue**, menggunakan `v-bind` dan seringkali memerlukan komponen wrapper untuk proyeksi slot yang robust: `<XStackTableWrapper :data="myData"></XStackTableWrapper>`.
    * Di **Angular**, menggunakan property binding: `<xstack-table [data]="myData"></xstack-table>`.

2. **Menerima Data dari Komponen (Events):** Ketika sesuatu terjadi di dalam komponen kita (misalnya, pengguna mengetik di pencarian), komponen akan memancarkan **Standard DOM Events**. Framework kemudian bisa "mendengarkan" event ini seperti event HTML biasa.
    * Di **React**, menggunakan `onEventName` (setelah di-map di wrapper): `<XStackModal onClose={handleClose} />`.
    * Di **Vue**, menggunakan `@event-name`: `<XStackTableWrapper @page-change="handlePageChange"></XStackTableWrapper>`.
    * Di **Angular**, menggunakan event binding: `<xstack-modal (close)="handleClose()"></xstack-modal>`.

Jadi, kita tidak memerlukan *wrapper* atau lapisan adaptasi yang rumit (meskipun wrapper di React dan Vue sangat membantu untuk event handling dan proyeksi slot). Kita menggunakan standar web yang sudah ada, membuat integrasi menjadi sangat bersih dan langsung.

### 2. Apakah library ini memerlukan instalasi yang ribet?

Sama sekali tidak. Proses instalasinya dirancang agar sesederhana mungkin, sama seperti library npm lainnya. Hanya ada dua langkah utama:

1. **Instalasi via npm:** Cukup jalankan `npm install cross-stack-lib` di dalam proyek Anda.
2. **Impor Library:** Impor library-nya satu kali di titik masuk utama aplikasi Anda (misalnya di `main.ts` atau `App.js`). Impor ini akan secara otomatis mendaftarkan semua komponen kustom kita ke browser, sehingga siap digunakan di seluruh aplikasi.

Setelah dua langkah itu, Anda bisa langsung menggunakan tag seperti `<xstack-modal>` di mana saja dalam kode HTML atau JSX Anda.

### 3. Apa trade-off menggunakan library ini dibanding library native untuk framework tersebut?

Ini adalah pertanyaan yang sangat penting dan menyoroti keputusan strategis di balik proyek ini. Ada keuntungan besar, tetapi juga ada *trade-off* yang perlu dipertimbangkan.

**Keuntungan Utama (The "Why"):**

* **Satu Pustaka untuk Semua (Framework Agnostic):** Ini adalah keuntungan terbesar. Anda menulis komponen sekali, dan tim React, Vue, dan Angular bisa menggunakannya secara konsisten. Ini mengurangi biaya pengembangan, memastikan konsistensi UI, dan mempermudah migrasi antar framework di masa depan.
* **Tahan Masa Depan (Future-Proof):** Karena kita berbasis standar web, bukan API framework tertentu, library kita tidak terikat pada siklus hidup satu framework. Jika sebuah framework kehilangan popularitas, komponen kita tetap relevan.
* **Enkapsulasi Kuat:** Shadow DOM dari Web Components memberikan enkapsulasi style dan struktur yang sangat kuat, sehingga tidak akan ada lagi masalah CSS dari aplikasi utama "bocor" dan merusak tampilan komponen, atau sebaliknya.

**Trade-off (Dibanding Library Native):**

* **Gesekan Integrasi (Integration Friction):** Meskipun integrasinya mudah, terkadang tidak "semulus" library native.
  * **Data Binding:** Mengirim data kompleks seperti fungsi atau objek terkadang memerlukan penanganan ekstra dibandingkan dengan library native yang dirancang khusus untuk sistem state management framework tersebut.
  * **Formulir & Validasi:** Mengintegrasikan komponen kita dengan library formulir yang spesifik untuk sebuah framework (seperti Formik di React atau VeeValidate di Vue) mungkin memerlukan lebih banyak kode "perekat" (glue code).
* **Server-Side Rendering (SSR):** Ini adalah *trade-off* yang paling signifikan. Web Components adalah teknologi sisi klien (client-side). Membuatnya bekerja dengan mulus pada lingkungan SSR seperti di Next.js bisa menjadi tantangan. Seringkali ini memerlukan *dynamic import* untuk menonaktifkan SSR pada komponen tersebut, yang bisa mempengaruhi First Contentful Paint. Library native biasanya sudah dioptimalkan untuk SSR oleh pembuatnya.
* **Developer Experience (DX):** Pengembang yang sangat terbiasa dengan "cara React" atau "cara Vue" mungkin merasa bekerja dengan DOM events standar sedikit kurang idiomatis dibandingkan menggunakan callback props yang biasa mereka temui di library native.

**Kesimpulan Trade-off:**

Pada dasarnya, **trade-off-nya adalah menukar sedikit kenyamanan dan optimasi spesifik-framework dengan keuntungan besar berupa portabilitas, konsistensi, dan kemudahan pemeliharaan jangka panjang di lingkungan multi-framework.**

---

## Pemecahan Masalah & Catatan Penting

### 1. Masalah `lint` pada Proyek Angular (`example-angular`)

**Symptom:** Perintah `npm run lint` (menggunakan `ng lint`) pada proyek Angular seringkali gagal dengan error seperti `Error when running ESLint: Invalid Options: - Unknown options: stats` ketika dijalankan dari root monorepo atau bahkan setelah instalasi ulang yang bersih.

**Penyebab:** Ini adalah masalah yang kompleks dan sulit diidentifikasi secara pasti. Kemungkinan besar disebabkan oleh konflik versi ESLint atau konfigurasi yang tidak kompatibel antara `angular-eslint` dan dependensi ESLint lainnya yang di-hoist ke `node_modules` root dalam lingkungan `npm workspaces`. `ng lint` tampaknya tidak dapat mengatasi lingkungan dependensi yang tidak terisolasi ini.

**Solusi (Pragmatis):**
Karena masalah ini sangat sulit dipecahkan dan tidak memengaruhi fungsionalitas `build` atau `dev` proyek Angular, solusi yang paling pragmatis adalah:

* **Jangan jalankan `lint` Angular dari root monorepo.** Skrip `lint` di `package.json` root telah dikonfigurasi untuk **melewatkan** `example-angular`.
* **Jalankan `lint` Angular secara manual:** Jika Anda perlu me-lint proyek Angular, `cd` ke direktori `cross-framework-examples/example-angular` dan jalankan `npm run lint` dari sana. Perlu diingat bahwa bahkan dengan cara ini, masalah `lint` mungkin masih muncul tergantung pada kondisi lingkungan `npm` saat itu.

### 2. Menginstal Dependensi dari Registri Lokal (Verdaccio)

**Symptom:** Perintah `npm install` gagal dengan error `404 Not Found` untuk `cross-stack-lib`.

**Penyebab:** `cross-stack-lib` adalah pustaka lokal yang diterbitkan ke Verdaccio (`http://localhost:4873`), bukan ke registri npm publik (`https://registry.npmjs.org/`). `npm install` secara default akan mencari semua dependensi di registri publik.

**Solusi:** Untuk menginstal `cross-stack-lib` dari Verdaccio tanpa mengubah konfigurasi registry default Anda, gunakan flag `--registry` pada perintah `npm install`.

**Contoh Alur Instalasi untuk Proyek Contoh:**

1. **Bersihkan:** `rm -rf node_modules package-lock.json` (di dalam direktori proyek contoh).
2. **Hapus Sementara `cross-stack-lib` dari `package.json`:** Ini memungkinkan `npm install` berikutnya berhasil untuk dependensi publik.
3. **Instal Dependensi Publik:** `npm install` (di dalam direktori proyek contoh).
4. **Tambahkan Kembali `cross-stack-lib` ke `package.json`:** (secara manual atau dengan perintah `npm install cross-stack-lib`).
5. **Instal `cross-stack-lib` dari Verdaccio:** `npm install cross-stack-lib@1.0.3 --registry http://localhost:4873` (di dalam direktori proyek contoh).

**Penting:** Jangan pernah mengubah konfigurasi registry npm global atau proyek Anda menggunakan `npm config set registry ...`. Selalu gunakan flag `--registry` untuk instalasi dari Verdaccio.
