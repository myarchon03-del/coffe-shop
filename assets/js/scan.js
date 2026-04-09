// Simulasi Database (Nantinya diganti dengan Fetch API ke database)
let dataPesanan = [
    { id: "ORD-001", meja: "A02", waktu: "10:15", total: 45000, status: "Lunas" },
    { id: "ORD-002", meja: "B05", waktu: "10:30", total: 120000, status: "Lunas" },
    { id: "ORD-003", meja: "A01", waktu: "11:45", total: 75000, status: "Belum Bayar" }
];

// Utility: Format Rupiah
const formatRp = (angka) => {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        minimumFractionDigits: 0 
    }).format(angka);
};

// Logika: Render Tabel Pesanan
function renderTable() {
    const tbody = document.getElementById('order-table-body');
    // Jika tidak ada elemen tbody (misal script dijalankan di halaman login), batalkan fungsi
    if (!tbody) return; 

    tbody.innerHTML = ''; // Bersihkan tabel sebelum merender ulang

    dataPesanan.forEach(order => {
        const isLunas = order.status === 'Lunas';
        
        const badgeClass = isLunas 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700';
        
        const actionBtn = isLunas 
            ? `<button class="bg-gray-500 text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-gray-600 transition-colors">Cetak</button>`
            : `<button onclick="bayarPesanan('${order.id}')" class="bg-[#E85D04] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#DC2F02] transition-colors">Proses Bayar</button>`;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 transition-colors";
        tr.innerHTML = `
            <td class="py-3 px-4 font-semibold text-gray-700">${order.id}</td>
            <td class="py-3 px-4">${order.meja}</td>
            <td class="py-3 px-4">${order.waktu}</td>
            <td class="py-3 px-4 font-medium">${formatRp(order.total)}</td>
            <td class="py-3 px-4">
                <span class="px-2.5 py-1 rounded-md text-xs font-bold ${badgeClass}">${order.status}</span>
            </td>
            <td class="py-3 px-4">${actionBtn}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Logika: Simulasi Scan QR
function simulasikanScan() {
    const scannerText = document.getElementById('scanner-text');
    
    // Cegah error jika fungsi dipanggil di halaman tanpa elemen ini
    if(!scannerText) return;

    scannerText.innerText = "Membaca QR A01...";
    
    setTimeout(() => {
        alert("QR Code Meja A01 Terdeteksi!");
        scannerText.innerText = "Kamera Aktif...";
        // Di sini nantinya kamu bisa menambahkan logika untuk memfilter tabel berdasarkan meja yang di-scan
    }, 800);
}

// Logika: Proses Pembayaran
function bayarPesanan(id) {
    const orderIndex = dataPesanan.findIndex(o => o.id === id);
    if (orderIndex > -1) {
        // Simulasi update ke "Lunas"
        dataPesanan[orderIndex].status = "Lunas";
        renderTable(); // Update tampilan tabel seketika
        // Di sistem asli, kamu akan memanggil endpoint API dengan metode POST/PUT di sini
    }
}

// Logika: Logout (Sederhana)
function logout() {
    // Arahkan kembali ke file login (pastikan file login.html ada di direktori yang sama)
    window.location.href = 'login.html';
}

// Inisialisasi: Jalankan fungsi renderTable saat script pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});