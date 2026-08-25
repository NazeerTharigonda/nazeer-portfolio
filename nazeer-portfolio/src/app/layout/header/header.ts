import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Add this import

@Component({
  selector: 'app-header',
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}