export interface SponsorPack {
  id: "jaumont" | "bergamote" | "stanislas" | "venue";
  name: string;
  price: number;
  places: number;
  messages: number;
  tables: number;
  logo: boolean;
  talk: boolean;
  isSpecial?: boolean; // Indicateur pour les packs qui ne sont pas des offres standard
}

export interface Sponsor {
  id: string;
  name: string;
  description?: string;
  website: string;
  logoPath?: string; // Chemin optionnel pour des cas particuliers
  packId: string;
  isHost?: boolean; // Indicateur pour le lieu d'accueil
}

// Packs de sponsoring disponibles
export const sponsorPacks = [
  {
    id: "jaumont",
    name: "Jaumont",
    price: 600,
    places: 0,
    messages: 3,
    tables: 0,
    logo: true,
    talk: false,
  },
  {
    id: "bergamote",
    name: "Bergamote",
    price: 1800,
    places: 3,
    messages: 4,
    tables: 1,
    logo: true,
    talk: false,
  },
  {
    id: "stanislas",
    name: "Stanislas",
    price: 4500,
    places: 5,
    messages: 6,
    tables: 2,
    logo: true,
    talk: true,
  },
  {
    id: "venue",
    name: "hébergement",
    price: 0,
    places: 2,
    messages: 0,
    tables: 0,
    logo: true,
    talk: false,
    isSpecial: true,
  },
] satisfies Array<SponsorPack>;

// Liste des sponsors
export const sponsors: Array<Sponsor> = [];

// Fonctions utilitaires
export function getSponsorsByPackId(packId: string): Sponsor[] {
  return sponsors.filter((sponsor) => sponsor.packId === packId);
}

export function getPackById(packId: string): SponsorPack | undefined {
  return sponsorPacks.find((pack) => pack.id === packId);
}

export function getStandardPacks(): SponsorPack[] {
  return sponsorPacks.filter((pack) => !pack.isSpecial);
}

// Fonction utilitaire pour obtenir le chemin du logo
export function getSponsorLogoPath(sponsor: Sponsor): string {
  // Si un chemin personnalisé est défini, l'utiliser
  if (sponsor.logoPath) {
    return sponsor.logoPath;
  }

  // Essayer d'abord avec .png
  return `/img/sponsors/${sponsor.id}.png`;
}
