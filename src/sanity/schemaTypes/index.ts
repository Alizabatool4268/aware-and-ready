import { type SchemaTypeDefinition } from 'sanity';
import postType from './blogPostType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType],
}
