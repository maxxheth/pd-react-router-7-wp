// import { flatRoutes } from "@react-router/fs-routes"

// export default flatRoutes({
// 	ignoredRouteFiles: ["**/*.test.{ts,tsx}"],
// })

import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes"

export default [
	// layout("./products/layout.tsx", [
	//   index("./m/home.tsx"),
	//   route("contact", "./marketing/contact.tsx"),
	// ]),

	index("./routes/index.tsx"),
	...prefix("products", [
		index("./routes/products/index.tsx"),
		layout("./routes/products/layout.tsx", [
			route(":pid", "./routes/products/product.tsx"),
			route(":pid/edit", "./routes/products/edit-product.tsx"),
		]),
	]),
	route("resource.locales", "./routes/resource.locales.ts"),
	route("robots.txt", "./routes/robots.txt.ts"),
	route("sitemap-index.xml", "./routes/sitemap-index.xml.ts"),
	route("sitemap.$lang.xml", "./routes/sitemap.$lang.xml.ts"),
] satisfies RouteConfig
