// Define UI variables
const dayOfTheWeek = document.querySelector(".dayOfWeek");
const UTCTime = document.querySelector(".UTCTime");

// Function to get current dat and time
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
  // Create textNode and append day of the week
  dayOfTheWeek.appendChild(
    document.createTextNode(getCurrentTimeAndDay().dayOfWeek)
  );
  // Create textNode and append UTC time
  UTCTime.appendChild(
    document.createTextNode(getCurrentTimeAndDay().currentTimeUTC)
  );
};

// Get Current Time and day
document.addEventListener("DOMContentLoaded", showTimeAndDay);
