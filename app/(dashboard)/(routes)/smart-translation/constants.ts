import * as z from 'zod';

export const formSchema = z.object({
    prompt: z.string().min(1,
        { message: 'Prompt is required' }
    ),
    language: z.string().min(1),

});

export const languagesOptions = [
    {
        value: "Italian",
        label: "Italian",
    },
    {
        value: "English",
        label: "English",
    },
    {
        value: "Spanish",
        label: "Spanish",
    },
    {
        value: "French",
        label: "French",
    },
    {
        value: "Portuguese",
        label: "Portuguese",
    },
    {
        value: "German",
        label: "German",
    },
    {
        value: "Russian",
        label: "Russian",
    },
]


