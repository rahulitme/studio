'use server';
/**
 * @fileOverview Generates a project cover image using AI.
 *
 * - generateProjectImage - A function that generates an image for a project.
 * - GenerateProjectImageInput - The input type for the generateProjectImage function.
 * - GenerateProjectImageOutput - The return type for the generateProjectImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectImageInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  keywords: z.string().describe('Keywords describing the project (e.g., "dashboard data", "fashion mobile").'),
});
export type GenerateProjectImageInput = z.infer<typeof GenerateProjectImageInputSchema>;

const GenerateProjectImageOutputSchema = z.object({
  imageDataUri: z.string().describe("The generated image as a data URI. Expected format: 'data:image/png;base64,<encoded_data>'."),
});
export type GenerateProjectImageOutput = z.infer<typeof GenerateProjectImageOutputSchema>;

export async function generateProjectImage(
  input: GenerateProjectImageInput
): Promise<GenerateProjectImageOutput> {
  return generateProjectImageFlow(input);
}

const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: GenerateProjectImageInputSchema,
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: `Generate an abstract, visually appealing cover image for a software project titled "${input.projectTitle}". The project is related to: ${input.keywords}. The image should be suitable for a developer portfolio. Aim for a modern, tech-inspired aesthetic. Avoid text in the image. Aspect ratio should be 600x400.`,
      config: {
        responseModalities: ['IMAGE', 'TEXT'],
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed or returned no media.');
    }

    return { imageDataUri: media.url };
  }
);

// Set the GEMINI_API_KEY environment variable
process.env.GEMINI_API_KEY = "AIzaSyCjW9hBbQ2T5tAhmdiszxlyIgwPxfOtFLI";
