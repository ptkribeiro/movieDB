import { Component } from '@angular/core';
import { MoviesService} from '../theMovieDB/movies.service';
import { LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [MoviesService]
})
export class Tab3Page {
  private page=1

  constructor(public movieService: MoviesService, public loadingController: LoadingController) {}

  public lista_filmes = new Array<any>();

  ionViewDidEnter(){
    this.carregando();
    this.carregaPagina();
  }
  

  carregaPagina(){
    this.movieService.getNowPlaying(this.page, 'pt-BR').subscribe(
      data => {
        const response = (data as any);
        if(this.page==1){
          this.lista_filmes = response.results;
        }else {
          this.lista_filmes = this.lista_filmes.concat(response.results);
        }
        console.log(this.lista_filmes);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  async carregando(){
    const loading = await this.loadingController.create({
      message: 'Carregando filmes',
      duration: 2000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
  }

  doRefresh(event){
    this.page = 1;
    this.carregaPagina();
    console.log('Iniciando operação assíncrona');

    setTimeout(() => {
      event.target.complete();
      console.log('Finalizando refresh');
    }, 500);
  }

  loadData(event){
    this.page++;
    this.carregaPagina();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
