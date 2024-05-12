import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
        projectId: "m1wlz9v9",
        dataset: "production",
        useCdn: true,
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
