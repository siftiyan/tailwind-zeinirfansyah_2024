// Fetch data from JSON file biar ga perlu nulis tag tiap nambah data
async function fetchData() {
  try {
    // Replace 'data.json' with the path to your JSON file or use a variable array
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// render tampilannya

async function renderContentCertificate(containerId, dataKey) {
  const container = document.getElementById(containerId);
  const data = await fetchData();

  if (container && data && data[dataKey]) {
    data[dataKey].forEach((item) => {
      const card = document.createElement("div");
      card.setAttribute("data-aos", "flip-up");
      card.setAttribute("data-aos-duration", "500");
      card.setAttribute("data-aos-delay", "100");
      card.setAttribute("data-aos-anchor-placement", "bottom-bottom");
      card.className =
      "card hover:rounded-xl hover:-rotate-[2deg] bg-white paper-drop outline-dashed outline-2 outline-offset-[6px] outline-[#1b606f86] lg:px-4 ease-in duration-500";

      const desc = document.createElement("div");
      desc.className = "desc flex flex-col";

      const title = document.createElement("h1");
      title.className = "text-xl font-bold text-start";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "text-xl";
      subtitle.textContent = item.subtitle;

      const paragraph = document.createElement("p");
      paragraph.className = "text-start";
      paragraph.textContent = item.description;

      const tech = document.createElement("p");

      if (item.tech !== undefined && item.tech.trim() !== "") {
        tech.className = "text-start";
        tech.textContent = "Tech stack: " + item.tech;
      }

      const url = document.createElement("a");
      url.target = "_blank";

      if (item.url !== undefined && item.url.trim() !== "") {
        url.href = item.url;
        url.className =
          "transition-all duration-500 px-4 text-[#1b5f6f] hover:text-[#0b90a0] hover:bg-transparent  hover:rounded-xl w-full mt-3";
      } else {
        url.href = "";
      }

      desc.appendChild(title);
      desc.appendChild(subtitle);
      desc.appendChild(paragraph);
      desc.appendChild(tech);
      card.appendChild(desc);
      desc.appendChild(url);
      container.appendChild(url);
      url.appendChild(card);
    });
  }
}

async function renderContentExperiencesEducations(containerId, dataKey) {
  const container = document.getElementById(containerId);
  const data = await fetchData();

  if (container && data && data[dataKey]) {
    data[dataKey].forEach((item) => {
      const div = document.createElement("div");
      // div.className = 'flex flex-col gap-1 my-3 pl-3 border-l-4 border-[#83B5B4]';
      div.className =
        "bg-[#0b90a0] px-4 mx-2 my-3 border-l-4 border-[#D57F5D] transition-all duration-500";
      div.setAttribute("data-aos", "zoom-in");
      div.setAttribute("data-aos-duration", "1000");
      div.setAttribute("data-aos-delay", "200");
      div.setAttribute("data-aos-anchor-placement", "bottom-bottom");

      const title = document.createElement("h1");
      title.className = "text-2xl font-bold";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "text-xl";
      subtitle.textContent = item.subtitle;

      const paragraph = document.createElement("p");
      paragraph.className = "text-l";
      paragraph.textContent = item.description;

      div.appendChild(title);
      div.appendChild(subtitle);
      div.appendChild(paragraph);
      container.appendChild(div);
    });
  }
}

// skills
async function renderContentSkills(containerId, dataKey) {
  const container = document.getElementById(containerId);
  const data = await fetchData();

  if (container && data && data[dataKey]) {
    data[dataKey].forEach((item) => {
      const card = document.createElement("div");
      card.setAttribute("data-aos", "flip-up");
      card.setAttribute("data-aos-duration", "500");
      card.setAttribute("data-aos-delay", "100");
      card.setAttribute("data-aos-anchor-placement", "bottom-bottom");
      card.className =
      " my-2 hover:rounded-xl lg:px-4 ease-in duration-500";

      const desc = document.createElement("div");
      desc.className = "desc flex flex-col";

      const title = document.createElement("h1");
      title.className = "text-xl font-bold text-start";
      title.textContent = item.title;

      const subtitle = document.createElement("h2");
      subtitle.className = "text-xl";
      subtitle.textContent = item.subtitle;

      const paragraph = document.createElement("p");
      paragraph.className = "text-start";
      paragraph.textContent = item.description;

      
      desc.appendChild(title);
      desc.appendChild(subtitle);
      desc.appendChild(paragraph);
      card.appendChild(desc);
      container.appendChild(card);
    });
  }
}

window.onload = function () {
  renderContentSkills("skills-list", "skills");
  renderContentSkills("softskills-list", "softskills");
  renderContentExperiencesEducations("experiences-list", "experiences");
  renderContentExperiencesEducations("educations-list", "educations");
  renderContentCertificate("certificates-list", "certificates");
  renderContentCertificate("projects-list", "projects");
};
