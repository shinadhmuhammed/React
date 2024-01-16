const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "iam muhammed shinadh"), React.createElement("h3", {}, "iam shinadh")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
