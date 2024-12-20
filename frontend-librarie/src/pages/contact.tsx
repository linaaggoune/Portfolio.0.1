import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form";
import {Input, Textarea} from "@nextui-org/input";
import { FormEvent, useState } from "react";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(null);
  const [message, setMessage] = useState("");
  const [longMessage, setLongMessage] = useState("");

  const maxWords = 100;

  // Fonction pour compter les mots
  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  // Fonction pour gérer le changement du message
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const wordCount = countWords(value);

    // Limiter à 50 mots
    if (wordCount <= maxWords) {
      setMessage(value);
    } else {
      const words = value.trim().split(/\s+/).slice(0, maxWords).join(" ");

      setMessage(words);
    }
  };

  const onSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setSubmitted(data);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Me contacter</h1>
        </div>
        <Form
          className="w-full max-w-xs flex flex-col items-center justify-center "
          validationBehavior="native"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-8 pb-8">
            <Input isRequired label="Nom" name="nom" type="text" />
            <Input
              isRequired
              errorMessage="Merci de noter une adresse mail valide"
              label="Email"
              name="email"
              type="email"
            />
            <Input label="Société" name="socity" type="text" />
            <Textarea
              isRequired
              label="Message (max 100 mots)"
              name="message"
              placeholder="Entrez votre message..."
              rows={4}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <Button
              size="lg"
              color="secondary"
              type="submit"
              variant="ghost">
            Envoyer
          </Button>
          {submitted && (
            <div className="text-small text-default-500">
              Merci pour votre message
            </div>
          )}
        </Form>
      </section>
    </DefaultLayout>
  );
}
