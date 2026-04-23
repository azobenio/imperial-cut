export type Locale = "fr" | "en" | "nl";

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  nl: "NL",
};

export const translations = {
  // Header
  "nav.services": { fr: "Services", en: "Services", nl: "Diensten" },
  "nav.about": { fr: "A propos", en: "About", nl: "Over ons" },
  "nav.gallery": { fr: "Galerie", en: "Gallery", nl: "Galerij" },
  "nav.book": { fr: "Reserver", en: "Book now", nl: "Reserveren" },

  // Hero
  "hero.badge": { fr: "Ostende, Belgique", en: "Ostend, Belgium", nl: "Oostende, Belgie" },
  "hero.title1": { fr: "Premium Cuts,", en: "Premium Cuts,", nl: "Premium Cuts," },
  "hero.title2": { fr: "Delivered to You.", en: "Delivered to You.", nl: "Bij Jou Thuis." },
  "hero.desc": {
    fr: "Barbershop mobile a Ostende. Coupes hommes & enfants, a domicile ou en studio prive. Experience premium garantie.",
    en: "Mobile barbershop in Ostend. Men's & kids cuts, at home or in a private studio. Premium experience guaranteed.",
    nl: "Mobiele barbershop in Oostende. Kapsels voor mannen & kinderen, aan huis of in een prive studio. Premium ervaring gegarandeerd.",
  },
  "hero.cta": { fr: "Reserver maintenant", en: "Book now", nl: "Nu reserveren" },
  "hero.see_services": { fr: "Voir les services", en: "View services", nl: "Bekijk diensten" },
  "hero.cuts_done": { fr: "+200 coupes realisees", en: "+200 cuts done", nl: "+200 kapsels gedaan" },
  "hero.home_studio": { fr: "A domicile ou studio", en: "Home or studio", nl: "Aan huis of studio" },

  // Services
  "services.tag": { fr: "Services & Tarifs", en: "Services & Pricing", nl: "Diensten & Prijzen" },
  "services.title1": { fr: "Choisis ton ", en: "Choose your ", nl: "Kies je " },
  "services.title2": { fr: "experience", en: "experience", nl: "ervaring" },
  "services.desc": {
    fr: "Chaque coupe est une experience. Choisis ce qui te correspond.",
    en: "Every cut is an experience. Choose what suits you.",
    nl: "Elk kapsel is een ervaring. Kies wat bij je past.",
  },
  "services.popular": { fr: "Populaire", en: "Popular", nl: "Populair" },
  "services.studio": { fr: "Studio", en: "Studio", nl: "Studio" },
  "services.home": { fr: "Domicile", en: "Home", nl: "Aan huis" },

  // Service names
  "svc.coupe-classique": { fr: "Coupe Classique", en: "Classic Cut", nl: "Klassiek Kapsel" },
  "svc.coupe-classique.desc": { fr: "Coupe homme soignee, shampoing inclus", en: "Clean men's cut, shampoo included", nl: "Verzorgd herenkkapsel, shampoo inbegrepen" },
  "svc.fade-degrade": { fr: "Fade / Degrade", en: "Fade", nl: "Fade / Degrade" },
  "svc.fade-degrade.desc": { fr: "Degrade precis, finitions nettes au rasoir", en: "Precise fade, clean razor finish", nl: "Precieze fade, nette afwerking met scheermes" },
  "svc.waves-360": { fr: "Waves 360", en: "360 Waves", nl: "Waves 360" },
  "svc.waves-360.desc": { fr: "Brossage, moisture, sculpt premium waves", en: "Brush, moisture, premium wave sculpting", nl: "Borstelen, verzorging, premium wave sculpting" },
  "svc.barbe-sculpte": { fr: "Barbe Sculptee", en: "Beard Sculpt", nl: "Baard Sculptuur" },
  "svc.barbe-sculpte.desc": { fr: "Taille, sculpture et soin barbe", en: "Trim, sculpt and beard care", nl: "Trimmen, sculpturen en baardverzorging" },
  "svc.combo-coupe-barbe": { fr: "Combo Coupe + Barbe", en: "Cut + Beard Combo", nl: "Combo Kapsel + Baard" },
  "svc.combo-coupe-barbe.desc": { fr: "L'experience complete : coupe + barbe sculptee", en: "The full experience: cut + sculpted beard", nl: "De complete ervaring: kapsel + gesculpteerde baard" },
  "svc.coupe-enfant": { fr: "Coupe Enfant", en: "Kids Cut", nl: "Kinderkkapsel" },
  "svc.coupe-enfant.desc": { fr: "Coupe enfant (< 12 ans), ambiance detendue", en: "Kids cut (< 12 yrs), relaxed atmosphere", nl: "Kinderkkapsel (< 12 jaar), ontspannen sfeer" },
  "svc.combo-parent-enfant": { fr: "Duo Parent + Enfant", en: "Parent + Kid Duo", nl: "Duo Ouder + Kind" },
  "svc.combo-parent-enfant.desc": { fr: "Une coupe pour toi, une pour ton enfant", en: "A cut for you, a cut for your kid", nl: "Een kapsel voor jou, een voor je kind" },

  // Signature names (editorial)
  "sig.fade-degrade": { fr: "The Ostend Fade", en: "The Ostend Fade", nl: "The Ostend Fade" },
  "sig.waves-360": { fr: "The 360 Wave", en: "The 360 Wave", nl: "The 360 Wave" },
  "sig.barbe-sculpte": { fr: "The Sculpt", en: "The Sculpt", nl: "The Sculpt" },
  "sig.combo-coupe-barbe": { fr: "The Full Imperial", en: "The Full Imperial", nl: "The Full Imperial" },
  "sig.coupe-classique": { fr: "The Classic", en: "The Classic", nl: "The Classic" },
  "sig.coupe-enfant": { fr: "Little Imperial", en: "Little Imperial", nl: "Little Imperial" },
  "sig.combo-parent-enfant": { fr: "The Family", en: "The Family", nl: "The Family" },

  // Signature section
  "sig.tag": { fr: "Signature Cuts", en: "Signature Cuts", nl: "Signature Cuts" },
  "sig.title1": { fr: "Sept ", en: "Seven ", nl: "Zeven " },
  "sig.title2": { fr: "signatures.", en: "signatures.", nl: "signatures." },
  "sig.desc": {
    fr: "Pas juste des coupes. Sept signatures pensees pour toi.",
    en: "Not just cuts. Seven signatures crafted for you.",
    nl: "Niet zomaar kapsels. Zeven signatures voor jou.",
  },
  "sig.book": { fr: "Reserver cette signature", en: "Book this signature", nl: "Reserveer deze signature" },
  "sig.from": { fr: "des", en: "from", nl: "vanaf" },

  // About
  "about.tag": { fr: "A propos", en: "About", nl: "Over ons" },
  "about.title1": { fr: "Ton barber,", en: "Your barber,", nl: "Jouw kapper," },
  "about.title2": { fr: "ou tu veux.", en: "wherever you are.", nl: "waar je wilt." },
  "about.desc": {
    fr: "Je suis barber independant base a Ostende. Mon objectif : te proposer une coupe premium sans que tu aies a te deplacer. A domicile ou dans mon studio prive, chaque rendez-vous est une experience personnalisee.",
    en: "I'm an independent barber based in Ostend. My goal: offer you a premium cut without having to travel. At home or in my private studio, every appointment is a personalized experience.",
    nl: "Ik ben een onafhankelijke kapper in Oostende. Mijn doel: je een premium kapsel aanbieden zonder dat je je hoeft te verplaatsen. Aan huis of in mijn prive studio, elke afspraak is een gepersonaliseerde ervaring.",
  },
  "about.feat_home": { fr: "A domicile", en: "At home", nl: "Aan huis" },
  "about.feat_home_desc": { fr: "Je me deplace chez toi dans tout Ostende", en: "I come to you anywhere in Ostend", nl: "Ik kom bij je thuis in heel Oostende" },
  "about.feat_studio": { fr: "Studio prive", en: "Private studio", nl: "Prive studio" },
  "about.feat_studio_desc": { fr: "Ou viens dans mon espace dedie, ambiance VIP", en: "Or come to my dedicated space, VIP atmosphere", nl: "Of kom naar mijn ruimte, VIP sfeer" },
  "about.feat_time": { fr: "Ponctuel", en: "Punctual", nl: "Punctueel" },
  "about.feat_time_desc": { fr: "Respect de ton temps, zero attente", en: "Respect for your time, zero wait", nl: "Respect voor je tijd, geen wachttijd" },
  "about.feat_hygiene": { fr: "Hygiene stricte", en: "Strict hygiene", nl: "Strikte hygiene" },
  "about.feat_hygiene_desc": { fr: "Materiel desinfecte entre chaque client", en: "Equipment sanitized between each client", nl: "Materiaal ontsmet tussen elke klant" },
  "about.badge": { fr: "+200 clients satisfaits", en: "+200 happy clients", nl: "+200 tevreden klanten" },

  // Gallery / Look Book
  "gallery.tag": { fr: "Look Book", en: "Look Book", nl: "Look Book" },
  "gallery.title1": { fr: "Choisis ton ", en: "Pick your ", nl: "Kies jouw " },
  "gallery.title2": { fr: "look.", en: "look.", nl: "look." },
  "gallery.desc": {
    fr: "Pointe la coupe qui te parle. On la fait.",
    en: "Point at the cut that speaks to you. We make it.",
    nl: "Wijs het kapsel aan dat je aanspreekt. Wij maken het.",
  },
  "gallery.more": { fr: "Retrouve plus de photos sur", en: "Find more photos on", nl: "Meer foto's vind je op" },
  "gallery.cuts_count": { fr: "500+ coupes signees", en: "500+ signature cuts", nl: "500+ signature kapsels" },
  "gallery.book_this": { fr: "Je veux cette coupe", en: "I want this cut", nl: "Ik wil dit kapsel" },
  "gallery.close": { fr: "Fermer", en: "Close", nl: "Sluiten" },
  "gallery.prev": { fr: "Precedent", en: "Previous", nl: "Vorige" },
  "gallery.next": { fr: "Suivant", en: "Next", nl: "Volgende" },

  // Filters
  "filter.all": { fr: "Tout", en: "All", nl: "Alles" },
  "filter.fade": { fr: "Fade", en: "Fade", nl: "Fade" },
  "filter.waves": { fr: "Waves", en: "Waves", nl: "Waves" },
  "filter.beard": { fr: "Barbe", en: "Beard", nl: "Baard" },
  "filter.linework": { fr: "Linework", en: "Linework", nl: "Linework" },
  "filter.kids": { fr: "Enfant", en: "Kids", nl: "Kind" },
  "filter.combo": { fr: "Combo", en: "Combo", nl: "Combo" },

  // Book your look
  "byl.title": { fr: "Tu as repere une coupe ?", en: "Got a cut in mind?", nl: "Heb je een kapsel gezien?" },
  "byl.desc": {
    fr: "Pointe-la — le barber saura exactement quoi faire.",
    en: "Point at it — the barber will know exactly what to do.",
    nl: "Wijs het aan — de kapper weet precies wat te doen.",
  },
  "byl.optional": { fr: "Optionnel", en: "Optional", nl: "Optioneel" },
  "byl.selected": { fr: "Inspiration choisie", en: "Inspiration selected", nl: "Inspiratie gekozen" },
  "byl.remove": { fr: "Retirer", en: "Remove", nl: "Verwijderen" },
  "byl.scroll": { fr: "Glisse pour voir plus", en: "Scroll for more", nl: "Scroll voor meer" },

  // CTA
  "cta.title1": { fr: "Pret pour une coupe ", en: "Ready for a ", nl: "Klaar voor een " },
  "cta.title2": { fr: "premium", en: "premium cut", nl: "premium kapsel" },
  "cta.title3": { fr: " ?", en: "?", nl: "?" },
  "cta.desc": {
    fr: "Reserve ton creneau en moins de 30 secondes. Pas de compte requis pour ta premiere reservation.",
    en: "Book your slot in under 30 seconds. No account required for your first booking.",
    nl: "Reserveer je plek in minder dan 30 seconden. Geen account nodig voor je eerste reservering.",
  },

  // Booking
  "book.title1": { fr: "Reserve ta ", en: "Book your ", nl: "Reserveer je " },
  "book.title2": { fr: "coupe", en: "cut", nl: "kapsel" },
  "book.subtitle": { fr: "3 etapes, moins de 30 secondes.", en: "3 steps, under 30 seconds.", nl: "3 stappen, minder dan 30 seconden." },
  "book.step_service": { fr: "Service", en: "Service", nl: "Dienst" },
  "book.step_location": { fr: "Lieu", en: "Location", nl: "Locatie" },
  "book.step_datetime": { fr: "Creneau", en: "Time", nl: "Tijdstip" },
  "book.step_confirm": { fr: "Confirmation", en: "Confirm", nl: "Bevestiging" },
  "book.what_today": { fr: "Que veux-tu aujourd'hui ?", en: "What do you need today?", nl: "Wat wil je vandaag?" },
  "book.choose_service": { fr: "Choisis ton service.", en: "Choose your service.", nl: "Kies je dienst." },
  "book.from": { fr: "des", en: "from", nl: "vanaf" },
  "book.continue": { fr: "Continuer", en: "Continue", nl: "Doorgaan" },
  "book.back": { fr: "Retour", en: "Back", nl: "Terug" },
  "book.where": { fr: "Ou veux-tu te faire coiffer ?", en: "Where do you want your cut?", nl: "Waar wil je geknipt worden?" },
  "book.choose_location": { fr: "Choisis le lieu de ta coupe.", en: "Choose your cut location.", nl: "Kies de locatie van je kapsel." },
  "book.studio_title": { fr: "Studio prive", en: "Private studio", nl: "Prive studio" },
  "book.studio_desc": { fr: "Viens dans mon espace dedie a Ostende. Ambiance premium.", en: "Come to my dedicated space in Ostend. Premium atmosphere.", nl: "Kom naar mijn ruimte in Oostende. Premium sfeer." },
  "book.best_price": { fr: "Meilleur prix", en: "Best price", nl: "Beste prijs" },
  "book.home_title": { fr: "A domicile", en: "At home", nl: "Aan huis" },
  "book.home_desc": { fr: "Je me deplace chez toi. Gratuit dans Ostende centre (< 5 km).", en: "I come to you. Free within Ostend center (< 5 km).", nl: "Ik kom bij je thuis. Gratis binnen Oostende centrum (< 5 km)." },
  "book.extra_outside": { fr: "+5 \u20AC hors centre", en: "+\u20AC5 outside center", nl: "+\u20AC5 buiten centrum" },
  "book.your_address": { fr: "Ton adresse", en: "Your address", nl: "Je adres" },
  "book.address_placeholder": { fr: "Rue, numero, code postal, Ostende", en: "Street, number, postal code, Ostend", nl: "Straat, nummer, postcode, Oostende" },
  "book.when": { fr: "Quand es-tu disponible ?", en: "When are you available?", nl: "Wanneer ben je beschikbaar?" },
  "book.choose_datetime": { fr: "Choisis une date et un creneau.", en: "Choose a date and time slot.", nl: "Kies een datum en tijdslot." },
  "book.available_slots": { fr: "Creneaux disponibles", en: "Available slots", nl: "Beschikbare tijdsloten" },
  "book.today": { fr: "Auj.", en: "Today", nl: "Vand." },
  "book.tomorrow": { fr: "Demain", en: "Tmrw", nl: "Morgen" },
  "book.confirm_title": { fr: "Confirme ta reservation", en: "Confirm your booking", nl: "Bevestig je reservering" },
  "book.confirm_desc": { fr: "Verifie les details et laisse tes coordonnees.", en: "Check the details and leave your contact info.", nl: "Controleer de details en laat je contactgegevens achter." },
  "book.service_label": { fr: "Service", en: "Service", nl: "Dienst" },
  "book.location_label": { fr: "Lieu", en: "Location", nl: "Locatie" },
  "book.date_label": { fr: "Date", en: "Date", nl: "Datum" },
  "book.total": { fr: "Total", en: "Total", nl: "Totaal" },
  "book.your_name": { fr: "Ton prenom", en: "Your first name", nl: "Je voornaam" },
  "book.name_placeholder": { fr: "Ex: Jean Marie", en: "E.g. John", nl: "Bijv. Jan" },
  "book.your_phone": { fr: "Ton numero (WhatsApp)", en: "Your number (WhatsApp)", nl: "Je nummer (WhatsApp)" },
  "book.confirm_btn": { fr: "Confirmer", en: "Confirm", nl: "Bevestigen" },
  "book.success_title": { fr: "Reservation confirmee !", en: "Booking confirmed!", nl: "Reservering bevestigd!" },
  "book.success_msg": { fr: "Tu recevras un message de confirmation par WhatsApp.", en: "You'll receive a confirmation via WhatsApp.", nl: "Je ontvangt een bevestiging via WhatsApp." },
  "book.back_home": { fr: "Retour a l'accueil", en: "Back to home", nl: "Terug naar home" },

  // Footer
  "footer.tagline1": { fr: "Coupes premium hommes & enfants.", en: "Premium men's & kids cuts.", nl: "Premium heren- & kinderkapsels." },
  "footer.tagline2": { fr: "A domicile ou en studio prive.", en: "At home or in private studio.", nl: "Aan huis of in prive studio." },
  "footer.contact": { fr: "Contact", en: "Contact", nl: "Contact" },
  "footer.nav": { fr: "Navigation", en: "Navigation", nl: "Navigatie" },
} as const;

export type TranslationKey = keyof typeof translations;
