import {
    Stack,
    Text,
    Slider,
    Button,
    Tooltip,
    Space,
    Transition,
    Image,
} from "@mantine/core";
import { useBeatdrop } from "@/hooks";
import ConfettiExplosion from "react-confetti-explosion";
import { useEffect, useState } from "react";
import { IconCircleCheck } from "@tabler/icons-react";
import { useReward } from "react-rewards";
import { AnonymousForm } from "@/components/birtdayEvent/AnonymousForm";
import { UndertaleTextBox } from "@/components/UndertaleTextBox";

export default function BirthDayPlace() {
    const { timer, volume, setVolume, err, beatDidDrop, isPlaying, canvasRef } =
        useBeatdrop({
            audioSrc: "/musics/strobe.mp3",
            beatDropPosition: 6 * 60 + 47,
            // beatDropOn: new Date(Date.now() + 1.1 * 6 * 1000),
            beatDropOn: import.meta.env.DEV
                ? new Date(Date.now() + 0.1 * 60 * 1000 - 9000)
                : new Date("2025-04-11"),
        });

    const [tooltipOpened, setTooltipOpened] = useState(false);
    const isSongEnded = beatDidDrop && !isPlaying;
    const { reward: reward2 } = useReward("Confetti1", "balloons");
    const { reward: reward1 } = useReward("Confetti2", "balloons");

    useEffect(() => {
        if (beatDidDrop) {
            reward2();
            reward1();
        }
    }, [beatDidDrop]);

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
                    <span
                        style={{
                            display: isSongEnded ? "hidden" : "block",
                            ...styles,
                        }}
                    >
                        <UndertaleTextBox
                            sprite={
                                <Image src="/images/sprites/I_dont_know_this_guy_bruh.png" />
                            }
                        >
                            Now I'm 19 years old and I've already wasted my
                            entire life. :)
                        </UndertaleTextBox>
                    </span>
                )}
            </Transition>

            {!beatDidDrop && (
                <>
                    <Text fz="h2" ta={"center"} c="grape">
                        {timer}
                    </Text>
                </>
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
                    {/*rest of the text will go here*/}
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
