import React, { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

const ConsumerComponent = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    );
};

export const UseContextHook = () => {
    const [user, setUser] = useState<UserState>({
        first: "Docker",
        last: "Kubernetes",
    });

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button
                onClick={() =>
                    setUser({
                        first: "React",
                        last: "Spring",
                    })
                }
            >
                Change context
            </button>
        </UserContext.Provider>
    );
};
