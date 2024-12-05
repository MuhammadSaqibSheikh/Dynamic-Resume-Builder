function generateResume() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const objective = document.getElementById("objective").value;
    const skills = document.getElementById("skills").value.split(",");
    const qualifications = document.getElementById("qualifications").value.split(",");
    const experience = document.getElementById("experience").value;
    const projects = document.getElementById("projects").value;


    const file = document.getElementById('profilePic').files[0];
    let imgURL = '';
    if (file) {
        imgURL = URL.createObjectURL(file);}

    const resume = `
        <div class="profile">
            <img src="${imgURL}" alt="Profile Picture" id="uploadedImg">
            <h1>${name}</h1>
            <p class="title">${profession}</p>
        </div>
        <div class="content">
            <section>
                <h2>Career Objective</h2>
                <p>${objective}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
            </section>
            <section>
                <h2>Qualifications</h2>
                <ul>${qualifications.map(qual => `<li>${qual.trim()}</li>`).join("")}</ul>
            </section>
            <section>
                <h2>Experience</h2>
                <p>${experience}</p>
            </section>
            <section>
                <h2>Projects</h2>
                <p>${projects}</p>
            </section>
        </div>
    `;
    document.getElementById("resume").innerHTML = resume;
}



function printResume() {
    const resumeContent = document.getElementById("resume").innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = resumeContent;
    window.print();
    document.body.innerHTML = originalContent;
}
