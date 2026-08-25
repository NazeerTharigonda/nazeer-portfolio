import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Portfolio } from '../../core/services/portfolio'; // Adjust path if your service file is named differently

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  portfolio = inject(Portfolio);
}