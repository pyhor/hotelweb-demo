// Message Form TypeScript implementation
export {};

function messageForm(): boolean {
    const form = document.forms.namedItem('message');
    
    if (!form) {
        console.error('Message form not found');
        return false;
    }
    
    if (form.checkValidity()) {
        alert("Your message was sent successfully!");
        return true;
    }
    
    // If form is invalid, show validation messages
    form.reportValidity();
    return false;
}

// Make function available globally
declare global {
    interface Window {
        messageForm: () => boolean;
    }
}

// Initialize form handling when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms.namedItem('message');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            messageForm();
        });
    }
});

// Assign function to window object for HTML event handlers
window.messageForm = messageForm;
