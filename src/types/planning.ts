export type EventType = 'talk' | 'keynote' | 'break' | 'lunch' | 'opening' | 'closing';

export interface Event {
  id: string;
  title: string;
  type: EventType;
  startTime: string;
  endTime: string;
  abstract?: string;
  shortDescription?: string;
  speakerId?: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio?: string;
  company?: string;
  photoUrl?: string;
}
