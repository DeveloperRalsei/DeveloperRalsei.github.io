import { Button, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { FormEvent, useState } from "react";

export const AnonymousForm = () => {
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://birthday-bot-h16h.onrender.com";

    setLoading(true);
    try {
      const res = await fetch(`${url}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          from,
        }),
      });

      if (!res.ok) {
        showNotification({
          color: "red",
          message: "NOOOO! Something went wrong 😢, Please try again, PLEASSE!",
        });
        return;
      }

      showNotification({
        message:
          "Yay! :3, I promise I'll read your message, Thank you so much <3",
      });
    } catch (error) {
      showNotification({
        color: "red",
        message: "NOOOO! Something went wrong 😢, Please try again, PLEASSE!",
      });
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Title order={3} ta="center">
          Anonymous Message
        </Title>

        <Textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
          label="Write an anonymous (or not) message for me <3 So I'll be very greatful"
        >
          {" "}
        </Textarea>

        <TextInput
          onChange={(e) => setFrom(e.currentTarget.value)}
          value={from}
          label={
            <>
              <Text span>From?</Text>
              <Text span c="dimmed">
                {" "}
                (optional)
              </Text>
            </>
          }
        />

        <Button loading={loading} fullWidth type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};
