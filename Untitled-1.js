function scoreChecker(score) {
    let result;
  
    // Logika if untuk menentukan nilai result
    if (score >= 90) {
      result = 'Selamat! Anda mendapatkan nilai A.';
    } else if (score >= 80) {
      result = 'Anda mendapatkan nilai B.';
    } else if (score >= 70) {
      result = 'Anda mendapatkan nilai C.';
    } else if (score >= 60) {
      result = 'Anda mendapatkan nilai D.';
    } else {
      result = 'Anda mendapatkan nilai E.';
    }
  
    // Jangan hapus kode ini
    return result;
  }
  
  /**
   * Jangan hapus kode di bawah ini
   */
  module.exports = scoreChecker;
  