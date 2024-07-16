import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';

@Component({
  selector: 'app-teacher-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-report.component.html',
  styleUrl: './teacher-report.component.css'
})
export class TeacherReportComponent {
constructor(public techer:FunTecherService){}




}
