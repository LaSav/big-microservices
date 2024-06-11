import { Publisher, Subjects, TicketCreatedEvent } from '@sltickets1/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
