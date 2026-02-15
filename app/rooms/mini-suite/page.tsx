import RoomDetail from '@/components/shared/RoomDetail';

export const metadata = {
    title: 'Mini Suite | The Haneul Grand',
    description: 'Elegant suite with separate living area, perfect for couples or business travelers.',
};

export default function MiniSuitePage() {
    const images = [
        'minisuite1.jpg',
        'minisuite2.jpg',
        'bathroom1.jpg'
    ];

    const amenities = {
        'Bathroom and Toiletries': [
            'Bathrobes',
            'Hair dryer',
            'Mirror',
            'Toiletries',
            'Towels'
        ],
        'Entertainment': [
            'Free Wi-Fi in room',
            'Mobile hotspot device',
            'Satellite/cable channels',
            'Telephone'
        ],
        'Comforts': [
            'Adapter',
            'Air conditioning',
            'Blackout curtains',
            'Linens',
            'Pajamas',
            'Private entrance',
            'Sleep comfort items',
            'Slippers',
            'Socket near the bed',
            'Soundproofing'
        ],
        'Dining, drinking, and snacking': [
            'Coffee/tea maker',
            'Free bottled water',
            'Refrigerator'
        ],
        'Services and conveniences': [
            'Daily housekeeping'
        ],
        'Layout and furnishings': [
            'Carpeting',
            'Desk',
            'Trash cans'
        ],
        'Clothing and laundry': [
            'Closet',
            'Clothes rack'
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
            roomName="Mini Suite"
            images={images}
            sleeps="1 guest"
            includes="Free breakfast"
            price="RM 400 per night"
            memberPrice="RM 360 per night [after discount 10%]"
            amenities={amenities}
        />
    );
}
