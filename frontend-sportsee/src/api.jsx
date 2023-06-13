import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "./mocked-data/data";

let callApi = false;

/**
 * Call API to retrieve user main data, activities, performances and average sessions
 * @param { String } id
 * @return { Object }
 */

export async function fetchUserMainData(id) {
  console.log(id);
  if (callApi) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return { data: USER_MAIN_DATA.find((element) => element.id == id) };
  }
}

export async function fetchUserActivity(id) {
  if (callApi) {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return { data: USER_ACTIVITY.find((element) => element.userId == id) };
  }
}

export async function fetchUserAverageSessions(id) {
  if (callApi) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return {
      data: USER_AVERAGE_SESSIONS.find((element) => element.userId == id),
    };
  }
}

export async function fetchUserPerformance(id) {
  if (callApi) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  } else {
    return {
      data: USER_PERFORMANCE.find((element) => element.userId == id),
    };
  }
}
