



// let studentsContainer = document.getElementById("students-container");
// let allStudents;

// // API call
// let callStudentsFromApi = async () => {
//     allStudents = await getStudents();
//     displayStudents(allStudents);
// };
// callStudentsFromApi();

// // display function
// // let displayStudents = (students) => {
// //     studentsContainer.innerHTML = students.map((ele) => `
// //         <div id="student-card">
// //             <img src="${ele.personal_info.profile_image}">

// //             <h4>Name: ${ele.personal_info.full_name}</h4>
// //             <h4>CollegeId: ${ele.academic_info.college_id}</h4>
// //             <h5>Placement Status: ${ele.placement_status}</h5>
// //         </div>
// //     `).join("");
// // };


// let displayStudents = (students) => {
//     studentsContainer.innerHTML = students.map((ele) => {

//         let profileHTML = "";

//         if (ele.personal_info.profile_image) {
//             // show image if uploaded
//             profileHTML = `<img src="${ele.personal_info.profile_image}" />`;
//         } else {
//             // show initials if image not uploaded
//             profileHTML = `
//                 <div class="profile-initials">
//                     ${ele.personal_info.profile_initials}
//                 </div>
//             `;
//         }

//         return `
//             <div id="student-card">
//                 ${profileHTML}
//                 <h4>Name: ${ele.personal_info.full_name}</h4>
//                 <h4>CollegeId: ${ele.academic_info.college_id}</h4>
//                 <h5>Placement Status: ${ele.placement_status}</h5>
//             </div>
//         `;
//     }).join("");
// };


// // FILTER FUNCTIONS
// let filterPlacedStudents = (students) => {
//     return students.filter(s =>
//         s.placement_status
//             .toLowerCase()
//             .includes("placed") &&
//         !s.placement_status
//             .toLowerCase()
//             .includes("not")
//     );
// };

// let filterUnplacedStudents = (students) => {
//     return students.filter(s =>
//         s.placement_status
//             .toLowerCase()
//             .includes("not")
//     );
// };




// // BUTTON EVENTS
// let placedStudentsBtn = document.getElementById("placedBtn");
// placedStudentsBtn.addEventListener("click", () => {
//     displayStudents(filterPlacedStudents(allStudents));
// });

// let unplacedStudentsBtn = document.getElementById("notPlacedBtn");
// unplacedStudentsBtn.addEventListener("click", () => {
//     displayStudents(filterUnplacedStudents(allStudents));
// });

// let addStudentBtn = document.getElementById("addStudent");

// addStudentBtn.addEventListener("click", () => {
//     window.location.href = "../HTML/addStudent.html";
// });




let studentsContainer = document.getElementById("students-container");
let allStudents = [];

// ================= API CALL =================
let callStudentsFromApi = async () => {
    allStudents = await getStudents();
    displayStudents(allStudents);
};
callStudentsFromApi();

// ================= DISPLAY FUNCTION =================
let displayStudents = (students) => {
    studentsContainer.innerHTML = "";

    students.forEach((ele) => {
        let profileHTML = "";

        if (ele.personal_info.profile_image) {
            profileHTML = `<img src="${ele.personal_info.profile_image}" />`;
        } else {
            profileHTML = `
                <div class="profile-initials">
                    ${ele.personal_info.profile_initials}
                </div>
            `;
        }

        studentsContainer.innerHTML += `
    <div id="student-card">
        ${profileHTML}
        <h4>Name: ${ele.personal_info.full_name}</h4>
        <h4>CollegeId: ${ele.academic_info.college_id}</h4>
        <h5>Placement Status: ${ele.placement_status}</h5>

        <div class="card-actions">
            <button class="edit-btn" onclick ="editStudent('${ele.student_id}')">Edit Info</button>
            <button class="delete-btn" onclick="deleteStudent('${ele.student_id}')">
                Delete
            </button>
        </div>
    </div>
`;

    });
};


let deleteStudent = async (id) => {
    let confirmDelete = confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    await fetch(`https://placementstracker-4.onrender.com/api/students${id}`, {
        method: "DELETE"
    });

    alert("Student deleted successfully");
    callStudentsFromApi(); // refresh list
};



let editStudent=(id)=>{
    window.location.href=`editStudent.html?id=${id}`;
}


// ================= FILTER FUNCTIONS (FIXED) =================
let filterPlacedStudents = (students) => {
    return students.filter(s =>
        s.placement_status &&
        s.placement_status.trim().toLowerCase() === "placed"
    );
};

let filterUnplacedStudents = (students) => {
    return students.filter(s =>
        s.placement_status &&
        s.placement_status.trim().toLowerCase() === "not placed"
    );
};

// ================= BUTTON EVENTS =================
let placedStudentsBtn = document.getElementById("placedBtn");
placedStudentsBtn.addEventListener("click", () => {
    let placedStudents = filterPlacedStudents(allStudents);
    displayStudents(placedStudents);
});

let unplacedStudentsBtn = document.getElementById("notPlacedBtn");
unplacedStudentsBtn.addEventListener("click", () => {
    let unplacedStudents = filterUnplacedStudents(allStudents);
    displayStudents(unplacedStudents);
});

let addStudentBtn = document.getElementById("addStudent");
addStudentBtn.addEventListener("click", () => {
    window.location.href = "addStudent.html";
});















