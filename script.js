function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const userText = input.value;
  chat.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  // Simple AI simulation
  let response = getAIResponse(userText);

  chat.innerHTML += `<p><b>AI:</b> ${response}</p>`;
  input.value = "";
}

function getAIResponse(text) {
  text = text.toLowerCase();

  if (text.includes("experience")) {
    return "I have 14+ years of experience in full-stack development and system architecture.";
  }

  if (text.includes("skills")) {
    return "My core skills include .NET, Azure, Microservices, and AI systems.";
  }

  if (text.includes("ai")) {
    return "I have built AI-powered systems including PDF translation and RAG-based solutions.";
  }

  return "Feel free to ask about my experience, skills, or projects.";
}