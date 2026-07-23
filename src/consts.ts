// Central place for brand + cross-site link config.
// APP_URL points at the live app (AzLabs SPA). Update once the production
// custom domain is confirmed — currently a placeholder.
export const APP_URL = "https://app.shiksit.com";

export const LINKS = {
  login: `${APP_URL}/login`,
  freeTrial: `${APP_URL}/free-trial`,
};

export const SITE = {
  name: "Shiksit",
  tagline: "School management, simplified.",
  description:
    "Shiksit is a school management platform for teachers, students, parents, and administrators — attendance, grading, communication, and finance in one place.",
};

export const CONTACT = {
  phone: "+91 9876543210",
  email: "contact@shiksit.com",
  web: "www.shiksit.com",
  address: [
    "Purvanchal Capital Tower, Vibhuti Khand",
    "Gomti Nagar, Lucknow",
    "Uttar Pradesh 226010, India",
  ],
  mapUrl:
    "https://maps.google.com/?q=Purvanchal+Capital+Tower,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010",
  hours: ["Mon - Fri: 7am - 2pm", "Sat: 9am - 1pm", "Sun: Closed"],
};
