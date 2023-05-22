import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact.mobile.css']
})
export class ContactComponent implements OnInit {
  name!: string;
  contactInfo!: string;
  message!: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    form.controls['name'].markAsTouched(); // Mark 'name' as touched
    form.controls['contactInfo'].markAsTouched(); // Mark 'contactInfo' as touched
    form.controls['message'].markAsTouched(); // Mark 'message' as touched

    if (form.valid) {
      const payload = {
        content: `Name: ${this.name}\nContact Info: ${this.contactInfo}\nMessage: ${this.message}`
      };
      this.http.post(environment.discordWebhook, payload).subscribe(
        response => {
          form.reset();
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}
