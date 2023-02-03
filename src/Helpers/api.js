import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** Friender API Class. */

class FrienderApi {
  /** Store user token here */
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      Authorization: `Bearer ${FrienderApi.token}`,
      "Content-Type":
        data instanceof FormData ? "multipart/form-data" : "application/json",
    };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Log user in
   *
   *  - data = {username, password}
   *
   *  Return token
   */
  static async loginUser(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Register new user
   *
   *  - data = {username, password, interests, hobbies, image, location, radius}
   *
   * Return token
   */
  static async registerUser(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Record a swipe
   *
   * input: liker, likee, match(Boolean)
   *
   * - data {username, username, boolean}
   *
   * Returns {liker, likee, matchStatus (bool)}
   */
  static async recordSwipe(liker, likee, match) {
    let res = await this.request(`matches/${liker}`, { likee, match }, "post");

    return res.matchStatus;
  }

  /** Get users that the curr user has NOT matched with, and is not curr user
   *
   *  - data = {location, radius}
   */

  static async getMatchData(userData) {
    let resPotentials = await this.request(
      `users/${userData.username}/potentials?location=${userData.location}&radius=${userData.radius}`
    );
    let resMatches = await this.request(`users/${userData.username}/matches`);

    const potentials = resPotentials.users;
    const matches = resMatches.matches;

    return { matches, potentials };
  }

  /** Get all of a users matches (users they have liked and have liked them)
   *
   *  Return matches - [{username, hobbies, interests, image, location, radius, lastLoginAt}, ...]
   */

  static async getMatches(username) {
    let res = await this.request(`users/${username}/matches`);
    return res.matches;
  }

  /** Get all messages between curr user (username) and a matched user (recipient)
   *
   *  Return messages - [{fromUsername, toUsername, body, sentAt, readAt}, ...]
   */

  static async getMessages(username, recipient) {
    let res = await this.request(`users/${username}/messages/${recipient}`);
    return res.messages;
  }

  /** Get a user
   *
   *  Return {username, interests, hobbies, image, location, radius, joinAt, lastLoginAt}
   */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Update user
   *
   *  - data can include: { password, interests, hobbies, image, location, radius }
   *
   *  Return { username, hobbies, interests, location, radius, image }
   */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default FrienderApi;
