import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css'],
 
})
export class RouletteComponent {
  resolutions: string[] = [
    "Spend time with family",
    "Contribute to an open-source project",
    "Complete a technology certification",
    "Master a new software development framework",
    "Attend at least two tech conferences or meetups",
    "Improve coding practices and embrace best practices",
    "Learn a new programming language",
    "Collaborate on a cross-functional project",
    "Create and maintain a tech blog or portfolio",
    "o9tel ezzom la yo9tlek 9ablo",
    "Practice mindfulness meditation daily",
    "Volunteer for a mental health organization",
    "Learn and apply stress management techniques",
    "Practice Self-Care",
    "Develop Cultural Competence",
    "Practice Gratitude Daily",
    "Improve Note-Taking Skills",
    "Practice Empathy Daily",
    "Learn a musical instrument",
    "Complete a physical fitness challenge",
    "barra etrena",
    "Explore a new genre of music or art",
    "Plant a garden or care for indoor plants",
    "Learn basic self-defense techniques",
    "Lose weight",
    "Foster a sense of curiosity and wonder",
    "Celebrate achievements, big or small, throughout the year",
    "Connect with a mentor in your field",
    "be a mentor, guide others",
    "Develop a morning routine for productivity",
    "Take a spontaneous day trip",
    "Get Certifications",
    "Attend a live sports event",
    "Learn a practical life skill",
    "Learn a form of dance",
    "Take up a creative writing project",
    "have fun",
    "Connect with old friends or family members"
  ];
  translateY: number = 0;
  spinning: boolean = false;
  selectedResolution : string =''
  message : string =''
  startSlotMachine() {
    if (!this.spinning) {
      this.spinning = true;
      this.animateSlot();
    }
  }
  getCurrentWord(): string {
    const currentIndex = Math.abs(Math.round(this.translateY / 30) % this.resolutions.length);
    return this.resolutions[currentIndex];
  }

  animateSlot() {
    var acceleration = 50;
    const decelerationRate = 0.99; 

    const animate = () => {
      this.translateY -= acceleration;
      acceleration *= decelerationRate;

      if (acceleration > 0.1) {
        requestAnimationFrame(animate);
      } else {
        this.finalizeSlot();
      }
    };

    requestAnimationFrame(animate);
  }

  finalizeSlot() {
    const randomIndex = Math.floor(Math.random() * this.resolutions.length);
    const targetPosition = randomIndex * 20; // 30 is the height of each word

    const animateFinal = () => {
      if (this.translateY > -targetPosition) {
        this.translateY -= 10;
        requestAnimationFrame(animateFinal);
      } else {
        this.translateY = -targetPosition;
        this.spinning = false;
        this.selectedResolution = this.getCurrentWord();
        this.message = this.selectedResolution;
      }
    };

    requestAnimationFrame(animateFinal);
  }

  
}
