const addItemBtn = document.getElementById('addItemBtn');
const wishlistContainer = document.getElementById('wishlistContainer');

// Function to render the wishlist items from storage
function renderWishlist() {
    chrome.storage.local.get({ wishlist: [] }, (data) => {
        wishlistContainer.innerHTML = ''; // Clear previous list
        const wishlist = data.wishlist;

        if (wishlist.length === 0) {
            wishlistContainer.innerHTML = '<p>Your wishlist is empty. Add a product!</p>';
            return;
        }

        wishlist.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'wishlist-item';
            itemDiv.innerHTML = `
                <div class="item-details">
                    <a href="${item.url}" target="_blank" class="item-title">${item.title}</a>
                </div>
                <div class="item-actions">
                    <button class="delete-btn" data-index="${index}">🗑️</button>
                </div>
            `;
            wishlistContainer.appendChild(itemDiv);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteItem);
        });
    });
}

// Function to handle adding a new item
// Function to handle adding a new item
addItemBtn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // --- Add a check for restricted URLs ---
    if (tab.url.startsWith('chrome://') || tab.url.startsWith('https://chrome.google.com')) {
        alert("This extension cannot run on Chrome's internal pages or the Web Store.");
        return;
    }

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            files: ['content.js']
        },
        (injectionResults) => {
            // --- MODIFIED LINE FOR BETTER DEBUGGING ---
            if (chrome.runtime.lastError) {
                console.error("Script injection failed: ", chrome.runtime.lastError.message);
                return;
            }
            
            // This part remains the same
            if (!injectionResults || injectionResults.length === 0) {
                 console.error("Injection resulted in no results.");
                 return;
            }

            const product = injectionResults[0].result;
            if (product && product.title !== 'N/A') {
                saveItem(product);
            } else {
                alert('Could not extract product details from this page.');
            }
        }
    );
});

// Function to save an item to chrome.storage
function saveItem(product) {
    chrome.storage.local.get({ wishlist: [] }, (data) => {
        const wishlist = data.wishlist;
        wishlist.push(product);
        chrome.storage.local.set({ wishlist }, () => {
            console.log('Product saved:', product);
            renderWishlist(); // Re-render the list with the new item
        });
    });
}

// Function to delete an item
function deleteItem(event) {
    const indexToDelete = parseInt(event.target.getAttribute('data-index'), 10);
    chrome.storage.local.get({ wishlist: [] }, (data) => {
        let wishlist = data.wishlist;
        wishlist.splice(indexToDelete, 1); // Remove the item
        chrome.storage.local.set({ wishlist }, () => {
            renderWishlist(); // Re-render the list
        });
    });
}

// Initial render when the popup opens
document.addEventListener('DOMContentLoaded', renderWishlist);