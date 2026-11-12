const setText = (id, value) => { const element = document.getElementById(id); if (element) element.textContent = value; };
setText("year", new Date().getFullYear());

function updateLocalTime() {
  const time = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
  setText("local-time", `LOCAL TIME — ${time}`);
}
updateLocalTime();
setInterval(updateLocalTime, 60_000);

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.className = "form-status";
  const config = window.PORTFOLIO_CONFIG || {};
  const clientLib = window.supabase;
  if (!config.supabaseUrl || !config.supabaseAnonKey || !clientLib) {
    status.textContent = "The message form is not connected yet. Please reach out on LinkedIn.";
    status.classList.add("error");
    return;
  }
  const button = form.querySelector("button[type=submit]");
  button.disabled = true;
  button.querySelector("span").textContent = "…";
  const payload = Object.fromEntries(new FormData(form).entries());
  try {
    const client = clientLib.createClient(config.supabaseUrl, config.supabaseAnonKey);
    const { error } = await client.from("contact_messages").insert({
      name: payload.name.trim(), email: payload.email.trim(), message: payload.message.trim()
    });
    if (error) throw error;
    form.reset();
    status.textContent = "Thanks — your note is on its way. I’ll be in touch soon.";
    status.classList.add("success");
  } catch (error) {
    console.error("Contact form submission failed", error);
    status.textContent = "That note didn’t go through. Please try again or reach out on LinkedIn.";
    status.classList.add("error");
  } finally {
    button.disabled = false;
    button.querySelector("span").textContent = "↗";
  }
});
