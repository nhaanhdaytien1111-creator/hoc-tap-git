// PROJECT: SOI TIEN SERVER - NINI
console.log("🚨 HỆ THỐNG ĐÃ SẴN SÀNG!");

const OrgWS = window.WebSocket;
window.WebSocket = function(...args) {
    const ws = new OrgWS(...args);
    ws.addEventListener('message', (e) => {
        try {
            const data = JSON.parse(e.data);
            if (data[0] === 3) {
                console.log("💰 SỐ DƯ SERVER:", data[4].toLocaleString());
            }
        } catch (err) {}
    });
    return ws;
};
