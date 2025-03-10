const courses = [
    { name: "WDD 130: Web Fundamentals", category: "WDD", credits: 3, completed: true },
    { name: "WDD 231: Web Frontend Development", category: "WDD", credits: 3, completed: false },
    { name: "CSE 210: Programming with Classes", category: "CSE", credits: 3, completed: true },
    { name: "CSE 222: Data Structures", category: "CSE", credits: 3, completed: false }
];

function displayCourses(filter) {
    const courseContainer = document.querySelector("#course-list");
    courseContainer.innerHTML = "";

    let filteredCourses = courses;
    if (filter !== "All") {
        filteredCourses = courses.filter(course => course.category === filter);
    }

    let totalCredits = 0;
    filteredCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-card");
        if (course.completed) courseItem.classList.add("completed");

        courseItem.innerHTML = `<h3>${course.name}</h3><p>Credits: ${course.credits}</p>`;
        totalCredits += course.credits;
        courseContainer.appendChild(courseItem);
    });

    document.querySelector("#total-credits").textContent = `Total Credits: ${totalCredits}`;
}

// Event Listeners for buttons
document.querySelector("#all-courses").addEventListener("click", () => displayCourses("All"));
document.querySelector("#wdd-courses").addEventListener("click", () => displayCourses("WDD"));
document.querySelector("#cse-courses").addEventListener("click", () => displayCourses("CSE"));

// Load all courses on page load
document.addEventListener("DOMContentLoaded", () => displayCourses("All"));
