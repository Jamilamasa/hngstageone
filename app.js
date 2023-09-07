// Define UI variables
const dayOfTheWeek = document.querySelector(".dayOfWeek");
const UTCTime = document.querySelector(".UTCTime");

// Function to get current day and time
const getCurrentTimeAndDay = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  const currentTimeUTC = `${today.getUTCHours()}:${
    today.getUTCMinutes() < 10
      ? "0" + today.getUTCMinutes()
      : today.getUTCMinutes()
  }:${
    today.getUTCSeconds() < 10
      ? "0" + today.getUTCSeconds()
      : today.getUTCSeconds()
  }`;

  return {
    dayOfWeek: dayOfWeek,
    currentTimeUTC: currentTimeUTC,
  };
};

const showTimeAndDay = () => {
  // Set day of the week
  dayOfTheWeek.textContent = getCurrentTimeAndDay().dayOfWeek;

  // Set UTC time
  UTCTime.textContent = getCurrentTimeAndDay().currentTimeUTC;
};

// Get Current Time and day
document.addEventListener("DOMContentLoaded", () => {
  showTimeAndDay(); // Call it once when the page is loaded

  // Update the time every second
  setInterval(showTimeAndDay, 1000);
});
