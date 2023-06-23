import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "./mocked-data/data";

let callApi = true;

/**
 * Call API to retrieve user main data, activities, performances and average sessions
 * @param { String } id
 * @return { Object }
 */

export async function fetchUserMainData(id) {
  if (callApi) {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } else {
    return { data: USER_MAIN_DATA.find((element) => element.id == id) };
  }
}

export async function fetchUserActivity(id) {
  if (callApi) {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } else {
    return { data: USER_ACTIVITY.find((element) => element.userId == id) };
  }
}

export async function fetchUserAverageSessions(id) {
  if (callApi) {
    const response = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } else {
    return {
      data: USER_AVERAGE_SESSIONS.find((element) => element.userId == id),
    };
  }
}

export async function fetchUserPerformance(id) {
  if (callApi) {
    const response = await fetch(
      `http://localhost:3000/user/${id}/performance`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } else {
    return {
      data: USER_PERFORMANCE.find((element) => element.userId == id),
    };
  }
}
