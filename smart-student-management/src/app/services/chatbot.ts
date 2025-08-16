import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
    constructor(private httpClient: HttpClient) {}

    sendMessage(prompt: string, images: string[] = []) {
        const req =  { "query": prompt }
        let test = this.httpClient.post('http://127.0.0.1:5005/api/chatbot/', req, { headers: { 'Content-Type': 'application/json' } });
        return test;
    }
}
