const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            symlinks: false,
            alias: {
                "~/components": path.resolve(__dirname, 'src/components/'),
            }
        },
    });
};

exports.onPreInit = () => {
    const fsPromises = require("fs").promises;

    (async () => {
        try {
            await fsPromises.symlink("../repo", './src', "dir");
        } catch (error) {
            console.error(error);
        }
    })();

}

const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    // you only want to operate on `Mdx` nodes. If you had content from a
    // remote CMS you could also check to see if the parent node was a
    // `File` node here
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })

        createNodeField({
            // Name of the field you are adding
            name: "slug",
            // Individual MDX node
            node,
            // Generated value based on filepath with "blog" prefix. you
            // don't need a separating "/" before the value because
            // createFilePath returns a path with the leading "/".
            value: `/blog${value}`,
        })
    }
}


// exports.createPages = async ({ graphql, actions, reporter }) => {
//     // Destructure the createPage function from the actions object
//     const { createPage } = actions

//     const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//     if (result.errors) {
//         reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//     }

//     // Create blog post pages.
//     const posts = result.data.allMdx.edges

//     // you'll call `createPage` for each result
//     posts.forEach(({ node }, index) => {
//         createPage({
//             // This is the slug you created before
//             // (or `node.frontmatter.slug`)
//             path: node.fields.slug,
//             // This component will wrap our MDX content
//             component: path.resolve(`./src/components/posts-page-layout.js`),
//             // You can use the values in this context in
//             // our page layout component
//             context: { id: node.id },
//         })
//     })
// }

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
        ...page,
        context: {
            ...page.context,
            house: `Gryffind     or`,
            id: "my id"
        },
    })
}