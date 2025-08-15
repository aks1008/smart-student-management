import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
    constructor(private httpClient: HttpClient) {}

    sendMessage(prompt: string, images: string[] = []) {
        return this.httpClient.post('http://localhost:8000/api/chatbot/answer', {
            prompt,
            images
        });
    }
}
