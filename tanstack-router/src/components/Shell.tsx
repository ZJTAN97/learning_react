import { Link } from "@tanstack/react-router";
import React from "react";

export const Shell = ({ children }) => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "5vh",
                    borderBottom: "solid 1px blue",
                }}
            >
                <div>AskMAESenior</div>
                <Link to="/questions/new">ask question</Link>
            </div>
            <div
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        borderRight: "solid 1px",
                        height: "100vh",
                        padding: "15px",
                    }}
                >
                    <div>
                        <Link
                            to="/"
                            // hash="section-1"
                            activeProps={{ style: { fontWeight: "bold" } }}
                            preload='intent'
                        >
                            Questions
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/users"
                            activeProps={{ style: { fontWeight: "bold" } }}
                        >
                            Users
                        </Link>
                    </div>
                </div>
                <div
                    style={{
                        padding: "20px",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
