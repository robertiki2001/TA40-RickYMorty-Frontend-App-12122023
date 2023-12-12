import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters: any = null;

  configUrl = '../assets/database.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.configUrl).subscribe({
      next: (result) => {
        this.characters = result;
        console.log(this.characters)
      },
      error: (error) => {
        console.log('Problemas', error);
        console.log(this.characters)
      }
    });

  }

}