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

export default function NewsLetterForm() {
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
          <div className="grid grid-cols-1 gap-3">
            <Input
              placeholder={t("form-email-placeholder")}
              inputClassName="w-full text-base"
              size="xl"
              rounded="pill"
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="w-full text-base font-medium"
              size="xl"
              rounded="pill"
            >
              {t("form-subscribe")}
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
