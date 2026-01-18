import RoomDetail from '@/components/shared/RoomDetail';

export const metadata = {
    title: 'Premium Suite | Ojingeo Hotel',
    description: 'Luxury suite with panoramic views and exclusive services for a VIP experience.',
};

export default function PremiumSuitePage() {
    const images = [
        'premiumsuite1.jpg',
        'premiumsuite2.jpg',
        'premiumsuite3.jpg',
        'premiumsuite4.jpg',
        'premiumsuite5.jpg',
        'premiumsuite6.jpg',
        'bathroom3.jpg'
    ];

    const amenities = {
        'Bathroom and Toiletries': [
            'Luxury bathrobes',
            'Hair dryer',
            'Vanity mirror',
            'Premium toiletries',
            'Towels',
            'Jacuzzi bathtub',
            'Separate shower'
        ],
        'Entertainment': [
            'Free Wi-Fi in room',
            'Mobile hotspot device',
            'Satellite/cable channels',
            'Telephone',
            'Smart TV',
            'Premium sound system',
            'Gaming console'
        ],
        'Comforts': [
            'Adapter',
            'Climate control',
            'Blackout curtains',
            'Premium linens',
            'Luxury pajamas',
            'Private entrance',
            'Sleep comfort items',
            'Premium slippers',
            'Multiple sockets',
            'Soundproofing',
            'Separate living area',
            'Balcony'
        ],
        'Dining, drinking, and snacking': [
            'Coffee/tea maker',
            'Free bottled water',
            'Full-size refrigerator',
            'Premium mini bar',
            '24/7 room service',
            'Kitchenette',
            'Dining table'
        ],
        'Services and conveniences': [
            'Daily housekeeping',
            'Turndown service',
            'Personal concierge service',
            'Butler service'
        ],
        'Layout and furnishings': [
            'Premium carpeting',
            'Executive desk',
            'Trash cans',
            'Luxury sofa set',
            'Coffee table',
            'Dining area',
            'Walk-in closet'
        ],
        'Clothing and laundry': [
            'Walk-in closet',
            'Premium clothes rack',
            'Express laundry service',
            'Ironing facilities'
        ],
        'Safety and security features': [
            'Accessible by elevator',
            'Fire extinguisher',
            'Large in-room safe box',
            'Advanced security features',
            'Smoke detector',
            'Emergency communication system'
        ]
    };

    return (
        <RoomDetail
            roomName="Premium Suite"
            images={images}
            sleeps="3-4 guests"
            includes="Free breakfast, Wi-Fi & Airport transfer"
            price="RM 1200 per night"
            memberPrice="RM 1080 per night [after discount 10%]"
            amenities={amenities}
        />
    );
}
