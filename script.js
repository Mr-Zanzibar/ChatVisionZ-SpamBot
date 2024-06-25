let messageCount = 0;
const messages = ['INSERISCI-IL-MESAGGIO-QUI', 'INSERISCI-IL-MESAGGIO-QUI']; // messaggi da inviare (non lo avevi capito?)

async function spam() {
    try {
        const chatInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('send');
        const nextButton = document.getElementById('next');

        if (!chatInput || !sendButton || !nextButton) {
            console.error("Impossibile trovare gli elementi della chat.");
            console.log('%Reporta questo errore nella pagina ufficiale di Github: https://github.com/Mr-Zanzibar/ChatVisionZ-SpamBot', 'color: magenta; font-weight: bold;');
        }

        if (messageCount < messages.length) { // Controlla se sono stati inviati entrambi i messaggi
            chatInput.value = messages[messageCount];
            sendButton.click();
            console.log('%cMessaggio inviato: ' + messages[messageCount], 'color: green; font-weight: bold;');
            messageCount++;
        } else {
            nextButton.click();
            messageCount = 0; // Resetta per ricominciare
            console.log('%cProssima Chat', 'color: blue;');
        }
    } catch (error) {
        console.error("Errore durante lo spam:", error);
        setTimeout(spam, 2000); // Riprova dopo 2 secondi in caso di errore
    }
}

// Intervallo di 3 secondi
const spamInterval = setInterval(spam, 3000); 
