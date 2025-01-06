"use client"
import React from 'react';
import {client} from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";
import { groq } from 'next-sanity';
import Loader from '@/components/Loader';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import {Table,TableHeader,TableBody,TableFooter,TableHead,TableRow,TableCell,TableCaption} from "@/components/ui/table"

interface PageProps{
    params:Promise<{
        post:string
    }>
};
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
    deaths:string,
    precautions:string,
    conclusion:string
  };
  function ProductPage({ params }: PageProps) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [post, setPost] = useState<Post | null>(null)
    useEffect(() => {
      
      const fetchPost = async () => {
        try {
          setLoading(true)
          const resolvedParams = await params
          const postId = resolvedParams.post
          if (!postId) {
            setError('Invalid product ID')
            return
          }
  
          const fetchedPost = await client.fetch<Post>(
            groq`*[_type == "post" && _id == $postId][0]`,
            { postId }
          )
          if (!fetchedPost) {
            setError('Product not found')
            return
          }
          setPost(fetchedPost)
          setError(null)
          
        } catch (error) {
          console.error('Error:', error)
          setError('Error loading product')
        } finally {
          setLoading(false)
        }
      }
      
      fetchPost()
  
    }, [params])
  
    if (loading) {
      return <Loader />
    }
  
    if (error) {
      return <div className="text-red-500">{error}</div>
    }
  
    if (!post) {
      return null
    }
  
    return (
      <section className="overflow-x-hidden">
        <span className="m-5">
          <h1 className="text-[35px] font-bold ml-5 ">
            Get to know about {post.postTitle}
          </h1>
          <Image
            height={600}
            width={600}
            src={urlFor(post.postImage).url()}
            alt={post.postTitle}
            className='mt-3'
          />
        </span>
        <div className="m-5">
          <h1 className="text-[35px] font-bold">Introduction</h1>
          {post.diseaseIntroduction}
        </div>
        <div className="m-5">
          <h1 className="text-[35px] font-bold">Causes</h1>
          <p>{post.causes}</p>
        </div>
        <div className="m-5">
          <h1 className="text-[35px] font-bold">{post.postTitle} Impact</h1>
          <p>{post.DiseaseImpact}</p>
        </div>
        <Table>
          <TableCaption>
            Impact of {post.postTitle} in the recent years
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Disease status</TableHead>
              <TableHead className="w-[100px]">Disease Impact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Total reported cases</TableCell>
              <TableCell>{post.totalReportedCases}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>severe Cases</TableCell>
              <TableCell>{post.severeCases}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>countries with Active Transmission</TableCell>
              <TableCell>{post.countrieswithActiveTransmission}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Global risk Assessment</TableCell>
              <TableCell>{post.globalRiskAssessment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Deaths</TableCell>
              <TableCell>{post.deaths}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="m-5">
          <h1 className="text-[35px] font-bold">{post.postTitle} symptoms</h1>
          <p>{post.symptoms}</p>
        </div>
        <div className="m-5">
          <h1 className="text-[35px] font-bold">{post.postTitle} precautions</h1>
          <p>{post.precautions}</p>
        </div>
        <div className="m-5">
          <h1 className="text-[35px] font-bold">{post.postTitle} conclusion</h1>
          <p>{post.conclusion}</p>
        </div>
      </section>
    );
  }
  export default ProductPage;
  
  