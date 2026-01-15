let jobsContainer = document.getElementById("jobs-container");
let allJobs = [];

// ================= FETCH JOB ROLES =================
let callJobsFromApi = async () => {
    try {
        allJobs = await getJob(); // assuming getJob() returns array of job objects
        displayJobs(allJobs);
    } catch (error) {
        console.error("Error fetching job roles:", error);
        jobsContainer.innerHTML = "<p>Failed to load job roles.</p>";
    }
};

// ================= DISPLAY JOB ROLES =================
let displayJobs = (jobs) => {
    jobsContainer.innerHTML = "";

    if (jobs.length === 0) {
        jobsContainer.innerHTML = "<p>No job roles available.</p>";
        return;
    }

    jobs.forEach((job) => {
        let roleName = job.title || "N/A";
        let jobId = job.role_id || "N/A";
        let company = job.company_name || job.company || "N/A";
        let packageOffered = job.package || job.salary || "N/A";
        let location = job.location || job.city || "N/A";

        jobsContainer.innerHTML += `
            <div class="job-card">
                <h3>${roleName}</h3>
                <p><b>Job ID:</b> ${jobId}</p>
                
            </div>
        `;
    });
};

// ================= CALL API =================
callJobsFromApi();
