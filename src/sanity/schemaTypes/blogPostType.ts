import { defineField,defineType } from "sanity"; 

const postType = defineType({
    title:"blogPost",
    name:"post",
    type:"document",
    fields:[
        defineField({
            title:"post title",
            name:"postTitle",
            type:"string"
        }),
        defineField({
            title:"post Images",
            name:"postImage",
            type:"image"
        }),
        defineField({
            title:"Publish Date",
            name:"publishDate",
            type:"date"
        }),
        defineField({
            title:"blog owner image",
            name:"blogOwnerImage",
            type:"image",
          }),
          defineField({
            title:"Owner Name",
            name:"ownername",
            type:"string"
          }),
          defineField({
            title:"blog raiting",
            name:"blogRaiting",
            type:"number"
          }),
        defineField({
            title:"Disease Intoduction",
            name:"diseaseIntroduction",
            type:"text"
        }),
        defineField({
            title:"Causes",
            name:"causes",
            type:"text"
        }),
        defineField({
            title:"Disease Impact",
            name:"DiseaseImpact",
            type:"text"
        }),
        defineField({
            title:"Total Reported Cases",
            name:"totalReportedCases",
            type:"string"
        }),
        defineField({
            title:"Severe Cases",
            name:"severeCases",
            type:"string"
        }),
        defineField({
            title:"Deaths",
            name:"deaths",
            type:"string"
        }),
        defineField({
            title:"Countries with Active Transmission",
            name:"countrieswithActiveTransmission",
            type:"string"
        }),
        defineField({
            title:"Global Risk Assessment",
            name:"globalRiskAssessment",
            type:"string"
        }),
        defineField({
            title:"Symptoms",
            name:"symptoms",
            type:"text"
        }),
        defineField({
            title:"precautions",
            name:"precautions",
            type:"text"
        }),
        defineField({
            title:"Conclusion",
            name:"conclusion",
            type:"text"
        }),
    ]
})
export default postType;