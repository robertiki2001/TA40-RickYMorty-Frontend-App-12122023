import { Component } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';
import { CharacterCardComponent } from '../../../components/characters/character-card/character-card.component';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit{

  personajes: any;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe({
      next: (result) => {
        this.personajes = result;
      },
      error: (error) => {
        console.log("Problemas", error);
      }
    });
  }

}
