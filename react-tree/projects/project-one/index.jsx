import React from "react"
import Gallery from "~/components/gallery"
import Navigation from "~/components/navigation"

const Page = ({ pageContext }) => {
    console.log(pageContext)
    return (
        <div>
            <Navigation />
            <Gallery relativePath="/cats/" />
            {pageContext.house}
        </div>)
}

export default Page
