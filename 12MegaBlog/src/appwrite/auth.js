import { Client, Account, ID } from 'appwrite';
import  conf  from '../conf/conf';
 
export class AuthSevice {
  client = new Client();
  account;

  constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);    
  }

  async createAccount({email, password, name}){
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);

      if (userAccount) {
        this.login({email, password});
        
      } else {
        return userAccount;
        
      }
  
    } catch (error) {
      throw error;
      
    }
    
  }


  async login({email,password}){
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
      
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite Service Error:: getCurrentUser :: Error ', error);
    }

    return null;
  }
  async logout(){
    try {
      await this.account.deleteSessions();
      console.log("logout successfully");
    } catch (error) {
      console.log('Appwrite Service Error:: logout ::error',error);
      
    }
  }
}

const authService = new AuthSevice();

export default authService;