import { type LoaderFunctionArgs, useLoaderData } from "react-router"

export async function loader({ params }: LoaderFunctionArgs) {
	return {
		productId: params.pid,
	}
}

export default function Product() {
	const { productId } = useLoaderData<typeof loader>()
	return <div>Product {productId}</div>
}
