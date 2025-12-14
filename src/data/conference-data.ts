export interface Speaker {
  id: string;
  name: string;
  bio?: string;
  company?: string;
  title?: string;
  avatarUrl?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
    bluesky?: string;
  };
}

export type EventType =
  | "talk"
  | "keynote"
  | "break"
  | "lunch"
  | "opening"
  | "closing";

export interface Talk {
  id: string;
  title: string;
  abstract: string;
  shortDescription?: string;
  speakerId?: string; // Optional car les pauses n'ont pas de speaker
  startTime?: string;
  endTime?: string;
  day?: "morning" | "afternoon";
  track?: string;
  order?: number;
  type: EventType;
}

// Les données des speakers
export const speakers: Array<Speaker> = [];

// Les données de tous les événements (talks et autres)
export const talks: Array<Talk> = [];

// Fonction utilitaire pour récupérer un speaker à partir d'un speakerId
export function getSpeakerById(id: string | undefined): Speaker | undefined {
  if (!id) return undefined;
  return speakers.find((speaker) => speaker.id === id);
}

// Fonction utilitaire pour récupérer un talk à partir d'un talkId
export function getTalkById(id: string): Talk | undefined {
  return talks.find((talk) => talk.id === id);
}

// Fonction utilitaire pour récupérer tous les talks d'un speaker
export function getTalksBySpeakerId(speakerId: string): Talk[] {
  return talks.filter((talk) => talk.speakerId === speakerId);
}

// Fonction helper pour convertir l'heure format "HH:MM" en minutes
function parseTimeToMinutes(time: string): number {
  const parts = time.split(":").map(Number);
  const hours = parts[0] || 0;
  const minutes = parts[1] || 0;
  return hours * 60 + minutes;
}

/**
 * Récupère tous les événements de la journée, triés chronologiquement
 * @param eventTypes Types d'événements à récupérer (optionnel)
 */
export function getAllEvents(eventTypes?: EventType[]): Talk[] {
  let filteredEvents = [...talks];

  // Si des types d'événements sont spécifiés, on filtre
  if (eventTypes && eventTypes.length > 0) {
    filteredEvents = filteredEvents.filter((event) =>
      eventTypes.includes(event.type)
    );
  }

  // Tri par heure de début
  return filteredEvents.sort((a, b) => {
    // Convertir les temps en minutes pour permettre la comparaison
    const timeA = a.startTime ? parseTimeToMinutes(a.startTime) : 0;
    const timeB = b.startTime ? parseTimeToMinutes(b.startTime) : 0;

    return timeA - timeB;
  });
}

// Fonction pour récupérer uniquement les talks (pour la page speakers)
export function getAllTalks(): Talk[] {
  return talks.filter((talk) => talk.type === "talk");
}

// Fonction pour récupérer l'URL d'un talk avec son ancre
export function getTalkUrl(talkId: string): string {
  return `/planning#talk-${talkId}`;
}

// Fonction pour obtenir l'URL du speaker
export function getSpeakerUrl(speakerId: string): string {
  return `/speakers#speaker-${speakerId}`;
}
