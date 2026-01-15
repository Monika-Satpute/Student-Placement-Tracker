

let companiesContainer = document.getElementById("companies-container");
let allCompanies = [];

// ================= FETCH COMPANIES =================
let callCompaniesFromApi = async () => {
    allCompanies = await getCompanies();
    displayCompanies(allCompanies);
};

callCompaniesFromApi();

// ================= DISPLAY COMPANIES =================
let displayCompanies = (companies) => {
    companiesContainer.innerHTML = "";

    companies.forEach((company, index) => {

        // SAFE FIELD HANDLING
        let companyName = company.name || company.company_name || "N/A";
        let companyId = company.company_id || company.companie_id || "N/A";
        let industry = company.industry || "N/A";
        let location = company.location || company.City || "N/A";

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
