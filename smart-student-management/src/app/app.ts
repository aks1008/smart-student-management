import { Component, AfterViewInit } from '@angular/core';
import { Header } from './components/header/header';
import { StudentGrid } from './components/student-grid/student-grid';
import { ChatBot } from './components/chat-bot/chat-bot';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, StudentGrid, ChatBot],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  title = 'smart-student-management';

  ngAfterViewInit(): void {
    setTimeout(() => {
      const resizer = document.getElementById('resizer');
      const left = document.getElementById('resizable-student-grid');
      const right = document.getElementById('resizable-chat-bot');
      const container = document.querySelector('.resizable-main-content');
      if (!resizer || !left || !right || !container) return;

      let isDragging = false;

      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        const containerRect = container.getBoundingClientRect();
        let x = e.clientX - containerRect.left;
        const min = 200;
        const max = containerRect.width - 200;
        if (x < min) x = min;
        if (x > max) x = max;
        const leftPercent = (x / containerRect.width) * 100;
        const rightPercent = 100 - leftPercent;
        left.style.width = leftPercent + '%';
        right.style.width = rightPercent + '%';
      };

      const onPointerUp = () => {
        if (isDragging) {
          isDragging = false;
          document.body.style.cursor = '';
          window.removeEventListener('pointermove', onPointerMove);
          window.removeEventListener('pointerup', onPointerUp);
        }
      };

      resizer.addEventListener('pointerdown', (e: PointerEvent) => {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
        e.preventDefault();
      });
    }, 0);
  }
}
