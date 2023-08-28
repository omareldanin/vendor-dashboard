import * as z from "zod";

export const loginFormSchema = z.object({
    phoneNumber: z
        .string()
        .min(2, {
            message: "اسم المستخدم يجب ان يكون اكثر من حرفين",
        })
        .max(50, {
            message: "اسم المستخدم يجب ان يكون اقل من 50 حرف",
        }),
    password: z
        .string()
        .min(6, {
            message: "كلمة المرور يجب ان تكون اكثر من 6 حروف",
        })
        .max(50, {
            message: "كلمة المرور يجب ان تكون اقل من 50 حرف",
        }),
});
