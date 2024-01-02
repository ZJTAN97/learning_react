import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
    Outlet,
    RouterProvider,
    Router,
    Route,
    RootRoute,
    NotFoundRoute,
    Link,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Shell } from "./components/Shell";

const rootRoute = new RootRoute({
    component: () => (
        <>
            <Shell>
                <Outlet />
            </Shell>
            <TanStackRouterDevtools />
        </>
    ),
});

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => (
        <div className="p-2">
            <h3>Home / Questions page</h3>
            <section id="section-1" style={{ height: "50vh" }}>
                Section 1
            </section>
            <section id="section-2" style={{ height: "10vh" }}>
                Section 2
            </section>
        </div>
    ),
});

const usersRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/users",
    component: () => (
        <div className="p-2">
            <Link
                to="/users/$userId"
                params={{
                    userId: "1234",
                }}
            >
                User 1
            </Link>
            <Outlet />
        </div>
    ),
});

const userRoute = new Route({
    getParentRoute: () => usersRoute,
    path: "$userId",
    component: () => <div>Individual user page</div>,
});

const createQuestionRoute = new Route({
    getParentRoute: () => rootRoute,
    path: `questions/new`,
    component: () => <div>Create question page</div>,
});

const questionRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/questions/$questionId",
    component: () => <div>Individual question page</div>,
});

const notFoundRoute = new NotFoundRoute({
    getParentRoute: () => rootRoute,
    component: () => <h1>Page not found bro</h1>,
});

const routeTree = rootRoute.addChildren([
    indexRoute,
    usersRoute.addChildren([userRoute]),
    createQuestionRoute,
    questionRoute,
]);

const router = new Router({ routeTree, notFoundRoute });

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
}

// types
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
