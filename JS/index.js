let index = async () => {
    let students = await getStudents();
    let colleges = await getColleges();
    let companies = await getCompanies();
    let jobs = await getJob();

    document.getElementById("students").innerHTML = `
        <div class="overlay">
            <h2>Students</h2>
            <p>Total Students</p>
            <span>${students.length}</span>
        </div>
    `;

    document.getElementById("colleges").innerHTML = `
        <div class="overlay">
            <h2>Colleges</h2>
            <p>Total Colleges</p>
            <span>${colleges.length}</span>
        </div>
    `;

    document.getElementById("companies").innerHTML = `
        <div class="overlay">
            <h2>Companies</h2>
            <p>Recruiting Companies</p>
            <span>${companies.length}</span>
        </div>
    `;

    document.getElementById("jobs").innerHTML = `
        <div class="overlay">
            <h2>Job Roles</h2>
            <p>Available Roles</p>
            <span>${jobs.length}</span>
        </div>
    `;
};

index();
