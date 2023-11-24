(function () {
  // document.head.insertAdjacentHTML(
  //   "beforeend",
  //   '<link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css" rel="stylesheet">'
  // );

  // Inject the CSS
  const style = document.createElement("style");
  style.innerHTML = `
  #chat-bubble{
    width: 4rem; /* equivalent to w-16 in Tailwind CSS */
    height: 4rem; /* equivalent to h-16 in Tailwind CSS */
    background-color: #f5f800; /* equivalent to bg-gray-800 in Tailwind CSS */
    border-radius: 50%; /* equivalent to rounded-full in Tailwind CSS */
    display: flex; /* equivalent to flex in Tailwind CSS */
    align-items: center; /* equivalent to items-center in Tailwind CSS */
    justify-content: center; /* equivalent to justify-center in Tailwind CSS */
    cursor: pointer; /* equivalent to cursor-pointer in Tailwind CSS */
    font-size: 1.875rem; /* equivalent to text-3xl in Tailwind CSS */
    color: #fff; /* Set text color */
  }
  #chat-bubble:hover{
    background-color: #f5f80080;
  }
  pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
  .hidden {
    display: none !important;
  }
  #chat-widget-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    flex-direction: column;
    z-index: 1000000000000000000000;
  }
  #chat-popup {
    position: absolute;
    bottom: 5rem; /* equivalent to bottom-20 in Tailwind CSS */
    right: 0;
    width: 24rem; /* equivalent to w-96 in Tailwind CSS */
    background-color: #fff; /* equivalent to bg-white in Tailwind CSS */
    border-radius: 0.375rem; /* equivalent to rounded-md in Tailwind CSS */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* equivalent to shadow-md in Tailwind CSS */
    display: flex; /* equivalent to flex in Tailwind CSS */
    flex-direction: column; /* equivalent to flex-col in Tailwind CSS */
    transition: all 0.3s ease; /* equivalent to transition-all in Tailwind CSS */
    font-size: 0.875rem; /* equivalent to text-sm in Tailwind CSS */
    height: 70vh;
    max-height: 70vh;
    transition: all 0.3s;
    overflow: hidden;
    z-index: 999999999999999; 
  }
  #chat-popup:hover{
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
#chat-header{
  display: flex; /* equivalent to flex in Tailwind CSS */
    justify-content: flex-end; /* equivalent to justify-between in Tailwind CSS */
    align-items: center; /* equivalent to items-center in Tailwind CSS */
    padding: 0.5rem; /* equivalent to p-4 in Tailwind CSS */
    background-color: #f5f800; /* equivalent to bg-gray-800 in Tailwind CSS */
    color: #fff; /* equivalent to text-white in Tailwind CSS */
    border-top-left-radius: 0.375rem; /* equivalent to rounded-t-md in Tailwind CSS */
    border-top-right-radius: 0.375rem;
}
  #chat-input:disabled {
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    #chat-popup {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
    }
    #chat-input{
      max-width:16rem !important;
    }
    .custom1{
      display: flex; /* equivalent to flex in Tailwind CSS */
      gap: 0rem; /* equivalent to space-x-4 in Tailwind CSS */
      align-items: center; /* equivalent to items-center in Tailwind CSS */
    }
  }
  #chat-messages{
    flex: 1; /* equivalent to flex-1 in Tailwind CSS */
    padding: 1rem; /* equivalent to p-4 in Tailwind CSS */
    overflow-y: auto;
  }

  #chat-input-container{
    padding: 1rem; /* equivalent to p-4 in Tailwind CSS */
    border-top: 1px solid #e2e8f0; /
  }
  .custom1{
    display: flex; /* equivalent to flex in Tailwind CSS */
    gap: 1rem; /* equivalent to space-x-4 in Tailwind CSS */
    align-items: center; /* equivalent to items-center in Tailwind CSS */
  }
  #chat-input{
    flex: 1; /* equivalent to flex-1 in Tailwind CSS */
    border: 1px solid #e2e8f0; /* equivalent to border border-gray-300 in Tailwind CSS */
    border-radius: 0.375rem; /* equivalent to rounded-md in Tailwind CSS */
    padding: 0.8rem; /* equivalent to px-4 py-2 in Tailwind CSS */
    outline: none; /* equivalent to outline-none in Tailwind CSS */
    width: 75% !important; /* equivalent to w-3/4 in Tailwind CSS */
  
  }
  #chat-submit{
    background-color: #f5f800; /* equivalent to bg-gray-800 in Tailwind CSS */
    color: #fff; /* equivalent to text-white in Tailwind CSS */
    border-radius: 0.375rem; /* equivalent to rounded-md in Tailwind CSS */
    padding: 0.3rem 0.6rem; /* equivalent to px-4 py-2 in Tailwind CSS */
    cursor: pointer; /* equivalent to cursor-pointer in Tailwind CSS */
    border:none !important;
  }
  .custom-icon1{
    width: 2.5rem; /* equivalent to w-10 in Tailwind CSS */
    height: 2.5rem; /* equivalent to h-10 in Tailwind CSS */
    color: #fff; /* equivalent to text-white in Tailwind CSS */
  }
  .custom-icon2{
    height: 1.5rem; /* equivalent to h-6 in Tailwind CSS */
    width: 1.5rem; /* equivalent to w-6 in Tailwind CSS */
  }
  #close-popup{
    background-color: transparent; /* equivalent to bg-transparent in Tailwind CSS */
    border: none; /* equivalent to border-none in Tailwind CSS */
    color: #fff; /* equivalent to text-white in Tailwind CSS */
    cursor: pointer; /* equivalent to cursor-pointer in Tailwind CSS */
  }
  .chatbot-message-parent{
    display:flex;
    margin-bottom:0.5rem;
  }
  .user-message-parent{
    display:flex;
    justify-content:flex-end;
    margin-bottom:0.5rem;
  }
  .user-message{
    background-color: #2d2d2d; /* equivalent to bg-gray-800 in Tailwind CSS */
    color: #fff; /* equivalent to text-white in Tailwind CSS */
    border-radius: 0.5rem; /* equivalent to rounded-lg in Tailwind CSS */
    padding: 0.5rem 1rem; /* equivalent to py-2 px-4 in Tailwind CSS */
    max-width: 70%; /* equivalent to max-w-[70%] in Tailwind CSS */
  }
  .chatbot-message{
    background-color: #e2e8f0; /* equivalent to bg-gray-200 in Tailwind CSS */
    color: #000; /* equivalent to text-black in Tailwind CSS */
    border-radius: 0.5rem; /* equivalent to rounded-lg in Tailwind CSS */
    padding: 0.5rem 1rem; /* equivalent to py-2 px-4 in Tailwind CSS */
    max-width: 70%; /* equivalent to max-w-[70%] in Tailwind CSS */
  }
  @keyframes floatAnimation {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

.floating-dots {
    animation: floatAnimation 1s infinite;
}

  `;

  document.head.appendChild(style);

  // Create chat widget container
  const chatWidgetContainer = document.createElement("div");
  chatWidgetContainer.id = "chat-widget-container";
  document.body.appendChild(chatWidgetContainer);

  // Inject the HTML
  chatWidgetContainer.innerHTML = `
    <div id="chat-bubble" class="">
      <svg xmlns="http://www.w3.org/2000/svg" class="custom-icon1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
    <div id="chat-popup" class="hidden">
      <div id="chat-header" class="">
        <button id="close-popup" class="">
          <svg xmlns="http://www.w3.org/2000/svg" class="custom-icon2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div id="chat-messages" class="flex-1 p-4 overflow-y-auto"></div>
      <div id="chat-input-container" class="p-4 border-t border-gray-200">
        <div class="custom1">
          <input type="text" id="chat-input" class="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none w-3/4" placeholder="Type your message...">
          <button id="chat-submit">
          <svg xmlns="http://www.w3.org/2000/svg" class="custom-icon2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      
      

      </button>
        </div>
      </div>
    </div>
  `;

  // Add event listeners
  const chatInput = document.getElementById("chat-input");
  const chatSubmit = document.getElementById("chat-submit");
  const chatMessages = document.getElementById("chat-messages");
  const chatBubble = document.getElementById("chat-bubble");
  const chatPopup = document.getElementById("chat-popup");
  const closePopup = document.getElementById("close-popup");

  // Initialize chat with a default message
  chatInput.focus();
  reply("Ciao, come posso aiutarti oggi?");

  chatSubmit.addEventListener("click", function () {
    const message = chatInput.value.trim();
    if (!message) return;

    // Disable input and button
    chatInput.disabled = true;
    chatSubmit.disabled = true;

    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = "";

    onUserRequest(message);
  });

  chatInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      chatSubmit.click();
    }
  });

  chatBubble.addEventListener("click", function () {
    togglePopup();
  });

  closePopup.addEventListener("click", function () {
    togglePopup();
  });

  function togglePopup() {
    const chatPopup = document.getElementById("chat-popup");
    chatPopup.classList.toggle("hidden");
    if (!chatPopup.classList.contains("hidden")) {
      document.getElementById("chat-input").focus();
    }
  }

  async function onUserRequest(message) {
    // Handle user request here
    console.log("User request:", message);

    // Display user message
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "user-message-parent";
    userMessageElement.innerHTML = `
        <div class="user-message">
            ${message}
        </div>
    `;
    chatMessages.appendChild(userMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Display floating animation for three dots
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "chatbot-message-parent";
    dotsContainer.innerHTML = `
        <div class="chatbot-message">
            <pre class="floating-dots">...</pre>
        </div>
    `;
    chatMessages.appendChild(dotsContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    chatInput.value = "";

    const response = await fetch(
        "https://web-production-a38e1.up.railway.app/https://api-production-8f68.up.railway.app/chat",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message,
            }),
        }
    );

    chatMessages.removeChild(dotsContainer);

    const result = await response.json();
    console.log(result);

    const cleanedMessage = result.response.replace(
        /\&#8203;``&#8203;``【oaicite:0】``&#8203;``&#8203;]*\】|\[[^\]]*\]/g,
        ""
    );
    console.log(cleanedMessage);

    // Reply to the user
    setTimeout(function () {
        reply(cleanedMessage);
    }, 100);

    chatInput.disabled = false;
    chatSubmit.disabled = false;
}

  function reply(message) {
    const chatMessages = document.getElementById("chat-messages");
    const replyElement = document.createElement("div");
    replyElement.className = "chatbot-message-parent";
    replyElement.innerHTML = `
      <div class="chatbot-message">
      <pre>${message}      </pre>
      </div>

    `;
    chatMessages.appendChild(replyElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
})();
