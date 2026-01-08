// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsSection = document.getElementById("results");
const suggestionsSection = document.getElementById("suggestions");

// Search functionality
function searchGuest(query) {
  if (!query.trim()) {
    resultsSection.classList.add("hidden");
    return [];
  }

  const searchTerm = query.toLowerCase().trim();

  // Find exact or partial matches
  const results = seatingData.filter((guest) =>
    guest.name.toLowerCase().includes(searchTerm)
  );

  // Sort by relevance (exact matches first, then by how early the match appears)
  results.sort((a, b) => {
    const aIndex = a.name.toLowerCase().indexOf(searchTerm);
    const bIndex = b.name.toLowerCase().indexOf(searchTerm);
    return aIndex - bIndex;
  });

  return results;
}

// Display search results
function displayResults(results) {
  if (results.length === 0) {
    resultsSection.innerHTML = `
            <div class="no-results">
                <div class="icon">😕</div>
                <h3>No results found</h3>
                <p>Please check the spelling or try a different name</p>
            </div>
        `;
    resultsSection.classList.remove("hidden");
    return;
  }

  if (results.length === 1) {
    const guest = results[0];
    resultsSection.innerHTML = `
            <div class="result-card">
                <div class="guest-name">${guest.name}</div>
                <div class="result-details">
                    <div class="detail-item">
                        <span class="detail-label">Table</span>
                        <span class="detail-value">${String(
                          guest.table
                        ).padStart(2, "0")}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Seat</span>
                        <span class="detail-value">${String(
                          guest.seat
                        ).padStart(2, "0")}</span>
                    </div>
                </div>
            </div>
        `;
  } else {
    resultsSection.innerHTML = `
            <div class="multiple-results">
                ${results
                  .map(
                    (guest) => `
                    <div class="result-card" onclick="selectGuest('${
                      guest.name
                    }')">
                        <div class="guest-name">${guest.name}</div>
                        <div class="result-details">
                            <div class="detail-item">
                                <span class="detail-label">Table</span>
                                <span class="detail-value">${String(
                                  guest.table
                                ).padStart(2, "0")}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Seat</span>
                                <span class="detail-value">${String(
                                  guest.seat
                                ).padStart(2, "0")}</span>
                            </div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
  }

  resultsSection.classList.remove("hidden");
}

// Display suggestions while typing
function displaySuggestions(results) {
  if (results.length === 0 || searchInput.value.trim() === "") {
    suggestionsSection.classList.add("hidden");
    return;
  }

  // Limit suggestions to 5
  const limitedResults = results.slice(0, 5);

  suggestionsSection.innerHTML = limitedResults
    .map(
      (guest) => `
        <div class="suggestion-item" onclick="selectGuest('${guest.name}')">
            <span class="suggestion-name">${highlightMatch(
              guest.name,
              searchInput.value
            )}</span>
            <span class="suggestion-table">Table ${String(guest.table).padStart(
              2,
              "0"
            )}</span>
        </div>
    `
    )
    .join("");

  suggestionsSection.classList.remove("hidden");
}

// Highlight matching text
function highlightMatch(text, query) {
  const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
  return text.replace(regex, "<strong>$1</strong>");
}

// Escape special regex characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Select a guest from suggestions
function selectGuest(name) {
  searchInput.value = name;
  suggestionsSection.classList.add("hidden");
  const results = searchGuest(name);
  displayResults(results);
}

// Event Listeners
searchInput.addEventListener("input", (e) => {
  const query = e.target.value;
  const results = searchGuest(query);
  displaySuggestions(results);

  if (query.trim() === "") {
    resultsSection.classList.add("hidden");
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    suggestionsSection.classList.add("hidden");
    const results = searchGuest(searchInput.value);
    displayResults(results);
  }
});

searchBtn.addEventListener("click", () => {
  suggestionsSection.classList.add("hidden");
  const results = searchGuest(searchInput.value);
  displayResults(results);
});

// Close suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".search-section") &&
    !e.target.closest(".suggestions-section")
  ) {
    suggestionsSection.classList.add("hidden");
  }
});

// Make selectGuest available globally
window.selectGuest = selectGuest;
