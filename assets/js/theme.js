(function () {
    setTheme()
    //  header内なのでスイッチイベントリスナは遅延実行
    window.setTimeout(setThemeSwich, 100);
})();

function setTheme(){
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        document.documentElement.dataset.theme = stored;
    } else {
        // 未指定ならシステム設定を使う
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
        localStorage.setItem("theme", prefersDark);
    }
}

function setThemeSwich(){
    const themeSwitch = document.getElementById("switch");
    if (themeSwitch) {
        const html = document.documentElement;
        themeSwitch.checked = html.dataset.theme === "light";
        themeSwitch.addEventListener("click", () => {
            const switched = html.dataset.theme === "dark" ? "light" : "dark";
            html.dataset.theme = switched;
            localStorage.setItem("theme", switched);
        });
    } else {
        window.setTimeout(setThemeSwich, 100);
    }
}
