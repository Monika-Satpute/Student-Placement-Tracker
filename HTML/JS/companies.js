console.log("companies.js loaded");

let companiesContainer = document.getElementById("companies-container");
let allCompanies = [];

// ================= FETCH COMPANIES =================
let callCompaniesFromApi = async () => {
    try {
        allCompanies = await getCompanies();
        displayCompanies(allCompanies);
    } catch (err) {
        console.error("Error fetching companies:", err);
    }
};

callCompaniesFromApi();

// ================= DISPLAY COMPANIES =================
let displayCompanies = (companies) => {
    companiesContainer.innerHTML = "";

    companies.forEach((company) => {

        let companyName = company.name || company.company_name || "N/A";
        let companyId = company.company_id || "N/A";
        let industry = company.industry || "N/A";

        let location = company.location
            ? `${company.location.city}, ${company.location.state}`
            : "N/A";

        companiesContainer.innerHTML += `
            <div class="company-card">
                <h3>${companyName}</h3>
                <p><b>ID:</b> ${companyId}</p>
                <p><b>Industry:</b> ${industry}</p>
                <p><b>Location:</b> ${location}</p>
            </div>
        `;
    });
};
