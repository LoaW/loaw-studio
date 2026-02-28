import { Component, signal } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Showcase } from './sections/showcase/showcase';
import { Process } from './sections/process/process';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Showcase, Process, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loaw-studio');
}
