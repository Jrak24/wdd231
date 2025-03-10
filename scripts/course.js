const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 231", name: "Web Frontend Development I", credits: 3, completed: false },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: true },
    { code: "CSE 340", name: "Web Backend Development I", credits: 3, completed: false }
];

const courseContainer = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");

// Function to display courses
function displayCourses(filter = "all") {
    courseContainer.innerHTML = ""; // Clear existing content

    let filteredCourses = courses.filter(course => 
        filter === "all" || course.code.startsWith(filter)
    );

    let total = 0;

    filteredCourses.forEach(course => {
        let courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed"); // Different style for completed courses
        }

        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
        `;

        total += course.credits;
        courseContainer.appendChild(courseCard);
    });

    totalCredits.textContent = `Total Credits: ${total}`;
}

// Initial load
displayCourses();

// Event Listeners for Filtering
document.querySelector("#all-courses").addEventListener("click", () => displayCourses("all"));
document.querySelector("#wdd-courses").addEventListener("click", () => displayCourses("WDD"));
document.querySelector("#cse-courses").addEventListener("click", () => displayCourses("CSE"));
