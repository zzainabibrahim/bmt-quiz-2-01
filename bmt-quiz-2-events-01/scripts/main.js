// Event data array with Picsum images
const events = [
  // --- Day 1: Nov 20, 2025 ---
  {
    title: "Opening Keynote: The Future of AI",
    type: "Keynote",
    date: "2025-11-20T09:00:00",
    description:
      "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
    image: "https://picsum.photos/400/200?random=1",
  },
  {
    title: "Advanced JavaScript Workshop",
    type: "Workshop",
    date: "2025-11-20T10:30:00",
    description:
      "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
    image: "https://picsum.photos/400/200?random=2",
  },
  {
    title: "Cybersecurity in the Cloud Era",
    type: "Talk",
    date: "2025-11-20T11:00:00",
    description:
      "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
    image: "https://picsum.photos/400/200?random=3",
  },
  {
    title: "Introduction to Quantum Computing",
    type: "Talk",
    date: "2025-11-20T14:00:00",
    description:
      "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
    image: "https://picsum.photos/400/200?random=4",
  },
  {
    title: "Networking Mixer & Welcome Reception",
    type: "Social",
    date: "2025-11-20T17:00:00",
    description:
      "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
    image: "https://picsum.photos/400/200?random=5",
  },

  // --- Day 2: Nov 21, 2025 ---
  {
    title: "The Ethics of Machine Learning",
    type: "Talk",
    date: "2025-11-21T09:30:00",
    description:
      "A critical discussion on the societal impact and ethical responsibilities in ML development.",
    image: "https://picsum.photos/400/200?random=6",
  },
  {
    title: "Building Scalable Web Apps with Microservices",
    type: "Talk",
    date: "2025-11-21T10:30:00",
    description:
      "Learn the principles of microservices from lead engineers at a top tech company.",
    image: "https://picsum.photos/400/200?random=7",
  },
  {
    title: "Mastering React Performance",
    type: "Workshop",
    date: "2025-11-21T13:00:00",
    description:
      "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
    image: "https://picsum.photos/400/200?random=8",
  },
  {
    title: "The Psychology of User Experience (UX)",
    type: "Talk",
    date: "2025-11-21T14:00:00",
    description:
      "Understand the cognitive biases and psychological principles that drive effective UX design.",
    image: "https://picsum.photos/400/200?random=9",
  },
  {
    title: "Panel: The Future of Remote Work in Tech",
    type: "Panel",
    date: "2025-11-21T16:00:00",
    description:
      "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
    image: "https://picsum.photos/400/200?random=10",
  },

  // --- Day 3: Nov 22, 2025 ---
  {
    title: "UI/UX Design Fundamentals for Developers",
    type: "Workshop",
    date: "2025-11-22T09:00:00",
    description:
      "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
    image: "https://picsum.photos/400/200?random=11",
  },
  {
    title: "From Monolith to Serverless",
    type: "Talk",
    date: "2025-11-22T10:00:00",
    description:
      "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
    image: "https://picsum.photos/400/200?random=12",
  },
  {
    title: "State of Web Assembly in 2025",
    type: "Talk",
    date: "2025-11-22T11:30:00",
    description:
      "Discover how WebAssembly is enabling near-native performance for web applications.",
    image: "https://picsum.photos/400/200?random=13",
  },
  {
    title: "Data Visualization with D3.js",
    type: "Workshop",
    date: "2025-11-22T13:30:00",
    description:
      "Learn to create stunning, interactive data visualizations for the web from scratch.",
    image: "https://picsum.photos/400/200?random=14",
  },
  {
    title: "Closing Panel: Ask Me Anything with Speakers",
    type: "Panel",
    date: "2025-11-22T16:00:00",
    description:
      "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
    image: "https://picsum.photos/400/200?random=15",
  },

  // --- Bonus Events ---
  {
    title: "Pre-Conference Hackathon",
    type: "Social",
    date: "2025-11-19T09:00:00",
    description:
      "A 24-hour coding challenge with prizes for the most innovative projects.",
    image: "https://picsum.photos/400/200?random=16",
  },
  {
    title: "API Design Best Practices",
    type: "Talk",
    date: "2025-11-21T15:00:00",
    description:
      "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
    image: "https://picsum.photos/400/200?random=17",
  },
  {
    title: "DevOps Culture and Tooling",
    type: "Talk",
    date: "2025-11-20T15:30:00",
    description:
      "An introduction to the principles of DevOps and the tools that enable CI/CD.",
    image: "https://picsum.photos/400/200?random=18",
  },
  {
    title: "Mobile-First Design in Practice",
    type: "Workshop",
    date: "2025-11-20T13:00:00",
    description:
      "A hands-on session focusing on practical techniques for mobile-first responsive websites.",
    image: "https://picsum.photos/400/200?random=19",
  },
  {
    title: "Closing Ceremony & Awards",
    type: "Social",
    date: "2025-11-22T17:30:00",
    description:
      "Join us as we celebrate the best of the conference and announce the hackathon winners.",
    image: "https://picsum.photos/400/200?random=20",
  },
];

// Application state
let state = {
  events: [],
  filteredEvents: [],
  activeFilter: "all",
  theme: "light",
};

// DOM Elements
const eventContainer = document.getElementById("event-container");
const filterButtons = document.getElementById("filter-buttons");
const themeToggle = document.getElementById("theme-toggle");

// Initialize the application
function init() {
  // Set initial state
  state.events = [...events];
  state.filteredEvents = [...events];

  // Set up event listeners
  setupEventListeners();

  // Initialize theme - Level 3 & 4: Smart Dark Mode with Persistence
  initTheme();

  // Render events
  renderEvents();
}

// Set up event listeners
function setupEventListeners() {
  // Filter buttons - Level 2: Event Filter
  filterButtons.addEventListener("click", handleFilterClick);

  // Theme toggle - Level 3 & 4
  themeToggle.addEventListener("click", toggleTheme);
}

// Initialize theme based on system preference and localStorage - Level 3 & 4
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme) {
    state.theme = savedTheme;
  } else if (systemPrefersDark) {
    state.theme = "dark";
  }

  applyTheme();
}

// Apply current theme to the document
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("theme", state.theme);

  // Update theme toggle button
  const themeIcon = themeToggle.querySelector(".theme-icon");
  themeIcon.textContent = state.theme === "dark" ? "☀️" : "🌙";
}

// Toggle between light and dark themes - Level 3 & 4
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme();
}

// Handle filter button clicks - Level 2: Event Filter
function handleFilterClick(e) {
  if (e.target.classList.contains("filter-btn")) {
    const filter = e.target.dataset.filter;

    // Update active button
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // Apply filter
    applyFilter(filter);
  }
}

// Apply filter to events - Level 2: Event Filter
function applyFilter(filter) {
  state.activeFilter = filter;

  if (filter === "all") {
    state.filteredEvents = [...state.events];
  } else {
    state.filteredEvents = state.events.filter(
      (event) => event.type === filter
    );
  }

  renderEvents();
}

// Render events to the DOM
function renderEvents() {
  eventContainer.innerHTML = "";

  if (state.filteredEvents.length === 0) {
    eventContainer.innerHTML =
      '<p class="no-events">No events found for the selected filter.</p>';
    return;
  }

  state.filteredEvents.forEach((event) => {
    const eventCard = createEventCard(event);
    eventContainer.appendChild(eventCard);
  });
}

// Create an event card element
function createEventCard(event) {
  const card = document.createElement("div");
  card.className = "event-card";

  // Format date
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-image">
        <div class="event-content">
            <span class="event-type">${event.type}</span>
            <h3 class="event-title">${event.title}</h3>
            <div class="event-date">
                <span>📅</span>
                <span>${formattedDate}</span>
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-actions">
                <button class="btn btn-primary add-to-calendar" data-event='${JSON.stringify(
                  event
                ).replace(/'/g, "&apos;")}'>
                    Add to Calendar
                </button>
            </div>
        </div>
    `;

  // Add event listener to calendar button - Level 5: Add to Calendar
  const addToCalendarBtn = card.querySelector(".add-to-calendar");
  addToCalendarBtn.addEventListener("click", () => addToCalendar(event));

  return card;
}

// Add event to calendar - Level 5: Interactive "Add to Calendar"
function addToCalendar(event) {
  const eventDate = new Date(event.date);
  const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000); // Assume 2 hour duration

  // Format dates for calendar
  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  };

  const start = formatDate(eventDate);
  const end = formatDate(endDate);

  // Create calendar event data
  const calendarData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  // Create and trigger download
  const blob = new Blob([calendarData], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.replace(/\s+/g, "_")}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
