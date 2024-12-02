document.getElementById('generateResume').addEventListener('click', function() {
    // Gather form inputs
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const location = document.getElementById('location').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split('\n').filter(Boolean); // Split by newline for bullet points
    const languages = document.getElementById('Languages').value.split('\n').filter(Boolean); // Split by newline for bullet points
    const certifications = document.getElementById('certifications').value.split('\n').filter(Boolean); // Split by newline for bullet points

    // Function to generate bullet points
    const generateList = (items) => {
        return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    };

    // Create the resume format with lines after each section
    const resume = `
<b style="font-size: 18px;">${name}</b><br>
${location} | ${phone} | ${email} <br>
<b><u>LinkedIn:</u></b> <a href="${linkedin}" target="_blank">${linkedin}</a><br>

<hr style="border: 1px solid black; margin: 10px 0;">

<b style="font-size: 16px;"><u>Professional Summary:</u></b><br>
${summary}<br>

<hr style="border: 1px solid black; margin: 10px 0;">

<b style="font-size: 16px;"><u>Professional Experience:</u></b><br>
${experience}<br>

<hr style="border: 1px solid black; margin: 10px 0;">

<b style="font-size: 16px;"><u>Education:</u></b><br>
${education}<br>

<hr style="border: 1px solid black; margin: 10px 0;">

<b style="font-size: 16px;"><u>Technical Skills:</u></b><br>
${generateList(skills)}

<hr style="border: 1px solid black; margin: 10px 0;">

<b style="font-size: 16px;"><u>Languages:</u></b><br>
${generateList(languages)}

<hr style="border: 1px solid black; margin: 10px 0;">

<b style="font-size: 16px;"><u>Certifications:</u></b><br>
${generateList(certifications)}
    `;

    // Use innerHTML to render the formatted resume
    document.getElementById('output').innerHTML = resume;
});

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    html2canvas(document.getElementById("output")).then(function(canvas) {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        doc.save('resume.pdf');
    }).catch(function(error) {
        console.error("Error generating PDF:", error);
    });
}

function downloadImage() {
    html2canvas(document.getElementById("output")).then(function(canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'resume.png';
        link.click();
    }).catch(function(error) {
        console.error("Error generating image:", error);
    });
}

function downloadText() {
    const resumeText = document.getElementById('output').innerText; // Text content of the resume
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resume.txt';
    link.click();
}

function downloadResume() {
    const format = document.getElementById('fileFormat').value;
    if (format === 'pdf') {
        downloadPDF();
    } else if (format === 'image') {
        downloadImage();
    } else if (format === 'text') {
        downloadText();
    }
}

function back() {
    window.location.href = 'website.html'; // Back button functionality
}
