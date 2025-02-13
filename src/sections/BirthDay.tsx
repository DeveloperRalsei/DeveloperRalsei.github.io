import {
    Stack,
    Text,
    Slider,
    Button,
    Tooltip,
    Space,
    Title,
    Transition,
} from "@mantine/core";
import { useBeatdrop } from "@/hooks";
import ConfettiExplosion from "react-confetti-explosion";
import { useEffect, useState } from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { useHotkeys } from "@mantine/hooks";
import { useReward } from "react-rewards";
import { AnonymousForm } from "@/components/birtdayEvent/AnonymousForm";
import { IS_BIRTHDAY_EVENT_ACTIVE } from "@/data/constants";
import { Navigate } from "react-router-dom";

export default function BirthDayPlace() {
    const { timer, volume, setVolume, err, beatDidDrop, isPlaying, canvasRef } =
        useBeatdrop({
            audioSrc: "/musics/strobe.mp3",
            beatDropPosition: 6 * 60 + 47.4,
            beatDropOn: import.meta.env.DEV
                ? new Date(Date.now() + 0.1 * 60 * 1000)
                : new Date("2025-04-11"),
        });

    const [tooltipOpened, setTooltipOpened] = useState(false);
    const isSongEnded = beatDidDrop && !isPlaying;
    const [isTurkish, setIsTurkish] = useState(true);
    const { reward: reward2 } = useReward("Confetti1", "balloons");
    const { reward: reward1 } = useReward("Confetti2", "balloons");

    useEffect(() => {
        if (beatDidDrop) {
            reward2();
            reward1();
        }
    }, [beatDidDrop]);

    useHotkeys([["T", () => setIsTurkish((prev) => !prev)]]);

    if (!import.meta.env.DEV && !IS_BIRTHDAY_EVENT_ACTIVE)
        return "HEHEHE \n Check back later :)";
    return (
        <Stack w={"100%"} h="100%" align="center">
            {!beatDidDrop && !isPlaying && !err && (
                <Text>
                    come back when timer has 7 mins left for something fun
                </Text>
            )}

            <Transition
                mounted={beatDidDrop}
                transition="slide-down"
                duration={700}
                timingFunction="ease"
            >
                {(styles) => (
                    <span style={styles}>
                        <Text fz="h2" ta="center" className="rainbowText">
                            HAPPY BIRTHDAY TO ME
                        </Text>
                    </span>
                )}
            </Transition>
            {!beatDidDrop && (
                <>
                    <Text fz="h2" ta={"center"}>
                        {timer}
                    </Text>
                </>
            )}

            {isSongEnded && (
                <Text c="dimmed">("You can press 'T' to toggle English")</Text>
            )}

            {err && (
                <Text c="yellow" fw={"bolder"}>
                    Please press anywhere
                </Text>
            )}

            {isPlaying && (
                <>
                    <Tooltip
                        label="Cmon~ You can listen it from here too 🥺️"
                        multiline
                        opened={tooltipOpened}
                    >
                        <Text fz={"lg"}>
                            Now playing{" "}
                            <Button
                                onClick={() =>
                                    setTooltipOpened((prev) => !prev)
                                }
                                fz={"lg"}
                                size="compact-sm"
                                variant="subtle"
                            >
                                Strobe - deadmau5
                            </Button>
                        </Text>
                    </Tooltip>
                    <Slider
                        min={0}
                        max={1}
                        step={0.05}
                        w={200}
                        onChange={setVolume}
                        value={volume}
                    />
                    {volume == 0 &&
                        "Are you really muting my birthday event :("}
                    <Space h={30} />
                    <Text ta="center" c="green">
                        <Stack gap={3} align="center">
                            <IconCircleCheck />
                            Please plug in your headphones for a better audio
                            experience
                        </Stack>
                    </Text>
                </>
            )}

            {beatDidDrop && (
                <ConfettiExplosion
                    particleCount={250}
                    duration={8000}
                    force={1}
                    zIndex={9999}
                    width={2400}
                    height={"150vh"}
                />
            )}

            {isSongEnded && (
                <>
                    {isTurkish ? (
                        <Text fz={20}>
                            <Text c="dimmed" ta="center">
                                Pekala! Eğer benim gibi kıçı koca olduğu için
                                bir türlü sandalyesinde kalkmayacak kadar tembel
                                değilsen :) <br />
                                ChatGPT'den arakladığım bu mesajı okuyabilirsin{" "}
                                {"<3"}
                            </Text>
                            <br />
                            <br />
                            <Title ta={"center"} order={3}>
                                🎉 Teşekkürler! 🎉
                            </Title>
                            Vay be, gerçekten buraya kadar geldin! Şu an bu
                            satırları okuyorsan, benim için gerçekten özel bir
                            anın parçası oldun. Zamanını ayırıp bu küçük
                            kutlamaya katıldığın için içtenlikle teşekkür
                            ederim.
                            <br /> <br />
                            Bugün benim doğum günüm. Her yıl sadece bir kez
                            yaşanan, ama her seferinde farklı hissettiren özel
                            bir gün. Dışarıdan bakınca belki sadece takvimde
                            ilerleyen bir sayı gibi görünüyor, ama benim için
                            çok daha fazlası. Bugün, geçmişin anılarıyla,
                            geleceğin hayalleriyle ve şu anın güzelliğiyle dolu
                            bir gün.
                            <br /> <br />
                            Eğer buraya kadar kaldıysan, demek ki sen de müziği
                            dinledin, o ritmi hissettin, belki hafifçe başını
                            salladın ya da ekrana gülümseyerek baktın. İşte tam
                            olarak bunu istiyordum! Beni yalnız bırakmadığın, bu
                            anı benimle paylaştığın için gerçekten minnettarım.
                            🎶
                            <br /> <br />
                            Hayat tıpkı bir şarkı gibi… Bazı kısımları yavaş,
                            bazı kısımları hızlı; bazen huzurlu, bazen kaotik.
                            Ama en önemlisi, her anı hissetmek, keyfini çıkarmak
                            ve sonunda dönüp baktığında “Bu yolculuk harikaydı”
                            diyebilmek. Bugün, bu an, benim için işte tam olarak
                            öyle bir şeydi.
                            <br /> <br />
                            Bu yüzden buradaysan, okuduysan, belki de bir
                            tebessüm ettiysen… Teşekkür ederim. Gerçekten. 😺
                            <br /> <br />
                            🎂 Doğum günümü kutladığın için, bu anı paylaştığın
                            için ve en önemlisi, buraya kadar okuduğun için
                            teşekkürler! 🎂
                            <br /> <br />
                            Hadi ama, şimdiye kadar beklediysen, neden bir
                            sonraki doğum günüme kadar da beklemeyesin? 😸
                            Seneye aynı yerde, aynı eğlenceyle, belki de daha
                            büyük bir sürprizle görüşmek üzere! 🎊
                            <br /> <br />
                            💜 Sen harikasın! 💜
                        </Text>
                    ) : (
                        <Text fz={20}>
                            <Text c="dimmed" ta="center">
                                Okay! If you're not a lazy ass person just like
                                me :) <br />
                                You can start read the letter I stole from chat
                                gpt {" <3"}
                            </Text>
                            <br />
                            <br />
                            <Title order={3} ta={"center"}>
                                🎉 Thank You! 🎉
                            </Title>
                            Wow, you actually made it to the end! If you're
                            reading this right now, that means you've been a
                            part of this special moment for me. Thank you from
                            the bottom of my heart for taking the time to join
                            this little celebration. <br /> <br />
                            Today is my birthday. A day that happens only once a
                            year, yet feels different every time. From the
                            outside, it might seem like just another number on
                            the calendar, but to me, it's so much more. Today is
                            a day filled with memories of the past, dreams of
                            the future, and the beauty of the present. <br />{" "}
                            <br />
                            If you stayed until now, it means you listened to
                            the music, felt the rhythm, maybe nodded your head a
                            little, or smiled at the screen. And that's exactly
                            what I was hoping for! Thank you for being here, for
                            sharing this moment with me. 🎶
                            <br /> <br />
                            Life is just like a song… Some parts are slow, some
                            are fast; sometimes peaceful, sometimes chaotic. But
                            the most important thing is to feel every moment,
                            enjoy the ride, and when you look back, be able to
                            say, “That was an amazing journey.”
                            <br /> <br />
                            So if you're still here, if you’ve read this far, if
                            maybe you even smiled… Thank you. Truly. 😺
                            <br /> <br />
                            🎂 Thank you for celebrating my birthday, for being
                            part of this moment, and most of all, for reading
                            all of this! 🎂
                            <br /> <br />
                            Come on, if you've waited this long, why not wait
                            until my next birthday too? 😸 Same place, same fun,
                            maybe even bigger surprises next year! 🎊
                            <br /> <br />
                            💜 You're amazing! 💜
                        </Text>
                    )}
                    <AnonymousForm />
                </>
            )}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100vw",
                    height: 150,
                    display: isPlaying ? "block" : "none",
                }}
            />
        </Stack>
    );
}
