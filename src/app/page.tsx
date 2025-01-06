import Herosection from "@/components/Herosection";
import { LayoutGrids } from "@/components/grid-layout";
import {client} from "@/sanity/lib/client";
import Image from "next/image";
import Link from 'next/link';
import { IoStar } from "react-icons/io5";
import {urlFor} from "@/sanity/lib/image";

export default async function Home() {
   interface Post {
      _id:string,
      postTitle:string,
      postImage:string,
      publishDate:string,
      blogRaiting:string,
      diseaseIntroduction:string,
      causes:string,
      DiseaseImpact:string,
      totalReportedCases:string,
      severeCases:string,
      countrieswithActiveTransmission:string,
      globalRiskAssessment:string,
      symptoms:string,
      precautions:string,
      conclusion:string
    }
      const postdata:Post[] = await client.fetch(`
      *[_type == "post"]{
      _id,
      postTitle,
      postImage,
      publishDate,
      blogRaiting,
      diseaseIntroduction,
      causes,
      DiseaseImpact,
      totalReportedCases,
      severeCases,
      deaths,
      countrieswithActiveTransmission,
      globalRiskAssessment,
      symptoms,
      precautions,
      conclusion
  } `)
  console.log(postdata)
  return (
    <main>
      <section>
        <Herosection />
        <LayoutGrids />
      </section>

       <div className='h-[200px] bg-cyan-200 flex justify-center items-center mt-11'>
        <h1 className='text-[35px] font-bold'>About us</h1>
      </div>
      <section className='grid grid-cols-3 grid-rows-1 gap-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 msm:grid-cols-1 msm:grid-rows-3 ssm:grid-cols-1 ssm:grid-rows-3 xsm:grid-cols-1 xsm:grid-rows-3'>
        {postdata.slice(0,3).map((post)=>(
            <div className='flex justify-center items-center ' key={post.postTitle}>
                <div className='w-[280px] flex justify-center gap-3 items-center flex-col shadow-md'>
                    <p className='text-sm text-blue-500'>{`published on: ${post.publishDate}`}</p>
                    <Image height={300} src={urlFor(post.postImage).url()} width={280} alt={post.postTitle}></Image>
                    <h1 className='text-[20px] font-bold'>{post.postTitle}</h1>
                    <p className='flex justify-center items-center'><IoStar className='text-yellow-400'/>{post.blogRaiting}</p>
                    <p className='text-center'>{`${post.diseaseIntroduction.slice(0,250)}...`}</p> 
                    <Link href={`/latestpost/${post._id}`} className='h-[35px] bg-black text-white w-[100px] rounded-lg flex justify-center items-center'>Read more</Link>
                </div>
            </div>
        ))}
      </section>
    </main>
  
  );
}
