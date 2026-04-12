// ═══════════════════════════════════════
// DONNÉES
// ═══════════════════════════════════════
// Couleurs par catégorie thématique
const TASK_CAT_COLORS = {
  "Budget":       { bg:"#E3F2FD", color:"#1565C0" },
  "Lieu":         { bg:"#F3E5F5", color:"#7B1FA2" },
  "Cérémonie":    { bg:"#FCE4EC", color:"#C2185B" },
  "Prestataires": { bg:"#FFF3E0", color:"#E65100" },
  "Invités":      { bg:"#E8F5E9", color:"#2E7D32" },
  "Tenue":        { bg:"#FFFDE7", color:"#F57F17" },
  "Décoration":   { bg:"#FBE9E7", color:"#BF360C" },
  "Musique":      { bg:"#E1F5FE", color:"#0277BD" },
  "Animation":    { bg:"#F0F4C3", color:"#558B2F" },
  "Papeterie":    { bg:"#E0F2F1", color:"#00695C" },
  "Logistique":   { bg:"#EFEBE9", color:"#4E342E" },
  "Bien-être":    { bg:"#FCE4EC", color:"#AD1457" },
  "Après":        { bg:"#E8EAF6", color:"#283593" },
};

const CHECKLIST_DATA = [
  { cat: "15+ mois avant", tasks: [
    { t: "Définir le budget global", r: "Keziah & Briac", c: "Budget" },
    { t: "Choisir la date précise en juillet 2027", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Visiter et confirmer le Château de Jallanges", r: "Keziah, Briac & Estelle", c: "Lieu" },
    { t: "Signer le contrat du château", r: "Keziah & Briac", c: "Lieu" },
    { t: "Établir la liste d'invités préliminaire", r: "Keziah & Briac", c: "Invités" },
    { t: "Réserver le traiteur", r: "Keziah & Briac", c: "Prestataires" },
    { t: "Réserver le photographe", r: "Keziah & Briac", c: "Prestataires" },
    { t: "Réserver le vidéaste", r: "Keziah & Briac", c: "Prestataires" },
    { t: "Premiers essayages de robes de mariée", r: "Keziah & Estelle", c: "Tenue" },
    { t: "Ouvrir la liste de mariage (cadeaux)", r: "Keziah & Briac", c: "Invités" },
    { t: "Réfléchir au thème et style du mariage", r: "Keziah & Briac", c: "Décoration" },
  ]},
  { cat: "12 mois avant", tasks: [
    { t: "Envoyer les Save the Date", r: "Keziah & Briac", c: "Papeterie" },
    { t: "Confirmer les témoins officiels", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Contacter la mairie pour le dossier civil", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Contacter le curé / pasteur et réserver l'église", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "S'inscrire aux réunions de préparation au mariage (église)", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Réserver le DJ / groupe musical", r: "Keziah & Briac", c: "Musique" },
    { t: "Commander la robe de mariée", r: "Keziah", c: "Tenue" },
    { t: "Choisir et commander le costume du marié", r: "Briac", c: "Tenue" },
    { t: "Bloquer des chambres pour les invités", r: "Estelle", c: "Logistique" },
    { t: "Réserver le fleuriste", r: "Keziah & Estelle", c: "Prestataires" },
    { t: "Réserver coiffeur & maquilleur", r: "Keziah", c: "Bien-être" },
    { t: "Choisir les tenues des demoiselles d'honneur", r: "Keziah & Estelle", c: "Tenue" },
    { t: "Choisir les tenues des garçons d'honneur", r: "Briac", c: "Tenue" },
    { t: "Choisir les tenues des enfants d'honneur", r: "Keziah & Briac", c: "Tenue" },
  ]},
  { cat: "9 mois avant", tasks: [
    { t: "Définir le style déco (Pinterest avec le château)", r: "Keziah & Estelle", c: "Décoration" },
    { t: "Visiter Jallanges avec le fleuriste", r: "Keziah & fleuriste", c: "Décoration" },
    { t: "Assister aux sessions de préparation au mariage à l'église", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Choisir les lectures bibliques et les chants pour la messe", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Commencer la planification lune de miel", r: "Keziah & Briac", c: "Logistique" },
    { t: "Choisir le gâteau / pièce montée", r: "Keziah & Briac", c: "Prestataires" },
    { t: "Contacter les hôtels proches pour un tarif groupe", r: "Estelle", c: "Logistique" },
    { t: "Décider si on organise une navette de soir", r: "Keziah & Briac", c: "Logistique" },
    { t: "Décider si on fait appel à des babysitters pour le jour J", r: "Keziah & Briac", c: "Logistique" },
    { t: "Planifier les navettes depuis Tours (arrivée au château)", r: "Estelle", c: "Logistique" },
    { t: "Commander les alliances + gravures", r: "Keziah & Briac", c: "Tenue" },
    { t: "Essayages intermédiaires de la robe de mariée", r: "Keziah", c: "Tenue" },
    { t: "Choisir les accessoires de la mariée (chaussures, bijoux, voile)", r: "Keziah & Estelle", c: "Tenue" },
    { t: "Planifier les animations et jeux pour les invités", r: "Estelle", c: "Animation" },
    { t: "Acheter livre d'or et urne à cadeaux", r: "Estelle", c: "Décoration" },
  ]},
  { cat: "6 mois avant", tasks: [
    { t: "Envoyer les faire-part officiels", r: "Keziah & Briac", c: "Papeterie" },
    { t: "Finaliser le menu avec le traiteur", r: "Keziah & Briac", c: "Prestataires" },
    { t: "Déposer le dossier civil à la mairie", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Choisir les alliances (confirmation modèle)", r: "Keziah & Briac", c: "Tenue" },
    { t: "Réserver les billets de lune de miel", r: "Keziah & Briac", c: "Logistique" },
    { t: "Démarrer le plan de table", r: "Estelle", c: "Invités" },
    { t: "Réserver la voiture des mariés", r: "Briac / famille", c: "Logistique" },
    { t: "Confirmer l'accord tarif groupe avec les hôtels et communiquer aux invités", r: "Estelle", c: "Logistique" },
    { t: "Réserver la navette de soir si décidée", r: "Estelle", c: "Logistique" },
    { t: "Réserver la/les babysitters si décidé", r: "Estelle", c: "Logistique" },
    { t: "Réserver l'hôtel pour la nuit de noces", r: "Keziah & Briac", c: "Logistique" },
    { t: "Commander les cadeaux invités / faveurs", r: "Keziah & Briac", c: "Invités" },
    { t: "Prendre RDV essais coiffure et maquillage", r: "Keziah", c: "Bien-être" },
    { t: "Planifier la playlist musicale de la soirée", r: "Keziah & Briac", c: "Musique" },
  ]},
  { cat: "3 mois avant", tasks: [
    { t: "Confirmer TOUS les prestataires par écrit", r: "Estelle", c: "Prestataires" },
    { t: "Finaliser le plan de table", r: "Estelle", c: "Invités" },
    { t: "Préparer le livret de cérémonie (chants, lectures)", r: "Keziah & Estelle", c: "Cérémonie" },
    { t: "Finaliser les chants et la musique liturgique avec l'église", r: "Keziah & Briac", c: "Cérémonie" },
    { t: "Organiser l'EVJF !", r: "Estelle 🎉", c: "Animation" },
    { t: "Écrire le discours des témoins", r: "Estelle", c: "Cérémonie" },
    { t: "Répéter le discours des témoins", r: "Témoins des mariés", c: "Cérémonie" },
    { t: "Préparer le sac de survie de la mariée", r: "Estelle", c: "Logistique" },
    { t: "Essayage final de la robe de mariée", r: "Keziah", c: "Tenue" },
    { t: "Dernier essayage du costume du marié", r: "Briac", c: "Tenue" },
    { t: "Envoyer les infos hébergement et navettes aux invités", r: "Estelle", c: "Invités" },
    { t: "Faire la liste des photos de groupe souhaitées", r: "Keziah & Briac", c: "Logistique" },
    { t: "S'entraîner pour la chorégraphie d'ouverture du bal", r: "Keziah & Briac", c: "Musique" },
    { t: "Réserver / préparer le photobooth", r: "Estelle", c: "Animation" },
  ]},
  { cat: "1 mois avant", tasks: [
    { t: "Envoyer planning du jour J aux prestataires", r: "Estelle", c: "Logistique" },
    { t: "Réunion finale avec tous les prestataires", r: "Keziah & Estelle", c: "Prestataires" },
    { t: "Confirmer le nombre d'invités au traiteur", r: "Estelle", c: "Prestataires" },
    { t: "Récupérer les alliances", r: "Keziah & Briac", c: "Tenue" },
    { t: "Récupérer et finaliser les tenues", r: "Keziah & Briac", c: "Tenue" },
    { t: "Vérifier validité des passeports (lune de miel)", r: "Keziah & Briac", c: "Logistique" },
    { t: "Confirmer le planning navette de soir", r: "Estelle", c: "Logistique" },
    { t: "Briefer la/les babysitters sur le déroulé", r: "Estelle", c: "Logistique" },
    { t: "Imprimer menus, plan de table, panneau de bienvenue", r: "Estelle", c: "Papeterie" },
    { t: "Lister le programme de la soirée pour les témoins", r: "Estelle", c: "Logistique" },
  ]},
  { cat: "Semaine du mariage", tasks: [
    { t: "Décoration du château (J-2)", r: "Estelle & équipe", c: "Décoration" },
    { t: "Répétition de la cérémonie (J-1)", r: "Tous", c: "Cérémonie" },
    { t: "Soirée détente / spa pour la mariée (J-1)", r: "Keziah & Estelle", c: "Bien-être" },
    { t: "Livraison des fleurs", r: "Fleuriste", c: "Décoration" },
    { t: "Vérifier météo & plan B pluie", r: "Estelle", c: "Logistique" },
    { t: "Récupérer la robe de mariée", r: "Keziah", c: "Tenue" },
    { t: "Récupérer le costume du marié", r: "Briac", c: "Tenue" },
    { t: "Récupérer le photobooth", r: "Estelle", c: "Animation" },
    { t: "Faire les courses complémentaires (bougies, confettis…)", r: "Estelle", c: "Décoration" },
  ]},
  { cat: "Jour J ✨", tasks: [
    { t: "Coiffure & maquillage (matin)", r: "Keziah & témoins", c: "Bien-être" },
    { t: "Photos préparatifs au château", r: "Photographe", c: "Logistique" },
    { t: "Cérémonie civile à la mairie", r: "Tous", c: "Cérémonie" },
    { t: "Cérémonie religieuse à l'église", r: "Tous", c: "Cérémonie" },
    { t: "Cocktail & photos de couple dans les jardins", r: "Tous", c: "Logistique" },
    { t: "Discours des témoins", r: "Témoins des mariés", c: "Cérémonie" },
    { t: "Dîner de gala", r: "Tous", c: "Logistique" },
    { t: "Ouverture du bal & pièce montée", r: "Keziah & Briac", c: "Musique" },
    { t: "Lancer du bouquet de la mariée", r: "Keziah", c: "Animation" },
    { t: "Soirée dansante jusqu'à l'aube !", r: "Tous", c: "Animation" },
  ]},
  { cat: "Lendemain du mariage 🥐", tasks: [
    { t: "Choisir le format du brunch (lieu, horaire, nombre d'invités)", r: "Keziah & Briac", c: "Logistique" },
    { t: "Définir le menu du brunch", r: "Keziah & Briac", c: "Logistique" },
    { t: "Choisir le traiteur brunch ou prévoir un buffet", r: "Estelle", c: "Prestataires" },
    { t: "Louer ou prévoir la vaisselle pour le brunch", r: "Estelle", c: "Logistique" },
    { t: "Envoyer les invitations pour le brunch du lendemain", r: "Keziah & Briac", c: "Invités" },
    { t: "Prévoir la décoration de table pour le brunch", r: "Keziah", c: "Décoration" },
    { t: "Confirmer la liste des participants au brunch", r: "Estelle", c: "Invités" },
    { t: "Faire les courses / commander les produits brunch", r: "Estelle", c: "Logistique" },
    { t: "Accueillir les invités pour le brunch (Jour J+1)", r: "Keziah & Briac", c: "Invités" },
    { t: "Retourner la vaisselle louée pour le brunch", r: "Estelle", c: "Logistique" },
    { t: "Profiter des derniers moments avec la famille et les amis 🥂", r: "Tous", c: "Bien-être" },
  ]},
  { cat: "Après le mariage", tasks: [
    { t: "Envoyer les remerciements aux invités", r: "Keziah & Briac", c: "Invités" },
    { t: "Récupérer les photos et vidéos du photographe", r: "Keziah", c: "Logistique" },
    { t: "Changer les noms officiels si souhaité", r: "Keziah", c: "Logistique" },
    { t: "Retourner les costumes / tenues loués(es)", r: "Keziah & Briac", c: "Tenue" },
    { t: "Retourner le photobooth", r: "Estelle", c: "Animation" },
    { t: "Se reposer et profiter ! 🥂", r: "Tous", c: "Bien-être" },
  ]},
];

const BUDGET_DATA = [
  { cat: "Lieu de réception (Château de Jallanges)", est: 8000, prev: 0, acomp: 0 },
  { cat: "Traiteur (repas)", est: 12000, prev: 0, acomp: 0 },
  { cat: "Boissons / Bar open", est: 2500, prev: 0, acomp: 0 },
  { cat: "Photographe", est: 2500, prev: 0, acomp: 0 },
  { cat: "Vidéaste", est: 1500, prev: 0, acomp: 0 },
  { cat: "DJ / Musique", est: 1500, prev: 0, acomp: 0 },
  { cat: "Fleurs & Décoration", est: 2500, prev: 0, acomp: 0 },
  { cat: "Robe de mariée", est: 2000, prev: 0, acomp: 0 },
  { cat: "Costume du marié", est: 800, prev: 0, acomp: 0 },
  { cat: "Faire-part & papeterie", est: 600, prev: 0, acomp: 0 },
  { cat: "Coiffure & maquillage", est: 500, prev: 0, acomp: 0 },
  { cat: "Voiture des mariés", est: 600, prev: 0, acomp: 0 },
  { cat: "Navettes invités (depuis Tours)", est: 700, prev: 0, acomp: 0 },
  { cat: "Gâteau / Pièce montée", est: 700, prev: 0, acomp: 0 },
  { cat: "Alliances", est: 1500, prev: 0, acomp: 0 },
  { cat: "Cadeaux invités / dragées", est: 500, prev: 0, acomp: 0 },
  { cat: "Lune de miel", est: 4000, prev: 0, acomp: 0 },
  { cat: "Alcool & Champagne", est: 1200, prev: 0, acomp: 0 },
  { cat: "Photobooth (à confirmer)", est: 800, prev: 0, acomp: 0 },
  { cat: "Manucure & soins pré-mariage", est: 200, prev: 0, acomp: 0 },
  { cat: "Timbres faire-part", est: 150, prev: 0, acomp: 0 },
  { cat: "Brunch du lendemain (traiteur / buffet)", est: 1500, prev: 0, acomp: 0 },
  { cat: "Vaisselle brunch (location)", est: 300, prev: 0, acomp: 0 },
  { cat: "Divers & imprévus (10%)", est: 3500, prev: 0, acomp: 0 },
];

const VENDORS_DATA = [
  { cat: "Lieu de réception", name: "Château de Jallanges", tel: "", email: "contact@jallanges.com", site: "jallanges.com", status: "⏳ À contacter" },
  { cat: "Traiteur", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Photographe", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Vidéaste", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "DJ / Musiciens", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Fleuriste", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Coiffeur", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Maquilleur", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Gâteau / Pâtissier", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Voiture des mariés", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Transport invités", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Officiant cérémonie laïque", name: "À choisir", tel: "", email: "", site: "", status: "⏳ À contacter" },
  { cat: "Mairie", name: "Mairie Vernon-sur-Brenne", tel: "", email: "", site: "", status: "⏳ À contacter" },
];

// ═══════════════════════════════════════
// ÉTAT & STORAGE
// ═══════════════════════════════════════
// ── Administrateurs (emails autorisés) ──
const ADMIN_EMAILS = ['mariage.keziah.briac@gmail.com'];
window.currentUserIsAdmin = false;
function isAdmin() {
  if (!window.currentUser) return false;
  if (ADMIN_EMAILS.includes(window.currentUser.email)) return true;
  return !!window.currentUserIsAdmin;
}

// Palette de couleurs pour les tables
const TABLE_COLORS = [
  { bg:'#FCE4EC', color:'#C2185B', label:'Rose' },
  { bg:'#E3F2FD', color:'#1565C0', label:'Bleu' },
  { bg:'#E8F5E9', color:'#2E7D32', label:'Vert' },
  { bg:'#FFF3E0', color:'#E65100', label:'Orange' },
  { bg:'#F3E5F5', color:'#7B1FA2', label:'Violet' },
  { bg:'#FFFDE7', color:'#F57F17', label:'Jaune' },
  { bg:'#E0F2F1', color:'#00695C', label:'Turquoise' },
  { bg:'#EFEBE9', color:'#4E342E', label:'Brun' },
];
let _selectedTableColorIdx = 0;
let _assignModalGuestId = null;
let _assignModalTargetTable = null;

let state = {
  checks: {},
  taskEdits: {},      // { "si-ti": { r, date, c } } — overrides pour tâches par défaut
  customTasks: [],    // [ { id, phase, t, r, c, date } ] — tâches ajoutées par l'utilisateur
  budget: JSON.parse(JSON.stringify(BUDGET_DATA)),
  guests: [],
  budgetTotal: 30000,
  tables: [],         // [ { id, name, capacity, color:{bg,color} } ]
  evjf: { date:'', lieu:'', theme:'', notes:'', participantes:[], programme:[], budget:[], checklist:{}, cadeaux:'', customChecklist:[], projets:[] },
  tenues: [],
  papeterie: { checklist:{}, notes:'', customItems:[] },
  jourJItems: [],
  venueInfos: {},
  vendors: [],
  lunedeMiel: { destination:'', dateDepart:'', dateRetour:'', budget:'', notes:'', checklist:{} },
  docsLegaux: { checklist:{} },
  kitUrgence: { checklist:{} },
  ambiance: { colors:['#880E4F','#C2185B','#FCE4EC','#3E2723','#F5F5F5'], keywords:'', pinterest:'', notes:'' },
  idees: { categories:['Décoration','Musique','Animation','Repas & cocktail','Cérémonie','Photos & vidéo','Autre'], items:[] },
  playlist: { songs: [], spotifyClientId: '' },
  auditLog: [],   // [ { id, action, section, description, user, ts } ]
  infosClés: {
    lieu:   { nom: 'Château de Jallanges', detail1: 'Vernon-sur-Brenne, Touraine', detail2: 'Val de Loire', url: 'jallanges.com' },
    mariee: { nom: 'Keziah',  tel: '', email: '' },
    marie:  { nom: 'Briac',   tel: '', email: '' },
    orga:   { nom: 'Estelle', tel: '', email: 'ehuguet@cfmrobotique.com' },
    date:   { date: '10 juillet 2027', heure: '', note: '' },
  },
};

// Sauvegarde locale (fallback) + Firebase
function save() {
  try { localStorage.setItem('wedding_state', JSON.stringify(state)); } catch(e) {}
  saveToFirebase().catch(e => console.warn('Firebase sync error:', e));
}

function load() {
  try {
    const s = localStorage.getItem('wedding_state');
    if (s) state = JSON.parse(s);
    if (!state.guests)      state.guests = [];
    if (!state.budget)      state.budget = JSON.parse(JSON.stringify(BUDGET_DATA));
    if (!state.checks)      state.checks = {};
    if (!state.taskEdits)   state.taskEdits = {};
    if (!state.customTasks) state.customTasks = [];
    if (!state.budgetTotal) state.budgetTotal = 30000;
    if (!state.tables)      state.tables = [];
    if (!state.evjf)        state.evjf = { date:'', lieu:'', theme:'', notes:'', participantes:[], programme:[], budget:[], checklist:{}, cadeaux:'', customChecklist:[], projets:[] };
    if (!state.evjf.customChecklist) state.evjf.customChecklist = [];
    if (!state.evjf.projets)         state.evjf.projets = [];
    if (!state.tenues)      state.tenues = [];
    if (!state.papeterie)   state.papeterie = { checklist:{}, notes:'', customItems:[] };
    if (!state.papeterie.customItems) state.papeterie.customItems = [];
    if (!state.jourJItems)  state.jourJItems = [];
    if (!state.venueInfos)  state.venueInfos = {};
    if (!state.vendors)     state.vendors = [];
    if (!state.lunedeMiel)  state.lunedeMiel = { destination:'', dateDepart:'', dateRetour:'', budget:'', notes:'', checklist:{} };
    if (!state.docsLegaux)  state.docsLegaux = { checklist:{} };
    if (!state.kitUrgence)  state.kitUrgence = { checklist:{} };
    if (!state.ambiance)    state.ambiance = { colors:['#880E4F','#C2185B','#FCE4EC','#3E2723','#F5F5F5'], keywords:'', pinterest:'', notes:'' };
    if (!state.idees)       state.idees = { categories:['Décoration','Musique','Animation','Repas & cocktail','Cérémonie','Photos & vidéo','Autre'], items:[] };
    if (!state.idees.categories) state.idees.categories = ['Décoration','Musique','Animation','Repas & cocktail','Cérémonie','Photos & vidéo','Autre'];
    if (!state.idees.items)      state.idees.items = [];
    if (!state.playlist)         state.playlist = { songs: [], spotifyClientId: '' };
    if (!state.playlist.songs)   state.playlist.songs = [];
    if (!state.auditLog)         state.auditLog = [];
    if (!state.infosClés) state.infosClés = {
      lieu:   { nom: 'Château de Jallanges', detail1: 'Vernon-sur-Brenne, Touraine', detail2: 'Val de Loire', url: 'jallanges.com' },
      mariee: { nom: 'Keziah',  tel: '', email: '' },
      marie:  { nom: 'Briac',   tel: '', email: '' },
      orga:   { nom: 'Estelle', tel: '', email: 'ehuguet@cfmrobotique.com' },
      date:   { date: '10 juillet 2027', heure: '', note: '' },
    };
  } catch(e) {}
}

// ─── Audit log — enregistrer une action (add/edit/delete) ───────────────
function logAction(action, section, description) {
  const user = window.currentUser
    ? (window.currentUser.displayName || window.currentUser.email?.split('@')[0] || 'Anonyme')
    : 'Anonyme';
  if (!state.auditLog) state.auditLog = [];
  state.auditLog.unshift({ id:'log_'+Date.now(), action, section, description, user, ts: new Date().toISOString() });
  if (state.auditLog.length > 150) state.auditLog = state.auditLog.slice(0, 150);
}

// ─── Firebase : sauvegarde de tout l'état (hors invités)
async function saveToFirebase() {
  if (!window.fbSetDoc || !window.fbDoc || !window.db) return;
  try {
    const toSave = {
      checks: state.checks || {},
      taskEdits: state.taskEdits || {},
      customTasks: state.customTasks || [],
      budget: state.budget || [],
      budgetTotal: state.budgetTotal || 30000,
      roles: state.roles || [],
      filrougeRows: state.filrougeRows || [],
      urgenceContacts: state.urgenceContacts || [],
      matrix: state.matrix || {},
      tables: state.tables || [],
      evjf: state.evjf || {},
      tenues: state.tenues || [],
      papeterie: state.papeterie || {},
      jourJItems: state.jourJItems || [],
      venueInfos: state.venueInfos || {},
      vendors: state.vendors || [],
      lunedeMiel: state.lunedeMiel || {},
      docsLegaux: state.docsLegaux || {},
      kitUrgence: state.kitUrgence || {},
      ambiance: state.ambiance || {},
      idees: state.idees || { categories:[], items:[] },
      playlist: state.playlist || { songs:[], spotifyClientId:'' },
      auditLog: (state.auditLog || []).slice(0, 150),
      infosClés: state.infosClés || {},
      lastModifiedBy: window.currentUser ? (window.currentUser.displayName || window.currentUser.email) : 'Anonyme',
      lastModifiedAt: window.fbServerTimestamp(),
    };
    Object.keys(state).filter(k => k.startsWith('vendor_')).forEach(k => { toSave[k] = state[k]; });
    await window.fbSetDoc(window.fbDoc(window.db, 'wedding', 'keziah-briac'), toSave, { merge: true });
  } catch(e) { console.warn('Firebase save error:', e); }
}

// ─── Firebase : chargement initial de tout l'état
async function loadAllFromFirebase() {
  if (!window.fbGetDoc || !window.fbDoc || !window.db) return;
  try {
    const snap = await window.fbGetDoc(window.fbDoc(window.db, 'wedding', 'keziah-briac'));
    if (snap.exists()) {
      const d = snap.data();
      if (d.checks)           state.checks = d.checks;
      if (d.taskEdits)        state.taskEdits = d.taskEdits;
      if (d.customTasks)      state.customTasks = d.customTasks;
      if (d.budget) {
        state.budget = d.budget;
        const existingCats = new Set(state.budget.map(b => b.cat));
        BUDGET_DATA.forEach(b => { if (!existingCats.has(b.cat)) state.budget.push(JSON.parse(JSON.stringify(b))); });
      }
      if (d.budgetTotal)      state.budgetTotal = d.budgetTotal;
      if (d.roles)            state.roles = d.roles;
      if (d.filrougeRows)     state.filrougeRows = d.filrougeRows;
      if (d.urgenceContacts)  state.urgenceContacts = d.urgenceContacts;
      if (d.matrix)           state.matrix = d.matrix;
      if (d.tables)           state.tables = d.tables;
      if (d.evjf)        state.evjf = { ...state.evjf, ...d.evjf };
      if (d.tenues)      state.tenues = d.tenues;
      if (d.papeterie)   state.papeterie = { ...state.papeterie, ...d.papeterie };
      if (d.jourJItems)  state.jourJItems = d.jourJItems;
      if (d.venueInfos)  state.venueInfos = { ...state.venueInfos, ...d.venueInfos };
      if (d.vendors && d.vendors.length > 0) state.vendors = d.vendors;
      if (d.lunedeMiel)  state.lunedeMiel = { ...state.lunedeMiel, ...d.lunedeMiel };
      if (d.docsLegaux)  state.docsLegaux = { ...state.docsLegaux, ...d.docsLegaux };
      if (d.kitUrgence)  state.kitUrgence = { ...state.kitUrgence, ...d.kitUrgence };
      if (d.ambiance)    state.ambiance = { ...state.ambiance, ...d.ambiance };
      if (d.idees)       state.idees    = { ...state.idees, ...d.idees };
      if (d.playlist)    state.playlist = { ...state.playlist, ...d.playlist };
      if (d.lastModifiedBy) state.lastModifiedBy = d.lastModifiedBy;
      if (d.lastModifiedAt) state.lastModifiedAt = d.lastModifiedAt;
      if (d.auditLog)       state.auditLog = d.auditLog;
      if (d.infosClés)      state.infosClés = { ...state.infosClés, ...d.infosClés };
      Object.keys(d).filter(k => k.startsWith('vendor_')).forEach(k => { state[k] = d[k]; });
    }
  } catch(e) { console.warn('Firebase load error:', e); }
  // Charger les invités séparément
  await loadGuestsFromFirebase();
  // Re-rendre tout avec les données Firebase
  await loadAppMembers();
  renderChecklist();
  renderBudget();
  renderVendors();
  renderGantt();
  renderMatrix();
  renderRoles();
  renderFilRouge();
  renderUrgence();
  renderSeatingChart();
  renderEvjf();
  renderTenues();
  renderFairePart();
  renderLuneDeMiel();
  renderDocsLegaux();
  renderJourJ();
  renderVenue();
  renderKitUrgence();
  renderAmbiance();
  renderIdees();
  renderPlaylist();
  renderInfosClés();
  // Spotify callback après chargement des données
  if (window._spotifyCode) setTimeout(handleSpotifyCallback, 200);
  updateDashboard();
}
window.loadAllFromFirebase = loadAllFromFirebase;

// ═══════════════════════════════════════
// HISTORIQUE DES ACTIONS (AUDIT LOG)
// ═══════════════════════════════════════
function renderAuditLog() {
  const card = document.getElementById('audit-log-card');
  if (!card) return;
  if (!isAdmin()) { card.style.display = 'none'; return; }
  card.style.display = '';
  const el = document.getElementById('audit-log-list');
  if (!el) return;
  const logs = state.auditLog || [];
  const filterAction  = document.getElementById('audit-filter-action')?.value  || '';
  const filterSection = document.getElementById('audit-filter-section')?.value || '';
  let filtered = logs;
  if (filterAction)  filtered = filtered.filter(l => l.action === filterAction);
  if (filterSection) filtered = filtered.filter(l => l.section === filterSection);
  if (filtered.length === 0) {
    el.innerHTML = '<p style="color:var(--grey);font-style:italic;font-size:0.88rem;text-align:center;padding:20px">Aucune action enregistrée pour l\'instant.</p>';
    return;
  }
  const ICONS   = { ajout:'➕', suppression:'🗑️', modification:'✏️' };
  const COLORS  = { ajout:'var(--green)', suppression:'var(--red)', modification:'var(--orange)' };
  el.innerHTML = filtered.map(l => {
    const d = new Date(l.ts);
    const dateStr = isNaN(d) ? '—' : d.toLocaleDateString('fr-FR',{day:'2-digit',month:'2-digit',year:'numeric'}) + ' ' + d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
    return `<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 14px;border-bottom:1px solid #f5f5f5;font-size:0.84rem">
      <span style="font-size:1rem;line-height:1.4;min-width:20px">${ICONS[l.action]||'📝'}</span>
      <div style="flex:1;min-width:0">
        <span style="font-weight:700;color:${COLORS[l.action]||'var(--grey)'};text-transform:uppercase;font-size:0.78rem">${escHtml(l.action)}</span>
        <span style="background:var(--light-pink);color:var(--pink);padding:2px 7px;border-radius:4px;font-size:0.76rem;font-weight:600;margin-left:6px">${escHtml(l.section)}</span>
        <div style="color:var(--dark);margin-top:4px;word-break:break-word">${escHtml(l.description)}</div>
      </div>
      <div style="text-align:right;white-space:nowrap;color:var(--grey);font-size:0.8rem;flex-shrink:0">
        <div style="font-weight:600;color:var(--dark)">${escHtml(l.user)}</div>
        <div>${dateStr}</div>
      </div>
    </div>`;
  }).join('');
}

function clearAuditLog() {
  if (!isAdmin()) return;
  if (!confirm('Vider tout l\'historique ? Cette action est irréversible.')) return;
  logAction('suppression', 'Administration', 'Historique entièrement vidé');
  state.auditLog = [];
  save(); renderAuditLog();
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
function showSection(id, link) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (link) link.classList.add('active');
  if (id === 'administration' && isAdmin()) { loadMembers(); renderAuditLog(); }
  if (id === 'dashboard') renderInfosClés();
  updateDashboard();
}

// ═══════════════════════════════════════
// COUNTDOWN
// ═══════════════════════════════════════
function updateCountdown() {
  const target = new Date('2027-07-10');
  const now = new Date();
  const diff = target - now;
  if (diff > 0) {
    const days = Math.floor(diff / (1000*60*60*24));
    const months = Math.floor(days / 30.44);
    const weeks = Math.floor(days / 7);
    document.getElementById('cd-days').textContent = days.toLocaleString('fr');
    document.getElementById('cd-months').textContent = months;
    document.getElementById('cd-weeks').textContent = weeks;
  }
}

// ═══════════════════════════════════════
// CHECKLIST
// ═══════════════════════════════════════

// ── Helpers ──
function taskCatBadge(c) {
  const col = TASK_CAT_COLORS[c] || { bg: '#eee', color: '#555' };
  return c ? `<span class="task-cat-badge" style="background:${col.bg};color:${col.color}">${c}</span>` : '';
}
function taskDateBadge(d) {
  if (!d) return '';
  const fmt = new Date(d).toLocaleDateString('fr-FR', { day:'2-digit', month:'short', year:'2-digit' });
  return `<span class="task-date-badge">📅 ${fmt}</span>`;
}
function getTaskResp(key, defaultR) {
  return (state.taskEdits[key] && state.taskEdits[key].r !== undefined) ? state.taskEdits[key].r : defaultR;
}
function getTaskDate(key) { return state.taskEdits[key]?.date || ''; }
function getTaskCat(key, defaultC) {
  return (state.taskEdits[key] && state.taskEdits[key].c) ? state.taskEdits[key].c : (defaultC || '');
}

// ── Render ──
function renderChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;
  container.innerHTML = '';

  CHECKLIST_DATA.forEach((section, si) => {
    // Tâches par défaut de cette section
    const defDone  = section.tasks.filter((_, ti) => state.checks[`${si}-${ti}`]).length;
    const customs  = (state.customTasks || []).filter(ct => ct.phase === section.cat);
    const custDone = customs.filter(ct => state.checks[`c-${ct.id}`]).length;
    const total = section.tasks.length + customs.length;
    const done  = defDone + custDone;
    const pct   = total > 0 ? Math.round(done / total * 100) : 0;

    const div = document.createElement('div');
    div.className = 'check-section';

    // En-tête
    let html = `
      <div class="check-header" onclick="toggleSection(this)">
        <span>${section.cat}</span>
        <span class="badge">${done}/${total} — ${pct}%</span>
      </div>
      <div class="check-body">
        <div class="progress-bar-wrap" style="margin:4px 8px;"><div class="progress-bar" style="width:${pct}%"></div></div>`;

    // Tâches par défaut
    section.tasks.forEach((task, ti) => {
      const key     = `${si}-${ti}`;
      const checked = state.checks[key] || false;
      const resp    = getTaskResp(key, task.r);
      const date    = getTaskDate(key);
      const cat     = getTaskCat(key, task.c);
      const catOpts = Object.keys(TASK_CAT_COLORS).map(k => `<option${cat===k?' selected':''}>${k}</option>`).join('');
      html += `
        <div class="check-item ${checked ? 'done' : ''}" id="ci-${key}">
          <input type="checkbox" id="cb-${key}" ${checked ? 'checked' : ''} onchange="toggleCheck('${key}',this)">
          <label for="cb-${key}">${escH(task.t)}</label>
          <div class="task-meta">
            ${taskCatBadge(cat)}
            ${taskDateBadge(date)}
            <span class="task-resp" title="${escH(resp)}">${escH(resp)}</span>
            <button class="task-edit-btn" onclick="toggleTaskForm('ef-${key}')" title="Modifier">✏️</button>
          </div>
        </div>
        <div class="task-edit-form" id="ef-${key}">
          <div class="field-group"><span class="form-label">Responsable</span>
            <input type="text" value="${escH(resp)}" placeholder="Qui ?" onchange="saveTaskEdit('${key}','r',this.value)">
          </div>
          <div class="field-group"><span class="form-label">Catégorie</span>
            <select onchange="saveTaskEdit('${key}','c',this.value)"><option value="">—</option>${catOpts}</select>
          </div>
          <div class="field-group"><span class="form-label">Date cible</span>
            <input type="date" value="${date}" onchange="saveTaskEdit('${key}','date',this.value)">
          </div>
          <button class="btn btn-pink" style="padding:5px 14px;font-size:0.82rem" onclick="toggleTaskForm('ef-${key}')">✓ OK</button>
        </div>`;
    });

    // Tâches custom de cette section
    customs.forEach(ct => {
      const key     = `c-${ct.id}`;
      const checked = state.checks[key] || false;
      const cat     = ct.c || '';
      const catOpts = Object.keys(TASK_CAT_COLORS).map(k => `<option${cat===k?' selected':''}>${k}</option>`).join('');
      html += `
        <div class="check-item ${checked ? 'done' : ''}" id="ci-${key}" style="background:#FFF9FB">
          <input type="checkbox" id="cb-${key}" ${checked ? 'checked' : ''} onchange="toggleCheck('${key}',this)">
          <label for="cb-${key}">${escH(ct.t)}</label>
          <div class="task-meta">
            ${taskCatBadge(cat)}
            ${taskDateBadge(ct.date)}
            <span class="task-resp">${escH(ct.r || '')}</span>
            <button class="task-edit-btn" onclick="toggleTaskForm('ef-${key}')" title="Modifier">✏️</button>
            <button class="task-del-btn" onclick="deleteCustomTask('${ct.id}')" title="Supprimer">🗑️</button>
          </div>
        </div>
        <div class="task-edit-form" id="ef-${key}">
          <div class="field-group"><span class="form-label">Tâche</span>
            <input type="text" value="${escH(ct.t)}" onchange="updateCustomTask('${ct.id}','t',this.value)">
          </div>
          <div class="field-group"><span class="form-label">Responsable</span>
            <input type="text" value="${escH(ct.r||'')}" placeholder="Qui ?" onchange="updateCustomTask('${ct.id}','r',this.value)">
          </div>
          <div class="field-group"><span class="form-label">Catégorie</span>
            <select onchange="updateCustomTask('${ct.id}','c',this.value)"><option value="">—</option>${catOpts}</select>
          </div>
          <div class="field-group"><span class="form-label">Date cible</span>
            <input type="date" value="${ct.date||''}" onchange="updateCustomTask('${ct.id}','date',this.value)">
          </div>
          <button class="btn btn-pink" style="padding:5px 14px;font-size:0.82rem" onclick="toggleTaskForm('ef-${key}')">✓ OK</button>
        </div>`;
    });

    // Ligne "+ Ajouter" + formulaire inline
    const formId = `nf-${si}`;
    const catOpts2 = Object.keys(TASK_CAT_COLORS).map(k => `<option>${k}</option>`).join('');
    html += `
        <div class="add-task-row">
          <button class="btn-add-task" onclick="toggleTaskForm('${formId}')">+ Ajouter une tâche</button>
        </div>
        <div class="new-task-form" id="${formId}">
          <div class="field-group"><span class="form-label">Tâche *</span>
            <input type="text" id="nt-text-${si}" placeholder="Description de la tâche…">
          </div>
          <div class="field-group"><span class="form-label">Responsable</span>
            <input type="text" id="nt-resp-${si}" placeholder="Qui ?">
          </div>
          <div class="field-group"><span class="form-label">Catégorie</span>
            <select id="nt-cat-${si}"><option value="">—</option>${catOpts2}</select>
          </div>
          <div class="field-group"><span class="form-label">Date cible</span>
            <input type="date" id="nt-date-${si}">
          </div>
          <button class="btn btn-pink" style="padding:6px 16px;font-size:0.85rem" onclick="addCustomTask(${si},'${section.cat}','${formId}')">✓ Ajouter</button>
          <button class="btn btn-outline" style="padding:6px 12px;font-size:0.85rem" onclick="toggleTaskForm('${formId}')">Annuler</button>
        </div>
      </div>`;

    div.innerHTML = html;
    container.appendChild(div);
  });

  updateCheckProgress();
  updateDashboard();
}

function escH(s) {
  return (s == null ? '' : String(s))
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Checkbox ──
function toggleCheck(key, cb) {
  state.checks[key] = cb.checked;
  const item = document.getElementById(`ci-${key}`);
  if (item) item.classList.toggle('done', cb.checked);
  save(); updateCheckProgress(); updateDashboard(); renderGantt();
}

// ── Toggle form ──
function toggleTaskForm(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
}

// ── Edit default task fields ──
function saveTaskEdit(key, field, val) {
  if (!state.taskEdits[key]) state.taskEdits[key] = {};
  state.taskEdits[key][field] = val;
  save();
  renderChecklist();
}

// ── Custom tasks ──
function addCustomTask(si, phase, formId) {
  const text = document.getElementById(`nt-text-${si}`)?.value.trim();
  if (!text) { alert('Veuillez saisir une description.'); return; }
  const id   = Date.now().toString(36) + Math.random().toString(36).slice(2,5);
  const task = {
    id,
    phase,
    t:    text,
    r:    document.getElementById(`nt-resp-${si}`)?.value.trim() || '',
    c:    document.getElementById(`nt-cat-${si}`)?.value || '',
    date: document.getElementById(`nt-date-${si}`)?.value || '',
  };
  if (!state.customTasks) state.customTasks = [];
  state.customTasks.push(task);
  save();
  renderChecklist();
}

function updateCustomTask(id, field, val) {
  const ct = (state.customTasks || []).find(t => t.id === id);
  if (ct) { ct[field] = val; save(); renderChecklist(); }
}

function deleteCustomTask(id) {
  if (!confirm('Supprimer cette tâche ?')) return;
  logAction('suppression', 'Checklist', `Tâche : "${(state.customTasks||[]).find(t=>t.id===id)?.t||'?'}"`);
  state.customTasks = (state.customTasks || []).filter(t => t.id !== id);
  const key = `c-${id}`;
  delete state.checks[key];
  save(); renderChecklist();
}

function toggleSection(header) {
  const body = header.nextElementSibling;
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function updateCheckProgress() {
  // Total = tâches par défaut + tâches custom
  const defTotal = CHECKLIST_DATA.reduce((a,s) => a + s.tasks.length, 0);
  const custTotal = (state.customTasks || []).length;
  const total = defTotal + custTotal;
  const done  = Object.values(state.checks).filter(Boolean).length;
  const pct   = total > 0 ? Math.round(done / total * 100) : 0;
  const el = document.getElementById('check-progress-txt');
  const bar = document.getElementById('check-progress-bar');
  if (el)  el.textContent = `${done} / ${total} tâches`;
  if (bar) bar.style.width = pct + '%';
}

// ═══════════════════════════════════════
// BUDGET
// ═══════════════════════════════════════
function renderBudget() {
  const container = document.getElementById('budget-rows');
  container.innerHTML = '';
  state.budget.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'budget-row';
    row.innerHTML = `
      <div style="font-weight:600">${item.cat}</div>
      <div style="text-align:right;color:#888">${fmtEur(item.est)}</div>
      <div><input type="number" value="${item.prev}" placeholder="0" min="0" onchange="updateBudgetItem(${i},'prev',this.value)" style="text-align:right;font-weight:600;color:#1565C0;width:100%;border:none;background:transparent;font-family:inherit;font-size:0.88rem;padding:10px 8px;"></div>
      <div><input type="number" value="${item.acomp}" placeholder="0" min="0" onchange="updateBudgetItem(${i},'acomp',this.value)" style="text-align:right;color:#388E3C;width:100%;border:none;background:transparent;font-family:inherit;font-size:0.88rem;padding:10px 8px;"></div>
      <div><select onchange="updateBudgetItem(${i},'status',this.value)" style="font-size:0.8rem;border:none;background:transparent;font-family:inherit;cursor:pointer;">
        <option ${!item.status||item.status==='⏳ À contacter'?'selected':''}>⏳ À contacter</option>
        <option ${item.status==='🔄 En négo.'?'selected':''}>🔄 En négo.</option>
        <option ${item.status==='✅ Signé'?'selected':''}>✅ Signé</option>
      </select></div>
      <div style="text-align:center"><button onclick="deleteBudgetRow(${i})" title="Supprimer" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1.1rem;line-height:1;padding:4px" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button></div>`;
    container.appendChild(row);
  });
  updateBudget();
}

function updateBudgetItem(i, field, val) {
  state.budget[i][field] = field === 'status' ? val : (parseFloat(val) || 0);
  save(); updateBudget();
}
function deleteBudgetRow(i) {
  const _bcat = state.budget[i]?.cat || '?';
  if (!confirm(`Supprimer "${_bcat}" du budget ?`)) return;
  logAction('suppression', 'Budget', `Poste budget : "${_bcat}"`);
  state.budget.splice(i, 1);
  save(); renderBudget();
}
function addBudgetRow() {
  const cat = prompt('Nom du poste budgétaire :');
  if (!cat || !cat.trim()) return;
  const est = parseFloat(prompt('Montant estimé (€) :', '0') || '0') || 0;
  state.budget.push({ cat: cat.trim(), est, prev: 0, acomp: 0 });
  save(); renderBudget();
}

function updateBudget() {
  const totalPrev = state.budgetTotal;
  const totalEst = state.budget.reduce((a,b) => a+b.est, 0);
  const totalPrev2 = state.budget.reduce((a,b) => a+b.prev, 0);
  const totalAcomp = state.budget.reduce((a,b) => a+b.acomp, 0);
  const libre = totalPrev - totalPrev2;
  const pct = totalPrev > 0 ? Math.round(totalPrev2/totalPrev*100) : 0;

  document.getElementById('b-total').textContent = fmtEur(totalPrev);
  document.getElementById('b-paid').textContent = fmtEur(totalPrev2);
  document.getElementById('b-left').textContent = fmtEur(libre);
  document.getElementById('b-pct').textContent = pct + '%';
  document.getElementById('bt-est').textContent = fmtEur(totalEst);
  document.getElementById('bt-prev').textContent = fmtEur(totalPrev2);
  document.getElementById('bt-acomp').textContent = fmtEur(totalAcomp);

  const inp = document.getElementById('budget-input');
  if (inp) { state.budgetTotal = parseFloat(inp.value) || 30000; save(); }

  document.getElementById('stat-budget-used').textContent = fmtEur(totalPrev2);
}

function fmtEur(n) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n || 0);
}

// ═══════════════════════════════════════
// INVITÉS — schéma complet
// ═══════════════════════════════════════
const GUESTS_COLLECTION_PATH = "wedding/keziah-briac/guests";

const GUEST_DEFAULTS = {
  prenom: "", nom: "", categorie: "", liste: "A",
  adresse: "", email: "", tel: "",
  type_invitation: "Journée complète",
  rsvp: "⏳ En attente",
  adulte_enfant: "Adulte", nb_foyer: 1,
  regime: "", hebergement: "", table: "",
  interets: "", notes: ""
};

// ── Firebase : chargement ──
async function loadGuestsFromFirebase() {
  if (!window.db) return;
  try {
    const snapshot = await window.fbGetDocs(window.fbCollection(window.db, GUESTS_COLLECTION_PATH));
    state.guests = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    renderGuests();
  } catch (e) { console.error("Erreur chargement invités :", e); }
}

// ── Firebase : sauvegarde (add ou update) ──
async function saveGuestToFirebase(guest) {
  if (!window.db) return null;
  const data = { ...GUEST_DEFAULTS, ...guest };
  delete data.id;
  data.updatedAt = window.fbServerTimestamp();
  try {
    if (guest.id) {
      await window.fbSetDoc(window.fbDoc(window.db, GUESTS_COLLECTION_PATH, guest.id), data, { merge: true });
      return guest.id;
    } else {
      data.createdAt = window.fbServerTimestamp();
      const ref = await window.fbAddDoc(window.fbCollection(window.db, GUESTS_COLLECTION_PATH), data);
      return ref.id;
    }
  } catch (e) { console.error("Erreur sauvegarde invité :", e); return null; }
}

// ── Firebase : suppression ──
async function deleteGuestFromFirebase(id) {
  if (!window.db || !id) return;
  try {
    await window.fbDeleteDoc(window.fbDoc(window.db, GUESTS_COLLECTION_PATH, id));
  } catch (e) { console.error("Erreur suppression invité :", e); }
}

// ── Helpers ──
function escHtml(s) {
  return (s == null ? '' : String(s))
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function guestFullName(g) {
  return [g.prenom, g.nom].filter(Boolean).join(' ') || g.name || '—';
}

// ── Rendu tableau ──
function renderGuests() {
  const tbody = document.getElementById('guest-tbody');
  if (!tbody) return;
  const q    = (document.getElementById('guest-search')?.value || '').toLowerCase();
  const fL   = document.getElementById('f-liste')?.value || '';
  const fR   = document.getElementById('f-rsvp')?.value || '';
  const fC   = document.getElementById('f-cat')?.value || '';

  tbody.innerHTML = '';
  let n = 0;
  state.guests.forEach((g, idx) => {
    if (fL && (g.liste || 'A') !== fL) return;
    if (fR && (g.rsvp || '⏳ En attente') !== fR) return;
    if (fC && (g.categorie || '') !== fC) return;
    const name = guestFullName(g).toLowerCase();
    if (q && !name.includes(q) && !(g.email||'').toLowerCase().includes(q)) return;
    n++;
    const rsvpColor = (g.rsvp === '✅ Confirmé') ? 'var(--green)'
                    : (g.rsvp === '❌ Décliné')  ? 'var(--red)'
                    : 'var(--orange)';
    const lBadge = (g.liste || 'A') === 'A'
      ? '<span class="badge-liste-a">A</span>'
      : '<span class="badge-liste-b">B</span>';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${n}</td>
      <td style="font-weight:600;white-space:nowrap">${escHtml(guestFullName(g))}</td>
      <td style="font-size:0.8rem">${escHtml(g.categorie||'')}</td>
      <td>${lBadge}</td>
      <td style="font-size:0.8rem">${escHtml(g.type_invitation||'')}</td>
      <td style="white-space:nowrap"><span style="color:${rsvpColor};font-weight:600;font-size:0.82rem">${escHtml(g.rsvp||'⏳ En attente')}</span></td>
      <td style="font-size:0.8rem">${escHtml(g.adulte_enfant||'Adulte')}</td>
      <td style="text-align:center">${g.nb_foyer||1}</td>
      <td style="font-size:0.8rem">${escHtml(g.regime||'')}</td>
      <td style="font-size:0.8rem">${escHtml(g.hebergement||'')}</td>
      <td style="font-size:0.8rem">${escHtml(g.table||'')}</td>
      <td style="white-space:nowrap">
        <button onclick="openGuestModal(${idx})" title="Modifier" style="background:none;border:none;cursor:pointer;font-size:1rem;padding:2px 4px">✏️</button>
        <button onclick="removeGuest(${idx})" title="Supprimer" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:1rem;padding:2px 4px">🗑️</button>
      </td>`;
    tbody.appendChild(tr);
  });
  updateGuestStats();
}

function filterGuests() { renderGuests(); }

function updateGuestStats() {
  const gs = state.guests;
  const total   = gs.length;
  const oui     = gs.filter(g => g.rsvp === '✅ Confirmé').length;
  const non     = gs.filter(g => g.rsvp === '❌ Décliné').length;
  const att     = gs.filter(g => (g.rsvp || '⏳ En attente') === '⏳ En attente').length;
  const adultes = gs.filter(g => (g.adulte_enfant || 'Adulte') !== 'Enfant').length;
  const enfants = gs.filter(g => g.adulte_enfant === 'Enfant').length;
  const listea  = gs.filter(g => (g.liste || 'A') === 'A').length;
  const listeb  = gs.filter(g => g.liste === 'B').length;
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('g-total', total);   set('g-oui', oui);   set('g-non', non); set('g-att', att);
  set('g-adultes', adultes); set('g-enfants', enfants);
  set('g-listea', listea); set('g-listeb', listeb);
  set('guest-count-display', `${total} invité(s)`);
  set('stat-guests', total);
}

// ── Modal ──
function openGuestModal(idx) {
  document.getElementById('modal-guest-idx').value = idx;
  document.getElementById('modal-title-text').textContent = idx >= 0 ? 'Modifier un invité' : 'Ajouter un invité';
  const g = (idx >= 0 && state.guests[idx]) ? state.guests[idx] : GUEST_DEFAULTS;
  const sv = (id, val) => { const el = document.getElementById(id); if (el) el.value = (val == null ? '' : val); };
  sv('m-prenom', g.prenom);       sv('m-nom', g.nom);
  sv('m-cat', g.categorie);       sv('m-liste', g.liste || 'A');
  sv('m-type-inv', g.type_invitation || 'Journée complète');
  sv('m-rsvp', g.rsvp || '⏳ En attente');
  sv('m-ae', g.adulte_enfant || 'Adulte');
  sv('m-nb', g.nb_foyer || 1);
  sv('m-regime', g.regime || '');
  sv('m-heberg', g.hebergement || '');
  sv('m-table', g.table);         sv('m-email', g.email);
  sv('m-adresse', g.adresse);     sv('m-tel', g.tel);
  sv('m-interets', g.interets);   sv('m-notes', g.notes);
  document.getElementById('guest-modal').classList.remove('hidden');
}

function closeGuestModal() {
  document.getElementById('guest-modal').classList.add('hidden');
}

async function saveGuestFromModal() {
  const idx = parseInt(document.getElementById('modal-guest-idx').value);
  const gv  = id => document.getElementById(id)?.value ?? '';
  const updated = {
    prenom: gv('m-prenom'),         nom: gv('m-nom'),
    categorie: gv('m-cat'),         liste: gv('m-liste'),
    type_invitation: gv('m-type-inv'),
    rsvp: gv('m-rsvp'),
    adulte_enfant: gv('m-ae'),      nb_foyer: parseInt(gv('m-nb')) || 1,
    regime: gv('m-regime'),         hebergement: gv('m-heberg'),
    table: gv('m-table'),           email: gv('m-email'),
    adresse: gv('m-adresse'),       tel: gv('m-tel'),
    interets: gv('m-interets'),     notes: gv('m-notes')
  };
  if (idx >= 0 && state.guests[idx]) {
    const guest = { ...state.guests[idx], ...updated };
    const id = await saveGuestToFirebase(guest);
    if (id) { logAction('modification', 'Invités', `Invité modifié : "${updated.prenom} ${updated.nom}"`); state.guests[idx] = { ...guest, id }; }
  } else {
    const id = await saveGuestToFirebase(updated);
    if (id) { logAction('ajout', 'Invités', `Invité ajouté : "${updated.prenom} ${updated.nom}"`); state.guests.push({ ...updated, id }); }
  }
  closeGuestModal();
  renderGuests();
}

async function removeGuest(idx) {
  const _guest = state.guests[idx];
  if (!confirm(`Supprimer ${_guest?.prenom||''} ${_guest?.nom||''} de la liste des invités ?`)) return;
  logAction('suppression', 'Invités', `Invité supprimé : "${_guest?.prenom||'?'} ${_guest?.nom||''}"`);
  if (_guest?.id) await deleteGuestFromFirebase(_guest.id);
  state.guests.splice(idx, 1);
  renderGuests();
}

// ── Export Excel ──
function exportGuestsExcel() {
  if (!window.XLSX) { alert('Bibliothèque Excel non chargée, réessayez dans quelques secondes.'); return; }
  const COLS    = ['prenom','nom','categorie','liste','type_invitation','rsvp',
                   'adulte_enfant','nb_foyer','regime','hebergement','table',
                   'email','adresse','tel','interets','notes'];
  const HEADERS = ['Prénom','Nom','Catégorie','Liste (A/B)','Type invitation','RSVP',
                   'Adulte/Enfant','Nb foyer','Régime','Hébergement','Table',
                   'Email','Adresse','Téléphone',"Centres d'intérêts",'Notes'];
  const WIDTHS  = [12,14,18,8,22,14,12,8,14,14,8,24,30,14,20,22];
  const rows = [HEADERS, ...state.guests.map(g => COLS.map(c => g[c] ?? ''))];
  const ws = window.XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = WIDTHS.map(w => ({ wch: w }));
  const wb = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(wb, ws, 'Invités');
  window.XLSX.writeFile(wb, 'invites_mariage_keziah_briac.xlsx');
}

// ── Import Excel ──
async function importGuestsExcel(input) {
  if (!input.files?.length) return;
  if (!window.XLSX) { alert('Bibliothèque Excel non chargée.'); return; }
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = async (e) => {
    const wb   = window.XLSX.read(e.target.result, { type: 'array' });
    const ws   = wb.Sheets[wb.SheetNames[0]];
    const rows = window.XLSX.utils.sheet_to_json(ws, { defval: '' });
    const MAP  = {
      'Prénom':'prenom','Nom':'nom','Catégorie':'categorie',
      'Liste (A/B)':'liste','Type invitation':'type_invitation',
      'RSVP':'rsvp','Adulte/Enfant':'adulte_enfant','Nb foyer':'nb_foyer',
      'Régime':'regime','Hébergement':'hebergement','Table':'table',
      'Email':'email','Adresse':'adresse','Téléphone':'tel',
      "Centres d'intérêts":'interets','Notes':'notes'
    };
    let added = 0;
    for (const row of rows) {
      const g = { ...GUEST_DEFAULTS };
      for (const [xk, jk] of Object.entries(MAP)) {
        if (row[xk] !== undefined && row[xk] !== '') g[jk] = row[xk];
      }
      if (!g.prenom && !g.nom) continue;
      const id = await saveGuestToFirebase(g);
      if (id) { state.guests.push({ ...g, id }); added++; }
    }
    renderGuests();
    alert(`✅ ${added} invité(s) importé(s) avec succès !`);
  };
  reader.readAsArrayBuffer(file);
  input.value = '';
}

// ═══════════════════════════════════════
// PRESTATAIRES
// ═══════════════════════════════════════
function renderVendors() {
  const grid = document.getElementById('vendors-grid');
  grid.innerHTML = '';
  VENDORS_DATA.forEach((v, i) => {
    const div = document.createElement('div');
    div.className = 'prest-card';
    const saved = state['vendor_'+i] || v;
    div.innerHTML = `
      <div class="prest-cat">${v.cat}</div>
      <div class="prest-field"><label>Nom :</label><input value="${saved.name||v.name}" onchange="saveVendor(${i},'name',this.value)" style="font-weight:700"></div>
      <div class="prest-field"><label>Téléphone :</label><input value="${saved.tel||''}" placeholder="06 XX XX XX XX" onchange="saveVendor(${i},'tel',this.value)"></div>
      <div class="prest-field"><label>Email :</label><input value="${saved.email||v.email||''}" placeholder="contact@…" onchange="saveVendor(${i},'email',this.value)"></div>
      <div class="prest-field"><label>Site :</label><input value="${saved.site||v.site||''}" placeholder="www…" onchange="saveVendor(${i},'site',this.value)"></div>
      <div class="prest-status">
        <select onchange="saveVendor(${i},'status',this.value)" style="padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-family:inherit;font-size:0.82rem;">
          <option ${!saved.status||saved.status==='⏳ À contacter'?'selected':''}>⏳ À contacter</option>
          <option ${saved.status==='🔄 En négociation'?'selected':''}>🔄 En négociation</option>
          <option ${saved.status==='✅ Contrat signé'?'selected':''}>✅ Contrat signé</option>
          <option ${saved.status==='❌ Non retenu'?'selected':''}>❌ Non retenu</option>
        </select>
      </div>`;
    grid.appendChild(div);
  });
}

function saveVendor(i, field, val) {
  if (!state['vendor_'+i]) state['vendor_'+i] = {};
  state['vendor_'+i][field] = val;
  save();
}

// ═══════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════
function updateDashboard() {
  const defTotal  = CHECKLIST_DATA.reduce((a,s) => a + s.tasks.length, 0);
  const custTotal = (state.customTasks || []).length;
  const total = defTotal + custTotal;
  const done  = Object.values(state.checks).filter(Boolean).length;
  const pct   = total > 0 ? Math.round(done / total * 100) : 0;
  const el1 = document.getElementById('stat-tasks-done');
  const el2 = document.getElementById('stat-tasks-left');
  const bar = document.getElementById('main-progress');
  const pctEl = document.getElementById('progress-pct');
  if (el1) el1.textContent = done;
  if (el2) el2.textContent = Math.max(0, total - done);
  if (bar) bar.style.width = Math.min(100, pct) + '%';
  if (pctEl) pctEl.textContent = Math.min(100, pct) + '%';
  // Dernière modification
  const lmEl = document.getElementById('last-modified-info');
  if (lmEl && state.lastModifiedBy) {
    lmEl.textContent = '✏️ Dernière modification par ' + state.lastModifiedBy;
  }
}

// ═══════════════════════════════════════
// GANTT
// ═══════════════════════════════════════
const GANTT_PHASES = [
  { label: "15+ mois avant",  cat: "15+ mois avant",  start: "2026-04-06", end: "2026-06-30", color: "var(--pink)" },
  { label: "12 mois avant",   cat: "12 mois avant",   start: "2026-07-01", end: "2026-12-31", color: "#E91E8C" },
  { label: "9 mois avant",    cat: "9 mois avant",    start: "2026-10-01", end: "2027-01-31", color: "#AD1457" },
  { label: "6 mois avant",    cat: "6 mois avant",    start: "2027-01-01", end: "2027-03-31", color: "#880E4F" },
  { label: "3 mois avant",    cat: "3 mois avant",    start: "2027-04-01", end: "2027-06-09", color: "#6A1B9A" },
  { label: "1 mois avant",    cat: "1 mois avant",    start: "2027-06-10", end: "2027-07-02", color: "#4527A0" },
  { label: "Semaine du mariage", cat: "Semaine du mariage", start: "2027-07-03", end: "2027-07-10", color: "#1565C0" },
  { label: "Jour J ✨",       cat: "Jour J ✨",        start: "2027-07-10", end: "2027-07-10", color: "#FFD700" },
  { label: "Lendemain 🥐",   cat: "Lendemain du mariage 🥐", start: "2027-07-11", end: "2027-07-11", color: "#FF8F00" },
];

function renderGantt() {
  const container = document.getElementById('gantt-container');
  if (!container) return;

  const GANTT_START = new Date('2026-04-01');
  const GANTT_END   = new Date('2027-08-01');
  const totalDays   = (GANTT_END - GANTT_START) / 86400000;
  const today       = new Date();

  // Calcul du % fait par phase depuis la checklist (défaut + custom)
  const phaseDone = {};
  CHECKLIST_DATA.forEach((section, si) => {
    const defDone  = section.tasks.filter((_, ti) => state.checks[`${si}-${ti}`]).length;
    const customs  = (state.customTasks || []).filter(ct => ct.phase === section.cat);
    const custDone = customs.filter(ct => state.checks[`c-${ct.id}`]).length;
    const total    = section.tasks.length + customs.length;
    const done     = defDone + custDone;
    phaseDone[section.cat] = total > 0 ? Math.round(done / total * 100) : 0;
  });

  // Mois à afficher
  const months = [];
  let d = new Date(GANTT_START);
  while (d < GANTT_END) {
    months.push(new Date(d));
    d.setMonth(d.getMonth() + 1);
  }

  let html = `<div style="position:relative;min-width:900px;padding:8px 0">`;

  // ── En-tête mois
  html += `<div style="display:flex;margin-left:200px;border-bottom:2px solid var(--light-pink);padding-bottom:4px;margin-bottom:8px">`;
  months.forEach(m => {
    const pct = 100 / months.length;
    const label = m.toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
    html += `<div style="flex:0 0 ${pct}%;font-size:0.72rem;color:var(--grey);text-align:center;font-weight:600">${label}</div>`;
  });
  html += `</div>`;

  // ── Ligne "Aujourd'hui"
  const todayPct = Math.max(0, Math.min(100, (today - GANTT_START) / (GANTT_END - GANTT_START) * 100));
  html += `<div style="position:absolute;left:calc(200px + ${todayPct}% * (100% - 200px) / 100);top:32px;bottom:8px;width:2px;background:#FFD700;z-index:10;pointer-events:none">
    <div style="position:absolute;top:-18px;left:-20px;background:#FFD700;color:#333;font-size:0.65rem;font-weight:700;padding:2px 5px;border-radius:4px;white-space:nowrap">Auj.</div>
  </div>`;

  // ── Barres de phase
  GANTT_PHASES.forEach(phase => {
    const ps    = new Date(phase.start);
    const pe    = new Date(phase.end < phase.start ? phase.start : phase.end);
    const left  = Math.max(0, (ps - GANTT_START) / (GANTT_END - GANTT_START) * 100);
    const width = Math.max(0.5, (pe - ps) / (GANTT_END - GANTT_START) * 100);
    const done  = phaseDone[phase.cat] ?? 0;
    const isFuture = ps > today;
    const isDone   = done >= 80;

    const barColor = isDone ? 'var(--green)' : (done > 0 ? phase.color : 'var(--light-grey)');
    const textColor = (isFuture && done === 0) ? 'var(--grey)' : 'white';
    const border    = (isFuture && done === 0) ? '1px solid #ddd' : 'none';

    html += `<div style="display:flex;align-items:center;margin-bottom:10px">
      <div style="width:200px;flex-shrink:0;font-size:0.82rem;font-weight:600;color:var(--dark);padding-right:12px;text-align:right">${phase.label}</div>
      <div style="flex:1;position:relative;height:32px">
        <div style="position:absolute;left:${left}%;width:${width}%;height:100%;background:${barColor};border-radius:6px;border:${border};display:flex;align-items:center;padding:0 8px;overflow:hidden;transition:all 0.3s">
          <span style="font-size:0.75rem;font-weight:700;color:${textColor};white-space:nowrap">${done}%</span>
        </div>
      </div>
      <div style="width:45px;flex-shrink:0;text-align:right;font-size:0.78rem;color:${isDone ? 'var(--green)' : 'var(--grey)'};font-weight:${isDone ? 700 : 400}">${done}%</div>
    </div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// ═══════════════════════════════════════
// MATRICE DE DÉCISION
// ═══════════════════════════════════════
const MATRIX_CATEGORIES = [
  "Lieu de réception", "Traiteur", "Photographe", "Vidéaste",
  "DJ / Musiciens", "Fleuriste", "Coiffeur", "Maquilleur",
  "Gâteau / Pâtissier", "Voiture des mariés", "Officiant laïque"
];

const MATRIX_CRITERIA = [
  { key: "prix",     label: "Prix",          weight: 25, help: "Budget vs devis proposé" },
  { key: "qualite",  label: "Qualité",        weight: 30, help: "Références, portfolio, avis" },
  { key: "dispo",    label: "Disponibilité",  weight: 20, help: "Libre le 10 juillet 2027" },
  { key: "feeling",  label: "Feeling",        weight: 15, help: "Feeling humain, confiance" },
  { key: "reactivite", label: "Réactivité",   weight: 10, help: "Rapidité des réponses" },
];

function getMatrixState() {
  if (!state.matrix) state.matrix = {};
  return state.matrix;
}

function saveMatrix() {
  save();
}

function renderMatrixWeights() {
  const cont = document.getElementById('weights-container');
  if (!cont) return;
  const m = getMatrixState();
  const weights = m.weights || {};
  cont.innerHTML = MATRIX_CRITERIA.map(c => {
    const w = weights[c.key] !== undefined ? weights[c.key] : c.weight;
    return `<div>
      <label style="font-size:0.8rem;color:var(--grey);display:block;margin-bottom:4px">${c.label} <span style="font-size:0.72rem">(${c.help})</span></label>
      <div style="display:flex;align-items:center;gap:6px">
        <input type="number" min="0" max="100" value="${w}"
          style="width:60px;border:1px solid #ddd;border-radius:6px;padding:5px 8px;font-family:inherit;font-size:0.9rem;font-weight:700;color:var(--pink)"
          onchange="updateWeight('${c.key}',this.value)">
        <span style="font-size:0.85rem;color:var(--grey)">%</span>
      </div>
    </div>`;
  }).join('');
}

function updateWeight(key, val) {
  const m = getMatrixState();
  if (!m.weights) m.weights = {};
  m.weights[key] = parseInt(val) || 0;
  saveMatrix();
  renderMatrixScore();
}

function getWeights() {
  const m = getMatrixState();
  const w = m.weights || {};
  return MATRIX_CRITERIA.map(c => ({ ...c, weight: w[c.key] !== undefined ? w[c.key] : c.weight }));
}

function getCatKey() {
  const sel = document.getElementById('matrix-cat-select');
  return sel ? sel.value : MATRIX_CATEGORIES[0];
}

function addMatrixCandidate() {
  const cat = getCatKey();
  const m = getMatrixState();
  if (!m[cat]) m[cat] = [];
  m[cat].push({ name: 'Nouveau candidat', notes: '', scores: {} });
  saveMatrix();
  renderMatrix();
}

function removeMatrixCandidate(cat, i) {
  const m = getMatrixState();
  const _name = m[cat]?.[i]?.name || '?';
  if (!confirm(`Supprimer "${_name}" de la catégorie "${cat}" ?`)) return;
  logAction('suppression', 'Décisions', `Candidat supprimé : "${_name}" (${cat})`);
  m[cat].splice(i, 1);
  saveMatrix(); save();
  renderMatrix();
}

function updateMatrixField(cat, i, field, val) {
  const m = getMatrixState();
  if (!m[cat]) m[cat] = [];
  if (field.startsWith('score_')) {
    if (!m[cat][i].scores) m[cat][i].scores = {};
    m[cat][i].scores[field.replace('score_', '')] = parseFloat(val) || 0;
  } else {
    m[cat][i][field] = val;
  }
  saveMatrix();
  renderMatrixScore();
}

function calcScore(candidate) {
  const weights = getWeights();
  const totalWeight = weights.reduce((a, c) => a + c.weight, 0);
  if (totalWeight === 0) return 0;
  const scores = candidate.scores || {};
  const weighted = weights.reduce((a, c) => a + (scores[c.key] || 0) * c.weight, 0);
  return (weighted / totalWeight).toFixed(2);
}

function renderMatrix() {
  const sel = document.getElementById('matrix-cat-select');
  if (!sel) return;

  // Peupler le sélecteur depuis les catégories dynamiques
  const cats = getMatrixCategories();
  const currentVal = sel.value;
  sel.innerHTML = '';
  cats.forEach(cat => {
    const o = document.createElement('option');
    o.value = o.textContent = cat;
    if (cat === currentVal) o.selected = true;
    sel.appendChild(o);
  });

  // Afficher les tags de catégories
  renderMatrixCategoryTags();
  renderMatrixWeights();
  renderMatrixScore();
}

function renderMatrixScore() {
  const cat = getCatKey();
  const m = getMatrixState();
  const candidates = m[cat] || [];
  const weights = getWeights();

  const thead = document.getElementById('matrix-thead');
  const tbody = document.getElementById('matrix-tbody');
  if (!thead || !tbody) return;

  // Calcul du meilleur score
  const scores = candidates.map(c => parseFloat(calcScore(c)));
  const best   = Math.max(...scores, 0);

  // Header
  thead.innerHTML = `<tr>
    <th style="background:var(--pink);color:white;padding:10px 14px;text-align:left;border-radius:8px 0 0 0;min-width:160px">Candidat</th>
    ${weights.map(c => `<th style="background:var(--pink);color:white;padding:10px 10px;text-align:center;min-width:90px">
      ${c.label}<br><span style="font-size:0.72rem;opacity:0.8">(${c.weight}%)</span>
    </th>`).join('')}
    <th style="background:var(--dark-pink);color:white;padding:10px 14px;text-align:center;min-width:80px;border-radius:0 8px 0 0">Score ★</th>
    <th style="background:var(--dark-pink);color:white;padding:10px 14px;text-align:center;min-width:60px"></th>
  </tr>`;

  if (candidates.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${weights.length + 3}" style="text-align:center;padding:30px;color:var(--grey);font-style:italic">
      Aucun candidat — cliquez sur "+ Ajouter un candidat"
    </td></tr>`;
    return;
  }

  tbody.innerHTML = candidates.map((c, i) => {
    const score = parseFloat(calcScore(c));
    const isBest = score === best && score > 0;
    const rowBg = isBest ? 'var(--light-green)' : (i % 2 === 0 ? '#fafafa' : 'white');
    return `<tr>
      <td style="padding:10px 12px;background:${rowBg};border-bottom:1px solid #f0f0f0">
        <input value="${c.name}" onchange="updateMatrixField('${cat}',${i},'name',this.value)"
          style="width:100%;border:1px solid #e0e0e0;border-radius:6px;padding:5px 8px;font-family:inherit;font-size:0.87rem;font-weight:700">
        <input value="${c.notes||''}" placeholder="Notes…" onchange="updateMatrixField('${cat}',${i},'notes',this.value)"
          style="width:100%;border:1px solid #e0e0e0;border-radius:6px;padding:4px 8px;font-family:inherit;font-size:0.78rem;color:var(--grey);margin-top:4px">
      </td>
      ${weights.map(cr => `
        <td style="padding:8px;background:${rowBg};border-bottom:1px solid #f0f0f0;text-align:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
            <input type="range" min="0" max="5" step="0.5" value="${(c.scores||{})[cr.key]||0}"
              oninput="this.nextElementSibling.textContent=this.value;updateMatrixField('${cat}',${i},'score_${cr.key}',this.value)"
              style="width:70px;accent-color:var(--pink)">
            <span style="font-size:0.85rem;font-weight:700;color:var(--pink)">${(c.scores||{})[cr.key]||0}</span>
          </div>
        </td>`).join('')}
      <td style="padding:10px;background:${rowBg};border-bottom:1px solid #f0f0f0;text-align:center">
        <div style="font-size:1.4rem;font-weight:800;color:${isBest ? 'var(--green)' : 'var(--dark)'}">${score}</div>
        ${isBest ? `<div style="font-size:0.7rem;color:var(--green);font-weight:700">✅ Recommandé</div>
          <button onclick="pushWinnerToVendors(${JSON.stringify(cat)},${JSON.stringify(c.name)},${JSON.stringify(c.notes||'')})"
            style="margin-top:4px;font-size:0.7rem;background:var(--green);color:white;border:none;border-radius:5px;padding:3px 8px;cursor:pointer;font-family:inherit">→ Prestataires</button>` : ''}
      </td>
      <td style="padding:8px;background:${rowBg};border-bottom:1px solid #f0f0f0;text-align:center">
        <button onclick="removeMatrixCandidate('${cat}',${i})" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:1.1rem">🗑️</button>
      </td>
    </tr>`;
  }).join('');
}

// ═══════════════════════════════════════
// FIL ROUGE — DONNÉES
// ═══════════════════════════════════════
const ROLES_DATA = [
  {
    icon: "🎯", title: "Coordinateur·rice général·e",
    desc: "Suit le planning heure par heure, résout les imprévus, point de contact unique pour tous les prestataires.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "🚗", title: "Responsable logistique & transports",
    desc: "Gère les navettes, coordonne les arrivées/départs, s'assure que tout le monde est au bon endroit.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "📸", title: "Référent·e photographe & vidéaste",
    desc: "Accompagne le photographe, lui communique la liste des photos de groupe souhaitées, rassemble les personnes.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "🎵", title: "Référent·e DJ / Musique",
    desc: "Point de contact avec le DJ, valide les transitions musicales clés (entrée mariés, ouverture de bal…).",
    person: "", tel: "", notes: ""
  },
  {
    icon: "🍽️", title: "Référent·e traiteur & salle",
    desc: "Suit le déroulé du repas avec le traiteur, valide le placement des plats, coordonne la pièce montée.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "💐", title: "Responsable déco & accueil",
    desc: "Accueille les invités à l'arrivée au château, vérifie la déco, distribue les livrets de messe/programme.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "👶", title: "Responsable enfants",
    desc: "Supervise les animations pour enfants, veille à leur confort et sécurité pendant la journée.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "💍", title: "Gardien·ne des alliances",
    desc: "Conserve les alliances en sécurité et les remet au bon moment lors de la cérémonie.",
    person: "", tel: "", notes: ""
  },
  {
    icon: "🎤", title: "Responsable discours & animations",
    desc: "Coordonne l'ordre et le timing des discours, des animations, du jeu de diaporama…",
    person: "", tel: "", notes: ""
  },
  {
    icon: "👗", title: "Référent·e mariée (préparatifs)",
    desc: "Présent·e dès le matin, sac de survie en main, veille au confort et au timing de la mariée.",
    person: "", tel: "", notes: ""
  },
];

const FILROUGE_ROWS_DEFAULT = [
  { heure: "8h00",  action: "Début coiffure & maquillage de la mariée", resp: "", notes: "Prévoir petits déjeuners pour l'équipe" },
  { heure: "10h30", action: "Habillage de la mariée — début shooting préparatifs", resp: "", notes: "Vérifier que le photographe est arrivé" },
  { heure: "11h00", action: "Arrivée des témoins et proches à la mairie", resp: "", notes: "Prévoir covoiturage depuis le château" },
  { heure: "11h30", action: "Cérémonie civile à la mairie", resp: "", notes: "Vérifier les documents et pièces d'identité des témoins" },
  { heure: "12h30", action: "Fin de la mairie — déplacement vers l'église", resp: "", notes: "Prévoir navette ou cortège de voitures" },
  { heure: "13h30", action: "Ouverture des portes de l'église — accueil des invités", resp: "", notes: "Distribuer les livrets de messe à l'entrée" },
  { heure: "14h30", action: "Entrée des mariés dans l'église — début de la messe", resp: "", notes: "Vérifier que le musicien / organiste est en place" },
  { heure: "16h00", action: "Fin de la messe — sortie de l'église", resp: "", notes: "Pétales de roses / confettis prêts pour la sortie" },
  { heure: "16h15", action: "Photos de groupe devant l'église", resp: "", notes: "Liste des groupes photos à avoir préparée" },
  { heure: "16h45", action: "Départ en cortège vers le Château de Jallanges", resp: "", notes: "Navettes prévues pour les invités sans voiture" },
  { heure: "17h00", action: "Arrivée au château — accueil cocktail", resp: "", notes: "Musique d'ambiance, boissons et amuse-bouches prêts" },
  { heure: "17h00", action: "Photos de couple dans les jardins du château", resp: "", notes: "Photographe + mariés — témoins gèrent les invités" },
  { heure: "19h00", action: "Fin du cocktail — placement des invités en salle", resp: "", notes: "Plans de table affichés à l'entrée de la salle" },
  { heure: "19h30", action: "Entrée des mariés dans la salle de réception", resp: "", notes: "Musique d'entrée validée avec le DJ" },
  { heure: "19h45", action: "Discours de bienvenue & début du dîner", resp: "", notes: "Ordre des discours à définir" },
  { heure: "21h30", action: "Discours des témoins", resp: "", notes: "Micro, verre de champagne prêts" },
  { heure: "22h00", action: "Pièce montée — ouverture du bal", resp: "", notes: "Coordonner traiteur + DJ + photographe" },
  { heure: "22h30", action: "Soirée dansante", resp: "", notes: "Premier slow, animations, photobooth…" },
  { heure: "2h00",  action: "Fin de soirée — bouquet de la mariée (optionnel)", resp: "", notes: "Dernière danse, remerciements des mariés" },
];

const URGENCE_DEFAULT = [
  { cat: "Lieu — Château de Jallanges", nom: "", tel: "", role: "Responsable du domaine" },
  { cat: "Traiteur", nom: "", tel: "", role: "Chef ou responsable événement" },
  { cat: "Photographe", nom: "", tel: "", role: "" },
  { cat: "Vidéaste", nom: "", tel: "", role: "" },
  { cat: "DJ", nom: "", tel: "", role: "" },
  { cat: "Fleuriste", nom: "", tel: "", role: "" },
  { cat: "Transport / Navettes", nom: "", tel: "", role: "" },
  { cat: "Mairie", nom: "", tel: "", role: "Officier d'état civil" },
  { cat: "Église / Officiant", nom: "", tel: "", role: "Curé / Pasteur" },
];

function renderRoles() {
  const grid = document.getElementById('roles-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const saved = state.roles || ROLES_DATA.map(r => ({...r}));
  saved.forEach((role, i) => {
    const div = document.createElement('div');
    div.style.cssText = 'background:white;border-radius:10px;padding:16px;border:1px solid #eee;box-shadow:0 1px 6px rgba(0,0,0,0.06);border-left:4px solid var(--light-pink)';
    div.innerHTML = `
      <div style="font-size:1.4rem;margin-bottom:6px">${role.icon}</div>
      <div style="font-weight:700;color:var(--dark);margin-bottom:4px;font-size:0.95rem">${role.title}</div>
      <div style="font-size:0.8rem;color:var(--grey);margin-bottom:12px;line-height:1.5">${role.desc}</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <input placeholder="👤 Prénom & Nom" value="${role.person||''}"
          style="border:1px solid #e0e0e0;border-radius:6px;padding:7px 10px;font-family:inherit;font-size:0.85rem;font-weight:600;color:var(--dark)"
          onchange="saveRole(${i},'person',this.value)">
        <input placeholder="📞 Téléphone" value="${role.tel||''}"
          style="border:1px solid #e0e0e0;border-radius:6px;padding:7px 10px;font-family:inherit;font-size:0.85rem"
          onchange="saveRole(${i},'tel',this.value)">
        <textarea placeholder="📝 Notes / consignes spécifiques…" rows="2"
          style="border:1px solid #e0e0e0;border-radius:6px;padding:7px 10px;font-family:inherit;font-size:0.82rem;resize:vertical"
          onchange="saveRole(${i},'notes',this.value)">${role.notes||''}</textarea>
      </div>`;
    grid.appendChild(div);
  });
}

function saveRole(i, field, val) {
  if (!state.roles) state.roles = ROLES_DATA.map(r => ({...r}));
  state.roles[i][field] = val;
  save();
}

function renderFilRouge() {
  const tbody = document.getElementById('filrouge-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  memberDatalistHtml(); // refresh datalist
  const items = getJourJItems().slice().sort((a,b) => (a.ordre||0)-(b.ordre||0));
  if (items.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="4" style="padding:20px;text-align:center;color:var(--grey);font-style:italic">
      Aucun moment — ajoutez des moments depuis l'onglet "Jour J"
    </td>`;
    tbody.appendChild(tr);
    return;
  }
  items.forEach((item, idx) => {
    const bg = idx % 2 === 0 ? '#fafafa' : 'white';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding:8px 10px;border-bottom:1px solid #f0f0f0;background:${bg};font-weight:700;color:var(--pink);white-space:nowrap">
        ${escHtml(item.heure||'—')}
      </td>
      <td style="padding:8px 10px;border-bottom:1px solid #f0f0f0;background:${bg};font-weight:600;font-size:0.87rem">
        ${escHtml(item.titre||'—')}
      </td>
      <td style="padding:8px 10px;border-bottom:1px solid #f0f0f0;background:${bg}">
        <input value="${escHtml(item.resp||'')}" placeholder="À définir…"
          list="members-datalist"
          onchange="saveJourJItem('${item.id}','resp',this.value)"
          style="width:100%;border:1px solid #e0e0e0;border-radius:4px;padding:4px 8px;font-family:inherit;font-size:0.85rem;color:var(--pink);font-weight:600">
      </td>
      <td style="padding:8px 10px;border-bottom:1px solid #f0f0f0;background:${bg}">
        <input value="${escHtml(item.vigilance||'')}" placeholder="Points d'attention…"
          onchange="saveJourJItem('${item.id}','vigilance',this.value)"
          style="width:100%;border:1px solid #e0e0e0;border-radius:4px;padding:4px 8px;font-family:inherit;font-size:0.82rem;color:var(--grey)">
      </td>`;
    tbody.appendChild(tr);
  });
}

function saveFilRouge(i, field, val) {
  if (!state.filrougeRows) state.filrougeRows = FILROUGE_ROWS_DEFAULT.map(r => ({...r}));
  state.filrougeRows[i][field] = val;
  save();
}

function addFilRougeRow() {
  if (!state.filrougeRows) state.filrougeRows = FILROUGE_ROWS_DEFAULT.map(r => ({...r}));
  state.filrougeRows.push({ heure: '', action: '', resp: '', notes: '' });
  save(); renderFilRouge();
}

function renderUrgence() {
  const grid = document.getElementById('urgence-grid');
  if (!grid) return;
  grid.innerHTML = '';
  memberDatalistHtml(); // refresh datalist
  const contacts = state.urgenceContacts || URGENCE_DEFAULT.map(c => ({...c}));
  contacts.forEach((c, i) => {
    const div = document.createElement('div');
    div.style.cssText = 'background:var(--light-grey);border-radius:8px;padding:14px;border:1px solid #e0e0e0;position:relative';
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
        <input value="${escHtml(c.cat||'')}" onchange="saveUrgence(${i},'cat',this.value)"
          style="flex:1;font-weight:700;color:var(--pink);font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;border:none;background:transparent;font-family:inherit;padding:0">
        <button onclick="deleteUrgenceContact(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem"
          onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
      </div>
      <input placeholder="👤 Nom / Prénom" value="${escHtml(c.nom||'')}"
        list="members-datalist"
        onchange="saveUrgence(${i},'nom',this.value)"
        style="width:100%;margin-bottom:6px;border:1px solid #ddd;border-radius:5px;padding:6px 8px;font-family:inherit;font-size:0.85rem;font-weight:600">
      <input placeholder="📞 Téléphone" value="${escHtml(c.tel||'')}" onchange="saveUrgence(${i},'tel',this.value)"
        style="width:100%;margin-bottom:6px;border:1px solid #ddd;border-radius:5px;padding:6px 8px;font-family:inherit;font-size:0.85rem">
      <input placeholder="Rôle / Fonction" value="${escHtml(c.role||'')}" onchange="saveUrgence(${i},'role',this.value)"
        style="width:100%;border:1px solid #ddd;border-radius:5px;padding:6px 8px;font-family:inherit;font-size:0.82rem;color:var(--grey)">`;
    grid.appendChild(div);
  });
  if (!state.urgenceContacts) { state.urgenceContacts = URGENCE_DEFAULT.map(c => ({...c})); save(); }
}

function saveUrgence(i, field, val) {
  if (!state.urgenceContacts) state.urgenceContacts = URGENCE_DEFAULT.map(c => ({...c}));
  state.urgenceContacts[i][field] = val;
  save();
}

function addUrgenceContact() {
  if (!state.urgenceContacts) state.urgenceContacts = URGENCE_DEFAULT.map(c => ({...c}));
  state.urgenceContacts.push({ cat: 'Nouveau contact', nom: '', tel: '', role: '' });
  logAction('ajout', 'Fil rouge Jour J', 'Nouveau contact d\'urgence ajouté');
  save(); renderUrgence();
}

function exportFilRouge() {
  window.print();
}

// ═══════════════════════════════════════
// ═══════════════════════════════════════
// ADMINISTRATION
// ═══════════════════════════════════════
const FIREBASE_API_KEY = 'AIzaSyCYFt12IsMtPEUOlaV0TauBTjWtg1uNkRk';

function generateTempPassword() {
  const chars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let pwd = '';
  for (let i = 0; i < 10; i++) pwd += chars[Math.floor(Math.random() * chars.length)];
  document.getElementById('new-user-password').value = pwd;
}

async function adminCreateUser() {
  if (!isAdmin()) { alert('Accès refusé.'); return; }
  const name  = document.getElementById('new-user-name').value.trim();
  const email = document.getElementById('new-user-email').value.trim();
  const pwd   = document.getElementById('new-user-password').value.trim();
  const errEl = document.getElementById('admin-create-error');
  const okEl  = document.getElementById('admin-create-success');
  const btn   = document.getElementById('create-user-btn');
  errEl.style.display = 'none'; okEl.style.display = 'none';

  if (!name || !email || !pwd) { errEl.textContent = 'Veuillez remplir tous les champs.'; errEl.style.display = 'block'; return; }
  if (pwd.length < 6) { errEl.textContent = 'Le mot de passe doit faire au moins 6 caractères.'; errEl.style.display = 'block'; return; }

  btn.disabled = true; btn.textContent = 'Création…';

  try {
    // Créer l'utilisateur via REST API (ne déconnecte PAS l'admin)
    const res1 = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pwd, returnSecureToken: true })
    });
    const d1 = await res1.json();
    if (d1.error) throw new Error(d1.error.message);

    // Mettre à jour le displayName
    const res2 = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: d1.idToken, displayName: name, returnSecureToken: false })
    });
    const d2 = await res2.json();
    if (d2.error) throw new Error(d2.error.message);

    // Enregistrer dans Firestore membres
    if (window.fbSetDoc && window.fbDoc && window.db) {
      await window.fbSetDoc(
        window.fbDoc(window.db, 'wedding', 'keziah-briac', 'members', d1.localId),
        {
          displayName: name,
          email: email,
          createdAt: window.fbServerTimestamp(),
          createdBy: window.currentUser?.displayName || 'Admin',
          lastSeen: null,
        }
      );
    }

    okEl.innerHTML = `✅ Compte créé pour <strong>${escHtml(name)}</strong> (${escHtml(email)})<br>
      <span style="font-size:0.82rem">Mot de passe temporaire : <code style="background:#f0f0f0;padding:2px 6px;border-radius:4px">${escHtml(pwd)}</code> — à communiquer à la personne</span>`;
    okEl.style.display = 'block';
    document.getElementById('new-user-name').value = '';
    document.getElementById('new-user-email').value = '';
    document.getElementById('new-user-password').value = '';
    loadMembers();

  } catch(e) {
    const msgs = {
      'EMAIL_EXISTS':      'Un compte avec cet e-mail existe déjà.',
      'INVALID_EMAIL':     'Adresse e-mail invalide.',
      'WEAK_PASSWORD':     'Mot de passe trop faible.',
      'TOO_MANY_ATTEMPTS_TRY_LATER': 'Trop de tentatives. Réessayez plus tard.',
    };
    errEl.textContent = msgs[e.message] || ('Erreur : ' + e.message);
    errEl.style.display = 'block';
  }
  btn.disabled = false; btn.textContent = 'Créer le compte';
}

async function loadMembers() {
  if (!isAdmin()) return;
  const el = document.getElementById('members-list');
  if (!el) return;
  el.innerHTML = '<p style="color:var(--grey);font-style:italic;font-size:0.88rem">Chargement…</p>';
  try {
    const snap = await window.fbGetDocs(window.fbCollection(window.db, 'wedding', 'keziah-briac', 'members'));
    const members = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    if (members.length === 0) {
      el.innerHTML = '<p style="color:var(--grey);font-style:italic;font-size:0.88rem">Aucun membre inscrit pour l\'instant.</p>';
      return;
    }
    el.innerHTML = members.map(m => {
      const isCurrentAdmin = ADMIN_EMAILS.includes(m.email);
      const lastSeen = m.lastSeen?.toDate ? m.lastSeen.toDate().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' }) : '—';
      const createdAt = m.createdAt?.toDate ? m.createdAt.toDate().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' }) : '—';
      return `<div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:#fafafa;border-radius:12px;border:1px solid #f0f0f0;flex-wrap:wrap">
        <div style="width:42px;height:42px;border-radius:50%;background:${isCurrentAdmin ? '#FFF3E0' : 'var(--light-pink)'};display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0">
          ${isCurrentAdmin ? '⚙️' : '👤'}
        </div>
        <div style="flex:1;min-width:150px">
          <div style="font-weight:700;font-size:0.95rem">${escHtml(m.displayName||'—')}
            ${isCurrentAdmin ? '<span style="background:#FFF3E0;color:#E65100;border-radius:10px;padding:1px 8px;font-size:0.72rem;font-weight:700;margin-left:6px">Admin</span>' : ''}
          </div>
          <div style="font-size:0.82rem;color:var(--grey)">${escHtml(m.email||'—')}</div>
        </div>
        <div style="font-size:0.8rem;color:var(--grey);text-align:right;min-width:140px">
          <div>Inscrit le ${createdAt}</div>
          <div>Dernière visite : ${lastSeen}</div>
          ${m.createdBy ? `<div style="font-style:italic">Créé par ${escHtml(m.createdBy)}</div>` : ''}
        </div>
      </div>`;
    }).join('');
  } catch(e) {
    el.innerHTML = `<p style="color:var(--red)">Erreur de chargement : ${e.message}</p>`;
  }
}

// ═══════════════════════════════════════
// PLAN DE TABLE
// ═══════════════════════════════════════

function renderSeatingChart() {
  const tableStatsEl   = document.getElementById('table-stats');
  const tablesGridEl   = document.getElementById('tables-grid');
  const tablesEmptyEl  = document.getElementById('tables-empty');
  const unassignedEl   = document.getElementById('unassigned-list');
  const unassignedCnt  = document.getElementById('unassigned-count');
  if (!tableStatsEl) return;

  const tables  = state.tables  || [];
  const guests  = state.guests  || [];
  const search  = (document.getElementById('table-guest-search')?.value || '').toLowerCase().trim();
  const tableNames = new Set(tables.map(t => t.name));

  // Compute subsets
  const assignedGuests   = guests.filter(g => g.table && tableNames.has(g.table));
  const unassignedGuests = guests.filter(g => !g.table || !tableNames.has(g.table));
  const totalCapacity    = tables.reduce((s, t) => s + (parseInt(t.capacity) || 0), 0);

  // Stats
  tableStatsEl.innerHTML = `
    <div class="stat-card"><div class="val">${tables.length}</div><div class="lbl">Tables créées</div></div>
    <div class="stat-card"><div class="val">${totalCapacity}</div><div class="lbl">Places totales</div></div>
    <div class="stat-card" style="border-color:var(--green)"><div class="val" style="color:var(--green)">${assignedGuests.length}</div><div class="lbl">Invités placés</div></div>
    <div class="stat-card" style="border-color:${unassignedGuests.length > 0 ? 'var(--orange)' : 'var(--green)'}">
      <div class="val" style="color:${unassignedGuests.length > 0 ? 'var(--orange)' : 'var(--green)'}">${unassignedGuests.length}</div>
      <div class="lbl">Non placés</div>
    </div>`;

  // Unassigned guests panel
  if (unassignedCnt) unassignedCnt.textContent = unassignedGuests.length;
  const filtered = unassignedGuests.filter(g => !search || guestFullName(g).toLowerCase().includes(search));
  if (unassignedEl) {
    unassignedEl.innerHTML = filtered.length === 0
      ? `<p style="text-align:center;color:var(--grey);font-size:0.82rem;padding:20px 0;font-style:italic">${search ? 'Aucun résultat' : '🎉 Tous les invités sont placés !'}</p>`
      : filtered.map(g => {
          const gid = escHtml(g.id || guestFullName(g));
          return `<div class="guest-chip-unassigned" onclick="openAssignModal('${gid}')">
            <span>👤</span>
            <span style="flex:1">${escHtml(guestFullName(g))}</span>
            ${g.categorie ? `<span style="font-size:0.75rem;color:var(--grey)">${escHtml(g.categorie)}</span>` : ''}
          </div>`;
        }).join('');
  }

  // Tables grid
  if (tables.length === 0) {
    tablesGridEl.innerHTML = '';
    tablesEmptyEl.style.display = 'block';
    return;
  }
  tablesEmptyEl.style.display = 'none';

  tablesGridEl.innerHTML = tables.map(table => {
    const tc       = table.color || TABLE_COLORS[0];
    const tGuests  = guests.filter(g => g.table === table.name);
    const cap      = parseInt(table.capacity) || 10;
    const isFull   = tGuests.length >= cap;
    const pct      = Math.min(100, Math.round(tGuests.length / cap * 100));
    const tid      = escHtml(table.id);
    const tname    = escHtml(table.name);

    return `<div class="table-visual-card">
      <div class="table-visual-header" style="background:${tc.bg}40;border-bottom:1px solid ${tc.bg}">
        <div class="table-circle-icon" style="background:${tc.bg};color:${tc.color}">🪑</div>
        <div style="flex:1;min-width:0">
          <div class="table-name" style="color:${tc.color}">${tname}</div>
          <div class="table-capacity">${tGuests.length} / ${cap} places
            ${isFull ? '<span style="color:var(--green);font-weight:700;margin-left:4px">✓ Complet</span>' : ''}
          </div>
          <div style="margin-top:5px;background:#eee;border-radius:4px;height:4px;width:100%">
            <div style="background:${isFull ? 'var(--green)' : tc.color};height:4px;border-radius:4px;width:${pct}%;transition:width 0.3s"></div>
          </div>
        </div>
        <div style="display:flex;gap:2px;flex-shrink:0">
          <button onclick="openEditTableModal('${tid}')" style="background:none;border:none;cursor:pointer;font-size:1rem;padding:4px 6px;border-radius:6px;transition:background 0.15s" title="Modifier" onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='none'">✏️</button>
          <button onclick="deleteTable('${tid}')" style="background:none;border:none;cursor:pointer;font-size:1rem;padding:4px 6px;border-radius:6px;transition:background 0.15s" title="Supprimer" onmouseover="this.style.background='#fff0f5'" onmouseout="this.style.background='none'">🗑️</button>
        </div>
      </div>
      <div class="table-guest-list">
        ${tGuests.length === 0
          ? `<p style="text-align:center;color:#bbb;font-size:0.82rem;padding:10px 0;font-style:italic">Table vide</p>`
          : tGuests.map(g => {
              const gid = escHtml(g.id || guestFullName(g));
              return `<div class="table-guest-chip">
                <span style="flex:1">${escHtml(guestFullName(g))}</span>
                ${g.regime ? `<span style="font-size:0.7rem;color:var(--grey);margin-right:4px">${escHtml(g.regime)}</span>` : ''}
                <button onclick="unassignGuest('${gid}')" title="Retirer de la table"
                  style="background:none;border:none;cursor:pointer;color:#ccc;font-size:0.9rem;padding:0 0 0 6px;line-height:1" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">✕</button>
              </div>`;
            }).join('')
        }
      </div>
      ${!isFull
        ? `<button class="table-add-btn" onclick="openAssignModalForTable('${tname}')">+ Ajouter un invité</button>`
        : '<div style="height:12px"></div>'}
    </div>`;
  }).join('');
}

// ── Modals table ──
function openAddTableModal() {
  document.getElementById('table-modal-title').textContent = 'Ajouter une table';
  document.getElementById('table-modal-id').value = '';
  document.getElementById('table-modal-name').value = 'Table ' + ((state.tables || []).length + 1);
  document.getElementById('table-modal-capacity').value = '10';
  _selectedTableColorIdx = (state.tables || []).length % TABLE_COLORS.length;
  renderTableColorPicker();
  document.getElementById('table-modal').style.display = 'flex';
  setTimeout(() => document.getElementById('table-modal-name').select(), 50);
}

function openEditTableModal(id) {
  const t = (state.tables || []).find(t => t.id === id);
  if (!t) return;
  document.getElementById('table-modal-title').textContent = 'Modifier la table';
  document.getElementById('table-modal-id').value = t.id;
  document.getElementById('table-modal-name').value = t.name;
  document.getElementById('table-modal-capacity').value = t.capacity;
  _selectedTableColorIdx = TABLE_COLORS.findIndex(c => c.bg === (t.color || TABLE_COLORS[0]).bg);
  if (_selectedTableColorIdx < 0) _selectedTableColorIdx = 0;
  renderTableColorPicker();
  document.getElementById('table-modal').style.display = 'flex';
}

function renderTableColorPicker() {
  document.getElementById('table-color-picker').innerHTML = TABLE_COLORS.map((c, i) =>
    `<div onclick="selectTableColor(${i})" title="${c.label}"
      style="width:32px;height:32px;border-radius:50%;background:${c.bg};
        border:3px solid ${i === _selectedTableColorIdx ? c.color : 'transparent'};
        cursor:pointer;transition:all 0.15s;box-shadow:${i === _selectedTableColorIdx ? '0 0 0 2px ' + c.color + '44' : 'none'}"
      data-idx="${i}"></div>`
  ).join('');
}

function selectTableColor(idx) {
  _selectedTableColorIdx = idx;
  renderTableColorPicker();
}

function closeTableModal() {
  document.getElementById('table-modal').style.display = 'none';
}

async function saveTableFromModal() {
  const id       = document.getElementById('table-modal-id').value.trim();
  const name     = document.getElementById('table-modal-name').value.trim();
  const capacity = parseInt(document.getElementById('table-modal-capacity').value) || 10;
  const color    = TABLE_COLORS[_selectedTableColorIdx] || TABLE_COLORS[0];
  if (!name) { alert('Veuillez saisir un nom de table.'); return; }
  if (!state.tables) state.tables = [];

  if (id) {
    const oldTable = state.tables.find(t => t.id === id);
    const oldName  = oldTable?.name;
    const idx      = state.tables.findIndex(t => t.id === id);
    state.tables[idx] = { id, name, capacity, color };
    // Si le nom a changé, mettre à jour les invités
    if (oldName && oldName !== name) {
      const toUpdate = state.guests.filter(g => g.table === oldName);
      await Promise.all(toUpdate.map(g => { g.table = name; return saveGuestToFirebase(g); }));
    }
  } else {
    const newId = 'tbl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
    state.tables.push({ id: newId, name, capacity, color });
  }
  closeTableModal();
  save();
  renderSeatingChart();
}

async function deleteTable(id) {
  const t = (state.tables || []).find(t => t.id === id);
  if (!t) return;
  const nb = (state.guests || []).filter(g => g.table === t.name).length;
  const msg = nb > 0
    ? `Supprimer "${t.name}" ? Les ${nb} invité(s) assigné(s) seront replacés dans les non placés.`
    : `Supprimer la table "${t.name}" ?`;
  if (!confirm(msg)) return;
  logAction('suppression', 'Plan de table', `Table supprimée : "${t.name}"${nb>0?` (${nb} invité(s) déplacé(s))`:''}`) ;
  await Promise.all(state.guests.filter(g => g.table === t.name).map(g => { g.table = ''; return saveGuestToFirebase(g); }));
  state.tables = state.tables.filter(t => t.id !== id);
  save();
  renderSeatingChart();
}

// ── Modals assignation ──
function openAssignModal(guestId) {
  _assignModalGuestId     = guestId;
  _assignModalTargetTable = null;
  const g = findGuestById(guestId);
  document.getElementById('assign-modal-subtitle').textContent = g ? guestFullName(g) : guestId;
  renderAssignList('guest');
  document.getElementById('assign-modal').style.display = 'flex';
}

function openAssignModalForTable(tableName) {
  _assignModalGuestId     = null;
  _assignModalTargetTable = tableName;
  document.getElementById('assign-modal-subtitle').textContent = 'Ajouter à : ' + tableName;
  renderAssignList('table');
  document.getElementById('assign-modal').style.display = 'flex';
}

function renderAssignList(mode) {
  const el = document.getElementById('assign-list');
  if (mode === 'guest') {
    // List of tables to pick from
    const tables = state.tables || [];
    if (!tables.length) { el.innerHTML = '<p style="color:var(--grey);font-size:0.88rem;text-align:center">Aucune table créée.</p>'; return; }
    el.innerHTML = tables.map(t => {
      const cnt    = (state.guests || []).filter(g => g.table === t.name).length;
      const isFull = cnt >= (parseInt(t.capacity) || 10);
      const tc     = t.color || TABLE_COLORS[0];
      return `<div onclick="${isFull ? '' : `doAssignGuest('${escHtml(t.name)}')`}"
        style="padding:11px 14px;border:2px solid ${tc.bg};border-radius:10px;
          cursor:${isFull ? 'not-allowed' : 'pointer'};font-size:0.88rem;
          background:${tc.bg}60;opacity:${isFull ? 0.5 : 1};
          display:flex;align-items:center;gap:10px;transition:all 0.15s"
        ${isFull ? '' : `onmouseover="this.style.borderColor='${tc.color}'" onmouseout="this.style.borderColor='${tc.bg}'"`}>
        <div style="width:12px;height:12px;border-radius:50%;background:${tc.color};flex-shrink:0"></div>
        <span style="flex:1;font-weight:600">${escHtml(t.name)}</span>
        <span style="font-size:0.8rem;color:${isFull ? 'var(--green)' : 'var(--grey)'}">
          ${cnt}/${t.capacity}${isFull ? ' ✓' : ''}
        </span>
      </div>`;
    }).join('');
  } else {
    // List of unassigned guests to pick from
    const tableNames   = new Set((state.tables || []).map(t => t.name));
    const unassigned   = (state.guests || []).filter(g => !g.table || !tableNames.has(g.table));
    if (!unassigned.length) { el.innerHTML = '<p style="color:var(--grey);font-size:0.88rem;text-align:center">Tous les invités sont déjà placés !</p>'; return; }
    el.innerHTML = unassigned.map(g => {
      const gid = escHtml(g.id || guestFullName(g));
      return `<div onclick="doAssignFromTable('${gid}')"
        style="padding:10px 14px;border:1px solid #eee;border-radius:10px;cursor:pointer;font-size:0.88rem;
          display:flex;align-items:center;gap:8px;transition:all 0.15s"
        onmouseover="this.style.background='var(--light-pink)';this.style.borderColor='var(--pink)'"
        onmouseout="this.style.background='';this.style.borderColor='#eee'">
        <span>👤</span>
        <span style="flex:1">${escHtml(guestFullName(g))}</span>
        ${g.categorie ? `<span style="font-size:0.75rem;color:var(--grey)">${escHtml(g.categorie)}</span>` : ''}
      </div>`;
    }).join('');
  }
}

async function doAssignGuest(tableName) {
  const g = findGuestById(_assignModalGuestId);
  if (!g) return;
  g.table = tableName;
  await saveGuestToFirebase(g);
  closeAssignModal();
  renderSeatingChart();
}

async function doAssignFromTable(guestId) {
  const g = findGuestById(guestId);
  if (!g) return;
  g.table = _assignModalTargetTable;
  await saveGuestToFirebase(g);
  closeAssignModal();
  renderSeatingChart();
}

async function unassignGuest(guestId) {
  const g = findGuestById(guestId);
  if (!g) return;
  g.table = '';
  await saveGuestToFirebase(g);
  renderSeatingChart();
}

function findGuestById(idOrName) {
  return (state.guests || []).find(g => g.id === idOrName || guestFullName(g) === idOrName);
}

function closeAssignModal() {
  document.getElementById('assign-modal').style.display = 'none';
  _assignModalGuestId = null;
  _assignModalTargetTable = null;
}

// ═══════════════════════════════════════
// AUTHENTIFICATION
// ═══════════════════════════════════════
window.currentUser = null;

function switchAuthTab(tab) {
  document.getElementById('form-login').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('form-register').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('auth-error').style.display = 'none';
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg; el.style.display = 'block';
}

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pw    = document.getElementById('login-password').value;
  const btn   = document.getElementById('login-btn');
  if (!email || !pw) { showAuthError('Veuillez remplir tous les champs.'); return; }
  btn.disabled = true; btn.textContent = 'Connexion…';
  document.getElementById('auth-error').style.display = 'none';
  try {
    await window.fbSignIn(window.fbAuth, email, pw);
  } catch(e) {
    const msgs = {
      'auth/user-not-found':     'Aucun compte avec cet e-mail.',
      'auth/wrong-password':     'Mot de passe incorrect.',
      'auth/invalid-credential': 'E-mail ou mot de passe incorrect.',
      'auth/invalid-email':      'Adresse e-mail invalide.',
      'auth/too-many-requests':  'Trop de tentatives — réessayez dans quelques minutes.',
    };
    showAuthError(msgs[e.code] || 'Erreur de connexion (' + e.code + ')');
    btn.disabled = false; btn.textContent = 'Se connecter';
  }
}

async function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pw    = document.getElementById('reg-password').value;
  const btn   = document.getElementById('register-btn');
  if (!name || !email || !pw) { showAuthError('Veuillez remplir tous les champs.'); return; }
  if (pw.length < 6) { showAuthError('Le mot de passe doit faire au moins 6 caractères.'); return; }
  btn.disabled = true; btn.textContent = 'Création…';
  document.getElementById('auth-error').style.display = 'none';
  try {
    const cred = await window.fbSignUp(window.fbAuth, email, pw);
    await window.fbUpdateProfile(cred.user, { displayName: name });
  } catch(e) {
    const msgs = {
      'auth/email-already-in-use': 'Un compte avec cet e-mail existe déjà.',
      'auth/invalid-email':        'Adresse e-mail invalide.',
      'auth/weak-password':        'Mot de passe trop faible (6 caractères minimum).',
    };
    showAuthError(msgs[e.code] || 'Erreur lors de la création du compte (' + e.code + ')');
    btn.disabled = false; btn.textContent = 'Créer mon compte';
  }
}

async function doSignOut() {
  if (!confirm('Se déconnecter ?')) return;
  try { await window.fbSignOut(window.fbAuth); } catch(e) { console.error(e); }
}

function updateNavUser(user) {
  const el = document.getElementById('nav-user');
  const adminLink   = document.getElementById('nav-admin-link');
  const mobAdminLink= document.getElementById('mob-admin-link');
  const stabMembres = document.getElementById('stab-membres');
  const mobIco      = document.getElementById('mob-acct-ico');
  if (!el) return;
  if (user) {
    const name    = user.displayName || user.email.split('@')[0];
    const admin   = isAdmin();
    const initials= name.split(' ').filter(Boolean).map(w=>w[0]).join('').slice(0,2).toUpperCase() || '?';
    el.innerHTML = `
      <div id="acct-wrap">
        <button class="account-avatar${admin?' is-admin':''}" onclick="toggleAcctDropdown()" title="${escHtml(name)}" id="acct-btn">${initials}</button>
        <div class="account-dropdown" id="acct-dropdown">
          <div class="acct-head">
            <div class="acct-name">${escHtml(name)}${admin?'&ensp;<span style="background:#FFF3E0;color:#E65100;border-radius:8px;padding:1px 7px;font-size:0.7rem;font-weight:700">Admin</span>':''}</div>
            <div class="acct-email">${escHtml(user.email)}</div>
          </div>
          <button class="acct-item" onclick="openAccountSettings('profil')">👤&nbsp; Mon profil</button>
          <button class="acct-item" onclick="openAccountSettings('securite')">🔑&nbsp; Changer le mot de passe</button>
          ${admin?'<div class="acct-sep"></div><button class="acct-item" onclick="openAccountSettings(\'membres\');loadSettingsMembers()">👥&nbsp; Gérer les membres</button>':''}
          <div class="acct-sep"></div>
          <button class="acct-item danger" onclick="doSignOut()">🚪&nbsp; Se déconnecter</button>
        </div>
      </div>`;
    if (adminLink)    adminLink.style.display    = admin ? '' : 'none';
    if (mobAdminLink) mobAdminLink.style.display = admin ? '' : 'none';
    if (stabMembres)  stabMembres.style.display  = admin ? '' : 'none';
    if (mobIco)       mobIco.textContent          = admin ? '⚙️' : '👤';
    registerMemberInFirestore(user);
  } else {
    el.innerHTML = '';
    if (adminLink)    adminLink.style.display    = 'none';
    if (mobAdminLink) mobAdminLink.style.display = 'none';
    if (stabMembres)  stabMembres.style.display  = 'none';
  }
}

function toggleAcctDropdown() {
  const dd = document.getElementById('acct-dropdown');
  if (dd) dd.classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const wrap = document.getElementById('acct-wrap');
  const dd   = document.getElementById('acct-dropdown');
  if (dd && dd.classList.contains('open') && wrap && !wrap.contains(e.target)) {
    dd.classList.remove('open');
  }
});

async function registerMemberInFirestore(user) {
  if (!window.fbSetDoc || !window.fbDoc || !window.fbGetDoc || !window.db) return;
  try {
    const ref = window.fbDoc(window.db, 'wedding', 'keziah-briac', 'members', user.uid);
    await window.fbSetDoc(ref, {
      displayName: user.displayName || user.email.split('@')[0],
      email: user.email,
      lastSeen: window.fbServerTimestamp(),
    }, { merge: true });
    // Vérifier le statut admin stocké dans Firestore
    const snap = await window.fbGetDoc(ref);
    if (snap.exists()) {
      const firestoreIsAdmin = snap.data().isAdmin === true;
      if (firestoreIsAdmin !== window.currentUserIsAdmin) {
        window.currentUserIsAdmin = firestoreIsAdmin;
        // Re-render nav seulement si le statut admin a changé
        updateNavUser(user);
      }
    }
  } catch(e) { console.warn('Erreur enregistrement membre:', e); }
}

// ── MOBILE MENU ────────────────────────────────────────
function openMobMenu()  {
  document.getElementById('mob-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobMenu() {
  document.getElementById('mob-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function mobileGo(section) {
  closeMobMenu();
  const link = document.querySelector(`.nav a[onclick*="'${section}'"]`);
  if (link) link.click();
}

// ── QUICK ADD ──────────────────────────────────────────
function openQuickAdd()  { document.getElementById('quick-add-overlay').classList.remove('hidden'); }
function closeQuickAdd() { document.getElementById('quick-add-overlay').classList.add('hidden'); }
function quickAddGo(type) {
  closeQuickAdd();
  if (type === 'guest') {
    mobileGo('guests');
    setTimeout(() => openGuestModal(-1), 250);
  } else if (type === 'budget') {
    mobileGo('budget');
    setTimeout(() => { addBudgetRow(); document.querySelector('#budget')?.scrollIntoView({behavior:'smooth'}); }, 250);
  } else if (type === 'task') {
    mobileGo('checklist');
    setTimeout(() => { const btn = document.querySelector('.btn-add-task'); if (btn) btn.click(); }, 250);
  } else if (type === 'idea') {
    mobileGo('idees');
    setTimeout(() => openIdeeModal(), 250);
  } else if (type === 'song') {
    mobileGo('playlist');
    setTimeout(() => openSongModal(), 250);
  }
}

// ── ACCOUNT SETTINGS MODAL ────────────────────────────
function openAccountSettings(tab) {
  const dd = document.getElementById('acct-dropdown');
  if (dd) dd.classList.remove('open');
  const user = window.currentUser;
  if (user) {
    const n = document.getElementById('s-displayname'); if (n) n.value = user.displayName || '';
    const e = document.getElementById('s-email');       if (e) e.value = user.email || '';
  }
  ['s-profil-msg','s-pwd-msg','sm-create-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display='none'; el.textContent=''; }
  });
  const p1=document.getElementById('s-pwd1'); if(p1) p1.value='';
  const p2=document.getElementById('s-pwd2'); if(p2) p2.value='';
  document.getElementById('acct-overlay').classList.remove('hidden');
  switchStab(tab || 'profil');
}
function closeAccountSettings() { document.getElementById('acct-overlay').classList.add('hidden'); }
function switchStab(tab) {
  ['profil','securite','membres'].forEach(t => {
    const b = document.getElementById('stab-'+t);
    const p = document.getElementById('spanel-'+t);
    if (b) b.classList.toggle('active', t===tab);
    if (p) p.classList.toggle('active', t===tab);
  });
}

async function saveDisplayName() {
  const input = document.getElementById('s-displayname');
  const msg   = document.getElementById('s-profil-msg');
  const name  = input.value.trim();
  if (!name) { showSMsg(msg,'Veuillez entrer un prénom et nom.','error'); return; }
  if (!window.currentUser) return;
  try {
    await window.fbUpdateProfile(window.currentUser, { displayName: name });
    if (window.fbSetDoc && window.fbDoc && window.db) {
      await window.fbSetDoc(
        window.fbDoc(window.db,'wedding','keziah-briac','members',window.currentUser.uid),
        { displayName: name }, { merge: true }
      );
    }
    showSMsg(msg,'✅ Nom mis à jour !','ok');
    updateNavUser(window.currentUser);
  } catch(e) { showSMsg(msg,'❌ Erreur : '+e.message,'error'); }
}

async function saveNewPassword() {
  const p1  = document.getElementById('s-pwd1').value;
  const p2  = document.getElementById('s-pwd2').value;
  const msg = document.getElementById('s-pwd-msg');
  if (!p1)         { showSMsg(msg,'Entrez un nouveau mot de passe.','error'); return; }
  if (p1.length<6) { showSMsg(msg,'Le mot de passe doit faire au moins 6 caractères.','error'); return; }
  if (p1!==p2)     { showSMsg(msg,'Les mots de passe ne correspondent pas.','error'); return; }
  if (!window.currentUser) return;
  try {
    const token = await window.currentUser.getIdToken();
    const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`, {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ idToken: token, password: p1, returnSecureToken: false })
    });
    const d = await res.json();
    if (d.error) throw new Error(d.error.message);
    showSMsg(msg,'✅ Mot de passe changé avec succès !','ok');
    document.getElementById('s-pwd1').value='';
    document.getElementById('s-pwd2').value='';
  } catch(e) { showSMsg(msg,'❌ Erreur : '+e.message,'error'); }
}

function showSMsg(el, text, type) {
  if (!el) return;
  el.textContent = text;
  el.style.display = 'block';
  el.style.background = type==='ok' ? 'var(--light-green)' : 'var(--light-red)';
  el.style.color      = type==='ok' ? 'var(--green)'       : 'var(--red)';
}

async function loadSettingsMembers() {
  if (!isAdmin()) return;
  const el = document.getElementById('sm-members-list');
  if (!el) return;
  el.innerHTML = '<p style="color:var(--grey);font-size:0.85rem;font-style:italic">Chargement…</p>';
  try {
    const snap = await window.fbGetDocs(window.fbCollection(window.db,'wedding','keziah-briac','members'));
    const members = snap.docs.map(d=>({id:d.id,...d.data()}));
    if (!members.length) { el.innerHTML='<p style="color:var(--grey);font-size:0.85rem;font-style:italic">Aucun membre.</p>'; return; }
    el.innerHTML = members.map(m => {
      const isMAdmin = ADMIN_EMAILS.includes(m.email) || m.isAdmin===true;
      const isMe     = window.currentUser && m.email===window.currentUser.email;
      const initials = (m.displayName||m.email||'?').split(' ').filter(Boolean).map(w=>w[0]).join('').slice(0,2).toUpperCase();
      const lastSeen = m.lastSeen?.toDate ? m.lastSeen.toDate().toLocaleDateString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}) : '—';
      const isSuperAdmin = ADMIN_EMAILS.includes(m.email);
      return `<div class="member-row">
        <div class="mbr-avatar${isMAdmin?' is-admin':''}">${initials}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:0.88rem;line-height:1.3">${escHtml(m.displayName||'—')}
            ${isMAdmin?'<span style="background:#FFF3E0;color:#E65100;border-radius:8px;padding:1px 6px;font-size:0.68rem;font-weight:700;margin-left:4px">Admin</span>':''}
            ${isMe?'<span style="background:var(--light-blue);color:var(--blue);border-radius:8px;padding:1px 6px;font-size:0.68rem;margin-left:4px">Moi</span>':''}
          </div>
          <div style="font-size:0.75rem;color:var(--grey)">${escHtml(m.email||'—')} · Vu ${lastSeen}</div>
        </div>
        ${(!isMe && !isSuperAdmin) ? `
          <button onclick="toggleMemberAdmin('${m.id}','${escHtml(m.email)}',${!isMAdmin})"
            style="background:none;border:1px solid ${isMAdmin?'#E65100':'#ddd'};border-radius:8px;padding:4px 10px;cursor:pointer;font-size:0.74rem;color:${isMAdmin?'#E65100':'var(--grey)'};font-family:inherit;white-space:nowrap">
            ${isMAdmin?'⊖ Admin':'⊕ Admin'}
          </button>` : ''}
      </div>`;
    }).join('');
  } catch(e) { el.innerHTML=`<p style="color:var(--red);font-size:0.85rem">Erreur : ${e.message}</p>`; }
}

async function toggleMemberAdmin(docId, email, makeAdmin) {
  if (!isAdmin()) return;
  const action = makeAdmin ? `Rendre ${email} administrateur(rice) ?` : `Retirer les droits admin de ${email} ?`;
  if (!confirm(action)) return;
  try {
    await window.fbSetDoc(
      window.fbDoc(window.db,'wedding','keziah-briac','members',docId),
      { isAdmin: makeAdmin }, { merge: true }
    );
    loadSettingsMembers();
  } catch(e) { alert('Erreur : '+e.message); }
}

async function settingsCreateUser() {
  if (!isAdmin()) return;
  const name  = document.getElementById('sm-name').value.trim();
  const email = document.getElementById('sm-email').value.trim();
  const pwd   = document.getElementById('sm-pwd').value.trim();
  const msg   = document.getElementById('sm-create-msg');
  const btn   = document.getElementById('sm-create-btn');
  if (!name||!email||!pwd) { showSMsg(msg,'Remplissez tous les champs.','error'); return; }
  if (pwd.length<6)        { showSMsg(msg,'Mot de passe trop court (6 car. min.).','error'); return; }
  btn.disabled=true; btn.textContent='Création…'; msg.style.display='none';
  try {
    const r1 = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,{
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email,password:pwd,returnSecureToken:true})
    });
    const d1 = await r1.json();
    if (d1.error) throw new Error(d1.error.message);
    await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`,{
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({idToken:d1.idToken,displayName:name,returnSecureToken:false})
    });
    if (window.fbSetDoc && window.fbDoc && window.db) {
      await window.fbSetDoc(
        window.fbDoc(window.db,'wedding','keziah-briac','members',d1.localId),
        { displayName:name, email, isAdmin:false, createdAt:window.fbServerTimestamp(), createdBy:window.currentUser?.displayName||'Admin', lastSeen:null }
      );
    }
    showSMsg(msg,`✅ Compte créé pour ${escHtml(name)}. Mot de passe temporaire : ${escHtml(pwd)}`,'ok');
    document.getElementById('sm-name').value='';
    document.getElementById('sm-email').value='';
    document.getElementById('sm-pwd').value='';
    loadSettingsMembers();
  } catch(e) {
    const msgs={'EMAIL_EXISTS':'E-mail déjà utilisé.','INVALID_EMAIL':'E-mail invalide.','WEAK_PASSWORD':'Mot de passe trop faible.'};
    showSMsg(msg,'❌ '+(msgs[e.message]||e.message),'error');
  }
  btn.disabled=false; btn.textContent='Créer le compte';
}

// ═══════════════════════════════════════
// EVJF
// ═══════════════════════════════════════
const EVJF_CHECKLIST_DEFAULT = [
  "Définir la date et vérifier les disponibilités de toutes",
  "Choisir l'activité principale (spa, escape game, cours de cuisine, atelier cocktail…)",
  "Réserver le lieu / l'activité principale",
  "Confirmer les participantes et collecter leurs contacts",
  "Organiser le transport (covoiturage, train, taxi…)",
  "Prévoir l'hébergement si nuit sur place",
  "Préparer la décoration EVJF (sash, accessoires, banderoles)",
  "Commander les accessoires pour la mariée (sash, voile rigolo, badges…)",
  "Prévoir le repas / réserver un restaurant",
  "Préparer une surprise ou un jeu spécial pour la mariée",
  "Préparer le discours / album souvenir pour Keziah",
  "Organiser la collecte pour le cadeau commun",
  "Acheter / commander le cadeau de groupe",
  "Préparer un kit survie humoristique pour la mariée",
  "Prendre des photos et vidéos souvenirs !",
];

function renderEvjf() {
  const evjf = state.evjf || {};
  const f = id => document.getElementById(id);
  if (f('evjf-date'))    f('evjf-date').value    = evjf.date    || '';
  if (f('evjf-lieu'))    f('evjf-lieu').value    = evjf.lieu    || '';
  if (f('evjf-theme'))   f('evjf-theme').value   = evjf.theme   || '';
  if (f('evjf-cadeaux')) f('evjf-cadeaux').value = evjf.cadeaux || '';
  memberDatalistHtml();

  // Participantes (avec lien profil)
  const pb = f('evjf-participantes-body');
  if (pb) {
    const parts = evjf.participantes || [];
    pb.innerHTML = parts.length === 0
      ? `<tr><td colspan="6" style="text-align:center;color:var(--grey);padding:16px;font-style:italic">Aucune participante — cliquez sur + pour ajouter</td></tr>`
      : parts.map((p, i) => `<tr style="border-bottom:1px solid #f0f0f0;${i%2?'background:#fafafa':''}">
          <td style="padding:7px 10px"><input value="${escHtml(p.prenom||'')}" onchange="updateEvjfP(${i},'prenom',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit;font-weight:600"></td>
          <td style="padding:7px 10px">
            <select onchange="selectEvjfMember(${i},this.value)" style="width:100%;border:1px solid #eee;border-radius:5px;font-size:0.8rem;font-family:inherit;padding:3px 5px;color:var(--grey)">
              ${getMemberOptions(p.memberId||'')}
            </select>
          </td>
          <td style="padding:7px 10px"><input value="${escHtml(p.role||'')}" onchange="updateEvjfP(${i},'role',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="padding:7px 10px"><input value="${escHtml(p.tel||'')}" onchange="updateEvjfP(${i},'tel',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="padding:7px 10px"><select onchange="updateEvjfP(${i},'rsvp',this.value)" style="border:none;background:transparent;font-size:0.85rem;font-family:inherit">
            <option ${!p.rsvp||p.rsvp==='⏳ En attente'?'selected':''}>⏳ En attente</option>
            <option ${p.rsvp==='✅ Confirmée'?'selected':''}>✅ Confirmée</option>
            <option ${p.rsvp==='❌ Indisponible'?'selected':''}>❌ Indisponible</option>
          </select></td>
          <td style="text-align:center"><button onclick="deleteEvjfP(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button></td>
        </tr>`).join('');
  }

  // Programme (multi-journées)
  const progb = f('evjf-programme-body');
  if (progb) {
    const prog = evjf.programme || [];
    progb.innerHTML = prog.length === 0
      ? `<tr><td colspan="6" style="text-align:center;color:var(--grey);padding:16px;font-style:italic">Aucun moment — cliquez sur + pour ajouter</td></tr>`
      : prog.map((p, i) => `<tr style="border-bottom:1px solid #f0f0f0;${i%2?'background:#fafafa':''}">
          <td style="padding:7px 10px"><input value="${escHtml(p.jour||'')}" placeholder="Jour 1" onchange="updateEvjfProg(${i},'jour',this.value)" style="border:none;background:transparent;width:100%;font-size:0.82rem;font-family:inherit;color:var(--pink);font-weight:700"></td>
          <td style="padding:7px 10px"><input value="${escHtml(p.heure||'')}" placeholder="10h00" onchange="updateEvjfProg(${i},'heure',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="padding:7px 10px"><input value="${escHtml(p.activite||'')}" onchange="updateEvjfProg(${i},'activite',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="padding:7px 10px"><input value="${escHtml(p.lieu||'')}" onchange="updateEvjfProg(${i},'lieu',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="padding:7px 10px"><input value="${escHtml(p.notes||'')}" onchange="updateEvjfProg(${i},'notes',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="text-align:center"><button onclick="deleteEvjfProg(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button></td>
        </tr>`).join('');
  }

  // Budget EVJF
  const bb = f('evjf-budget-body');
  if (bb) {
    const budg = evjf.budget || [];
    const total = budg.reduce((s,b) => s+(parseFloat(b.montant)||0), 0);
    const te = f('evjf-budget-total'); if (te) te.textContent = fmtEur(total);
    bb.innerHTML = budg.length === 0
      ? `<tr><td colspan="4" style="text-align:center;color:var(--grey);padding:16px;font-style:italic">Aucune dépense — cliquez sur + pour ajouter</td></tr>`
      : budg.map((b, i) => `<tr style="border-bottom:1px solid #f0f0f0;${i%2?'background:#fafafa':''}">
          <td style="padding:7px 10px"><input value="${escHtml(b.poste||'')}" onchange="updateEvjfBudget(${i},'poste',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
          <td style="padding:7px 10px;text-align:right"><input type="number" value="${b.montant||0}" onchange="updateEvjfBudget(${i},'montant',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit;text-align:right"></td>
          <td style="padding:7px 10px"><select onchange="updateEvjfBudget(${i},'statut',this.value)" style="border:none;background:transparent;font-size:0.85rem;font-family:inherit">
            <option ${!b.statut||b.statut==='⏳ À payer'?'selected':''}>⏳ À payer</option>
            <option ${b.statut==='✅ Payé'?'selected':''}>✅ Payé</option>
          </select></td>
          <td style="text-align:center"><button onclick="deleteEvjfBudget(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button></td>
        </tr>`).join('');
  }

  // Checklist (défaut + personnalisée)
  const cl = f('evjf-checklist');
  if (cl) {
    const checks = evjf.checklist || {};
    const defaultItems = EVJF_CHECKLIST_DEFAULT.map((item, i) => {
      const k = 'evjf_' + i;
      return `<label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;background:#fafafa;cursor:pointer;transition:background 0.15s" onmouseover="this.style.background='var(--light-pink)'" onmouseout="this.style.background='#fafafa'">
        <input type="checkbox" ${checks[k]?'checked':''} onchange="toggleEvjfCheck('${k}',this.checked)" style="width:16px;height:16px;accent-color:var(--pink)">
        <span style="${checks[k]?'text-decoration:line-through;color:var(--grey)':''}">${escHtml(item)}</span>
      </label>`;
    }).join('');
    const customItems = (evjf.customChecklist || []).map(item => {
      const k = 'cust_'+item.id;
      return `<label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;background:var(--light-pink);cursor:pointer;transition:background 0.15s" onmouseover="this.style.background='#f8d7e3'" onmouseout="this.style.background='var(--light-pink)'">
        <input type="checkbox" ${checks[k]?'checked':''} onchange="toggleEvjfCustomCheck('${item.id}',this.checked)" style="width:16px;height:16px;accent-color:var(--pink)">
        <span style="flex:1;${checks[k]?'text-decoration:line-through;color:var(--grey)':''}">${escHtml(item.text)}</span>
        <button onclick="deleteEvjfCustomCheck('${item.id}')" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:0.9rem;padding:0" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button>
      </label>`;
    }).join('');
    cl.innerHTML = defaultItems + customItems;
  }

  // Projets
  renderEvjfProjets();
}
function saveEvjfField(field, val) { if (!state.evjf) state.evjf={}; state.evjf[field]=val; save(); }
function addEvjfParticipante() { if (!state.evjf.participantes) state.evjf.participantes=[]; state.evjf.participantes.push({prenom:'',memberId:'',role:'Participante',tel:'',rsvp:'⏳ En attente'}); save(); renderEvjf(); }
function updateEvjfP(i,f,v) { state.evjf.participantes[i][f]=v; save(); }
function deleteEvjfP(i) {
  const _n = state.evjf?.participantes?.[i]?.prenom || '?';
  if (!confirm(`Supprimer "${_n}" des participantes EVJF ?`)) return;
  logAction('suppression', 'EVJF', `Participante supprimée : "${_n}"`);
  state.evjf.participantes.splice(i,1); save(); renderEvjf();
}
function addEvjfProgramme() { if (!state.evjf.programme) state.evjf.programme=[]; state.evjf.programme.push({heure:'',activite:'',lieu:'',notes:''}); logAction('ajout','EVJF','Ajout d\'une activité au programme EVJF'); save(); renderEvjf(); }
function updateEvjfProg(i,f,v) { state.evjf.programme[i][f]=v; save(); }
function deleteEvjfProg(i) {
  const _a = state.evjf?.programme?.[i]?.activite || '?';
  if (!confirm(`Supprimer "${_a}" du programme EVJF ?`)) return;
  logAction('suppression', 'EVJF', `Activité EVJF supprimée : "${_a}"`);
  state.evjf.programme.splice(i,1); save(); renderEvjf();
}
function addEvjfBudget() { if (!state.evjf.budget) state.evjf.budget=[]; state.evjf.budget.push({poste:'',montant:0,statut:'⏳ À payer'}); logAction('ajout','EVJF','Ajout d\'un poste budget EVJF'); save(); renderEvjf(); }
function updateEvjfBudget(i,f,v) { state.evjf.budget[i][f]= f==='montant'?(parseFloat(v)||0):v; save(); renderEvjf(); }
function deleteEvjfBudget(i) {
  const _p = state.evjf?.budget?.[i]?.poste || '?';
  if (!confirm(`Supprimer le poste "${_p}" du budget EVJF ?`)) return;
  logAction('suppression', 'EVJF', `Poste budget EVJF supprimé : "${_p}"`);
  state.evjf.budget.splice(i,1); save(); renderEvjf();
}
function toggleEvjfCheck(k,v) { if (!state.evjf.checklist) state.evjf.checklist={}; state.evjf.checklist[k]=v; save(); renderEvjf(); }

// ═══════════════════════════════════════
// TENUES
// ═══════════════════════════════════════
const TENUES_DEFAULT = [
  { id:'t1', personne:'Keziah', type:'Robe de mariée', couleur:'Ivoire', prestataire:'', statut:'🔍 À choisir', notes:'' },
  { id:'t2', personne:'Briac', type:'Costume / Smoking', couleur:'Marine ou Gris', prestataire:'', statut:'🔍 À choisir', notes:'' },
  { id:'t3', personne:'Estelle (témoin)', type:'Robe demoiselle d\'honneur', couleur:'', prestataire:'', statut:'🔍 À choisir', notes:'' },
  { id:'t4', personne:'Garçons d\'honneur', type:'Costume', couleur:'', prestataire:'', statut:'🔍 À choisir', notes:'' },
  { id:'t5', personne:'Enfants d\'honneur', type:'Tenue cortège', couleur:'', prestataire:'', statut:'🔍 À choisir', notes:'' },
];
const TENUE_STATUTS = ['🔍 À choisir','📦 Commandé','🧵 En essayage','✅ Prêt','🔄 À louer'];

function renderTenues() {
  const tbody = document.getElementById('tenues-body');
  if (!tbody) return;
  if (!state.tenues || state.tenues.length === 0) state.tenues = JSON.parse(JSON.stringify(TENUES_DEFAULT));
  tbody.innerHTML = state.tenues.map((t, i) => `<tr style="border-bottom:1px solid #f0f0f0;${i%2?'background:#fafafa':''}">
    <td style="padding:7px 10px"><input value="${escHtml(t.personne||'')}" onchange="updateTenue(${i},'personne',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit;font-weight:600"></td>
    <td style="padding:7px 10px"><input value="${escHtml(t.type||'')}" onchange="updateTenue(${i},'type',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
    <td style="padding:7px 10px"><input value="${escHtml(t.couleur||'')}" onchange="updateTenue(${i},'couleur',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
    <td style="padding:7px 10px"><input value="${escHtml(t.prestataire||'')}" onchange="updateTenue(${i},'prestataire',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
    <td style="padding:7px 10px"><select onchange="updateTenue(${i},'statut',this.value)" style="border:none;background:transparent;font-size:0.85rem;font-family:inherit">
      ${TENUE_STATUTS.map(s=>`<option ${t.statut===s?'selected':''}>${s}</option>`).join('')}
    </select></td>
    <td style="padding:7px 10px"><input value="${escHtml(t.notes||'')}" onchange="updateTenue(${i},'notes',this.value)" style="border:none;background:transparent;width:100%;font-size:0.88rem;font-family:inherit"></td>
    <td style="text-align:center"><button onclick="deleteTenue(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button></td>
  </tr>`).join('');
}
function updateTenue(i,f,v) { if(!state.tenues||!state.tenues.length) state.tenues=JSON.parse(JSON.stringify(TENUES_DEFAULT)); state.tenues[i][f]=v; save(); }
function deleteTenue(i) {
  if(!state.tenues||!state.tenues.length) state.tenues=JSON.parse(JSON.stringify(TENUES_DEFAULT));
  const _t = state.tenues[i];
  const _label = [_t?.personne, _t?.type].filter(Boolean).join(' — ') || '?';
  if (!confirm(`Supprimer la tenue "${_label}" ?`)) return;
  logAction('suppression', 'Tenues', `Tenue supprimée : "${_label}"`);
  state.tenues.splice(i,1); save(); renderTenues();
}
function addTenue() {
  if(!state.tenues||!state.tenues.length) state.tenues=JSON.parse(JSON.stringify(TENUES_DEFAULT));
  state.tenues.push({id:'tenue_'+Date.now(),personne:'',type:'',couleur:'',prestataire:'',statut:'🔍 À choisir',notes:''});
  logAction('ajout', 'Tenues', 'Nouvelle tenue ajoutée');
  save(); renderTenues();
}

// ═══════════════════════════════════════
// FAIRE-PART & PAPETERIE
// ═══════════════════════════════════════
const FP_CHECKLIST_DEFAULT = [
  "Choisir le design / style des faire-part",
  "Choisir l'imprimeur (en ligne ou local)",
  "Rédiger le texte du faire-part",
  "Commander les enveloppes",
  "Recueillir toutes les adresses postales des invités",
  "Imprimer les faire-part",
  "Mettre sous enveloppe et affranchir",
  "Envoyer les faire-part (6 mois avant le mariage)",
  "Préparer et envoyer les Save the Date (12 mois avant)",
  "Créer et imprimer le livret de cérémonie",
  "Imprimer les plans / informations pratiques pour les invités",
  "Commander les menus pour les tables",
  "Commander les marque-places",
  "Commander le livre d'or",
  "Commander les étiquettes cadeaux invités",
];

function renderFairePart() {
  const statsEl = document.getElementById('fp-stats');
  if (statsEl) {
    const guests = state.guests || [];
    const conf = guests.filter(g => (g.rsvp||'').includes('Confirmé')).length;
    const att  = guests.filter(g => (g.rsvp||'').includes('attente')).length;
    const ref  = guests.filter(g => (g.rsvp||'').includes('Refusé')).length;
    statsEl.innerHTML = `
      <div class="stat-card"><div class="val">${guests.length}</div><div class="lbl">Invités total</div></div>
      <div class="stat-card" style="border-color:var(--green)"><div class="val" style="color:var(--green)">${conf}</div><div class="lbl">RSVP ✅ Confirmés</div></div>
      <div class="stat-card" style="border-color:var(--yellow)"><div class="val" style="color:var(--yellow)">${att}</div><div class="lbl">⏳ En attente</div></div>
      <div class="stat-card" style="border-color:var(--red)"><div class="val" style="color:var(--red)">${ref}</div><div class="lbl">❌ Refusés</div></div>`;
  }
  const tbody = document.getElementById('fp-guests-body');
  if (tbody) {
    const guests = state.guests || [];
    tbody.innerHTML = guests.length === 0
      ? `<tr><td colspan="4" style="text-align:center;color:var(--grey);padding:20px;font-style:italic">Aucun invité — ajoutez-les dans la section Invités</td></tr>`
      : guests.map((g, i) => {
          const rsvpC = (g.rsvp||'').includes('Confirmé') ? 'var(--green)' : (g.rsvp||'').includes('Refusé') ? 'var(--red)' : 'var(--orange)';
          return `<tr style="border-bottom:1px solid #f0f0f0;${i%2?'background:#fafafa':''}">
            <td style="padding:8px 12px;font-weight:600">${escHtml(guestFullName(g))}</td>
            <td style="padding:8px 12px;font-size:0.85rem;color:${g.adresse?'var(--dark)':'var(--grey)'}">${g.adresse?escHtml(g.adresse):'—'}</td>
            <td style="padding:8px 12px;font-size:0.85rem">${escHtml(g.type_invitation||'—')}</td>
            <td style="padding:8px 12px;font-size:0.85rem;color:${rsvpC};font-weight:600">${escHtml(g.rsvp||'⏳ En attente')}</td>
          </tr>`;
        }).join('');
  }
  const clEl = document.getElementById('fp-checklist');
  if (clEl) {
    const cl = (state.papeterie||{}).checklist||{};
    const defaultItems = FP_CHECKLIST_DEFAULT.map((item, i) => {
      const k = 'fp_'+i;
      return `<label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;background:#fafafa;cursor:pointer;transition:background 0.15s" onmouseover="this.style.background='var(--light-pink)'" onmouseout="this.style.background='#fafafa'">
        <input type="checkbox" ${cl[k]?'checked':''} onchange="toggleFpCheck('${k}',this.checked)" style="width:16px;height:16px;accent-color:var(--pink)">
        <span style="${cl[k]?'text-decoration:line-through;color:var(--grey)':''}">${escHtml(item)}</span>
      </label>`;
    }).join('');
    const customItems = ((state.papeterie||{}).customItems||[]).map(item => {
      const k = 'cust_'+item.id;
      return `<label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;background:var(--light-pink);cursor:pointer;transition:background 0.15s" onmouseover="this.style.background='#f8d7e3'" onmouseout="this.style.background='var(--light-pink)'">
        <input type="checkbox" ${cl[k]?'checked':''} onchange="toggleFpCustomItem('${item.id}',this.checked)" style="width:16px;height:16px;accent-color:var(--pink)">
        <span style="flex:1;${cl[k]?'text-decoration:line-through;color:var(--grey)':''}">${escHtml(item.text)}</span>
        <button onclick="deleteFpCustomItem('${item.id}')" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:0.9rem;padding:0" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button>
      </label>`;
    }).join('');
    clEl.innerHTML = defaultItems + customItems;
  }
  const notesEl = document.getElementById('fp-notes');
  if (notesEl) notesEl.value = (state.papeterie||{}).notes||'';
}
function toggleFpCheck(k,v) { if(!state.papeterie) state.papeterie={checklist:{},notes:''}; if(!state.papeterie.checklist) state.papeterie.checklist={}; state.papeterie.checklist[k]=v; save(); renderFairePart(); }
function savePaperieNotes(v) { if(!state.papeterie) state.papeterie={checklist:{},notes:''}; state.papeterie.notes=v; save(); }

// ═══════════════════════════════════════
// LUNE DE MIEL
// ═══════════════════════════════════════
const LDM_CHECKLIST_DEFAULT = [
  "Choisir la destination",
  "Définir le budget lune de miel",
  "Réserver les billets d'avion / train",
  "Réserver l'hébergement (hôtel, villa…)",
  "Souscrire une assurance voyage",
  "Vérifier la validité des passeports (> 6 mois après la date de retour)",
  "Vérifier si un visa est nécessaire",
  "Vérifier les vaccins recommandés / obligatoires",
  "Prévenir la banque des voyages à l'étranger",
  "Préparer la liste de bagages",
  "Télécharger les billets et réservations",
  "Prévenir un proche des coordonnées de l'hébergement",
  "Prévoir des activités / excursions sur place",
];

function renderLuneDeMiel() {
  const ldm = state.lunedeMiel||{};
  const f = id => document.getElementById(id);
  if(f('ldm-destination')) f('ldm-destination').value = ldm.destination||'';
  if(f('ldm-depart'))      f('ldm-depart').value      = ldm.dateDepart||'';
  if(f('ldm-retour'))      f('ldm-retour').value      = ldm.dateRetour||'';
  if(f('ldm-budget'))      f('ldm-budget').value      = ldm.budget||'';
  if(f('ldm-notes'))       f('ldm-notes').value       = ldm.notes||'';
  const clEl = f('ldm-checklist');
  if (clEl) {
    const cl = ldm.checklist||{};
    clEl.innerHTML = LDM_CHECKLIST_DEFAULT.map((item, i) => {
      const k = 'ldm_'+i;
      return `<label style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;background:#fafafa;cursor:pointer;transition:background 0.15s" onmouseover="this.style.background='#E8EAF6'" onmouseout="this.style.background='#fafafa'">
        <input type="checkbox" ${cl[k]?'checked':''} onchange="toggleLdmCheck('${k}',this.checked)" style="width:16px;height:16px;accent-color:#3F51B5">
        <span style="${cl[k]?'text-decoration:line-through;color:var(--grey)':''}">${item}</span>
      </label>`;
    }).join('');
  }
}
function saveLuneDeMielField(f,v) { if(!state.lunedeMiel) state.lunedeMiel={}; state.lunedeMiel[f]=v; save(); }
function toggleLdmCheck(k,v) { if(!state.lunedeMiel) state.lunedeMiel={}; if(!state.lunedeMiel.checklist) state.lunedeMiel.checklist={}; state.lunedeMiel.checklist[k]=v; save(); renderLuneDeMiel(); }

// ═══════════════════════════════════════
// DOCUMENTS LÉGAUX
// ═══════════════════════════════════════
const DOCS_LEGAUX_DEFAULT = [
  { key:'dl0',  label:'Retirer le dossier de mariage civil à la mairie de Vernon-sur-Brenne', detail:'Demander la liste complète des pièces à fournir' },
  { key:'dl1',  label:'Obtenir les actes de naissance (< 3 mois avant le dépôt)', detail:'Mairie de naissance de chaque futur époux' },
  { key:'dl2',  label:'Photocopies des pièces d\'identité en cours de validité', detail:'Carte d\'identité ou passeport' },
  { key:'dl3',  label:'Justificatifs de domicile (< 3 mois)', detail:'Facture EDF, quittance de loyer…' },
  { key:'dl4',  label:'Choisir les témoins (2 à 4 personnes majeures)', detail:'Prévoir leurs pièces d\'identité' },
  { key:'dl5',  label:'Déposer le dossier complet à la mairie', detail:'Recommandé : 2 mois avant la cérémonie (minimum 30 jours)' },
  { key:'dl6',  label:'Publication des bans à la mairie', detail:'Affichage obligatoire 10 jours avant la cérémonie civile' },
  { key:'dl7',  label:'Décider si un contrat de mariage est souhaité', detail:'À signer chez un notaire AVANT le mariage' },
  { key:'dl8',  label:'Si contrat de mariage : signature chez le notaire', detail:'Prévoir plusieurs semaines à l\'avance' },
  { key:'dl9',  label:'Audition à la mairie si demandée', detail:'Parfois obligatoire selon les mairies' },
  { key:'dl10', label:'Mise à jour de la carte d\'identité (après le mariage)', detail:'Nouveau nom ou mention du mariage' },
  { key:'dl11', label:'Mise à jour du passeport', detail:'Après le mariage si changement de nom' },
  { key:'dl12', label:'Déclaration de changement de nom à l\'employeur', detail:'' },
  { key:'dl13', label:'Mise à jour Sécurité Sociale / Mutuelle', detail:'' },
  { key:'dl14', label:'Mise à jour des comptes bancaires', detail:'' },
  { key:'dl15', label:'Mise à jour du permis de conduire', detail:'Si changement de nom' },
];

function renderDocsLegaux() {
  const el = document.getElementById('docs-checklist');
  if (!el) return;
  const cl = (state.docsLegaux||{}).checklist||{};
  el.innerHTML = DOCS_LEGAUX_DEFAULT.map(item => `
    <label style="display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:10px;background:#fafafa;cursor:pointer;border:1px solid transparent;transition:all 0.15s" onmouseover="this.style.background='#E8F5E9';this.style.borderColor='#A5D6A7'" onmouseout="this.style.background='#fafafa';this.style.borderColor='transparent'">
      <input type="checkbox" ${cl[item.key]?'checked':''} onchange="toggleDocCheck('${item.key}',this.checked)" style="width:16px;height:16px;margin-top:2px;accent-color:var(--green);flex-shrink:0">
      <div>
        <span style="${cl[item.key]?'text-decoration:line-through;color:var(--grey)':'font-weight:600'}">${item.label}</span>
        ${item.detail?`<div style="font-size:0.8rem;color:var(--grey);margin-top:2px">${item.detail}</div>`:''}
      </div>
    </label>`).join('');
}
function toggleDocCheck(k,v) { if(!state.docsLegaux) state.docsLegaux={checklist:{}}; if(!state.docsLegaux.checklist) state.docsLegaux.checklist={}; state.docsLegaux.checklist[k]=v; save(); renderDocsLegaux(); }

// ═══════════════════════════════════════
// KIT D'URGENCE
// ═══════════════════════════════════════
const KIT_URGENCE_DEFAULT = [
  { cat:'💊 Santé',    items:[{k:'k0',l:'Doliprane / Ibuprofène'},{k:'k1',l:'Anti-diarrhée / Smecta'},{k:'k2',l:'Anti-nausée'},{k:'k3',l:'Sparadraps & pansements'},{k:'k4',l:'Gel hydroalcoolique'}] },
  { cat:'🧵 Couture',  items:[{k:'k5',l:'Aiguilles et fil (blanc, ivoire, noir)'},{k:'k6',l:'Épingles à nourrice (grandes & petites)'},{k:'k7',l:'Ciseaux de couture'},{k:'k8',l:'Colle à tissu double-face'},{k:'k9',l:'Scotch double-face'}] },
  { cat:'💄 Beauté',   items:[{k:'k10',l:'Fond de teint de secours'},{k:'k11',l:'Rouge à lèvres / gloss de secours'},{k:'k12',l:'Poudre compacte'},{k:'k13',l:'Lingettes démaquillantes'},{k:'k14',l:'Déodorant discret'},{k:'k15',l:'Brosse à cheveux & épingles'},{k:'k16',l:'Laque / spray fixateur'}] },
  { cat:'📱 Tech',     items:[{k:'k17',l:'Chargeurs de téléphone (+ câbles)'},{k:'k18',l:'Batterie externe chargée'},{k:'k19',l:'Lecteur de cartes mémoire'}] },
  { cat:'🍬 Divers',   items:[{k:'k20',l:'Chewing-gum / bonbons à la menthe'},{k:'k21',l:'Snacks (biscuits, fruits secs — pour le matin)'},{k:'k22',l:'Bouteille d\'eau'},{k:'k23',l:'Mouchoirs en papier'},{k:'k24',l:'Stylo (pour signer les registres !)'},{k:'k25',l:'Petite monnaie / argent liquide'},{k:'k26',l:'Programme du jour J imprimé'},{k:'k27',l:'Parapluie de secours (mini)'},{k:'k28',l:'Mini coussin gonflable (pour les pieds !)'}] },
];

function renderKitUrgence() {
  const el = document.getElementById('kit-checklist');
  if (!el) return;
  const cl = (state.kitUrgence||{}).checklist||{};
  el.innerHTML = KIT_URGENCE_DEFAULT.map(cat => `
    <div style="background:white;border-radius:12px;padding:16px;box-shadow:0 2px 8px rgba(0,0,0,0.06)">
      <div style="font-weight:700;font-size:0.9rem;margin-bottom:10px;color:var(--dark)">${cat.cat}</div>
      ${cat.items.map(item => `<label style="display:flex;align-items:center;gap:8px;padding:5px 0;cursor:pointer">
        <input type="checkbox" ${cl[item.k]?'checked':''} onchange="toggleKitCheck('${item.k}',this.checked)" style="width:15px;height:15px;accent-color:var(--pink);flex-shrink:0">
        <span style="font-size:0.88rem;${cl[item.k]?'text-decoration:line-through;color:#bbb':''}">${item.l}</span>
      </label>`).join('')}
    </div>`).join('');
}
function toggleKitCheck(k,v) { if(!state.kitUrgence) state.kitUrgence={checklist:{}}; if(!state.kitUrgence.checklist) state.kitUrgence.checklist={}; state.kitUrgence.checklist[k]=v; save(); renderKitUrgence(); }

// ═══════════════════════════════════════
// TABLEAU D'AMBIANCE
// ═══════════════════════════════════════
function renderAmbiance() {
  const amb = state.ambiance||{};
  const f = id => document.getElementById(id);
  if(f('ambiance-keywords')) f('ambiance-keywords').value = amb.keywords||'';
  if(f('ambiance-pinterest')) f('ambiance-pinterest').value = amb.pinterest||'';
  if(f('ambiance-notes'))    f('ambiance-notes').value    = amb.notes||'';
  const palEl = f('ambiance-palette');
  if (palEl) {
    const colors = (amb.colors&&amb.colors.length>0) ? amb.colors : ['#880E4F','#C2185B','#FCE4EC','#3E2723','#F5F5F5'];
    palEl.innerHTML = colors.map((c, i) => `
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
        <div style="width:64px;height:64px;border-radius:50%;background:${escHtml(c)};box-shadow:0 3px 12px rgba(0,0,0,0.15);border:3px solid white;cursor:pointer;transition:transform 0.15s" onclick="editAmbianceColor(${i})" title="Cliquer pour modifier" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <input type="text" value="${escHtml(c)}" onchange="updateAmbianceColor(${i},this.value)" style="width:72px;text-align:center;border:1px solid #eee;border-radius:6px;padding:4px;font-size:0.75rem;font-family:monospace">
        <button onclick="deleteAmbianceColor(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:0.85rem" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">× retirer</button>
      </div>`).join('');
  }
}
function saveAmbianceField(f,v) { if(!state.ambiance) state.ambiance={}; state.ambiance[f]=v; save(); }
function editAmbianceColor(i) {
  const colors = state.ambiance?.colors||['#880E4F','#C2185B','#FCE4EC','#3E2723','#F5F5F5'];
  const v = prompt('Code couleur hex (ex: #C2185B) :', colors[i]||'#000000');
  if (v&&v.trim()) { updateAmbianceColor(i, v.trim()); }
}
function updateAmbianceColor(i,v) { if(!state.ambiance) state.ambiance={}; if(!state.ambiance.colors) state.ambiance.colors=[]; state.ambiance.colors[i]=v; save(); renderAmbiance(); }
function deleteAmbianceColor(i) {
  if(!state.ambiance||!state.ambiance.colors) return;
  const _c = state.ambiance.colors[i] || '?';
  if (!confirm(`Supprimer la couleur ${_c} de la palette ?`)) return;
  logAction('suppression', 'Ambiance', `Couleur supprimée : ${_c}`);
  state.ambiance.colors.splice(i,1); save(); renderAmbiance();
}
function addAmbianceColor() {
  if(!state.ambiance) state.ambiance={};
  if(!state.ambiance.colors) state.ambiance.colors=[];
  const v = prompt('Code couleur hex (ex: #FFE0B2) :', '#FFFFFF');
  if (v&&v.trim()) { state.ambiance.colors.push(v.trim()); save(); renderAmbiance(); }
}

// ═══════════════════════════════════════
// IDÉES & OPTIONS
// ═══════════════════════════════════════

const IDEE_STATUT_LABEL = { 'a-explorer':'🔵 À explorer', 'retenue':'✅ Retenue', 'abandonnee':'❌ Abandonnée' };
const IDEE_STATUT_COLOR = { 'a-explorer':'var(--blue)', 'retenue':'var(--green)', 'abandonnee':'var(--grey)' };
const IDEE_STATUT_BG    = { 'a-explorer':'var(--light-blue)', 'retenue':'var(--light-green)', 'abandonnee':'var(--light-grey)' };

function renderIdees() {
  const el = document.getElementById('idees-list');
  if (!el) return;
  const cats = state.idees.categories || [];
  const items = state.idees.items || [];

  // Mettre à jour les selects de filtre + modal
  ['idees-filter-cat','idee-categorie'].forEach(selId => {
    const sel = document.getElementById(selId);
    if (!sel) return;
    const cur = sel.value;
    const isFilter = selId === 'idees-filter-cat';
    sel.innerHTML = isFilter ? '<option value="">Toutes les catégories</option>' : '';
    cats.forEach(c => {
      const o = document.createElement('option');
      o.value = c; o.textContent = c;
      if (c === cur) o.selected = true;
      sel.appendChild(o);
    });
  });

  const search = (document.getElementById('idees-search')?.value || '').toLowerCase();
  const filterCat = document.getElementById('idees-filter-cat')?.value || '';
  const filterSt  = document.getElementById('idees-filter-statut')?.value || '';

  const filtered = items.filter(idee => {
    if (filterCat && idee.category !== filterCat) return false;
    if (search && !idee.title.toLowerCase().includes(search)) return false;
    if (filterSt) {
      const hasStatut = (idee.options||[]).some(o => o.statut === filterSt);
      if (!hasStatut) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    el.innerHTML = `<div style="text-align:center;padding:40px;color:var(--grey)">
      <div style="font-size:2.5rem;margin-bottom:12px">💡</div>
      <div style="font-size:1rem;">Aucune idée pour l'instant.<br>Cliquez sur <strong>+ Nouvelle idée</strong> pour commencer !</div>
    </div>`;
    return;
  }

  el.innerHTML = filtered.map(idee => {
    const opts = idee.options || [];
    const retenues = opts.filter(o => o.statut === 'retenue').length;
    return `
    <div style="background:white;border-radius:14px;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:20px;overflow:hidden;border:1px solid #f0f0f0;">
      <!-- En-tête idée -->
      <div style="background:linear-gradient(135deg,var(--dark-pink),var(--pink));color:white;padding:14px 18px;display:flex;align-items:center;gap:12px;">
        <div style="flex:1;">
          <div style="font-weight:800;font-size:1rem;">${escHtml(idee.title)}</div>
          <div style="font-size:0.78rem;opacity:0.85;margin-top:2px;">
            <span style="background:rgba(255,255,255,0.2);border-radius:10px;padding:1px 10px;">${escHtml(idee.category||'')}</span>
            &nbsp;· Ajoutée par ${escHtml(idee.addedBy||'?')}
            &nbsp;· ${opts.length} option(s)${retenues>0?' · <strong>'+retenues+' retenue(s)</strong>':''}
          </div>
        </div>
        ${idee.notes ? `<div style="font-size:0.8rem;opacity:0.8;max-width:240px;font-style:italic;">${escHtml(idee.notes)}</div>` : ''}
        <button onclick="openIdeeModal('${idee.id}')" style="background:rgba(255,255,255,0.2);border:none;color:white;border-radius:8px;padding:5px 10px;cursor:pointer;font-size:0.8rem;" title="Modifier l'idée">✏️</button>
        <button onclick="deleteIdee('${idee.id}')" style="background:rgba(255,255,255,0.2);border:none;color:white;border-radius:8px;padding:5px 10px;cursor:pointer;font-size:0.8rem;" title="Supprimer l'idée">🗑️</button>
      </div>
      <!-- Options -->
      <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px;">
        ${opts.length === 0 ? `<div style="color:var(--grey);font-size:0.88rem;text-align:center;padding:12px;">Aucune option pour l'instant.</div>` : ''}
        ${opts.map(opt => `
        <div style="border:1px solid #eee;border-radius:10px;overflow:hidden;${opt.statut==='abandonnee'?'opacity:0.55;':''}">
          <div style="background:${IDEE_STATUT_BG[opt.statut||'a-explorer']};padding:8px 14px;display:flex;align-items:center;gap:8px;">
            <span style="font-weight:700;font-size:0.92rem;flex:1;">${escHtml(opt.nom||'')}</span>
            <span style="background:${IDEE_STATUT_COLOR[opt.statut||'a-explorer']};color:white;border-radius:10px;padding:2px 10px;font-size:0.75rem;font-weight:700;">${IDEE_STATUT_LABEL[opt.statut||'a-explorer']}</span>
            ${opt.budget ? `<span style="font-size:0.8rem;color:var(--grey);">💶 ${Number(opt.budget).toLocaleString('fr')} €</span>` : ''}
            <button onclick="openOptionModal('${idee.id}','${opt.id}')" style="background:none;border:none;cursor:pointer;font-size:0.85rem;color:var(--grey);" title="Modifier">✏️</button>
            <button onclick="deleteOption('${idee.id}','${opt.id}')" style="background:none;border:none;cursor:pointer;font-size:0.85rem;color:var(--red);opacity:0.6;" title="Supprimer">🗑️</button>
          </div>
          <div style="padding:10px 14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.85rem;">
            ${opt.notes ? `<div style="grid-column:1/-1;"><span style="font-weight:600;color:var(--grey);font-size:0.75rem;text-transform:uppercase;">Notes</span><div style="margin-top:3px;">${escHtml(opt.notes)}</div></div>` : ''}
            ${opt.avantages ? `<div><span style="font-weight:600;color:var(--green);font-size:0.75rem;text-transform:uppercase;">✅ Avantages</span><div style="margin-top:3px;">${escHtml(opt.avantages)}</div></div>` : ''}
            ${opt.inconvenients ? `<div><span style="font-weight:600;color:var(--red);font-size:0.75rem;text-transform:uppercase;">❌ Inconvénients</span><div style="margin-top:3px;">${escHtml(opt.inconvenients)}</div></div>` : ''}
          </div>
        </div>`).join('')}
        <button onclick="openOptionModal('${idee.id}')" style="background:none;border:2px dashed var(--pink);color:var(--pink);border-radius:8px;padding:7px 16px;cursor:pointer;font-family:inherit;font-size:0.85rem;font-weight:600;width:100%;transition:all 0.2s;" onmouseover="this.style.background='var(--light-pink)'" onmouseout="this.style.background='none'">+ Ajouter une option</button>
      </div>
    </div>`;
  }).join('');
}

function openIdeeModal(id=null) {
  const idee = id ? (state.idees.items||[]).find(i => i.id === id) : null;
  document.getElementById('modal-idee-title').textContent = idee ? 'Modifier l\'idée' : 'Nouvelle idée';
  document.getElementById('idee-edit-id').value = id || '';
  document.getElementById('idee-titre').value = idee ? idee.title : '';
  document.getElementById('idee-notes').value = idee ? (idee.notes||'') : '';
  renderIdees(); // rafraîchit le select des catégories
  setTimeout(() => {
    const sel = document.getElementById('idee-categorie');
    if (sel && idee) sel.value = idee.category || '';
  }, 10);
  document.getElementById('modal-idee').classList.remove('hidden');
}
function closeIdeeModal() { document.getElementById('modal-idee').classList.add('hidden'); }

function saveIdeeFromModal() {
  const titre = document.getElementById('idee-titre').value.trim();
  if (!titre) { alert('Le titre est obligatoire.'); return; }
  const editId = document.getElementById('idee-edit-id').value;
  const now = new Date().toISOString().split('T')[0];
  const who = window.currentUser ? (window.currentUser.displayName || window.currentUser.email) : 'Anonyme';
  if (editId) {
    const idee = state.idees.items.find(i => i.id === editId);
    if (idee) {
      idee.title    = titre;
      idee.category = document.getElementById('idee-categorie').value;
      idee.notes    = document.getElementById('idee-notes').value.trim();
      logAction('modification', 'Idées', `Idée modifiée : "${titre}"`);
    }
  } else {
    if (!state.idees.items) state.idees.items = [];
    logAction('ajout', 'Idées', `Nouvelle idée : "${titre}"`);
    state.idees.items.push({
      id: 'idee_' + Date.now(),
      title: titre,
      category: document.getElementById('idee-categorie').value,
      notes: document.getElementById('idee-notes').value.trim(),
      addedBy: who,
      addedAt: now,
      options: []
    });
  }
  save();
  closeIdeeModal();
  renderIdees();
}

function deleteIdee(id) {
  const _title = (state.idees.items||[]).find(i=>i.id===id)?.title || '?';
  if (!confirm(`Supprimer l'idée "${_title}" et toutes ses options ?`)) return;
  logAction('suppression', 'Idées', `Idée supprimée : "${_title}"`);
  state.idees.items = (state.idees.items||[]).filter(i => i.id !== id);
  save();
  renderIdees();
}

function openOptionModal(ideaId, optId=null) {
  const idee = (state.idees.items||[]).find(i => i.id === ideaId);
  if (!idee) return;
  const opt = optId ? (idee.options||[]).find(o => o.id === optId) : null;
  document.getElementById('modal-option-title').textContent = opt ? 'Modifier l\'option' : 'Nouvelle option';
  document.getElementById('option-idee-id').value  = ideaId;
  document.getElementById('option-edit-id').value  = optId || '';
  document.getElementById('option-nom').value          = opt ? (opt.nom||'') : '';
  document.getElementById('option-notes').value        = opt ? (opt.notes||'') : '';
  document.getElementById('option-avantages').value    = opt ? (opt.avantages||'') : '';
  document.getElementById('option-inconvenients').value= opt ? (opt.inconvenients||'') : '';
  document.getElementById('option-budget').value       = opt ? (opt.budget||'') : '';
  document.getElementById('option-statut').value       = opt ? (opt.statut||'a-explorer') : 'a-explorer';
  document.getElementById('modal-option').classList.remove('hidden');
}
function closeOptionModal() { document.getElementById('modal-option').classList.add('hidden'); }

function saveOptionFromModal() {
  const nom = document.getElementById('option-nom').value.trim();
  if (!nom) { alert('Le nom de l\'option est obligatoire.'); return; }
  const ideaId = document.getElementById('option-idee-id').value;
  const optId  = document.getElementById('option-edit-id').value;
  const idee   = (state.idees.items||[]).find(i => i.id === ideaId);
  if (!idee) return;
  if (!idee.options) idee.options = [];
  const who = window.currentUser ? (window.currentUser.displayName || window.currentUser.email) : 'Anonyme';
  const data = {
    nom,
    notes:          document.getElementById('option-notes').value.trim(),
    avantages:      document.getElementById('option-avantages').value.trim(),
    inconvenients:  document.getElementById('option-inconvenients').value.trim(),
    budget:         document.getElementById('option-budget').value || '',
    statut:         document.getElementById('option-statut').value,
    addedBy:        who,
  };
  if (optId) {
    const opt = idee.options.find(o => o.id === optId);
    if (opt) Object.assign(opt, data);
  } else {
    idee.options.push({ id: 'opt_' + Date.now(), ...data });
  }
  save();
  closeOptionModal();
  renderIdees();
}

function deleteOption(ideaId, optId) {
  const _idee = (state.idees.items||[]).find(i => i.id === ideaId);
  const _opt = (_idee?.options||[]).find(o => o.id === optId);
  if (!confirm(`Supprimer l'option "${_opt?.nom||'?'}" ?`)) return;
  logAction('suppression', 'Idées', `Option supprimée : "${_opt?.nom||'?'}" (idée : "${_idee?.title||'?'}")`);
  if (!_idee) return;
  _idee.options = (_idee.options||[]).filter(o => o.id !== optId);
  save();
  renderIdees();
}

function gererCategories() {
  const cats = state.idees.categories || [];
  const action = prompt(
    `Catégories actuelles :\n${cats.map((c,i)=>`${i+1}. ${c}`).join('\n')}\n\n` +
    `Que voulez-vous faire ?\n` +
    `• Tapez le nom d'une nouvelle catégorie pour l'ajouter\n` +
    `• Tapez "supprimer NOM" pour en retirer une`
  );
  if (!action || !action.trim()) return;
  const trim = action.trim();
  if (trim.toLowerCase().startsWith('supprimer ')) {
    const toRemove = trim.slice(10).trim();
    if (cats.includes(toRemove)) {
      state.idees.categories = cats.filter(c => c !== toRemove);
      save();
      renderIdees();
      alert(`Catégorie "${toRemove}" supprimée.`);
    } else {
      alert(`Catégorie "${toRemove}" introuvable.`);
    }
  } else {
    if (!cats.includes(trim)) {
      state.idees.categories = [...cats, trim];
      save();
      renderIdees();
      alert(`Catégorie "${trim}" ajoutée !`);
    } else {
      alert(`Cette catégorie existe déjà.`);
    }
  }
}

// Constantes nécessaires à l'initialisation (doivent être déclarées avant load/render)
const JOURJ_DEFAULT = [
  { id:'jj0',  ordre:10,  heure:'8h00',   titre:'Coiffure & Maquillage',               details:"Keziah, Estelle et l'équipe de la mariée — Espace préparation du château" },
  { id:'jj1',  ordre:20,  heure:'10h30',  titre:'Habillage & Photos préparatifs',      details:'Keziah + photographe — Chambres du château' },
  { id:'jj2',  ordre:30,  heure:'11h30',  titre:'⚖️ Cérémonie civile à la mairie',      details:'Mariés + famille proche + témoins — Mairie de Vernon-sur-Brenne' },
  { id:'jj3',  ordre:40,  heure:'14h30',  titre:'✝️ Cérémonie religieuse',              details:'Tous les invités — Église à Vernon-sur-Brenne' },
  { id:'jj4',  ordre:50,  heure:'16h00',  titre:"📸 Sortie de l'église & photos",      details:'Lancé de pétales · Photos de couple et de groupe devant l\'église' },
  { id:'jj5',  ordre:60,  heure:'16h30',  titre:'🏰 Arrivée au Château de Jallanges',  details:'Tous les invités accueillis dans les allées du château' },
  { id:'jj6',  ordre:70,  heure:'17h00',  titre:'🥂 Cocktail & Photos de couple',      details:'Cocktail dans les jardins du domaine — Photographe & vidéaste' },
  { id:'jj7',  ordre:80,  heure:'19h30',  titre:'Entrée dans la salle de réception',   details:'Entrée des mariés en musique — Discours des témoins' },
  { id:'jj8',  ordre:90,  heure:'20h00',  titre:'🍽️ Dîner de gala',                    details:'Tous les invités — Menu gastronomique, ambiance musicale douce' },
  { id:'jj9',  ordre:100, heure:'22h30',  titre:'💃 Ouverture du bal & Pièce montée',  details:'Keziah & Briac ouvrent le bal — Découpe de la pièce montée' },
  { id:'jj10', ordre:110, heure:'23h00',  titre:'🎵 Soirée dansante',                  details:"Tous les invités — DJ jusqu'à l'aube !" },
  { id:'jj11', ordre:120, heure:'2h00+',  titre:'Fin de soirée & Bouquet de la mariée',details:'Les plus courageux… et Estelle !' },
];

const VENUE_INFOS_DEFAULT = {
  localisation: "Château de Jallanges\nVernon-sur-Brenne\n37210, Indre-et-Loire\nTouraine — Val de Loire\n\nwww.jallanges.com",
  acces: "À 20 min de Tours (A10)\nÀ 30 min d'Amboise\nÀ 2h30 de Paris (TGV Tours + voiture)\n\nPrévoir navettes depuis la gare de Tours pour les invités sans voiture.",
  pointsForts: "🌹 Domaine viticole & château Renaissance\n🛏️ Chambres d'hôtes sur place\n🌳 Jardins à la française\n🍷 Vins du domaine disponibles\n📷 Cadre exceptionnel pour les photos\n🎪 Grande salle de réception\n🌞 Espaces extérieurs pour le cocktail",
  questions: "• Traiteur libre ou liste imposée ?\n• Nombre de chambres disponibles ?\n• Horaire limite pour la musique ?\n• Parking : combien de places ?\n• Plan B en cas de pluie ?\n• Accès PMR (personnes à mobilité réduite) ?\n• Montant et modalités de l'acompte ?",
  decoNote: "Le Château de Jallanges est entouré de vignes et de jardins à la française. Un thème floral champêtre et romantique avec des pivoines, roses et hortensias en rose et blanc sera parfaitement en harmonie avec le cadre de la Touraine en juillet.",
  ceremonieDemarches: "• Contacter le curé / pasteur dès maintenant (12+ mois avant)\n• Choisir l'église : à Vernon-sur-Brenne ou dans la paroisse de Keziah ou Briac\n• Retirer et déposer le dossier de mariage religieux\n• Participer aux sessions de préparation au mariage (obligatoires, 3 à 5 séances)\n• Confirmer la date et l'heure de la messe avec le prêtre",
  ceremonieMusique: "• Organiste ou chantre à réserver séparément\n• Chants recommandés en juillet (été) : Ave Maria, Magnificat, chants de louange…\n• Chant d'entrée · Psaume · Alleluia · Chant d'offertoire · Notre Père chanté · Chant de sortie\n• Répétition avec le musicien recommandée avant le jour J",
  ceremonieDeroulement: "🎶 Entrée en musique des mariés\n📖 Liturgie de la Parole (3 lectures + psaume)\n💍 Rite du mariage (consentement, échange des alliances)\n🙏 Liturgie eucharistique (communion)\n🌹 Bénédiction solennelle des époux\n🎵 Sortie en musique",
  ceremonieLectures: "• 1 Co 13 : «L'amour est patient, l'amour est serviable…»\n• Rt 1,16 : «Où tu iras, j'irai…»\n• Gn 2,18-24 : La création de la femme\n• Jn 2,1-11 : Les noces de Cana\n• Ep 5,2a.25-32 : L'amour mutuel des époux\n• Sg 8,7 : La tempérance, la prudence, la justice",
};

// ═══════════════════════════════════════
// MIGRATION : fil rouge → jourJ items
// Copie resp/notes de filrougeRows vers les jourJItems correspondants (match sur heure)
// Exécutée une seule fois au démarrage si filrougeRows existe
// ═══════════════════════════════════════
function migrateFilRougeToJourJ() {
  if (!state.filrougeRows || state.filrougeRows.length === 0) return;
  if (state._filrougeMigrated) return; // déjà fait
  const items = getJourJItems();
  state.filrougeRows.forEach(row => {
    // Chercher un item jourJ avec la même heure
    const match = items.find(it => it.heure && row.heure && it.heure.trim() === row.heure.trim());
    if (match) {
      if (!match.resp      && row.resp)   match.resp       = row.resp;
      if (!match.vigilance && row.notes)  match.vigilance  = row.notes;
    }
  });
  state._filrougeMigrated = true;
  save();
}

// ═══════════════════════════════════════
// INFOS CLÉS DU TABLEAU DE BORD
// ═══════════════════════════════════════
let _editInfosCles = false;

function saveInfosCle(section, field, val) {
  if (!state.infosClés) state.infosClés = {};
  if (!state.infosClés[section]) state.infosClés[section] = {};
  state.infosClés[section][field] = val;
  save();
}

function renderInfosClés() {
  const el = document.getElementById('infoscles-container');
  if (!el) return;
  const ic = state.infosClés || {};
  const lieu   = { nom:'Château de Jallanges', detail1:'Vernon-sur-Brenne, Touraine', detail2:'Val de Loire', url:'jallanges.com', ...ic.lieu   };
  const mariee = { nom:'Keziah',  tel:'', email:'', ...ic.mariee };
  const marie  = { nom:'Briac',   tel:'', email:'', ...ic.marie  };
  const orga   = { nom:'Estelle', tel:'', email:'ehuguet@cfmrobotique.com', ...ic.orga };
  const date   = { date:'10 juillet 2027', heure:'', note:'', ...ic.date };
  const admin  = isAdmin();

  function viewBox(icon, titre, content) {
    return `<div class="info-box">
      <h4>${icon} ${titre}</h4>
      <div style="font-size:0.88rem;line-height:1.6;color:var(--dark)">${content}</div>
    </div>`;
  }
  function editBox(icon, titre, content) {
    return `<div class="info-box" style="border:2px solid var(--light-pink);background:#fff9fb">
      <h4 style="margin-bottom:10px">${icon} ${titre}</h4>
      <div style="display:flex;flex-direction:column;gap:6px">${content}</div>
    </div>`;
  }
  function field(label, section, key, val, ph) {
    return `<div style="display:flex;flex-direction:column;gap:2px">
      <span style="font-size:0.72rem;font-weight:600;color:var(--grey);text-transform:uppercase;letter-spacing:0.4px">${label}</span>
      <input value="${escHtml(val)}" placeholder="${ph||''}"
        onchange="saveInfosCle('${section}','${key}',this.value)"
        style="border:1px solid #e0e0e0;border-radius:6px;padding:5px 8px;font-family:inherit;font-size:0.86rem;width:100%">
    </div>`;
  }

  let lienLieu = lieu.url ? `<a href="${lieu.url.startsWith('http')?lieu.url:'https://'+lieu.url}" target="_blank" style="color:var(--pink);text-decoration:none">${escHtml(lieu.url)}</a>` : '';
  let lienLieuText = [lieu.detail1, lieu.detail2, lieu.url].filter(Boolean);

  const lieuView   = `<strong>${escHtml(lieu.nom)}</strong><br>${lienLieuText.slice(0,2).map(escHtml).join('<br>')}${lieu.url?'<br>'+lienLieu:''}`;
  const marieeView = `<strong>${escHtml(mariee.nom)}</strong>${mariee.tel?'<br>📞 '+escHtml(mariee.tel):''}${mariee.email?'<br>✉️ '+escHtml(mariee.email):''}`;
  const marieView  = `<strong>${escHtml(marie.nom)}</strong>${marie.tel?'<br>📞 '+escHtml(marie.tel):''}${marie.email?'<br>✉️ '+escHtml(marie.email):''}`;
  const orgaView   = `<strong>${escHtml(orga.nom)}</strong>${orga.tel?'<br>📞 '+escHtml(orga.tel):''}${orga.email?'<br>✉️ '+escHtml(orga.email):''}`;
  const dateView   = `<strong>${escHtml(date.date)}</strong>${date.heure?'<br>🕐 '+escHtml(date.heure):''}${date.note?'<br><em>'+escHtml(date.note)+'</em>':''}`;

  let editBtn = '';
  let boxesHtml = '';
  if (admin) {
    editBtn = `<button onclick="_editInfosCles=!_editInfosCles;renderInfosClés()"
      style="font-size:0.8rem;padding:5px 12px;border:1px solid ${_editInfosCles?'var(--pink)':'#ddd'};border-radius:8px;cursor:pointer;background:${_editInfosCles?'var(--light-pink)':'white'};color:${_editInfosCles?'var(--pink)':'var(--grey)'};float:right;margin-top:-4px;font-family:inherit">
      ${_editInfosCles?'✅ Terminer':'✏️ Modifier'}
    </button>`;
  }

  if (!admin || !_editInfosCles) {
    boxesHtml = `
      ${viewBox('📅','Date du mariage', dateView)}
      ${viewBox('🏰','Lieu', lieuView)}
      ${viewBox('👰','Mariée', marieeView)}
      ${viewBox('🤵','Marié', marieView)}
      ${viewBox('💐','Organisatrice', orgaView)}`;
  } else {
    boxesHtml = `
      ${editBox('📅','Date du mariage', [
          field('Date',  'date','date',  date.date,  'ex : 10 juillet 2027'),
          field('Heure', 'date','heure', date.heure, 'ex : 15h00'),
          field('Note',  'date','note',  date.note,  'Info complémentaire'),
        ].join(''))}
      ${editBox('🏰','Lieu', [
          field('Nom du lieu',  'lieu','nom',     lieu.nom,     'Nom du château / salle'),
          field('Ville',        'lieu','detail1', lieu.detail1, 'ex : Vernon-sur-Brenne, Touraine'),
          field('Région',       'lieu','detail2', lieu.detail2, 'ex : Val de Loire'),
          field('Site web',     'lieu','url',     lieu.url,     'ex : jallanges.com'),
        ].join(''))}
      ${editBox('👰','Mariée', [
          field('Prénom / Nom', 'mariee','nom',   mariee.nom,   'Prénom'),
          field('Téléphone',    'mariee','tel',   mariee.tel,   '06 XX XX XX XX'),
          field('Email',        'mariee','email', mariee.email, 'adresse@mail.com'),
        ].join(''))}
      ${editBox('🤵','Marié', [
          field('Prénom / Nom', 'marie','nom',   marie.nom,   'Prénom'),
          field('Téléphone',    'marie','tel',   marie.tel,   '06 XX XX XX XX'),
          field('Email',        'marie','email', marie.email, 'adresse@mail.com'),
        ].join(''))}
      ${editBox('💐','Organisatrice', [
          field('Prénom / Nom', 'orga','nom',   orga.nom,   'Prénom'),
          field('Téléphone',    'orga','tel',   orga.tel,   '06 XX XX XX XX'),
          field('Email',        'orga','email', orga.email, 'adresse@mail.com'),
        ].join(''))}`;
  }

  el.innerHTML = `
    <div class="card-title">💡 Infos clés${editBtn}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:${admin&&_editInfosCles?'8px':'4px'}">${boxesHtml}</div>`;
}

// INIT
// ═══════════════════════════════════════
load();
updateCountdown();
renderChecklist();
renderBudget();
renderGuests();
renderVendors();
renderGantt();
renderMatrix();
renderRoles();
migrateFilRougeToJourJ();
renderFilRouge();
renderUrgence();
renderSeatingChart();
renderEvjf();
renderTenues();
renderFairePart();
renderLuneDeMiel();
renderDocsLegaux();
renderKitUrgence();
renderAmbiance();
renderIdees();
renderJourJ();
renderVenue();
renderInfosClés();

// ═══════════════════════════════════════
// MEMBRES — CACHE ET HELPERS
// ═══════════════════════════════════════
window.appMembers = [];

async function loadAppMembers() {
  if (!window.fbGetDocs || !window.fbCollection || !window.db) return;
  try {
    const snap = await window.fbGetDocs(window.fbCollection(window.db,'wedding','keziah-briac','members'));
    window.appMembers = snap.docs.map(d=>({ uid:d.id, displayName:d.data().displayName||d.data().email||'' }));
  } catch(e) { console.warn('Erreur chargement membres:', e); }
}

function memberDatalistHtml() {
  const members = window.appMembers || [];
  if (!document.getElementById('members-datalist')) {
    const dl = document.createElement('datalist');
    dl.id = 'members-datalist';
    document.body.appendChild(dl);
  }
  const dl = document.getElementById('members-datalist');
  dl.innerHTML = members.map(m=>`<option value="${escHtml(m.displayName||'')}"></option>`).join('');
  return 'members-datalist';
}

function getMemberOptions(currentVal) {
  const members = window.appMembers || [];
  return `<option value="">— Aucun profil lié —</option>` +
    members.map(m => {
      const name = escHtml(m.displayName || '');
      const sel = currentVal === name ? 'selected' : '';
      return `<option value="${name}" ${sel}>${name}</option>`;
    }).join('');
}

// ═══════════════════════════════════════
// JOUR J — PROGRAMME DYNAMIQUE
// ═══════════════════════════════════════
// (JOURJ_DEFAULT déclaré avant le bloc INIT)

function getJourJItems() {
  if (!state.jourJItems || state.jourJItems.length === 0)
    state.jourJItems = JSON.parse(JSON.stringify(JOURJ_DEFAULT));
  return state.jourJItems;
}

function renderJourJ() {
  const el = document.getElementById('jourj-list');
  if (!el) return;
  const items = getJourJItems().slice().sort((a,b) => (a.ordre||0)-(b.ordre||0));
  el.innerHTML = items.map((item, idx) => `
    <div style="display:grid;grid-template-columns:70px 90px 1fr 36px;gap:6px;align-items:start;padding:10px 12px;background:${idx%2===0?'#fafafa':'white'};border-radius:8px;margin-bottom:6px;border:1px solid #f0f0f0">
      <div>
        <div style="font-size:0.72rem;color:var(--grey);margin-bottom:3px">N° ordre</div>
        <input type="number" value="${item.ordre||0}" min="0" step="10"
          onchange="saveJourJItem('${item.id}','ordre',parseInt(this.value)||0)"
          onblur="renderJourJ()"
          style="width:60px;border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.85rem;text-align:center;color:var(--pink);font-weight:700">
      </div>
      <div>
        <div style="font-size:0.72rem;color:var(--grey);margin-bottom:3px">Horaire</div>
        <input value="${escHtml(item.heure||'')}" placeholder="14h00"
          onchange="saveJourJItem('${item.id}','heure',this.value)"
          style="width:82px;border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.88rem;font-weight:700;color:var(--pink)">
      </div>
      <div>
        <div style="font-size:0.72rem;color:var(--grey);margin-bottom:3px">Moment / Activité</div>
        <input value="${escHtml(item.titre||'')}" placeholder="Description du moment…"
          onchange="saveJourJItem('${item.id}','titre',this.value)"
          style="width:100%;border:1px solid #ddd;border-radius:5px;padding:5px 8px;font-family:inherit;font-size:0.88rem;font-weight:600">
        <input value="${escHtml(item.details||'')}" placeholder="Qui, où, détails…"
          onchange="saveJourJItem('${item.id}','details',this.value)"
          style="width:100%;border:1px solid #eee;border-radius:5px;padding:3px 8px;font-family:inherit;font-size:0.78rem;color:var(--grey);margin-top:3px">
      </div>
      <button onclick="deleteJourJItem('${item.id}')"
        style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1.1rem;padding:4px;margin-top:18px;line-height:1"
        onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
    </div>
  `).join('');
  if (!state.jourJItems || !state.jourJItems.length) { state.jourJItems = JSON.parse(JSON.stringify(JOURJ_DEFAULT)); save(); }
}

function saveJourJItem(id, field, val) {
  const item = getJourJItems().find(i => i.id === id);
  if (item) { item[field] = val; save(); }
}

function deleteJourJItem(id) {
  const _titre = getJourJItems().find(i=>i.id===id)?.titre || '?';
  if (!confirm(`Supprimer le moment "${_titre}" du programme Jour J ?`)) return;
  logAction('suppression', 'Jour J', `Moment supprimé : "${_titre}"`);
  state.jourJItems = getJourJItems().filter(i => i.id !== id);
  save(); renderJourJ(); renderFilRouge();
}

function addJourJItem() {
  const items = getJourJItems();
  const maxOrdre = items.reduce((m,i) => Math.max(m, i.ordre||0), 0);
  items.push({ id:'jj_'+Date.now(), ordre:maxOrdre+10, heure:'', titre:'', details:'', resp:'', vigilance:'' });
  logAction('ajout', 'Jour J', 'Nouveau moment ajouté au programme Jour J');
  save(); renderJourJ();
}

// ═══════════════════════════════════════
// CHÂTEAU — INFO BOXES MODIFIABLES
// ═══════════════════════════════════════
// (VENUE_INFOS_DEFAULT déclaré avant le bloc INIT)

function getVenueInfo(key) {
  return (state.venueInfos && state.venueInfos[key] !== undefined) ? state.venueInfos[key] : (VENUE_INFOS_DEFAULT[key] || '');
}

function saveVenueInfo(key, val) {
  if (!state.venueInfos) state.venueInfos = {};
  state.venueInfos[key] = val;
  save();
}

function venueInfoBox(icon, title, key, rows) {
  const val = getVenueInfo(key);
  return `<div class="info-box">
    <h4>${icon} ${title}</h4>
    <textarea rows="${rows||5}" onchange="saveVenueInfo('${key}',this.value)"
      style="width:100%;border:1px solid #eee;border-radius:7px;padding:8px 10px;font-family:inherit;font-size:0.87rem;line-height:1.6;resize:vertical;color:var(--dark);background:white">${escHtml(val)}</textarea>
  </div>`;
}

function renderVenue() {
  const el = document.getElementById('venue-container');
  if (!el) return;
  el.innerHTML = `
    <div class="venue-info">
      <div>
        ${venueInfoBox('📍','Localisation','localisation',5)}
        <br>
        ${venueInfoBox('🚗','Accès','acces',4)}
      </div>
      <div>
        ${venueInfoBox('✨','Points forts','pointsForts',7)}
        <br>
        ${venueInfoBox('❓','Questions à poser au château','questions',7)}
      </div>
    </div>
    <div class="tip-box" style="margin-top:16px">
      🌹 <strong>Idée déco :</strong><br>
      <textarea onchange="saveVenueInfo('decoNote',this.value)" rows="3"
        style="width:100%;border:none;background:transparent;font-family:inherit;font-size:0.9rem;line-height:1.5;resize:vertical;color:var(--dark);margin-top:6px">${escHtml(getVenueInfo('decoNote'))}</textarea>
    </div>
    <div style="height:24px"></div>
    <div class="card-title">✝️ Cérémonie religieuse chrétienne</div>
    <div class="venue-info">
      <div>
        ${venueInfoBox('📋','Démarches à effectuer','ceremonieDemarches',6)}
        <br>
        ${venueInfoBox('🎵','Musique liturgique','ceremonieMusique',5)}
      </div>
      <div>
        ${venueInfoBox('📖',"Déroulement type d'une messe de mariage",'ceremonieDeroulement',6)}
        <br>
        ${venueInfoBox('📝','Lectures bibliques populaires','ceremonieLectures',6)}
      </div>
    </div>
    <div class="tip-box" style="margin-top:16px">
      ✝️ <strong>Conseil :</strong> Prévoir un <em>livret de messe</em> pour les invités avec les textes des lectures, les paroles des chants et le déroulé de la cérémonie. Cela permet à tous les invités, même non pratiquants, de suivre et de participer. Estelle peut s'en charger avec Keziah !
    </div>`;
}

// ═══════════════════════════════════════
// MATRICE — CATÉGORIES DYNAMIQUES
// ═══════════════════════════════════════
function getMatrixCategories() {
  const m = getMatrixState();
  return (m.categories && m.categories.length > 0) ? m.categories : [...MATRIX_CATEGORIES];
}

function addMatrixCategory() {
  const input = document.getElementById('matrix-new-cat');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  const m = getMatrixState();
  if (!m.categories) m.categories = [...MATRIX_CATEGORIES];
  if (m.categories.includes(val)) { alert('Cette catégorie existe déjà.'); return; }
  m.categories.push(val);
  input.value = '';
  saveMatrix(); renderMatrix();
}

function removeMatrixCategory(cat) {
  const m = getMatrixState();
  if (!confirm(`Supprimer la catégorie "${cat}" ? Les candidats de cette catégorie seront perdus.`)) return;
  if (!m.categories) m.categories = [...MATRIX_CATEGORIES];
  m.categories = m.categories.filter(c => c !== cat);
  delete m[cat];
  saveMatrix(); renderMatrix();
}

function renderMatrixCategoryTags() {
  const cont = document.getElementById('matrix-cat-tags');
  if (!cont) return;
  const cats = getMatrixCategories();
  cont.innerHTML = cats.map(cat => `
    <span style="display:inline-flex;align-items:center;gap:4px;background:var(--light-pink);color:var(--dark-pink);border-radius:20px;padding:4px 12px;font-size:0.82rem;font-weight:600">
      ${escHtml(cat)}
      <button onclick="removeMatrixCategory(${JSON.stringify(cat)})"
        style="background:none;border:none;cursor:pointer;color:var(--dark-pink);font-size:1rem;padding:0;line-height:1;margin-left:2px">×</button>
    </span>
  `).join('');
}

// ═══════════════════════════════════════
// MATRICE → PRESTATAIRES
// ═══════════════════════════════════════
function pushWinnerToVendors(cat, name, notes) {
  initVendors();
  const existing = state.vendors.find(v => v.cat === cat);
  if (existing) {
    if (!confirm(`Mettre à jour le prestataire "${cat}" avec "${name}" ?`)) return;
    existing.name = name;
    if (notes) existing.notes = (existing.notes ? existing.notes + '\n' : '') + notes;
  } else {
    state.vendors.push({ id:'v'+Date.now(), cat, name, contacts:[{nom:'',tel:'',email:'',role:''}], site:'', status:'⏳ À contacter', notes:notes||'' });
  }
  save();
  renderVendors();
  alert(`✅ "${name}" ajouté dans les Prestataires (catégorie : ${cat})`);
}

// ═══════════════════════════════════════
// PRESTATAIRES — REFONTE MULTI-CONTACTS
// ═══════════════════════════════════════
function initVendors() {
  if (state.vendors && state.vendors.length > 0) return;
  state.vendors = VENDORS_DATA.map((v, i) => {
    const saved = state['vendor_'+i] || {};
    return {
      id: 'v'+i,
      cat: v.cat,
      name: saved.name || v.name || '',
      contacts: [{ nom:'', tel:saved.tel||v.tel||'', email:saved.email||v.email||'', role:'' }],
      site: saved.site || v.site || '',
      status: saved.status || v.status || '⏳ À contacter',
      notes: saved.notes || ''
    };
  });
  save();
}

function renderVendors() {
  const grid = document.getElementById('vendors-grid');
  if (!grid) return;
  initVendors();
  grid.innerHTML = '';
  (state.vendors || []).forEach(v => {
    const div = document.createElement('div');
    div.className = 'prest-card';
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
        <input value="${escHtml(v.cat||'')}" placeholder="Catégorie…" onchange="saveVendorField('${v.id}','cat',this.value)"
          style="flex:1;border:none;background:transparent;font-size:0.75rem;font-weight:700;color:var(--grey);text-transform:uppercase;letter-spacing:0.5px;font-family:inherit;padding:0">
        <button onclick="deleteVendor('${v.id}')" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem"
          onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
      </div>
      <div class="prest-field"><label>Nom :</label>
        <input value="${escHtml(v.name||'')}" placeholder="Nom du prestataire"
          onchange="saveVendorField('${v.id}','name',this.value)" style="font-weight:700"></div>
      <div id="contacts-${v.id}">${(v.contacts||[]).map((c,ci) => vendorContactHtml(v.id,ci,c)).join('')}</div>
      <button onclick="addVendorContact('${v.id}')"
        style="font-size:0.78rem;color:var(--pink);background:none;border:1px dashed var(--pink);border-radius:6px;padding:3px 10px;cursor:pointer;margin:4px 0 8px;font-family:inherit">+ Contact</button>
      <div class="prest-field"><label>Site web :</label>
        <input value="${escHtml(v.site||'')}" placeholder="www…" onchange="saveVendorField('${v.id}','site',this.value)"></div>
      <div class="prest-field"><label>Notes :</label>
        <input value="${escHtml(v.notes||'')}" placeholder="Notes…" onchange="saveVendorField('${v.id}','notes',this.value)"></div>
      <div class="prest-status">
        <select onchange="saveVendorField('${v.id}','status',this.value)"
          style="padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-family:inherit;font-size:0.82rem;">
          <option ${!v.status||v.status==='⏳ À contacter'?'selected':''}>⏳ À contacter</option>
          <option ${v.status==='🔄 En négociation'?'selected':''}>🔄 En négociation</option>
          <option ${v.status==='✅ Contrat signé'?'selected':''}>✅ Contrat signé</option>
          <option ${v.status==='❌ Non retenu'?'selected':''}>❌ Non retenu</option>
        </select>
      </div>`;
    grid.appendChild(div);
  });
}

function vendorContactHtml(vid, ci, c) {
  return `<div style="background:#fafafa;border-radius:7px;padding:8px 10px;margin-bottom:6px;border:1px solid #f0f0f0">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <span style="font-size:0.72rem;color:var(--grey);font-weight:700;flex:1">👤 Contact ${ci+1}</span>
      <button onclick="deleteVendorContact('${vid}',${ci})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:0.9rem"
        onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">×</button>
    </div>
    <input value="${escHtml(c.nom||'')}" placeholder="Nom / Prénom"
      onchange="saveVendorContact('${vid}',${ci},'nom',this.value)"
      style="width:100%;border:1px solid #eee;border-radius:5px;padding:4px 7px;font-family:inherit;font-size:0.85rem;margin-bottom:3px;font-weight:600">
    <input value="${escHtml(c.role||'')}" placeholder="Rôle (ex: Directeur artistique)"
      onchange="saveVendorContact('${vid}',${ci},'role',this.value)"
      style="width:100%;border:1px solid #eee;border-radius:5px;padding:4px 7px;font-family:inherit;font-size:0.78rem;margin-bottom:3px;color:var(--grey)">
    <input value="${escHtml(c.tel||'')}" placeholder="📞 Téléphone"
      onchange="saveVendorContact('${vid}',${ci},'tel',this.value)"
      style="width:100%;border:1px solid #eee;border-radius:5px;padding:4px 7px;font-family:inherit;font-size:0.84rem;margin-bottom:3px">
    <input value="${escHtml(c.email||'')}" placeholder="✉️ Email"
      onchange="saveVendorContact('${vid}',${ci},'email',this.value)"
      style="width:100%;border:1px solid #eee;border-radius:5px;padding:4px 7px;font-family:inherit;font-size:0.84rem">
  </div>`;
}

function saveVendorField(id, field, val) {
  const v = (state.vendors||[]).find(v=>v.id===id);
  if (v) { v[field]=val; save(); }
}

function saveVendorContact(vid, ci, field, val) {
  const v = (state.vendors||[]).find(v=>v.id===vid);
  if (v && v.contacts && v.contacts[ci]) { v.contacts[ci][field]=val; save(); }
}

function addVendorContact(vid) {
  initVendors();
  const v = (state.vendors||[]).find(v=>v.id===vid);
  if (!v) return;
  if (!v.contacts) v.contacts = [];
  v.contacts.push({ nom:'', tel:'', email:'', role:'' });
  save(); renderVendors();
}

function deleteVendorContact(vid, ci) {
  const v = (state.vendors||[]).find(v=>v.id===vid);
  if (!v||!v.contacts) return;
  if (v.contacts.length===1) { alert('Il faut au moins un contact par prestataire.'); return; }
  const _nom = v.contacts[ci]?.nom || '?';
  if (!confirm(`Supprimer le contact "${_nom}" du prestataire "${v.cat||'?'}" ?`)) return;
  logAction('suppression', 'Prestataires', `Contact supprimé : "${_nom}" (${v.cat||'?'})`);
  v.contacts.splice(ci,1);
  save(); renderVendors();
}

function addVendor() {
  initVendors();
  state.vendors.push({ id:'v'+Date.now(), cat:'Nouveau prestataire', name:'', contacts:[{nom:'',tel:'',email:'',role:''}], site:'', status:'⏳ À contacter', notes:'' });
  logAction('ajout', 'Prestataires', 'Nouveau prestataire ajouté');
  save(); renderVendors();
}

function deleteVendor(id) {
  const _cat = (state.vendors||[]).find(v=>v.id===id)?.cat || '?';
  if (!confirm(`Supprimer le prestataire "${_cat}" ?`)) return;
  logAction('suppression', 'Prestataires', `Prestataire supprimé : "${_cat}"`);
  state.vendors = (state.vendors||[]).filter(v=>v.id!==id);
  save(); renderVendors();
}

// ═══════════════════════════════════════
// FIL ROUGE — SUPPRESSION
// ═══════════════════════════════════════
function deleteFilRouge(i) {
  if (!state.filrougeRows) state.filrougeRows = FILROUGE_ROWS_DEFAULT.map(r=>({...r}));
  if (!confirm('Supprimer cette ligne du fil rouge ?')) return;
  state.filrougeRows.splice(i,1);
  save(); renderFilRouge();
}

// ═══════════════════════════════════════
// URGENCE — SUPPRESSION
// ═══════════════════════════════════════
function deleteUrgenceContact(i) {
  if (!state.urgenceContacts) state.urgenceContacts = URGENCE_DEFAULT.map(c=>({...c}));
  const _nom = (state.urgenceContacts||[])[i]?.nom || '?';
  if (!confirm(`Supprimer le contact d'urgence "${_nom}" ?`)) return;
  logAction('suppression', 'Fil rouge Jour J', `Contact d'urgence supprimé : "${_nom}"`);
  state.urgenceContacts.splice(i,1);
  save(); renderUrgence();
}

// ═══════════════════════════════════════
// EVJF — PROJETS
// ═══════════════════════════════════════
let _evjfOpenProjet = null;

function renderEvjfProjets() {
  const el = document.getElementById('evjf-projets-list');
  if (!el) return;
  const projets = (state.evjf && state.evjf.projets) || [];
  if (projets.length === 0) {
    el.innerHTML = '<p style="color:var(--grey);font-size:0.88rem;font-style:italic;text-align:center;padding:16px">Aucun projet — cliquez sur "+ Nouveau projet" pour commencer</p>';
    return;
  }
  el.innerHTML = projets.map((p, i) => {
    if (!p.programme) p.programme = [];
    if (!p.budget)    p.budget = [];
    if (!p.idees)     p.idees = [];
    const isOpen = _evjfOpenProjet === p.id;
    const totalBudget = p.budget.reduce((s, b) => s + (parseFloat(b.montant) || 0), 0);
    return `
    <div style="border:1px solid #e0d4f7;border-radius:14px;overflow:hidden;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,0.04)">
      <div style="background:linear-gradient(135deg,#f3e8ff,#fce4ec);padding:16px 18px;cursor:pointer"
        onclick="toggleEvjfProjet('${p.id}')">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.3rem">💜</span>
          <div style="flex:1">
            <div style="font-weight:700;font-size:1rem;color:var(--dark)">${escHtml(p.titre||'Nouveau projet')}</div>
            <div style="font-size:0.8rem;color:var(--grey);margin-top:2px">
              ${p.destination?'📍 '+escHtml(p.destination):''}
              ${p.dateDebut?' · 📅 '+escHtml(p.dateDebut)+(p.dateFin&&p.dateFin!==p.dateDebut?' → '+escHtml(p.dateFin):''):''}
              ${p.theme?' · 🎨 '+escHtml(p.theme):''}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:0.78rem;color:var(--grey);background:white;padding:3px 8px;border-radius:10px;border:1px solid #eee">
              ${p.programme.length} étape${p.programme.length!==1?'s':''} · ${totalBudget.toFixed(0)} €
            </span>
            <span style="color:var(--grey)">${isOpen?'▲':'▼'}</span>
          </div>
          <button onclick="event.stopPropagation();deleteEvjfProjet(${i})"
            style="background:none;border:none;cursor:pointer;color:#ccc;font-size:1rem;padding:4px"
            onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
        </div>
      </div>
      ${isOpen ? `
      <div style="padding:18px;background:white">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-bottom:20px">
          <div><label style="font-size:0.75rem;color:var(--grey);display:block;margin-bottom:3px">Nom du projet</label>
            <input value="${escHtml(p.titre||'')}" placeholder="Ex: Weekend Spa Paris"
              onchange="saveEvjfProjetField(${i},'titre',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:7px;padding:7px 10px;font-family:inherit;font-size:0.88rem;font-weight:700"></div>
          <div><label style="font-size:0.75rem;color:var(--grey);display:block;margin-bottom:3px">Destination / Lieu</label>
            <input value="${escHtml(p.destination||'')}" placeholder="Ex: Paris, Bordeaux…"
              onchange="saveEvjfProjetField(${i},'destination',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:7px;padding:7px 10px;font-family:inherit;font-size:0.88rem"></div>
          <div><label style="font-size:0.75rem;color:var(--grey);display:block;margin-bottom:3px">Thème / Style</label>
            <input value="${escHtml(p.theme||'')}" placeholder="Ex: Luxe & Détente"
              onchange="saveEvjfProjetField(${i},'theme',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:7px;padding:7px 10px;font-family:inherit;font-size:0.88rem"></div>
          <div><label style="font-size:0.75rem;color:var(--grey);display:block;margin-bottom:3px">Date début</label>
            <input type="date" value="${escHtml(p.dateDebut||'')}"
              onchange="saveEvjfProjetField(${i},'dateDebut',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:7px;padding:7px 10px;font-family:inherit;font-size:0.88rem"></div>
          <div><label style="font-size:0.75rem;color:var(--grey);display:block;margin-bottom:3px">Date fin</label>
            <input type="date" value="${escHtml(p.dateFin||'')}"
              onchange="saveEvjfProjetField(${i},'dateFin',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:7px;padding:7px 10px;font-family:inherit;font-size:0.88rem"></div>
          <div><label style="font-size:0.75rem;color:var(--grey);display:block;margin-bottom:3px">Notes</label>
            <textarea rows="2" placeholder="Infos, contraintes…" onchange="saveEvjfProjetField(${i},'notes',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:7px;padding:7px 10px;font-family:inherit;font-size:0.88rem;resize:vertical">${escHtml(p.notes||'')}</textarea></div>
        </div>

        <div style="font-weight:700;color:var(--pink);font-size:0.9rem;margin-bottom:10px">📅 Programme</div>
        ${p.programme.length===0?'<p style="color:var(--grey);font-size:0.85rem;font-style:italic;margin-bottom:8px">Aucune étape pour l\'instant</p>':''}
        ${p.programme.map((pr,ii)=>`
          <div style="display:grid;grid-template-columns:70px 70px 1fr auto;gap:8px;align-items:center;padding:8px;background:#fafafa;border-radius:8px;margin-bottom:6px;border:1px solid #f0f0f0">
            <input value="${escHtml(pr.jour||'')}" placeholder="Jour 1"
              onchange="saveEvjfProgItem(${i},${ii},'jour',this.value)"
              style="border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.82rem;text-align:center">
            <input value="${escHtml(pr.heure||'')}" placeholder="10h00"
              onchange="saveEvjfProgItem(${i},${ii},'heure',this.value)"
              style="border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.82rem;text-align:center;color:var(--pink);font-weight:600">
            <input value="${escHtml(pr.activite||'')}" placeholder="Activité, lieu…"
              onchange="saveEvjfProgItem(${i},${ii},'activite',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:5px;padding:5px 8px;font-family:inherit;font-size:0.85rem">
            <button onclick="deleteEvjfProgItem(${i},${ii})" style="background:none;border:none;cursor:pointer;color:#ccc"
              onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
          </div>`).join('')}
        <button onclick="addEvjfProgItem(${i})"
          style="margin-bottom:20px;background:none;border:1px dashed var(--pink);color:var(--pink);border-radius:7px;padding:5px 12px;cursor:pointer;font-family:inherit;font-size:0.83rem">
          + Ajouter une étape</button>

        <div style="font-weight:700;color:var(--pink);font-size:0.9rem;margin-bottom:10px">💰 Budget estimé</div>
        ${p.budget.length===0?'<p style="color:var(--grey);font-size:0.85rem;font-style:italic;margin-bottom:8px">Aucun poste pour l\'instant</p>':''}
        ${p.budget.map((b,ii)=>`
          <div style="display:grid;grid-template-columns:1fr 100px 110px auto;gap:8px;align-items:center;padding:8px;background:#fafafa;border-radius:8px;margin-bottom:6px;border:1px solid #f0f0f0">
            <input value="${escHtml(b.poste||'')}" placeholder="Restaurant, hébergement…"
              onchange="saveEvjfBudgetItem(${i},${ii},'poste',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:5px;padding:5px 8px;font-family:inherit;font-size:0.85rem">
            <input type="number" value="${b.montant||''}" placeholder="€"
              onchange="saveEvjfBudgetItem(${i},${ii},'montant',parseFloat(this.value)||0)"
              style="border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.85rem;text-align:right;color:var(--green);font-weight:600">
            <select onchange="saveEvjfBudgetItem(${i},${ii},'statut',this.value)"
              style="border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.8rem;background:white">
              <option value="estimé" ${b.statut==='estimé'?'selected':''}>Estimé</option>
              <option value="confirmé" ${b.statut==='confirmé'?'selected':''}>Confirmé</option>
              <option value="payé" ${b.statut==='payé'?'selected':''}>Payé</option>
            </select>
            <button onclick="deleteEvjfBudgetItem(${i},${ii})" style="background:none;border:none;cursor:pointer;color:#ccc"
              onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
          </div>`).join('')}
        ${p.budget.length>0?`<div style="text-align:right;font-size:0.88rem;color:var(--grey);margin-top:2px;margin-bottom:8px">Total : <strong style="color:var(--green)">${totalBudget.toFixed(2)} €</strong></div>`:''}
        <button onclick="addEvjfBudgetItem(${i})"
          style="margin-bottom:20px;background:none;border:1px dashed var(--green);color:var(--green);border-radius:7px;padding:5px 12px;cursor:pointer;font-family:inherit;font-size:0.83rem">
          + Ajouter un poste</button>

        <div style="font-weight:700;color:var(--pink);font-size:0.9rem;margin-bottom:10px">💡 Idées & activités</div>
        ${p.idees.length===0?'<p style="color:var(--grey);font-size:0.85rem;font-style:italic;margin-bottom:8px">Aucune idée pour l\'instant</p>':''}
        ${p.idees.map((id,ii)=>`
          <div style="display:grid;grid-template-columns:1fr 110px auto;gap:8px;align-items:center;padding:8px;background:#fafafa;border-radius:8px;margin-bottom:6px;border:1px solid #f0f0f0">
            <input value="${escHtml(id.texte||'')}" placeholder="Spa, dégustation, visite…"
              onchange="saveEvjfIdeeItem(${i},${ii},'texte',this.value)"
              style="width:100%;border:1px solid #ddd;border-radius:5px;padding:5px 8px;font-family:inherit;font-size:0.85rem">
            <select onchange="saveEvjfIdeeItem(${i},${ii},'statut',this.value)"
              style="border:1px solid #ddd;border-radius:5px;padding:5px 6px;font-family:inherit;font-size:0.8rem;background:white">
              <option value="à explorer" ${id.statut==='à explorer'?'selected':''}>À explorer</option>
              <option value="retenu" ${id.statut==='retenu'?'selected':''}>✅ Retenu</option>
              <option value="écarté" ${id.statut==='écarté'?'selected':''}>❌ Écarté</option>
            </select>
            <button onclick="deleteEvjfIdeeItem(${i},${ii})" style="background:none;border:none;cursor:pointer;color:#ccc"
              onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='#ccc'">🗑️</button>
          </div>`).join('')}
        <button onclick="addEvjfIdeeItem(${i})"
          style="background:none;border:1px dashed var(--orange);color:var(--orange);border-radius:7px;padding:5px 12px;cursor:pointer;font-family:inherit;font-size:0.83rem">
          + Ajouter une idée</button>
      </div>` : ''}
    </div>`;
  }).join('');
}

function toggleEvjfProjet(id) {
  _evjfOpenProjet = (_evjfOpenProjet === id) ? null : id;
  renderEvjfProjets();
}

function addEvjfProjet() {
  if (!state.evjf) state.evjf = {};
  if (!state.evjf.projets) state.evjf.projets = [];
  const newId = 'ep' + Date.now();
  state.evjf.projets.push({ id:newId, titre:'', destination:'', theme:'', dateDebut:'', dateFin:'', notes:'', programme:[], budget:[], idees:[] });
  _evjfOpenProjet = newId;
  logAction('ajout', 'EVJF', 'Nouveau projet EVJF créé');
  save(); renderEvjfProjets();
}

function saveEvjfProjetField(i, field, val) {
  if (!state.evjf?.projets?.[i]) return;
  state.evjf.projets[i][field] = val;
  save(); renderEvjfProjets();
}

function deleteEvjfProjet(i) {
  const _titre = state.evjf?.projets?.[i]?.titre || 'Nouveau projet';
  if (!confirm(`Supprimer le projet EVJF "${_titre}" et tout son contenu ?`)) return;
  logAction('suppression', 'EVJF', `Projet EVJF supprimé : "${_titre}"`);
  const id = state.evjf.projets[i]?.id;
  if (_evjfOpenProjet === id) _evjfOpenProjet = null;
  state.evjf.projets.splice(i, 1);
  save(); renderEvjfProjets();
}

function addEvjfProgItem(pi) {
  const p = state.evjf?.projets?.[pi]; if (!p) return;
  if (!p.programme) p.programme = [];
  p.programme.push({ id:'prog'+Date.now(), jour:'Jour 1', heure:'', activite:'' });
  save(); renderEvjfProjets();
}
function saveEvjfProgItem(pi, ii, field, val) {
  const p = state.evjf?.projets?.[pi];
  if (p?.programme?.[ii]) { p.programme[ii][field]=val; save(); }
}
function deleteEvjfProgItem(pi, ii) {
  const p = state.evjf?.projets?.[pi]; if (!p?.programme) return;
  const _a = p.programme[ii]?.activite || '?';
  if (!confirm(`Supprimer "${_a}" du programme ?`)) return;
  logAction('suppression', 'EVJF', `Activité projet supprimée : "${_a}" (${p.titre||'?'})`);
  p.programme.splice(ii,1); save(); renderEvjfProjets();
}

function addEvjfBudgetItem(pi) {
  const p = state.evjf?.projets?.[pi]; if (!p) return;
  if (!p.budget) p.budget = [];
  p.budget.push({ id:'bud'+Date.now(), poste:'', montant:0, statut:'estimé' });
  save(); renderEvjfProjets();
}
function saveEvjfBudgetItem(pi, ii, field, val) {
  const p = state.evjf?.projets?.[pi];
  if (p?.budget?.[ii]) { p.budget[ii][field]=val; save(); renderEvjfProjets(); }
}
function deleteEvjfBudgetItem(pi, ii) {
  const p = state.evjf?.projets?.[pi]; if (!p?.budget) return;
  const _poste = p.budget[ii]?.poste || '?';
  if (!confirm(`Supprimer le poste "${_poste}" du budget ?`)) return;
  logAction('suppression', 'EVJF', `Poste budget projet supprimé : "${_poste}" (${p.titre||'?'})`);
  p.budget.splice(ii,1); save(); renderEvjfProjets();
}

function addEvjfIdeeItem(pi) {
  const p = state.evjf?.projets?.[pi]; if (!p) return;
  if (!p.idees) p.idees = [];
  p.idees.push({ id:'ide'+Date.now(), texte:'', statut:'à explorer' });
  save(); renderEvjfProjets();
}
function saveEvjfIdeeItem(pi, ii, field, val) {
  const p = state.evjf?.projets?.[pi];
  if (p?.idees?.[ii]) { p.idees[ii][field]=val; save(); renderEvjfProjets(); }
}
function deleteEvjfIdeeItem(pi, ii) {
  const p = state.evjf?.projets?.[pi]; if (!p?.idees) return;
  const _texte = p.idees[ii]?.texte || '?';
  if (!confirm(`Supprimer l'idée "${_texte}" ?`)) return;
  logAction('suppression', 'EVJF', `Idée projet supprimée : "${_texte}" (${p.titre||'?'})`);
  p.idees.splice(ii,1); save(); renderEvjfProjets();
}

// EVJF — CHECKLIST PERSONNALISÉE
function addEvjfCustomCheck() {
  const input = document.getElementById('evjf-custom-check-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  if (!state.evjf) state.evjf = {};
  if (!state.evjf.customChecklist) state.evjf.customChecklist = [];
  state.evjf.customChecklist.push({ id:'ecc'+Date.now(), text });
  input.value = '';
  save(); renderEvjf();
}

function deleteEvjfCustomCheck(id) {
  if (!state.evjf||!state.evjf.customChecklist) return;
  const _text = state.evjf.customChecklist.find(i=>i.id===id)?.text || '?';
  if (!confirm(`Supprimer "${_text}" de la checklist EVJF ?`)) return;
  logAction('suppression', 'EVJF', `Item checklist EVJF supprimé : "${_text}"`);
  state.evjf.customChecklist = state.evjf.customChecklist.filter(i=>i.id!==id);
  delete (state.evjf.checklist||{})['cust_'+id];
  save(); renderEvjf();
}

function toggleEvjfCustomCheck(id, val) {
  if (!state.evjf) state.evjf = {};
  if (!state.evjf.checklist) state.evjf.checklist = {};
  state.evjf.checklist['cust_'+id] = val;
  save();
}

// EVJF — LIER PARTICIPANTE À UN PROFIL
function selectEvjfMember(i, memberName) {
  if (!state.evjf||!state.evjf.participantes) return;
  state.evjf.participantes[i].memberId = memberName;
  if (memberName) state.evjf.participantes[i].prenom = memberName;
  save(); renderEvjf();
}

// ═══════════════════════════════════════
// FAIRE-PART — CHECKLIST PERSONNALISÉE
// ═══════════════════════════════════════
function addFpCustomItem() {
  const input = document.getElementById('fp-custom-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  if (!state.papeterie) state.papeterie = { checklist:{}, notes:'' };
  if (!state.papeterie.customItems) state.papeterie.customItems = [];
  state.papeterie.customItems.push({ id:'fp'+Date.now(), text });
  input.value = '';
  save(); renderFairePart();
}

function deleteFpCustomItem(id) {
  if (!state.papeterie||!state.papeterie.customItems) return;
  const _text = state.papeterie.customItems.find(i=>i.id===id)?.text || '?';
  if (!confirm(`Supprimer "${_text}" de la checklist faire-part ?`)) return;
  logAction('suppression', 'Faire-part', `Item checklist supprimé : "${_text}"`);
  state.papeterie.customItems = state.papeterie.customItems.filter(i=>i.id!==id);
  delete (state.papeterie.checklist||{})['cust_'+id];
  save(); renderFairePart();
}

function toggleFpCustomItem(id, val) {
  if (!state.papeterie) state.papeterie = { checklist:{}, notes:'' };
  if (!state.papeterie.checklist) state.papeterie.checklist = {};
  state.papeterie.checklist['cust_'+id] = val;
  save();
}

// ═══════════════════════════════════════
// PLAYLIST MUSICALE
// ═══════════════════════════════════════
const PLAYLIST_MOMENTS = {
  ceremonie: { label:'💒 Cérémonie', color:'#C2185B', light:'#FCE4EC' },
  cocktail:  { label:'🥂 Cocktail',  color:'#F57C00', light:'#FFF3E0' },
  diner:     { label:'🍽️ Dîner',     color:'#1565C0', light:'#E3F2FD' },
  soiree:    { label:'🎉 Soirée',    color:'#388E3C', light:'#E8F5E9' },
};
let currentPlaylistMoment = 'all';
let editingSongId = null;

function setPlaylistMoment(moment, btn) {
  currentPlaylistMoment = moment;
  document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPlaylist();
}

function renderPlaylist() {
  const songs = (state.playlist?.songs || []).slice();
  // Comptes par onglet
  ['ceremonie','cocktail','diner','soiree'].forEach(m => {
    const el = document.getElementById('pl-count-'+m);
    const n = songs.filter(s => s.moment===m).length;
    if (el) el.textContent = n || '';
  });
  const elAll = document.getElementById('pl-count-all');
  if (elAll) elAll.textContent = songs.length || '';

  // Mise à jour du select personne
  const personSel = document.getElementById('pl-filter-person');
  const curPerson = personSel?.value || '';
  const persons = [...new Set(songs.map(s => s.addedBy).filter(Boolean))].sort();
  if (personSel) {
    personSel.innerHTML = '<option value="">Toutes les personnes</option>' +
      persons.map(p => `<option value="${escHtml(p)}"${curPerson===p?' selected':''}>${escHtml(p)}</option>`).join('');
  }

  // Filtres
  const filterCoeur  = document.getElementById('pl-filter-coeur')?.checked;
  const filterPerson = personSel?.value || '';
  let filtered = songs;
  if (currentPlaylistMoment !== 'all') filtered = filtered.filter(s => s.moment === currentPlaylistMoment);
  if (filterCoeur)   filtered = filtered.filter(s => s.coupDeCoeur);
  if (filterPerson)  filtered = filtered.filter(s => s.addedBy === filterPerson);
  // Coups de cœur en premier
  filtered.sort((a, b) => (b.coupDeCoeur ? 1 : 0) - (a.coupDeCoeur ? 1 : 0));

  const el = document.getElementById('pl-songs');
  if (!el) return;

  if (!filtered.length) {
    el.innerHTML = `<div style="text-align:center;padding:48px 20px;color:var(--grey)">
      <div style="font-size:2.8rem;margin-bottom:10px">🎵</div>
      <p>Aucune chanson — ajoutez-en une !</p></div>`;
    return;
  }

  if (currentPlaylistMoment === 'all') {
    el.innerHTML = Object.entries(PLAYLIST_MOMENTS).map(([m, info]) => {
      const group = filtered.filter(s => s.moment === m);
      if (!group.length) return '';
      return `<div style="margin-bottom:24px">
        <div style="font-weight:700;font-size:1rem;color:${info.color};margin-bottom:10px;padding-bottom:6px;border-bottom:2px solid ${info.light};display:flex;align-items:center;gap:8px">
          ${info.label} <span style="font-size:0.75rem;font-weight:400;color:var(--grey)">${group.length} chanson${group.length>1?'s':''}</span>
        </div>
        ${group.map(s => renderSongCard(s)).join('')}
      </div>`;
    }).join('');
  } else {
    el.innerHTML = filtered.map(s => renderSongCard(s)).join('');
  }
}

function renderSongCard(song) {
  const info = PLAYLIST_MOMENTS[song.moment] || { label:song.moment, color:'var(--grey)', light:'#f0f0f0' };
  const showBadge = currentPlaylistMoment === 'all';
  return `<div class="song-card">
    <button class="song-heart" onclick="toggleSongCoeur('${song.id}')" title="${song.coupDeCoeur?'Retirer coup de cœur':'Marquer coup de cœur'}">${song.coupDeCoeur?'❤️':'🤍'}</button>
    <div class="song-info">
      <div class="song-titre">${escHtml(song.titre)}</div>
      <div class="song-artiste">${escHtml(song.artiste||'—')}</div>
    </div>
    <div class="song-meta">
      ${showBadge ? `<span class="song-badge" style="background:${info.light};color:${info.color}">${info.label}</span>` : ''}
      <span class="song-by">par ${escHtml(song.addedBy||'?')}</span>
      <button class="song-act" onclick="openSongModal('${song.id}')" title="Modifier">✏️</button>
      <button class="song-act" onclick="deleteSong('${song.id}')" title="Supprimer"
        onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--grey)'">×</button>
    </div>
  </div>`;
}

function openSongModal(id = null) {
  editingSongId = id;
  const song = id ? (state.playlist?.songs||[]).find(s => s.id===id) : null;
  const t = document.getElementById('song-titre');
  const a = document.getElementById('song-artiste');
  const m = document.getElementById('song-moment');
  const c = document.getElementById('song-coeur');
  const title = document.getElementById('song-modal-title');
  if (title) title.textContent = id ? 'Modifier la chanson' : '🎵 Ajouter une chanson';
  if (t) t.value = song?.titre || '';
  if (a) a.value = song?.artiste || '';
  if (m) m.value = song?.moment || (currentPlaylistMoment!=='all' ? currentPlaylistMoment : 'soiree');
  if (c) c.checked = song?.coupDeCoeur || false;
  document.getElementById('song-modal-overlay').classList.remove('hidden');
  setTimeout(() => t?.focus(), 80);
}
function closeSongModal() {
  document.getElementById('song-modal-overlay').classList.add('hidden');
  editingSongId = null;
}
function saveSong() {
  const titre    = document.getElementById('song-titre')?.value.trim();
  const artiste  = document.getElementById('song-artiste')?.value.trim() || '';
  const moment   = document.getElementById('song-moment')?.value;
  const coupDeCoeur = document.getElementById('song-coeur')?.checked || false;
  if (!titre) {
    const el = document.getElementById('song-titre');
    if (el) { el.style.borderColor='var(--red)'; setTimeout(()=>el.style.borderColor='',1500); }
    return;
  }
  if (!state.playlist)        state.playlist = { songs:[], spotifyClientId:'' };
  if (!state.playlist.songs)  state.playlist.songs = [];
  const user = window.currentUser;
  const name = user?.displayName || user?.email?.split('@')[0] || 'Inconnu';
  if (editingSongId) {
    const song = state.playlist.songs.find(s => s.id===editingSongId);
    if (song) { song.titre=titre; song.artiste=artiste; song.moment=moment; song.coupDeCoeur=coupDeCoeur; }
    logAction('modification', 'Playlist', `Chanson modifiée : "${titre}"${artiste?' — '+artiste:''}`);
  } else {
    state.playlist.songs.push({ id:'song_'+Date.now(), titre, artiste, moment, coupDeCoeur, addedBy:name, addedAt:new Date().toISOString() });
    logAction('ajout', 'Playlist', `Chanson ajoutée : "${titre}"${artiste?' — '+artiste:''}`);
  }
  save(); closeSongModal(); renderPlaylist();
}
function deleteSong(id) {
  const _song = (state.playlist?.songs||[]).find(s=>s.id===id);
  if (!confirm(`Supprimer "${_song?.titre||'?'}"${_song?.artiste?' — '+_song.artiste:''} de la playlist ?`)) return;
  logAction('suppression', 'Playlist', `Chanson supprimée : "${_song?.titre||'?'}"${_song?.artiste?' — '+_song.artiste:''}`);
  if (!state.playlist) return;
  state.playlist.songs = (state.playlist.songs||[]).filter(s => s.id!==id);
  save(); renderPlaylist();
}
function toggleSongCoeur(id) {
  const song = (state.playlist?.songs||[]).find(s => s.id===id);
  if (!song) return;
  song.coupDeCoeur = !song.coupDeCoeur;
  save(); renderPlaylist();
}

// ── Spotify ──────────────────────────────────────────
function startSpotifyImport() {
  if (state.playlist?.spotifyClientId) { startSpotifyAuth(); }
  else { openSpotifySetup(); }
}
function openSpotifySetup() {
  const overlay = document.getElementById('spotify-setup-overlay');
  if (!overlay) return;
  const rid = document.getElementById('spotify-redirect-uri');
  if (rid) rid.textContent = window.location.origin + window.location.pathname.replace(/\/$/,'') + '/';
  const cid = document.getElementById('spotify-client-id-input');
  if (cid) cid.value = state.playlist?.spotifyClientId || '';
  overlay.classList.remove('hidden');
}
function closeSpotifySetup() { document.getElementById('spotify-setup-overlay').classList.add('hidden'); }
function saveSpotifyClientId() {
  const cid = document.getElementById('spotify-client-id-input')?.value.trim();
  if (!cid) { alert('Veuillez coller votre Client ID Spotify.'); return; }
  if (!state.playlist) state.playlist = { songs:[], spotifyClientId:'' };
  state.playlist.spotifyClientId = cid;
  save(); closeSpotifySetup(); startSpotifyAuth();
}

function _genVerifier() {
  const arr = new Uint8Array(64);
  window.crypto.getRandomValues(arr);
  return btoa(String.fromCharCode(...arr)).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_').slice(0,128);
}
async function _genChallenge(v) {
  const data = new TextEncoder().encode(v);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
}
async function startSpotifyAuth() {
  const clientId = state.playlist?.spotifyClientId;
  if (!clientId) return;
  const verifier = _genVerifier();
  const challenge = await _genChallenge(verifier);
  localStorage.setItem('spotify_verifier', verifier);
  localStorage.setItem('spotify_moment', currentPlaylistMoment);
  const redirectUri = window.location.origin + window.location.pathname.replace(/\/$/,'') + '/';
  const params = new URLSearchParams({
    client_id: clientId, response_type:'code',
    redirect_uri: redirectUri,
    scope:'playlist-read-private playlist-read-collaborative',
    code_challenge_method:'S256', code_challenge: challenge,
  });
  window.location.href = 'https://accounts.spotify.com/authorize?' + params;
}
async function handleSpotifyCallback() {
  const code = window._spotifyCode;
  if (!code) return;
  window._spotifyCode = null;
  const verifier  = localStorage.getItem('spotify_verifier');
  const savedMoment = localStorage.getItem('spotify_moment') || 'soiree';
  localStorage.removeItem('spotify_verifier');
  localStorage.removeItem('spotify_moment');
  const clientId = state.playlist?.spotifyClientId;
  if (!clientId || !verifier) { alert('Erreur : Client ID ou verifier manquant.'); return; }
  const loading = document.getElementById('spotify-loading');
  if (loading) loading.style.display = 'flex';
  try {
    const redirectUri = window.location.origin + window.location.pathname.replace(/\/$/,'') + '/';
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body: new URLSearchParams({ grant_type:'authorization_code', code, redirect_uri:redirectUri, client_id:clientId, code_verifier:verifier }),
    });
    const tokenData = await tokenRes.json();
    if (tokenData.error) throw new Error(tokenData.error_description || tokenData.error);
    const plRes = await fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
      headers: { 'Authorization': 'Bearer ' + tokenData.access_token }
    });
    const plData = await plRes.json();
    if (loading) loading.style.display = 'none';
    showSpotifyPicker(plData.items || [], tokenData.access_token, savedMoment);
  } catch(e) {
    if (loading) loading.style.display = 'none';
    alert('Erreur Spotify : ' + e.message);
  }
}
function showSpotifyPicker(playlists, token, defaultMoment) {
  const overlay = document.getElementById('spotify-picker-overlay');
  if (!overlay) return;
  const list = document.getElementById('spotify-pl-list');
  if (list) {
    list.innerHTML = playlists.length ? playlists.map(pl => `
      <div class="sp-item" data-id="${pl.id}" data-token="${token}" onclick="selectSpotifyPl(this)">
        ${pl.images?.[0] ? `<img src="${pl.images[0].url}" style="width:44px;height:44px;border-radius:6px;object-fit:cover;flex-shrink:0">` : '<div style="width:44px;height:44px;border-radius:6px;background:#eee;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.3rem">🎵</div>'}
        <div><div style="font-weight:700;font-size:0.9rem">${escHtml(pl.name)}</div><div style="font-size:0.75rem;color:var(--grey)">${pl.tracks?.total||0} titres</div></div>
      </div>`).join('') : '<p style="color:var(--grey);font-size:0.85rem;font-style:italic">Aucune playlist trouvée.</p>';
  }
  const ms = document.getElementById('spotify-moment-sel');
  if (ms && defaultMoment !== 'all') ms.value = defaultMoment;
  overlay.classList.remove('hidden');
  // Switch to playlist tab
  showSection('playlist', document.querySelector('.nav a[onclick*="playlist"]'));
}
function selectSpotifyPl(el) {
  document.querySelectorAll('.sp-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
}
async function importSpotifyPlaylist() {
  const selected = document.querySelector('.sp-item.selected');
  if (!selected) { alert('Sélectionnez une playlist.'); return; }
  const plId = selected.dataset.id;
  const token = selected.dataset.token;
  const moment = document.getElementById('spotify-moment-sel')?.value || 'soiree';
  const btn = document.getElementById('spotify-import-btn');
  if (btn) { btn.disabled=true; btn.textContent='Import en cours…'; }
  try {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${plId}/tracks?limit=100&fields=items(track(name,artists))`, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const data = await res.json();
    if (!state.playlist) state.playlist = { songs:[], spotifyClientId:'' };
    if (!state.playlist.songs) state.playlist.songs = [];
    const user = window.currentUser;
    const addedBy = (user?.displayName || user?.email?.split('@')[0] || 'Spotify') + ' (Spotify)';
    const newSongs = (data.items||[]).filter(i => i.track?.name).map(i => ({
      id: 'song_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),
      titre: i.track.name,
      artiste: (i.track.artists||[]).map(a=>a.name).join(', '),
      moment, coupDeCoeur: false, addedBy, addedAt: new Date().toISOString(),
    }));
    state.playlist.songs.push(...newSongs);
    save();
    document.getElementById('spotify-picker-overlay').classList.add('hidden');
    renderPlaylist();
    alert(`✅ ${newSongs.length} chanson${newSongs.length>1?'s':''} importée${newSongs.length>1?'s':''} !`);
  } catch(e) { alert('Erreur : ' + e.message); }
  if (btn) { btn.disabled=false; btn.textContent='Importer'; }
}

renderPlaylist();
updateDashboard();

// Détection du callback Spotify (avant Firebase auth)
(function() {
  const _p = new URLSearchParams(window.location.search);
  if (_p.has('code') && localStorage.getItem('spotify_verifier')) {
    window._spotifyCode = _p.get('code');
    window.history.replaceState({}, '', window.location.pathname);
  }
})();
