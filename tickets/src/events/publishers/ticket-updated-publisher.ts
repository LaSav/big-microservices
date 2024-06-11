import { Publisher, Subjects, TicketUpdatedEvent } from '@sltickets1/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
