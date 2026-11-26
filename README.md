# Taskly - Aplikasi Manajemen Tugas Kuliah

Taskly adalah aplikasi web sederhana untuk membantu mahasiswa mencatat, mengatur, dan memantau tugas perkuliahan. Aplikasi ini dibuat menggunakan HTML, CSS, TypeScript, dan Vite.

## Identitas Pembuat

- Nama: Azmi Putri Kuswandi
- NIM: 1247050126
- Program Studi: S1 Teknik Informatika
- Kelas: A

## Teknologi yang Digunakan

- **HTML5:** Membuat struktur halaman aplikasi.
- **CSS3:** Mengatur tampilan dan desain aplikasi.
- **TypeScript:** Mengatur logika aplikasi dengan tipe data.
- **Vite:** Menjalankan server pengembangan dan membangun aplikasi.
- **npm:** Mengelola package dan dependensi proyek.
- **Git dan GitHub:** Mengelola versi kode dan kolaborasi proyek.

## Fitur Aplikasi

1. Menambahkan tugas kuliah.
2. Mengedit informasi tugas.
3. Menghapus tugas.
4. Menandai tugas sebagai selesai.
5. Mencari tugas berdasarkan nama atau mata kuliah.
6. Memfilter tugas berdasarkan status.
7. Menampilkan statistik tugas.
8. Menyimpan data tugas menggunakan Local Storage.

## Struktur Folder

```text
manajemen-tugas-kuliah/
|-- public/
|-- src/
|   |-- main.ts
|   |-- App.css
|   |-- index.css
|-- .env
|-- .env.example
|-- .gitignore
|-- index.html
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
|-- vite.config.ts
```

## Cara Menjalankan Aplikasi

1. Clone repository GitHub.
2. Masuk ke folder proyek.
3. Jalankan perintah `npm install` untuk memasang dependensi.
4. Jalankan `npm run dev` untuk menjalankan aplikasi.
5. Buka alamat lokal yang ditampilkan oleh Vite pada browser.

## Penjelasan Git dan GitHub

**Git** adalah sistem version control yang digunakan untuk mencatat perubahan kode dan mengelola versi proyek.

Beberapa perintah Git yang digunakan:

- `git init`: Membuat repository Git.
- `git add`: Memasukkan perubahan ke staging area.
- `git commit`: Menyimpan perubahan ke riwayat Git.
- `git branch`: Membuat atau melihat branch.
- `git merge`: Menggabungkan perubahan dari branch lain.
- `git push`: Mengirim perubahan ke GitHub.
- `git pull`: Mengambil dan menggabungkan perubahan dari repository remote.

**GitHub** adalah platform untuk menyimpan repository secara online, mengelola branch, dan melakukan Pull Request.

## Penjelasan npm dan Package

**npm (Node Package Manager)** digunakan untuk mengelola package atau pustaka yang dibutuhkan proyek.

- `dependencies`: Package yang dibutuhkan aplikasi.
- `devDependencies`: Package yang dibutuhkan selama pengembangan.
- `package.json`: Menyimpan informasi proyek, scripts, dan daftar dependensi.
- `package-lock.json`: Mencatat versi dependensi secara lebih terperinci.

npm juga menggunakan Semantic Versioning (SemVer) dengan format `MAJOR.MINOR.PATCH` untuk menunjukkan versi package.

## Penjelasan TypeScript

TypeScript merupakan pengembangan dari JavaScript yang menyediakan sistem tipe data agar kode lebih terstruktur dan mudah diperiksa.

Dalam aplikasi Taskly digunakan:

- **Primitive types:** `string`, `number`, dan `boolean`.
- **Array:** Menyimpan kumpulan data tugas.
- **Interface:** Menentukan struktur objek tugas.
- **Type alias dan union:** Menentukan tipe status tugas.
- **Generics:** Membuat fungsi yang dapat digunakan dengan berbagai tipe data.

## Penjelasan Vite

Vite merupakan build tool yang digunakan untuk menjalankan aplikasi selama pengembangan dan membangun file produksi.

Perintah yang digunakan:

- `npm run dev`: Menjalankan development server.
- `npm run build`: Memeriksa TypeScript dan membangun aplikasi untuk produksi.
- `npm run preview`: Menampilkan hasil build secara lokal.

## Compiler, Transpiler, dan Bundler

- **Compiler:** Memeriksa kode TypeScript dan menerjemahkannya menjadi JavaScript. Dalam proyek ini, TypeScript menggunakan `tsc`.
- **Transpiler:** Mengubah kode dari satu bentuk atau versi bahasa ke bentuk lain agar dapat dijalankan oleh lingkungan target.
- **Bundler:** Menggabungkan dan mengoptimalkan file JavaScript, CSS, serta aset yang dibutuhkan aplikasi menjadi hasil build. Dalam proyek ini proses tersebut ditangani oleh Vite.

## Environment Variables

Environment variables digunakan untuk menyimpan konfigurasi aplikasi agar tidak ditulis langsung di dalam kode.

Proyek ini menggunakan:

- `.env`: Menyimpan konfigurasi lokal.
- `.env.example`: Menjadi contoh konfigurasi bagi pengguna lain.
- `.gitignore`: Mencegah file `.env` ikut dikirim ke repository GitHub.

Variabel yang diawali `VITE_` dapat diakses melalui `import.meta.env` di kode aplikasi. Karena nilainya dapat terlihat oleh browser, jangan menyimpan password, API secret, atau informasi rahasia di dalamnya.

## Cara Menggunakan Aplikasi

1. Isi formulir untuk menambahkan tugas kuliah.
2. Klik tombol Edit untuk mengubah informasi tugas.
3. Klik tombol Hapus untuk menghapus tugas.
4. Klik tombol untuk menyelesaikan tugas.
5. Gunakan kolom pencarian untuk mencari tugas.
6. Gunakan filter untuk menampilkan tugas berdasarkan status.
7. Lihat statistik untuk memantau jumlah tugas.

## Repository GitHub

https://github.com/putriazmi657-collab/manajemen-tugas-kuliah

## Pengembangan Selanjutnya

Aplikasi Taskly dapat dikembangkan dengan menambahkan fitur login pengguna, sinkronisasi data melalui database, notifikasi tenggat waktu, dan integrasi API.
## Dokumentasi Pengembangan
Proyek Taskly dikembangkan menggunakan TypeScript dan Vite.
