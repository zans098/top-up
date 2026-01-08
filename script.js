const gameData = {
    magic_chess: {
        name: 'Magic Chess: Go Go',
        items: [
            { amount: '60 Diamond', price: 15000, bonus: null },
            { amount: '180 Diamond', price: 40000, bonus: '+10 Diamond' },
            { amount: '366 Diamond', price: 80000, bonus: '+20 Diamond' },
            { amount: '610 Diamond', price: 130000, bonus: '+35 Diamond' }
            
        ],
        serverRequired: false
    },
    mlbb: {
        name: 'Mobile Legends',
        items: [
            { amount: '86 Diamond', price: 20000, bonus: null },
            { amount: '172 Diamond', price: 40000, bonus: '+4 Diamond' },
            { amount: '257 Diamond', price: 60000, bonus: '+6 Diamond' },
            { amount: '344 Diamond', price: 80000, bonus: '+8 Diamond' },
            { amount: '429 Diamond', price: 100000, bonus: '+10 Diamond' },
            { amount: '514 Diamond', price: 120000, bonus: '+12 Diamond' },
            { amount: '706 Diamond', price: 160000, bonus: '+20 Diamond' },
            { amount: '878 Diamond', price: 200000, bonus: '+30 Diamond' },
            { amount: '1412 Diamond', price: 320000, bonus: '+50 Diamond' },
            { amount: '2195 Diamond', price: 500000, bonus: '+100 Diamond' }
        ],
        serverRequired: true
    },
    ff: {
        name: 'Free Fire',
        items: [
            { amount: '70 Diamond', price: 10000, bonus: null },
            { amount: '140 Diamond', price: 20000, bonus: '+5 Diamond' },
            { amount: '210 Diamond', price: 30000, bonus: '+8 Diamond' },
            { amount: '355 Diamond', price: 50000, bonus: '+15 Diamond' },
            { amount: '720 Diamond', price: 100000, bonus: '+35 Diamond' },
            { amount: '1450 Diamond', price: 200000, bonus: '+75 Diamond' },
            { amount: '2180 Diamond', price: 300000, bonus: '+120 Diamond' },
            { amount: '3640 Diamond', price: 500000, bonus: '+200 Diamond' },
            { amount: '7290 Diamond', price: 1000000, bonus: '+500 Diamond' }
        ],
        serverRequired: false
    },
    ff_garena: {
        name: 'Free Fire Garena Shells',
        items: [
            { amount: '100 Shells', price: 15000, bonus: null },
            { amount: '310 Shells', price: 45000, bonus: '+10 Shells' },
            { amount: '520 Shells', price: 75000, bonus: '+20 Shells' },
            { amount: '1075 Shells', price: 150000, bonus: '+50 Shells' }
        ],
        serverRequired: false
    },
    gi: {
        name: 'Genshin Impact',
        items: [
            { amount: '60 Genesis', price: 15000, bonus: null },
            { amount: '300 Genesis', price: 75000, bonus: '+30 Genesis' },
            { amount: '980 Genesis', price: 240000, bonus: '+110 Genesis' },
            { amount: '1980 Genesis', price: 480000, bonus: '+260 Genesis' },
            { amount: '3280 Genesis', price: 800000, bonus: '+600 Genesis' },
            { amount: '6480 Genesis', price: 1600000, bonus: '+1600 Genesis' }
        ],
        serverRequired: true
    },
    chamet: {
        name: 'Chamet',
        items: [
            { amount: '20 Coin', price: 5000, bonus: null },
            { amount: '40 Coin', price: 10000, bonus: null },
            { amount: '100 Coin', price: 25000, bonus: '+5 Coin' },
            { amount: '200 Coin', price: 50000, bonus: '+10 Coin' }
        ],
        serverRequired: false
    },
    poppo: {
        name: 'Poppo Live',
        items: [
            { amount: '60 Coin', price: 12000, bonus: null },
            { amount: '140 Coin', price: 28000, bonus: '+5 Coin' },
            { amount: '280 Coin', price: 55000, bonus: '+15 Coin' },
            { amount: '560 Coin', price: 110000, bonus: '+40 Coin' }
        ],
        serverRequired: false
    },
    zenless: {
        name: 'Zenless Zone Zero',
        items: [
            { amount: '60 Monochrome', price: 15000, bonus: null },
            { amount: '300 Monochrome', price: 75000, bonus: '+30 Monochrome' },
            { amount: '980 Monochrome', price: 240000, bonus: '+110 Monochrome' },
            { amount: '1980 Monochrome', price: 480000, bonus: '+260 Monochrome' }
        ],
        serverRequired: true
    },
    hok: {
        name: 'Honor of Kings',
        items: [
            { amount: '40 Token', price: 10000, bonus: null },
            { amount: '90 Token', price: 22000, bonus: '+5 Token' },
            { amount: '185 Token', price: 45000, bonus: '+10 Token' },
            { amount: '400 Token', price: 95000, bonus: '+25 Token' }
        ],
        serverRequired: false
    },
    valorant: {
        name: 'Valorant',
        items: [
            { amount: '475 VP', price: 50000, bonus: null },
            { amount: '1000 VP', price: 100000, bonus: '+50 VP' },
            { amount: '2050 VP', price: 200000, bonus: '+125 VP' },
            { amount: '3650 VP', price: 350000, bonus: '+225 VP' }
        ],
        serverRequired: false
    },
    pubg: {
        name: 'PUBG Mobile',
        items: [
            { amount: '60 UC', price: 15000, bonus: null },
            { amount: '125 UC', price: 30000, bonus: '+5 UC' },
            { amount: '250 UC', price: 60000, bonus: '+10 UC' },
            { amount: '500 UC', price: 120000, bonus: '+25 UC' },
            { amount: '1000 UC', price: 240000, bonus: '+60 UC' },
            { amount: '1500 UC', price: 360000, bonus: '+100 UC' },
            { amount: '3000 UC', price: 720000, bonus: '+200 UC' },
            { amount: '6000 UC', price: 1440000, bonus: '+500 UC' }
        ],
        serverRequired: false
    },
    codm: {
        name: 'Call of Duty Mobile',
        items: [
            { amount: '80 CP', price: 15000, bonus: null },
            { amount: '160 CP', price: 30000, bonus: null },
            { amount: '240 CP', price: 45000, bonus: null },
            { amount: '400 CP', price: 75000, bonus: null },
            { amount: '800 CP', price: 150000, bonus: '+40 CP' },
            { amount: '1600 CP', price: 300000, bonus: '+80 CP' },
            { amount: '2400 CP', price: 450000, bonus: '+120 CP' },
            { amount: '4000 CP', price: 750000, bonus: '+200 CP' }
        ],
        serverRequired: false
    }
};
const paymentMethods = {
    dana: 'DANA',
    ovo: 'OVO',
    gopay: 'GoPay',
    shopee: 'ShopeePay',
    bank: 'Transfer Bank'
};
let selectedGame = null;
let selectedItem = null;
let selectedPayment = null;
function createMatrixRain() {
    const matrixContainer = document.getElementById('matrixRain');
    const chars = '01';
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDuration = (Math.random() * 8 + 5) + 's';
        column.style.animationDelay = Math.random() * 5 + 's';
        let columnText = '';
        for (let j = 0; j < 10; j++) {
            columnText += chars.charAt(Math.floor(Math.random() * chars.length)) + '<br>';
        }
        column.innerHTML = columnText;
        matrixContainer.appendChild(column);
    }
}
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    });
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
}
function initGameSelection() {
    const gameCards = document.querySelectorAll('.game-card');
    const orderForm = document.getElementById('orderForm');
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            gameCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedGame = card.dataset.game;
            orderForm.style.display = 'block';
            document.getElementById('data-akun-section').scrollIntoView({ behavior: 'smooth' });
            loadGameItems();
            updateServerField();
            updateOrderSummary();
        });
    });
}
function loadGameItems() {
    if (!selectedGame || !gameData[selectedGame]) return;
    const itemGrid = document.getElementById('itemGrid');
    const items = gameData[selectedGame].items;
    itemGrid.innerHTML = '';
    items.forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.dataset.index = index;
        itemCard.innerHTML = `
            <div class="item-amount">${item.amount}</div>
            <div class="item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
            ${item.bonus ? `<div class="item-bonus">${item.bonus}</div>` : ''}
        `;
        itemCard.addEventListener('click', () => {
            document.querySelectorAll('.item-card').forEach(c => c.classList.remove('selected'));
            itemCard.classList.add('selected');
            selectedItem = {
                index: index,
                ...item
            };
            updateOrderSummary();
            document.getElementById('pembayaran-section').scrollIntoView({ behavior: 'smooth' });
        });
        itemGrid.appendChild(itemCard);
    });
}
function updateServerField() {
    const serverGroup = document.getElementById('serverGroup');
    if (selectedGame && gameData[selectedGame].serverRequired) {
        serverGroup.style.display = 'block';
    } else {
        serverGroup.style.display = 'none';
    }
}
function initPaymentSelection() {
    const paymentCards = document.querySelectorAll('.payment-card');
    paymentCards.forEach(card => {
        card.addEventListener('click', () => {
            paymentCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedPayment = card.dataset.payment;
            updateOrderSummary();
            document.getElementById('ringkasan-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}
function updateOrderSummary() {
    const summaryGame = document.getElementById('summaryGame');
    const summaryItem = document.getElementById('summaryItem');
    const summaryPayment = document.getElementById('summaryPayment');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryTax = document.getElementById('summaryTax');
    const summaryTotal = document.getElementById('summaryTotal');
    summaryGame.textContent = selectedGame ? gameData[selectedGame].name : '-';
    if (selectedItem) {
        summaryItem.textContent = selectedItem.amount;
        const subtotal = selectedItem.price;
        const tax = Math.round(subtotal * 0.1);
        const total = subtotal + tax;
        summarySubtotal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
        summaryTax.textContent = `Rp ${tax.toLocaleString('id-ID')}`;
        summaryTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    } else {
        summaryItem.textContent = '-';
        summarySubtotal.textContent = 'Rp 0';
        summaryTax.textContent = 'Rp 0';
        summaryTotal.textContent = 'Rp 0';
    }
    summaryPayment.textContent = selectedPayment ? paymentMethods[selectedPayment] : '-';
}
function processOrder() {
    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const loadingSpinner = document.getElementById('loadingSpinner');
    const btnText = document.getElementById('btnText');
    if (!selectedGame) {
        alert('Silakan pilih game terlebih dahulu!');
        return;
    }
    if (!userId.trim()) {
        alert('User ID harus diisi!');
        document.getElementById('userId').focus();
        return;
    }
    if (gameData[selectedGame].serverRequired && !serverId.trim()) {
        alert('Server ID harus diisi!');
        document.getElementById('serverId').focus();
        return;
    }
    if (!selectedItem) {
        alert('Silakan pilih nominal item!');
        return;
    }
    if (!selectedPayment) {
        alert('Silakan pilih metode pembayaran!');
        return;
    }
    loadingSpinner.style.display = 'inline-block';
    btnText.textContent = 'Memproses...';
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        btnText.textContent = 'Proses Pesanan';
        const transactionId = 'TRX' + Date.now();
        document.getElementById('transactionId').textContent = transactionId;
        showModal();
    }, 3000);
}
function showModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0 && !value.startsWith('62')) {
        if (value.startsWith('0')) {
            value = '62' + value.substring(1);
        } else {
            value = '62' + value;
        }
    }
    input.value = value;
}
function glitchLogo() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        const originalText = logo.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchInterval = setInterval(() => {
            let glitched = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() < 0.1) {
                    glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    glitched += originalText[i];
                }
            }
            logo.textContent = glitched;
        }, 50);
        setTimeout(() => {
            clearInterval(glitchInterval);
            logo.textContent = originalText;
        }, 200);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    createMatrixRain();
    initMobileMenu();
    initGameSelection();
    initPaymentSelection();
    document.getElementById('processOrder').addEventListener('click', processOrder);
    document.getElementById('whatsapp').addEventListener('input', function() {
        formatPhoneNumber(this);
    });
    setInterval(glitchLogo, 10000);
    setTimeout(() => {
        document.querySelectorAll('.game-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('successModal');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        }
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
});