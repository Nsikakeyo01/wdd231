const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false }
];

const courseContainer = document.getElementById("courses");
const totalCreditsEl = document.getElementById("totalCredits");
const buttons = document.querySelectorAll(".filters button");

function displayCourses(list) {
    courseContainer.innerHTML = "";

    list.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course");
        if (course.completed) div.classList.add("completed");

        div.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;
        courseContainer.appendChild(div);
    });

    const total = list.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsEl.textContent = total;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        if (filter === "wdd") {
            displayCourses(courses.filter(c => c.code.startsWith("WDD")));
        } else if (filter === "cse") {
            displayCourses(courses.filter(c => c.code.startsWith("CSE")));
        } else {
            displayCourses(courses);
        }
    });
});

displayCourses(courses);
