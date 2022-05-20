import Heading from "./Heading";

const PostInfo = ({ post }) => {
    const {title, body} = post || {};

    if(!post) {
        return <Heading tag='h3' text='Empty post' />
    }

    return (
        <>
            <Heading tag='h3' text={title} />
           <div>{body}</div>
        </>
    )
};
   
export default PostInfo;