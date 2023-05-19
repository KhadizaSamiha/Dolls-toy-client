

const Blog = () => {
    return (
        <div className="text-white">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ">
                <div className="collapse-title text-xl font-medium">
                    1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Wshich token are used in token-based authentication to allow an application to access an API called access token and  A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are table-based, while NoSQL databases are document based.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3.What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is the most popular web framework for Node.js. And Nest JS is the another kind of fastest framework of Node JS.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages.You can use aggregation operations to Group values from multiple documents together.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;