import RoomDetail from '@/components/shared/RoomDetail';

export const metadata = {
    title: 'Luxury Double Suite | The Haneul Grand',
    description: 'Experience our finest accommodation with two bedrooms and full amenities.',
};

export default function LuxuryDoubleSuitePage() {
    const images = [
        'luxurydoublesuite1.jpg',
        'luxurydoublesuite2.jpg',
        'luxurydoublesuite3.jpg',
        'luxurydoublesuite4.jpg',
        'bathroom2.jpg'
    ];

    const amenities = {
        'Bathroom and Toiletries': [
            'Bathrobes',
            'Hair dryer',
            'Mirror',
            'Premium toiletries',
            'Towels',
            'Bathtub'
        ],
        'Entertainment': [
            'Free Wi-Fi in room',
            'Mobile hotspot device',
            'Satellite/cable channels',
            'Telephone',
            'Smart TV',
            'Sound system'
        ],
        'Comforts': [
            'Adapter',
            'Air conditioning',
            'Blackout curtains',
            'Premium linens',
            'Pajamas',
            'Private entrance',
            'Sleep comfort items',
            'Slippers',
            'Socket near the bed',
            'Soundproofing',
            'Seating area'
        ],
        'Dining, drinking, and snacking': [
            'Coffee/tea maker',
            'Free bottled water',
            'Refrigerator',
            'Mini bar',
            'Room service'
        ],
        'Services and conveniences': [
            'Daily housekeeping',
            'Turndown service',
            'Concierge service'
        ],
        'Layout and furnishings': [
            'Carpeting',
            'Desk',
            'Trash cans',
            'Sofa',
            'Coffee table'
        ],
        'Clothing and laundry': [
            'Closet',
            'Clothes rack',
            'Laundry service'
        ],
        'Safety and security features': [
            'Accessible by elevator',
            'Fire extinguisher',
            'In-room safe box',
            'Safety/security feature',
            'Smoke detector'
        ]
    };

    return (
        <RoomDetail
            roomName="Luxury Double Suite"
            images={images}
            sleeps="2 guests"
            includes="Free breakfast & Wi-Fi"
            price="RM 800 per night"
            memberPrice="RM 720 per night [after discount 10%]"
            amenities={amenities}
        />
    );
}
