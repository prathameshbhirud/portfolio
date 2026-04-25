const knowledgeBase = `
Name: Prathamesh Bhirud
Role: Principal Engineer / Tech Lead

Experience:
- 14+ years in full-stack development
- Led 30+ engineers
- Expertise in .NET, Angular, Azure, Microservices

Key Achievements:
- Reduced translation cost by 68%
- Improved reporting performance by 55%

Skills:
- .NET, C#, Angular, Azure
- Microservices, CQRS, Event-driven
- OpenAI, RAG systems
`;

async function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const userText = input.value;
  chat.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  const response = getAIResponse(userText);

  chat.innerHTML += `<p><b>AI:</b> ${response}</p>`;
  input.value = "";
}

function getAIResponse(text) {
  text = text.toLowerCase();

  if (text.includes("experience")) {
    return "I have 14+ years of experience leading full-stack and distributed systems.";
  }

  if (text.includes("skills")) {
    return "My expertise includes .NET, Azure, Microservices, and AI systems.";
  }

  if (text.includes("project")) {
    return "One of my key projects is an AI-powered PDF translation system reducing costs by 68%.";
  }

  if (text.includes("leadership")) {
    return "I have led teams of 30+ engineers and worked closely with architects and stakeholders.";
  }

  return "Ask me about my experience, skills, leadership, or projects.";
}