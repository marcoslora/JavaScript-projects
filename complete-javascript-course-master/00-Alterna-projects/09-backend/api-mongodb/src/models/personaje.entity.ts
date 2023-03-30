import { Schema, model } from 'mongoose';

const PersonajeSchema = new Schema({
  name: { type: String, required: true },
  alte: { type: String, required: true },
  role: { type: String, required: true },
  id: { type: Number },
});

export const personajeModel = model('Personaje', PersonajeSchema);
