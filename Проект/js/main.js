/* ============ WGW Mobile — основной скрипт ============ */

(function () {
  "use strict";

  const pwdInput = document.getElementById("password");
  const toggleBtn = document.getElementById("toggle-pwd-btn");
  const pwdIcon = document.getElementById("pwd-icon");

  if (pwdInput && toggleBtn && pwdIcon) {
    toggleBtn.addEventListener("click", function () {
      const isPassword = pwdInput.type === "password";
      pwdInput.type = isPassword ? "text" : "password";
      pwdIcon.textContent = isPassword ? "visibility" : "visibility_off";
    });
  }
})();
/* ============ Переключение табов на графике (Dashboard) ============ */
document.querySelectorAll(".chart-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".chart-tab").forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
/* ============ Фильтры тарифов и переключатель периодов ============ */

/* Табы фильтрации */
document.querySelectorAll(".tariff-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tariff-tab").forEach(function (t) {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

/* Переключатель «По дням / По месяцам» */
document.querySelectorAll(".tariffs__period button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".tariffs__period button").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});