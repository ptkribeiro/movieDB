import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private chave="23da55870598661f71fb1f6d7b054c43";
  private caminhoPadrao = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) { }

  public getPopularMovies(page=1, language="pt-BR"){
    let filmes= `${this.caminhoPadrao}/movie/popular?api_key=${this.chave}&language=${language}&page=${page}`
    return this.http.get(filmes);
  }

  public getNowPlaying(page=1, language="pt-BR"){
    let filmes = `${this.caminhoPadrao}/movie/now_playing?api_key=${this.chave}&language=${language}&page=${page}&region=BR`
    return this.http.get(filmes)

  }
}
