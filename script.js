const submitButton = document.getElementById("submit");
const outputList = document.getElementById("materials-list");

submitButton.addEventListener("click", async () => {
  const wingSpan = document.getElementById("wing-span").value;
  const landingGear = document.getElementById("landing-gear").value;

  // Call OpenAI API
  const prompt = `
        Based on the following inputs:
        - Wing span: ${wingSpan}
        - Landing gear: ${landingGear}

        From the knowledge base on model planes, list the required materials and tools.
    `;

    async function askQuestion(question) {
        const response = await fetch("https://karthikvibuthiportfolio.com/portfoliogptagent/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question }),
        });
        const data = await response.json();
        
        return data.answer || data.error;
    }

  const result = await response.json();
  const materials = result.choices[0].text.trim();

  // Display materials
  outputList.innerHTML = materials
    .split("\n")
    .map((item) => `<li>${item}</li>`)
    .join("");
});
