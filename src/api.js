const API_RESPONSE = {
  name: "Mika Whippet",
  email: "mika@mikathewhippet.com",
  role: "Software Engineer",
  insta: "@mika_whippet",
  profile_img:
    "https://pbs.twimg.com/profile_images/982394336456396801/KRv7pJaI_400x400.jpg"
};

export default {
  getUser() {
    return new Promise((resolve, reject) => {
      return resolve(API_RESPONSE);
    });
  },
  updateUser(data) {
    return new Promise((resolve, reject) => {
      let user = API_RESPONSE;
      Object.assign(user, data);
      return resolve(user);
    });
  }
};
