# Todo app
# 🏥 Sistem Antrean Klinik (CLI Application)

Aplikasi manajemen antrean dan data pasien sederhana berbasis antarmuka baris perintah (Command Line Interface / CLI) menggunakan Node.js dan objek JavaScript.

---

## 📌 Fitur Utama

Aplikasi ini menyediakan operasi CRUD (Create, Read, Update, Delete) sederhana untuk mengelola antrean pasien di klinik:

1. **Tambah Pasien (`tambahPasien`)**
   - Menambahkan pasien baru ke dalam daftar antrean secara otomatis dengan ID bertambah (*auto-increment*).
   - Meminta input nama dan keluhan pasien.

2. **Lihat Daftar Pasien (`lihatPasien`)**
   - Menampilkan seluruh daftar pasien yang terdaftar beserta ID, nama, dan keluhan/statusnya.

3. **Edit Keluhan Pasien (`editKeluhan`)**
   - Mengubah deskripsi keluhan pasien berdasarkan ID pasien.

4. **Update Status Pasien (`updateStatus`)**
   - Mengubah dan memperbarui status pemeriksaan pasien (misal: *Selesai* / *Belum*) berdasarkan ID pasien.

5. **Hapus Pasien (`hapusPasien`)**
   - Menghapus data pasien dari antrean berdasarkan ID pasien.

6. **Keluar**
   - Menghentikan dan keluar dari program.

---

## 🛠️ Prasyarat (Prerequisites)

Sebelum menjalankan aplikasi ini, pastikan komputer kamu sudah terinstal:

- [Node.js](https://nodejs.org/) (Versi 14 atau yang lebih baru)
- npm (Node Package Manager)

---

## 🚀 Cara Menginstal & Menjalankan

### 1. Inisialisasi Proyek & Instalasi Dependency

Aplikasi ini memerlukan package [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) untuk menerima input secara *synchronous* di terminal/command prompt.

Jalankan perintah berikut di terminal/CLI kamu pada folder proyek:

```bash
npm init -y
npm install prompt-sync
