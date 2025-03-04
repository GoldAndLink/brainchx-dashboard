"use client";

import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Button, Input } from "rizzui";
import { Form } from "@core/ui/form";
import { NewsLetterFormSchema, newsLetterFormSchema } from "@/validators/newsletter.schema";
import { useTranslations } from "next-intl";

const initialValues = {
  email: "",
};

export default function NewsLetterForm({ className }: { className?: string }) {
  const t = useTranslations("form");
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<NewsLetterFormSchema> = (data) => {
    console.log(data);
    setReset(initialValues);
  };
  return (
    <>
      <Form<NewsLetterFormSchema>
        validationSchema={newsLetterFormSchema(t)}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="w-full @[710px]:max-w-[640px]">
            <Input
              placeholder={t("form-email-placeholder")}
              inputClassName="w-full text-base"
              size="xl"
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="mt-3 w-full text-base font-medium"
              size="xl"
            >
              {t("form-subscribe")}
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
