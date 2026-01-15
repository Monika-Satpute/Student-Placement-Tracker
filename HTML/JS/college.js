console.log("college.js loaded");

let collegesContainer = document.getElementById("colleges-container");
let allColleges = [];

// ================= FETCH COLLEGES =================
let callCollegesFromApi = async () => {
    allColleges = await getColleges();
    displayColleges(allColleges);
};
callCollegesFromApi();

// ================= DISPLAY COLLEGES =================
let displayColleges = (colleges) => {
    collegesContainer.innerHTML = "";

    colleges.forEach((college) => {
        collegesContainer.innerHTML += `
            <div class="college-card">
                <h3 class="college-name">${college.name}</h3>
                <p class="college-info"><b>ID:</b> ${college.college_id}</p>
                <p class="college-info"><b>Type:</b> ${college.type}</p>
                <p class="college-info"><b>Affiliated:</b> ${college.affiliated_to}</p>
                <p class="college-info">
                    <b>Location:</b> ${college.location.city}, ${college.location.state}
                </p>
                <p class="college-info">
                    <b>Departments:</b> ${Array.isArray(college.departments) ? college.departments.join(", ") : "N/A"}

                </p>
                <p class="college-info"><b>Students:</b> ${college.total_students}</p>
                <p class="college-info"><b>Established:</b> ${college.established_year}</p>
            </div>
        `;
    });
};
