import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.jsx", [
    index("routes/home.jsx"),
    route("predict", "routes/predict.jsx"),
    route("eda", "routes/eda.jsx"),
  ]),
];
