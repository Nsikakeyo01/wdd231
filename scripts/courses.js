const courses = [
    { code: "WDD 130", credits: 3, completed: true },
    { code: "WDD 131", credits: 3, completed: true },
    { code: "WDD 231", credits: 3, completed: false },
    { code: "CSE 121", credits: 3, completed: true },
    { code: "CSE 212", credits: 4, completed: false }
];

const courseList = document.getElementById("courseList");
const totalCredits = document.getElementById("totalCredits");
const filterButtons = document.querySelectorAll(".filters button");

function displayCourses(filter = "All") {
    courseList.innerHTML = "";

    const filteredCourses =
        filter === "All"
            ? courses
            : courses.filter(course => course.code.startsWith(filter));

    filteredCourses.forEach(course => {
        const div = document.createElement("div");
        div.textContent = course.code;
        div.className = course.completed ? "course completed" : "course";
        courseList.appendChild(div);
    });

    totalCredits.textContent = filteredCourses.reduce(
        (sum, course) => sum + course.credits,
        0
    );
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        displayCourses(button.dataset.filter);
    });
});

displayCourses();
