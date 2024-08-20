export const sendMessage = (messageData = "") => {
    if (messageData === "") {
        return false;
    }
    const phone = "573214768493"; // Número de teléfono con código de país (sin el '+' al inicio)
    const messageText = `Hola, soy ${messageData.name}. \n*Asunto:* ${messageData.asunto}. \n${messageData.text}`;
    
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${messageText}`;
    window.open(url, "_blank");
    
    alert("Su mensaje ha sido enviado de forma exitosa");
};
