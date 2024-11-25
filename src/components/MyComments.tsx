import MyMarkdown from "./MyMarkdown";

interface props {
  id: number;
  author: string;
  comment: string;
  postedAt: string;
  replies: {
    id: number;
    author: string;
    comment: string;
    postedAt: string;
  }[];
}

export default function CommentsBlock({ id, author, comment, postedAt, replies, }: props) {
  const date = new Date(postedAt);
  return (
    <div className="order p-2 mb-5" key={id}>
      <div className="flex space-x-3 itemscenter">
        <div className="h-12 w-12 bg-black rounded-full"></div>
        <div className="flex flex-col">
          <h1 className="text-xl">{author}</h1>
          <p className="text-xs text-[#808080]">
            {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
          </p>
          <MyMarkdown>{comment}</MyMarkdown>
        </div>
      </div>

      {replies.map((val, i) => {
        const date = new Date(postedAt);

        return (
          <div className="border-l p-2 ml-12" key={i}>
            <div className="flex space-x-3 itemscenter">
              <div className="h-12 w-12 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <h1 className="text-xl">{author}</h1>
                <p className="text-xs text-[#808080]">
                  {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
                </p>
                <MyMarkdown>{val.comment}</MyMarkdown>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
