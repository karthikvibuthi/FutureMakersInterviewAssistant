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

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer YOUR_API_KEY`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    }),
  });

  const result = await response.json();
  const materials = result.choices[0].text.trim();

  // Display materials
  outputList.innerHTML = materials
    .split("\n")
    .map((item) => `<li>${item}</li>`)
    .join("");
});
