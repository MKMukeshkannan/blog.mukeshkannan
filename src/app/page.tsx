import MyMarkdown from "@/components/MyMarkdown";
import BlogData from "@/data/blog-id"
import Image from 'next/image'


// (alias) let BlogData: {
//     id: number;
//     heading: string;
//     author: string;
//     createdAt: string;
//     slug: string;
//     likes: number;
//     headerImage: string;
//     synopsis: string;
//     content: {
//         header: string;
//         body: string;
//     }[];
//     comments: {
//         id: number;
//         author: string;
//         comment: string;
//         postedAt: string;
//     }[];
// }

export default function Home() {

  let date = new Date(BlogData.createdAt);
  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

  return (
    <main className="min-h-screen w-full flex items-center justify-center graph-paper md:px-10">
      <section className="max-w-4xl w-full bg-[#fafafa] min-h-screen shadow">
        <div className="p-5 xl:p-10">
          <h1 className="font-mono text-5xl xl:text-6xl font-bold">{BlogData.heading}</h1>
          <p className="pt-3 font-mono text-sm text-[#808080]"> {`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`} - by {BlogData.author}</p>
        </div>
        <Image
          src={BlogData.headerImage}
          width={500}
          height={500}
          alt="header-image"
          className="w-full h-72 object-cover shadow"
        />
        <div className="p-5 xl:p-10 space-y-5">
          
          <div>
            <h1 className="font-mono text-4xl  font-thin">SYNOPSIS</h1>
            <p className="text-md">{BlogData.synopsis}</p>
          </div>

          { BlogData.content.map((val, i) => 
              <div key={i}>
                <h1 className="font-mono text-4xl  font-thin">{val.header}</h1>
                <MyMarkdown>{val.body}</MyMarkdown>
              </div>) }


        </div>


      </section>
    </main>
  );
}
