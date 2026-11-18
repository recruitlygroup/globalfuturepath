// Replace with your free key from https://web3forms.com (sends form emails to info@globalfuturepathtraining.com)
const ACCESS_KEY = "582ccd80-397e-49a2-80a0-8fa30caf1e40";
document.getElementById("y").textContent = new Date().getFullYear();
const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
menu.addEventListener("click", e => { if (e.target.tagName === "A") menu.classList.remove("open"); });
document.querySelectorAll("form.form").forEach(f => f.addEventListener("submit", async e => {
  e.preventDefault();
  const s = f.querySelector(".status"), b = f.querySelector("button");
  if (ACCESS_KEY.startsWith("PASTE")) { s.textContent = "Form not connected yet. Please email info@globalfuturepathtraining.com."; return; }
  const data = Object.fromEntries(new FormData(f)); data.access_key = ACCESS_KEY; data.subject = f.dataset.subject + " - Global Futurepath";
  b.disabled = true; s.textContent = "Sending...";
  try {
    const r = await fetch("https://api.web3forms.com/submit", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    const j = await r.json();
    if (j.success) { s.textContent = "Thank you. We will reply by email soon."; f.reset(); } else throw 0;
  } catch { s.textContent = "Could not send. Please email info@globalfuturepathtraining.com."; }
  b.disabled = false;
}));
