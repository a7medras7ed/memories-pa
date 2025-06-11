
let isDark = false;

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    isDark = !isDark;
}

function showSearch() {
    const search = document.getElementById("search-box");
    search.classList.toggle("hidden");
}

function showChat() {
    document.getElementById("chat-box").classList.toggle("hidden");
}

function showLive() {
    alert("سيتم تفعيل الايقونه قريبا عند الانتهاء من الصيانه
شكرا لتفهمكم
(مؤسسة ذيب)");
}

function showGames() {
    alert("الألعاب ستُضاف قريبًا");
}

function sendChat(e) {
    if (e.key === "Enter") {
        const chatBox = document.getElementById("chat-messages");
        const input = e.target;
        const msg = document.createElement("div");
        msg.textContent = input.value;
        chatBox.appendChild(msg);
        input.value = "";
    }
}

function addMemory() {
    const posts = document.getElementById("posts");
    const textarea = document.querySelector("#new-memory textarea");
    const feeling = document.getElementById("feeling").value;
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
        <div>👤 مستخدم #${Math.floor(1000000 + Math.random() * 9000000)}</div>
        <div>${textarea.value}</div>
        <div>الحالة: ${feeling}</div>
        <div>
            <button onclick="alert('لايك!')">👍</button>
            <button onclick="alert('علق!')">💬</button>
            <button onclick="alert('مشاركة!')">📤</button>
        </div>
    `;
    posts.prepend(post);
    textarea.value = "";
}
