// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Set timestamp on join page (hidden input)
document.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.querySelector('input[name="timestamp"]');
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // Read URL parameters on thank you page
    const params = new URLSearchParams(window.location.search);

    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element && value) {
            element.textContent = value;
        }
    };

    setText("fname", params.get("fname"));
    setText("lname", params.get("lname"));
    setText("email", params.get("email"));
    setText("phone", params.get("phone"));
    setText("orgname", params.get("orgname"));
    setText("display-timestamp", params.get("timestamp"));
});