import type { LoaderFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// default de return
export const loader : LoaderFunction = () => {
    return json({
        ok: 'mother-teste',
    });
}

const Random = () => {
    // default call use loader to return loader function
    const data = useLoaderData();
    return (<pre>{JSON.stringify(data)}</pre>)
};

export default Random;