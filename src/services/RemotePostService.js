/* eslint-disable comma-dangle */
import axios from "axios";

export default class RemotePostService {
  static getRemotePosts() {
    return axios.get(
      "https://gnews.io/api/v4/search?q=watches&token=1cf52c5caf5ce6f6a3390c3ba2fc8ea2"
    );
  }
}
