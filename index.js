/* === HE THONG SOI TIEN PRO - NINI === */
let lastBalance = 0;

const OrgWS = window.WebSocket;
window.WebSocket = function(...args) {
    const ws = new OrgWS(...args);
    ws.addEventListener('message', (e) => {
        try {
            const data = JSON.parse(e.data);
            if (data[0] === 3) {
                let currentBalance = data[4];
                let diff = currentBalance - lastBalance;
                
                console.log("💰 SO DU HT:", currentBalance.toLocaleString());
                if (lastBalance !== 0) {
                    console.log(diff >= 0 ? "📈 BIEN DONG: +" + diff : "📉 BIEN DONG: " + diff);
                }
                lastBalance = currentBalance;
            }
        } catch (err) {}
    });
    return ws;
};
