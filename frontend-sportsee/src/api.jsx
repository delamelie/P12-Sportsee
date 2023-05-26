import { USER_MAIN_DATA } from "./mocked-data/data";
import { USER_ACTIVITY } from "./mocked-data/data";
import { USER_PERFORMANCE } from "./mocked-data/data";
import { USER_AVERAGE_SESSIONS } from "./mocked-data/data";

let callApi = true;

// export const fetchUserMainData = async (userId) => {
//   if (callApi) {
//     const response = await fetch(`http://localhost:3000/user/${userId}`);
//     let data = await response.json();
//     return data;
//   } else {
//     return { data: USER_MAIN_DATA.find((element) => element.id == userId) };
//   }
// };

export async function fetchUserMainData(userId) {
  if (callApi) {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    let data = await response.json();
    return data;
  } else {
    return { data: USER_MAIN_DATA.find((element) => element.id == userId) };
  }
}

export async function fetchUserActivity(userId) {
  if (callApi) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    let data = await response.json();
    return data;
  } else {
    return { data: USER_ACTIVITY.find((element) => element.userId == userId) };
  }
}

export async function fetchUserAverageSessions(userId) {
  if (callApi) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    let data = await response.json();
    return data;
  } else {
    return {
      data: USER_AVERAGE_SESSIONS.find((element) => element.userId == userId),
    };
  }
}

export async function fetchUserPerformance(userId) {
  if (callApi) {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    let data = await response.json();
    return data;
  } else {
    return {
      data: USER_PERFORMANCE.find((element) => element.userId == userId),
    };
  }
}
