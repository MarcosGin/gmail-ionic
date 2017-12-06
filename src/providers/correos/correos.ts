import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CorreosProvider {

  lista = [
    {
      name: 'Marcos Gin',
      email: 'marcosgin291@gmail.com',
      reason: 'Apunte de química',
      message:'Necesito que me reenvies el apunte de quimica que lo perdí.',
      date: 'Martes, Diciembre 7 2017'
    },
    {
      name: 'Andres Alvarez',
      email: 'andres.alvarez@google.com',
      reason: 'Recursos humanos google',
      message: 'Hola recibimos tu cv, y nos gustaria hablar contigo porque nos pareces apto para el puesto.',
      date: 'Viernes, Mayo 30 2017'
    },
    {
      name: 'Felipe Flores',
      email: 'fflores@twitter.com',
      reason: 'Party in my house',
      message: 'You are invited to my party today.',
      date: 'Sábado, Marzo 18 2017'
    }
  ];

  enviados = [];

}
