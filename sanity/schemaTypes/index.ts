import aboutProject from "./about/about-project";
import activityPost from "./activity/activity-post";
import eventPost from "./event/event-post";
import author from "./general/author";
import location from "./general/location";
import paymentDetails from "./general/payment-details";
import sponsor from "./sponsor/sponsor";
import category from "./story/category";
import storyPost from "./story/story-post";

export const schemaTypes = [
    storyPost, 
    author, 
    category,
    eventPost,
    activityPost,
    sponsor,
    aboutProject,
    location,
    paymentDetails
];
