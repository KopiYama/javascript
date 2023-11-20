// Membuat variabel evenNumber sebagai array kosong
let evenNumber = [];

// Menggunakan for loop untuk mengiterasi dari 1 hingga 100
for (let i = 1; i <= 100; i++) {
  // Memeriksa apakah i adalah bilangan genap
  if (i % 2 === 0) {
    evenNumber.push(i); // Menambahkan bilangan genap ke dalam array
  }
}

// Menampilkan array evenNumber ke console untuk verifikasi
console.log(evenNumber);
