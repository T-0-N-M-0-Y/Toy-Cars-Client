import UseTitle from "./UseTitle";

const Blogs = () => {

    UseTitle("Blogs")

    return (
        <div className='mb-20'>
            <div className='md:px-20 px-5 '>
                <h1 className=' mt-20 mb-5 text-xl font-bold'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

                <p> Ans: A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                </p>
                <br />
                <p>The typical flow involves the client receiving the access token and refresh token from the server after successful authentication. The client stores the access token securely and uses it to access protected resources. When the access token expires, the client can use the refresh token to obtain a new access token. This process continues until the refresh token itself expires.</p>
                <br />
                <p> On the client-side, its crucial to store access tokens securely, such as in memory or secure HTTP-only cookies. Refresh tokens, being more sensitive, should be stored in a secure manner, such as in an HTTP-only cookie or a secure storage mechanism provided by the platform.</p>

                <h1 className=' mt-10 text-xl font-bold'>2.Compare SQL and NoSQL databases?</h1>
                <p className='mt-5'>Ans: Structured Query Language (SQL) is a programming language that allows both technical and non-technically-minded users to query, manipulate, and change data in a relational database.</p>
                <p className='mt-5'>NoSQL databases are non-relational databases that store data in a manner other than the tabular relations used within SQL databases. While SQL databases are best used for structured data, NoSQL databases are suitable for structured, semi-structured, and unstructured data.</p>

                <h1 className=' mt-10 text-xl font-bold'>3.What is express js? What is Nest JS?</h1>
                <p className='mt-5'>Ans: Express is a fast, unopinionated, minimalist web framework for Node.js. It is designed to be flexible and provide a vast range of features. It is easy to use, allowing developers to create web applications quickly without having to be concerned with the complexities of the technology underneath.</p>
                <p className='mt-5'>Nestjs is a full-featured, modular, and platform-independent framework for developing efficient, dependable, and scalable server-side solutions. It is constructed with TypeScript, a superset of JavaScript, and provides a comprehensive range of features. Nestjs is suitable for the development of both small and large-scale applications.</p>

                <h1 className=' mt-10 text-xl font-bold'>4. What is MongoDB aggregate and how does it work?
                </h1>
                <p className='mt-5'>Ans: MongoDB Aggregation uses an aggregate() method to perform the aggregation operations. Basically, this aggregation operation practices data records and provides calculated results. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result. A corresponding of MongoDB Aggregation in SQL is count(*) and with the group by. MongoDB Aggregation is identical to the aggregate function provided in SQL.</p>
            </div>
        </div>
    );
};

export default Blogs;