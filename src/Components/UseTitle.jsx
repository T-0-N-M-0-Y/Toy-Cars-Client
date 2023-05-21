import { useEffect } from "react";

const UseTitle = title => {

    useEffect(() => {
        document.title = `Toy Cars | ${title}`;
    },[title])

};

export default UseTitle;