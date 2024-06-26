import {
    ReactElement,
    useState
} from "react";
import { Link } from "react-router-dom";

import "./index.scss";

type propsType = Readonly<{
    title: string,
    options: { [key: string]: string },
    titleClass?: string,
    optionClass?: string
}>;

export default function ToggleMenu(props: propsType): ReactElement {
    const {
        title,
        options,
        titleClass,
        optionClass
    } = props;

    const titleClassName = titleClass ? `toggleMenu-title ${titleClass}` : "toggleMenu-title"
    const optionClassName = titleClass ? `toggleMenu-option ${optionClass}` : "toggleMenu-option"

    const [openStatus, setOpenStatus] = useState<boolean>(false);

    return (
        <div
            className="toggleMenu"
            style={{ "--rows": Object.keys(options).length } as React.CSSProperties}
            data-open={openStatus}
            onClick={() => {setOpenStatus(!openStatus)}}
        >
            <div className={titleClassName}>{title}</div>
            <div className={optionClassName}>
                {Object.entries(options).map(([key, value], index) => {
                    return value.startsWith("http") ? <a key={index} href={value} rel="noreferrer" target="_blank">{key}</a> : <Link key={index} to={value}>{key}</Link>;
                })}
            </div>
        </div>
    );
}
