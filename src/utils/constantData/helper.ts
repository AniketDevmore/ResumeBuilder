// [{"id":"profession","title":"Profession","profession":[{"name":"Jvjhc","profession":"Kgvhf","description":"Bkkvkb"}]},{"id":"socialMedia","title":"Social Media","socialMedia":{"email":"Jvjcjf","phone":" 6 9 9986","city":"Nvmvjchv","linkedIn":"Vn nchcc","skype":"Nvnchchc"}},{"id":"skills","title":"Skills","skills":["Chchc","Hchch"]},{"id":"experience","title":"Experience","experience":[{"position":"Jgfjc","company":"Khkvig","period":"Jgjfcjf","explain":"Kghchc"}]},{"id":"education","title":"Education","education":[{"degree":"Jfhfuff","university":"Jgjcc","period":"Kvkvjg"}]},{"id":"organization","title":"Organization","organization":["Jgjgfjgi"]},{"id":"languages","title":"Languages","languages":[{"language":"Gigigi","proficiency":"Jgigjggig"}]}]

import Profession from "../../screens/Template1/Profession/Profession";

const getDynamicDesign = (data: any) => {
    let newString = '';

    for (let i = 0; i < data.length; i++) {
        console.log('data---------->>', newString)
        if (data[i].id === 'profession' && data[i]['profession'].length !== 0) {
            let professionStr = ''
            for (let j = 0; j < data[i].profession.length; j++) {
                professionStr += `<header>
                <h1>${data[i].profession[j].name}</h1>
                <h2>${data[i].profession[j].profession}</h2>
                <p>${data[i].profession[j].description}</p>
                </header>`
            }
            console.log('professionStr-------_>>', professionStr)
            newString += professionStr;
        }
        if (data[i].id === 'socialMedia' && data[i]['socialMedia'].length !== 0) {
            let socialMediaStr = ''

            socialMediaStr += `<header>
                <div class="contact-info">
                    <p>${data[i].socialMedia.email} | ${data[i].socialMedia.phone} | ${data[i].socialMedia.city} | <a href="#">${data[i].socialMedia.linkedIn}</a> |
                    <a href="#">${data[i].socialMedia.skype}</a></p>
                </div>
            </header>`

            newString += socialMediaStr;
        }
        if (data[i].id === 'skills' && data[i]['skills'].length !== 0) {
            let skillsStr = `<section class="skills">
            <h3>SKILLS</h3>
            <div class="skills-list">`;
            for (let j = 0; j < data[i].skills.length; j++) {
                skillsStr += `<span>${data[i].skills[j]}</span>`
            }
            skillsStr += ` </div>
            </section>`

            newString += skillsStr

        }
        if (data[i].id === 'experience' && data[i]['experience'].length !== 0) {
            let experienceStr = `<section class="work-experience">
            <h3>WORK EXPERIENCE</h3>
            <div class="job">`
            for (let j = 0; j < data[i].experience.length; j++) {
                experienceStr += ` <h4>${data[i].experience[j].position}</h4>
                <p>${data[i].experience[j].company} | ${data[i].experience[j].period}</p>
                <ul>
                    <li>${data[i].experience[j].explain}</li>
                </ul>`
            }

            experienceStr += `</div>
            </section>`

            newString += experienceStr
        }
        if (data[i].id === 'education' && data[i]['education'].length !== 0) {
            let educationStr = `<section class="education">
            <h3>EDUCATION</h3>`
            for (let j = 0; j < data[i].education.length; j++) {
                educationStr += `<h4>${data[i].education[j].degree}</h4>
                <p>${data[i].education[j].university}</p>
                <p>${data[i].education[j].period}</p>`
            }

            educationStr += `</section>`
            newString += educationStr

        }
        if (data[i].id === 'organization' && data[i]['organization'].length !== 0) {
            let organizationStr = `<section class="organizations">
            <h3>ORGANIZATIONS</h3>
            <div class="orgContainer">`;
            for (let j = 0; j < data[i].organization.length; j++) {
                organizationStr += `<p>${data[i].organization[j]}</p>`
            }
            organizationStr += `</div>
            </section>`

            newString += organizationStr
        }
        if (data[i].id === 'languages' && data[i]['languages'].length !== 0) {
            let languagesStr = `<section class="languages">
            <h3>LANGUAGES</h3>
            <div class="languagesContainer">`
            for (let j = 0; j < data[i].languages.length; j++) {
                languagesStr += `
                <div class="langBox">
                    <p class="langText">${data[i].languages[j].language}</p>
                    <p class="langProf">${data[i].languages[j].proficiency}</p>
                </div>`
            }

            languagesStr += `</div>
            </section>`
            newString += languagesStr
        }

    }

    console.log('newString===========>>', newString)
    return newString;
}



`            <header>
<h1>John Doe</h1>
<h2>Business Development Manager</h2>
<p>Professional Business Developer with more than four years of experience in the business development
    processes...</p>
<div class="contact-info">
    <p>john.doe@gmail.com | 202-555-0166 | New York, USA | <a href="#">linkedin.com/in/john.doe</a> |
        @john.doe</p>
</div>
</header>

<section class="skills">
<h3>SKILLS</h3>
<div class="skills-list">
    <span>SEO</span>
    <span>Public Speaking</span>
    <span>Negotiation</span>
    <span>Teamwork</span>
    <span>Decision Making</span>
    <span>Research & Strategy</span>
    <span>Emotional Intelligence</span>
    <span>Outbound Marketing</span>
    <span>Email Marketing</span>
    <span>Google Analytics</span>
    <span>Sales & Marketing</span>
</div>
</section>

<section class="work-experience">
<h3>WORK EXPERIENCE</h3>
<div class="job">
    <h4>Business Development Manager</h4>
    <p>AirState Solutions | 09/2014 – 06/2017 | New York, USA</p>
    <ul>
        <li>Successfully managed $2-3 million budget projects and achieved scheduled goals.</li>
        <li>Developed and implemented new marketing and sales plans for the next 5 years.</li>
        <li>Improved customer satisfaction from 81% to 95%.</li>
        <li>Implemented a new loyalty program that helped grow a niche market.</li>
    </ul>
</div>
</section>

<section class="education">
<h3>EDUCATION</h3>
<h4>MSc in Economics and Business Administration</h4>
<p>The University of Chicago</p>
<p>09/2008 – 06/2010</p>
</section>

<section class="organizations">
<h3>ORGANIZATIONS</h3>
<div class="orgContainer">
    <p>American Management Association (2015 – Present)</p>
    <p>Association of Private Enterprise Education (2014 – Present)</p>
    <p>eBusiness Association (eBA) (2013 – Present)</p>
</div>
</section>

<section class="languages">
<h3>LANGUAGES</h3>
<div class="languagesContainer">
    <div class="langBox">
        <p class="langText">English</p>
        <p class="langProf">Native or Bilingual Proficiency</p>
    </div>
</div>
</section>`


export const createCustomPdf = (globalState: any) => {
    console.log('----------->>', JSON.stringify(globalState))
    let newStr = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        <link rel="stylesheet" href="styles.css">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
    
            .container {
                width: 80%;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                margin: 0;
                font-size: 36px;
                color: #3366cc;
            }
    
            h3 {
                color: #3366cc;
            }
    
            h2 {
                margin: 5px 0 15px;
                font-size: 22px;
                color: #666;
            }
    
            .contact-info {
                font-size: 14px;
                color: #333;
                border-bottom: 2px solid #ddd;
                border-top: 2px solid #ddd;
            }
    
            .contact-info a {
                color: #3366cc;
                text-decoration: none;
            }
    
            .skills,
            .work-experience,
            .education,
            .organizations,
            .languages {
                margin-top: 30px;
            }
    
            .skills h3,
            .work-experience h3,
            .education h3,
            .organizations h3,
            .languages h3 {
                font-size: 20px;
                margin-bottom: 10px;
                /* border-bottom: 2px solid #3366cc; */
                padding-bottom: 5px;
            }
    
            .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 10px;
            }
    
            .skills-list span {
                background-color: #3366cc;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
            }
    
            .work-experience .job {
                margin-bottom: 20px;
            }
    
            .work-experience .job h4 {
                margin: 0;
                font-size: 18px;
            }
    
            .work-experience .job p {
                margin: 5px 0 10px;
                font-style: italic;
                color: #666;
            }
    
            .work-experience ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
    
            .work-experience ul li {
                margin-bottom: 5px;
            }
    
            .education p,
            .education h4,
            .organizations p,
            .languages p {
                margin: 5px 0;
            }
    
            .orgContainer {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
            }
    
            .orgContainer p {
                width: 50%;
            }
    
            .languagesContainer {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
            }
    
            .langText {
                font-weight: 700;
            }
    
            .langBox {
                width: 50%;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            ${getDynamicDesign(globalState)}
        </div>
    </body>
    
    </html>`

    return newStr;
}