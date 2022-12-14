import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: `<h1>Pokémons</h1>
    <input #box (keyup)="onKey(box.value)" />
    <p>{{ values }}</p> `,
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[];
  values: string;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  onKey(value: string) {
    this.values = value;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur ${pokemon.name}`);
  }
}
