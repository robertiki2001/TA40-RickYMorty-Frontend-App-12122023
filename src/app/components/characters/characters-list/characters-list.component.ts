import { Component } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';
import { CharacterCardComponent } from '../../../components/characters/character-card/character-card.component';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent, CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit{

  characters: any;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe({
      next: (result) => {
        this.characters = result;
      },
      error: (error) => {
        console.log("Problemas", error);
      }
    });
  }

}
