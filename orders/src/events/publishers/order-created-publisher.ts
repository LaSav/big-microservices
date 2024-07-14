import { Publisher, OrderCreatedEvent, Subjects } from '@sltickets1/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
