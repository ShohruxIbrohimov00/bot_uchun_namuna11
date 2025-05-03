window.onload = function() {
    // LocalStorage'dan ma'lumotlarni olish
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Agar ma'lumot bo'lsa, jadvalga qo'shish
    if (userData) {
        const tableBody = document.getElementById('userTableBody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.status}</td>
            <td>${userData.course}</td>
            <td>${userData.phone}</td>
        `;

        tableBody.appendChild(row);
    } else {
        // Agar ma'lumot bo'lmasa, xabar berish
        const tableBody = document.getElementById('userTableBody');
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="4">Hech kim ro'yxatdan o'tmagan.</td>`;
        tableBody.appendChild(row);
    }
};
