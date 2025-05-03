/**
 * 1.Create a context.So that we can share the state of User across the state of application.
 * 2.Create a provider to reuse the context
 * 3.set create user via context provided function
 * 4.login user via context provided function
 * 5.observe:one single state(inside the provider)==>if the user state  on firebase is changes you can update the user information in your state
 * 6. use observer inside useEffect==>
 *   6.1==>set the observer one time
 *   6.2==>clean up memory after unmount
 */