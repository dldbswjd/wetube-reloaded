import Video from "../models/Video";

/* callback
console.log("start");
Video.find({}, (error, videos) => {
  return res.render("home", { pageTitle: "Home", videos });
});
console.log("finished");
*/

/* promise 
  try {
    // 오류 발생시 catch 에서 처리
    console.log("start");
    const videos = await Video.find({});
    console.log(videos);
    console.log("finished");
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error", { error });
  }
*/

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  //   const id = req.params.id;
  const { id } = req.params; //ES6
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params; //ES6
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params; //ES6
  const { title } = req.body; //ES6
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtag: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
