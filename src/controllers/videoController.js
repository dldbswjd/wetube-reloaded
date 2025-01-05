export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Watch");
};
export const search = (req, res) => res.send("Search User");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  res.send("Delete Video");
};
