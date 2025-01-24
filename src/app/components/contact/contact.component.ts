import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';  // Assurez-vous que NgForm est importé

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // Fonction appelée lors de la soumission du formulaire
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const { name, email, message } = contactForm.value;
      const whatsappMessage = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;
      this.openWhatsApp(whatsappMessage);
    }
  }

  // Fonction qui ouvre WhatsApp avec le message pré-rempli
  openWhatsApp(message: string) {
    const phoneNumber = '+22871160021'; // Votre numéro WhatsApp au format international
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
