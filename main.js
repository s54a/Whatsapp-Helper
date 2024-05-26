import "./style.css";
import "./particle";

const phoneNumberInput = document.getElementById("phoneNumber");
const messageInput = document.getElementById("message");
const linkContainer = document.getElementById("linkContainer");
const copyButton = document.getElementById("copyButton");
const openChatButton = document.getElementById("openChatButton");

phoneNumberInput.addEventListener("input", updateLink);
messageInput.addEventListener("input", updateLink);
copyButton.addEventListener("click", copyLink);
openChatButton.addEventListener("click", openChat);

function updateLink() {
  let phoneNumber = phoneNumberInput.value.trim();
  const message = encodeURIComponent(messageInput.value.trim());
  let countryCode = "91";

  // Clear link if phone number input is empty
  if (phoneNumber === "") {
    linkContainer.innerHTML = "";
    return;
  }

  // Validate phone number length
  if (phoneNumber.length < 4 || phoneNumber.length > 15) {
    linkContainer.innerHTML = "Phone number must be between 4 and 15 digits.";
    return false;
  }

  // Check if country code is provided or not
  if (phoneNumber.length > 10) {
    countryCode = phoneNumber.substring(0, phoneNumber.length - 10);
    phoneNumber = phoneNumber.substring(phoneNumber.length - 10);
  }

  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}${
    message ? `?text=${message}` : ""
  }`;
  linkContainer.innerHTML = `<a href="${whatsappLink}" id="whatsappLink" target="_blank">${whatsappLink}</a>`;
  linkContainer.style.margin = "1rem";
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

function toggleHidden() {
  const hiddenContent = document.querySelector(".hidden");
  hiddenContent.classList.toggle("visible");

  // Scroll to the hidden content
  if (hiddenContent.classList.contains("visible")) {
    hiddenContent.scrollIntoView({ behavior: "smooth" });
  }
}
