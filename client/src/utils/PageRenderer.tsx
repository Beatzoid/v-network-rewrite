import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NotFound from "../components/NotFound";

const generatePage = async (pageName: string) => {
    let file;

    try {
        file = await import(`../pages/${pageName}`);
    } catch (err) {
        console.error(err);
        return <NotFound />;
    }

    const Component = file.default;
    try {
        return <Component />;
    } catch (err) {
        console.error(err);
        return <NotFound />;
    }
};

const PageRenderer = () => {
    let [pageComponent, setPageComponent] = useState<any>();

    const { page, id } = useParams();
    let pageName = "";
    if (id) {
        pageName = `${page}/[id]`;
    } else {
        pageName = `${page}`;
    }

    useEffect(() => {
        (async () => {
            const generatedPage = await generatePage(pageName);
            setPageComponent(generatedPage);
        })();
    }, [page]);

    return pageComponent;
};

export default PageRenderer;
