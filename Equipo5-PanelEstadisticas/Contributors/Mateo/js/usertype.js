const userStats = [
    { role: "Administrador", icon: "👑", interactions: getRandom(50, 150) },
    { role: "Editor", icon: "✏️", interactions: getRandom(30, 120) },
    { role: "Usuario", icon: "👤", interactions: getRandom(100, 300) },
    { role: "Invitado", icon: "👥", interactions: getRandom(10, 80) }
];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderStats() {
    const container = document.getElementById("stats-container");
    container.innerHTML = "";

    userStats.forEach(user => {
        const card = document.createElement("div");
        card.className = `
            stat-card-custom bg-white rounded-xl shadow-md p-3 w-40 text-center transform transition
        `;

        let iconColor;
        switch (user.role) {
            case "Administrador": iconColor = "bg-yellow-200"; break;
            case "Editor": iconColor = "bg-green-200"; break;
            case "Usuario": iconColor = "bg-blue-200"; break;
            case "Invitado": iconColor = "bg-pink-200"; break;
            default: iconColor = "bg-gray-200";
        }

        card.innerHTML = `
            <div class="mx-auto ${iconColor} w-14 h-14 flex items-center justify-center rounded-full text-3xl mb-2 shadow-sm">
                ${user.icon}
            </div>
            <div class="font-semibold text-base mb-1">${user.role}</div>
            <div class="text-blue-500 text-lg font-bold">${user.interactions}</div>
        `;

        container.appendChild(card);
    });
}

function updateStats() {
    userStats.forEach(user => {
        user.interactions += getRandom(1, 10);
    });
    renderStats();
}

document.addEventListener("DOMContentLoaded", () => {
    renderStats();
    setInterval(updateStats, 1000);
});
