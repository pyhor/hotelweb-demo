// Booking Form TypeScript implementation
export {}; // This makes the file a module

// Global variables with type annotations
let globalRoomPrice: number = 0;
let globalDateDiff: number = 0;
let globalStayPrice: number = 0;
let globalSubtotal: number = 0;
let globalTotalPrice: string = '0.00';

// Type definitions for form elements
interface BookingFormElements extends HTMLFormControlsCollection {
    roomBox: HTMLSelectElement;
    priceBox1: HTMLInputElement;
    checkInBox: HTMLInputElement;
    checkOutBox: HTMLInputElement;
    durationBox1: HTMLInputElement;
    Ymember: HTMLInputElement;
    Nmember: HTMLInputElement;
    food1: HTMLInputElement;
    food2: HTMLInputElement;
    food3: HTMLInputElement;
    totalPriceBox: HTMLInputElement;
}

// Function to handle room pricing
function roomPricing(): void {
    const roomSelect = document.getElementById('roomBox') as HTMLSelectElement;
    if (!roomSelect) return;
    
    const priceBox = document.getElementById('priceBox1') as HTMLInputElement;
    if (!priceBox) return;
    
    const selectedOption = roomSelect.options[roomSelect.selectedIndex];
    globalRoomPrice = parseFloat(selectedOption.value) || 0;
    priceBox.value = globalRoomPrice.toString();
    
    validateDate();
    calculate();
}

// Function to calculate days between check-in and check-out dates
function daysBetween(): void {
    const checkInElement = document.getElementById('checkInBox') as HTMLInputElement;
    const checkOutElement = document.getElementById('checkOutBox') as HTMLInputElement;
    const durationBox = document.getElementById('durationBox1') as HTMLInputElement;
    
    if (!checkInElement || !checkOutElement || !durationBox) return;
    
    const date1 = new Date(checkInElement.value);
    const date2 = new Date(checkOutElement.value);
    
    // Only calculate if both dates are valid
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        globalDateDiff = 0;
        durationBox.value = '';
        return;
    }
    
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    globalDateDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    durationBox.value = globalDateDiff.toString();
    
    validateMeal();
    calculate();
}

// Function to apply member discount
function memberDiscount(): void {
    if (!calculate()) return;
    
    const Ymember = document.getElementById('Ymember') as HTMLInputElement;
    const totalPriceBox = document.getElementById('totalPriceBox') as HTMLInputElement;
    
    if (Ymember?.checked) {
        globalSubtotal = globalStayPrice * 0.9; // 10% discount
        globalTotalPrice = globalSubtotal.toFixed(2);
    } else {
        globalSubtotal = globalStayPrice;
        globalTotalPrice = globalSubtotal.toFixed(2);
    }
    
    if (totalPriceBox) {
        totalPriceBox.value = globalTotalPrice;
    }
}

// Function to calculate total price
function calculate(): boolean {
    const priceBox = document.getElementById('priceBox1') as HTMLInputElement;
    const durationBox = document.getElementById('durationBox1') as HTMLInputElement;
    
    if (!priceBox || !durationBox) return false;
    
    const price = parseFloat(priceBox.value) || 0;
    const duration = parseInt(durationBox.value) || 0;
    
    globalStayPrice = price * duration;
    return true;
}

// Form validation functions
function validateDate(): void {
    const checkInBox = document.getElementById('checkInBox') as HTMLInputElement;
    const checkOutBox = document.getElementById('checkOutBox') as HTMLInputElement;
    
    if (!checkInBox || !checkOutBox) return;
    
    const isEnabled = globalRoomPrice > 0;
    checkInBox.disabled = !isEnabled;
    checkOutBox.disabled = !isEnabled;
}

function validateMeal(): void {
    const food1 = document.getElementById('food1') as HTMLInputElement;
    const food2 = document.getElementById('food2') as HTMLInputElement;
    const food3 = document.getElementById('food3') as HTMLInputElement;
    
    if (!food1 || !food2 || !food3) return;
    
    const isEnabled = globalDateDiff > 0;
    food1.disabled = !isEnabled;
    food2.disabled = !isEnabled;
    food3.disabled = !isEnabled;
}

function validateMember(): void {
    const food1 = document.getElementById('food1') as HTMLInputElement;
    const food2 = document.getElementById('food2') as HTMLInputElement;
    const food3 = document.getElementById('food3') as HTMLInputElement;
    const Ymember = document.getElementById('Ymember') as HTMLInputElement;
    const Nmember = document.getElementById('Nmember') as HTMLInputElement;
    
    if (!food1 || !food2 || !food3 || !Ymember || !Nmember) return;
    
    const isMealSelected = food1.checked || food2.checked || food3.checked;
    Ymember.disabled = !isMealSelected;
    Nmember.disabled = !isMealSelected;
    
    // Auto-select Nmember if enabled and no selection
    if (isMealSelected && !Ymember.checked && !Nmember.checked) {
        Nmember.checked = true;
    }
}

function validateForm(): boolean {
    const form = document.forms.namedItem('bform');
    if (!form) return false;
    
    if (form.checkValidity()) {
        alert("Booking was successful! We look forward to seeing you here.");
        return true;
    }
    
    // If form is invalid, show validation messages
    form.reportValidity();
    return false;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Room selection
    const roomBox = document.getElementById('roomBox');
    if (roomBox) {
        roomBox.addEventListener('change', roomPricing);
    }
    
    // Date inputs
    const checkInBox = document.getElementById('checkInBox');
    const checkOutBox = document.getElementById('checkOutBox');
    
    if (checkInBox) {
        checkInBox.addEventListener('change', daysBetween);
    }
    if (checkOutBox) {
        checkOutBox.addEventListener('change', daysBetween);
    }
    
    // Meal options
    const foodOptions = ['food1', 'food2', 'food3'];
    foodOptions.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', validateMember);
        }
    });
    
    // Membership options
    const memberOptions = ['Ymember', 'Nmember'];
    memberOptions.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', memberDiscount);
        }
    });
    
    // Form submission
    const form = document.forms.namedItem('bform');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateForm();
        });
    }
});

// Make functions available globally
declare global {
    interface Window {
        roomPricing: () => void;
        daysBetween: () => void;
        memberDiscount: () => void;
        validateMember: () => void;
        validateForm: () => boolean;
    }
}

// Assign functions to window object for HTML event handlers
window.roomPricing = roomPricing;
window.daysBetween = daysBetween;
window.memberDiscount = memberDiscount;
window.validateMember = validateMember;
window.validateForm = validateForm;
