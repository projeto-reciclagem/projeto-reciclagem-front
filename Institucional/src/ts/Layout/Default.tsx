import React, { ReactNode } from "react"
import CursorFollower from "../Components/CursorFollower";

interface DefaultProps {
    children: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
    return (
        <main>
            { children }
            <CursorFollower />
        </main>
    )
}

export default Default