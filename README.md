# 🛍️ Universal Shopping Wishlist - Chrome Extension

A simple, lightweight Chrome Extension to save products from any online store into a single, clean wishlist.

---

## Description

Tired of juggling bookmarks or keeping multiple wishlists across different shopping sites? The Universal Shopping Wishlist allows you to add any product from any e-commerce website to one unified list with a single click. This extension focuses on simplicity and privacy, storing all your data locally on your machine.

---

## ✨ Key Features

* **One-Click Saving:** Add products from any online store to your list instantly.
* **Unified List:** Manage all your desired items in one clean, centralized interface.
* **Minimalist Design:** A clutter-free view that focuses only on the product title.
* **Easy Management:** Add and delete items with simple, intuitive controls.
* **Privacy-Focused:** All wishlist data is stored locally on your computer using `chrome.storage`. Nothing is sent to a server.
* **Lightweight & Fast:** Built with pure JavaScript for a smooth and responsive experience.

---

## 🚀 Installation

### Manual Installation (For Developers)

1.  **Download:** Clone this repository or download it as a `.zip` file and unzip it.
2.  **Open Chrome Extensions:** Open Google Chrome and navigate to `chrome://extensions`.
3.  **Enable Developer Mode:** Turn on the "Developer mode" toggle switch in the top-right corner.
4.  **Load Unpacked:** Click the "Load unpacked" button and select the folder where you cloned or unzipped the repository.
5.  **Done!** The extension icon will appear in your Chrome toolbar.

---

## 📖 How to Use

1.  Navigate to any product page on a shopping website (like Amazon, Flipkart, etc.).
2.  Click the Universal Shopping Wishlist icon in your Chrome toolbar to open the popup.
3.  Click the **"Add Current Product"** button.
4.  The product title will be scraped and added to your list.
5.  To remove an item, simply click the 🗑️ (trash) icon next to it.

---

## 📂 Project File Structure

A brief overview of the key files in this project:

* `manifest.json`: The core configuration file that defines the extension's permissions and properties.
* `popup.html`: The HTML structure for the extension's popup window.
* `popup.js`: Handles the logic for the popup, including rendering the list and managing user interactions (add/delete).
* `content.js`: The script injected into web pages to scrape product titles.
* `styles.css`: The stylesheet that defines the look and feel of the popup.
* `icons/`: Contains the `.png` icons for the extension's toolbar and store listing.

