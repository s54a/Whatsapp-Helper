import "./style.css";
import "./particle";

// Wait for the DOM to be fully loaded
const countryCodeInput = document.getElementById("countryCode");
const phoneNumberInput = document.getElementById("phoneNumber");
const messageInput = document.getElementById("message");
const linkContainer = document.getElementById("linkContainer");
const copyButton = document.getElementById("copyButton");
const openChatButton = document.getElementById("openChatButton");

countryCodeInput.addEventListener("input", updateLink);
phoneNumberInput.addEventListener("input", updateLink);
messageInput.addEventListener("input", updateLink);
copyButton.addEventListener("click", copyLink);
openChatButton.addEventListener("click", openChat);

function updateLink() {
  const countryCode = countryCodeInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const message = encodeURIComponent(messageInput.value.trim());

  // Clear link if phone number input is empty
  if (phoneNumber === "") {
    linkContainer.innerHTML = "";
    return;
  }

  // Validate country code length
  if (countryCode.length < 1 || countryCode.length > 4) {
    linkContainer.innerHTML = "Country code must be between 1 and 4 digits.";
    linkContainer.style.margin = "1rem";
    return false;
  } else {
    linkContainer.style.margin = "0";
  }

  // Validate phone number length
  if (phoneNumber.length < 4 || phoneNumber.length > 15) {
    linkContainer.innerHTML = "Phone number must be between 4 and 15 digits.";
    linkContainer.style.margin = "1rem";
    return false;
  } else {
    linkContainer.style.margin = "0";
  }

  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}${
    message ? `?text=${message}` : ""
  }`;

  if (whatsappLink) {
    linkContainer.innerHTML = `<a href="${whatsappLink}" id="whatsappLink" target="_blank">${whatsappLink}</a>`;
    linkContainer.style.margin = "1rem";
  } else {
    linkContainer.style.margin = "0";
  }
}

function copyLink() {
  const link = linkContainer.querySelector("a");

  if (link) {
    const tempInput = document.createElement("input");
    tempInput.value = link.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard!");
  } else {
    alert("Please enter a valid phone number.");
  }
}

function openChat() {
  const link = linkContainer.querySelector("a");
  if (link) {
    window.open(link.href, "_blank");
  } else {
    alert("Please enter a valid phone number.");
  }
}

updateLink();
