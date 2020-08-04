#Projeck live Update CoronaVirus

#installing Aplication
	*pastikan sudah terinstall nodejs (saya gunakan versi 12)
	*pastikan sudah terinstall npm (saya gunakan versi 6)
1. Open folder 'realtime_covid19' di vscode. lalu buka terminal kemudian ketikan "npm install".
	(langkah ini dimaksudkan untuk penginstalan package yang dibutuhkan oleh aplikasi)
	(jika langkah diatas kurang dimengerti maka kita bisa install package langsung dari terminal/cmd
	pada komputer. dengan cara berikut : 
	
	- open terminal, kemudian kita akan menuju file yang kita butuhkan. dalam hal ini folder 'realtime_covid19'.
	misalkan folder berada pada direktori downloads maka :
	- cd Downloads
	- cd realtime_covid19
	- npm install
	)
2. jika proses penginstalan sudah selesai. kemudian kita jalankan aplikasi dengan cara 'npm start'


#stack yang saya gunakan

1. react js
2. react live clock

- Alasan tidak menggunakan Axios dan Redux karena aplikasi yang dibuat belom membutuhkan.
 next jika aplikasi sudah semakin besar kekdua library terseut bisa kita gunakan untuk mempermudah
 pekerjaan kita.


#fungsi fungsi yang terdapat pada aplikasi.
1) terdapat paginasion yang dapat mengatur tampilan table saat hendak membaca.
paginasion diatur berdasarkan dropdown yang ada pada pojok kiri atas tabel.
2) pencarian yang dapat digunakan untuk mencari data by country.
3) aplikasi mengambil data dari api secara otomatis setiap 20 detik.
hal ini menngunakan useEffect karena saya menggunakan functional component. saat melakukan update, aplikasi berjalan
tanpa harus merefresh karena hal ini merupakan kelebihan dari react dari sisi virtual domnya. hanya data saja yang 
akan berubah saat ada perubahan. react sangat membantu saat kita membutuhkan aplikasi yang datanya sangat dinamis.