import conf from '../conf/conf';
import { Client, Databases, Storage, Query,ID } from 'appwrite'

export class Service {
   client = new Client();
   databases;
   bucket;

   constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
   }

   async createPost({title, slug, content, featuredImage,status,userId}){
    console.log(`from createPost config.js file title: ${title} slug: ${slug} content: ${content}, featuredImage: ${featuredImage} status: ${status} userId: ${userId}`);
    try {
      return this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId, 
        slug,
        {title, content, featuredImage, status, userId}
        );
      
    } catch (error) {
      console.log('Appwrite Serice::CreatePost:: error: ' , error);
    }
   
   }

   async updatePost(slug,{title,  content, featuredImage,status}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {title, content, featuredImage, status}
      );
      
    } catch (error) {
      console.log('Appwrite Serice::UpdatePost:: error: ' , error);
    }
   }

   async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
        );
      return true;  
    } catch (error) {
      console.log('Appwrite Serice::DeletePost::', error);
      return false; 
    }
   }

   async getPost(slug){
    try {
      return this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log('Appwrite Serice::GetPost::', error);
      return false; 
      
    }
   }

   async getPosts(queries = [Query.equal("status", "active")]){//status:key active:value pairs input to query
    try {
      return this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log('Appwrite Serice::GetAllPost::', error);
      return false; 
      
    }
   }

   // fileUpload Service

   async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite Serice::fileUpload::', error);
      return false;
    }
   }

   async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId);
      return true
    } catch (error) {
      console.log('Appwrite Serice::deleteFile::', error);
      return false;
    }
   }

   getFilePreview(fileId){
    try {
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId);
      
    } catch (error) {
      console.log('Appwrite Serice::getFilePreview::', error );
      
    }
   }
}


const appwriteService = new Service();
export default appwriteService;