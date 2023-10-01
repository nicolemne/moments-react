import { rest } from "msw";

const baseURL = "https://learn-djangorestframework-api-ff82997e6651.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "nicole",
        email: "nicolemne.dev@gmail.com",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image: "https://res.cloudinary.com/dl1c70wmm/image/upload/v1/media/images/JPEG_20190102_165348_y42kcu"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

// to access logged in user go to the heroku api url and add /dj-rest-auth/user/ to the end