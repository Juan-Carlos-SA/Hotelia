import React from "react";
import { Menu } from "../components/inicio/Menu";

export function Layout({ children }) {
    return (
        <div>
            <div className="menu">
                <Menu />
            </div>
            <div className="body">{children}</div>
            </div>
    );
}