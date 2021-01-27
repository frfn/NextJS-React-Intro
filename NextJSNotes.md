# Next JS-Recapped and Completed

<br>
<br>

# Next JS

A library building up on React, it is still React.

-   Enforces a folder structure

-   Gives server side rendering right outside the box--no need to configure anything behind the scenes

    -   makes creating React components more conveniant and easier

    -   server side rendering is an interesting part which we probably don't need, it is helpful if you want app to be found in search engines

## This is a framework where the back end is all set for use and making static websites easier to create.

-   Minimalistic framework for server-rendered React app

-   server side rendering:

-   user enters url that leads to my react app,

-   it will pre-render that page on the server so that the server returns the pre-rendered html code **IMPORTANT**

**Static websites** VS **Dynamic websites**:

-   static: fixed and display the same content for every user

-   dyanmic: can display different content and provide user interaction, by making use of advanced programming and databases

Things that are good to know:

-   Since the server returns code to be rendered, the google crawler might have a hard to understanding.

-   Since SSR happens, the page that will be returned will be the app, not code to be rendered, so the crawler will have a better time understanding

1.  How `Server Side Rendering` works? (`SSR`)

    1. Client ( server would typically ship index.html file + code! then gets loaded as SPA on Browser Client )

    -   Fetch & Render React App ( step between the response, for rendering react app, the application will be sent back )

    -   Instead of the client( browser ) rendering the SPA, what's coming back to the client, IS a SPA, from the React App Code, that is rendered server side!

    -   Usually the code, html files, etc. is rendered when the code is given back to the client!

2.  React App Code ( Returns rendered First Page + React App Bundle )

    Initial page load is important

## Next JS helps us with SSR, since SSR is tricky to set up. Accept it. Not your job. - Additionally, gives a strict folder structure for good practice!

-   HANDS ON: https://nextjs.org/learn/basics/create-nextjs-app

-   Follow the steps and see what the boiler plate is!

-   This is how you learn it!!

1. explore `<Link>` and `Router.push()`

    - these are `Next.js` components!

    ```
    <Link href="/auth">
        <a>
            Auth
        </a>
    <Link>
    ```

    ```
    <button onClick={ () => Router.push('/auth') }> Go to Auth </button>
    ```

2. Components? Still the same.

3. CSS?

    1. You can use inline, Radium, etc, but **NOT** CSS modules (we can **NOT** access the webpack config that nextjs uses)

    2. Use `<style>`

    `<style style> { ...uses styled-jsx for isolated scoped CSS } </style>`

4. Handling 404?

    - Custom ERROR HANDLING: unknown routes will lead to 404 | This page could not be found

`LifeCycle Hook` &mdash; **important feature.**

-   class based components

    ```
    static async getInitialProps(context) {
        ...
        return {}
    };
    ```

in Google Dev Tools, `console.log()` is NOT seen, but seen in the `terminal`!

-   code is executed on the Server first,

-   to grab the content IN the Dev Tool, you must click INTO the component, if refreshed, you will not see it.

in `getInitialProps`, you can fetch data from a database first then pre populate! the props!

Look @ the `index.js` for `/auth` and `/src` folder!! They contain the `.getInitialProps()` &mdash; LifeCycle hook (**only** for NextJS!)

-   Super Important LifeCycle Hook!

    -   `.getInitialProps()`: it is great for async code!

    -   Works for both FN & class component!

    -   it is an async function and **must** return an object!

    -   you can use `async` + `await` for the response since getInitialProps is an async function

    -   this is a way to populate whatever you have to populate!, a list of stuff, etc.

        -   promise feature! has **resolve**, **reject**

        -   you will call **resolve()** to return what ever you're awaiting for!

        ```
        const promise = new Promise( (resolve, reject) => {
            // axios
            setTimeout( () => {
                resolve( { name: "cole" } )
            }, 5000 )
        } )

        // execute after promise has been resolved
        promise.then((res) => {
            setState(res)
        })
        ```

# Deployment!

-   npm run build

-   you would Deploy the WHOLE src folder

-   deploy in AWS elastic bean stalk or Horoku, need a host that **needs** to run NodeJS, NextJS only works on NodeJS and uses NodeJS

-   All files that is shipped are JS files!!!

# Notes:

-   file-system in main api, we don't use `React Router` if nextjs is used, we create `folder` and `files` to reflect our pages!

    -   you can traverse by writing the `/routeName` to the page without Router!

-   comes with code split = lazy loading (ie. `<Link>`)

-   `/pages` is the **important** folder for `next.js`, it does `routing`, `code splitting` + can contain n`ormal code/components` etc!

    -   code splitting is automatic, only if you visit `/pages/auth` is when c`omponents/user.js` will be rendered

-   Next.js has a pretty cool tutorial to learn how to use it!
