let urlId=new URLSearchParams(window.location.search);
let id=urlId.get("id");

let loadStudent=async ()=>{
    let data=await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`);
    let student= await data.json();
    //console.log(student.personal_info.full_name);
    studentName.value=student.personal_info.full_name;
    studentGender.value=student.personal_info.gender;
    dob.value=student.personal_info.date_of_birth;
    //profileimg.value=student.personal_info.profile_image;
    collegeId.value=student.academic_info.college_id;
    backlogs.value=student.academic_info.backlogs;
    department.value=student.academic_info.department;
    degree.value=student.academic_info.degree;
    graduation.value=student.academic_info.graduation_year;
    cgpa.value=student.academic_info.cgpa;
    
    programming.value=student.skills.programming.join(",");
    database.value=student.skills.databases.join(",");
    tools.value=student.skills.tools.join(",");
    placementStatus.value=student.placement_status;


};

let studentForm =document.getElementById("studentForm");
// studentForm.addEventListener("submit", async(e)=>{
    studentForm.addEventListener("submit", function(e){
    e.preventDefault();
    //console.log("hello");
    
    let profileimg = document.getElementById("profileimg"); //file input
    // let imageValue = profileimg.files.length > 0
    //     ? URL.createObjectURL(profileimg.files[0])
    //     : null;
    
    if (profileimg.files.length > 0) {
        // IMAGE UPLOADED
        const reader = new FileReader();
        reader.onload = function () {
            saveStudent(reader.result);
        };
        reader.readAsDataURL(profileimg.files[0]);
    } else {
        // NO IMAGE
        saveStudent(null);
    }
});


    let getInitials = (name) => {
    let parts = name.trim().split(" ");
    
    if (parts.length === 1) {
        return parts[0][0].toUpperCase();
    } else {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
};



    function saveStudent(imageValue) {
    let student = {
        personal_info: {
            full_name: studentName.value,
            gender: studentGender.value,
            date_of_birth: dob.value,
            profile_image: imageValue,
            profile_initials: imageValue ? null : getInitials(studentName.value)
        },
        academic_info: {
            college_id: collegeId.value,
            department: department.value,
            degree: degree.value,
            graduation_year: graduation.value,
            cgpa: cgpa.value,
            backlogs: backlogs.value
        },
        skills: {
            programming: programming.value.split(","),
            databases: database.value.split(","),
            tools: tools.value.split(",")
        },
        placement_status: placementStatus.value
    };

    fetch(`"https://placementstracker-4.onrender.com/api/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    }).then(() => {
        alert("Student Updated successfully");
        window.location.href = "./students.html";
    });
}

loadStudent();
 