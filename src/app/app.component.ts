import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: `<h1>Pokémons</h1>`,
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[];

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
  }
}
