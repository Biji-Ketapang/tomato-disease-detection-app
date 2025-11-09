import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.jsx", [
    index("routes/home.jsx"),
    route("clasify", "routes/classification.jsx"),
    route("disease", "routes/disease.jsx"),
  ]),
];
