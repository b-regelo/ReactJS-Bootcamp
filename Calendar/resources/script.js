
const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get first and last day of the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Update month text
    monthYear.textContent = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    // Clear previous month
    calendarDays.innerHTML = "";

    // Add empty days for first week
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty");
        calendarDays.appendChild(emptyDiv);
    }

    // Create the days
    for (let day = 1; day <= lastDate; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        calendarDays.appendChild(dayDiv);
    }
}

function lastMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
};

renderCalendar();