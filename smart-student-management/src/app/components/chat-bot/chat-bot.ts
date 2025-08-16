import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatbotService } from '../../services/chatbot';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './chat-bot.html',
  styleUrl: './chat-bot.scss'
})
export class ChatBot implements AfterViewChecked {
    @ViewChild('messageContainer') private messageContainer!: ElementRef;
    
    messages: Array<{type: 'user' | 'bot', text: string, images?: string[]}> = [];
    userInput: string = '';
    selectedImages: string[] = [];
    
    constructor(private chatbotService: ChatbotService) {}
    
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    
    private scrollToBottom(): void {
        try {
            this.messageContainer.nativeElement.scrollTop = 
                this.messageContainer.nativeElement.scrollHeight;
        } catch(err) {}
    }
    
    onFileSelected(event: any) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.selectedImages.push(e.target.result);
            };
            reader.readAsDataURL(files[i]);
        }
    }
    
    removeImage(index: number) {
        this.selectedImages.splice(index, 1);
    }
    
    async sendMessage() {
        if (!this.userInput && this.selectedImages.length === 0) return;
        
        const userMessage = {
            type: 'user' as const,
            text: this.userInput,
            images: [...this.selectedImages]
        };
        
        this.messages.push(userMessage);
        
        const payload = {
            prompt: this.userInput,
            images: this.selectedImages
        };
        
        this.userInput = '';
        this.selectedImages = [];
        
        try {
            const response = await this.chatbotService.sendMessage(userMessage.text, this.selectedImages)
                .toPromise();
                
            if (response && typeof response === 'object' && 'output' in response) {
                this.messages.push({
                    type: 'bot',
                    text: response['output'] as string
                });
            }
        } catch (error) {
            console.error('Error getting chatbot response:', error);
            this.messages.push({
                type: 'bot',
                text: 'Sorry, I encountered an error. Please try again.'
            });
        }
    }
}
