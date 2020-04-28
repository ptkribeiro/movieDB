import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController} from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides, {static: false}) slides: IonSlides;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    private loadingController: LoadingController,
    public keyboard: Keyboard,
    private toastController: ToastController,
    private authService: AuthService,
    public router: Router
    
    ){  }

  ngOnInit() {
  }

  segmentChanged(event: any){
    if(event.detail.value === "login"){
      this.slides.slidePrev();
    }else{
      this.slides.slideNext();
    }
  }

  async login(){
    await this.presentLoading();
    try{
      await this.authService.login(this.userLogin);
    } catch(error){
      console.log(error);
      this.presentToast(error.message);
    } finally{
      this.loading.dismiss();
      this.router.navigate(['tabs/tabs/tab1']);
    }

  }

  async register(){
    await this.presentLoading();
    try{
      await this.authService.register(this.userRegister);
    } catch(error){
      console.log(error);
      this.presentToast(error.message);
    } finally{
      this.loading.dismiss();
      this.router.navigate(['tabs/tabs/tab1']);
    }
    
  }

  async presentLoading(){
    this.loading = await this.loadingController.create({message: 'Por favor, aguarde...'});
    return this.loading.present();
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
