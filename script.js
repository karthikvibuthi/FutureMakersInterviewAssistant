const submitButton = document.getElementById("submit");
const outputList = document.getElementById("output");

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

    response = await fetch("https://karthikvibuthiportfolio.com/portfoliogptagent/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: 'What is your highest education qualificaton' }),
        });

  const result = await response.json();


  // Display Output
  outputList.innerHTML = result
});
