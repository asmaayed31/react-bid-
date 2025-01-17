export class CreateItemDto {
    title: string;
    content: string;
    state: 'draft' | 'published';
  }