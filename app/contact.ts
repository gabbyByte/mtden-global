export const openWhatsApp = (message: string = "Hello! I'm interested in your services.") => {
    const phoneNumber = "254799707412"; // Remove the + and any spaces
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };
  