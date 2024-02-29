import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.css'
})
export class YoutubePlayerComponent {
id:string="https://youtu.be/rc61YHl1PFY?si=IOByQg6PyjlyxqAf"
}
