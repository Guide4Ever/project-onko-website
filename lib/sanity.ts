import {createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
