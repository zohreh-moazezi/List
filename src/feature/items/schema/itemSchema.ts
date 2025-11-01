import { z } from "zod";

export const schema = z.object({
  title: z.string().nonempty("Please Add Title").max(100),
  subTitle: z.string().nonempty("Please Add Subtitle").max(200),
});
export type FormData = z.infer<typeof schema>;
