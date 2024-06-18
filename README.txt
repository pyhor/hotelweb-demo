*Introduction

{
    This is a hotel booking website developed using HTML, CSS and JavaScript. There are a total of 18 webpages, 14 of which can be found in the website's navigation menu and 4 can be accessed through functions in webpages.
} 

*Footer Area
{
    In the footer of all pages there is a link that leads directly to the Message page. Other than that it consists of standard hotel website footers such as contact information, sponsorships and payments.
}

//Navigation Menu Webpages

*Home Page - home.html
{
    This is the home page for the hotel itself. It introduces a short video as a gallery for the hotel, an article for upcoming events with a link to the Events Page, a section for our hotel branches linking to all 6 of the Brances galleries, and finally a notice for newly updated policy due to Covid-19 linking to Policy Page. It is also made with JavaScript elements as there is a welcoming animation at the top of the page along with slideshow, and also countdown element.
}

*Rooms Page - rooms.html
{
	This is the showroom page for our hotel. There are 3 types of rooms such as  Mini Suite, Luxury Double Suite and Premium Suite. Below are some room facilities. Booking each of the rooms includes free breakfast. Users can click on the "Book Now" button and directly link to the Booking Form Page.
}

*Facilities Page - facilities.html
{
    This is the introductory page for facilities available at our hotel. It consists of briefing for 5 main hotel facilities along with schedules for them. The schedules are made neatly using tables to organize them.
}



*Booking Page - booking.html
{
    This is the introductory page for booking service at our hotel. It consists of briefing for room types and a "Book Now" button that leads directly to Booking Form Page, both of which is made neatly using tables for organization.
}

*Membership Page - membership.html
{
	This is the membership page for our hotel. Besides, there are some membership benefits descriptions. Customers that are interested in joining the membership can fill in the membership form and submit. After successfully submitting the membership form it will link to a welcome member page.
}

*Events Page - events.html
{
    This is the introductory page for our hotel's upcoming events for this month. It consists of event details such as date, time and title neatly arranged into table. The poster thumbnails are custom-made gifs, and below them are links that redirect user to a png-version of the poster thumbnails for user to download.
}

*Reviews Page - reviews.html
{
	This is a review page for our hotel. It contains overall reviews. Previous customers that stayed in our hotel can write down their comment and the rating then submit the form to us.
}

*Branches Page - branches.html
{
    This is the introductory page for our hotel branches. It consists of an image map for all six hotel branches. There is a text prompting user to click on the icons of the hotel branches they want to see. Once clicked, it directs them to the hotel branch page.
}

*Branch Gallery Pages - seoul-branch.html, busan-branch.html, gangnam-branch.html, mapo-gu-branch.html, incheon-branch.html, gwangju-branch.html
{
    These are the gallery pages for our hotel branches. It consists of 8 pictures per page taken from each of our hotel branches in 6 separate pages.
}



*Policy Page 
{
    This is the introductory page for our hotel policy. It consists of newly updated hotel policy affected by current Covid-19 situation.
}

*FAQ Page 
{
    This is the introductory page of user's Frequently Asked Questions for our hotel. It consists of 10 most Frequently Asked Questions asked by users regarding our hotel, and the structure is made with JavaScript as well, as user can expand the questions to get its answers.
}

*About Us Page 
{
    This is the introductory page for our hotel's history. It consists of 3 parts: Introduction, History and Walkthrough. Introduction part explains our hotel's beginnings and mission, History part explains our hotel's milestones using table organization, and Walkthrough part consists of 2 videos to give users a taste of the hotel experience.
}

//Redirected Pages

*Message Page 
{
    Directed from the links in all pages' footer area. It consists of a form prompting user to leave their messages below. The form needs the user to enter their email and message (with minimum of 30 characters). Upon clicking the "Send" button, it will redirect user to Message Received Page if form is validated, if not then it will prompt user to input correctly. 
}

*Message Received Page 
{
    Directed from "Send" button. It consists of a thank you message for the user's input.
}

*Booking Form Page 
{
    Directed from "Book Now" button. It consists of a conditional form made using JavaScript elements, which means the options are disabled until conditions are met. The user needs to select a room to enable check in and check out dates, then choose check in and check out days to enable meal selection, then select membership. After selecting membership, the grand total is calculated and shown. The user then needs to choose payment method and optionally write other requests. Upon clicking "Submit", validation is done using JavaScript to ensure all details are filled up. Once form is validated, a pop-up message appears and user is directed to Booking Received Page.
}

*Booking Received Page 
{
    Directed from "Submit" button. It consists of a message for booking confirmation and a thank you message.
}
