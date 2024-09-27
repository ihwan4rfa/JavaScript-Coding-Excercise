/* 
  Author: zikrimansyursyah
  
  Case : anda diminta untuk membuat fungsi yang dapat menghitung total pendapatan, produk terlaris, dan rata-rata harga produk

  Example Input: (data pada variabel transactions)

  Expected Output: 
  - Total Pendapatan:  5500000
  - Produk Terlaris : Baju
  - Rata-rata Harga Produk : 175000

  Notes: 
  - dilarang menggunakan array prototype seperti .map() .reduce() .filter() dll
  - tampikan expected output dengan console.log()
*/

function totalPendapatan(transactions) { // kofigurasi parameter sesuai kebutuhan anda
  let count = 0;

  for (let i = 0; i < transactions.length; i++) {
    count += transactions[i].harga * transactions[i].jumlah;
  }

  return count;
}

function produkTerlaris(transactions) { // kofigurasi parameter sesuai kebutuhan anda
  let sameProduk = [];

  for (let i = 0; i < transactions.length - 1; i++) {
    if (transactions[i + 1].produk === transactions[i].produk) {
      sameProduk.push(transactions[i].produk);
    }
  }

  return sameProduk;
}

function rataRataHarga(transactions) { // kofigurasi parameter sesuai kebutuhan anda
  let count = 0;

  for (let i = 0; i < transactions.length; i++) {
    count += transactions[i].harga;
  }

  return count / transactions.length
}

// CASE VALUE
const transactions = [
  { tanggal: "2023-01-05", produk: "Baju", jumlah: 5, harga: 150000 },
  { tanggal: "2023-01-10", produk: "Celana", jumlah: 3, harga: 200000 },
  { tanggal: "2023-02-15", produk: "Baju", jumlah: 2, harga: 150000 },
  { tanggal: "2023-03-20", produk: "Sepatu", jumlah: 4, harga: 300000 },
  { tanggal: "2023-03-22", produk: "Topi", jumlah: 6, harga: 50000 },
  { tanggal: "2023-04-10", produk: "Celana", jumlah: 2, harga: 200000 },
  { tanggal: "2023-04-15", produk: "Baju", jumlah: 3, harga: 150000 },
  { tanggal: "2023-05-05", produk: "Sepatu", jumlah: 1, harga: 300000 },
  { tanggal: "2023-05-10", produk: "Topi", jumlah: 4, harga: 50000 },
  { tanggal: "2023-06-15", produk: "Celana", jumlah: 5, harga: 200000 }
];

// TEST CASE
console.log("Total Saldo Akhir :", totalPendapatan(transactions));
console.log("Transaksi Terbanyak :", produkTerlaris(transactions));
console.log("Total Transaksi :", rataRataHarga(transactions));