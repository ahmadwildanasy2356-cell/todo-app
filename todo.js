const prompt = require("prompt-sync")();

const klinik = {
  pasien: [],
  nextId: 1,

  // Menu 1: Tambah Pasien
  tambahPasien() {
    const nama = prompt("Nama pasien: ");
    const keluhan = prompt("Keluhan: ");

    const pasienBaru = {
      id: this.nextId,
      nama: nama,
      keluhan: keluhan,
    };

    this.pasien.push(pasienBaru);
    this.nextId++;

    console.log("Pasien berhasil ditambahkan!");
  },

  // Menu 2: Lihat Daftar Pasien
  lihatPasien() {
    console.log("\n===== DAFTAR PASIEN =====");

    if (this.pasien.length === 0) {
      console.log("Belum ada pasien.");
      return;
    }

    for (let orang of this.pasien) {
      console.log(
        orang.id + ". " + orang.nama + " | Keluhan: " + orang.keluhan
      );
    }
  },

  // Menu 3: Edit Keluhan Pasien
  editKeluhan() {
    const id = Number(prompt("Masukkan ID pasien: "));
    const keluhanBaru = prompt("Keluhan baru: ");

    for (let orang of this.pasien) {
      if (orang.id === id) {
        orang.keluhan = keluhanBaru;

        console.log("Keluhan berhasil diperbarui!");
        return;
      }
    }

    console.log("Pasien tidak ditemukan.");
  },

  // Menu 4: Update Status Periksa Pasien
  updateStatus() {
    const id = Number(prompt("Masukkan ID pasien: "));
    const status = prompt("Status periksa (Selesai/Belum): ");

    for (let orang of this.pasien) {
      if (orang.id === id) {
        if (status === "Selesai") {
          console.log("Status pasien diperbarui ke selesai.");
        }

        orang.keluhan = orang.keluhan + " (" + status + ")";

        console.log("Status berhasil diperbarui!");
        return;
      }
    }

    console.log("Pasien tidak ditemukan.");
  },

  // Menu 5: Hapus Pasien
  hapusPasien() {
    const id = Number(prompt("Masukkan ID pasien: "));

    for (let i = 0; i < this.pasien.length; i++) {
      if (this.pasien[i].id === id) {
        this.pasien.splice(i, 1);

        console.log("Pasien berhasil dihapus!");
        return;
      }
    }

    console.log("Pasien tidak ditemukan.");
  },
};

let berjalan = true;

while (berjalan) {
  console.log(
    "\n==============================\n" +
    "     SISTEM ANTREAN KLINIK\n" +
    "==============================\n\n" +
    "1. Tambah Pasien\n" +
    "2. Lihat Pasien\n" +
    "3. Edit Keluhan Pasien\n" +
    "4. Update Status Pasien\n" +
    "5. Hapus Pasien\n" +
    "6. Keluar\n"
  );

  const pilihan = prompt("Pilih menu: ");

  if (pilihan === "1") {
    klinik.tambahPasien();
  } else if (pilihan === "2") {
    klinik.lihatPasien();
  } else if (pilihan === "3") {
    klinik.editKeluhan();
  } else if (pilihan === "4") {
    klinik.updateStatus();
  } else if (pilihan === "5") {
    klinik.hapusPasien();
  } else if (pilihan === "6") {
    berjalan = false;

    console.log("Program selesai.");
  } else {
    console.log("Pilihan tidak tersedia.");
  }
};


  