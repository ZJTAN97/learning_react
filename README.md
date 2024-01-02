# Somethings to take note

# Navigate Component

Occasionally, you may find yourself needing to navigate immediately when a component mounts. Your first instinct might be to reach for useNavigate and an immediate side-effect (e.g. React.useEffect), but this is unnecessary. Instead, you can render the Navigate component to achieve the same result:

```
function Component() {
  return <Navigate to="/posts/$postId" params={{ postId: 'my-first-post' }} />
}
```

Think of the Navigate component as a way to navigate to a route immediately when a component mounts. It's a great way to handle client-only redirects. It is definitely not a substitute for handling server-aware redirects responsibly on the server.



# Authenticated routes

- in-built feature to redirect user upon logging them in

https://tanstack.com/router/v1/docs/guide/authenticated-routes


# Scroll Restoration

https://tanstack.com/router/v1/docs/guide/scroll-restoration