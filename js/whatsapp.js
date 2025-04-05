// WhatsApp Configuration
const whatsappConfig = {
    phoneNumber: "8281944181", // Replace with your number
    countryCode: "91", // Replace with your country code
    defaultMessage: "Hello Lumina Solutions, I'd like to learn more about your therapy services."
  };
  
  // Initialize WhatsApp functionality
  document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappButton');
    const whatsappFloat = document.getElementById('whatsappFloat');
    
    // Generate WhatsApp URL with optional message
    function getWhatsAppUrl(message = '') {
      const baseUrl = `https://wa.me/${whatsappConfig.countryCode}${whatsappConfig.phoneNumber}`;
      return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
    }
    
    // Set up WhatsApp buttons
    function setupWhatsAppButtons() {
      const whatsappUrl = getWhatsAppUrl(whatsappConfig.defaultMessage);
      
      if (whatsappBtn) {
        whatsappBtn.href = whatsappUrl;
        whatsappBtn.addEventListener('click', trackWhatsAppClick);
      }
      
      if (whatsappFloat) {
        whatsappFloat.addEventListener('click', function() {
          trackWhatsAppClick();
          window.open(whatsappUrl, '_blank');
        });
      }
    }
    
    // Track WhatsApp clicks (replace with your analytics)
    function trackWhatsAppClick() {
      console.log('WhatsApp initiated');
      // Example: gtag('event', 'whatsapp_click');
    }
    
    setupWhatsAppButtons();
  });