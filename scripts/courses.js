const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 231", name: "Web Frontend Development I", credits: 3, completed: false }
];

const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");

function displayCourses(courseArray) {
    courseList.innerHTML = "";

    courseArray.forEach(course => {
        const div = document.createElement("div");
        div.textContent = `${course.code} – ${course.name} (${course.credits} credits)`;

        if (course.completed) {
            div.style.fontWeight = "600";
        }

        courseList.appendChild(div);
    });

    const credits = courseArray.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${credits}`;
}

displayCourses(courses);
