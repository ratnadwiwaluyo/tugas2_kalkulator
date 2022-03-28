// Insert atau memasukan angka ke dalam textview/ kotak an
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi Hitung 
// eval digunakan untuk perhitungan, meskipun itu nilainya/datanya berupa string
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Clean, hapus semua
function clean(){
	document.form.textarea.value = "";
}

// Hapus satu-satu
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}